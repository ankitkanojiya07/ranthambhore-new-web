export const SAFARI_GUIDE_CONTENT = {
	eyebrow: "Safari pillar",
	title: "Ranthambore Safari Guide",
	intro:
		"A Ranthambore safari is a timed, permit-controlled drive through one of India's most watched tiger landscapes. This hub explains how the system works — vehicles, zones, seasons, booking windows, and responsible viewing — so you can plan before you enquire. Tiger sightings are never guaranteed; good planning improves your odds of a meaningful forest experience.",
	lastReviewed: "2026-10-04",
} as const;

export const SAFARI_GUIDE_SECTIONS = [
	{
		id: "how-safaris-work",
		title: "How Ranthambore safaris work",
		body: [
			"Safaris run in morning and afternoon sessions during the open season (typically 1 October–30 June). Each booking is tied to a vehicle type (Gypsy or Canter), a date, a session, and a zone allocated by the forest department.",
			"You cannot freely drive anywhere in the park. Routes and halt points are controlled. Naturalist guides and drivers interpret tracks, alarm calls, and habitat — the real skill of a Ranthambore safari is reading the forest, not racing for a tiger.",
		],
	},
	{
		id: "vehicles",
		title: "Gypsy vs Canter",
		body: [
			"Gypsy (jeep) safaris seat up to six visitors plus driver and guide. They handle narrower trails better and suit photography and small groups. Canter safaris seat up to about twenty visitors, cost less per person, and suit larger groups — but they do not enter every zone.",
			"Choose the vehicle for your group size and priorities first; then request zone preferences knowing allocation can change.",
		],
		href: "/safari/jeep",
		linkLabel: "Full Gypsy vs Canter comparison",
	},
	{
		id: "zones",
		title: "Safari zones 1–10",
		body: [
			"Ranthambore is organised into ten tourism zones. Zones 1–5 are core tourism areas with classic lake and fort landscapes; zones 6–10 are buffer zones that can be quieter and equally rewarding. Zone character is about habitat — lakes, valleys, ridges — not a published success-rate chart.",
			"Request preferences when booking, but treat the final zone as part of the experience rather than a promise of a specific tiger.",
		],
		href: "/safari/zones",
		linkLabel: "Complete zones 1–10 guide",
	},
	{
		id: "timings-booking",
		title: "Timings, permits & booking",
		body: [
			"Exact entry and exit times shift with sunrise and season. The official Rajasthan Forest Department portal is the source of truth for permits; authorised operators can help with process, zone advice, and logistics.",
			"Peak months fill quickly once the booking window opens (commonly described as about 90 days ahead). Carry matching photo ID for every passenger.",
		],
		href: "/safari/timing-and-fees",
		linkLabel: "Timings & booking guidelines",
	},
	{
		id: "responsible-viewing",
		title: "Responsible wildlife viewing",
		body: [
			"Stay seated in the vehicle, keep voices low, never feed animals, and follow your guide. Crowding, calling, and littering damage both wildlife behaviour and future sightings.",
			"Photography is welcome — use long lenses, avoid flash on close animals, and never ask a driver to break park rules for a shot.",
		],
	},
] as const;

export const SAFARI_GUIDE_FAQS = [
	{
		question: "Can I choose my safari zone in Ranthambore?",
		answer:
			"You may request a preferred zone, but final allocation is controlled by the forest department and depends on availability. Treat zone requests as preferences, not confirmed bookings.",
	},
	{
		question: "Is a tiger sighting guaranteed?",
		answer:
			"No. Ranthambore is excellent tiger habitat with relatively open viewing country, but sightings depend on season, zone, time of day, animal movement, and chance. Plan multiple safaris if seeing a tiger is a priority.",
	},
	{
		question: "How many safaris should I book?",
		answer:
			"Two to three safaris across different sessions and, if possible, different zones give a more complete picture of the park than a single drive. One safari can be magical — or quiet. Both outcomes are normal.",
	},
	{
		question: "When should I book?",
		answer:
			"Book as soon as the official window opens for your dates — especially for October–March. Summer slots can be easier, but heat is intense. Confirm live rules on the official portal before you travel.",
	},
] as const;

export const SAFARI_GUIDE_LINKS = [
	{
		title: "Jeep & Canter Safari",
		href: "/safari/jeep",
		description: "Capacity, experience, and which vehicle fits your group.",
	},
	{
		title: "Safari Zones 1–10",
		href: "/safari/zones",
		description: "Landscape notes for every tourism zone.",
	},
	{
		title: "Timings & Booking",
		href: "/safari/timing-and-fees",
		description: "Season schedule, documents, and booking windows.",
	},
	{
		title: "Plan Your Visit",
		href: "/plan",
		description: "How to reach, best season, packing, and itineraries.",
	},
] as const;
