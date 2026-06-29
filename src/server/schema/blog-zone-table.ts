import { index, pgTable } from "drizzle-orm/pg-core";

export const blogZoneSeedData = [
	{
		id: "zone-1",
		number: 1,
		name: "Singhdwar, Tuti Ka Nalla",
		slug: "zone-1",
		safariType: "Gypsy/Canter",
		description: "T-39 Noor, Scenic Valleys",
	},
	{
		id: "zone-2",
		number: 2,
		name: "Lakkarda, Nal Ghati",
		slug: "zone-2",
		safariType: "Gypsy/Canter",
		description: "T-57, Dense Forest Tracks",
	},
	{
		id: "zone-3",
		number: 3,
		name: "Padam Talao, Raj Bagh",
		slug: "zone-3",
		safariType: "Gypsy/Canter",
		description: "Iconic Lake Views, T-84 Arrowhead",
	},
	{
		id: "zone-4",
		number: 4,
		name: "George Lodge, Lakkarda",
		slug: "zone-4",
		safariType: "Gypsy/Canter",
		description: "T-19 Krishna Territory",
	},
	{
		id: "zone-5",
		number: 5,
		name: "Kala Peela Pani, Baghda",
		slug: "zone-5",
		safariType: "Gypsy/Canter",
		description: "Good Water Sources, T-73",
	},
	{
		id: "zone-6",
		number: 6,
		name: "Kundal Area",
		slug: "zone-6",
		safariType: "Gypsy/Canter",
		description: "Open Grasslands, T-34",
	},
	{
		id: "zone-7",
		number: 7,
		name: "Chidikho Area",
		slug: "zone-7",
		safariType: "Gypsy Only",
		description: "Quiet, Less Crowded",
	},
	{
		id: "zone-8",
		number: 8,
		name: "Balas Area",
		slug: "zone-8",
		safariType: "Gypsy Only",
		description: "Rugged Terrain",
	},
	{
		id: "zone-9",
		number: 9,
		name: "Kuwal ji Area",
		slug: "zone-9",
		safariType: "Gypsy Only",
		description: "Rare Tiger Sightings",
	},
	{
		id: "zone-10",
		number: 10,
		name: "Bhadlav Area",
		slug: "zone-10",
		safariType: "Gypsy/Canter",
		description: "Good Leopard Sightings",
	},
] as const;

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
