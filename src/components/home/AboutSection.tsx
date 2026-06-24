import { Image } from "#/util/Image";

export function AboutSection() {
	return (
		<section className="bg-sand-50 px-6 lg:px-4" aria-label="About">
			<div className="mx-auto max-w-7xl">
				<div className="mt-14 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
					{/* Map image */}
					<div className="w-full shrink-0 lg:w-[45%]">
						<Image
							src="/map.png"
							alt="Illustrated map of Ranthambhore National Park"
							layout="fullWidth"
							className="w-full rounded-sm"
						/>
					</div>

					{/* Text content */}
					<div className="w-full lg:w-[55%]">
						<p className="font-display text-sm uppercase font-semibold text-earth-500">
							About Ranthambhore
						</p>
						<h3 className="mt-2 text-2xl font-semibold text-charcoal-800 lg:text-3xl">
							A Legacy of Wildlife <br /> Conservation
						</h3>
						<div className="mt-6 space-y-2">
							<p>
								Nestled at the junction of the Aravalli and Vindhya hill ranges,
								Ranthambhore National Park is one of India's most celebrated
								wildlife sanctuaries. Spanning over 1,300 square kilometres, it
								is home to the majestic Bengal tiger and a stunning diversity of
								flora and fauna.
							</p>
							<p>
								Our property offers an intimate gateway to this extraordinary
								wilderness. From expertly guided safaris through ancient forests
								and lakeside trails to evenings spent under star-filled skies,
								every moment here is designed to immerse you in the raw beauty
								of nature.
							</p>
							<p>
								We are deeply committed to conservation and community — working
								hand-in-hand with local villages and wildlife authorities to
								ensure that Ranthambhore's heritage endures for generations to
								come.
							</p>
						</div>
						<a
							href="#experiences"
							className="mt-8 inline-block border border-charcoal-800 px-8 py-3 font-display text-xs uppercase tracking-display text-charcoal-800 transition-colors hover:bg-charcoal-800 hover:text-sand-50"
						>
							Discover More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
