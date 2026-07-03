import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";
import { ABOUT_PAGES } from "#/lib/about-ranthambore-pages";

const page = ABOUT_PAGES.wildlife;

export const Route = createFileRoute("/(main)/about/flora-and-fauna")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Wildlife, Flora & Fauna of Ranthambore | Complete Species Guide",
			},
			{
				name: "description",
				content:
					"Explore Ranthambore wildlife, flora, fauna, dhok forest, Bengal tigers, leopards, sloth bears, crocodiles, pythons, and more than 300 bird species.",
			},
		],
	}),
	component: WildlifePage,
});

function WildlifePage() {
	return <GuidePage {...page} />;
}
