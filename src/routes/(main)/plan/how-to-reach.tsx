import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/plan/how-to-reach")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"How to Reach Ranthambore | By Train, Road & Air from Delhi & Jaipur",
			},
			{
				name: "description",
				content:
					"Complete guide to reaching Ranthambore from Delhi, Jaipur, Mumbai, and Agra — by train, road, and air, with distances, timings, and tips.",
			},
		],
	}),
	component: HowToReachPage,
});

function HowToReachPage() {
	return (
		<GuidePage
			eyebrow="Plan Your Visit"
			title="How to Reach Ranthambore"
			subtitle="By train, road, and air — your complete transport guide to Sawai Madhopur."
			image={false}
			sections={[
				{
					heading: "By Train — Recommended",
					layout: "full",
					body: "Sawai Madhopur Railway Station is the gateway to Ranthambore and is excellently connected to India's major cities. The station is just 14 km from the park's main entrance.",
					items: [
						"From Delhi (Hazrat Nizamuddin): The Rajasthan Sampark Kranti Express and Intercity Express cover the journey in approximately 4.5–5 hours.",
						"From Jaipur: Multiple daily trains; journey time approximately 2 hours.",
						"From Mumbai (Bandra Terminus): Overnight trains available; journey approximately 14–16 hours.",
						"From Agra (Cantt): Trains via Bharatpur; approximately 3–4 hours.",
					],
				},
				{
					heading: "By Road",
					layout: "full",
					body: "Ranthambore is well connected by road from all major Rajasthan cities. Rajasthan State Road Transport Corporation (RSRTC) operates bus services to Sawai Madhopur from Jaipur and other major cities.",
					items: [
						"From Jaipur: 183 km via NH-48. Approximately 3–3.5 hours by car.",
						"From Delhi: 396 km via NH-48. Approximately 5–6 hours by car.",
						"From Agra: 252 km via NH-21. Approximately 4 hours by car.",
						"From Bharatpur (Keoladeo Bird Sanctuary): 166 km. Approximately 3 hours. Easy to combine both parks in one trip.",
					],
				},
				{
					heading: "By Air",
					layout: "full",
					body: "The nearest airport is Jaipur International Airport (JAI), approximately 176 km from Sawai Madhopur. Jaipur is connected to Delhi, Mumbai, Bengaluru, Kolkata, and other major cities. From the airport, hire a cab directly to Sawai Madhopur (approximately 3 hours) or take a connecting train.",
				},
				{
					heading: "Local Transport in Ranthambore",
					layout: "full",
					body: "Taxis, auto-rickshaws, and e-rickshaws are available in Sawai Madhopur town. For the most comfort and flexibility, we recommend pre-booking a private cab with your hotel or through Ranthambhor.com. See our Cab Hire in Ranthambore page for details.",
				},
			]}
		/>
	);
}
