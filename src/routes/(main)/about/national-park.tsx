import { createFileRoute } from "@tanstack/react-router";
import { NationalParkPage } from "#/components/pages/NationalParkPage";
import { getLastReviewed } from "#/lib/content-freshness";
import { NATIONAL_PARK_CONTENT, NATIONAL_PARK_FAQS } from "#/lib/national-park";
import {
	articleJsonLd,
	buildPageHead,
	faqPageJsonLd,
	touristAttractionJsonLd,
} from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "National Park", path: "/about/national-park" },
];

export const Route = createFileRoute("/(main)/about/national-park")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title:
				"Ranthambore National Park Guide | History, Wildlife & Tiger Reserve",
			description:
				"Definitive guide to Ranthambore National Park — location, area, season, lakes, fort heritage, tiger reserve history, and how the park connects to safari planning.",
			path: "/about/national-park",
			image: "/flora/map.webp",
			dateModified: getLastReviewed("/about/national-park"),
			breadcrumbs: BREADCRUMBS,
			jsonLd: [
				touristAttractionJsonLd({
					name: "Ranthambore National Park",
					description: NATIONAL_PARK_CONTENT.intro,
					path: "/about/national-park",
					image: "/flora/map.webp",
					latitude: 26.0173,
					longitude: 76.5026,
				}),
				articleJsonLd({
					headline: "Ranthambore National Park",
					description: NATIONAL_PARK_CONTENT.intro,
					path: "/about/national-park",
					image: "/flora/map.webp",
					dateModified: NATIONAL_PARK_CONTENT.lastReviewed,
				}),
				faqPageJsonLd([...NATIONAL_PARK_FAQS]),
			],
		}),
	component: NationalParkPage,
});
