/// <reference types="bun-types" />
import "dotenv/config";
import { db } from "#/server/db/index";
import { blogZoneSeedData, blogZoneTable } from "#/server/schema/blog-zone-table";

async function seedBlogZones() {
	for (const zone of blogZoneSeedData) {
		await db
			.insert(blogZoneTable)
			.values({ ...zone })
			.onConflictDoUpdate({
				target: blogZoneTable.number,
				set: {
					name: zone.name,
					slug: zone.slug,
					safariType: zone.safariType,
					description: zone.description,
					updatedAt: new Date(),
				},
			});
	}

	console.log(`Seeded ${blogZoneSeedData.length} blog zones (zones 1–10).`);
	process.exit(0);
}

seedBlogZones().catch((error) => {
	console.error("Failed to seed blog zones:", error);
	process.exit(1);
});
