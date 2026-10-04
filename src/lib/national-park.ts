import type { LucideIcon } from "lucide-react";
import {
	BadgeCheck,
	Building2,
	Calendar,
	Camera,
	CloudSun,
	Compass,
	Crown,
	Leaf,
	MapPin,
	Ruler,
} from "lucide-react";

export const NATIONAL_PARK_STATS = [
	{ label: "Established", value: "1973" },
	{ label: "Area", value: "1,334 sq km" },
	{ label: "Elevation", value: "215–505m" },
	{ label: "Tiger Population", value: "~70" },
] as const;

export interface NationalParkLegacyCard {
	title: string;
	eyebrow: string;
	body: string;
	image: string;
	imageAlt: string;
	icon: LucideIcon;
}

export const NATIONAL_PARK_LEGACY = {
	heading: "Exploring Ranthambore's Legacy",
	intro:
		"Journey through time and discover the rich tapestry of history, royalty, and conservation that defines this remarkable sanctuary.",
	cards: [
		{
			title: "Ancient Glory",
			eyebrow: "A Fortress With Stories",
			body: "The majestic Ranthambore Fort dates back to the 10th century and has been a silent witness to numerous historical events. Built by the Chauhan dynasty, it has weathered countless sieges and battles. The fort's strategic position atop a 700-foot hill gave it military advantage, while its intricate architecture showcases the artistic brilliance of medieval India. Within its walls, you'll find temples dedicated to Ganesh, Shiva, and Ramlalaji, each with their own fascinating history. The fort's massive stone ramparts and imposing gateways tell stories of valor, with each stone bearing witness to the rise and fall of empires. Archaeological findings suggest that the area around the fort has been inhabited since at least 5000 BCE, making it one of India's most historically significant landmarks.",
			image: "/flora/21.webp",
			imageAlt: "Ranthambore Fort overlooking the forested hills",
			icon: Building2,
		},
		{
			title: "Royal Legacy",
			eyebrow: "From Hunting Grounds to Sanctuary",
			body: "Before becoming a wildlife sanctuary, Ranthambore served as the private hunting grounds for the Maharajas of Jaipur. The elaborate hunting pavilions scattered throughout the park offer glimpses into royal leisure activities of bygone eras. Maharajas would host extravagant hunting parties for visiting dignitaries, including British viceroys and European nobility. The famous hunting lodge known as 'Jogi Mahal' still stands at the edge of Padam Talao lake, though access is now restricted. Historical records mention tiger hunts where over 20 tigers were killed in a single expedition—a stark contrast to today's conservation efforts. The transition from royal hunting reserve to protected sanctuary represents a profound shift in our relationship with wildlife and marks an important chapter in Indian conservation history.",
			image: "/flora/22.webp",
			imageAlt: "Jogi Mahal hunting lodge reflected in Padam Talao lake",
			icon: Crown,
		},
		{
			title: "Modern Conservation",
			eyebrow: "Preserving Natural Heritage",
			body: "Ranthambore National Park has evolved from near ecological disaster to conservation success story. In 1973, it was among the first nine tiger reserves established under Project Tiger—India's ambitious tiger conservation program. When protection began, fewer than 20 tigers remained; today, the park supports over 70 tigers. Conservation efforts extend beyond tigers to include habitat restoration, anti-poaching measures, and community involvement. The park has pioneered innovative approaches like camera trapping for monitoring wildlife and involving local communities as conservation stakeholders. Former poachers have been rehabilitated as forest guards, using their intimate knowledge of the terrain to protect rather than hunt wildlife. Ranthambore's success has inspired similar projects across Asia, demonstrating how determined conservation efforts can reverse the decline of endangered species.",
			image: "/flora/23.webp",
			imageAlt: "Royal Bengal Tiger in Ranthambore National Park",
			icon: Leaf,
		},
	] satisfies NationalParkLegacyCard[],
} as const;

export interface QuickFactStat {
	value: string;
	label: string;
}

