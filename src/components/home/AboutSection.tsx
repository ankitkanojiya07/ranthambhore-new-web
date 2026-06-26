import { Image } from "#/util/Image";
import { Button } from "../ui/button";

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
							// layout="constrained"
							width={482}
							height={518}
							className="w-full rounded-sm"
						/>
					</div>

					{/* Text content */}
					<div className="w-full lg:w-[55%]">
						<p className="font-display text-sm uppercase font-semibold text-earth-500">
							Welcome to Ranthambhor.com
						</p>
						<h3 className="mt-2 text-2xl font-semibold text-charcoal-800 lg:text-3xl">
							Your Trusted Guide to <br /> Ranthambore National Park
						</h3>
						<div className="mt-6 space-y-2">
							<p>
								Nestled in the Aravalli and Vindhya hills of Sawai Madhopur
								district, Ranthambore is one of India&apos;s finest wildlife
								destinations. Whether you are here to spot the majestic Bengal
								tiger in the wild, photograph rare birds at dawn, or wander
								through the centuries-old Ranthambore Fort, this land will leave
								you transformed.
							</p>
							<p>
								We are a local, experience-driven platform that helps travellers
								plan every detail of their Ranthambore visit — from the right
								safari zone and booking slots to the best hotels for every
								budget. Browse our guides, get inspired, and when you are ready,
								we are just one click away.
							</p>
						</div>
						<ul className="mt-6 space-y-2 font-body text-sm text-charcoal-700">
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								One of the best places in the world to spot wild tigers during
								daylight hours
							</li>
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								Home to over 60 tigers, 300+ bird species, and rich biodiversity
							</li>
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								Open October to June — peak season October to April
							</li>
						</ul>
						<Button
							variant={"outline"}
							size={"lg"}
							className="mt-8 rounded-none"
							render={<a href="/about">Discover More</a>}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
