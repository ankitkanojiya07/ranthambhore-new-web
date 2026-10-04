export interface SpeciesCard {
	name: string;
	scientificName: string;
	description: string;
	image: string;
	imageAlt: string;
}

export const FLORA_HIGHLIGHTS = [
	"Ancient banyan trees, some among India's oldest.",
	"Dhok forest (Anogeissus pendula), covering over 80% of the park.",
	"Medicinal plants with traditional Ayurvedic importance.",
	"Seasonal flowering species that create vibrant spring landscapes.",
] as const;

export const FAUNA_HIGHLIGHTS = [
	"40+ mammal species including tigers, leopards, and sloth bears.",
	"300+ bird species, both resident and migratory.",
	"Diverse reptiles including marsh crocodiles and pythons.",
	"Rich insect life supporting the forest's food web.",
] as const;

export const WILDLIFE_GALLERY = [
	{
		src: "/flora/16.webp",
		alt: "Colourful birdlife in Ranthambore National Park",
	},
] as const;

export const FLORA_SPECIES: SpeciesCard[] = [
	{
		name: "Banyan Tree",
		scientificName: "Ficus benghalensis",
		description:
			"One of India's second-largest banyan trees can be found in Ranthambore. These magnificent trees provide shelter to numerous bird species and often become gathering points for wildlife.",
		image: "/flora/8.webp",
		imageAlt: "Ancient banyan tree in Ranthambore forest",
	},
	{
		name: "Dhok Tree",
		scientificName: "Anogeissus pendula",
		description:
			"Covering more than 80% of the forest, dhok is the dominant tree of Ranthambore. Its leaves are a key food source for herbivores, and the species is well adapted to the region's arid conditions.",
		image: "/flora/9.webp",
		imageAlt: "Dhok forest landscape in Ranthambore",
	},
	{
		name: "Indian Ghost Tree",
		scientificName: "Sterculia urens",
		description:
			"Known locally as Kullu, this tree has a pale, ghostly appearance. It sheds bark each year to reveal a smooth white surface that appears to glow under moonlight.",
		image: "/flora/10.webp",
		imageAlt: "Pale-barked tree in Ranthambore woodland",
	},
	{
		name: "Flame of the Forest",
		scientificName: "Butea monosperma",
		description:
			"This deciduous tree produces vibrant orange-red flowers during spring, creating a striking contrast against the dry landscape and attracting pollinators.",
		image: "/flora/11.webp",
		imageAlt: "Flowering tree in Ranthambore spring landscape",
	},
];

export const WILDLIFE_PAGE_CONTENT = {
	title: "Wildlife, Flora & Fauna of Ranthambore",
	intro:
		"Ranthambore is more than a tiger park. Dry deciduous dhok forest, lakes, and rocky valleys support leopards, sloth bears, deer, crocodiles, and more than 300 bird species. Use this guide as a species checklist and ecology primer before you safari — then explore individual tiger profiles and zone landscapes for deeper reading.",
	lastReviewed: "2026-10-04",
} as const;

export const ANIMAL_CHECKLIST = {
	title: "Ranthambore animals checklist",
	intro:
		"A practical field checklist of species visitors commonly hope to see. Presence does not mean a guarantee on any single drive.",
	groups: [
		{
			label: "Big cats & carnivores",
			items: [
				"Royal Bengal Tiger",
				"Leopard",
				"Striped hyena",
				"Jackal",
				"Jungle cat / caracal (rare)",
			],
		},
		{
			label: "Herbivores",
			items: [
				"Chital (spotted deer)",
				"Sambar",
				"Nilgai",
				"Chinkara",
				"Wild boar",
			],
		},
		{
			label: "Other mammals",
			items: ["Sloth bear", "Langur", "Common mongoose", "Palm civet"],
		},
		{
			label: "Reptiles & wetlands",
			items: [
				"Marsh crocodile (mugger)",
				"Monitor lizard",
				"Python (occasional)",
			],
		},
		{
			label: "Birdlife highlights",
			items: [
				"Painted stork",
				"Kingfishers",
				"Crested serpent eagle",
				"Indian peafowl",
				"Vultures (where still present)",
				"300+ species recorded across seasons",
			],
		},
	],
} as const;

export const WILDLIFE_FAQS = [
	{
		question: "What animals can I see in Ranthambore besides tigers?",
		answer:
			"Leopards, sloth bears, sambar, chital, nilgai, wild boar, marsh crocodiles, langurs, and a rich bird community are all part of the park. Many visitors remember alarm calls and lake birds as much as big-cat sightings.",
	},
	{
		question: "Are there leopards in Ranthambore?",
		answer:
			"Yes. Leopards use rocky outcrops, denser cover, and quieter trails. They are more elusive than tigers and often seen at dawn, dusk, or in buffer-zone country.",
	},
	{
		question: "What is the dominant forest type?",
		answer:
			"Dhok (Anogeissus pendula) dominates much of the dry deciduous forest, shaping shade, browse, and the open visibility that makes Ranthambore distinctive among Indian tiger reserves.",
	},
] as const;

