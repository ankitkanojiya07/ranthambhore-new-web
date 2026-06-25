import { createFileRoute, Outlet } from "@tanstack/react-router";
import NavigationBar from "#/components/layout/Navbar";

export const Route = createFileRoute("/(main)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<NavigationBar />
			<Outlet />
		</div>
	);
}
