import {
	Binoculars,
	Building2,
	Castle,
	Church,
	FerrisWheel,
	Library,
	type LucideIcon,
	Mountain,
	Palette,
	Ship,
	Shirt,
	ShoppingBag,
	Waves,
} from "lucide-react";

export type AttractionImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type Attraction = {
	id: string;
	title: string;
	shortDescription: string;
	body: string | string[];
	icon: LucideIcon;
	image: AttractionImage;
	location?: string;
	timings?: string;
	entryFees?: string;
	travelTip?: string;
	bestTime?: string;
};

export const ATTRACTIONS: Attraction[] = [
	{
		id: "ranthambore-fort",
		title: "Ranthambore Fort",
		shortDescription:
			"10th-century Chauhan fort, UNESCO World Heritage Site, panoramic views over the jungle.",
		body: [
			"Rajasthan is one of the most historically significant places in India, and there are several forts, such as the Ranthambore Fort, that bear testimony to their glorious rule. In fact, Ranthambore Fort is one of the oldest, most magnificent and most representative forts made by the Rajputs in all of Rajasthan. Built during the 12th century by the royal Chauhan family, this fort is also a World Heritage Site, as declared by UNESCO.",
			"The Ranthambore Fort stands on the skyline of the Ranthambore National Park, looking over the settlements and surrounding landscape underneath and offering some of the most breathtaking views from its ramparts. You can also see the dense foliage and grasslands of the Ranthambore National Park from the fort, which is another reason tourists flock to the fort from all parts of the country.",
			"The Ranthambore Fort is also a marvelous specimen of Rajput architecture. The fort is surrounded with large stone walls, stone steps, pillars and large domes which make the fort appear majestic. Due to the proximity of the National Park and wildlife reserve, you might also find birds, monkeys and even peacocks in the fort complex. Ranthambore Fort is the perfect place to go sightseeing, trekking, hiking or nature-walking when you are in Rajasthan.",
		],
		icon: Castle,
		image: {
			src: "/Home/fort.jpg",
			alt: "Ranthambore Fort overlooking the national park",
			width: 2048,
			height: 1365,
		},
		location: "Sawai Madhopur, Rajasthan 322001",
		timings: "6 am – 6 pm",
		entryFees: "₹15 per adult / ₹10 per child",
	},
	{
		id: "trinetra-ganesh-temple",
		title: "Trinetra Ganesh Temple",
		shortDescription:
			"Only temple where Lord Ganesha is seen with his complete family; inside the Fort, built in 1300 AD.",
		body: [
			"The Trinetra Ganesh Temple is one of the oldest temples in India, built with red Karauli stone. It is situated inside the premises of the Ranthambore Fort, which is one of the most famous tourist attractions in all of Rajasthan. This temple is a one-of-a-kind temple, where Lord Ganesha is represented with all the members of his family.",
			"In Hindu mythology, Lord Ganesha is considered to be the powerful God of wealth, fortune, wisdom and education. Therefore, all year round, this temple receives thousands of marriage invitations and wish-fulfilment letters addressed to Lord Ganesh, addressed with the faith that the Lord will fulfil the wishes of His devotees.",
			"Devotees from all over the world visit this temple throughout the year and even construct little images of houses near the temple premises, which in itself is an attractive feature about the place. Here, Ganesha is worshipped five times daily in the form of different aartis — Prabhat Aarti in the morning, Sringar Aarti at 9:00 am, Bhog at noon, Sandhya Aarti at sunset (6:00 pm summer / 5:45 pm winter), and Shayan Aarti at 8:00 pm. Even if you are not religious, the aartis are a spectacle to behold.",
		],
		icon: Church,
		image: {
			src: "/Home/ganesh.webp",
			alt: "Trinetra Ganesh Temple inside Ranthambore Fort",
			width: 2048,
			height: 1365,
		},
		location: "Ranthambore Fort, Rajasthan 322001",
		timings: "Open 24 hours",
	},
	{
		id: "jogi-mahal",
		title: "Jogi Mahal",
		shortDescription:
			"Historic royal hunting lodge beside Padam Talao; second-largest banyan tree in India nearby.",
		body: [
			"Jogi Mahal is referred to as one of the places in Rajasthan where tigers used to rule. This is because of its close proximity to the hub of tigers — Ranthambore National Park. The Mahal is located at a distance of 500 meters from the Ranthambore Fort. It is considered as one of the oldest heritage buildings in the expanse of Ranthambore. The Mahal made its way as a hunting resort for the royal families.",
			"Despite being a hunting abode in the middle of the forests, it had still been designed with the classic Indian style of architecture. The Mahal gets intricate design elements and architecture that will surely amaze visitors. It is adorned by a picturesque surrounding of the second largest banyan tree in India and a pristine lake.",
			"At present, tourists choose to spend some time in this Mahal to take a rest in the middle of their Ranthambore tour. The availability of food and water at this place makes it more favorable for tourists. The Mahal serves as a testimony to the amazing age-old traditions of the royal family of Rajasthan as it stands as a reflection of Rajasthani architecture and intricate designs.",
		],
		icon: Building2,
		image: {
			src: "/Home/jo.webp",
			alt: "Jogi Mahal hunting lodge beside Padam Talao",
			width: 2048,
			height: 1365,
		},
		location: "Ranthambore Fort, Rajasthan 322001",
		timings: "Open 24 hours",
	},
	{
		id: "ranthambore-school-of-art",
		title: "The Ranthambore School of Art Society",
		shortDescription:
			"Village artists preserving biodiversity through watercolor, charcoal, and silk paintings.",
		body: "The school has artists from the adjacent villages. The students from the school visit the National Park to spread their thoughts of preserving natural biodiversity. The school has watercolor paintings, charcoal, poster color painting on silk, and black and white sketches as well. The paintings are placed on famous exhibitions through which amazing thoughts are being transferred to the public.",
		icon: Palette,
		image: {
			src: "/Home/images.jpeg",
			alt: "Artwork at the Ranthambore School of Art Society",
			width: 2048,
			height: 1365,
		},
		location: "MDR111, Subhash Nagar, Saptar, Sawai Madhopur",
		timings: "7:00 AM – 6:00 PM",
	},
	{
		id: "dastkar-ranthambhore",
		title: "Dastkar Ranthambhore",
		shortDescription:
			"Handmade bags and totes with wild animal and forest patterns — a self-help group since 1989.",
		body: "Different types of bags of different size and colour come to the market and they attract the young ladies visiting Ranthambore National Parks. These bags are really user-friendly due to their appealing size and alluring patterns. The particular self-help group was established in the year of 1989 and still continues to make a number of multi types of bags and totes. Since they are hand-made, they get more demand from local as well as tourists. You will get the opportunity to select from the wide range of designs — especially of wild animals, birds and forest creatures.",
		icon: ShoppingBag,
		image: {
			src: "/Home/dastart.jpg",
			alt: "Handmade bags at Dastkar Ranthambhore",
			width: 2048,
			height: 1365,
		},
		location: "Dastkari Kendra, Village Kuthalpura Maliyan, Sherpur Khilchipur",
		timings: "9 am – 7 pm",
	},
	{
		id: "padam-talao",
		title: "Padam Talao",
		shortDescription:
			"Largest lake in the park, covered in water lilies, prime tiger and crocodile sighting location.",
		body: [
			"Along with it, the relishing sights of umpteen numbers of birds coming to the lake will attract everyone's eyes and heart. In the early morning and evening, you can also see the wild animals coming to drink water from the lake.",
			"The National Park's whole beauty is enhanced by the presence of this picturesque lake filled with lilies at times. The rare sights of Chinkara are possible at the very edge of this particular lake.",
		],
		icon: Waves,
		image: {
			src: "/Home/padam.jpg",
			alt: "Padam Talao lake with water lilies in Ranthambore",
			width: 2048,
			height: 1365,
		},
		location: "Ranthambhore Fort, Rajasthan",
		timings: "Open 24 hours",
	},
	{
		id: "kachida-valley",
		title: "Kachida Valley",
		shortDescription:
			"Valley known for sunrise views, leopard sightings, and sloth bears at the park's edge.",
		body: "Panther is the major animal species found here since they avoid getting into the deep jungles not to make contacts with the tigers which will end up in tigers eating the panthers. Here you can see a great population of bears as well. Also, the valley is a haven for unseen flora and fauna due to the presence of its perfect climate. On top of that, the lakes nearby are an addition to the whole beauty of the place.",
		icon: Mountain,
		image: {
			src: "/Home/kachida.jpg",
			alt: "Kachida Valley rocky terrain in Ranthambore",
			width: 2048,
			height: 1365,
		},
		location: "Inside Ranthambore National Park",
	},
	{
		id: "surwal-lake",
		title: "Surwal Lake",
		shortDescription:
			"Splendid sunrise and sunset views; best visited during monsoon or winter when water levels are high.",
		body: "The view of the lake, especially at sunrise and sunset is splendid, however, this lake isn't perennial and dries out in summer, so make sure you head here especially during the monsoon or in winter.",
		icon: Waves,
		image: {
			src: "/Home/surwal-lake.jpg",
			alt: "Surwal Lake at sunrise near Ranthambore",
			width: 2048,
			height: 1365,
		},
		location: "Near Durga Mata Temple, Atoon Kalan, Rajasthan 322027",
		timings: "24 hours (preferably after dawn and before dusk)",
		bestTime: "Monsoon or winter",
	},
	{
		id: "raj-bagh-talao",
		title: "Raj Bagh Talao",
		shortDescription:
			"Famous lake for tiger sightings; sambhar deer and rare birds visit at dawn and dusk.",
		body: "The sambhar deer is a regular visitor who eats the grass present on the floor of the lake. Rare types of birds, animals, and species come around the vicinity of the lake in the morning and evening when the weather seems to be cooler. It is a tiger spotting area as well along with other rare animals in the park since the area has a wide range of forest area and water resources.",
		icon: Waves,
		image: {
			src: "/Home/raj.webp",
			alt: "Raj Bagh Talao lake in Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
		location: "Ranthambore National Park",
	},
	{
		id: "malik-talao",
		title: "Malik Talao",
		shortDescription:
			"Smallest of the three lakes, rich in marsh crocodiles, kingfishers, and wading birds.",
		body: "Whenever you visit Ranthambore National Park, never forget to visit this particular lake which opens to the visitors at two different timings either in the morning or in the evening. You might get to see some variety types of birds as well that come to catch their food from the lake. The view of the surroundings will nourish your eyes undoubtedly and it will be obviously a picturesque nature everywhere. Also if luck favors, you will spot the wild animals coming to drink water from the lake at times.",
		icon: Waves,
		image: {
			src: "/Home/malik-talao.jpg",
			alt: "Malik Talao with wading birds and crocodiles",
			width: 2048,
			height: 1365,
		},
		location: "Inside Ranthambore National Park",
	},
	{
		id: "village-women-craft",
		title: "Village Women Craft",
		shortDescription:
			"Handmade carpets, tribal rugs, wildlife paintings, and shawls — a social initiative supporting rural women.",
		body: "Apart from witnessing the varied wildlife in the park, one has the opportunity to explore the culture and tradition of Rajasthan as well. At Village Women Craft, which is situated at Gas Plant Road in Sawai Madhopur, one can find a variety of handmade carpets, woolen carpets, tribal rugs, wildlife paintings, shawls, bed covers and much more! Village Women Craft is a social initiative that supports rural women in Rajasthan to become independent and economically stable. It is an incredible place to shop in Rajasthan and definitely a perfect memento of Ranthambore National Park.",
		icon: Shirt,
		image: {
			src: "/Home/kkk.jpeg",
			alt: "Handmade crafts at Village Women Craft Ranthambore",
			width: 2048,
			height: 1365,
		},
		location: "Gas Plant Road, Sawai Madhopur",
	},
	{
		id: "rajiv-gandhi-museum",
		title: "Rajiv Gandhi Regional Museum",
		shortDescription:
			"Natural history museum in Ramsinghpura village — wildlife, biodiversity, and Rajasthan heritage.",
		body: "The foundation stone-laying ceremony of Rajiv Gandhi Regional Museum of Natural History was carried out by the Vice President of India, Mohammad Hamid Ansari, on 23 December 2007, and inaugurated by the State Finance Minister, Namo Narain Meena, on 1 March 2014. It was undertaken by the Ministry of Environment, Forests & Climate Change. The museum is spread over an area of 7.2 acres near Ramsinghpura, Ranthambore National Park, Sawai Madhopur and the headquarters of the Consultant is the National Museum of Natural History, New Delhi. This is the fourth such museum in the country after Mysore, Bhopal and Bhubaneswar.",
		icon: Library,
		image: {
			src: "/Home/rajeev.webp",
			alt: "Rajiv Gandhi Regional Museum of Natural History",
			width: 2048,
			height: 1365,
		},
		location: "Ramsinghpura, Ranthambore National Park, Sawai Madhopur",
	},
	{
		id: "chambal-gharial-safari",
		title: "Chambal Gharial Safari",
		shortDescription:
			"Boat safari on the National Chambal Sanctuary — crocodiles, gharials, and river dolphins.",
		body: "There are many incredible tourist places in Sawai Madhopur like the National Chambal Sanctuary and other places to visit in Ranthambore. National Chambal Sanctuary is one of the famous tourist places to visit in Sawai Madhopur. You can travel with your family or friends to enjoy the crocodile safari at Palighat in the National Chambal Sanctuary. Ranthambore National Park is a very good natural place to spend the holidays.",
		icon: Ship,
		image: {
			src: "/Home/chambal.jpg",
			alt: "Gharial on the Chambal River near Ranthambore",
			width: 2048,
			height: 1365,
		},
		location: "National Chambal Sanctuary, Palighat",
	},
	{
		id: "bird-watching",
		title: "Bird Watching at Ranthambore Park",
		shortDescription:
			"Over 270 bird species — Indian Peafowl, Painted Stork, and Indian Vulture across lakes and grasslands.",
		body: "If you're a birdwatching enthusiast, Ranthambore is one of the best places to go for a safari, with its diverse avian population! The park is home to over 270 species of birds, making it a paradise for nature lovers. Take a moment to pause and spot the vibrant Indian Peafowl, the regal Indian Vulture, or the elusive Painted Stork. Early mornings are the best time to spot these winged wonders as they flutter around the park's lakes and grasslands. Whether you're new to birding or a seasoned pro, birdwatching here offers a unique glimpse into India's avian biodiversity.",
		icon: Binoculars,
		image: {
			src: "/Home/bird.jpg",
			alt: "Bird watching in Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
		location: "Ranthambore National Park",
		bestTime: "Early morning",
	},
	{
		id: "wild-dragon-adventure-park",
		title: "Wild Dragon Adventure Park",
		shortDescription:
			"Amusement park with zorbing, ATV rides, and a horror house — perfect for thrill-seekers.",
		body: "Wild Dragon Adventure Park is an amusement park, which is the best nearby place for thrill-seekers offering such activities as zorbing, ATV rides, and a horror house. It is the perfect place to complete your trip apart from the wildlife safaris.",
		icon: FerrisWheel,
		image: {
			src: "/Home/adv.webp",
			alt: "Wild Dragon Adventure Park near Ranthambore",
			width: 2048,
			height: 1365,
		},
		entryFees: "₹400 per person (approximate)",
		bestTime: "Throughout the year",
		travelTip: "Carry a water bottle and sunscreen.",
	},
];

export function attractionDetailItems(
	attraction: Attraction,
): string[] | undefined {
	const items: string[] = [];
	if (attraction.location) items.push(`Location: ${attraction.location}`);
	if (attraction.timings) items.push(`Timings: ${attraction.timings}`);
	if (attraction.entryFees) items.push(`Entry Fees: ${attraction.entryFees}`);
	if (attraction.bestTime) items.push(`Best Time: ${attraction.bestTime}`);
	if (attraction.travelTip) items.push(`Travel Tip: ${attraction.travelTip}`);
	return items.length > 0 ? items : undefined;
}

export function attractionHref(id: string) {
	return `/nearby-places#${id}`;
}
