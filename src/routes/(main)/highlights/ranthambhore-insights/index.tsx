import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import {
	dailyUpdateDetailQueryOptions,
	ranthambhoreInsightsQueryOptions,
} from "#/components/daily-updates/queries/daily-updates.queries";
import {
	buildQuickLinks,
	mapPostsToParkTrendingColumns,
	mapPostToRanthambhoreArticle,
} from "#/components/highlights/map-ranthambhore-highlight";
import {
	ArticleSpotlightSection,
	FeaturedArticleSection,
	HighlightsCardGrid,
	RanthambhoreTrendingSection,
} from "#/components/highlights/RanthambhoreHighlightsSections";
import type { RanthambhoreArticle } from "#/components/highlights/ranthambhore-highlight.types";
import { buildPageHead } from "#/lib/seo";

const QUICK_LINK_LABELS = [
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

export const Route = createFileRoute(
	"/(main)/highlights/ranthambhore-insights/",
)({
	staticData: { navOverlay: false },
	loader: async ({ context: { queryClient } }) => {
		const posts = await queryClient.ensureQueryData(
			ranthambhoreInsightsQueryOptions(),
		);

		const spotlightSlug = posts.data[1]?.slug;
		if (spotlightSlug) {
			await queryClient.ensureQueryData(
				dailyUpdateDetailQueryOptions({ slug: spotlightSlug }),
			);
		}
	},
	head: () =>
		buildPageHead({
			title: "Ranthambhore Highlights | Park News, Guides & Seasonal Updates",
			description:
				"Editorial highlights from Ranthambore — park news, travel tips, conservation notes, and practical guides for visitors to the tiger reserve.",
			path: "/highlights/ranthambhore-insights",
			breadcrumbs: [
				{ name: "Home", path: "/" },
				{
					name: "Ranthambhore Highlights",
					path: "/highlights/ranthambhore-insights",
				},
			],
		}),
	component: RanthambhoreHighlightsPage,
});

function ArticleSpotlight({
	article,
	slug,
	related,
	quickLinks,
}: {
	article: RanthambhoreArticle;
	slug: string;
	related: { id: string; title: string }[];
	quickLinks: { label: string; slug?: string }[];
}) {
	const { data: post } = useSuspenseQuery(
		dailyUpdateDetailQueryOptions({ slug }),
	);

	return (
		<ArticleSpotlightSection
			article={article}
			content={post.content}
			related={related}
			quickLinks={quickLinks}
		/>
	);
}

function RanthambhoreHighlightsPage() {
	const { data: posts } = useSuspenseQuery(ranthambhoreInsightsQueryOptions());

	const articles = useMemo(
		() => posts.data.map(mapPostToRanthambhoreArticle),
		[posts.data],
	);
	const trendingColumns = useMemo(
		() => mapPostsToParkTrendingColumns(posts.data),
		[posts.data],
	);
	const quickLinks = useMemo(
		() => buildQuickLinks(QUICK_LINK_LABELS, articles),
		[articles],
	);

	if (articles.length === 0) {
		return (
			<div className="bg-sand-50 px-6 py-24 text-center">
				<p className="font-body text-charcoal-600">
					No highlights published yet. Check back soon for park news and travel
					guides.
				</p>
			</div>
		);
	}

	const featured = articles[0];
	const sidebar = articles.slice(1, 7);
	const spotlight = articles[1];
	const spotlightSlug = posts.data[1]?.slug;
	const related = articles.slice(2, 6).map((article) => ({
		id: article.id,
		title: article.title,
	}));

	return (
		<div className="bg-sand-50">
			<FeaturedArticleSection featured={featured} sidebar={sidebar} />
			{spotlight && spotlightSlug ? (
				<ArticleSpotlight
					article={spotlight}
					slug={spotlightSlug}
					related={related}
					quickLinks={quickLinks}
				/>
			) : null}
			{trendingColumns.length > 0 ? (
				<RanthambhoreTrendingSection columns={trendingColumns} />
			) : null}
			<HighlightsCardGrid articles={articles} />
		</div>
	);
}
