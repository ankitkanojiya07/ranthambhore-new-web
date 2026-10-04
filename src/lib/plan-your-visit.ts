import type { LucideIcon } from "lucide-react";
import {
	Backpack,
	Bus,
	Calendar,
	ClipboardList,
	HelpCircle,
	Hotel,
	Lightbulb,
	Map as MapIcon,
	MapPin,
	ShieldCheck,
} from "lucide-react";
import { SAFARI_VEHICLES } from "#/lib/safari-vehicles";
import { SAFARI_ZONES } from "#/lib/safari-zones";

export interface JourneyStep {
	id: string;
	step: string;
	title: string;
	intro: string;
	icon: LucideIcon;
}

export interface TravelMode {
	title: string;
	description: string;
	details?: readonly string[];
}

export interface PackingList {
	audience: string;
	items: readonly string[];
}

export interface PlanFaqItem {
	id: string;
	question: string;
	answer: string;
}

export interface TravelTip {
	title: string;
	body: string;
}

export const PLAN_YOUR_VISIT_CONTENT = {
	title: "Plan Your Visit to Ranthambore",
	subtitle:
		"How to reach Sawai Madhopur, the best time to visit, safari booking basics, zone choices, packing lists, and FAQs — in one practical journey guide.",
	intro:
		"Planning a Ranthambore trip well means answering logistics before you chase a tiger photo: trains and roads from Delhi or Jaipur, monsoon closure, safari permits, Gypsy vs Canter, and where to stay near the gates. Follow this step-by-step guide so the park, not the paperwork, becomes the hard part.",
} as const;

export const JOURNEY_STEPS: JourneyStep[] = [
	{
		id: "getting-here",
		step: "01",
		title: "Getting to Ranthambhore",
		intro:
			"Reach Sawai Madhopur — the gateway town to Ranthambore National Park.",
		icon: MapPin,
	},
	{
		id: "best-time-to-visit",
		step: "02",
		title: "Best Time to Visit",
		intro:
			"Pick the season that matches your comfort, budget, and tiger-sighting goals.",
		icon: Calendar,
	},
	{
		id: "book-safari",
		step: "03",
		title: "Book Your Safari",
		intro:
			"Secure your slot before you travel — peak season fills up within hours.",
		icon: ClipboardList,
	},
	{
		id: "choose-vehicle",
		step: "04",
		title: "Choose Gypsy or Canter",
		intro:
			"Compare the 6-seater Gypsy and 20-seater Canter to find your best fit.",
		icon: Bus,
	},
	{
		id: "safari-zone-guide",
		step: "05",
		title: "Safari Zone Guide",
		intro:
			"Understand all 10 safari zones — terrain, vehicle access, and what each area is famous for.",
		icon: MapIcon,
	},
	{
		id: "where-to-stay",
		step: "06",
		title: "Where to Stay",
		intro:
			"Choose accommodation close to the forest gates for smooth safari mornings.",
		icon: Hotel,
	},
	{
		id: "what-to-carry",
		step: "07",
		title: "What to Carry",
		intro:
			"Pack smart for safari mornings, dry forest trails, and park entry rules.",
		icon: Backpack,
	},
	{
		id: "safari-day-guide",
		step: "08",
		title: "Safari Day Guide (Do's & Don'ts)",
		intro:
			"Know what to expect on safari day — pick-up times, park etiquette, and essential rules.",
		icon: ShieldCheck,
	},
	{
		id: "travel-tips",
		step: "09",
		title: "Travel Tips",
		intro:
			"Insider advice from our Sawai Madhopur team — booking windows, local know-how, and practical tips.",
		icon: Lightbulb,
	},
	{
		id: "faqs",
		step: "10",
		title: "FAQs",
		intro:
			"Answers to the most common questions travellers ask before visiting Ranthambhore.",
		icon: HelpCircle,
	},
];

