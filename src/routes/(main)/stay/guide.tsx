import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/stay/guide")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Where to Stay in Ranthambore | Zone-wise Hotel Guide & Area Tips",
			},
			{
				name: "description",
				content:
					"Choose the right area to stay in Ranthambore — Ranthambore Road, Sherpur, Sawai Madhopur town, and zone-wise recommendations for Zones 1–10.",
			},
		],
	}),
	component: StayGuidePage,
});

function StayGuidePage() {
	return (
		<GuidePage
			eyebrow="Stay"
			title="Where to Stay Guide"
			subtitle="Match your hotel location to your safari zones for the best Ranthambore experience."
			image="/gallery/5.jpg"
			sections={[
				{
					heading: "Where to Stay — A Quick Guide",
					body: "Each area around Ranthambore offers a different experience. Choose based on your budget, preferred safari zones, and how close you want to be to the park gates.",
					items: [
						"Ranthambore Road (Sawai Madhopur – Ranthambore corridor): The main accommodation strip. Properties here are within 5–10 km of the main park gates and offer the widest range of options. Ideal for all budgets.",
						"Sherpur/Kachida area: Properties near the lesser-visited zones 4–5. Great for solitude and nature immersion; expect a slightly longer drive to the core zones.",
						"Sawai Madhopur town: Budget guesthouses and transit hotels for visitors on tight schedules.",
					],
				},
				{
					heading: "Zone-wise Recommendations",
					body: [
						"If you are primarily targeting Zones 1–3: Stay along the main Ranthambore Road or near the Sawai Madhopur gate.",
						"If your interest lies in Zones 4–5: Sherpur-area properties are closer and quieter.",
						"For buffer zone safaris (Zones 6–10): Properties near the Keladevi or Karauli gates are best placed.",
					],
				},
			]}
		/>
	);
}
