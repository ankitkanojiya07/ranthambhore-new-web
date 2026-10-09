import { and, eq, gte, ilike, inArray, lte, or } from "drizzle-orm";
import { db } from "#/server/db";
import type {
	GetPostInput,
	ListPostsInput,
} from "#/server/function/get-posts-schema";
import {
	blogCategoryTable,
	blogPostTable,
	blogPostTagTable,
	blogTagTable,
} from "#/server/schema";

type PostListWhere = NonNullable<
	Parameters<typeof db.query.blogPostTable.findMany>[0]
>["where"];

function buildPostListWhere(input: ListPostsInput): PostListWhere {
	return {
		status: input.status,
		...(input.type ? { type: input.type } : {}),
		...(input.zoneId ? { zoneId: input.zoneId } : {}),
		...(input.categorySlug ? { category: { slug: input.categorySlug } } : {}),
		...(input.tagSlug ? { postTags: { tag: { slug: input.tagSlug } } } : {}),
		...(input.search
			? {
					OR: [
						{ title: { ilike: `%${input.search}%` } },
						{ excerpt: { ilike: `%${input.search}%` } },
					],
				}
			: {}),
		...(input.spottedDateFrom || input.spottedDateTo
			? {
					spottedDate: {
						...(input.spottedDateFrom ? { gte: input.spottedDateFrom } : {}),
						...(input.spottedDateTo ? { lte: input.spottedDateTo } : {}),
					},
				}
			: {}),
	};
}

function buildPostCountFilters(input: ListPostsInput) {
	const conditions = [eq(blogPostTable.status, input.status)];

	if (input.type) {
		conditions.push(eq(blogPostTable.type, input.type));
	}

	if (input.zoneId) {
		conditions.push(eq(blogPostTable.zoneId, input.zoneId));
	}

	if (input.categorySlug) {
		const categoryIds = db
			.select({ id: blogCategoryTable.id })
			.from(blogCategoryTable)
			.where(eq(blogCategoryTable.slug, input.categorySlug));

		conditions.push(inArray(blogPostTable.categoryId, categoryIds));
	}

	if (input.tagSlug) {
		const tagPostIds = db
			.select({ postId: blogPostTagTable.postId })
			.from(blogPostTagTable)
			.innerJoin(blogTagTable, eq(blogPostTagTable.tagId, blogTagTable.id))
			.where(eq(blogTagTable.slug, input.tagSlug));

		conditions.push(inArray(blogPostTable.id, tagPostIds));
	}

	if (input.search) {
		const term = `%${input.search}%`;
		conditions.push(
			or(
				ilike(blogPostTable.title, term),
				ilike(blogPostTable.excerpt, term),
			) as ReturnType<typeof eq>,
		);
	}

	if (input.spottedDateFrom) {
		conditions.push(gte(blogPostTable.spottedDate, input.spottedDateFrom));
	}

	if (input.spottedDateTo) {
		conditions.push(lte(blogPostTable.spottedDate, input.spottedDateTo));
	}

	return and(...conditions);
}

function mapCategory<T extends { id: string | null }>(category: T | null) {
	return category?.id ? category : null;
}

function mapZone<T extends { id: string | null }>(zone: T | null) {
	return zone?.id ? zone : null;
}

function mapTags(
	postTags: { tag: { id: string; name: string; slug: string } | null }[],
) {
	return postTags
		.map((postTag) => postTag.tag)
		.filter((tag): tag is NonNullable<typeof tag> => tag !== null)
		.sort((a, b) => a.name.localeCompare(b.name));
}

export async function handleGetPosts({ data }: { data: ListPostsInput }) {
	const { page, limit } = data;
	const offset = (page - 1) * limit;
	const where = buildPostListWhere(data);
	const countFilters = buildPostCountFilters(data);

	const [posts, total] = await Promise.all([
		db.query.blogPostTable.findMany({
			where,
			columns: {
				id: true,
				title: true,
				slug: true,
				excerpt: true,
				coverImage: true,
				status: true,
				type: true,
				publishedAt: true,
				spottedDate: true,
				createdAt: true,
			},
			with: {
				category: {
					columns: { id: true, name: true, slug: true },
				},
				zone: {
					columns: { id: true, name: true, number: true },
				},
				postTags: {
					columns: {},
					with: {
						tag: {
							columns: { id: true, name: true, slug: true },
						},
					},
				},
			},
			orderBy: { [data.sortBy]: data.sortOrder },
			limit,
			offset,
		}),
		db.$count(blogPostTable, countFilters),
	]);

	return {
		data: posts.map((post) => {
			const { postTags, ...postFields } = post;
			return {
				...postFields,
				category: mapCategory(post.category),
				zone: mapZone(post.zone),
				tags: mapTags(postTags),
			};
		}),
		total,
		page,
		limit,
		totalPages: Math.ceil(total / limit),
	};
}

export async function handleGetPost({ data }: { data: GetPostInput }) {
	const post = await db.query.blogPostTable.findFirst({
		where: { slug: data.slug, status: "published" },
		with: {
			category: {
				columns: { id: true, name: true, slug: true },
			},
			zone: {
				columns: { id: true, name: true, number: true, slug: true },
			},
			postTags: {
				columns: {},
				with: {
					tag: {
						columns: { id: true, name: true, slug: true },
					},
				},
			},
		},
	});

	if (!post) {
		throw new Error("Post not found");
	}

	const { postTags, ...postFields } = post;
	const {
		submitterName: _submitterName,
		submitterEmail: _submitterEmail,
		approvalTokenHash: _approvalTokenHash,
		approvalTokenExpiresAt: _approvalTokenExpiresAt,
		...publicPostFields
	} = postFields;

	return {
		...publicPostFields,
		category: mapCategory(post.category),
		zone: mapZone(post.zone),
		tags: mapTags(postTags),
	};
}

export async function handleGetTags() {
	return db.query.blogTagTable.findMany({
		orderBy: { name: "asc" },
	});
}

export async function handleGetCategories() {
	return db.query.blogCategoryTable.findMany({
		orderBy: { name: "asc" },
	});
}

export async function handleGetZones() {
	return db.query.blogZoneTable.findMany({
		orderBy: { number: "asc" },
	});
}
