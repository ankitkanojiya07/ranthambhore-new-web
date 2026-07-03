import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";
import { ABOUT_PAGES } from "#/lib/about-ranthambore-pages";

const page = ABOUT_PAGES.nationalPark;

export const Route = createFileRoute("/(main)/about/national-park")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title: "Ranthambore National Park | Where History Meets the Wild",
			},
			{
				name: "description",
				content:
					"Explore Ranthambore National Park, its tiger reserve landscape, history, wildlife, lakes, fort, and reasons to visit this celebrated Rajasthan wilderness.",
			},
		],
	}),
	component: NationalParkPage,
});

function NationalParkPage() {
	return <GuidePage {...page} />;
}
