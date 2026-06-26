import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute(
	"/(main)/wildlife/reptiles-and-amphibians",
)({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Reptiles & Amphibians of Ranthambore | Crocodiles, Snakes & Lizards",
			},
			{
				name: "description",
				content:
					"Ranthambore's reptiles include mugger crocodiles, monitor lizards, Indian rock pythons, and multiple snake species. A guide for naturalists and curious visitors.",
			},
		],
	}),
	component: ReptilesPage,
});

const SECTIONS = [
	{
		heading: "Crocodilians",
		body: "The lakes and rivers of Ranthambore support healthy crocodile populations that are among the most visible reptiles in the park.",
		items: [
			"Mugger Crocodile (Crocodylus palustris): One of the most visible animals in the park, especially in summer. Large individuals up to 4 metres long bask on the mudbanks of the lakes, occasionally sharing territory with tigers who come to drink.",
		],
	},
	{
		heading: "Lizards & Tortoises",
		body: "Dry rocky terrain and scrubland across the reserve support a variety of lizards and tortoises adapted to Rajasthan's climate.",
		items: [
			"Indian Monitor Lizard (Bengal Monitor): Long, powerful lizards up to 1.5 metres; commonly seen on tracks, rocky areas, and near water.",
			"Indian Star Tortoise: Beautifully patterned tortoise; found in dry scrub areas of the buffer zone.",
			"Garden Lizard & Fan-throated Lizard: Colourful, territorial lizards common across dry rocky areas.",
		],
	},
	{
		heading: "Snakes",
		body: "Ranthambore's herpetological diversity includes India's largest snake and several venomous species — present but rarely encountered by safari visitors.",
		items: [
			"Indian Rock Python: India's largest snake; a constrictor that can exceed 4 metres. Seen near water and in rocky crevices.",
			"Indian Cobra, Russell's Viper, and Saw-scaled Viper: Venomous species — present but rarely encountered by safari visitors.",
			"Rat Snake, Common Wolf Snake, and Trinket Snake: Non-venomous species commonly encountered during safaris.",
		],
	},
];

function ReptilesPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Reptiles &amp; Amphibians</>}
			subtitle="Crocodiles, pythons, monitors, and the hidden world of scales"
			image="/map.png"
			stats={[
				{ value: "4", unit: "m", label: "Max Crocodile Length", index: "01" },
				{ value: "4", unit: "m+", label: "Rock Python Length", index: "02" },
				{ value: "3", unit: "", label: "Major Lake Habitats", index: "03" },
				{ value: "6", unit: "+", label: "Snake Species", index: "04" },
			]}
			sections={SECTIONS}
			ctaTitle="See Reptiles in the Wild"
			ctaDescription="Summer safaris around Padam Talab offer the best chance of spotting mugger crocodiles basking on mudbanks."
			ctaButtonText="Book a Safari"
		/>
	);
}
