import { createFileRoute } from "@tanstack/react-router";
import { TigersPage } from "#/components/pages/TigersPage";
import { getLastReviewed } from "#/lib/content-freshness";
import { articleJsonLd, buildPageHead, faqPageJsonLd } from "#/lib/seo";
import { TIGERS_HUB_CONTENT, TIGERS_HUB_FAQS } from "#/lib/tigers-hub";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Tigers", path: "/about/tigers" },
];

export const Route = createFileRoute("/(main)/about/tigers/")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title: "Tigers of Ranthambore | Famous Royal Bengal Tigers & Profiles",
			description:
				"Guide to Ranthambore tigers — how T-codes and names work, Machali's legacy, famous individuals, and responsible reading of sighting stories.",
			path: "/about/tigers",
			image: "/Home/tiger.jpg",
			dateModified: getLastReviewed("/about/tigers"),
			breadcrumbs: BREADCRUMBS,
			jsonLd: [
				articleJsonLd({
					headline: TIGERS_HUB_CONTENT.title,
					description: TIGERS_HUB_CONTENT.intro,
					path: "/about/tigers",
					image: "/Home/tiger.jpg",
					dateModified: TIGERS_HUB_CONTENT.lastReviewed,
				}),
				faqPageJsonLd([...TIGERS_HUB_FAQS]),
			],
		}),
	component: TigersPage,
});
