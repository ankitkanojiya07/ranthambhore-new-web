import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import {
	mapDbZoneToSafariZoneCard,
	mapPostsToTrendingColumns,
	mapPostToSafariHighlight,
} from "#/components/daily-updates/map-safari-highlight";
import {
	dailyUpdateZonesQueryOptions,
	safariInsightsQueryOptions,
} from "#/components/daily-updates/queries/daily-updates.queries";
import {
	SafariHighlightsGrid,
	TrendingGrid,
} from "#/components/highlights/SafariHighlightsSections";
import { ZoneHighlightsGrid } from "#/components/highlights/ZoneHighlights";
import { buildPageHead } from "#/lib/seo";

export const Route = createFileRoute("/(main)/highlights/safari-insights/")({
	staticData: { navOverlay: false },
	loader: async ({ context: { queryClient } }) => {
		await Promise.all([
			queryClient.ensureQueryData(safariInsightsQueryOptions()),
			queryClient.ensureQueryData(dailyUpdateZonesQueryOptions()),
		]);
	},
	head: () =>
		buildPageHead({
			title: "Safari Highlights | Field Sightings & Zone Updates — Ranthambore",
			description:
				"Field notes from Ranthambore safaris — tiger and wildlife sightings, zone-wise updates, and timely highlights across the ten safari zones.",
			path: "/highlights/safari-insights",
			breadcrumbs: [
				{ name: "Home", path: "/" },
				{ name: "Safari Highlights", path: "/highlights/safari-insights" },
			],
		}),
	component: SafariHighlightsPage,
});

function SafariHighlightsPage() {
	const { data: posts } = useSuspenseQuery(safariInsightsQueryOptions());
	const { data: zones } = useSuspenseQuery(dailyUpdateZonesQueryOptions());

	const highlights = useMemo(
		() => posts.data.map(mapPostToSafariHighlight),
		[posts.data],
	);
	const trendingColumns = useMemo(
		() => mapPostsToTrendingColumns(posts.data),
		[posts.data],
	);
	const zoneCards = useMemo(
		() => zones.map(mapDbZoneToSafariZoneCard),
		[zones],
	);

	return (
		<div className="bg-sand-50">
			{trendingColumns.length > 0 ? (
				<TrendingGrid columns={trendingColumns} />
			) : null}
			<SafariHighlightsGrid highlights={highlights} />
			<ZoneHighlightsGrid zones={zoneCards} />
		</div>
	);
}
