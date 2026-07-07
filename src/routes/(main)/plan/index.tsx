import { createFileRoute } from "@tanstack/react-router";
import { PlanYourVisitPage } from "#/components/pages/PlanYourVisitPage";

export const Route = createFileRoute("/(main)/plan/")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Plan Your Visit to Ranthambhore | Complete Travel & Safari Journey Guide",
			},
			{
				name: "description",
				content:
					"Plan your Ranthambhore trip step by step — how to reach by train or road, where to stay, book your safari, choose Gypsy or Canter, and what to pack.",
			},
		],
	}),
	component: PlanYourVisitPage,
});
