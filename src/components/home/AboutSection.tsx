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
							Nestled amidst the ancient Aravalli and Vindhya hill ranges in the Sawai Madhopur district of Rajasthan, Ranthambore is one of India's most celebrated wildlife destinations. Known across the world for its thriving population of Royal Bengal Tigers, the region offers a rare blend of untamed wilderness, centuries-old heritage, and breathtaking natural landscapes.
							</p>
							<p>
							At the heart of this remarkable destination lies <b>Ranthambore National Park,</b> one of India's premier tiger reserves and among the finest places in the world to witness wild tigers in their natural habitat. Spread across approximately 392 square kilometres, and forming part of the larger Ranthambore Tiger Reserve along with the Sawai Man Singh and Kaila Devi Wildlife Sanctuaries, the protected landscape covers over 1,300 square kilometres of rich forests, lakes, valleys, and rugged hills.
							</p>
						</div>
						<b className="mt-6 block">Why Visit Ranthambore?</b>
						<ul className="mt-6 space-y-2 font-body text-sm text-charcoal-700">
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								One of the best destinations in the world to spot wild Royal Bengal Tigers.
							</li>
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								Home to rich biodiversity, including leopards, sloth bears, crocodiles, and over 300 bird species.
							</li>
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								A perfect blend of wildlife, history, and nature with the UNESCO-listed Ranthambore Fort.
							</li>
							<li className="flex gap-2">
								<span className="text-sunset-500">✦</span>
								Exciting jeep and canter safaris across ten unique safari zones.
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
