import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/conservation")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Tiger Conservation at Ranthambore | Project Tiger & Wildlife Protection",
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

const SECTIONS = [
	{
		heading: "Project Tiger — The Foundation",
		body: "Ranthambore's conservation success story begins with Project Tiger, launched in 1973 under Prime Minister Indira Gandhi. The project provided legal protection, dedicated funding, and scientific management to nine tiger reserves across India. Ranthambore's tiger population, which had fallen dangerously low in the early 1970s, recovered dramatically under this programme — a testament to what committed conservation can achieve.",
	},
	{
		heading: "Anti-Poaching Measures",
		body: "A multi-layered defence network protects the reserve's most vulnerable species around the clock.",
		items: [
			"The Forest Department of Rajasthan maintains a round-the-clock anti-poaching network within the reserve.",
			"Camera traps, GPS-tagged tigers (in select cases), forest guard patrols, and collaboration with intelligence agencies form a multi-layered defence.",
			"Poaching remains a concern across India, but Ranthambore's track record of protection is among the best in the country.",
		],
	},
	{
		heading: "Community Conservation",
		body: "No conservation effort succeeds without the support of local communities.",
		items: [
			"Ranthambore has been at the forefront of eco-development, creating economic opportunities for villages around the buffer zone.",
			"Eco-tourism, guided nature walks, cultural experiences, and organic farming provide sustainable livelihoods.",
			"Several resorts and safari operators actively support local employment and community conservation funds.",
		],
	},
	{
		heading: "NGOs & Research",
		body: "Scientific research and NGO partnerships inform management decisions and ensure the long-term viability of the tiger population.",
		items: [
			"Wildlife Institute of India (WII): Conducts extensive research on tiger ecology, prey dynamics, and corridor management in and around Ranthambore.",
			"WWF India: Supports conservation programmes and habitat protection initiatives across the tiger landscape.",
			"Tiger Conservation Society: Works on tiger monitoring, community engagement, and long-term population viability.",
			"Research from these organisations informs management decisions and helps ensure the long-term viability of the tiger population.",
		],
	},
];

function ConservationPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Conservation Projects</>}
			subtitle="How Ranthambore's tigers and ecosystems are protected for generations"
			image="/tiger-footstep.png"
			badge="Project Tiger Reserve"
			stats={[
				{ value: "1973", unit: "", label: "Project Tiger Launch", index: "01" },
				{ value: "60", unit: "+", label: "Tigers Today", index: "02" },
				{ value: "3", unit: "", label: "Key NGO Partners", index: "03" },
				{
					value: "24",
					unit: "/7",
					label: "Anti-Poaching Patrols",
					index: "04",
				},
			]}
			sections={SECTIONS}
			ctaTitle="Support Conservation Through Tourism"
			ctaDescription="Responsible safari tourism funds local employment and community conservation — your visit directly supports the protection of Ranthambore's tigers."
			ctaButtonText="Book a Safari"
		/>
	);
}
