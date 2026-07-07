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
	eyebrow: "Discover Our Heritage",
	title: "About Ranthambore",
	subtitle: "A Tapestry of History, Nature, and Culture",
	intro:
		"Ranthambore is not just about its tigers; it is a living museum where centuries-old temples, hunting pavilions, and majestic forts blend with untamed wilderness. The park's unique ecosystem supports an incredible variety of life against the backdrop of rugged terrain.",
	quote:
		"Historically, the Ranthambore Fort, a UNESCO World Heritage Site, has been a sentinel of power since the 10th century. It overlooks the entire park and remains a proud reminder of Rajasthan's valor and resilience.",
	outro:
		"Originally established as the royal hunting grounds of the Maharajas of Jaipur, the park evolved from the Sawai Madhopur Game Sanctuary (1955) to one of India's pioneering tiger reserves under Project Tiger (1973). Today, it stands as a shining example of wildlife conservation, supporting a thriving population of tigers and diverse fauna.",
	map: {
		src: "/flora/map.webp",
		alt: "Satellite map of Ranthambore National Park with safari zones",
		location: "Ranthambore, India",
	},
} as const;
