import { index, pgTable } from "drizzle-orm/pg-core";
import { userTable } from "./user-table";

export const sessionTable = pgTable(
	"session",
	(t) => ({
		id: t.text("id").primaryKey(),
		expiresAt: t.timestamp("expires_at").notNull(),
		token: t.text("token").notNull().unique(),
		createdAt: t.timestamp("created_at").defaultNow().notNull(),
		updatedAt: t
			.timestamp("updated_at")
			.$onUpdate(() => /* @__PURE__ */ new Date())
			.notNull(),
		ipAddress: t.text("ip_address"),
		userAgent: t.text("user_agent"),
		userId: t
			.text("user_id")
			.notNull()
			.references(() => userTable.id, { onDelete: "cascade" }),
	}),
	(table) => [index("session_userId_idx").on(table.userId)],
);
