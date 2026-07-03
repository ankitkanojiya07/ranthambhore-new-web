import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";
import { ATTRACTIONS, attractionDetailItems } from "#/lib/attractions";

const ATTRACTION_SECTIONS: ContentBlock[] = ATTRACTIONS.map(
	(attraction, index) => ({
		id: attraction.id,
		heading: attraction.title,
		body: attraction.body,
		items: attractionDetailItems(attraction),
		layout: "split" as const,
		image: attraction.image.src,
		imageAlt: attraction.image.alt,
		stretchImage: true,
		eyebrow:
			index < 3
				? "Heritage & Fort"
				: index < 10
					? "Lakes & Landscapes"
					: index < 12
						? "Culture & Crafts"
						: "Experiences",
	}),
);

const SECTIONS: ContentBlock[] = [
	{
		heading: "Plan Your Sightseeing",
		layout: "full",
		body: "Jump to any attraction below for location, timings, entry fees, and what to expect. Heritage sites like the fort and temple sit inside the park skyline; lakes and valleys are best explored on safari; crafts and museums make excellent half-day trips in Sawai Madhopur.",
	},
	...ATTRACTION_SECTIONS,
];

export const Route = createFileRoute("/(main)/nearby-places/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Attractions in Ranthambore | Fort, Lakes, Temples & Experiences",
			},
			{
				name: "description",
				content:
					"Explore attractions inside and around Ranthambore — Ranthambore Fort, Trinetra Ganesh Temple, Padam Talao, lakes, museums, crafts, and adventure parks.",
			},
		],
	}),
	component: NearbyPlacesPage,
});

function AttractionNavigator() {
	return (
		<nav
			className="sticky top-0 z-20 border-b border-muted-300 bg-sand-50/95 backdrop-blur-sm"
			aria-label="Attraction navigation"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<ul className="flex items-center gap-1 overflow-x-auto py-3 lg:gap-2">
					{ATTRACTIONS.map((attraction) => (
						<li key={attraction.id} className="shrink-0">
							<a
								href={`#${attraction.id}`}
								className="block border-b-2 border-transparent px-3 py-2 font-display text-[10px] uppercase tracking-display text-charcoal-600 transition-colors hover:border-forest-600 hover:text-forest-600 lg:px-4 lg:text-xs"
							>
								{attraction.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

function NearbyPlacesPage() {
	return (
		<GuidePage
			eyebrow="Explore Inside the Park"
			title="Attractions in Ranthambore"
			subtitle="From the UNESCO-listed fort and sacred temples to lakes, craft villages, museums, and adventure parks — discover everything worth seeing in and around the reserve."
			image="/Home/fort.jpg"
			badge="Heritage & Wildlife"
			introTitle="Beyond the Tiger Safari"
			intro="Ranthambore is far more than a tiger reserve. Ancient forts crown the hills, sacred temples draw pilgrims from across India, mirror-like lakes attract wildlife at dawn, and local artisans keep Rajasthan's craft traditions alive. Use this guide to plan what to see before and after your safari — each attraction links directly from the home page carousel."
			beforeSections={<AttractionNavigator />}
			sections={SECTIONS}
			showWhyChoose={false}
		/>
	);
}
