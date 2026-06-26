import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/tigers")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Tigers of Ranthambore | Bengal Tiger Encyclopedia & Sighting Guide",
			},
			{
				name: "description",
				content:
					"Explore Ranthambore's Bengal tigers — population, behaviour, famous individuals, and the best zones for sightings. Your wildlife encyclopaedia entry for India's most iconic big cat.",
			},
		],
	}),
	component: WildlifeTigersPage,
});

const SECTIONS = [
	{
		heading: "The Royal Bengal Tiger",
		body: "The Bengal tiger (Panthera tigris tigris) is the undisputed star of Ranthambore. As of the latest census, the park and its buffer zones support over 60 tigers, making it one of the densest tiger populations in India. What makes Ranthambore exceptional is not just the number of tigers but their behaviour — they are unusually tolerant of safari vehicles and are frequently seen hunting, drinking, and playing in open daylight, giving visitors experiences that few wildlife reserves can match.",
	},
	{
		heading: "Famous Tigers of Ranthambore",
		body: "Individual tigers have shaped Ranthambore's global reputation. These are among the most celebrated residents — past and present.",
		items: [
			"Machhli (T-16): The legendary 'Queen of Ranthambore' and the most photographed tiger in the world. She lived to 19 years and became a global symbol of tiger conservation.",
			"Ustad (T-24): A large, striking male known for his bold personality. His story remains one of the most discussed in Indian wildlife conservation circles.",
			"Arrowhead (T-84): Currently one of the park's most sought-after tigresses, known for her distinctive arrow-shaped facial markings and frequent sightings near Zone 2.",
			"Sultan (T-72): A dominant male with a large territory, often seen around the Kachida Valley area.",
			"Riddhi (T-101): A relatively young tigress making her mark across Zones 3 and 4.",
		],
	},
	{
		heading: "Best Zones for Tiger Sightings",
		body: "Tigers are wild animals and unpredictable — every zone has its own magic. Historically, these areas have offered the highest probability of sightings.",
		items: [
			"Zones 2, 3, and 4 — including the main lakes and the historic area around Ranthambore Fort — have historically offered the highest probability of tiger sightings.",
			"Open lakeside terrain in Zones 1–3 provides excellent visibility, especially in the dry season when animals congregate at water.",
			"Zone 4 (Kachida Valley) offers dramatic rocky landscapes where dominant males like Sultan are often encountered.",
		],
	},
	{
		heading: "Identify Individual Tigers",
		body: "Every tiger has a unique stripe pattern, just like human fingerprints. Use our Tiger Identification Guide to recognise individual tigers by their markings during and after your safari. For the full story — famous tigers, territories, and conservation history — visit our dedicated Tigers of Ranthambore page in the About section.",
	},
];

function WildlifeTigersPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Tigers of Ranthambore</>}
			subtitle="India's most photographed big cats in their natural kingdom"
			image="/tiger.png"
			badge="60+ Bengal Tigers"
			stats={[
				{ value: "60", unit: "+", label: "Bengal Tigers", index: "01" },
				{
					value: "Top",
					unit: "",
					label: "Sighting Density in India",
					index: "02",
				},
				{ value: "3", unit: "", label: "Prime Zones (2, 3, 4)", index: "03" },
				{ value: "5", unit: "", label: "Famous Individuals", index: "04" },
			]}
			sections={SECTIONS}
			ctaTitle="Spot a Tiger in the Wild"
			ctaDescription="Book a jeep safari in Zones 2–4 for the best chance of a daylight Bengal tiger encounter."
			ctaButtonText="Book a Safari"
		/>
	);
}
