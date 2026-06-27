import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/mammals")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Mammals of Ranthambore National Park | Complete List & Sighting Guide",
			},
			{
				name: "description",
				content:
					"From Bengal tigers and leopards to sloth bears and jungle cats — a complete guide to the mammals of Ranthambore National Park with sighting tips.",
			},
		],
	}),
	component: MammalsPage,
});

const SECTIONS = [
	{
		heading: "Big Cats",
		body: "Ranthambore's apex predators define the park's character. Both species are present throughout the reserve, but they occupy different niches and require different search strategies.",
		items: [
			"Bengal Tiger (Panthera tigris tigris): 60+ individuals. The park's apex predator and primary draw. Best seen around the lakes and open terrain of Zones 1–3.",
			"Leopard (Panthera pardus): Present throughout the park but cryptic. Rocky outcrops of Zones 4 and 5 offer the best chance of a sighting, usually at dawn or dusk.",
		],
	},
	{
		heading: "Other Carnivores",
		body: "Beyond the big cats, Ranthambore supports a diverse guild of mesopredators and scavengers that play vital roles in the ecosystem.",
		items: [
			"Sloth Bear (Melursus ursinus): Surprisingly common at Ranthambore. Frequently seen in the rocky areas and around termite mounds, especially in the early morning.",
			"Striped Hyena: Nocturnal and rarely seen, but signs (tracks, kills) are common in buffer zones.",
			"Jungle Cat: A medium-sized wildcat seen in tall grass and scrub. Often mistaken for a leopard cub.",
			"Indian Fox, Jackal, and Mongoose: Common across the park and easy to spot.",
		],
	},
	{
		heading: "Ungulates (Prey Species)",
		body: "Healthy herbivore populations sustain Ranthambore's tigers. Their alarm calls are often the first sign that a predator is nearby.",
		items: [
			"Sambar Deer (Cervus unicolor): The tiger's primary prey. Large deer with impressive antlers, commonly seen near water. Their alarm calls are the most reliable indicator of a tiger nearby.",
			"Chital / Spotted Deer (Axis axis): India's most beautiful deer, with white-spotted coats and elegant antlers. Found in large herds across open areas.",
			"Nilgai (Boselaphus tragocamelus): India's largest antelope, the blue bull, common across the park.",
			"Wild Boar (Sus scrofa): Stocky and surprisingly fast, found in family groups rooting through forest floor.",
			"Chinkara (Indian Gazelle): Slender and graceful, usually seen in the more arid buffer zones.",
		],
	},
	{
		heading: "Primates",
		body: "Ranthambore's monkeys are more than scenery — their alarm calls are a real-time early warning system for predators moving through the forest.",
		items: [
			"Hanuman Langur: Grey-coated monkeys with black faces, found throughout the forest. Their aerial alarm calls warn the entire jungle of a predator.",
			"Rhesus Macaque: Familiar, social monkeys found near human habitation, the fort, and forest edges.",
		],
	},
];

function MammalsPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Mammals of Ranthambore</>}
			subtitle="From apex predators to graceful prey — every mammal that calls the reserve home"
			image="/tiger-footstep.png"
			stats={[
				{ value: "40", unit: "+", label: "Mammal Species", index: "01" },
				{ value: "60", unit: "+", label: "Bengal Tigers", index: "02" },
				{ value: "6", unit: "", label: "Predator Species", index: "03" },
				{ value: "5", unit: "", label: "Ungulate Species", index: "04" },
			]}
			sections={SECTIONS}
		/>
	);
}