export const GETTING_HERE = {
	modes: [
		{
			title: "By Train",
			description:
				"Sawai Madhopur Railway Station is the nearest railhead, approximately 14 km from the park gate. It is well connected to Delhi, Mumbai, Jaipur, and Agra. Luxury trains including Palace on Wheels and Maharaja Express also stop here — making Ranthambhore a natural stop on a Rajasthan circuit.",
			details: [
				"Book trains early during October–March peak season.",
				"Most hotels arrange pick-up from Sawai Madhopur station.",
				"Allow 20–30 minutes to reach your hotel from the station.",
			],
		},
		{
			title: "By Road",
			description:
				"Ranthambhore is easily reached by car or bus from Jaipur, Delhi, Agra, and other Rajasthan cities. Private cabs and resort transfers are widely available.",
			details: [
				"Jaipur: ~155 km (3 hours)",
				"Delhi: ~381 km (6–7 hours)",
				"Agra: ~239 km (4–5 hours)",
				"Udaipur: ~388 km (7 hours)",
				"Gurugram: ~400 km (6–7 hours)",
				"Jodhpur: ~445 km (8–9 hours)",
				"Bandhavgarh National Park: ~681 km (10+ hours)",
				"Chambal Gharial Safari: ~50 km (1 hour)",
			],
		},
		{
			title: "By Air",
			description:
				"Jaipur International Airport (~180 km, ~2.5 hours by car) is the nearest major airport. Taxis and pre-booked cabs run directly to Sawai Madhopur and Ranthambhore resorts.",
			details: [
				"Pre-book airport transfers during peak season.",
				"Combine with a Jaipur stay for a classic Rajasthan wildlife itinerary.",
			],
		},
	] satisfies TravelMode[],
} as const;

export const BEST_TIME_TO_VISIT = {
	peakSeason:
		"October to March is the most comfortable time to travel — cool weather, thinning vegetation after monsoon, and excellent tiger activity. Migratory birds arrive from October, and visibility is at its best from November to February.",
	summerSeason:
		"April to June brings intense heat, but tigers gather near lakes and water bodies — often improving sighting chances. This is the favourite season for wildlife photographers willing to brave the summer.",
	closedSeason:
		"The park is closed from 1 July to 30 September every year during the monsoon. Plan your trip between October and June.",
	monthlyHighlights: [
		"October: Park reopens. Lush forest, rising tiger sightings, excellent birding.",
		"November–January: Peak season. Cool mornings, brilliant wildlife activity.",
		"February–March: Great light for photography. Tiger cubs often visible.",
		"April–June: Hot but thrilling. Concentrated water-hole action.",
	],
	months: [
		{
			month: "October",
			weather: "Warm days, cooler nights; post-monsoon green",
			wildlife: "Park reopens; good birding; rising predator activity",
			travellerFit: "Ideal reopening month — book early",
		},
		{
			month: "November",
			weather: "Pleasant days, cold mornings",
			wildlife: "Strong general wildlife activity; migrants arriving",
			travellerFit: "Peak comfort for first-time visitors",
		},
		{
			month: "December",
			weather: "Cold mornings/evenings; clear skies",
			wildlife: "Excellent visibility; busy tourism season",
			travellerFit: "Bring layers; expect full hotels",
		},
		{
			month: "January",
			weather: "Coldest month; misty dawns possible",
			wildlife: "Active mornings; great light later in day",
			travellerFit: "Classic peak-season trip",
		},
		{
			month: "February",
			weather: "Cool to mild; superb photography light",
			wildlife: "Strong activity; cub sightings often discussed",
			travellerFit: "Photographers' favourite",
		},
		{
			month: "March",
			weather: "Warming fast; vegetation thinning",
			wildlife: "Good visibility as cover reduces",
			travellerFit: "Shoulder of peak season",
		},
		{
			month: "April",
			weather: "Hot; dry landscape",
			wildlife: "Animals concentrate near water",
			travellerFit: "For heat-tolerant wildlife watchers",
		},
		{
			month: "May",
			weather: "Very hot; intense midday sun",
			wildlife: "Waterhole drama; challenging conditions",
			travellerFit: "Serious safari travellers only",
		},
		{
			month: "June",
			weather: "Hot; pre-monsoon build-up",
			wildlife: "Still open until late June in a typical year",
			travellerFit: "Last open weeks before closure",
		},
		{
			month: "July–September",
			weather: "Monsoon",
			wildlife: "Core tourism park typically closed",
			travellerFit: "Do not plan park safaris; verify exceptions",
		},
	],
} as const;

