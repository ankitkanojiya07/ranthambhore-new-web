import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";

const SECTIONS: ContentBlock[] = [
	{
		heading: "The Canter Experience",
		body: "The Canter safari is a shared, open-bus experience that accommodates up to 20 passengers. It is the more affordable option and a popular choice for groups, school trips, and budget-conscious travellers who still want the full Ranthambore experience. Canters are larger vehicles and are restricted to the main core zones (Zones 1–5 and 6), but within those zones they can still offer remarkable wildlife encounters.",
	},
	{
		heading: "Key Details",
		body: "Practical information for planning your canter safari.",
		layout: "card",
		items: [
			"Vehicle: Large, open-sided mini-bus (Canter)",
			"Capacity: Up to 20 passengers",
			"Duration: Approximately 3.5 to 4 hours per session",
			"Sessions: Morning and afternoon",
			"Cost: Approximately INR 800–1,200 per person (government fees included — verify current rates)",
		],
	},
	// {
	// 	heading: "Why Choose a Jeep Safari?",
	// 	body: "For serious wildlife enthusiasts and photographers, the jeep safari is the clear choice. The low seating position brings you closer to eye level with the wildlife. With fewer people than a canter, conversations are quieter and wildlife encounters more intimate. The vehicle can also reverse or reposition more easily when tracking an animal.",
	// 	layout: "card-text",
	// },
	// {
	// 	heading: "Canter vs Jeep — Which Is Right for You?",
	// 	body: "If you are travelling with a large group or on a tighter budget, the Canter is an excellent option. Tiger sightings are possible on Canters too — many visitors have had their best-ever tiger encounters on Canter safaris. However, for wildlife photography (especially with long lenses), the jeep is preferable due to fewer people and better vehicle positioning.",
	// 	layout: "card-text",
	// },
];

export const Route = createFileRoute("/(main)/safari/canter")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Canter Safari | Group Safari Booking & Experience Guide",
			},
			{
				name: "description",
				content:
					"The Canter safari at Ranthambore is perfect for groups and budget travellers. A 20-seater open bus takes you deep into the forest with a certified guide.",
			},
		],
	}),
	component: CanterSafariPage,
});

function CanterSafariPage() {
	return (
		<GuidePage
			eyebrow="Safari"
			title="Canter Safari"
			subtitle="A shared, open-bus experience — affordable, sociable, and still capable of extraordinary tiger encounters."
			image="/Home/canter.jpg"
			badge="Group Safari"
			statsSize="compact"
			stats={[
				{ value: "20", unit: "", label: "Max Passengers", index: "01" },
				{ value: "3.5-4", unit: "hrs", label: "Per Session", index: "02" },
				{ value: "2", unit: "", label: "Daily Sessions", index: "03" },
				{
					value: "800-1,200",
					unit: "INR",
					label: "Approx. Per Person",
					index: "04",
				},
			]}
			sections={SECTIONS}
			showWhyChoose={false}
		/>
	);
}
