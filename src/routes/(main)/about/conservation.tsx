import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";

const SECTIONS: ContentBlock[] = [
	{
		heading: "Project Tiger — The Foundation",
		body: "Ranthambore's conservation success story begins with Project Tiger, launched in 1973 under Prime Minister Indira Gandhi. The project provided legal protection, dedicated funding, and scientific management to nine tiger reserves across India. Ranthambore's tiger population, which had fallen dangerously low in the early 1970s, recovered dramatically under this programme — a testament to what committed conservation can achieve.",
	},
	{
		heading: "Anti-Poaching Measures",
		body: "The Forest Department of Rajasthan maintains a round-the-clock anti-poaching network within the reserve. Camera traps, GPS-tagged tigers (in select cases), forest guard patrols, and collaboration with intelligence agencies form a multi-layered defence. Poaching remains a concern across India, but Ranthambore's track record of protection is among the best in the country.",
	},
	{
		heading: "Community Conservation",
		body: "No conservation effort succeeds without the support of local communities. Ranthambore has been at the forefront of eco-development, creating economic opportunities for villages around the buffer zone through eco-tourism, guided nature walks, cultural experiences, and organic farming. Several resorts and safari operators actively support local employment and community conservation funds.",
	},
	{
		heading: "NGOs & Research",
		body: "Organisations like the Wildlife Institute of India (WII), WWF India, and the Tiger Conservation Society have conducted extensive research on tiger ecology, prey dynamics, and corridor management in and around Ranthambore. This research informs management decisions and helps ensure the long-term viability of the tiger population.",
	},
];

export const Route = createFileRoute("/(main)/about/conservation")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Tiger Conservation at Ranthambore | Project Tiger & Wildlife Protection Efforts",
			},
			{
				name: "description",
				content:
					"Learn how Ranthambore's tigers are protected through Project Tiger, anti-poaching measures, community involvement, and international conservation partnerships.",
			},
		],
	}),
	component: ConservationPage,
});

function ConservationPage() {
	return (
		<GuidePage
			eyebrow="About Ranthambore"
			title={
				<>
					Protecting the
					<br className="hidden lg:block" /> Royal Bengal Tiger
				</>
			}
			subtitle="From Project Tiger to community partnerships — how Ranthambore became one of India's greatest conservation success stories."
			image="/tiger-footstep.png"
			sections={SECTIONS}
		/>
	);
}
