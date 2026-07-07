import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/safari/booking-guidelines")({
	beforeLoad: () => {
		throw redirect({ to: "/safari/timing-and-fees" });
	},
});
