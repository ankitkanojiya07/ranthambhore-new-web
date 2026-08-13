import { createFileRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { DeferUntilMounted } from "#/components/DeferUntilMounted";
import NavigationBar from "#/components/layout/Navbar";

const Footer = lazy(() =>
	import("#/components/layout/Footer").then((mod) => ({
		default: mod.Footer,
	})),
);

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
		const timeoutId = window.setTimeout(() => setShowWidget(true), 4000);
		return () => window.clearTimeout(timeoutId);
	}, []);

	return (
		<div className="relative">
			<NavigationBar />
			<Outlet />
			<DeferUntilMounted>
				<Suspense fallback={null}>
					<Footer />
				</Suspense>
			</DeferUntilMounted>
			{showWidget ? (
				<Suspense fallback={null}>
					<ReachOutWidget />
				</Suspense>
			) : null}
		</div>
	);
}
