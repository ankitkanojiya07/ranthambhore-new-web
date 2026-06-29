import { createMiddleware } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { auth } from "#/lib/auth";

export type AuthSession = NonNullable<
	Awaited<ReturnType<typeof auth.api.getSession>>
>;

export const optionalAuthMiddleware = createMiddleware({
	type: "function",
}).server(async ({ next }) => {
	const session = await auth.api.getSession({
		headers: getRequestHeaders(),
	});

	return next({
		context: {
			session: session ?? null,
		},
	});
});

export const requireAuthMiddleware = createMiddleware({ type: "function" })
	.middleware([optionalAuthMiddleware])
	.server(async ({ next, context }) => {
		if (!context.session) {
			throw new Error("Unauthorized");
		}

		return next();
	});