export interface QuickFactCard {
	title: string;
	description: string;
	icon: LucideIcon;
	stats: [QuickFactStat, QuickFactStat];
}

export const NATIONAL_PARK_QUICK_FACTS = {
	heading: "Quick Facts About Ranthambore",
	cards: [
		{
			title: "Location",
			description:
				"Sawai Madhopur district, Rajasthan, at the junction of Aravalli and Vindhya hill ranges.",
			icon: MapPin,
			stats: [
				{ value: "180 km", label: "From Jaipur" },
				{ value: "400 km", label: "From Delhi" },
			],
		},
		{
			title: "Park Area",
			description:
				"1,334 sq. km of diverse landscapes including dry deciduous forests, open grasslands, and lakes.",
			icon: Ruler,
			stats: [
				{ value: "10", label: "Safari Zones" },
				{ value: "3", label: "Major Lakes" },
			],
		},
		{
			title: "Best Time to Visit",
			description:
				"October to April when the weather is pleasant and wildlife sightings are frequent.",
			icon: CloudSun,
			stats: [
				{ value: "15–35°C", label: "Temperature" },
				{ value: "Low", label: "Rainfall" },
			],
		},
		{
			title: "Wildlife Viewing",
			description:
				"Royal Bengal Tigers and diverse ecosystem with over 300 bird species and various wildlife.",
			icon: Camera,
			stats: [
				{ value: "70+", label: "Tigers" },
				{ value: "300+", label: "Bird Species" },
			],
		},
		{
			title: "Safari Types",
			description:
				"Jeep safaris, canter safaris, and nature walks with expert guides for comprehensive wildlife exploration.",
			icon: Compass,
			stats: [
				{ value: "2", label: "Daily Slots" },
				{ value: "3.5 hrs", label: "Per Safari" },
			],
		},
		{
			title: "Park Season",
			description:
				"Open from October 1 to June 30 annually. Closed during monsoon season (July–September).",
			icon: Calendar,
			stats: [
				{ value: "9", label: "Months Open" },
				{ value: "6 AM & 2 PM", label: "Safari Timings" },
			],
		},
		{
			title: "Ecosystem",
			description:
				"Diverse habitats including dense jungle, grasslands, lakes, and ancient ruins providing unique niches for wildlife.",
			icon: Leaf,
			stats: [
				{ value: "5+", label: "Ecosystems" },
				{ value: "40+", label: "Mammals" },
			],
		},
		{
			title: "Conservation Status",
			description:
				"Designated as Project Tiger reserve in 1973 and continues to be one of India's most successful conservation stories.",
			icon: BadgeCheck,
			stats: [
				{ value: "1973", label: "Established" },
				{ value: "UNESCO", label: "Nominated" },
			],
		},
	] satisfies QuickFactCard[],
} as const;

export const NATIONAL_PARK_CONTENT = {
	eyebrow: "Ranthambore Tiger Reserve",
	title: "Ranthambore National Park",
	subtitle: "History, wilderness, and one of India's great tiger landscapes",
	intro:
		"Ranthambore National Park is a tiger reserve in Sawai Madhopur, Rajasthan, where dry deciduous forest, lakes, and a 10th-century fort share the same landscape. Travellers come for Royal Bengal tigers — but the park is equally defined by its history, birdlife, and open viewing habitat. This guide covers what the park is, how big it is, when it is open, and how it connects to safari zones, wildlife, and conservation.",
	quote:
		"Historically, the Ranthambore Fort, a UNESCO World Heritage Site, has been a sentinel of power since the 10th century. It overlooks the entire park and remains a proud reminder of Rajasthan's valor and resilience.",
	outro:
		"Originally the royal hunting grounds of the Maharajas of Jaipur, the landscape evolved from the Sawai Madhopur Wildlife Sanctuary (1955) into one of India's pioneering Project Tiger reserves (1973). The core tourism landscape is often described as roughly 392 sq km within a larger tiger reserve complex exceeding 1,300 sq km. Tiger numbers fluctuate with official censuses — treat population figures as approximate and verify against current Forest Department data.",
	map: {
		src: "/flora/map.webp",
		alt: "Map of Ranthambore National Park showing forest cover and safari zone landscape",
		location: "Ranthambore, India",
	},
	lastReviewed: "2026-10-04",
} as const;

