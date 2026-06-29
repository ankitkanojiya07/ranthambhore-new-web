import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import {
	mapPostsToTrendingColumns,
	mapPostToSafariHighlight,
} from "#/components/daily-updates/map-safari-highlight";
import { safariInsightsQueryOptions } from "#/components/daily-updates/queries/daily-updates.queries";
import {
	SafariHighlightsGrid,
	TrendingGrid,
} from "#/components/highlights/SafariHighlightsSections";
import { ZoneHighlightsGrid } from "#/components/highlights/ZoneHighlights";
import { ZONES } from "#/lib/highlights-data";

export const Route = createFileRoute("/(main)/highlights/safari-insights/")({
	staticData: { navOverlay: false },
	loader: async ({ context: { queryClient } }) => {
		await queryClient.ensureQueryData(safariInsightsQueryOptions());
	},
	head: () => ({
		meta: [
			{
				title:
					"Safari Highlights | Latest Tiger Sightings & Wildlife Updates — Ranthambore",
			},
			{
				name: "description",
				content:
					"Latest safari highlights from Ranthambore National Park — tiger sightings, wildlife updates, and zone-wise insights across all 10 safari zones.",
			},
		],
	}),
	component: SafariHighlightsPage,
});

function SafariHighlightsPage() {
	const { data: posts } = useSuspenseQuery(safariInsightsQueryOptions());
	const highlights = useMemo(
		() => posts.data.map(mapPostToSafariHighlight),
		[posts.data],
	);
	const trendingColumns = useMemo(
		() => mapPostsToTrendingColumns(posts.data),
		[posts.data],
	);

	return (
		<div className="bg-sand-50">
			{trendingColumns.length > 0 ? (
				<TrendingGrid columns={trendingColumns} />
			) : null}
			<SafariHighlightsGrid highlights={highlights} />
			<ZoneHighlightsGrid zones={ZONES} />
		</div>
	);
}
