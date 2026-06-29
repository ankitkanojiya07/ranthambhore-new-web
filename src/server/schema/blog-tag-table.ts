import { index, pgTable } from "drizzle-orm/pg-core";
import { id } from "./columns";

export const blogTagTable = pgTable(
	"blog_tag",
	(t) => ({
		id,
		name: t.text("name").notNull(),
		slug: t.text("slug").notNull().unique(),
		createdAt: t.timestamp("created_at").defaultNow().notNull(),
	}),
	(table) => [index("blog_tag_slug_idx").on(table.slug)],
);