export const SAMPLE_ITINERARIES = {
	title: "Sample Ranthambore itineraries",
	intro:
		"These sample plans assume the park is open and that safari permits are already secured. Adjust for train times, hotel distance from gates, and how many safaris you booked.",
	plans: [
		{
			id: "2-day",
			title: "2-day Ranthambore itinerary",
			summary:
				"A tight weekend-style plan: arrive, do two to three safaris, add one heritage or lake outing if energy allows.",
			days: [
				{
					label: "Day 1",
					items: [
						"Arrive Sawai Madhopur by morning train or road; hotel check-in and safari briefing",
						"Afternoon safari (Gypsy or Canter as booked)",
						"Evening rest; light dinner; early sleep for morning pickup",
					],
				},
				{
					label: "Day 2",
					items: [
						"Morning safari in a different session/zone if allocated",
						"Optional: short visit toward fort approaches / local crafts if time remains",
						"Depart by afternoon/evening train — or stay for a third safari if you extended",
					],
				},
			],
		},
		{
			id: "3-day",
			title: "3-day Ranthambore itinerary",
			summary:
				"The most practical first visit: three to four safaris, one buffer half-day for fort/temple/crafts, and less rushed transfers.",
			days: [
				{
					label: "Day 1",
					items: [
						"Arrive and settle near the forest gates",
						"Afternoon safari to learn the landscape with your naturalist",
						"Review next-day pickup time and packing list",
					],
				},
				{
					label: "Day 2",
					items: [
						"Morning safari (best light and often cooler)",
						"Midday rest — summers demand this",
						"Afternoon safari in another zone/session if allocated",
					],
				},
				{
					label: "Day 3",
					items: [
						"Optional final morning safari OR heritage morning (Fort / Trinetra Ganesh / local crafts)",
						"Checkout and onward travel to Jaipur, Agra, or Delhi",
					],
				},
			],
		},
	],
} as const;

/** @deprecated Use BEST_TIME_TO_VISIT */
export const WHEN_TO_VISIT = BEST_TIME_TO_VISIT;

export const BOOK_SAFARI_ADVANCE = {
	intro:
		"Book your Ranthambore safari before you arrive. Due to limited slots and high demand, walk-in bookings are rarely available in peak season. Secure your preferred date, zone, and vehicle type at least 45–90 days ahead.",
	bookingTips: [
		"Official portal: ranthambore.rajasthan.gov.in — bookings open 90 days in advance.",
		"Authorised operators like Ranthambhor.com can assist with zone advice and confirmed slots.",
		"Carry government-issued photo ID for every passenger — mandatory at park entry.",
		"Consider 2–3 safaris across 2+ days to maximise tiger sighting chances.",
		"Morning and afternoon sessions each offer different light and wildlife behaviour.",
	],
	timingsHref: "/safari/timing-and-fees",
	safariHref: "/safari/jeep",
} as const;

export { SAFARI_VEHICLES as SAFARI_VEHICLE_OPTIONS };

export const SAFARI_ZONE_GUIDE = {
	intro:
		"Ranthambore is divided into 10 safari zones. Zones 1–5 are core areas with the highest tiger activity; zones 6–10 are buffer areas that can be quieter and equally rewarding. Zone allocation is subject to forest department availability — request preferences when booking.",
	tips: [
		"Zones 1–3 offer iconic lake scenery and frequent tiger sightings.",
		"Zones 7–9 are Gypsy-only and tend to be less crowded.",
		"Spread safaris across 2+ zones over multiple days for better coverage.",
		"Canter safaris are not available in zones 7, 8, and 9.",
	],
	zonesHref: "/safari/zones",
} as const;

export { SAFARI_ZONES };

