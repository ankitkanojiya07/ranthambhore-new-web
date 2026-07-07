import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/plan/travel-tips")({
	beforeLoad: () => {
		throw redirect({ to: "/plan", hash: "travel-tips" });
	},
});
