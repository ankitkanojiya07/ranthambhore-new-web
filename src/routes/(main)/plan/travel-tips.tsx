import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/plan/travel-tips")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Travel Tips | Packing List, Safety Tips & Expert Advice",
			},
			{
				name: "description",
				content:
					"Essential travel tips for Ranthambore — what to pack, health precautions, money and connectivity tips, and how to make the most of your wildlife trip.",
			},
		],
	}),
	component: TravelTipsPage,
});

function TravelTipsPage() {
	return (
		<GuidePage
			eyebrow="Plan Your Visit"
			title="Travel Tips"
			subtitle="Packing, health, connectivity, and responsible tourism advice for your Ranthambore trip."
			image={false}
			showWhyChoose={false}
			sections={[
				{
					heading: "Packing List",
					layout: "full",
					body: "Everything you need for comfortable safaris and a smooth stay in tiger country.",
					items: [
						"Light, earth-toned clothing (avoid bright colours on safari)",
						"Warm layers for early morning winter safaris (October to February)",
						"Good quality binoculars (8x42 or 10x42 recommended)",
						"Camera with telephoto lens (300mm minimum; 400–600mm ideal for tigers)",
						"Sunscreen (SPF 50+), sunglasses, and a brimmed hat",
						"Insect repellent (mosquitoes are present, especially at dusk near water)",
						"Personal medications and a basic first aid kit",
						"Power bank and universal travel adapter",
						"Cash (ATMs are available in Sawai Madhopur town but may not be reliable in remote areas)",
					],
				},
				{
					heading: "Health & Safety",
					layout: "full",
					body: "Stay healthy and prepared throughout your Ranthambore visit.",
					items: [
						"Malaria prophylaxis is recommended — consult your doctor before travel if visiting during or just after monsoon.",
						"Drink only bottled or filtered water. Most hotels provide safe drinking water.",
						"Basic gastric medication is useful for any digestive upsets during travel.",
						"The nearest hospitals are in Sawai Madhopur town. For serious medical emergencies, Jaipur is approximately 3 hours away.",
					],
				},
				{
					heading: "Mobile & Internet",
					layout: "full",
					body: "Airtel and Jio have the best mobile coverage in the Ranthambore area. Coverage inside the forest is generally non-existent, which is actually refreshing — it forces a complete digital detox during safari hours. Most hotels and resorts offer Wi-Fi.",
				},
				{
					heading: "Money",
					layout: "full",
					body: "Carry sufficient cash. While most hotels and resorts accept cards, many local dhabas, guides, and transport operators work primarily in cash. ATMs are available in Sawai Madhopur town, though queues can be long during peak season.",
				},
				{
					heading: "Responsible Tourism",
					layout: "full",
					body: "Help preserve Ranthambore's wilderness for future generations.",
					items: [
						"Do not purchase wildlife products — ivory, tiger skin, turtle shell items, or any other products derived from wild animals are illegal and harmful.",
						"Support local guides, local restaurants, and local craft shops where possible.",
						"Leave no waste behind — carry a reusable bag for your rubbish.",
						"Water conservation: forests are fragile ecosystems; avoid wasteful water use at your hotel.",
					],
				},
			]}
		/>
	);
}
