import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/plan/cab-hire")({
	beforeLoad: () => {
		throw redirect({ to: "/plan", hash: "getting-here" });
	},
});
