import { createFileRoute } from "@tanstack/react-router";
import { SafariVehiclesPage } from "#/components/pages/SafariVehiclesPage";

export const Route = createFileRoute("/(main)/safari/jeep")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Jeep & Canter Safari | Gypsy and Group Safari Guide",
			},
			{
				name: "description",
				content:
					"Compare Ranthambore Gypsy (6-seater) and Canter (20-seater) safaris — capacity, cost, advantages, and which option suits your group best.",
			},
		],
	}),
	component: SafariVehiclesPage,
});
