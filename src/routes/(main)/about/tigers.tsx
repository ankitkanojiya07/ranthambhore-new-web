import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";
import { ABOUT_PAGES } from "#/lib/about-ranthambore-pages";

const page = ABOUT_PAGES.tigers;

export const Route = createFileRoute("/(main)/about/tigers")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title: "Tigers of Ranthambore | Famous Royal Bengal Tigers & Profiles",
			},
			{
				name: "description",
				content:
					"Meet the famous tigers of Ranthambore, including Machli, Arrowhead, Krishna, Sultan, Noor, Riddhi, and Fateh, with a guide to tiger identification.",
			},
		],
	}),
	component: TigersPage,
});

function TigersPage() {
	return <GuidePage {...page} />;
}
