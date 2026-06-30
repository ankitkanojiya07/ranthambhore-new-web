import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/plan/dos-and-donts")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title: "Ranthambore Do's & Don'ts | Safari Etiquette & Park Rules",
			},
			{
				name: "description",
				content:
					"Essential do's and don'ts for visiting Ranthambore National Park — park rules, safari etiquette, wildlife safety, and responsible tourism guidelines.",
			},
		],
	}),
	component: DosAndDontsPage,
});

function DosAndDontsPage() {
	return (
		<GuidePage
			showHero={false}
			showWhyChoose={false}
			sections={[
				{
					heading: "Do's",
					body: "Follow these guidelines to ensure a safe, respectful, and rewarding safari experience.",
					items: [
						"Do arrive at the gate at least 30 minutes before your safari departure time.",
						"Do carry a valid government-issued photo ID and a copy of your booking confirmation.",
						"Do wear muted, earthy colours — olive, khaki, beige, or brown. Avoid bright or neon clothing.",
						"Do carry a good pair of binoculars — they transform distant sightings into intimate encounters.",
						"Do bring sunscreen, a hat, and a light jacket (mornings can be cold October to February).",
						"Do listen to your naturalist guide — they know the animals, the tracks, and the signs.",
						"Do maintain silence in the forest — wildlife responds to sound.",
						"Do carry adequate water for the duration of the safari.",
					],
				},
				{
					heading: "Don'ts",
					layout: "full",
					body: "These rules protect wildlife, preserve the forest, and keep every visitor safe.",
					items: [
						"Don't bring or use plastic bags inside the park — they are prohibited.",
						"Don't play music or use your phone on loud speaker inside the park.",
						"Don't stand up or lean out of the vehicle at any point during the safari.",
						"Don't feed or attempt to attract wildlife in any way.",
						"Don't litter — take all waste back with you.",
						"Don't smoke inside the park — it is strictly prohibited and poses a fire risk.",
						"Don't wear or use strong perfumes or deodorants — strong scents alert wildlife.",
						"Don't book from unauthorized touts — always use official portals or certified operators.",
					],
				},
			]}
		/>
	);
}
