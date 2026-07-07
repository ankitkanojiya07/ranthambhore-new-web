import type { LucideIcon } from "lucide-react";
import {
	CircleDollarSign,
	Droplets,
	Leaf,
	PawPrint,
	Recycle,
	Shield,
	Sun,
	User,
	Users,
} from "lucide-react";

export interface ConservationInitiative {
	id: string;
	title: string;
	description: string;
	linkLabel: string;
	icon: LucideIcon;
}

export interface InitiativeTimelineItem {
	year: string;
	label: string;
}

export interface InitiativeMetric {
	label: string;
	value: string;
}

export interface InitiativeSubsection {
	title: string;
	body: string;
}

export interface InitiativeDetailSection {
	heading: string;
	items?: readonly string[];
	timeline?: readonly InitiativeTimelineItem[];
	metrics?: readonly InitiativeMetric[];
	subsections?: readonly InitiativeSubsection[];
}

export interface InitiativeDetail {
	id: string;
	title: string;
	intro: string;
	sections: readonly InitiativeDetailSection[];
}

export const CONSERVATION_CONTENT = {
	title: "Conservation Initiatives",
	intro:
		"Ranthambore's success story is a testament to dedicated conservation efforts and community involvement. From near extinction to a thriving tiger population, the journey has been remarkable.",
} as const;

export const CONSERVATION_INITIATIVES: ConservationInitiative[] = [
	{
		id: "project-tiger",
		title: "Project Tiger",
		description:
			"Launched in 1973, Project Tiger has been instrumental in bringing back tigers from the brink of extinction. Ranthambore is one of the success stories of this initiative.",
		linkLabel: "Learn About Project Tiger",
		icon: Shield,
	},
	{
		id: "anti-poaching",
		title: "Anti-Poaching Efforts",
		description:
			"Dedicated anti-poaching teams patrol the park regularly. Technological advancements like drone surveillance have strengthened protection mechanisms.",
		linkLabel: "Protection Measures",
		icon: Leaf,
	},
	{
		id: "community",
		title: "Community Engagement",
		description:
			"Local communities are actively involved in conservation through eco-tourism initiatives, providing sustainable livelihoods and reducing dependency on forest resources.",
		linkLabel: "Community Programs",
		icon: User,
	},
];

