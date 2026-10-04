import { createFileRoute } from "@tanstack/react-router";
import { SafariGuidePage } from "#/components/pages/SafariGuidePage";
import { getLastReviewed } from "#/lib/content-freshness";
import { SAFARI_GUIDE_CONTENT, SAFARI_GUIDE_FAQS } from "#/lib/safari-guide";
import { articleJsonLd, buildPageHead, faqPageJsonLd } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
];

export const Route = createFileRoute("/(main)/safari/")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title: "Ranthambore Safari Guide | Jeep, Canter, Zones & Booking Basics",
			description:
				"Complete Ranthambore safari guide — how permits work, Gypsy vs Canter, zones 1–10, seasonal timings, and responsible wildlife viewing. Practical reference before you book.",
			path: "/safari",
			image: "/hero/1.webp",
			dateModified: getLastReviewed("/safari"),
			breadcrumbs: BREADCRUMBS,
			jsonLd: [
				articleJsonLd({
					headline: SAFARI_GUIDE_CONTENT.title,
					description: SAFARI_GUIDE_CONTENT.intro,
					path: "/safari",
					image: "/hero/1.webp",
					dateModified: SAFARI_GUIDE_CONTENT.lastReviewed,
				}),
				faqPageJsonLd([...SAFARI_GUIDE_FAQS]),
			],
		}),
	component: SafariGuidePage,
});
