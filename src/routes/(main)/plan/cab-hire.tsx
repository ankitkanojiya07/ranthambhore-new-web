import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/plan/cab-hire")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Cab Hire in Ranthambore | Private Taxi Service in Sawai Madhopur",
			},
			{
				name: "description",
				content:
					"Book a private cab or taxi in Ranthambore for airport transfers, local sightseeing, Chambal safari, and inter-city travel. Reliable, pre-booked local drivers.",
			},
		],
	}),
	component: CabHirePage,
});

function CabHirePage() {
	return (
		<GuidePage
			eyebrow="Plan Your Visit"
			title="Cab Hire"
			subtitle="Pre-booked private cabs for transfers, sightseeing, and inter-city travel."
			image="/gallery/8.jpg"
			sections={[
				{
					heading: "Why Pre-Book a Cab?",
					body: "Getting around Ranthambore is easiest with a pre-booked private cab. Whether you need a pick-up from Sawai Madhopur station, transfers between your hotel and the safari gate, a day trip to the Chambal river, or an inter-city run to Jaipur or Agra, a local, knowledgeable driver makes the experience seamless.",
				},
				{
					heading: "Services Available",
					body: "From airport pickups to multi-day Rajasthan road trips — we cover every transport need.",
					items: [
						"Airport & Railway Station Transfers (Sawai Madhopur, Jaipur)",
						"Hotel to Safari Gate & Return",
						"Half-day and full-day local sightseeing (Fort, temples, Chambal)",
						"Inter-city transfers: Ranthambore to Jaipur, Agra, Delhi, Bharatpur",
						"Multi-day Rajasthan itineraries",
					],
				},
				{
					heading: "Vehicle Options",
					body: "Choose the right vehicle based on your group size and luggage.",
					items: [
						"AC Sedan: Suitable for 2–3 passengers with luggage",
						"AC SUV/Innova: Comfortable for 4–6 passengers",
						"AC Tempo Traveller: Ideal for groups of 7–12 passengers",
					],
				},
				{
					heading: "Book with Ranthambhor.com",
					body: "Contact our cab desk at Ranthambhor.com to get a quote and confirm your booking in advance. All our driver-partners are police-verified, licensed, and fluent in Hindi and basic English.",
				},
			]}
		/>
	);
}
