import { createFileRoute } from "@tanstack/react-router";
import { SafariZonesPage } from "#/components/pages/SafariZonesPage";
import { buildPageHead } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
	{ name: "Zones", path: "/safari/zones" },
];

export const Route = createFileRoute("/(main)/safari/zones")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title: "Ranthambore Safari Zones 1–10 | Landscape & Wildlife Zone Guide",
			description:
				"Evidence-led guide to Ranthambore safari zones 1–10 — terrain, lakes, wildlife character, and planning notes. Zone allocation varies; tiger sightings are never guaranteed.",
			path: "/safari/zones",
			image: "/flora/map.webp",
			breadcrumbs: BREADCRUMBS,
		}),
	component: SafariZonesPage,
});
