import { createFileRoute } from "@tanstack/react-router";
import { NationalParkPage } from "#/components/pages/NationalParkPage";

export const Route = createFileRoute("/(main)/about/national-park")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title: "About Ranthambore National Park | History, Nature & Culture",
			},
			{
				name: "description",
				content:
					"Discover Ranthambore National Park — a tapestry of history, nature, and culture with tiger reserves, UNESCO heritage, and one of India's greatest wild landscapes.",
			},
		],
	}),
	component: NationalParkPage,
});
