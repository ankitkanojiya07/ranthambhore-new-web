import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "#/components/pages/SectionLanding";
import { NAV_ITEMS } from "#/lib/navigation";

const safariNav = NAV_ITEMS.find((item) => item.href === "/safari");

export const Route = createFileRoute("/(main)/safari/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari | Jeep Safari, Canter Safari & Chambal Boat Safari Booking",
			},
			{
				name: "description",
				content:
					"Book your Ranthambore tiger safari online. Choose from jeep (gypsy) safari, canter safari, or Chambal river boat safari. Expert tips on zones, timing & booking.",
			},
		],
	}),
	component: SafariLandingPage,
});

function SafariLandingPage() {
	return (
		<SectionLanding
			eyebrow="Safari"
			title={
				<>
					Into the
					<br className="hidden lg:block" /> Heart of the Wild
				</>
			}
			subtitle="Jeep, canter, and river safaris — your gateway to Ranthambore's tigers."
			intro="A safari in Ranthambore is unlike any other wildlife experience in India. This is one of the few places where you can encounter a wild Bengal tiger at close range — not through luck alone, but because of the park's open landscape, bold tigers, and expertly managed safari system. Whether you opt for the intimate Jeep safari, the sociable Canter ride, or the unique Chambal river experience, every safari here holds the promise of the extraordinary."
			links={safariNav?.children ?? []}
			image="/hero/1.webp"
		/>
	);
}
