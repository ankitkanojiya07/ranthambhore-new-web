export interface SafariZone {
	zone: number;
	area: string;
	safariType: string;
	famousFor: string;
}

export interface ZoneDetail {
	zone: number;
	title: string;
	paragraphs: readonly string[];
	pointsOfInterest: readonly string[];
	closing: string;
}

export const SAFARI_ZONES_CONTENT = {
	title: "Ranthambore Safari Zone Guide",
	intro:
		"Ranthambore is divided into ten safari zones. Each zone has a different mix of lakes, valleys, fort approaches, and forest density — which shapes what you are likely to see, not what you are guaranteed to see. Use this guide to understand landscape character and planning trade-offs before you request a zone preference.",
	brochureHref: "/safari/ranthambore-zone-brochure.pdf",
	brochureLabel: "Download Zone Brochure",
	lastReviewed: "2026-10-04",
} as const;

export const SAFARI_ZONES_RELATED_GUIDES = [
	{
		title: "Jeep & Canter Safari",
		href: "/safari/jeep",
		description: "Compare Gypsy and Canter before choosing a vehicle type.",
	},
	{
		title: "Timings & Booking Guidelines",
		href: "/safari/timing-and-fees",
		description: "Seasonal schedule, documents, and booking windows.",
	},
	{
		title: "Plan Your Visit",
		href: "/plan",
		description: "Best time, how to reach, packing, and trip logistics.",
	},
	{
		title: "Ranthambore National Park",
		href: "/about/national-park",
		description: "Park geography, season, and the wider tiger reserve story.",
	},
] as const;