export const INITIATIVE_DETAILS: Record<string, InitiativeDetail> = {
	"project-tiger": {
		id: "project-tiger",
		title: "Project Tiger Initiative",
		intro:
			"Project Tiger is India's most successful conservation initiative launched in 1973 by the Government of India with the support of WWF. It began with 9 tiger reserves covering an area of 16,339 sq km, which has now expanded to 53 reserves covering more than 75,000 sq km.",
		sections: [
			{
				heading: "Historical Timeline",
				timeline: [
					{
						year: "1973",
						label:
							"Project Tiger launched with 9 reserves including Ranthambore",
					},
					{
						year: "1985",
						label:
							"Tiger population in Ranthambore reaches 25, up from just 14",
					},
					{
						year: "1993",
						label: "Project expanded to include more protected areas",
					},
					{
						year: "2006",
						label:
							"Project Tiger restructured as National Tiger Conservation Authority",
					},
					{
						year: "2018",
						label: "Tiger census shows Ranthambore with over 70 tigers",
					},
					{
						year: "2022",
						label: "Advanced monitoring technologies implemented",
					},
				],
			},
			{
				heading: "Key Initiatives",
				items: [
					"Core breeding habitats identified and declared as critical tiger habitats",
					"Creation of buffer zones to reduce human-wildlife conflict",
					"Scientific monitoring using camera traps and satellite tracking",
					"Anti-poaching squads with specialized training and equipment",
					"Relocation of villages from core areas with fair compensation",
				],
			},
			{
				heading: "Success Metrics",
				metrics: [
					{
						label: "Initial Tiger Population",
						value: "14 tigers in 1973",
					},
					{
						label: "Current Tiger Population",
						value: "Over 70 tigers in 2024",
					},
					{
						label: "Protected Habitat",
						value: "1,334 sq km of prime tiger habitat",
					},
					{
						label: "Wildlife Corridors",
						value:
							"3 wildlife corridors established connecting to nearby forests",
					},
				],
			},
			{
				heading: "Ongoing Challenges",
				items: [
					"Growing tiger population leading to territorial disputes",
					"Limited genetic diversity in isolated populations",
					"Encroachment at forest boundaries",
					"Rising tourism pressure on habitat",
				],
			},
		],
	},
	"anti-poaching": {
		id: "anti-poaching",
		title: "Anti-Poaching & Protection Measures",
		intro:
			"Ranthambore employs a comprehensive anti-poaching strategy combining boots-on-ground patrolling with cutting-edge technology. These measures have resulted in zero poaching incidents in the past five years, setting a gold standard for wildlife protection in India.",
		sections: [
			{
				heading: "Protection Teams",
				subsections: [
					{
						title: "Special Tiger Protection Force (STPF)",
						body: "An elite unit of 54 trained personnel exclusively focused on tiger protection with advanced weapons and training.",
					},
					{
						title: "Local Forest Guards",
						body: "112 forest guards from local communities with intimate knowledge of the terrain patrol the reserve in rotating shifts.",
					},
					{
						title: "Rapid Response Teams",
						body: "5 mobile units stationed at strategic locations ready to respond to emergencies within 15 minutes.",
					},
				],
			},
			{
				heading: "Technology Deployed",
				items: [
					"Thermal drone surveillance for night monitoring",
					"AI-powered camera traps with real-time alerts",
					"GPS tracking collars for select tigers",
					"M-STrIPES (Monitoring System for Tigers' Intensive Protection and Ecological Status) app",
					"Acoustic sensors to detect gunshots and vehicle movements",
				],
			},
			{
				heading: "Infrastructure",
				items: [
					"78 anti-poaching camps strategically located throughout the reserve",
					"12 watchtowers at key vantage points",
					"4 quick response vehicles equipped with medical supplies",
					"Digital communication network covering 98% of reserve area",
				],
			},
			{
				heading: "Protection Impact",
				metrics: [
					{
						label: "Poaching Decline",
						value: "100% reduction in poaching incidents since 2019",
					},
					{
						label: "Preventive Arrests",
						value: "32 wildlife criminals apprehended in preventive operations",
					},
					{
						label: "Threats Neutralized",
						value:
							"164 potential threats neutralized through pre-emptive action",
					},
				],
			},
		],
	},
	community: {
		id: "community",
		title: "Community Programs",
		intro:
			"Local communities are actively involved in conservation through eco-tourism initiatives, providing sustainable livelihoods and reducing dependency on forest resources.",
		sections: [
			{
				heading: "Eco-Tourism Livelihoods",
				items: [
					"Guide training and employment for residents from surrounding villages",
					"Hospitality and transport opportunities linked to responsible tourism",
					"Craft and cultural experiences that showcase local heritage",
					"Revenue-sharing models that direct benefits back to forest-edge communities",
				],
			},
			{
				heading: "Community Conservation",
				items: [
					"Awareness programs on human-wildlife coexistence",
					"Support for alternative livelihoods to reduce forest dependency",
					"Participation in buffer-zone protection and habitat restoration",
					"School and healthcare initiatives supported through tourism partnerships",
				],
			},
		],
	},
};

export const CONSERVATION_SUCCESS_STORY = {
	title: "A Conservation Success Story",
	paragraphs: [
		"In the 1970s, Ranthambore's tiger population was dwindling due to hunting and habitat loss. Through determined conservation efforts, strict anti-poaching measures, and community involvement, the park has seen a remarkable recovery.",
		"Today, with over 70 tigers roaming its forests, Ranthambore stands as a testament to what dedicated conservation can achieve. The park has not only protected tigers but also restored the entire ecosystem, benefiting all species that call it home.",
	],
	image: "/Home/tiger.jpg",
	imageAlt: "Two tigers walking through Ranthambore grassland",
	achievements: [
		"Tiger population increased from 14 in 1990 to over 70 today",
		"Successful relocation of tigers to repopulate other reserves",
		"Creation of buffer zones to reduce human-wildlife conflict",
		"Development of sustainable eco-tourism model",
	],
} as const;

export interface SustainabilityItem {
	id: string;
	title: string;
	intro: string;
	items: readonly string[];
	highlight?: string;
	icon: LucideIcon;
	iconClassName: string;
}

export const ENVIRONMENTAL_SUSTAINABILITY = {
	title: "Environmental Sustainability",
	subtitle:
		"Our commitment to preserving the natural world goes beyond words—it's embedded in everything we do.",
	intro:
		"A truly sustainable wildlife resort must harmonize with its surroundings while contributing to conservation. Our approach integrates environmental protection, social responsibility, and economic sustainability into every aspect of our operations.",
} as const;