export const NATIONAL_PARK_FAQS = [
	{
		question: "How big is Ranthambore National Park?",
		answer:
			"The core tourism landscape of Ranthambore National Park is commonly described as about 392 square kilometres. It sits within the larger Ranthambore Tiger Reserve complex — including adjoining sanctuaries — which covers more than 1,300 square kilometres of protected forest, grassland, and hills.",
	},
	{
		question: "When is Ranthambore National Park closed?",
		answer:
			"The park is typically closed during the monsoon, from 1 July to 30 September, and open from 1 October to 30 June. Confirm the current season before you travel, as access rules can be updated by the forest department.",
	},
	{
		question: "What is the best time to visit Ranthambore?",
		answer:
			"October to March offers the most comfortable weather and strong birding. April to June is hotter, but wildlife often concentrates near lakes and waterholes. Sightings are never guaranteed in any month.",
	},
	{
		question: "How many safari zones does Ranthambore have?",
		answer:
			"Ranthambore is organised into 10 safari zones. Zones 1–5 are core tourism areas; zones 6–10 are buffer zones. Zone allocation is managed by the forest department and is subject to availability.",
	},
] as const;

export const NATIONAL_PARK_ECOLOGY = {
	title: "Landscape & ecology",
	paragraphs: [
		"Ranthambore sits at the junction of the Aravalli and Vindhya systems in Sawai Madhopur district. The tourism landscape mixes dry deciduous dhok forest, open grasslands, seasonal streams, and a chain of lakes that become wildlife magnets as the dry season progresses.",
		"Padam Talao, Raj Bagh, and Malik Talao are among the best-known waterbodies — not only for scenery, but because tigers, deer, crocodiles, and birds share the edges. Ancient structures such as the fort and old hunting pavilions sit inside this working ecosystem, which is why the park feels like wilderness and heritage at once.",
		"The wider Ranthambore Tiger Reserve complex also includes adjoining protected areas. When comparing “park area” figures, distinguish the core tourism landscape (often cited around 392 sq km) from the larger reserve footprint (over 1,300 sq km including linked sanctuaries).",
	],
} as const;

export const NATIONAL_PARK_MONSOON = {
	title: "Monsoon closure",
	paragraphs: [
		"In a typical year the core tourism park closes from 1 July to 30 September for the monsoon. Roads soften, vegetation explodes, and management prioritises habitat rest and safety over visitor traffic.",
		"Plan arrivals from October onwards. Reopening weeks can be lush and bird-rich, while mid-winter is the classic peak for comfort. Always confirm the current season notice before you lock non-refundable travel.",
	],
} as const;

export const NATIONAL_PARK_RELATED_GUIDES = [
	{
		title: "Safari Zones 1–10",
		href: "/safari/zones",
		description:
			"Landscape notes, lakes, and wildlife character for every Ranthambore safari zone.",
	},
	{
		title: "Tigers of Ranthambore",
		href: "/about/tigers",
		description:
			"Profiles of famous Royal Bengal tigers and how individuals are known in the park.",
	},
	{
		title: "Plan Your Visit",
		href: "/plan",
		description:
			"How to reach Sawai Madhopur, choose a season, book safaris, and pack for the forest.",
	},
	{
		title: "Jeep & Canter Safari",
		href: "/safari/jeep",
		description:
			"Compare Gypsy and Canter vehicles before you request a booking.",
	},
	{
		title: "Conservation at Ranthambore",
		href: "/about/conservation",
		description:
			"Project Tiger, protection work, and the community side of the reserve story.",
	},
	{
		title: "Wildlife, Flora & Fauna",
		href: "/about/flora-and-fauna",
		description:
			"Mammals, birds, reptiles, and the dry deciduous forest that shapes every safari.",
	},
] as const;
