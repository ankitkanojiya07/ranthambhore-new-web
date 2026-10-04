import { createFileRoute } from "@tanstack/react-router";
import { ConservationPage } from "#/components/pages/ConservationPage";
import { getLastReviewed } from "#/lib/content-freshness";
import { buildPageHead } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Conservation", path: "/about/conservation" },
];

export const Route = createFileRoute("/(main)/about/conservation")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title: "Ranthambore Conservation | Project Tiger, Protection & Community",
			description:
				"How conservation works at Ranthambore — Project Tiger history, anti-poaching protection, community engagement, and responsible wildlife tourism.",
			path: "/about/conservation",
			dateModified: getLastReviewed("/about/conservation"),
			breadcrumbs: BREADCRUMBS,
		}),
	component: ConservationPage,
});