export const SUSTAINABILITY_ITEMS: SustainabilityItem[] = [
	{
		id: "eco-friendly-construction",
		title: "Eco-friendly Construction",
		intro:
			"Our resort utilizes sustainable building materials that minimize environmental impact while creating a luxurious experience:",
		items: [
			"Reclaimed and locally harvested timber from sustainable forests",
			"Natural stone sourced from nearby quarries to reduce transportation emissions",
			"Traditional thatch roofing using native grasses harvested sustainably",
			"Biophilic design principles that blend structures seamlessly with the natural landscape",
			"Elevated walkways and structures to minimize ground disturbance and allow wildlife movement",
		],
		icon: Leaf,
		iconClassName: "bg-charcoal-100 text-charcoal-700",
	},
	{
		id: "renewable-energy",
		title: "Renewable Energy Systems",
		intro: "Our resort operates primarily on clean, renewable energy:",
		items: [
			"Solar array providing 85% of our electricity needs",
			"Smart energy management systems that optimize consumption",
			"Energy-efficient LED lighting throughout all facilities",
			"Natural cooling through strategic building orientation and ventilation",
			"Battery storage systems to ensure 24/7 renewable energy availability",
		],
		highlight: "Our goal: Complete carbon neutrality by 2027",
		icon: Sun,
		iconClassName: "bg-golden-100 text-golden-600",
	},
	{
		id: "water-conservation",
		title: "Water Conservation",
		intro: "Water is precious in our ecosystem, and we treat it with respect:",
		items: [
			"Comprehensive rainwater harvesting systems across the property",
			"Low-flow fixtures reducing water usage by 40% compared to standard hotels",
			"Greywater recycling for landscape irrigation",
			"Natural swimming pools filtered by aquatic plants instead of chemicals",
			"Real-time water usage monitoring and guest education",
		],
		highlight: "We've reduced our water footprint by 65% since 2020",
		icon: Droplets,
		iconClassName: "bg-sand-200 text-tiger-600",
	},
	{
		id: "zero-waste",
		title: "Zero Waste Management",
		intro: "We're committed to eliminating waste at every step:",
		items: [
			"Plastic-free environment with bamboo, glass, and other sustainable alternatives",
			"On-site composting facility converting organic waste to nutrient-rich soil",
			"Comprehensive recycling program that diverts 95% of waste from landfills",
			"Upcycling workshops where guests can transform waste into art",
			"Partnerships with local artisans who create products from reclaimed materials",
		],
		icon: Recycle,
		iconClassName: "bg-tiger-100 text-tiger-600",
	},
	{
		id: "wildlife-protection",
		title: "Wildlife Protection",
		intro: "Our core mission is protecting and enhancing wildlife habitats:",
		items: [
			"Wildlife corridors throughout the property connecting fragmented habitats",
			"Reforestation program that has planted over 10,000 native trees",
			"Dark sky lighting policies to minimize disruption to nocturnal animals",
			"Support for anti-poaching units in the surrounding protected areas",
			"Monitoring programs tracking the health and populations of key species",
		],
		highlight: "10% of all profits directly fund local conservation efforts",
		icon: PawPrint,
		iconClassName: "bg-sunset-100 text-sunset-600",
	},
	{
		id: "social-sustainability",
		title: "Social Sustainability",
		intro: "We believe true sustainability must include social responsibility:",
		items: [
			"85% of our staff come from local communities",
			"Skills development programs providing career advancement opportunities",
			"Support for local schools and healthcare initiatives",
			"Celebration of indigenous culture, crafts, and cuisine",
			"Community-based tourism activities that directly benefit local families",
		],
		icon: Users,
		iconClassName: "bg-earth-100 text-earth-700",
	},
	{
		id: "economic-sustainability",
		title: "Economic Sustainability",
		intro:
			"Our business model ensures long-term prosperity for all stakeholders:",
		items: [
			"Fair-trade policies with all local suppliers",
			"Sustainable pricing that values both guests' experience and resource conservation",
			"Investment in eco-tourism certifications and standards",
			"Transparent reporting on our sustainability performance",
			"Financially sustainable conservation initiatives that will continue for generations",
		],
		icon: CircleDollarSign,
		iconClassName: "bg-earth-100 text-earth-700",
	},
];
