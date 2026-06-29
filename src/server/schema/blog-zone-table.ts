import { index, pgTable } from "drizzle-orm/pg-core";

export const blogZoneTable = pgTable(
	"blog_zone",
	(t) => ({
		id: t.text("id").primaryKey(),
		number: t.integer("number").notNull().unique(),
		name: t.text("name").notNull(),
		slug: t.text("slug").notNull().unique(),
		safariType: t.text("safari_type"),
		description: t.text("description"),
		createdAt: t.timestamp("created_at").defaultNow().notNull(),
		updatedAt: t
			.timestamp("updated_at")
			.defaultNow()
			.$onUpdate(() => /* @__PURE__ */ new Date())
			.notNull(),
	}),
	(table) => [
		index("blog_zone_number_idx").on(table.number),
		index("blog_zone_slug_idx").on(table.slug),
	],
);
