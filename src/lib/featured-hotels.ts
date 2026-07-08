import type { HotelSlide } from "#/components/pages/HotelImageCarousel";

export interface FeaturedHotel {
	name: string;
	tagline: string;
	description: string;
	highlights: string[];
	href: string;
	images: HotelSlide[];
	tier: string;
}

export const FEATURED_HOTELS: FeaturedHotel[] = [
	{
		name: "Ranthambore Regency",
		tagline: "Explore the Wild, Relax in Luxury",
		description:
			"A family-operated resort just five minutes from Ranthambore National Park — genteel, comfortable hospitality set amidst complete wilderness.",
		highlights: [
			"5 minutes from the national park gates",
			"Experienced naturalists for jungle safaris",
			"Spa, pool, and curated wildlife experiences",
		],
		href: "https://ranthamboreregency.com/",
		images: [
			{
				src: "/stay/regency/1.jpg",
				alt: "Ranthambore Regency resort exterior at night",
			},
			{
				src: "/stay/regency/2.jpg",
				alt: "Fuchsia Lounge seating area at Ranthambore Regency",
			},
			{
				src: "/stay/regency/3.jpg",
				alt: "Outdoor lawns, bar, and dining areas at Ranthambore Regency",
			},
			{
				src: "/stay/regency/4.jpg",
				alt: "Formal dining room at Ranthambore Regency",
			},
			{
				src: "/stay/regency/5.jpg",
				alt: "Guests dining at Ranthambore Regency restaurant",
			},
			{
				src: "/stay/regency/6.jpg",
				alt: "Swimming pool at Ranthambore Regency at night",
			},
			{
				src: "/stay/regency/7.jpg",
				alt: "Swimming pool at Ranthambore Regency at night",
			},
			{
				src: "/stay/regency/8.jpg",
				alt: "Swimming pool at Ranthambore Regency at night",
			},
		],
		tier: "Luxury Resort",
	},
	{
		name: "Ranthambhore Aangan",
		tagline: "Boutique luxury farmstay near the park",
		description:
			"An intimate farmstay set amidst farms and forest in the Aravalli bowl — close to core safari zones yet peacefully removed from the main road.",
		highlights: [
			"~5 minutes to Zones 1–5, 15–20 minutes to Zones 6–10",
			"Only eight rooms for a quiet, personal stay",
			"Authentic Rajasthani cuisine and safari-focused service",
		],
		href: "https://ranthamboreaangan.com/",
		images: [
			{
				src: "/stay/aangan/1.jpg",
				alt: "Outdoor dining patio at Ranthambhore Aangan at night",
			},
			{
				src: "/stay/aangan/2.jpg",
				alt: "Aravalli hills view from a private verandah at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/3.jpg",
				alt: "Guest rooms and arched lounge at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/4.jpg",
				alt: "Resort grounds and traditional architecture at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/5.jpg",
				alt: "Resort grounds and traditional architecture at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/6.jpg",
				alt: "Resort grounds and traditional architecture at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/7.jpg",
				alt: "Resort grounds and traditional architecture at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/8.jpg",
				alt: "Resort grounds and traditional architecture at Ranthambhore Aangan",
			},
			{
				src: "/stay/aangan/9.jpg",
				alt: "Resort grounds and traditional architecture at Ranthambhore Aangan",
			},
		],
		tier: "Boutique Farmstay",
	},
	{
		name: "Taj Sawai, Ranthambore",
		tagline: "Taj luxury beside tiger country",
		description:
			"The Taj group's refined lodge near Ranthambore — contemporary comfort, attentive service, and a polished base for morning safaris into India's most celebrated tiger reserve.",
		highlights: [
			"Trusted Taj hospitality and dining",
			"Well placed for Ranthambore safari departures",
			"Ideal for travellers seeking premium comfort",
		],
		href: "https://www.tajhotels.com/en-in/hotels/taj-sawai-ranthambore",
		images: [
			{
				src: "/stay/taj/aerial-twilight.jpg",
				alt: "Aerial view of Taj Sawai, Ranthambore Lodge at twilight",
			},
			{
				src: "/stay/taj/dining-room.jpg",
				alt: "Grand dining room with painted ceiling at Taj Sawai, Ranthambore",
			},
			{
				src: "/stay/taj/banquet-hall.jpg",
				alt: "Banquet hall at Taj Sawai, Ranthambore",
			},
			{
				src: "/stay/taj/outdoor-lounge.jpg",
				alt: "Outdoor lounge patio at Taj Sawai, Ranthambore",
			},
			{
				src: "/stay/taj/restaurant.jpg",
				alt: "Restaurant and open kitchen at Taj Sawai, Ranthambore",
			},
			{
				src: "/stay/taj/lobby.jpg",
				alt: "Lobby lounge at Taj Sawai, Ranthambore",
			},
		],
		tier: "Luxury Lodge",
	},
];
