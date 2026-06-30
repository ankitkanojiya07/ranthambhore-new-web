import { Image } from "@unpic/react";
import { SectionHeading } from "./SectionHeading";

interface FeaturedHotel {
	name: string;
	tagline: string;
	description: string;
	highlights: string[];
	href: string;
	image: string;
	tier: string;
}

const FEATURED_HOTELS: FeaturedHotel[] = [
	{
		name: "Ranthambore Regency",
		tagline: "Luxury jungle resort in Sawai Madhopur",
		description:
			"A family-operated jungle resort just five minutes from Ranthambore National Park — genteel, comfortable hospitality set amidst complete wilderness.",
		highlights: [
			"5 minutes from the national park gates",
			"Experienced naturalists for jungle safaris",
			"Spa, pool, and curated wildlife experiences",
		],
		href: "https://ranthamboreregency.com/",
		image: "/Home/h1.webp",
		tier: "Luxury Resort",
	},
	{
		name: "Ranthambhore Aangan",
		tagline: "Boutique luxury farmstay near the park",
		description:
			"An intimate eight-room farmstay set amidst farms and forest in the Aravalli bowl — close to core safari zones yet peacefully removed from the main road.",
		highlights: [
			"~5 minutes to Zones 1–5, 15–20 minutes to Zones 6–10",
			"Only eight rooms for a quiet, personal stay",
			"Authentic Rajasthani cuisine and safari-focused service",
		],
		href: "https://ranthamboreaangan.com/",
		image: "/Home/h2.jpg",
		tier: "Boutique Farmstay",
	},
	{
		name: "Taj Sawai Madhopur Lodge",
		tagline: "Taj luxury beside tiger country",
		description:
			"The Taj group's refined lodge near Ranthambore — contemporary comfort, attentive service, and a polished base for morning safaris into India's most celebrated tiger reserve.",
		highlights: [
			"Trusted Taj hospitality and dining",
			"Well placed for Ranthambore safari departures",
			"Ideal for travellers seeking premium comfort",
		],
		href: "https://www.tajhotels.com/en-in/hotels/taj-sawai-ranthambore",
		image: "/Home/h3.png",
		tier: "Luxury Lodge",
	},
];

export function FeaturedHotelsSection() {
	return (
		<section
			className="border-b border-muted-300 bg-sand-50 px-6 py-20 lg:px-8 lg:py-28"
			aria-label="Recommended hotels"
		>
			<div className="mx-auto max-w-7xl">
				<SectionHeading
					eyebrow="Recommended Stays"
					title="Handpicked Hotels Near Ranthambore"
					centered={false}
				/>
				<p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
					Three trusted properties we recommend for safari travellers — each
					offering a distinct stay experience close to the forest gates.
				</p>

				<div className="mt-14 space-y-8">
					{FEATURED_HOTELS.map((hotel, index) => (
						<article
							key={hotel.name}
							className="overflow-hidden rounded-sm bg-cream-100 ring-1 ring-muted-300 transition-shadow hover:shadow-lg lg:grid lg:grid-cols-2"
						>
							<div
								className={`overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
							>
								<Image
									src={hotel.image}
									alt={hotel.name}
									layout="fullWidth"
									className="aspect-4/3 w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[300px]"
								/>
							</div>

							<div
								className={`flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}
							>
								<p className="font-display text-[10px] uppercase tracking-display text-sunset-500">
									{hotel.tier}
								</p>
								<h3 className="mt-2 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
									{hotel.name}
								</h3>
								<p className="mt-1 font-body text-sm text-earth-600">
									{hotel.tagline}
								</p>
								<div className="mt-3 h-px w-12 bg-sunset-500/40" />
								<p className="mt-4 font-body text-base leading-[1.85] text-charcoal-700">
									{hotel.description}
								</p>
								<ul className="mt-5 space-y-2.5">
									{hotel.highlights.map((highlight) => (
										<li
											key={highlight}
											className="flex gap-2.5 font-body text-sm text-charcoal-700"
										>
											<span className="mt-1.5 size-2 shrink-0 rotate-45 bg-sunset-500" />
											{highlight}
										</li>
									))}
								</ul>
								<a
									href={hotel.href}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-charcoal-800 px-6 py-2.5 font-display text-xs uppercase tracking-display text-charcoal-800 transition-colors hover:bg-charcoal-800 hover:text-sand-50"
								>
									Visit Website
									<span aria-hidden="true">→</span>
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
