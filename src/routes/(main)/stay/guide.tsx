import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";
import { buildPageHead } from "#/lib/seo";

export const Route = createFileRoute("/(main)/stay/guide")({
	staticData: { navOverlay: true },
	head: () =>
		buildPageHead({
			title: "Where to Stay in Ranthambore | Area Guide & Safari Gate Tips",
			description:
				"Choose the right area to stay for Ranthambore safaris — Ranthambore Road, Sherpur, Sawai Madhopur town, and practical tips by zone access.",
			path: "/stay/guide",
			breadcrumbs: [
				{ name: "Home", path: "/" },
				{ name: "Stay", path: "/stay/hotels" },
				{ name: "Area Guide", path: "/stay/guide" },
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
