import { index, pgTable } from "drizzle-orm/pg-core";

export const blogCategoryTable = pgTable(
	"blog_category",
	(t) => ({
		id: t.text("id").primaryKey(),
		name: t.text("name").notNull(),
		slug: t.text("slug").notNull().unique(),
		description: t.text("description"),
		createdAt: t.timestamp("created_at").defaultNow().notNull(),
		updatedAt: t
			.timestamp("updated_at")
			.defaultNow()
			.$onUpdate(() => /* @__PURE__ */ new Date())
			.notNull(),
	}),
	(table) => [index("blog_category_slug_idx").on(table.slug)],
);
