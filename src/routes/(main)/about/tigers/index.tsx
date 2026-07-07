import { createFileRoute } from "@tanstack/react-router";
import { TigersPage } from "#/components/pages/TigersPage";

export const Route = createFileRoute("/(main)/about/tigers/")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title: "Tigers of Ranthambore | Famous Royal Bengal Tigers & Profiles",
			},
			{
				name: "description",
				content:
					"Meet the famous tigers of Ranthambore — Machali, Riddhi, Siddhi, Ustad, Dollar, Mala, and more. Explore individual tiger profiles and their stories.",
			},
		],
	}),
	component: TigersPage,
});