export const WHERE_TO_STAY = {
	body: "Where you stay matters as much as which zone you safari. Hotels and resorts near the forest gates help you reach morning pick-ups on time, rest after long safari drives, and enjoy Sawai Madhopur without rushing. Options range from luxury forest lodges to comfortable mid-range hotels and budget-friendly stays.",
	tips: [
		"Book accommodation and safari together during peak months (October–March).",
		"Choose a property within 20–30 minutes of the park entrance.",
		"Confirm whether your hotel includes safari pick-up and naturalist briefing.",
		"Many resorts offer multi-night packages with 2–4 safaris included.",
	],
	stayHref: "/stay/hotels",
} as const;

export const PACKING_LISTS: PackingList[] = [
	{
		audience: "For Indian Travellers",
		items: [
			"Government photo ID — Aadhaar card, voter ID, driving licence, or passport",
			"Safari booking confirmation (printout or digital copy)",
			"Earth-toned clothing — khaki, olive, beige, or brown (avoid bright colours)",
			"Warm layers for October–February morning safaris",
			"Sun hat, scarf, mask, SPF 50+ sunscreen, and sunglasses",
			"Binoculars and camera with telephoto lens if photographing wildlife",
			"Sufficient water for each safari (~3.5 hours)",
			"Cash for local transport, tips, and small vendors in Sawai Madhopur",
			"Basic medicines and personal essentials",
		],
	},
	{
		audience: "For International Travellers",
		items: [
			"Valid passport — mandatory for park entry and booking verification",
			"Visa and travel insurance documents",
			"Safari booking confirmation with passport details matching exactly",
			"Universal power adapter and power bank",
			"Earth-toned safari clothing and comfortable closed shoes",
			"Binoculars; telephoto lens (200–600mm recommended for tigers)",
			"Insect repellent, sunscreen, and a brimmed hat",
			"Bottled or filtered water — drink only safe water throughout your stay",
			"Consult your doctor about malaria prophylaxis if visiting near monsoon",
			"Indian currency (INR) — ATMs available in Sawai Madhopur; carry cash backup",
		],
	},
];

export const SAFARI_DAY_GUIDE = {
	intro:
		"Your safari typically lasts around 3.5 hours. Private Jeep pick-up is around 06:00 for morning safaris and 14:00 for afternoon safaris (exact times vary by season). Arrive at the park gate at least 30 minutes before departure.",
	dos: [
		"Stay calm and listen to your naturalist guide at all times.",
		"Remain seated in the vehicle throughout the safari.",
		"Wear muted colours and avoid perfumes or noisy accessories.",
		"Carry water, sun protection, and your photo ID.",
	],
	donts: [
		"Never feed wildlife or litter inside the park.",
		"No smoking or alcohol within park premises.",
		"No loud noises — they disturb animals and reduce sightings.",
		"Do not disembark except at designated halt points.",
	],
	relatedLinks: [
		{ label: "Safari Timings & Booking", href: "/safari/timing-and-fees" },
		{ label: "Jeep & Canter Safari Guide", href: "/safari/jeep" },
		{ label: "Full Zone Guide", href: "/safari/zones" },
	],
} as const;

export const TRAVEL_TIPS: TravelTip[] = [
	{
		title: "Book 60–90 Days Ahead",
		body: "Safari slots on the official portal open 90 days in advance and sell out fast in October–March. Book accommodation at the same time.",
	},
	{
		title: "Carry Original Photo ID",
		body: "Every passenger needs government-issued photo ID at the park gate. Names on booking and ID must match exactly — especially for international visitors using passports.",
	},
	{
		title: "Plan Multiple Safaris",
		body: "One safari is rarely enough. Two to three safaris over two days across different zones and sessions dramatically improve your chances of memorable sightings.",
	},
	{
		title: "Dress for the Season",
		body: "October–February mornings are cold — bring layers. April–June is extremely hot — light cotton, hat, and plenty of water are essential.",
	},
	{
		title: "Stay Near the Gates",
		body: "Properties within 20–30 minutes of the park entrance save precious sleep on early morning pick-up days and reduce travel stress.",
	},
	{
		title: "Keep Cash Handy",
		body: "ATMs exist in Sawai Madhopur, but carry cash for tips, local vendors, and small purchases. UPI is widely accepted in town.",
	},
	{
		title: "Respect Park Rules",
		body: "No smoking, littering, or loud noises inside the park. Stay seated in the vehicle and follow your naturalist guide at all times.",
	},
	{
		title: "Combine with Heritage",
		body: "Allow half a day for Ranthambore Fort, local temples, or nearby attractions. Our team can weave culture and wildlife into one seamless plan.",
	},
];

