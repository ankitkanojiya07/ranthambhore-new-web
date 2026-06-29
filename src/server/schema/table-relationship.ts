import { defineRelations } from "drizzle-orm";
import { accountTable } from "./account-table";
import { sessionTable } from "./session-table";
import { userTable } from "./user-table";

export const relations = defineRelations(
	{ userTable, sessionTable, accountTable },
	(r) => ({
		userTable: {
			sessions: r.many.sessionTable(),
			accounts: r.many.accountTable(),
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
	}),
);
