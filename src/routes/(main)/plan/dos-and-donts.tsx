import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/plan/dos-and-donts")({
	beforeLoad: () => {
		throw redirect({ to: "/plan", hash: "safari-day-guide" });
	},
});
