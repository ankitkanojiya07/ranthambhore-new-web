import { index, pgEnum, pgTable } from "drizzle-orm/pg-core";
import { blogCategoryTable } from "./blog-category-table";
import { blogZoneTable } from "./blog-zone-table";
import { id } from "./columns";
import { userTable } from "./user-table";

export const blogPostStatusEnum = pgEnum("blog_post_status", [
	"draft",
	"published",
	"archived",
]);

export const blogPostTypeEnum = pgEnum("blog_post_type", [
	"daily_update",
	"ranthambhore_update",
]);

export const blogPostTable = pgTable(
	"blog_post",
	(t) => ({
		id,
		title: t.text("title").notNull(),
		slug: t.text("slug").notNull().unique(),
		excerpt: t.text("excerpt"),
		content: t.text("content").notNull(),
		coverImage: t.text("cover_image"),
		status: blogPostStatusEnum("status").default("draft").notNull(),
		type: blogPostTypeEnum("type").default("ranthambhore_update").notNull(),
		publishedAt: t.timestamp("published_at"),
		approvalTokenHash: t.text("approval_token_hash"),
		approvalTokenExpiresAt: t.timestamp("approval_token_expires_at"),
		submitterName: t.text("submitter_name"),
		submitterEmail: t.text("submitter_email"),
		metaTitle: t.text("meta_title"),
		metaDescription: t.text("meta_description"),
		authorId: t
			.text("author_id")
			.references(() => userTable.id, { onDelete: "set null" }),
		categoryId: t
			.uuid("category_id")
			.references(() => blogCategoryTable.id, { onDelete: "set null" }),
		zoneId: t
			.text("zone_id")
			.references(() => blogZoneTable.id, { onDelete: "set null" }),
		spottedDate: t.date("spotted_date", { mode: "date" }),
		createdAt: t.timestamp("created_at").defaultNow().notNull(),
		updatedAt: t
			.timestamp("updated_at")
			.defaultNow()
			.$onUpdate(() => /* @__PURE__ */ new Date())
			.notNull(),
	}),
	(table) => [
		index("blog_post_slug_idx").on(table.slug),
		index("blog_post_authorId_idx").on(table.authorId),
		index("blog_post_categoryId_idx").on(table.categoryId),
		index("blog_post_zoneId_idx").on(table.zoneId),
		index("blog_post_status_idx").on(table.status),
		index("blog_post_type_idx").on(table.type),
		index("blog_post_publishedAt_idx").on(table.publishedAt),
		index("blog_post_spottedDate_idx").on(table.spottedDate),
	],
);
