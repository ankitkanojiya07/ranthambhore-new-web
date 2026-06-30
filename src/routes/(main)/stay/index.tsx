import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/stay/")({
	beforeLoad: () => {
		throw redirect({ to: "/stay/hotels" });
	},
});
