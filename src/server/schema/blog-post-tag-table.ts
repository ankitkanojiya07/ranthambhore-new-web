import { index, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { blogPostTable } from "./blog-post-table";
import { blogTagTable } from "./blog-tag-table";

export const blogPostTagTable = pgTable(
	"blog_post_tag",
	(t) => ({
		postId: t
			.text("post_id")
			.notNull()
			.references(() => blogPostTable.id, { onDelete: "cascade" }),
		tagId: t
			.text("tag_id")
			.notNull()
			.references(() => blogTagTable.id, { onDelete: "cascade" }),
	}),
	(table) => [
		primaryKey({ columns: [table.postId, table.tagId] }),
		index("blog_post_tag_postId_idx").on(table.postId),
		index("blog_post_tag_tagId_idx").on(table.tagId),
	],
);
