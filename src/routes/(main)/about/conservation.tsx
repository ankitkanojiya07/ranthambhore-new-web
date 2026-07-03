import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";
import { ABOUT_PAGES } from "#/lib/about-ranthambore-pages";

const page = ABOUT_PAGES.conservation;

export const Route = createFileRoute("/(main)/about/conservation")({
	staticData: { navOverlay: true },
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

function ConservationPage() {
	return <GuidePage {...page} />;
}