export const WILDLIFE_RELATED_GUIDES = [
	{
		title: "Tigers of Ranthambore",
		href: "/about/tigers",
		description: "Famous individuals, naming codes, and Machali's legacy.",
	},
	{
		title: "Safari Zones",
		href: "/safari/zones",
		description: "Which landscapes favour lakes, ridges, or quieter trails.",
	},
	{
		title: "National Park guide",
		href: "/about/national-park",
		description: "Geography, season, and reserve context.",
	},
	{
		title: "Conservation",
		href: "/about/conservation",
		description: "How protection work supports this wildlife community.",
	},
] as const;

export const FAUNA_SPECIES: SpeciesCard[] = [
	{
		name: "Royal Bengal Tiger",
		scientificName: "Panthera tigris tigris",
		description:
			"The apex predator of Ranthambore, each tiger can be identified by a unique stripe pattern. These majestic cats are often spotted near water bodies.",
		image: "/Home/11.jpg",
		imageAlt: "Royal Bengal Tiger in Ranthambore National Park",
	},
	{
		name: "Leopard",
		scientificName: "Panthera pardus",
		description:
			"Elusive and adaptable, leopards favour rocky outcrops and denser cover. Sightings are less frequent than tigers but remain one of Ranthambore's great rewards.",
		image: "/Home/leo.jpg",
		imageAlt: "Leopard on rocky terrain in Ranthambore",
	},
	{
		name: "Sloth Bear",
		scientificName: "Melursus ursinus",
		description:
			"These shaggy-coated bears specialise in feeding on termites and ants. Powerful claws help them tear open termite mounds before sucking up insects with their elongated snout.",
		image: "/Home/bear.jpg",
		imageAlt: "Sloth bear foraging in Ranthambore forest",
	},
	{
		name: "Sambar Deer",
		scientificName: "Rusa unicolor",
		description:
			"The largest deer species in the Indian subcontinent, sambar is an important prey species for tigers and a reliable alarm caller when predators are nearby.",
		image: "/Home/sambhar.jpg",
		imageAlt: "Sambar deer in Ranthambore woodland",
	},
	{
		name: "Marsh Crocodile",
		scientificName: "Crocodylus palustris",
		description:
			"Also known as mugger crocodiles, these reptiles are often seen basking along Ranthambore's lakes and can grow up to 4–5 metres in length.",
		image: "/Home/croc.jpg",
		imageAlt: "Marsh crocodile basking at a Ranthambore lake",
	},
	{
		name: "Chinkara",
		scientificName: "Gazella bennettii",
		description:
			"Indian gazelle — shy and rare, adapted to the park's open savannah buffer zones.",
		image: "/Home/chinkara.jpg",
		imageAlt: "Chinkara gazelle in Ranthambore buffer zone",
	},
	{
		name: "Wild Boar",
		scientificName: "Sus scrofa",
		description:
			"Frequently spotted near lakes — robust populations rooting through undergrowth year-round.",
		image: "/Home/wild.jpg",
		imageAlt: "Wild boar near a Ranthambore lake",
	},
	{
		name: "Caracals & Striped Hyenas",
		scientificName: "Caracal caracal & Hyaena hyaena",
		description:
			"Caracals are identified by their distinctive ear tufts, while striped hyenas are nocturnal scavengers with remarkable jaws strong enough to crush bones.",
		image: "/flora/17.webp",
		imageAlt: "Carnivore species in Ranthambore rocky terrain",
	},
	{
		name: "Jackals & Indian Civets",
		scientificName: "Canis aureus & Viverra zibetha",
		description:
			"Golden jackals are opportunistic omnivores, while the palm civet is a nocturnal mammal with a distinctive mask-like facial pattern.",
		image: "/flora/19.jpeg",
		imageAlt: "Small mammals in Ranthambore forest",
	},
	{
		name: "Honey Badgers",
		scientificName: "Mellivora capensis",
		description:
			"Known for their fearless nature, honey badgers have thick skin that's nearly impervious to animal bites and stings. They're among the most resilient creatures in the park.",
		image: "/flora/18.jpeg",
		imageAlt: "Honey badger habitat in Ranthambore woodland",
	},
	{
		name: "Painted Storks",
		scientificName: "Mycteria leucocephala",
		description:
			"These colorful wading birds gather at Ranthambore's lakes, where they can be seen performing elaborate courtship displays during breeding season.",
		image: "/flora/5.webp",
		imageAlt: "Painted storks and wading birds at a Ranthambore lake",
	},
	{
		name: "Kingfishers & Vultures",
		scientificName: "Alcedo atthis & Gyps bengalensis",
		description:
			"Several kingfisher species add vibrant flashes of color to the park, while vultures play a crucial ecological role as nature's cleanup crew.",
		image: "/flora/6.webp",
		imageAlt: "Birdlife around Ranthambore's wetlands",
	},
];
