import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "#/components/layout/Footer";
import NavigationBar from "#/components/layout/Navbar";
import { ReachOutWidget } from "#/components/layout/ReachOutWidget";

export const Route = createFileRoute("/(main)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="relative">
			<NavigationBar />
			<Outlet />
			<Footer />
			<ReachOutWidget />
		</div>
	);
}
