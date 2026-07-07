import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/plan/best-time")({
	beforeLoad: () => {
		throw redirect({ to: "/plan", hash: "best-time-to-visit" });
	},
});
