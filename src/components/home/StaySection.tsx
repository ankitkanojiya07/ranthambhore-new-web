import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FeaturedHotelCard } from "#/components/pages/FeaturedHotelCard";
import { SectionHeading } from "#/components/pages/SectionHeading";
import { FEATURED_HOTELS } from "#/lib/featured-hotels";

const STICKY_TOP_REM = 6;
const STICKY_OFFSET_REM = 1.5;

export function StaySection() {
	return (
		<section
			className="border-b border-muted-300 bg-sand-50 px-6 py-20 lg:px-8 lg:py-28"
			aria-label="Recommended stays near Ranthambore"
		>
			<div className="mx-auto max-w-7xl">
				<SectionHeading
					eyebrow="Stay"
					title="Handpicked Hotels Near Ranthambore"
					centered={false}
				/>
				<p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
					Three trusted properties we recommend for safari travellers — scroll
					to explore each stay, with the same curated picks from our hotels
					guide.
				</p>

				<div className="relative mt-14">
					{FEATURED_HOTELS.map((hotel, index) => {
						const isLast = index === FEATURED_HOTELS.length - 1;

						return (
							<div
								key={hotel.name}
								className={isLast ? "pb-8" : "h-[85vh] lg:h-[80vh]"}
							>
								<div
									className="sticky"
									style={{
										top: `calc(${STICKY_TOP_REM}rem + ${index * STICKY_OFFSET_REM}rem)`,
										zIndex: index + 1,
									}}
								>
									<FeaturedHotelCard
										hotel={hotel}
										index={index}
										className="shadow-md"
									/>
								</div>
							</div>
						);
					})}
				</div>

				<Link
					to="/stay/hotels"
					className="mt-10 inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700"
				>
					View All Hotels
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</section>
	);
}
