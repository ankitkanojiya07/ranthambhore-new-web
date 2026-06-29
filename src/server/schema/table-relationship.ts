import { defineRelations } from "drizzle-orm";
import { accountTable } from "./account-table";
import { blogCategoryTable } from "./blog-category-table";
import { blogPostTable } from "./blog-post-table";
import { blogPostTagTable } from "./blog-post-tag-table";
import { blogTagTable } from "./blog-tag-table";
import { blogZoneTable } from "./blog-zone-table";
import { sessionTable } from "./session-table";
import { userTable } from "./user-table";

export const relations = defineRelations(
	{
		userTable,
		sessionTable,
		accountTable,
		blogCategoryTable,
		blogPostTable,
		blogTagTable,
		blogPostTagTable,
		blogZoneTable,
	},
	(r) => ({
		userTable: {
			sessions: r.many.sessionTable(),
			accounts: r.many.accountTable(),
			blogPosts: r.many.blogPostTable(),
		},
		sessionTable: {
			user: r.one.userTable({
				from: r.sessionTable.userId,
				to: r.userTable.id,
			}),
		},
		accountTable: {
			user: r.one.userTable({
				from: r.accountTable.userId,
				to: r.userTable.id,
			}),
		},
		blogCategoryTable: {
			posts: r.many.blogPostTable(),
		},
		blogZoneTable: {
			posts: r.many.blogPostTable(),
		},
		blogPostTable: {
			author: r.one.userTable({
				from: r.blogPostTable.authorId,
				to: r.userTable.id,
			}),
			category: r.one.blogCategoryTable({
				from: r.blogPostTable.categoryId,
				to: r.blogCategoryTable.id,
			}),
			zone: r.one.blogZoneTable({
				from: r.blogPostTable.zoneId,
				to: r.blogZoneTable.id,
			}),
			postTags: r.many.blogPostTagTable(),
		},
		blogTagTable: {
			postTags: r.many.blogPostTagTable(),
		},
		blogPostTagTable: {
			post: r.one.blogPostTable({
				from: r.blogPostTagTable.postId,
				to: r.blogPostTable.id,
			}),
			tag: r.one.blogTagTable({
				from: r.blogPostTagTable.tagId,
				to: r.blogTagTable.id,
			}),
		},
	}),
);
