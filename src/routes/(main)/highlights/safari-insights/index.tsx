import { createFileRoute } from "@tanstack/react-router";
import {
	SafariHighlightsGrid,
	TrendingGrid,
} from "#/components/highlights/SafariHighlightsSections";
import { ZoneHighlightsGrid } from "#/components/highlights/ZoneHighlights";
import {
	SAFARI_HIGHLIGHTS,
	TRENDING_COLUMNS,
	ZONES,
} from "#/lib/highlights-data";

export const Route = createFileRoute("/(main)/highlights/safari-insights/")({
	staticData: { navOverlay: false },
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
	return (
		<div className="bg-sand-50">
			<TrendingGrid columns={TRENDING_COLUMNS} />
			<SafariHighlightsGrid highlights={SAFARI_HIGHLIGHTS} />
			<ZoneHighlightsGrid zones={ZONES} />
		</div>
	);
}
