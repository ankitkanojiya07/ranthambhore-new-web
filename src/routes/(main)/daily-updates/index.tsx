import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/daily-updates/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(main)/daily-updates/"!</div>;
}
