import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/safari/canter")({
	beforeLoad: () => {
		throw redirect({
			to: "/safari/jeep",
			hash: "canter",
		});
	},
});