export const ZONE_GUIDE_DETAILS: ZoneDetail[] = [
	{
		zone: 1,
		title: "Zone 1 — Into the Heart of the Wild",
		paragraphs: [
			"Zone 1 invites you into a forest where the wilderness reveals itself slowly. Beneath the filtered sunlight, majestic tigers move quietly through the woodland, while chital and langurs bring constant movement to the forest floor.",
			"The calls of birds echo through the trees, creating a natural soundtrack to every safari. Around Jogi Mahal, the landscape is marked by magnificent banyan trees, date palms and dhonk forests—vegetation that has become an integral part of Ranthambore’s character.",
		],
		pointsOfInterest: ["Gumbad", "Raipur Bawdi", "Peela Pani", "Shikaar Hod"],
		closing:
			"A landscape shaped by forest, water and the quiet presence of the tiger.",
	},
	{
		zone: 2,
		title: "Zone 2 — Where History Meets Wilderness",
		paragraphs: [
			"In Zone 2, the wilderness unfolds against the backdrop of Ranthambore’s remarkable history. Tigers move through a landscape where ancient structures and the forest exist side by side.",
			"Sambar graze beneath the timeless architecture, while kingfishers and peacocks add flashes of colour and sound to the forest. Tendu, mango and jamun trees provide shade, food and shelter, creating a habitat rich in life.",
		],
		pointsOfInterest: [
			"Naalghati",
			"Futa Bandha",
			"Kemcha Kund",
			"Kisne Deh",
			"Ancient Chhatri",
		],
		closing: "Here, every safari carries an echo of the past.",
	},
	{
		zone: 3,
		title: "Zone 3 — The Iconic Ranthambore",
		paragraphs: [
			"Zone 3 is perhaps where Ranthambore’s two great stories come together most dramatically—the story of its royal past and the story of its wild inhabitants.",
			"Ancient ruins, Rajbagh Palace, Jogimahal, chhatris and old hunting structures rise from the forest, creating a landscape unlike any other. Padam Talab reflects the surrounding wilderness, while chital and peacocks move through the ruins.",
			"Above it all, Ranthambore Fort rises over the forest canopy.",
			"This is a landscape where the remnants of a royal hunting ground have been transformed into a sanctuary for wildlife.",
		],
		pointsOfInterest: [
			"Dharamshala",
			"Mahal Gate",
			"Jogimahal",
			"Rajbag Palace",
			"Rajbag Talab",
			"Dudh Bawri",
		],
		closing:
			"A place where history does not disappear—it becomes part of the wilderness.",
	},
	{
		zone: 4,
		title: "Zone 4 — The Quiet Wilderness",
		paragraphs: [
			"Zone 4 has a character of its own—quiet, rugged and beautifully atmospheric. Weathered hunting structures and old walls provide a striking setting for wildlife.",
			"Leopards may be encountered moving through the forest, while crocodiles bask beside tranquil water bodies. Birds bring life to the surrounding greenery, creating moments of movement and sound against a landscape shaped by centuries of history.",
			"Khair, Gond Katira and Grewia add to the dry forest character of the zone and provide essential habitat and sustenance for wildlife.",
		],
		pointsOfInterest: [
			"Gular Kui",
			"Semli Khuranja",
			"Malik Talab",
			"Lakkarda Talab",
		],
		closing:
			"A safari here is an invitation to slow down, observe and discover.",
	},
	{
		zone: 5,
		title: "Zone 5 — Life Around Water",
		paragraphs: [
			"Water shapes the experience of Zone 5. Its tranquil ponds draw sambar and other wildlife to their edges, creating natural scenes of movement and interaction.",
			"Painted storks and herons wade through the shallows, while crocodiles lie motionless in the warmth of the sun. Around these water bodies, wild sugarcane, khus grass and the vibrant palash create a rich and varied landscape.",
			"When the forest gathers around water, the smallest moments can become unforgettable.",
		],
		pointsOfInterest: [
			"Eagle Point",
			"Bhakola",
			"Kachida Valley",
			"Peepli Deh",
		],
		closing: "Where water becomes the stage for the theatre of the wild.",
	},
	{
		zone: 6,
		title: "Zone 6 — Open Skies & Wide Horizons",
		paragraphs: [
			"Zone 6 opens into a different expression of Ranthambore. Expansive grasslands, gentle slopes and sunlit terrain create a sense of space and freedom.",
			"The agile chinkara is particularly suited to this open landscape, moving gracefully across the dry terrain. Light travels differently here—across hills, grasslands and rocky slopes—revealing a landscape that changes with every hour of the day.",
			"Lapla grass, Ronjh and lobaan form part of this hardy dryland ecosystem.",
		],
		pointsOfInterest: [
			"Palli Darwaza",
			"Saaran Ka Patta",
			"Mountain View",
			"Zone 6 High Point",
			"Patwa Stepwell",
			"Kundi Area",
		],
		closing: "A landscape of open horizons, changing light and wild movement.",
	},
	{
		zone: 7,
		title: "Zone 7 — Into Leopard Country",
		paragraphs: [
			"Zone 7, within Sawai Mansingh Sanctuary, offers a more rugged expression of the Ranthambore landscape.",
			"Rocky outcrops and dense forest create ideal surroundings for elusive leopards. They move effortlessly across steep slopes, disappear among the vegetation and, at times, reveal themselves resting on branches.",
			"The forest here has a distinctly intimate atmosphere, with sunlight filtering through the trees and illuminating the rugged terrain.",
			"Amaltas, with its golden flowers, and the striking red blooms of the semal add seasonal colour to the landscape.",
		],
		pointsOfInterest: [
			"Aam Kua",
			"Kali Talai",
			"Tuta Anicut",
			"Mountain View Point",
		],
		closing: "A zone of shadows, slopes and the elusive leopard.",
	},
	{
		zone: 8,
		title: "Zone 8 — The Wild Frontier",
		paragraphs: [
			"Zone 8 offers a diverse landscape where open grasslands meet forested terrain. It is home to a variety of carnivores, including the elusive leopard and the regal tiger.",
			"Here, the drama of the wilderness can unfold in many forms—a tiger moving through tall grass, a leopard resting in the trees, or the sudden appearance of a predator emerging from the forest.",
			"Tendu, jhadi ber and Apluda grass contribute to the habitat, supporting herbivores, birds and other wildlife.",
		],
		pointsOfInterest: [
			"Maha Kho",
			"Gol Chata",
			"Sitamata Ghati",
			"Mountain View",
		],
		closing:
			"A raw and unpredictable landscape where every turn holds possibility.",
	},
	{
		zone: 9,
		title: "Zone 9 — The Open Wilderness",
		paragraphs: [
			"Zone 9 carries the character of Ranthambore’s open landscapes, where grasslands and gentle slopes create expansive views across the terrain.",
			"The agile chinkara moves naturally through these sun-drenched spaces, while the changing light creates an ever-shifting pattern across the hills.",
			"Lapla grass, Ronjh and lobaan are part of this dry, resilient ecosystem, providing cover, shade and sustenance within the landscape.",
		],
		pointsOfInterest: [
			"Palli Darwaza",
			"Saaran Ka Patta",
			"Mountain View",
			"Zone 6 High Point",
			"Patwa Stepwell",
			"Kundi Area",
		],
		closing:
			"A landscape defined by space, silence and the rhythm of the dry forest.",
	},
	{
		zone: 10,
		title: "Zone 10 — The Wilderness Continues",
		paragraphs: [
			"Zone 10 offers another glimpse into the open and rugged character of Ranthambore’s landscape.",
			"Expansive grasslands and gentle slopes create a setting where wildlife moves against wide horizons. The chinkara is particularly suited to this terrain, while the changing interplay of light and shadow brings a different mood to the forest with every passing hour.",
			"Lapla grass, Ronjh and lobaan form part of this hardy landscape, reflecting the resilience of Ranthambore’s dry forest ecosystem.",
		],
		pointsOfInterest: [
			"Palli Darwaza",
			"Saaran Ka Patta",
			"Mountain View",
			"Zone 6 High Point",
			"Patwa Stepwell",
			"Kundi Area",
		],
		closing: "Where the wilderness stretches beyond the horizon.",
	},
];

export const ZONE_GUIDE_CLOSING = {
	tagline: "Explore • Observe • Respect",
	paragraphs: [
		"Ranthambore is not simply a place to look for wildlife. It is a landscape to experience, understand and respect.",
		"Every zone has its own character. Every trail has its own rhythm. And every safari carries the possibility of a moment that stays with you long after you leave the forest.",
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
