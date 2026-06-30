import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import {
	mapDbZoneToSafariZoneCard,
	mapPostToSafariHighlight,
} from "#/components/daily-updates/map-safari-highlight";
import {
	dailyUpdateZonesQueryOptions,
	safariZonePostsQueryOptions,
} from "#/components/daily-updates/queries/daily-updates.queries";
import { ZoneDetailContent } from "#/components/highlights/ZoneHighlights";
import { PageHero } from "#/components/pages/PageHero";

export const Route = createFileRoute(
	"/(main)/highlights/safari-insights/zone/$zoneId",
)({
	staticData: { navOverlay: true },
	loader: async ({ context: { queryClient }, params }) => {
		const zones = await queryClient.ensureQueryData(
			dailyUpdateZonesQueryOptions(),
		);
		const zoneNumber = Number(params.zoneId);
		const zone = zones.find((entry) => entry.number === zoneNumber);

		if (
			!zone ||
			Number.isNaN(zoneNumber) ||
			zoneNumber < 1 ||
			zoneNumber > 10
		) {
			throw notFound();
		}

		await queryClient.ensureQueryData(safariZonePostsQueryOptions(zone.id));

		return { zone };
	},
	head: ({ loaderData }) => {
		const zoneCard = loaderData?.zone
			? mapDbZoneToSafariZoneCard(loaderData.zone)
			: null;

		return {
			meta: [
				{
					title: zoneCard
						? `${zoneCard.name} | Safari Highlights — Ranthambore`
						: "Zone Not Found — Ranthambore Safari Highlights",
				},
				{
					name: "description",
					content: zoneCard
						? `Safari insights, recent sightings, and expert tips for ${zoneCard.name} in Ranthambore National Park.`
						: "Zone not found.",
				},
			],
		};
	},
	component: ZoneDetailPage,
});

function ZoneDetailPage() {
	const { zone: loaderZone } = Route.useLoaderData();
	const { data: posts } = useSuspenseQuery(
		safariZonePostsQueryOptions(loaderZone.id),
	);

	const zone = useMemo(
		() => mapDbZoneToSafariZoneCard(loaderZone),
		[loaderZone],
	);
	const highlights = useMemo(
		() => posts.data.map(mapPostToSafariHighlight),
		[posts.data],
	);

	return (
		<div className="bg-sand-50">
			<PageHero
				eyebrow="Safari Highlights"
				title={<>Zone {zone.zoneNumber}</>}
				subtitle={zone.tagline}
				image={zone.image.src}
				badge={zone.bestFor}
				primaryCta={{
					label: "Book This Zone",
					href: "/safari/book",
				}}
				secondaryCta={{
					label: "All Zones",
					href: "/highlights/safari-insights",
				}}
				tall={false}
			/>
			<ZoneDetailContent zone={zone} highlights={highlights} />
		</div>
	);
}
