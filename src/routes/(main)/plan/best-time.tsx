import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/plan/best-time")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Best Time to Visit Ranthambore | Season-wise Guide for Tiger Sightings",
			},
			{
				name: "description",
				content:
					"When is the best time to visit Ranthambore? A month-by-month guide covering tiger sighting probability, weather, crowd levels, and seasonal highlights.",
			},
		],
	}),
	component: BestTimePage,
});

function BestTimePage() {
	return (
		<GuidePage
			eyebrow="Plan Your Visit"
			title="Best Time to Visit"
			subtitle="Season-by-season guide to tiger sightings, weather, and crowd levels at Ranthambore."
			image="/gallery/14.jpg"
			sections={[
				{
					heading: "Peak Season: October to March",
					body: "This is when Ranthambore shines. The weather is cool and comfortable, the vegetation has thinned after the monsoon, and wildlife is highly active. Tiger sightings are at their most frequent, especially from November to February when the dry air brings exceptional visibility. Migratory birds arrive from October onwards, adding birding excitement to every safari.",
				},
				{
					heading: "Shoulder Season: April to June",
					body: "As summer builds, the forest sheds its leaves and animals congregate around the shrinking water sources — primarily the three main lakes. This actually increases tiger sighting probability in certain zones as the animals are more concentrated and predictable. Temperatures are extreme (40–45°C in May and June), but the safaris are early morning and late afternoon, avoiding the worst of the heat. This is the professional wildlife photographer's favourite time.",
				},
				{
					heading: "Closed Season: July to September (Monsoon)",
					body: "The park closes on 1 July and reopens on 1 October every year. The monsoon brings spectacular green transformation to the forest, replenishes the lakes, and allows the wildlife to recover undisturbed. Some resorts offer 'monsoon packages' for guests who want to experience the landscape in this quiet, dramatic form — without safaris.",
				},
				{
					heading: "Month-by-Month Summary",
					body: "A quick reference for what to expect each month at Ranthambore.",
					items: [
						"October: Reopening month. Forest green and lush. Tiger sightings increasing. Excellent birding.",
						"November–January: Peak season. Cool weather, brilliant tiger activity, migratory birds abundant.",
						"February–March: Vegetation thins. Light excellent for photography. Tiger cubs often visible.",
						"April–June: Hot but thrilling. Water-hole action concentrated. Best tiger sighting probability.",
						"July–September: Park closed.",
					],
				},
			]}
		/>
	);
}
