export interface SafariVehicle {
	id: string;
	title: string;
	image: string;
	imageAlt: string;
	capacity: string;
	cost: string;
	advantages: readonly string[];
	bestFor: readonly string[];
}

export const SAFARI_VEHICLES_CONTENT = {
	title: "Ranthambore Jeep vs Canter Safari",
	subtitle:
		"Compare the 6-seater Gypsy and 20-seater Canter — capacity, experience, zone access notes, and which option fits couples, families, or groups.",
	intro:
		"Both vehicles follow the same permit system and naturalist-led routes. The difference is intimacy, flexibility on trails, cost per person, and which zones each vehicle type can enter. Prices below are indicative planning ranges — verify live fees on the official portal.",
	lastReviewed: "2026-10-04",
} as const;

export const VEHICLE_COMPARISON_ROWS = [
	{
		aspect: "Capacity",
		gypsy: "Up to 6 visitors + driver & guide",
		canter: "Up to ~20 visitors + driver & guide",
	},
	{
		aspect: "Feel",
		gypsy: "Intimate, flexible on narrower tracks",
		canter: "Social, higher seating, shared commentary",
	},
	{
		aspect: "Best for",
		gypsy: "Photography, couples, small families",
		canter: "Budget groups, larger families, first trips",
	},
	{
		aspect: "Zone notes",
		gypsy: "Wider zone access including quieter Gypsy-only areas",
		canter: "Not available in all zones (commonly not in 7–9)",
	},
	{
		aspect: "Cost (indicative)",
		gypsy: "Higher per person",
		canter: "Lower per person",
	},
] as const;

export const VEHICLE_FAQS = [
	{
		question: "Is Gypsy better than Canter for tiger sightings?",
		answer:
			"Not automatically. Gypsy vehicles can reach some quieter trails and feel more personal, but tiger movement — not vehicle brand — decides the sighting. Book the vehicle that fits your group, then maximise sessions.",
	},
	{
		question: "Can Canter enter every Ranthambore zone?",
		answer:
			"No. Canter safaris are not available in every zone; Gypsy-only areas (commonly discussed for zones 7–9) are an important planning difference.",
	},
] as const;

export const VEHICLE_RELATED_GUIDES = [
	{
		title: "Safari Zones",
		href: "/safari/zones",
		description: "See which landscapes matter for your vehicle choice.",
	},
	{
		title: "Timings & Booking",
		href: "/safari/timing-and-fees",
		description: "Season schedule, documents, and cost framework.",
	},
	{
		title: "Safari Guide",
		href: "/safari",
		description: "How permits and sessions work end to end.",
	},
	{
		title: "Plan Your Visit",
		href: "/plan",
		description: "Build Gypsy/Canter choice into a full trip plan.",
	},
] as const;

export const SAFARI_VEHICLES: SafariVehicle[] = [
	{
		id: "gypsy",
		title: "Gypsy Safari (6-Seater)",
		image: "/Home/canter.webp",
		imageAlt: "Gypsy safari vehicle in Ranthambore National Park",
		capacity: "Maximum 6 visitors plus driver and guide",
		cost: "₹2,000 - ₹3,500 per person depending on zone and season",
		advantages: [
			"Greater maneuverability on narrow forest trails",
			"More personalized wildlife tracking experience",
			"Better opportunities for photography with less crowding",
			"Ability to reach more remote areas of the park",
		],
		bestFor: [
			"Photography enthusiasts seeking optimal shooting conditions",
			"Wildlife aficionados wanting closer encounters",
			"Small families or intimate groups",
			"Those seeking a premium safari experience",
		],
	},
	{
		id: "canter",
		title: "Canter Safari (20-Seater)",
		image: "/Home/gypsy.webp",
		imageAlt: "Canter safari vehicle with passengers in Ranthambore",
		capacity: "Up to 20 visitors with driver and guide",
		cost: "₹1,200 - ₹2,000 per person depending on zone and season",
		advantages: [
			"More economical option for budget travelers",
			"Higher seating position provides better visibility over vegetation",
			"Social experience with other wildlife enthusiasts",
			"Ideal for guided group interpretations",
		],
		bestFor: [
			"Budget-conscious travelers",
			"Larger groups and families",
			"School or educational trips",
			"First-time safari-goers wanting a guided group experience",
		],
	},
];

export interface SafariGuideline {
	label: string;
	description: string;
}

export const SAFARI_GUIDELINES = {
	title: "Safari Guidelines",
	dosAndDontsHeading: "Dos and Don'ts During the Safari",
	guidelines: [
		{
			label: "Protection",
			description:
				"Carry sun hats, scarfs, and masks. The park's climate is dry, and there can be considerable dust.",
		},
		{
			label: "Behavior",
			description: "Stay composed and calm. Always listen to your guide.",
		},
		{
			label: "Feeding",
			description:
				"Never feed the animals. They have ample food, and feeding them can be dangerous given their wild nature.",
		},
		{
			label: "Littering",
			description:
				"Avoid littering during your safari. Instead, dispose of waste at designated spots.",
		},
		{
			label: "Vehicle Safety",
			description:
				"Do not disembark from your vehicle and always remain seated.",
		},
		{
			label: "Noise",
			description:
				"Refrain from making loud noises or sounds. This could deter animals and hinder sightings.",
		},
		{
			label: "Substances",
			description:
				"Smoking and alcohol consumption are prohibited within the park's premises.",
		},
	] satisfies SafariGuideline[],
	essentialsHeading: "Safari Essentials",
	essentials: [
		"Pack earth-toned attire (khaki, olive, brown), binoculars, wide-brimmed hat, SPF 50+ sunscreen, and sufficient water.",
		"For photography enthusiasts, telephoto lenses (200-600mm) are highly recommended for wildlife captures.",
		"Avoid perfumes and noisy accessories that might disturb wildlife.",
	],
} as const;
