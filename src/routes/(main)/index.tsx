import { createFileRoute } from "@tanstack/react-router";
import { type ComponentType, useEffect, useState } from "react";
import { HOME_FAQ_ITEMS } from "#/components/home/FaqSection";
import { HeroSection } from "#/components/home/HeroSection";
import { getLastReviewed } from "#/lib/content-freshness";
import { buildPageHead, faqPageJsonLd } from "#/lib/seo";

export const Route = createFileRoute("/(main)/")({
	staticData: { navOverlay: true },
	head: () => {
		const head = buildPageHead({
			title:
				"Ranthambore National Park Guide | Tigers, Safari Zones & Travel — Ranthambhor.com",
			description:
				"Everything you need to know about Ranthambore National Park — Royal Bengal tigers, safari zones 1–10, wildlife, conservation, and how to plan a visit to Sawai Madhopur. Updated for the 2026–27 open season.",
			path: "/",
			image: "/hero/8.webp",
			dateModified: getLastReviewed("/"),
			jsonLd: faqPageJsonLd(
				HOME_FAQ_ITEMS.map(({ question, answer }) => ({ question, answer })),
			),
		});

		return {
			meta: [
				...head.meta,
				{
					name: "google-site-verification",
					content: "yujpTPb26klOVmIbEr7mqoxwa7U72ZdhWwiGpNIvvs8",
				},
				{
					name: "keywords",
					content:
						"Ranthambore National Park, Ranthambhore, tiger reserve, safari zones, Rajasthan wildlife",
				},
			],
			links: [
				...head.links,
				{
					rel: "preload",
					href: "/hero/8-640.webp",
					as: "image",
					type: "image/webp",
					fetchpriority: "high",
				},
			],
		};
	},
	component: Home,
});

function Home() {
	const [BelowFold, setBelowFold] = useState<ComponentType | null>(null);

	useEffect(() => {
		void import("#/components/home/HomeBelowFold").then((mod) => {
			setBelowFold(() => mod.HomeBelowFold);
		});
	}, []);

	return (
		<div>
			<HeroSection />
			{BelowFold ? <BelowFold /> : <div className="min-h-48 bg-sand-50" />}
		</div>
	);
}
