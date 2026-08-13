import { createFileRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { Footer } from "#/components/layout/Footer";
import NavigationBar from "#/components/layout/Navbar";

const ReachOutWidget = lazy(() =>
	import("#/components/layout/ReachOutWidget").then((mod) => ({
		default: mod.ReachOutWidget,
	})),
);

export const Route = createFileRoute("/(main)")({
	component: RouteComponent,
});

function RouteComponent() {
	const [showWidget, setShowWidget] = useState(false);

	useEffect(() => {
		const timeoutId = window.setTimeout(() => setShowWidget(true), 2500);
		return () => window.clearTimeout(timeoutId);
	}, []);

	return (
		<div className="relative">
			<NavigationBar />
			<Outlet />
			<Footer />
			{showWidget ? (
				<Suspense fallback={null}>
					<ReachOutWidget />
				</Suspense>
			) : null}
		</div>
	);
}
