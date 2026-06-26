import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";

const SECTIONS: ContentBlock[] = [
	{
		heading: "Trinetra Ganesh Temple (Inside the Fort)",
		body: "India's only three-eyed Ganesh idol is enshrined at this temple within the Ranthambore Fort complex. It is considered a powerful wish-fulfilling deity, and Hindu tradition dictates that Ganesh is invited to a wedding before any other guest — making this temple receive thousands of invitation letters annually from across India. The Ganesh Chaturthi festival here draws pilgrims from across Rajasthan and beyond.",
	},
	{
		heading: "Amreshwar Mahadeo Temple",
		body: "Located about 7 km from Sawai Madhopur, this ancient Shiva temple is set in a scenic forested valley near the Chambal River. It is a peaceful, less-visited gem popular with locals and nature lovers alike.",
	},
	{
		heading: "Chamatkar Jain Temple",
		body: "A serene Jain pilgrimage site about 7 km from Sawai Madhopur town, this temple is set amidst rocky hills and offers a quiet escape. The intricate marble work and peaceful atmosphere make it a rewarding short excursion.",
	},
	{
		heading: "Kala Gaura Bhairav Temple",
		body: "A centuries-old hillside temple with significant religious importance for local communities. Its location on a rocky outcrop makes it a scenic as well as spiritual destination.",
	},
	{
		heading: "Rajiv Gandhi Regional Museum of Natural History",
		body: "Located in Sawai Madhopur town, this museum is managed by the Ministry of Environment and Forests and is one of the best natural history museums in Rajasthan. It features dioramas, fossils, ecological displays, and interactive exhibits covering the wildlife and ecology of the region. An excellent pre- or post-safari visit, especially for families and students.",
	},
	{
		heading: "Rameshwar Ghat",
		body: "At the confluence of the Banas, Chambal, and Seep rivers lies Rameshwar Ghat — a sacred Hindu site surrounded by dramatic scenery. The ghat is considered auspicious and draws pilgrims during festivals. The riverside landscape here is strikingly beautiful and offers good bird and crocodile watching.",
	},
];

export const Route = createFileRoute("/(main)/about/temples-and-museums")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Temples & Museums Near Ranthambore | Local Attractions in Sawai Madhopur",
			},
			{
				name: "description",
				content:
					"Explore temples, museums, and cultural sites near Ranthambore — from the Trinetra Ganesh temple to the Rajiv Gandhi Regional Museum of Natural History.",
			},
		],
	}),
	component: TemplesAndMuseumsPage,
});

function TemplesAndMuseumsPage() {
	return (
		<GuidePage
			eyebrow="About Ranthambore"
			title={
				<>
					Sacred Sites &amp;
					<br className="hidden lg:block" /> Cultural Treasures
				</>
			}
			subtitle="Beyond the safari — temples, museums, and riverside ghats that reveal the spiritual and cultural heart of Sawai Madhopur."
			image="/house.png"
			sections={SECTIONS}
			ctaTitle="Explore Beyond the Safari"
			ctaDescription="Add a temple visit or museum stop to your Ranthambore itinerary for a richer understanding of this remarkable region."
		/>
	);
}
