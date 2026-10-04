import { createFileRoute } from "@tanstack/react-router";
import { SafariVehiclesPage } from "#/components/pages/SafariVehiclesPage";
import { buildPageHead } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
	{ name: "Jeep & Canter", path: "/safari/jeep" },
];

export const Route = createFileRoute("/(main)/safari/jeep")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title: "Ranthambore Jeep vs Canter Safari | Gypsy Comparison Guide",
			description:
				"Compare Ranthambore Gypsy (6-seater jeep) and Canter (20-seater) safaris — capacity, experience, zone access notes, and which option fits couples, families, or groups.",
			path: "/safari/jeep",
			image: "/Home/gypsy.webp",
			breadcrumbs: BREADCRUMBS,
		}),
	component: SafariVehiclesPage,
});
