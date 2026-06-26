import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "#/components/pages/SectionLanding";
import { NAV_ITEMS } from "#/lib/navigation";

const stayNav = NAV_ITEMS.find((item) => item.href === "/stay");

export const Route = createFileRoute("/(main)/stay/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title: "Stay in Ranthambore | Hotels, Resorts & Accommodation Guide",
			},
			{
				name: "description",
				content:
					"Find the best places to stay near Ranthambore National Park — luxury jungle lodges, boutique resorts, and budget guesthouses, all handpicked for location and quality.",
			},
		],
	}),
	component: StayLandingPage,
});

function StayLandingPage() {
	return (
		<SectionLanding
			eyebrow="Stay"
			title="Hotels & Resorts"
			subtitle="From royal tented camps to family-run guesthouses — find your perfect base for the wild."
			intro="Where you stay in Ranthambore is as important as where you safari. The right hotel puts you close to the forest gates, ensures you reach the morning safari briefing on time, and provides a comfortable refuge after an exhilarating day in the wild. Ranthambore's accommodation ranges from ultra-luxury tented camps used by royalty to characterful family-run guesthouses — and everything in between."
			links={stayNav?.children ?? []}
			image="/gallery/2.jpg"
			ctaTitle="Need Help Choosing a Hotel?"
			ctaDescription="Tell us your budget, preferred zone, and travel dates — we'll recommend the best properties for your Ranthambore trip."
		/>
	);
}
