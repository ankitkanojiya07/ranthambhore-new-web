import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { ContentSection } from "#/components/pages/ContentSection";
import { PageHero } from "#/components/pages/PageHero";
import { ZoneSection } from "#/components/safari/ZoneSection";

const INTRO_SECTION: ContentBlock = {
	heading: "Understanding Ranthambore's Zones",
	body: "Ranthambore National Park is divided into 10 designated safari zones to manage visitor traffic and protect wildlife habitats. Zones 1 to 5 (and 6) cover the core national park area — the most intensively managed, richest in wildlife, and historically the most productive for tiger sightings. Zones 6 to 10 cover the wider buffer and transition forest areas.",
};

const DETAIL_SECTIONS: ContentBlock[] = [
	{
		heading: "Core Zones (1–5)",
		body: "The heart of the national park — historically the most productive for tiger sightings.",
		items: [
			"Zone 1: Enters through Sawai Madhopur gate and passes Padam Talab. One of the most famous zones — open lakeside scenery, regular tiger sightings, excellent for photography. Best for: Beginners and photographers.",
			"Zone 2: The Lahpur/Lahori gate zone. Passes through the area of the famous Raj Bagh ruins and Malik Talab. Highly productive for tigers, including the celebrated Arrowhead tigress. Best for: High tiger probability.",
			"Zone 3: A diverse zone covering the Ranthambore Fort approach and the iconic Jogi Mahal rest house area. Open terrain near the lakes. Best for: Tiger sightings + heritage.",
			"Zone 4: Kachida Valley — known for its dramatic rocky terrain, leopard sightings, and large herds of sloth bears. Best for: Leopards, bears, and birding.",
			"Zone 5: Enters through Khilchipur gate. Deeper forest, quieter, and less visited. Good for wildlife photography without crowds. Best for: Photographers and serious naturalists.",
		],
	},
	{
		heading: "Buffer Zones (6–10)",
		body: "Wider buffer and transition forest areas surrounding the core park.",
		items: [
			"Zones 6 to 10 cover the Sawai Man Singh Sanctuary and parts of the Keladevi Sanctuary — the buffer areas surrounding the core park.",
			"Tiger sightings here are less predictable, but these zones offer solitude, diverse landscapes, and excellent birding.",
			"Elephants from the nearby Karauli area sometimes pass through, and striped hyenas are more frequently encountered here.",
		],
	},
	{
		heading: "Zone Allocation for Visitors",
		body: "Zone allocation is made at the time of booking and is largely determined by the online booking system. You may request a preferred zone, but it cannot be guaranteed. If tiger sightings are your primary goal, prioritise Zones 1, 2, and 3 during booking.",
	},
];

export const Route = createFileRoute("/(main)/safari/zones")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari Zones | Zone 1 to Zone 10 Complete Guide for Tiger Sightings",
			},
			{
				name: "description",
				content:
					"Ranthambore is divided into 10 safari zones. This complete zone guide tells you which zones offer the best tiger sightings, landscape variety, and wildlife diversity.",
			},
		],
	}),
	component: ZonesPage,
});

function ZonesPage() {
	return (
		<div className="bg-sand-50">
			<PageHero
				eyebrow="Safari"
				title="Zone Guide"
				subtitle="Ten designated safari zones — each with its own landscape, wildlife, and character."
				image="/gallery/3.jpg"
				badge="Zones 1–10"
				primaryCta={{ label: "Book a Safari", href: "/safari/book" }}
				secondaryCta={{ label: "Get Free Quote", href: "/contact" }}
			/>
			<ContentSection blocks={[INTRO_SECTION]} className="pb-12 lg:pb-16" />
			<ZoneSection variant="inline" />
			<ContentSection blocks={DETAIL_SECTIONS} className="pt-12 lg:pt-16" />
		</div>
	);
}
