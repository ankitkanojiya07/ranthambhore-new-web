import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/flora")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Flora of Ranthambore National Park | Trees, Plants & Forest Types",
			},
			{
				name: "description",
				content:
					"Explore Ranthambore's plant life — tropical dry deciduous forest dominated by dhok, with banyan, palash, tendu, and savannah grasslands supporting the park's wildlife.",
			},
		],
	}),
	component: FloraPage,
});

const SECTIONS = [
	{
		heading: "Forest Type",
		body: "Ranthambore's plant life is dominated by tropical dry deciduous forest. The dhok tree is omnipresent — its broad canopy providing shade in summer and dramatically shedding leaves by February, which opens up visibility for tiger tracking. Grasslands and open areas are covered in tall savannah grasses that support deer and antelope populations.",
	},
	{
		heading: "Dominant Tree Species",
		body: "The dominant vegetation type is tropical dry deciduous forest, with dhok (Anogeissus pendula) being the most common tree, covering roughly 80% of the forested area.",
		items: [
			"Dhok (Anogeissus pendula): The backbone of Ranthambore's forest — broad summer canopy, leafless by February for improved wildlife visibility.",
			"Indian Gooseberry (Amla): A prominent understory species found throughout the dry deciduous forest.",
			"Flame of the Forest (Palash): Bursts into vivid orange-red bloom, marking the arrival of spring in the reserve.",
			"Tendu: Hardy deciduous tree whose leaves are woven into the local economy.",
			"Kardhai: Drought-resistant species adapted to the arid Rajasthan climate.",
		],
	},
	{
		heading: "Other Notable Trees",
		body: "Beyond dhok, the park's canopy includes several culturally and ecologically significant species.",
		items: [
			"Banyan and Pipal: Sacred fig species providing shade and nesting sites for birds and primates.",
			"Mango and Jamun: Fruiting trees that attract birds, monkeys, and other frugivores.",
			"Banyan, pipal, flame of the forest (palash), mango, and jamun trees are common across the reserve.",
		],
	},
	{
		heading: "Undergrowth & Grasslands",
		body: "The undergrowth and open areas complete the habitat mosaic that sustains Ranthambore's diverse wildlife.",
		items: [
			"Grasses, shrubs, and creepers provide cover for smaller mammals and ground-nesting birds.",
			"Tall savannah grasses in open areas support robust deer and antelope populations.",
			"Seasonal changes in undergrowth density directly affect predator visibility and prey behaviour.",
		],
	},
];

function FloraPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Flora of Ranthambore</>}
			subtitle="The dry deciduous forest that sustains every creature in the reserve"
			image="/house.png"
			stats={[
				{ value: "80", unit: "%", label: "Dhok Forest Cover", index: "01" },
				{
					value: "Dry",
					unit: "",
					label: "Deciduous Forest",
					index: "02",
				},
				{ value: "5", unit: "+", label: "Key Tree Species", index: "03" },
				{ value: "Feb", unit: "", label: "Peak Leaf Shed", index: "04" },
			]}
			sections={SECTIONS}
		/>
	);
}
