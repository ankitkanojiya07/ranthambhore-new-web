import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { db } from "#/server/db";
import {
	accountTable,
	sessionTable,
	userTable,
	verificationTable,
} from "#/server/schema";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			user: userTable,
			session: sessionTable,
			account: accountTable,
			verification: verificationTable,
		},
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [tanstackStartCookies()],
});

export type Session = typeof auth.$Infer.Session;
