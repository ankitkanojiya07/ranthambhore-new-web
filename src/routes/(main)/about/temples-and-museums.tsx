import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { ContentSection } from "#/components/pages/ContentSection";

const SECTIONS: ContentBlock[] = [
	{
		heading: "Trinetra Ganesh Temple (Inside the Fort)",
		body: "India's only three-eyed Ganesh idol is enshrined at this temple within the Ranthambore Fort complex. It is considered a powerful wish-fulfilling deity, and Hindu tradition dictates that Ganesh is invited to a wedding before any other guest — making this temple receive thousands of invitation letters annually from across India. The Ganesh Chaturthi festival here draws pilgrims from across Rajasthan and beyond.",
		layout: "split",
		image: "/Home/ganesh.png",
		imageAlt:
			"Trinetra Ganesh idol adorned with marigold garlands inside Ranthambore Fort",
		imageWrapperClassName: "mx-auto w-full max-w-[240px] sm:max-w-[280px]",
		imageClassName: "aspect-auto w-full object-cover",
	},
	{
		heading: "Amreshwar Mahadeo Temple",
		body: "Located about 7 km from Sawai Madhopur, this ancient Shiva temple is set in a scenic forested valley near the Chambal River. It is a peaceful, less-visited gem popular with locals and nature lovers alike.",
		layout: "card-text",
	},
	{
		heading: "Chamatkar Jain Temple",
		body: "A serene Jain pilgrimage site about 7 km from Sawai Madhopur town, this temple is set amidst rocky hills and offers a quiet escape. The intricate marble work and peaceful atmosphere make it a rewarding short excursion.",
		layout: "card-text",
	},
	{
		heading: "Kala Gaura Bhairav Temple",
		body: "A centuries-old hillside temple with significant religious importance for local communities. Its location on a rocky outcrop makes it a scenic as well as spiritual destination.",
		layout: "card-text",
	},
	{
		heading: "Rajiv Gandhi Regional Museum of Natural History",
		body: "Located in Sawai Madhopur town, this museum is managed by the Ministry of Environment and Forests and is one of the best natural history museums in Rajasthan. It features dioramas, fossils, ecological displays, and interactive exhibits covering the wildlife and ecology of the region. An excellent pre- or post-safari visit, especially for families and students.",
		layout: "card-text",
	},
	{
		heading: "Rameshwar Ghat",
		body: "At the confluence of the Banas, Chambal, and Seep rivers lies Rameshwar Ghat — a sacred Hindu site surrounded by dramatic scenery. The ghat is considered auspicious and draws pilgrims during festivals. The riverside landscape here is strikingly beautiful and offers good bird and crocodile watching.",
		layout: "card-text",
	},
];

export const Route = createFileRoute("/(main)/about/temples-and-museums")({
	staticData: { navOverlay: false },
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
		<div className="bg-sand-50">
			<section className="px-6 pt-28 pb-4 lg:px-8 lg:pt-36">
				<div className="mx-auto max-w-3xl text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						About Ranthambore
					</p>
					<h1 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Sacred Sites &amp; Cultural Treasures
					</h1>
				</div>
			</section>
			<ContentSection blocks={SECTIONS} className="pt-12 lg:pt-16" />
		</div>
	);
}
