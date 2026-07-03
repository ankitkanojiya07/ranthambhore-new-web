import type { ContentBlock } from "#/components/pages/ContentSection";

interface Stat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

export interface AboutPageContent {
	eyebrow: string;
	title: string;
	subtitle: string;
	image: string;
	badge?: string;
	stats?: Stat[];
	statsSize?: "default" | "compact";
	intro?: string;
	introTitle?: string;
	sections: ContentBlock[];
	showWhyChoose?: boolean;
	imageOffset?: number;
}

export const ABOUT_PAGES: Record<string, AboutPageContent> = {
	nationalPark: {
		eyebrow: "About Ranthambore",
		title: "Ranthambore - Where History Meets the Wild",
		subtitle:
			"One of India's most celebrated wildlife destinations, where Royal Bengal Tigers, ancient fort walls, sacred lakes, and dry deciduous forests share the same dramatic landscape.",
		image: "/Home/ran1.jpg",
		badge: "Ranthambore National Park",
		stats: [
			{ value: "392", unit: "km2", label: "National Park Area", index: "01" },
			{
				value: "1,300",
				unit: "+ km2",
				label: "Tiger Reserve Landscape",
				index: "02",
			},
			{ value: "1973", unit: "", label: "Project Tiger Reserve", index: "03" },
			{ value: "300", unit: "+", label: "Bird Species", index: "04" },
		],
		introTitle: "A Wild Landscape With a Thousand-Year Story",
		intro:
			"Nestled amid the ancient Aravalli and Vindhya hill ranges in Rajasthan's Sawai Madhopur district, Ranthambore offers a rare blend of untamed wilderness, centuries-old heritage, and memorable safari country.",
		sections: [
			{
				heading: "The Heart of the Tiger Reserve",
				body: [
					"At the centre of this remarkable destination lies Ranthambore National Park, one of India's premier tiger reserves and among the finest places in the world to witness wild tigers in their natural habitat.",
					"The national park covers approximately 392 square kilometres and forms part of the larger Ranthambore Tiger Reserve with the Sawai Man Singh and Kaila Devi Wildlife Sanctuaries, protecting more than 1,300 square kilometres of forests, lakes, valleys, and rugged hills.",
				],
				layout: "split",
				image: "/Home/padam.jpg",
				imageAlt:
					"Padam Talab and forest landscape in Ranthambore National Park",
			},
			{
				heading: "From Game Sanctuary to National Park",
				body: [
					"Originally established as the Sawai Madhopur Game Sanctuary in 1955, Ranthambore became one of the first reserves under Project Tiger in 1973 and was officially declared a national park in 1980.",
					"Today, it stands as a shining example of India's wildlife conservation efforts and attracts nature lovers, photographers, birdwatchers, and wildlife enthusiasts from around the globe.",
				],
				layout: "split",
				image: "/Home/tiger.jpg",
				imageAlt: "Royal Bengal Tiger in Ranthambore forest",
			},
			{
				heading: "Where History and Wildlife Coexist",
				body: [
					"The park is famous for picturesque lakes, dense dry deciduous forests, open grasslands, rocky outcrops, and the iconic 10th-century Ranthambore Fort, a UNESCO World Heritage Site that overlooks the jungle from a hilltop.",
					"Beyond its legendary tigers, Ranthambore is home to leopards, sloth bears, striped hyenas, marsh crocodiles, sambar deer, nilgai, wild boar, jackals, and more than 300 species of birds.",
				],
				layout: "split",
				image: "/Home/fort1.jpg",
				imageAlt: "Ranthambore Fort above the forest",
			},
			{
				heading: "Why Visit Ranthambore?",
				body: "Every safari promises adventure, every trail carries a story, and every visit offers a chance to experience one of India's most memorable wild places.",
				layout: "card",
				items: [
					"One of the best destinations in the world to spot wild Royal Bengal Tigers.",
					"Rich biodiversity, including leopards, sloth bears, crocodiles, and over 300 bird species.",
					"A rare blend of wildlife, history, and nature with the UNESCO-listed Ranthambore Fort.",
					"Exciting jeep and canter safaris across ten unique safari zones.",
					"Easily accessible from Jaipur, Delhi, and Agra for a Rajasthan wildlife getaway.",
				],
			},
		],
		showWhyChoose: false,
	},
	wildlife: {
		eyebrow: "About Ranthambore",
		title: "Wildlife, Flora and Fauna of Ranthambore",
		subtitle:
			"Ancient banyan trees, dominant dhok forests, apex predators, lake reptiles, and more than 300 bird species make Ranthambore a complete wilderness ecosystem.",
		image: "/gallery/6.jpg",
		badge: "Wildlife Guide",
		stats: [
			{ value: "80", unit: "%", label: "Dhok Forest Cover", index: "01" },
			{ value: "40", unit: "+", label: "Mammal Species", index: "02" },
			{ value: "300", unit: "+", label: "Bird Species", index: "03" },
			{ value: "4", unit: "", label: "Major Habitat Types", index: "04" },
		],
		introTitle: "Life in Every Layer",
		intro:
			"Ranthambore's dry deciduous forest supports everything from medicinal plants and seasonal flowering trees to tigers, leopards, sloth bears, crocodiles, pythons, and colourful birdlife.",
		sections: [
			{
				heading: "Flora Highlights",
				body: "The park's vegetation is shaped by Rajasthan's dry climate, rocky terrain, and seasonal water sources.",
				layout: "card",
				items: [
					"Ancient banyan trees, some among India's oldest.",
					"Dhok forest (Anogeissus pendula), covering over 80% of the park.",
					"Medicinal plants with traditional Ayurvedic importance.",
					"Seasonal flowering species that create vibrant spring landscapes.",
				],
			},
			{
				heading: "Banyan Tree",
				eyebrow: "Ficus benghalensis",
				body: "One of India's second-largest banyan trees can be found in Ranthambore. These magnificent trees provide shelter to numerous bird species and often become gathering points for wildlife.",
				layout: "card-text",
			},
			{
				heading: "Dhok Tree",
				eyebrow: "Anogeissus pendula",
				body: "Covering more than 80% of the forest, dhok is the dominant tree of Ranthambore. Its leaves are a key food source for herbivores, and the species is well adapted to the region's arid conditions.",
				layout: "card-text",
			},
			{
				heading: "Indian Ghost Tree",
				eyebrow: "Sterculia urens",
				body: "Known locally as Kullu, this tree has a pale, ghostly appearance. It sheds bark each year to reveal a smooth white surface that appears to glow under moonlight.",
				layout: "card-text",
			},
			{
				heading: "Flame of the Forest",
				eyebrow: "Butea monosperma",
				body: "This deciduous tree produces vibrant orange-red flowers during spring, creating a striking contrast against the dry landscape and attracting pollinators.",
				layout: "card-text",
			},
			{
				heading: "Fauna Diversity",
				body: "Ranthambore is best known for tigers, but its wildlife richness extends across mammals, reptiles, birds, and insect life that sustain the whole ecosystem.",
				layout: "card",
				items: [
					"40+ mammal species including tigers, leopards, and sloth bears.",
					"300+ bird species, both resident and migratory.",
					"Diverse reptiles including marsh crocodiles and pythons.",
					"Rich insect life supporting the forest's food web.",
				],
			},
			{
				heading: "Royal Bengal Tiger",
				eyebrow: "Panthera tigris tigris",
				body: "The apex predator of Ranthambore, each tiger can be identified by a unique stripe pattern. These majestic cats are often spotted near water bodies.",
				layout: "card-text",
			},
			{
				heading: "Indian Leopard",
				eyebrow: "Panthera pardus fusca",
				body: "Masters of stealth, leopards are often seen around rocky terrain and the Kachida Valley. They are adaptable hunters and frequently rest on tree branches during hot days.",
				layout: "card-text",
			},
			{
				heading: "Sloth Bear",
				eyebrow: "Melursus ursinus",
				body: "These shaggy-coated bears specialise in feeding on termites and ants. Powerful claws help them tear open termite mounds before sucking up insects with their elongated snout.",
				layout: "card-text",
			},
			{
				heading: "Sambar Deer",
				eyebrow: "Rusa unicolor",
				body: "The largest deer species in the Indian subcontinent, sambar is an important prey species for tigers and a reliable alarm caller when predators are nearby.",
				layout: "card-text",
			},
			{
				heading: "Marsh Crocodile",
				eyebrow: "Crocodylus palustris",
				body: "Also known as mugger crocodiles, these reptiles are often seen basking along Ranthambore's lakes and can grow up to 4-5 metres in length.",
				layout: "card-text",
			},
			{
				heading: "Indian Python",
				eyebrow: "Python molurus",
				body: "These non-venomous constrictors can reach up to six metres and rely on camouflage to ambush prey in forest and lakeside habitats.",
				layout: "card-text",
			},
			{
				heading: "Birdlife and Smaller Species",
				body: "Painted storks gather around the lakes, kingfishers add flashes of colour, vultures serve as nature's cleanup crew, and jackals, civets, caracals, striped hyenas, and honey badgers complete the wider wildlife story.",
				layout: "split",
				image: "/Home/bird.jpg",
				imageAlt: "Birdlife around Ranthambore's wetlands",
			},
		],
		showWhyChoose: false,
	},
	tigers: {
		eyebrow: "About Ranthambore",
		title: "Tigers of Ranthambore",
		subtitle:
			"Meet the Royal Bengal Tigers that made Ranthambore famous, from legendary Machli to younger territory holders shaping the park's future.",
		image: "/hero/1.webp",
		badge: "Royal Bengal Tigers",
		stats: [
			{ value: "70", unit: "+", label: "Tigers in the Landscape", index: "01" },
			{ value: "T-16", unit: "", label: "Machli's Code", index: "02" },
			{ value: "10", unit: "", label: "Safari Zones", index: "03" },
			{ value: "1", unit: "", label: "Unique Stripe Pattern", index: "04" },
		],
		introTitle: "The Apex Predator of the Lake Country",
		intro:
			"The Royal Bengal Tiger is the star of Ranthambore. Each individual can be recognised by a unique stripe pattern, and many have become known to guides, photographers, and repeat visitors by name and territory.",
		sections: [
			{
				heading: "Machli (T-16)",
				eyebrow: "The Queen Mother of Ranthambore",
				body: "Machli was one of the most famous tigresses in the world, known for her fishing abilities, territorial strength, and extraordinary visibility around the lakes.",
				layout: "split",
				image: "/Home/machli.jpg",
				imageAlt: "Machli, the legendary tigress of Ranthambore",
			},
			{
				heading: "Arrowhead (T-84)",
				eyebrow: "The Territorial Warrior",
				body: "Arrowhead is known for her distinctive arrowhead marking and fierce territorial behaviour, making her one of Ranthambore's most recognisable tigresses.",
				layout: "card-text",
				dark: true,
			},
			{
				heading: "Krishna (T-19)",
				eyebrow: "The Gentle Giant",
				body: "Krishna is remembered for a calm demeanour and strong parenting instincts, becoming part of Ranthambore's modern tiger legacy.",
				layout: "card-text",
				dark: true,
			},
			{
				heading: "Sultan (T-72)",
				eyebrow: "The Lake Master",
				body: "Sultan controlled prime territory around the lakes and was known for his impressive hunting skills and command of water-rich habitat.",
				layout: "card-text",
				dark: true,
			},
			{
				heading: "Noor (T-39)",
				eyebrow: "The Fierce Protector",
				body: "Noor is known as a protective mother tigress, fiercely defending her cubs and territory within the Ranthambore landscape.",
				layout: "card-text",
				dark: true,
			},
			{
				heading: "Riddhi (T-124)",
				eyebrow: "The Rising Star",
				body: "Riddhi represents the younger generation of Ranthambore tigers, showing promise through territorial expansion and strong visibility.",
				layout: "card-text",
				dark: true,
			},
			{
				heading: "Fateh (T-123)",
				eyebrow: "The Bold Explorer",
				body: "Fateh is known for exploring new territories and adapting to shifting habitat conditions across the reserve.",
				layout: "card-text",
				dark: true,
			},
			{
				heading: "How to Identify a Tiger",
				body: "No two tigers share the same stripe pattern. During safari, guides often identify individuals by facial stripes, flank markings, body shape, behaviour, and the territory where the tiger is seen.",
				layout: "split",
				image: "/gallery/14.jpg",
				imageAlt: "Royal Bengal Tiger walking through grassland",
			},
		],
		showWhyChoose: false,
	},
	conservation: {
		eyebrow: "About Ranthambore",
		title: "Conservation at Ranthambore",
		subtitle:
			"From Project Tiger to anti-poaching teams, local communities, and sustainable tourism, Ranthambore's recovery is one of India's important conservation success stories.",
		image: "/Home/poach.png",
		badge: "Conservation Story",
		stats: [
			{ value: "1973", unit: "", label: "Project Tiger Launch", index: "01" },
			{ value: "14", unit: "", label: "Early Tiger Population", index: "02" },
			{
				value: "70",
				unit: "+",
				label: "Current Tiger Population",
				index: "03",
			},
			{ value: "1,334", unit: "km2", label: "Protected Habitat", index: "04" },
		],
		introTitle: "A Recovery Built on Protection and People",
		intro:
			"Ranthambore's success story is a testament to dedicated conservation efforts and community involvement. From near extinction to a thriving tiger population, the journey has been remarkable.",
		sections: [
			{
				heading: "Project Tiger",
				body: [
					"Launched in 1973, Project Tiger has been instrumental in bringing tigers back from the brink of extinction. Ranthambore is one of the landmark success stories of this initiative.",
					"Project Tiger began with nine tiger reserves covering 16,339 square kilometres and has expanded to more than 50 reserves covering over 75,000 square kilometres.",
				],
				layout: "split",
				image: "/tiger-footstep.png",
				imageAlt: "Tiger footprint symbolising Project Tiger",
				imageWrapperClassName:
					"mx-auto w-full max-w-[220px] overflow-visible rounded-none ring-0 sm:max-w-[260px]",
				imageClassName: "aspect-auto w-full object-contain opacity-80",
			},
			{
				heading: "Historical Timeline",
				body: "Key milestones in Ranthambore's conservation journey.",
				layout: "card",
				items: [
					"1973: Project Tiger launched with nine reserves including Ranthambore.",
					"1985: Tiger population in Ranthambore reached 25, up from just 14.",
					"1993: Project expanded to include more protected areas.",
					"2006: Project Tiger restructured as the National Tiger Conservation Authority.",
					"2018: Tiger census showed Ranthambore with over 70 tigers.",
					"2022: Advanced monitoring technologies were implemented.",
				],
			},
			{
				heading: "Key Initiatives",
				body: "Conservation in Ranthambore depends on habitat protection, science-led monitoring, anti-poaching patrols, and careful management of people-wildlife boundaries.",
				layout: "card",
				items: [
					"Core breeding habitats identified and declared as critical tiger habitats.",
					"Buffer zones created to reduce human-wildlife conflict.",
					"Scientific monitoring using camera traps and satellite tracking.",
					"Anti-poaching squads trained with specialised equipment.",
					"Village relocation from core areas with compensation.",
				],
			},
			{
				heading: "Anti-Poaching and Protection Measures",
				body: [
					"Dedicated anti-poaching teams patrol the park regularly, and technological tools such as drone surveillance, AI-assisted camera traps, GPS collars, and the M-STrIPES monitoring app have strengthened protection.",
					"Ranthambore combines field patrols, watchtowers, quick response vehicles, digital communication networks, and local knowledge to protect wildlife across the reserve.",
				],
				layout: "split",
				image: "/Home/poach.png",
				imageAlt: "Anti-poaching conservation symbol",
			},
			{
				heading: "Community Engagement",
				body: "Local communities are actively involved in conservation through eco-tourism initiatives, sustainable livelihoods, guide work, hospitality, cultural experiences, and reduced dependency on forest resources.",
				layout: "card-text",
			},
			{
				heading: "A Conservation Success Story",
				body: "In the 1970s, Ranthambore's tiger population was dwindling due to hunting and habitat loss. Through strict protection, anti-poaching measures, and community involvement, the park has recovered to support more than 70 tigers and a healthier ecosystem.",
				layout: "card-text",
			},
			{
				heading: "Environmental Sustainability",
				body: "A truly sustainable wildlife resort must harmonise with its surroundings while contributing to conservation through environmental protection, social responsibility, and economic sustainability.",
				layout: "card",
				items: [
					"Eco-friendly construction using local stone, reclaimed timber, native thatch, and low-impact design.",
					"Renewable energy systems including solar power, smart energy management, and efficient lighting.",
					"Water conservation through rainwater harvesting, low-flow fixtures, greywater reuse, and monitoring.",
					"Zero waste practices with plastic-free alternatives, composting, recycling, and upcycling.",
					"Wildlife protection through corridors, reforestation, dark-sky lighting, and anti-poaching support.",
					"Social and economic sustainability through local hiring, fair-trade suppliers, skills development, and community tourism.",
				],
			},
		],
		showWhyChoose: false,
	},
	heritage: {
		eyebrow: "About Ranthambore",
		title: "Heritage, Fort, Temples and Museums",
		subtitle:
			"Ranthambore is a living museum where the 10th-century fort, ancient temples, royal hunting pavilions, and modern conservation history rise from the wild landscape.",
		image: "/Home/fort1.jpg",
		badge: "Fort, Temples and Museums",
		stats: [
			{ value: "1973", unit: "", label: "Project Tiger Reserve", index: "01" },
			{ value: "1,334", unit: "km2", label: "Tiger Reserve Area", index: "02" },
			{ value: "215", unit: "-505 m", label: "Elevation", index: "03" },
			{ value: "70", unit: "+", label: "Tiger Population", index: "04" },
		],
		introTitle: "A Living Museum in Tiger Country",
		intro:
			"Ranthambore is not just about its tigers. It is a place where centuries-old temples, hunting pavilions, and majestic forts blend with untamed wilderness and a remarkable conservation story.",
		sections: [
			{
				heading: "The Sentinel Above the Forest",
				body: [
					"The Ranthambore Fort, a UNESCO World Heritage Site, has stood as a sentinel of power since the 10th century. It overlooks the entire park and remains a proud reminder of Rajasthan's valor and resilience.",
					"Within its walls are temples dedicated to Ganesh, Shiva, and Ramlalaji, each carrying its own devotional and historical significance.",
				],
				layout: "split",
				image: "/Home/fort.jpg",
				imageAlt: "Ranthambore Fort walls overlooking the forest",
			},
			{
				heading: "Ancient Glory",
				eyebrow: "A Fortress With Stories",
				body: "Built by the Chauhan dynasty, the fort has witnessed sieges, battles, and shifting empires. Its strategic position atop a 700-foot hill gave it military advantage, while its stone ramparts, gateways, and temple architecture preserve the artistic brilliance of medieval India.",
				layout: "card-text",
			},
			{
				heading: "Royal Legacy",
				eyebrow: "From Hunting Grounds to Sanctuary",
				body: "Before becoming a wildlife sanctuary, Ranthambore served as the private hunting grounds of the Maharajas of Jaipur. Jogi Mahal and other hunting pavilions still offer glimpses of royal leisure in a landscape now protected for wildlife.",
				layout: "card-text",
			},
			{
				heading: "Modern Conservation",
				eyebrow: "Preserving Natural Heritage",
				body: "Ranthambore evolved from near ecological disaster to conservation success. It was among the first nine tiger reserves under Project Tiger in 1973, and today supports more than 70 tigers through protection, monitoring, anti-poaching work, and community participation.",
				layout: "card-text",
			},
			{
				heading: "Temples, Museums and Cultural Sites",
				body: "The heritage experience extends beyond the fort. Visitors can explore sacred temples, the Trinetra Ganesh shrine, natural history exhibits, and local cultural landmarks around Sawai Madhopur that deepen the story of Ranthambore.",
				layout: "split",
				image: "/Home/ganesh.webp",
				imageAlt: "Ganesh temple heritage near Ranthambore",
			},
		],
		showWhyChoose: false,
	},
};
