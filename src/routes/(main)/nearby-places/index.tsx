import { createFileRoute } from "@tanstack/react-router";
import type { ContentBlock } from "#/components/pages/ContentSection";
import { GuidePage } from "#/components/pages/GuidePage";
import { ATTRACTIONS, attractionDetailItems } from "#/lib/attractions";

const ATTRACTION_EYEBROWS: Record<string, string> = {
	"ranthambore-fort": "Heritage & Fort",
	"trinetra-ganesh-temple": "Heritage & Fort",
	"jogi-mahal": "Heritage & Fort",
	"kachida-valley": "Lakes & Landscapes",
	"bird-watching": "Experiences",
	"chambal-gharial-safari": "Experiences",
	"padam-talao": "Lakes & Landscapes",
	"raj-bagh-talao": "Lakes & Landscapes",
	"malik-talao": "Lakes & Landscapes",
	"surwal-lake": "Lakes & Landscapes",
	"ranthambore-school-of-art": "Culture & Crafts",
	"dastkar-ranthambhore": "Culture & Crafts",
	"village-women-craft": "Culture & Crafts",
	"rajiv-gandhi-museum": "Culture & Crafts",
	"wild-dragon-adventure-park": "Experiences",
};

const ATTRACTION_SECTIONS: ContentBlock[] = ATTRACTIONS.map((attraction) => ({
	id: attraction.id,
	heading: attraction.title,
	body: attraction.body,
	items: attractionDetailItems(attraction),
	layout: "split" as const,
	image: attraction.image.src,
	imageAlt: attraction.image.alt,
	stretchImage: true,
	eyebrow: ATTRACTION_EYEBROWS[attraction.id],
}));

export const Route = createFileRoute("/(main)/nearby-places/")({
	staticData: { navOverlay: false },
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
function NearbyPlacesPage() {
	return (
		<GuidePage
			showHero={false}
			introTitle="Beyond the Tiger Safari"
			intro="Ranthambore is far more than a tiger reserve. Ancient forts crown the hills, sacred temples draw pilgrims from across India, mirror-like lakes attract wildlife at dawn, and local artisans keep Rajasthan's craft traditions alive. Use this guide to plan what to see before and after your safari — each attraction links directly from the home page carousel."
			sections={ATTRACTION_SECTIONS}
			showWhyChoose={false}
		/>
	);
}
