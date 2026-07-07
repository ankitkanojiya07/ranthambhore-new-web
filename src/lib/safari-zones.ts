export interface SafariZone {
	zone: number;
	area: string;
	safariType: string;
	famousFor: string;
}

export interface ZoneDetail {
	zone: number;
	title: string;
	description: string;
	bestFor: string;
}

export const SAFARI_ZONES_CONTENT = {
	title: "Zone Guide (Zones 1–10)",
	subtitle:
		"Ten designated safari zones — each with its own landscape, wildlife, and character. Plan your safari by knowing what each zone offers.",
} as const;

export const SAFARI_ZONES_INTRO =
	"Ranthambore National Park is divided into 10 designated safari zones to manage visitor traffic and protect wildlife habitats. Zones 1 to 5 (and 6) cover the core national park area — the most intensively managed, richest in wildlife, and historically the most productive for tiger sightings. Zones 6 to 10 cover the wider buffer and transition forest areas.";

export const SAFARI_ZONES_TABLE = {
	title: "Tiger Sightings by Zone",
	subtitle:
		"Plan your safari by knowing which tigers frequent each zone and what vehicle access is available.",
} as const;

export const CORE_ZONES_SECTION = {
	title: "Core Zones (1–5)",
	intro:
		"The heart of the national park — historically the most productive for tiger sightings.",
} as const;

export const CORE_ZONE_DETAILS: ZoneDetail[] = [
	{
		zone: 1,
		title: "Zone 1 — Padam Talab",
		description:
			"Enters through Sawai Madhopur gate and passes Padam Talab. One of the most famous zones — open lakeside scenery, regular tiger sightings, excellent for photography.",
		bestFor: "Beginners and photographers",
	},
	{
		zone: 2,
		title: "Zone 2 — Lahpur Gate",
		description:
			"The Lahpur/Lahori gate zone. Passes through the area of the famous Raj Bagh ruins and Malik Talab. Highly productive for tigers, including the celebrated Arrowhead tigress.",
		bestFor: "High tiger probability",
	},
	{
		zone: 3,
		title: "Zone 3 — Jogi Mahal",
		description:
			"A diverse zone covering the Ranthambore Fort approach and the iconic Jogi Mahal rest house area. Open terrain near the lakes.",
		bestFor: "Tiger sightings + heritage",
	},
	{
		zone: 4,
		title: "Zone 4 — Kachida Valley",
		description:
			"Known for its dramatic rocky terrain, leopard sightings, and large herds of sloth bears.",
		bestFor: "Leopards, bears, and birding",
	},
	{
		zone: 5,
		title: "Zone 5 — Khilchipur Gate",
		description:
			"Enters through Khilchipur gate. Deeper forest, quieter, and less visited. Good for wildlife photography without crowds.",
		bestFor: "Photographers and serious naturalists",
	},
];

export const BUFFER_ZONES_SECTION = {
	title: "Buffer Zones (6–10)",
	intro: "Wider buffer and transition forest areas surrounding the core park.",
	items: [
		"Zones 6 to 10 cover the Sawai Man Singh Sanctuary and parts of the Keladevi Sanctuary — the buffer areas surrounding the core park.",
		"Tiger sightings here are less predictable, but these zones offer solitude, diverse landscapes, and excellent birding.",
		"Elephants from the nearby Karauli area sometimes pass through, and striped hyenas are more frequently encountered here.",
	],
} as const;

export const ZONE_ALLOCATION_SECTION = {
	title: "Zone Allocation for Visitors",
	body: "Zone allocation is made at the time of booking and is largely determined by the online booking system. You may request a preferred zone, but it cannot be guaranteed. If tiger sightings are your primary goal, prioritise Zones 1, 2, and 3 during booking.",
	tips: [
		"Zones 7–9 are Gypsy-only and tend to be less crowded.",
		"Canter safaris are not available in zones 7, 8, and 9.",
		"Spread safaris across 2+ zones over multiple days for better coverage.",
	],
} as const;

export const SAFARI_ZONES: SafariZone[] = [
	{
		zone: 1,
		area: "Singhdwar, Tuti Ka Nalla",
		safariType: "Gypsy/Canter",
		famousFor: "T-39 Noor, Scenic Valleys",
	},
	{
		zone: 2,
		area: "Lakkarda, Nal Ghati",
		safariType: "Gypsy/Canter",
		famousFor: "T-57, Dense Forest Tracks",
	},
	{
		zone: 3,
		area: "Padam Talao, Raj Bagh",
		safariType: "Gypsy/Canter",
		famousFor: "Iconic Lake Views, T-84 Arrowhead",
	},
	{
		zone: 4,
		area: "George Lodge, Lakkarda",
		safariType: "Gypsy/Canter",
		famousFor: "T-19 Krishna Territory",
	},
	{
		zone: 5,
		area: "Kala Peela Pani, Baghda",
		safariType: "Gypsy/Canter",
		famousFor: "Good Water Sources, T-73",
	},
	{
		zone: 6,
		area: "Kundal Area",
		safariType: "Gypsy/Canter",
		famousFor: "Open Grasslands, T-34",
	},
	{
		zone: 7,
		area: "Chidikho Area",
		safariType: "Gypsy Only",
		famousFor: "Quiet, Less Crowded",
	},
	{
		zone: 8,
		area: "Balas Area",
		safariType: "Gypsy Only",
		famousFor: "Rugged Terrain",
	},
	{
		zone: 9,
		area: "Kuwal ji Area",
		safariType: "Gypsy Only",
		famousFor: "Rare Tiger Sightings",
	},
	{
		zone: 10,
		area: "Bhadlav Area",
		safariType: "Gypsy/Canter",
		famousFor: "Good Leopard Sightings",
	},
];
