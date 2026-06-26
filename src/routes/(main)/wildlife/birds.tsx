import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/birds")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title: "Birds of Ranthambore | 300+ Species Guide for Birdwatchers",
			},
			{
				name: "description",
				content:
					"Ranthambore has 300+ bird species including painted storks, fish eagles, paradise flycatchers, and migratory visitors. Your complete birding guide to the park.",
			},
		],
	}),
	component: BirdsPage,
});

const SECTIONS = [
	{
		heading: "Waterbirds",
		body: "Ranthambore's three major lakes — Padam Talab, Raj Bagh Talab, and Malik Talab — attract extraordinary waterbird activity, especially in the dry summer months.",
		items: [
			"Painted Stork: Striking pink-and-white wading bird; breeds colonially on trees near Padam Talab.",
			"Woolly-necked Stork: Iridescent black body with snowy white neck and belly; seen near wetlands.",
			"Grey Heron & Purple Heron: Common along all water edges.",
			"Little Cormorant & Indian Cormorant: Often seen drying wings on rocks at lakeside.",
			"Indian Darter / Snakebird: Spears fish with its dagger bill; distinctive sinuous neck.",
		],
	},
	{
		heading: "Raptors",
		body: "The park's rocky ridges and open canopy provide ideal hunting grounds for birds of prey throughout the year.",
		items: [
			"Crested Serpent Eagle: Iconic forest raptor with a distinctive fan-like crest; frequently heard calling over the canopy.",
			"Grey-headed Fish Eagle: Large, powerful eagle specialising in fish; regularly seen near the lakes.",
			"Changeable Hawk-Eagle: Swift, agile forest raptor.",
			"Booted Eagle, Tawny Eagle, and Steppe Eagle: Winter visitors; raptors are diverse at Ranthambore.",
		],
	},
	{
		heading: "Forest Birds",
		body: "Ranthambore's dry deciduous forest and scrubland support a colourful array of resident species that reward patient birdwatchers.",
		items: [
			"Indian Roller: A flash of iridescent blue and turquoise across open clearings — one of the park's most colourful birds.",
			"Indian Paradise Flycatcher: The male's long white tail ribbons trailing through the forest are an unforgettable sight.",
			"Indian Pitta: Jewel-like colours, usually heard before seen; best found near water and in thick undergrowth.",
			"Plum-headed Parakeet, Rose-ringed Parakeet: Colourful, noisy, found around fruiting trees.",
		],
	},
	{
		heading: "Wintering Migrants",
		body: "From October to March, Ranthambore hosts substantial numbers of migratory waterbirds and raptors from Central Asia and beyond.",
		items: [
			"Bar-headed geese and ruddy shelduck rest on the lakes.",
			"Common teals, pintails, and shovellers share the water with resident ducks.",
			"Pied and common kingfishers flash along every waterway.",
			"Various warblers and raptors arrive with the cooler months, adding seasonal diversity for serious birdwatchers.",
		],
	},
];

function BirdsPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Birds of Ranthambore</>}
			subtitle="300+ species across lakes, forest, cliffs, and scrubland"
			image="/house.png"
			stats={[
				{ value: "300", unit: "+", label: "Bird Species", index: "01" },
				{ value: "4", unit: "", label: "Major Habitats", index: "02" },
				{ value: "Oct", unit: "–Mar", label: "Migration Season", index: "03" },
				{ value: "3", unit: "", label: "Major Lakes", index: "04" },
			]}
			sections={SECTIONS}
			ctaTitle="Birding at Dawn"
			ctaDescription="The first morning safari slot offers the best light and the highest bird activity around the lakes and forest edges."
			ctaButtonText="Book a Safari"
		/>
	);
}
