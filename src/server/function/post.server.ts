import { createHash, randomBytes } from "node:crypto";
import { eq, inArray } from "drizzle-orm";
import { db } from "#/server/db";
import { sendDailyUpdateApprovalEmail } from "#/server/function/daily-update-approval.server";
import type { CreatePostInput } from "#/server/function/post-schema.server";
import type { AuthSession } from "#/server/middleware";
import {
	blogCategoryTable,
	blogPostTable,
	blogPostTagTable,
	blogTagTable,
} from "#/server/schema";
import { generateExcerpt, generateMetaTitle, slugify } from "#/server/utils";

type DbTransaction = Parameters<Parameters<typeof db.transaction>[0]>[0];

type CreatePostHandlerContext = {
	data: CreatePostInput;
	context: { session: AuthSession | null };
};

async function generateUniqueSlug(
	tx: DbTransaction,
	title: string,
): Promise<string> {
	const base = slugify(title) || "post";

	const [existing] = await tx
		.select({ id: blogPostTable.id })
		.from(blogPostTable)
		.where(eq(blogPostTable.slug, base))
		.limit(1);

	if (!existing) {
		return base;
	}

	return `${base}-${crypto.randomUUID().slice(0, 8)}`;
}

async function resolveCategoryId(
	tx: DbTransaction,
	category: string,
): Promise<string | null> {
	const name = category.trim();
	if (!name) {
		return null;
	}

	const slug = slugify(name);
	const [existing] = await tx
		.select({ id: blogCategoryTable.id })
		.from(blogCategoryTable)
		.where(eq(blogCategoryTable.slug, slug))
		.limit(1);

	if (existing) {
		return existing.id;
	}

	const [created] = await tx
		.insert(blogCategoryTable)
		.values({ name, slug })
		.returning({ id: blogCategoryTable.id });

	return created.id;
}

async function resolveTagIds(
	tx: DbTransaction,
	tags: string[] | undefined,
): Promise<string[]> {
	if (!tags?.length) {
		return [];
	}

	const slugToName = new Map<string, string>();

	for (const tagName of tags) {
		const name = tagName.trim();
		if (!name) {
			continue;
		}

		const slug = slugify(name);
		slugToName.set(slug, name);
	}

	const slugs = [...slugToName.keys()];
	if (slugs.length === 0) {
		return [];
	}

	const existing = await tx
		.select({ id: blogTagTable.id, slug: blogTagTable.slug })
		.from(blogTagTable)
		.where(inArray(blogTagTable.slug, slugs));

	const slugToId = new Map(existing.map((row) => [row.slug, row.id]));

	const missing = slugs
		.filter((slug) => !slugToId.has(slug))
		.flatMap((slug) => {
			const name = slugToName.get(slug);
			return name ? [{ name, slug }] : [];
		});

	if (missing.length > 0) {
		const created = await tx
			.insert(blogTagTable)
			.values(missing)
			.returning({ id: blogTagTable.id, slug: blogTagTable.slug });

		for (const row of created) {
			slugToId.set(row.slug, row.id);
		}
	}

	return slugs.flatMap((slug) => {
		const id = slugToId.get(slug);
		return id ? [id] : [];
	});
}

export async function handleCreatePost(ctx: CreatePostHandlerContext) {
	const { data, context } = ctx;
	const postType = data.type ?? "ranthambhore_update";

	if (postType !== "daily_update" && !context.session) {
		throw new Error("Unauthorized");
	}

	const isDailyUpdate = postType === "daily_update";
	const submitterName = isDailyUpdate ? data.submitterName : undefined;
	const submitterEmail = isDailyUpdate ? data.submitterEmail : undefined;
	const status = isDailyUpdate ? "draft" : (data.status ?? "draft");
	const publishedAt = status === "published" ? new Date() : null;
	const excerpt = generateExcerpt(data.content);
	const metaTitle = generateMetaTitle(data.title);
	const authorId = context.session?.user.id ?? null;
	const approvalToken = isDailyUpdate ? randomBytes(32).toString("hex") : null;
	const approvalTokenExpiresAt = approvalToken
		? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
		: null;

	const post = await db.transaction(async (tx) => {
		const category = data.category?.trim();
		const zoneId = data.zoneId?.trim() || null;

		const [slug, categoryId, tagIds] = await Promise.all([
			generateUniqueSlug(tx, data.title),
			category ? resolveCategoryId(tx, category) : Promise.resolve(null),
			resolveTagIds(tx, data.tags),
		]);

		const [createdPost] = await tx
			.insert(blogPostTable)
			.values({
				title: data.title.trim(),
				slug,
				content: data.content.trim(),
				excerpt,
				coverImage: data.coverImage?.trim() || null,
				status,
				type: data.type ?? "ranthambhore_update",
				publishedAt,
				approvalTokenHash: approvalToken
					? createHash("sha256").update(approvalToken).digest("hex")
					: null,
				approvalTokenExpiresAt,
				submitterName: submitterName ?? null,
				submitterEmail: submitterEmail ?? null,
				metaTitle,
				metaDescription: data.metaDescription?.trim() || null,
				authorId,
				categoryId,
				zoneId,
				spottedDate: data.spottedDate ?? null,
			})
			.returning();

		if (tagIds.length > 0) {
			await tx.insert(blogPostTagTable).values(
				tagIds.map((tagId) => ({
					postId: createdPost.id,
					tagId,
				})),
			);
		}

		return createdPost;
	});

	if (approvalToken && approvalTokenExpiresAt) {
		try {
			await sendDailyUpdateApprovalEmail({
				post,
				approvalToken,
				zoneId: data.zoneId ?? null,
				submitterName,
				submitterEmail,
			});
		} catch (error) {
			throw new Error(
				"The update was saved for review, but the approval email could not be sent. Please contact the site administrator; do not submit it again.",
				{ cause: error },
			);
		}
	}

	const {
		approvalTokenHash: _approvalTokenHash,
		approvalTokenExpiresAt: _approvalTokenExpiresAt,
		submitterName: _submitterName,
		submitterEmail: _submitterEmail,
		...clientPost
	} = post;
	return clientPost;
}
