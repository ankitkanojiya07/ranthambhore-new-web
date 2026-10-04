import { createFileRoute } from "@tanstack/react-router";
import { FloraAndFaunaPage } from "#/components/pages/FloraAndFaunaPage";
import { getLastReviewed } from "#/lib/content-freshness";
import { WILDLIFE_FAQS, WILDLIFE_PAGE_CONTENT } from "#/lib/flora-and-fauna";
import { articleJsonLd, buildPageHead, faqPageJsonLd } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Wildlife", path: "/about/flora-and-fauna" },
];

export const Route = createFileRoute("/(main)/about/flora-and-fauna")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title:
				"Ranthambore Wildlife, Flora & Fauna | Species Checklist & Forest Guide",
			description:
				"Ranthambore wildlife guide — animal checklist, leopards, deer, crocodiles, 300+ birds, dhok forest, and flora species of the dry deciduous tiger landscape.",
			path: "/about/flora-and-fauna",
			dateModified: getLastReviewed("/about/flora-and-fauna"),
			breadcrumbs: BREADCRUMBS,
			jsonLd: [
				articleJsonLd({
					headline: WILDLIFE_PAGE_CONTENT.title,
					description: WILDLIFE_PAGE_CONTENT.intro,
					path: "/about/flora-and-fauna",
					dateModified: WILDLIFE_PAGE_CONTENT.lastReviewed,
				}),
				faqPageJsonLd([...WILDLIFE_FAQS]),
			],
		}),
	component: FloraAndFaunaPage,
});
