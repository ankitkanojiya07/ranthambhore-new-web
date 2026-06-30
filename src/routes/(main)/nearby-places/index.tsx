import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";

const SECTIONS: ContentBlock[] = [
	{
		heading: "Multi-Destination Rajasthan",
		layout: "full",
		body: "Ranthambore's location in southeastern Rajasthan makes it a natural hub for multi-destination itineraries. India's most iconic cities and natural destinations are all within easy reach, making it possible to combine your Ranthambore safari with history, heritage, and additional wildlife experiences.",
	},
	{
		heading: "Jaipur — The Pink City",
		eyebrow: "175 km · ~3 hours by road",
		body: "The capital of Rajasthan and one of India's most vibrant cities. Jaipur's walled old city, the Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar are UNESCO World Heritage Sites. A natural pair with Ranthambore in any Rajasthan itinerary — most travellers add two to three nights here after their safari.",
		layout: "split",
		image: "/gallery/2.jpg",
		imageAlt: "Jaipur's Amber Fort overlooking the Aravalli hills",
		stretchImage: true,
	},
	{
		heading: "Agra — The Taj Mahal",
		eyebrow: "252 km · ~4 hours by road",
		body: "Home to three UNESCO World Heritage Sites — the Taj Mahal, Agra Fort, and Fatehpur Sikri. Agra makes Ranthambore the perfect addition to a classic Golden Triangle tour (Delhi–Agra–Jaipur). Adding Ranthambore creates a 'Golden Triangle Plus Tiger' itinerary that is among India's most popular routes.",
		layout: "split",
		image: "/gallery/3.jpg",
		imageAlt: "Historic Mughal architecture near Agra",
		stretchImage: true,
	},
	{
		heading: "Bharatpur — Keoladeo Bird Sanctuary",
		eyebrow: "166 km · ~3 hours by road",
		body: "One of the world's finest bird sanctuaries and a UNESCO World Heritage Site, Keoladeo (formerly Bharatpur Bird Sanctuary) is a paradise for birdwatchers. Over 370 species have been recorded here, including migratory cranes, pelicans, and raptors. Combining Ranthambore and Bharatpur in a single trip is a dream double-park experience for nature lovers.",
		layout: "split",
		image: "/Home/bird.jpg",
		imageAlt: "Migratory birds at Keoladeo National Park, Bharatpur",
		stretchImage: true,
	},
	{
		heading: "Bundi — The Poets' City",
		eyebrow: "164 km · ~3 hours by road",
		body: "One of Rajasthan's least touristy but most beautiful towns. Bundi's step-wells, painted haveli walls, and Taragarh Fort are extraordinary. Writer Rudyard Kipling stayed here and was inspired by its architecture. A wonderful contrast to the forest experience — quiet, artistic, and deeply atmospheric.",
		layout: "card-text",
	},
	{
		heading: "Karauli",
		eyebrow: "88 km · ~2 hours by road",
		body: "An authentic, little-visited Rajasthan town with a stunning maharaja's palace, ancient temples, and a strong cultural identity. The city god, Kaila Devi, is worshipped in a grand temple that draws thousands of pilgrims during the Navratri festival. Ideal as a half-day or overnight cultural detour.",
		layout: "card-text",
	},
	{
		heading: "Chambal Valley",
		eyebrow: "50–80 km · ~1 hour by road",
		body: "The Chambal River and its ravine landscape form one of India's most dramatic natural environments. The National Chambal Gharial Sanctuary offers boat safaris with gharial, dolphin, and skimmer sightings. The Chambal is also famous for its rich tribal and dacoit history — tours to the ravines are an unforgettable cultural experience.",
		layout: "split",
		image: "/Home/croc.jpg",
		imageAlt: "Crocodile basking on the banks of the Chambal River",
		stretchImage: true,
	},
	{
		heading: "Sample Itineraries",
		layout: "card",
		body: "Combine Ranthambore with these tried-and-tested multi-destination routes.",
		items: [
			"Golden Triangle Plus Tiger: Delhi → Agra → Ranthambore → Jaipur (7–9 days)",
			"Wildlife Double: Ranthambore → Bharatpur Bird Sanctuary (4–5 days)",
			"Rajasthan Heritage: Jaipur → Ranthambore → Bundi → Karauli (8–10 days)",
			"Chambal Day Trip: Morning boat safari on the Chambal River, back to Ranthambore by evening",
		],
	},
];

export const Route = createFileRoute("/(main)/nearby-places/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Places to Visit Near Ranthambore | Day Trips & Nearby Attractions",
			},
			{
				name: "description",
				content:
					"Explore places near Ranthambore — Jaipur, Agra, Bharatpur, Bundi, and the Chambal valley. Ideal for multi-destination Rajasthan itineraries.",
			},
		],
	}),
	component: NearbyPlacesPage,
});

function NearbyPlacesPage() {
	return (
		<GuidePage
			eyebrow="Nearby Places"
			title="Day Trips & Nearby Attractions"
			subtitle="Combine your Ranthambore safari with India's most iconic cities and natural destinations."
			image="/Home/ran1.jpg"
			badge="Multi-Destination Rajasthan"
			statsSize="compact"
			stats={[
				{ value: "175", unit: "km", label: "To Jaipur", index: "01" },
				{ value: "252", unit: "km", label: "To Agra", index: "02" },
				{ value: "166", unit: "km", label: "To Bharatpur", index: "03" },
				{ value: "50–80", unit: "km", label: "To Chambal", index: "04" },
			]}
			introTitle="Plan Beyond the Safari"
			intro="Ranthambore sits at the crossroads of Rajasthan's greatest destinations. Whether you want Mughal monuments, pink-city palaces, bird sanctuaries, or river safaris — everything is within a few hours' drive. Use this guide to build a richer, multi-stop itinerary around your tiger safari."
			sections={SECTIONS}
			showWhyChoose={false}
		/>
	);
}
