import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/safari/chambal-boat")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Chambal River Boat Safari | National Chambal Gharial Sanctuary Near Ranthambore",
			},
			{
				name: "description",
				content:
					"Take a boat safari on the Chambal River near Ranthambore to spot Gharial crocodiles, Gangetic dolphins, skimmers, and migratory birds in the National Chambal Sanctuary.",
			},
		],
	}),
	component: ChambalBoatSafariPage,
});

function ChambalBoatSafariPage() {
	return (
		<GuidePage
			eyebrow="Safari"
			title="Chambal Boat Safari"
			subtitle="River mist, silence, and extraordinary wildlife — an enchanting contrast to the forest safari."
			image="/gallery/2.jpg"
			badge="National Chambal Gharial Sanctuary"
			sections={[
				{
					heading: "A River Unlike Any Other",
					body: "Just an hour from Ranthambore lies one of India's most underrated wildlife experiences — a boat safari on the Chambal River through the National Chambal Gharial Sanctuary. This river sanctuary is one of the last strongholds of the critically endangered Gharial crocodile, the Gangetic river dolphin, and the Indian skimmer. A morning or late afternoon boat ride here is an enchanting, unhurried contrast to the forest safari — silence, river mist, and extraordinary wildlife.",
				},
				{
					heading: "Wildlife Highlights",
					body: "Species you are likely to encounter on the Chambal River.",
					items: [
						"Gharial Crocodile: Long-snouted, fish-eating crocodilian — one of the rarest reptiles on Earth. The Chambal has one of the world's largest remaining populations.",
						"Mugger Crocodile: Broader-snouted and more aggressive, often seen sunbathing on sandbanks alongside Gharials.",
						"Gangetic River Dolphin: India's national aquatic animal — freshwater dolphins that surface with a distinctive arching roll. Increasingly rare and a privilege to witness.",
						"Indian Skimmer: A spectacular migratory bird that glides low over the water with its elongated lower bill skimming the surface to catch fish.",
						"Bar-headed Geese, Ruddy Shelduck, and a host of migratory waterfowl in winter.",
					],
				},
				{
					heading: "How to Add the Chambal Safari to Your Ranthambore Trip",
					body: "Most Ranthambore itineraries include the Chambal boat safari as a half-day add-on. The nearest departure points are at Kundal and Jawahar Sagar, about 45–60 km from Sawai Madhopur. We recommend combining a morning forest safari with an afternoon Chambal river ride for a full day of exceptional wildlife.",
				},
			]}
			ctaTitle="Add Chambal to Your Itinerary"
			ctaDescription="Combine a morning forest safari with an afternoon river ride for a full day of exceptional wildlife."
			ctaButtonText="Plan Your Trip"
			ctaButtonLink="/safari/book"
		/>
	);
}
