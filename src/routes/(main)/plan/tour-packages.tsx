import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/plan/tour-packages")({
	beforeLoad: () => {
		throw redirect({ to: "/plan" });
	},
});
