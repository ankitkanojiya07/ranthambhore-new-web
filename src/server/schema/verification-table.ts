import { index, pgTable } from "drizzle-orm/pg-core";

export const verificationTable = pgTable(
	"verification",
	(t) => ({
		id: t.text("id").primaryKey(),
		identifier: t.text("identifier").notNull(),
		value: t.text("value").notNull(),
		expiresAt: t.timestamp("expires_at").notNull(),
		createdAt: t.timestamp("created_at").defaultNow().notNull(),
		updatedAt: t
			.timestamp("updated_at")
			.defaultNow()
			.$onUpdate(() => /* @__PURE__ */ new Date())
			.notNull(),
	}),
	(table) => [index("verification_identifier_idx").on(table.identifier)],
);
