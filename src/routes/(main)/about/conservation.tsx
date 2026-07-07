import { createFileRoute } from "@tanstack/react-router";
import { ConservationPage } from "#/components/pages/ConservationPage";

export const Route = createFileRoute("/(main)/about/conservation")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Conservation at Ranthambore | Project Tiger & Protection Efforts",
			},
			{
				name: "description",
				content:
					"Learn about Ranthambore conservation, Project Tiger, anti-poaching protection, community engagement, tiger recovery, and sustainable wildlife tourism.",
			},
		],
	}),
	component: ConservationPage,
});
