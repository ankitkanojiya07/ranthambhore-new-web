import { createFileRoute } from "@tanstack/react-router";
import {
	ArticleSpotlightSection,
	FeaturedArticleSection,
	HighlightsCardGrid,
	RanthambhoreTrendingSection,
} from "#/components/highlights/RanthambhoreHighlightsSections";
import { RANTHAMBHORE_ARTICLES } from "#/lib/highlights-data";

const PARK_TRENDING = [
	{
		id: "visitors",
		image: {
			src: "/hero/9.webp",
			alt: "Visitors at Ranthambore",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "v1",
				date: "May 20, 2026",
				title: "Record 7.27 Lakh Visitors In 2025 Season",
				featured: true,
			},
			{
				id: "v2",
				date: "May 15, 2026",
				title: "New Online Booking Portal Launched",
			},
			{
				id: "v3",
				date: "May 10, 2026",
				title: "Peak Season Slots Filling Fast",
			},
			{
				id: "v4",
				date: "May 5, 2026",
				title: "International Tourist Numbers Rise 18%",
			},
		],
	},
	{
		id: "season",
		image: {
			src: "/hero/1.webp",
			alt: "Tiger in golden light",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "s1",
				date: "June 1, 2026",
				title: "Best Time To Visit: October To April",
				featured: true,
			},
			{
				id: "s2",
				date: "May 28, 2026",
				title: "Summer Sightings Concentrate At Lakes",
			},
			{
				id: "s3",
				date: "May 22, 2026",
				title: "Monsoon Closure Dates Announced",
			},
			{
				id: "s4",
				date: "May 18, 2026",
				title: "Winter Photography Season Guide",
			},
		],
	},
	{
		id: "booking",
		image: {
			src: "/hero/8.webp",
			alt: "Safari gate at Ranthambore",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "b1",
				date: "May 28, 2026",
				title: "Things To Know Before Safari Booking",
				featured: true,
			},
			{
				id: "b2",
				date: "May 25, 2026",
				title: "ID Requirements For Foreign Visitors",
			},
			{
				id: "b3",
				date: "May 20, 2026",
				title: "How Zone Allocation Works",
			},
			{
				id: "b4",
				date: "May 15, 2026",
				title: "Cancellation & Refund Policy Update",
			},
		],
	},
	{
		id: "heritage",
		image: {
			src: "/hero/7.webp",
			alt: "Ranthambore Fort",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "h1",
				date: "April 20, 2026",
				title: "Ranthambore Fort: 1,000 Years Of History",
				featured: true,
			},
			{
				id: "h2",
				date: "April 15, 2026",
				title: "Jogi Mahal Restoration Complete",
			},
			{
				id: "h3",
				date: "April 10, 2026",
				title: "New Museum Exhibit Opens At Fort",
			},
			{
				id: "h4",
				date: "April 5, 2026",
				title: "Heritage Walks Now Available",
			},
		],
	},
];

export const Route = createFileRoute(
	"/(main)/highlights/ranthambhore-insights/",
)({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambhore Highlights | Park News, Travel Tips & Safari Guides",
			},
			{
				name: "description",
				content:
					"Ranthambhore highlights — best time to visit, safari booking tips, park news, conservation updates, and travel guides for Ranthambore National Park.",
			},
		],
	}),
	component: RanthambhoreHighlightsPage,
});

function RanthambhoreHighlightsPage() {
	const featured = RANTHAMBHORE_ARTICLES[0];
	const sidebar = RANTHAMBHORE_ARTICLES.slice(1, 7);
	const spotlight = RANTHAMBHORE_ARTICLES[1];
	const related = RANTHAMBHORE_ARTICLES.slice(2, 6).map((a) => ({
		title: a.title,
	}));
	const quickLinks = [
		"Best Time To Visit",
		"Safari Booking",
		"Zone Guide",
		"Travel Tips",
		"Fort Heritage",
		"Conservation",
		"Hotels & Stay",
		"How To Reach",
		...Array.from({ length: 10 }, (_, i) => `Zone ${i + 1}`),
	];

	return (
		<div className="bg-sand-50">
			<FeaturedArticleSection featured={featured} sidebar={sidebar} />
			<ArticleSpotlightSection
				article={spotlight}
				related={related}
				quickLinks={quickLinks}
			/>
			<RanthambhoreTrendingSection columns={PARK_TRENDING} />
			<HighlightsCardGrid articles={RANTHAMBHORE_ARTICLES} />
		</div>
	);
}
