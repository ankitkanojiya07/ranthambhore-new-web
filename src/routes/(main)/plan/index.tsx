import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "#/components/pages/SectionLanding";
import { NAV_ITEMS } from "#/lib/navigation";

const planNav = NAV_ITEMS.find((item) => item.href === "/plan");

export const Route = createFileRoute("/(main)/plan/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Plan Your Ranthambore Trip | Safari Tips, Packages & Practical Travel Guide",
			},
			{
				name: "description",
				content:
					"Everything you need to plan the perfect Ranthambore trip — best season, how to reach, do's and don'ts, cab hire, tour packages, and expert travel tips.",
			},
		],
	}),
	component: PlanLandingPage,
});

function PlanLandingPage() {
	return (
		<SectionLanding
			eyebrow="Plan Your Visit"
			title="Plan Your Trip"
			subtitle="Timing, logistics, and expert tips for an unforgettable Ranthambore safari."
			intro="Planning a trip to Ranthambore is easier than you might think — but doing it right makes all the difference. The difference between a mediocre visit and an unforgettable one often comes down to timing, zone selection, and a well-organised itinerary. This section covers everything from the best months to visit to how to get here, what to pack, and what not to do."
			links={planNav?.children ?? []}
			image="/gallery/9.jpg"
		/>
	);
}
