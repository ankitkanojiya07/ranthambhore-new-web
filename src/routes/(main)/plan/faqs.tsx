import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/plan/faqs")({
	beforeLoad: () => {
		throw redirect({ to: "/plan", hash: "faqs" });
	},
});
