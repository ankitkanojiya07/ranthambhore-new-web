import { HotelImageCarousel } from "#/components/pages/HotelImageCarousel";
import type { FeaturedHotel } from "#/lib/featured-hotels";
import { cn } from "#/lib/utils";

interface FeaturedHotelCardProps {
	hotel: FeaturedHotel;
	index: number;
	className?: string;
}

export function FeaturedHotelCard({
	hotel,
	index,
	className,
}: FeaturedHotelCardProps) {
	return (
		<article
			className={cn(
				"overflow-hidden rounded-sm bg-cream-100 ring-1 ring-muted-300 transition-shadow hover:shadow-lg lg:grid lg:grid-cols-2",
				className,
			)}
		>
			<div className={`overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
				<HotelImageCarousel
					slides={hotel.images}
					hotelName={hotel.name}
					className="lg:h-full"
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
				<p className="mt-1 font-body text-sm text-earth-600">{hotel.tagline}</p>
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
	);
}
