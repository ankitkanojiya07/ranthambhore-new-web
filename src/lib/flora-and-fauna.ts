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
