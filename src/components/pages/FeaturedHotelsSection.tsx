import { FeaturedHotelCard } from "#/components/pages/FeaturedHotelCard";
import { SectionHeading } from "./SectionHeading";
import { FEATURED_HOTELS } from "#/lib/featured-hotels";

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
						<FeaturedHotelCard key={hotel.name} hotel={hotel} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
