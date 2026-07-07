import { createFileRoute } from "@tanstack/react-router";
import { SafariZonesPage } from "#/components/pages/SafariZonesPage";

export const Route = createFileRoute("/(main)/safari/zones")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari Zones | Zone 1 to Zone 10 Complete Guide for Tiger Sightings",
			},
			{
				name: "description",
				content:
					"Ranthambore is divided into 10 safari zones. This complete zone guide tells you which zones offer the best tiger sightings, landscape variety, and wildlife diversity.",
			},
		],
	}),
	component: SafariZonesPage,
});
