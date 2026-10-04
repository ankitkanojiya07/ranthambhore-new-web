import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";
import { buildPageHead, touristAttractionJsonLd } from "#/lib/seo";

const SECTIONS: ContentBlock[] = [
	{
		heading: "History",
		body: "Built in the 10th century CE, the fort was controlled by a succession of rulers — Chauhan Rajputs, the Delhi Sultanate, Mughal Emperor Akbar, and eventually the Jaipur Maharajas. The fort's walls witnessed the famous Jauhar (self-immolation) of Rajput women in 1301 to avoid capture by Alauddin Khilji's army — an event deeply embedded in Rajasthani folklore.",
	},
	{
		heading: "What to See",
		body: "The fort complex rewards explorers with centuries of architecture, devotion, and panoramic views over the national park.",
		layout: "card",
		items: [
			"Ganesh Temple (Trinetra Ganesh Mandir): Located inside the fort, this temple is one of the most revered Ganesh shrines in India. Devotees send wedding invitation cards here before any other guest — a unique tradition that draws thousands of pilgrims.",
			"Shiva and Ramlalaji Temples: Ancient temples that have been in continuous use for centuries.",
			"Hamir Court: The ruins of the royal court and audience hall, with impressive carved pillars.",
			"Panoramic Views: From the fort's highest points, the views over the forest, lakes, and surrounding hills are breathtaking — especially at sunrise and sunset.",
		],
	},
	{
		heading: "Visiting the Fort",
		body: "The fort can be visited as part of the safari (the approach road passes through the forest) or as a standalone trip. Since the route passes through the national park, safari rules apply. The climb to the top involves a steep but manageable walk through the ruins. Early morning visits are best — cooler, quieter, and with wildlife often visible along the way.",
		layout: "split",
		image: "/Home/8.webp",
		imageAlt: "Stone pathway leading up to Ranthambore Fort through the hills",
		stretchImage: true,
	},
];

export const Route = createFileRoute("/(main)/about/fort")({
	staticData: { navOverlay: true },
	head: () =>
		buildPageHead({
			title: "Ranthambore Fort | UNESCO Hill Fort Inside the National Park",
			description:
				"Ranthambore Fort is a 10th-century UNESCO World Heritage hill fort inside the national park — temples, ruins, forest approaches, and visiting notes.",
			path: "/about/fort",
			image: "/Home/fort1.jpg",
			breadcrumbs: [
				{ name: "Home", path: "/" },
				{ name: "About", path: "/about" },
				{ name: "Fort", path: "/about/fort" },
			],
			jsonLd: touristAttractionJsonLd({
				name: "Ranthambore Fort",
				description:
					"10th-century UNESCO World Heritage hill fort inside Ranthambore National Park, Rajasthan.",
				path: "/about/fort",
				image: "/Home/fort1.jpg",
				latitude: 26.0207,
				longitude: 76.4542,
			}),
		}),
	component: FortPage,
});

function FortPage() {
	return (
		<GuidePage
			eyebrow="About Ranthambore"
			title={
				<>
					A Thousand Years
					<br className="hidden lg:block" /> Above the Forest
				</>
			}
			subtitle="Few places in the world can match the drama of Ranthambore Fort. This ancient stronghold, perched on a rocky hill 481 metres above sea level, rises directly from the heart of the national park. Tigers roam its base, leopards stalk its walls, and sambar deer graze in its courtyards."
			image="/Home/fort1.jpg"
			badge="UNESCO World Heritage Site — Hill Forts of Rajasthan (2013)"
			sections={SECTIONS}
			showWhyChoose={false}
		/>
	);
}
