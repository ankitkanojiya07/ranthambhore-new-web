export type HighlightImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type SafariHighlight = {
	id: string;
	title: string;
	zone: string;
	date: string;
	description: string;
	image: HighlightImage;
};

export type TrendingColumn = {
	id: string;
	image: HighlightImage;
	items: {
		id: string;
		date: string;
		title: string;
		featured?: boolean;
	}[];
};

export type ZoneData = {
	zoneNumber: number;
	name: string;
	tagline: string;
	description: string;
	image: HighlightImage;
	bestFor: string;
	highlights: SafariHighlight[];
	insights: string[];
};

export type RanthambhoreArticle = {
	id: string;
	category: string;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	image: HighlightImage;
	readTime?: string;
	shares?: number;
	comments?: number;
	isNew?: boolean;
};

export const SAFARI_HIGHLIGHTS: SafariHighlight[] = [
	{
		id: "t109-cubs",
		title: "Tigress T-109 With Three Cubs",
		zone: "Zone 6",
		date: "June 15, 2026",
		description:
			"Park rangers confirmed a healthy tigress with three cubs near Rajbagh lake — a strong sign for the breeding season.",
		image: {
			src: "/hero/9.webp",
			alt: "Tiger with cubs in Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "arrowhead-sighting",
		title: "Arrowhead Spotted At Padam Talab",
		zone: "Zone 2",
		date: "June 12, 2026",
		description:
			"The park's most photographed tigress was seen hunting at dawn along the lakeside trail.",
		image: {
			src: "/hero/1.webp",
			alt: "Tiger at Padam Talab in Ranthambore",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "leopard-zone-4",
		title: "Leopard On Rocky Outcrop",
		zone: "Zone 4",
		date: "June 8, 2026",
		description:
			"A leopard was photographed at dusk in Kachida Valley — one of the park's rarer daylight encounters.",
		image: {
			src: "/hero/10.webp",
			alt: "Leopard habitat in Ranthambore rocky terrain",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "sloth-bear-cubs",
		title: "Sloth Bear Family Near Fort Trail",
		zone: "Zone 3",
		date: "June 4, 2026",
		description:
			"Visitors on the morning safari reported a mother sloth bear with two cubs crossing the fort approach road.",
		image: {
			src: "/hero/7.webp",
			alt: "Forest trail in Ranthambore near the fort",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "crocodile-padam",
		title: "Marsh Crocodile Basking At Padam Talab",
		zone: "Zone 1",
		date: "June 2, 2026",
		description:
			"A large mugger crocodile was seen sunning on the lakeside rocks during the morning safari circuit.",
		image: {
			src: "/hero/8.webp",
			alt: "Lake habitat at Padam Talab in Ranthambore",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "bird-migration",
		title: "Painted Storks Return To Malik Talab",
		zone: "Zone 2",
		date: "May 28, 2026",
		description:
			"Early monsoon arrivals brought a flock of painted storks to Malik Talab, delighting birders on Zone 2 routes.",
		image: {
			src: "/hero/2.webp",
			alt: "Wetland birds at Malik Talab",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "hyena-zone-9",
		title: "Striped Hyena At Dawn",
		zone: "Zone 9",
		date: "May 22, 2026",
		description:
			"A striped hyena was photographed at first light near a waterhole in the buffer zone — a rare daylight sighting.",
		image: {
			src: "/hero/3.webp",
			alt: "Buffer zone forest at Ranthambore",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "tiger-zone-5",
		title: "Male Tiger On Khilchipur Trail",
		zone: "Zone 5",
		date: "May 18, 2026",
		description:
			"A dominant male was seen marking territory along the quieter Khilchipur gate route in the late afternoon.",
		image: {
			src: "/hero/4.webp",
			alt: "Tiger on forest trail in Zone 5",
			width: 2048,
			height: 1365,
		},
	},
];

export const TRENDING_COLUMNS: TrendingColumn[] = [
	{
		id: "tigers",
		image: {
			src: "/hero/9.webp",
			alt: "Tiger family in Ranthambore",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "t1",
				date: "June 15, 2026",
				title: "Tigress T-109 With Three Cubs Near Rajbagh",
				featured: true,
			},
			{
				id: "t2",
				date: "June 12, 2026",
				title: "Arrowhead Spotted Hunting At Padam Talab",
			},
			{
				id: "t3",
				date: "June 8, 2026",
				title: "Male Tiger Marks Territory In Zone 5",
			},
			{
				id: "t4",
				date: "June 4, 2026",
				title: "New Cub Sighting Reported In Zone 6",
			},
		],
	},
	{
		id: "mammals",
		image: {
			src: "/hero/7.webp",
			alt: "Sloth bear in Ranthambore forest",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "m1",
				date: "June 10, 2026",
				title: "Sloth Bear Family Crosses Fort Approach Road",
				featured: true,
			},
			{
				id: "m2",
				date: "June 6, 2026",
				title: "Sambar Herd At Evening Waterhole",
			},
			{
				id: "m3",
				date: "May 30, 2026",
				title: "Wild Boar With Piglets Near Zone 3 Gate",
			},
			{
				id: "m4",
				date: "May 25, 2026",
				title: "Nilgai Spotted On Open Grassland",
			},
		],
	},
	{
		id: "birds",
		image: {
			src: "/hero/2.webp",
			alt: "Birds at Ranthambore wetland",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "b1",
				date: "June 8, 2026",
				title: "Painted Storks Return Early To Malik Talab",
				featured: true,
			},
			{
				id: "b2",
				date: "June 3, 2026",
				title: "Indian Pitta Heard Calling In Zone 4",
			},
			{
				id: "b3",
				date: "May 28, 2026",
				title: "Peacock Display Near Jogi Mahal",
			},
			{
				id: "b4",
				date: "May 20, 2026",
				title: "Kingfisher Pair Nesting By The Lake",
			},
		],
	},
	{
		id: "rare",
		image: {
			src: "/hero/10.webp",
			alt: "Leopard on rocky outcrop",
			width: 2048,
			height: 1365,
		},
		items: [
			{
				id: "r1",
				date: "June 8, 2026",
				title: "Leopard Photographed At Dusk In Kachida Valley",
				featured: true,
			},
			{
				id: "r2",
				date: "May 22, 2026",
				title: "Striped Hyena At Dawn In Zone 9",
			},
			{
				id: "r3",
				date: "May 15, 2026",
				title: "Caracal Tracks Found Near Zone 10",
			},
			{
				id: "r4",
				date: "May 10, 2026",
				title: "Marsh Crocodile Basking At Padam Talab",
			},
		],
	},
];

export const ZONES: ZoneData[] = [
	{
		zoneNumber: 1,
		name: "Zone 1 — Padam Talab",
		tagline: "Iconic lakeside scenery",
		description:
			"Enters through Sawai Madhopur gate and passes Padam Talab. One of the most famous zones with open lakeside scenery and regular tiger sightings.",
		image: {
			src: "/hero/1.webp",
			alt: "Padam Talab lake in Zone 1",
			width: 2048,
			height: 1365,
		},
		bestFor: "Beginners & photographers",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 1"),
		insights: [
			"Morning safaris offer the best light on Padam Talab.",
			"Mugger crocodiles are frequently seen basking on lakeside rocks.",
			"High tiger traffic — book well in advance during peak season.",
		],
	},
	{
		zoneNumber: 2,
		name: "Zone 2 — Raj Bagh",
		tagline: "Arrowhead's territory",
		description:
			"The Lahpur gate zone passing Raj Bagh ruins and Malik Talab. Highly productive for tigers including the celebrated Arrowhead tigress.",
		image: {
			src: "/hero/9.webp",
			alt: "Tiger at Malik Talab in Zone 2",
			width: 2048,
			height: 1365,
		},
		bestFor: "High tiger probability",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 2"),
		insights: [
			"Arrowhead and her lineage are regularly sighted here.",
			"Malik Talab is excellent for wetland bird photography.",
			"Dawn safaris through Raj Bagh ruins are especially scenic.",
		],
	},
	{
		zoneNumber: 3,
		name: "Zone 3 — Fort Trail",
		tagline: "Heritage meets wildlife",
		description:
			"Covers the Ranthambore Fort approach and iconic Jogi Mahal area with open terrain near the lakes.",
		image: {
			src: "/hero/7.webp",
			alt: "Fort trail in Zone 3",
			width: 2048,
			height: 1365,
		},
		bestFor: "Tiger sightings + heritage",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 3"),
		insights: [
			"Sloth bears are more commonly seen near the fort approach.",
			"Jogi Mahal offers a classic Ranthambore photo backdrop.",
			"Combines wildlife with centuries of Rajput history.",
		],
	},
	{
		zoneNumber: 4,
		name: "Zone 4 — Kachida Valley",
		tagline: "Rocky terrain & leopards",
		description:
			"Known for dramatic rocky terrain, leopard sightings, and large herds of sloth bears in Kachida Valley.",
		image: {
			src: "/hero/10.webp",
			alt: "Rocky terrain in Zone 4",
			width: 2048,
			height: 1365,
		},
		bestFor: "Leopards, bears & birding",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 4"),
		insights: [
			"Best zone for leopard encounters in Ranthambore.",
			"Sloth bear families often forage in the valley at dusk.",
			"Indian pitta and other forest birds thrive here.",
		],
	},
	{
		zoneNumber: 5,
		name: "Zone 5 — Khilchipur",
		tagline: "Quiet deep forest",
		description:
			"Enters through Khilchipur gate. Deeper forest, quieter, and less visited — ideal for photographers without crowds.",
		image: {
			src: "/hero/4.webp",
			alt: "Deep forest in Zone 5",
			width: 2048,
			height: 1365,
		},
		bestFor: "Photographers & naturalists",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 5"),
		insights: [
			"Fewer vehicles mean more intimate wildlife moments.",
			"Male tigers frequently mark territory on forest trails.",
			"Excellent for macro and forest bird photography.",
		],
	},
	{
		zoneNumber: 6,
		name: "Zone 6 — Kundal",
		tagline: "Buffer zone breeding ground",
		description:
			"Part of the buffer area with growing tiger population. Recent cub sightings have made Zone 6 increasingly popular.",
		image: {
			src: "/hero/9.webp",
			alt: "Tiger habitat in Zone 6",
			width: 2048,
			height: 1365,
		},
		bestFor: "Cub sightings & solitude",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 6"),
		insights: [
			"Tigress T-109 recently sighted with three cubs near Rajbagh.",
			"Less crowded than core zones 1–3.",
			"Growing reputation for consistent tiger activity.",
		],
	},
	{
		zoneNumber: 7,
		name: "Zone 7 — Chidikho",
		tagline: "Transition forest",
		description:
			"Buffer zone with diverse landscapes transitioning from dry deciduous to mixed forest. Good for birding and solitude.",
		image: {
			src: "/hero/8.webp",
			alt: "Forest landscape in Zone 7",
			width: 2048,
			height: 1365,
		},
		bestFor: "Birding & peaceful drives",
		highlights: [],
		insights: [
			"Excellent for birdwatchers seeking quieter routes.",
			"Tiger sightings are less predictable but rewarding.",
			"Mixed terrain offers varied photography backdrops.",
		],
	},
	{
		zoneNumber: 8,
		name: "Zone 8 — Balas",
		tagline: "Open grasslands",
		description:
			"Features open grassland patches and scattered waterholes. Known for deer herds and occasional tiger crossings.",
		image: {
			src: "/hero/3.webp",
			alt: "Grassland in Zone 8",
			width: 2048,
			height: 1365,
		},
		bestFor: "Deer herds & landscape shots",
		highlights: [],
		insights: [
			"Large sambar and chital herds gather at waterholes.",
			"Open terrain makes wildlife spotting easier.",
			"Sunset safaris offer golden-hour photography.",
		],
	},
	{
		zoneNumber: 9,
		name: "Zone 9 — Kuwalji",
		tagline: "Hyena territory",
		description:
			"Buffer zone where striped hyenas are more frequently encountered. Solitude and diverse carnivore activity.",
		image: {
			src: "/hero/3.webp",
			alt: "Buffer zone in Zone 9",
			width: 2048,
			height: 1365,
		},
		bestFor: "Hyenas & rare carnivores",
		highlights: SAFARI_HIGHLIGHTS.filter((h) => h.zone === "Zone 9"),
		insights: [
			"Striped hyena sightings are more common here than core zones.",
			"Very low visitor traffic — a true wilderness feel.",
			"Dawn drives offer the best carnivore activity.",
		],
	},
	{
		zoneNumber: 10,
		name: "Zone 10 — Aantri",
		tagline: "Remote wilderness",
		description:
			"The most remote buffer zone bordering Keladevi Sanctuary. Unpredictable but deeply rewarding for patient naturalists.",
		image: {
			src: "/hero/2.webp",
			alt: "Remote forest in Zone 10",
			width: 2048,
			height: 1365,
		},
		bestFor: "Adventurous naturalists",
		highlights: [],
		insights: [
			"Caracal and other elusive species have been tracked here.",
			"Longest drives with the fewest other vehicles.",
			"Best for experienced visitors seeking something different.",
		],
	},
];

export const RANTHAMBHORE_ARTICLES: RanthambhoreArticle[] = [
	{
		id: "best-time",
		category: "Must Reads",
		title: "Best Time To Visit Ranthambore",
		excerpt:
			"October to April offers peak tiger sightings, while summer months concentrate wildlife around the lakes. Here's how to pick the right season for your goals.",
		author: "Park Guide Team",
		date: "June 1, 2026",
		image: {
			src: "/hero/1.webp",
			alt: "Tiger in golden light at Ranthambore",
			width: 2048,
			height: 1365,
		},
		readTime: "4 mins",
		shares: 342,
		comments: 18,
	},
	{
		id: "booking-guide",
		category: "Safari Tips",
		title: "Things To Know Before Safari Booking",
		excerpt:
			"Park rules, ID requirements, zone selection, and booking timelines — everything you need before you go.",
		author: "Safari Desk",
		date: "May 28, 2026",
		image: {
			src: "/hero/8.webp",
			alt: "Safari briefing at Ranthambore gate",
			width: 2048,
			height: 1365,
		},
		readTime: "6 mins",
		shares: 289,
		comments: 24,
	},
	{
		id: "record-visitors",
		category: "Park News",
		title: "Record Visitors — 7.27 Lakh Tourists In 2025",
		excerpt:
			"Ranthambore crossed 727,000 visitors in the 2025 season, making it one of India's most visited tiger reserves.",
		author: "Editorial",
		date: "May 20, 2026",
		image: {
			src: "/hero/9.webp",
			alt: "Tiger walking past a safari vehicle",
			width: 2048,
			height: 1365,
		},
		readTime: "3 mins",
		shares: 512,
		comments: 45,
		isNew: true,
	},
	{
		id: "plan-trip",
		category: "Travel Guide",
		title: "Why Plan A Trip To Ranthambore?",
		excerpt:
			"If you are a wildlife lover wishing to know more about tigers in the wild, you must visit Ranthambore — one of India's finest tiger reserves.",
		author: "Travel Desk",
		date: "May 15, 2026",
		image: {
			src: "/hero/8.webp",
			alt: "Scenic lake view at Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
		readTime: "5 mins",
		shares: 198,
		comments: 12,
	},
	{
		id: "jeep-safari",
		category: "Safari",
		title: "Book A Gypsy Safari For The Best Sightings",
		excerpt:
			"Travel in a 6-seater open jeep with an expert naturalist guide for an intimate, flexible wildlife experience.",
		author: "Safari Desk",
		date: "May 10, 2026",
		image: {
			src: "/hero/7.webp",
			alt: "Jeep safari through Ranthambore forest trails",
			width: 2048,
			height: 1365,
		},
		readTime: "4 mins",
		shares: 267,
		comments: 19,
	},
	{
		id: "zones-guide",
		category: "Zones",
		title: "Explore All 10 Ranthambore Safari Zones",
		excerpt:
			"From the iconic lakes of Zones 1–5 to the quieter buffer zones — find the right territory for your goals.",
		author: "Zone Expert",
		date: "May 5, 2026",
		image: {
			src: "/hero/10.webp",
			alt: "Golden sunset over Ranthambore wilderness",
			width: 2048,
			height: 1365,
		},
		readTime: "8 mins",
		shares: 401,
		comments: 33,
	},
	{
		id: "conservation",
		category: "Conservation",
		title: "Ranthambore Wins National Conservation Award",
		excerpt:
			"The national park has been recognised for outstanding efforts in tiger population recovery and habitat restoration.",
		author: "Conservation Desk",
		date: "April 28, 2026",
		image: {
			src: "/hero/2.webp",
			alt: "Wildlife conservation in Ranthambore",
			width: 2048,
			height: 1365,
		},
		readTime: "3 mins",
		shares: 156,
		comments: 8,
	},
	{
		id: "fort-heritage",
		category: "Heritage",
		title: "Ranthambore Fort: 1,000 Years Inside A Tiger Reserve",
		excerpt:
			"Walk through centuries of Rajput history while tigers roam the forests below — a unique heritage-wildlife crossover.",
		author: "Heritage Guide",
		date: "April 20, 2026",
		image: {
			src: "/hero/7.webp",
			alt: "Ranthambore Fort overlooking the park",
			width: 2048,
			height: 1365,
		},
		readTime: "7 mins",
		shares: 223,
		comments: 15,
	},
];

export function getZoneByNumber(zoneNumber: number): ZoneData | undefined {
	return ZONES.find((z) => z.zoneNumber === zoneNumber);
}
