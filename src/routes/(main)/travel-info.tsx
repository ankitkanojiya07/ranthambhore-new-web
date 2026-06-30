import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/travel-info")({
	beforeLoad: () => {
		throw redirect({ to: "/plan/how-to-reach" });
	},
});
