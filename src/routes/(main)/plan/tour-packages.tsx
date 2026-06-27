import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/plan/tour-packages")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Tour Packages | 1 Night to 7 Night Wildlife & Heritage Packages",
			},
			{
				name: "description",
				content:
					"Choose from our curated Ranthambore tour packages — wildlife safaris, heritage tours, photography packages, honeymoon specials, and multi-destination Rajasthan tours.",
			},
		],
	}),
	component: TourPackagesPage,
});

function TourPackagesPage() {
	return (
		<GuidePage
			eyebrow="Plan Your Visit"
			title="Tour Packages"
			subtitle="Curated wildlife and heritage itineraries — from weekend escapes to Golden Triangle tours."
			image="/gallery/9.jpg"
			sections={[
				{
					heading: "Why Book a Package?",
					body: "A well-planned tour package removes all the stress of travel logistics and lets you focus entirely on the experience. Our Ranthambore packages are crafted by local experts who have spent years inside the park — so every element, from zone selection and hotel choice to wildlife briefings and day-trip suggestions, is tuned to maximise your experience.",
				},
				{
					heading: "Package Overview",
					body: "Our most popular curated itineraries — each designed by local experts who know the park inside out.",
					items: [
						"1 Night / 2 Days: Perfect for a quick weekend escape. Includes 2 safaris, one night stay, and transfers. Ideal for travellers from Delhi or Jaipur.",
						"2 Nights / 3 Days: Our most popular package. 3–4 safaris, comfortable hotel, and a Chambal boat trip included.",
						"3 Nights / 4 Days: A comprehensive experience — multiple zones, wildlife briefings, fort visit, and temple tour. Best for first-timers.",
						"Photography Package (3–4 Nights): Optimised zone selection, jeep-only safaris in the best light, pre- and post-safari briefings, and optional photographer guide with deep species knowledge.",
						"Honeymoon Package: Luxury tented camp, candlelit dinners, nature walks, and private safaris for two.",
						"Golden Triangle + Ranthambore (6–7 Nights): Delhi – Agra – Ranthambore – Jaipur – Delhi. A classic India tour combining the Taj Mahal, tiger country, and Rajasthan's pink city.",
					],
				},
				{
					heading: "Custom Packages",
					body: "No two travellers are the same. Tell us your interests, budget, group size, and travel dates, and we will craft a custom itinerary specifically for you. Fill in the enquiry form on our Contact page or call us directly.",
				},
			]}
		/>
	);
}
