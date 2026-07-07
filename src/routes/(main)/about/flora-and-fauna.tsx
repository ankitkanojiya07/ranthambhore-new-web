import { createFileRoute } from "@tanstack/react-router";
import { FloraAndFaunaPage } from "#/components/pages/FloraAndFaunaPage";

export const Route = createFileRoute("/(main)/about/flora-and-fauna")({
	staticData: { navOverlay: false },
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
	component: FloraAndFaunaPage,
});
