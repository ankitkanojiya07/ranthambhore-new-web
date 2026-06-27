import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "#/components/pages/SectionLanding";
import { NAV_ITEMS } from "#/lib/navigation";

const aboutChildren =
	NAV_ITEMS.find((item) => item.label === "About Ranthambore")?.children ?? [];

export const Route = createFileRoute("/(main)/about/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"About Ranthambore National Park | History, Geography & Wildlife Overview",
			},
			{
				name: "description",
				content:
					"Learn about Ranthambore National Park — its rich history, landscape, wildlife, and heritage. Your complete introduction to one of India's greatest wild places.",
			},
		],
	}),
	component: AboutLandingPage,
});

function AboutLandingPage() {
	return (
		<SectionLanding
			eyebrow="About Ranthambore"
			title={
				<>
					A Living Story of
					<br className="hidden lg:block" /> Conservation &amp; Wild Beauty
				</>
			}
			subtitle="History, geography, wildlife, and heritage in one of India's greatest wild places."
			intro="Ranthambore is not just a national park — it is a living story of conservation, royalty, and the raw power of nature. Spread across roughly 1,334 sq km of protected forest in southeastern Rajasthan, this tiger reserve sits at the junction of the Aravalli and Vindhya hill ranges, creating a dramatic landscape of rocky ridges, seasonal rivers, and tranquil lakes. The name Ranthambore is derived from two Hindi words — 'Ran' (battle) and 'Stambha' (pillar), a nod to the legendary fort that has stood watch over this land for over a thousand years. Today the park is managed as part of Project Tiger and remains one of India's most successful examples of big-cat conservation."
			links={aboutChildren}
			image="/tiger.png"
		/>
	);
}
