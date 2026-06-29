import { createFileRoute, notFound } from "@tanstack/react-router";
import { ZoneDetailContent } from "#/components/highlights/ZoneHighlights";
import { PageHero } from "#/components/pages/PageHero";
import { getZoneByNumber } from "#/lib/highlights-data";

export const Route = createFileRoute(
	"/(main)/highlights/safari-insights/zone/$zoneId",
)({
	staticData: { navOverlay: true },
	head: ({ params }) => {
		const zone = getZoneByNumber(Number(params.zoneId));
		return {
			meta: [
				{
					title: zone
						? `${zone.name} | Safari Highlights — Ranthambore`
						: "Zone Not Found — Ranthambore Safari Highlights",
				},
				{
					name: "description",
					content: zone
						? `Safari insights, recent sightings, and expert tips for ${zone.name} in Ranthambore National Park.`
						: "Zone not found.",
				},
			],
		};
	},
	component: ZoneDetailPage,
});

function ZoneDetailPage() {
	const { zoneId } = Route.useParams();
	const zoneNumber = Number(zoneId);
	const zone = getZoneByNumber(zoneNumber);

	if (!zone || Number.isNaN(zoneNumber) || zoneNumber < 1 || zoneNumber > 10) {
		throw notFound();
	}

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
			<ZoneDetailContent zone={zone} />
		</div>
	);
}
