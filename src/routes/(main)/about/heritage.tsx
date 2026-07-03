import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";
import { ABOUT_PAGES } from "#/lib/about-ranthambore-pages";

const page = ABOUT_PAGES.heritage;

export const Route = createFileRoute("/(main)/about/heritage")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title: "Ranthambore Heritage | Fort, Temples, Museums & Royal Legacy",
			},
			{
				name: "description",
				content:
					"Discover Ranthambore heritage, including the 10th-century fort, ancient temples, museums, royal hunting legacy, and modern conservation history.",
			},
		],
	}),
	component: HeritagePage,
});

function HeritagePage() {
	return <GuidePage {...page} />;
}
