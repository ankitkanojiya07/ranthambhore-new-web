import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

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
			image="/gallery/4.jpg"
			sections={[
				{
					heading: "Multi-Destination Rajasthan",
					body: "Ranthambore's location in southeastern Rajasthan makes it a natural hub for multi-destination itineraries. India's most iconic cities and natural destinations are all within easy reach, making it possible to combine your Ranthambore safari with history, heritage, and additional wildlife experiences.",
				},
				{
					heading: "Jaipur — The Pink City (175 km, ~3 hours)",
					body: "The capital of Rajasthan and one of India's most vibrant cities. Jaipur's walled old city, the Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar are UNESCO World Heritage Sites. A natural pair with Ranthambore in any Rajasthan itinerary.",
				},
				{
					heading: "Agra — The Taj Mahal (252 km, ~4 hours)",
					body: "Home to three UNESCO World Heritage Sites — the Taj Mahal, Agra Fort, and Fatehpur Sikri. Agra makes Ranthambore the perfect addition to a classic Golden Triangle tour (Delhi–Agra–Jaipur). Adding Ranthambore creates a 'Golden Triangle Plus Tiger' itinerary.",
				},
				{
					heading: "Bharatpur — Keoladeo Bird Sanctuary (166 km, ~3 hours)",
					body: "One of the world's finest bird sanctuaries and a UNESCO World Heritage Site, Keoladeo (formerly Bharatpur Bird Sanctuary) is a paradise for birdwatchers. Combining Ranthambore and Bharatpur in a single trip is a dream double-park experience for nature lovers.",
				},
				{
					heading: "Bundi — The Poets' City (164 km, ~3 hours)",
					body: "One of Rajasthan's least touristy but most beautiful towns. Bundi's step-wells, painted haveli walls, and Taragarh Fort are extraordinary. Writer Rudyard Kipling stayed here and was inspired by its architecture. A wonderful contrast to the forest experience.",
				},
				{
					heading: "Chambal Valley (50–80 km, ~1 hour)",
					body: "The Chambal River and its ravine landscape form one of India's most dramatic natural environments. The National Chambal Gharial Sanctuary offers boat safaris with Gharial, dolphin, and skimmer sightings. The Chambal is also famous for its rich tribal and dacoit history — tours to the ravines are an unforgettable cultural experience.",
				},
				{
					heading: "Karauli (88 km, ~2 hours)",
					body: "An authentic, little-visited Rajasthan town with a stunning maharaja's palace, ancient temples, and a strong cultural identity. The city god, Kaila Devi, is worshipped in a grand temple that draws thousands of pilgrims during the Navratri festival.",
				},
			]}
			ctaTitle="Plan a Multi-Destination Trip"
			ctaDescription="Combine Ranthambore with Jaipur, Agra, Bharatpur, or the Chambal valley — we'll design the perfect Rajasthan itinerary."
			ctaButtonText="Get a Custom Itinerary"
		/>
	);
}