export const PLAN_FAQS: PlanFaqItem[] = [
	{
		id: "open-season",
		question: "When is Ranthambhore National Park open to visitors?",
		answer:
			"Ranthambhore is open from 1st October to 30th June each year. It remains closed during July, August, and September due to the monsoon season.",
	},
	{
		id: "best-zone",
		question: "Which is the best zone for tiger sightings?",
		answer:
			"Zones 1–5 are core tourism areas with rich habitat, and buffer zones 6–10 can also be excellent. There is no official zone ranking that guarantees a tiger — book multiple safaris and treat sightings as chance events.",
	},
	{
		id: "choose-zone",
		question: "Can I choose my safari zone?",
		answer:
			"You may request a preferred zone, but allocation is subject to availability and is controlled by the forest department. We always try to honour zone preferences wherever possible.",
	},
	{
		id: "delhi",
		question: "How far is Ranthambore from Delhi?",
		answer:
			"By road, Sawai Madhopur / Ranthambore is commonly about 380–400 km from Delhi (roughly 6–7 hours depending on traffic and stops). Many travellers prefer an overnight train to Sawai Madhopur.",
	},
	{
		id: "jaipur",
		question: "How far is Ranthambore from Jaipur?",
		answer:
			"Jaipur is the nearest major city and airport hub — roughly 155–180 km by road (about 3 hours). Combining Jaipur heritage with Ranthambore safaris is a classic Rajasthan circuit.",
	},
	{
		id: "booking",
		question: "How do I book a jungle safari?",
		answer:
			"Book through the official Rajasthan Forest Department portal or an authorised operator. Share ID details, preferred dates, and guest count; carry matching photo ID at the gate.",
	},
	{
		id: "timings",
		question: "What are the safari timings?",
		answer:
			"Safaris run twice daily: morning and afternoon sessions. Exact entry/exit times shift with the season — see the timings guide for the month-wise table.",
	},
	{
		id: "children",
		question: "Are children allowed on safari?",
		answer:
			"Yes, children of all ages are welcome, though those under 5 may find the bumpy ride tiring. Bring snacks and water for younger kids.",
	},
	{
		id: "clothing",
		question: "What should I wear for a safari?",
		answer:
			"Wear neutral-coloured clothes (khaki, brown, olive), a hat, and closed shoes. October–February mornings can be cold — bring a jacket or shawl.",
	},
	{
		id: "best-time",
		question: "When is the best time to visit?",
		answer:
			"October–March offers comfortable weather and great birding. April–June is hotter but animals often concentrate at waterholes. Sightings are never guaranteed in any month.",
	},
	{
		id: "itinerary-length",
		question: "Is 2 days enough for Ranthambore?",
		answer:
			"Two days can work for a short trip with two to three safaris, but three days is more comfortable — more sessions, less rush, and time for fort or craft visits.",
	},
];

export const PLAN_RELATED_GUIDES = [
	{
		title: "Ranthambore National Park",
		href: "/about/national-park",
		description: "Park geography, season, and reserve context.",
	},
	{
		title: "Safari Guide",
		href: "/safari",
		description: "Vehicles, zones, permits, and responsible viewing.",
	},
	{
		title: "Safari Zones 1–10",
		href: "/safari/zones",
		description: "Landscape notes before you request a zone.",
	},
	{
		title: "Where to Stay",
		href: "/stay/hotels",
		description: "Curated stays near the forest gates.",
	},
] as const;
