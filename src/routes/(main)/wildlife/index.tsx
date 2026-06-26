import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "#/components/pages/SectionLanding";
import { NAV_ITEMS } from "#/lib/navigation";

const wildlifeNav = NAV_ITEMS.find((item) => item.href === "/wildlife");

export const Route = createFileRoute("/(main)/wildlife/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Wildlife of Ranthambore | Tigers, Leopards, Birds, Reptiles & Flora",
			},
			{
				name: "description",
				content:
					"A complete wildlife encyclopaedia for Ranthambore National Park — from Bengal tigers and leopards to rare birds, reptiles, and the park's rich plant life.",
			},
		],
	}),
	component: WildlifeLandingPage,
});

function WildlifeLandingPage() {
	return (
		<SectionLanding
			eyebrow="Wildlife"
			title={<>Ranthambore Wildlife Encyclopedia</>}
			subtitle="Predators, prey, birds, reptiles, and the forest that holds them all"
			intro="Ranthambore is far more than a tiger park. Step inside and you enter a complete, functioning ecosystem — predators and prey, birds and insects, trees and rivers all interlocked in a web of life that has evolved over thousands of years. This section is your encyclopaedia of Ranthambore's wildlife: use it before your safari to learn what to look for, and after your visit to identify what you saw."
			links={wildlifeNav?.children ?? []}
			image="/tiger.png"
			ctaTitle="Ready to See It for Yourself?"
			ctaDescription="Book a safari and put this encyclopaedia to work in the field — with a naturalist guide who knows every call, track, and territory."
		/>
	);
}
