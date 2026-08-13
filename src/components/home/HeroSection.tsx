import { HeroCarousel } from "#/components/home/HeroCarousel";

const TRUST_BADGES = [
	"Expert Local Guides",
	"60+ Tigers in the Wild",
	"300+ Species of Flora & Fauna",
];

export function HeroSection() {
	return (
		<section
			id="hero"
			className="bg-sand-50 container mx-auto min-h-dvh"
			aria-label="Hero"
		>
			<div className="py-20">
				<div className="relative mx-auto max-w-sm md:max-w-4xl">
					<div className="hidden h-[70dvh] w-[60%] mx-auto rounded-t-full bg-tiger-50 md:block" />

					<h1 className="whitespace-nowrap text-center text-3xl font-semibold font-display tracking-display text-tiger-900 md:absolute md:-top-4 md:left-1/2 md:-translate-x-1/2 md:text-5xl md:font-medium lg:text-7xl">
						WELCOME TO
					</h1>

					<div className="relative mx-auto mt-10 w-full max-w-sm md:absolute md:bottom-[-5rem] md:left-0 md:mt-0 md:aspect-square md:max-h-[550px] md:max-w-[550px] md:size-full">
						<div className="absolute left-1/2 top-[-6%] h-[106%] w-[80%] -translate-x-1/2 rounded-t-full bg-tiger-50 md:hidden" />
						<div className="hero-frame-mask relative aspect-square w-full overflow-hidden">
							<HeroCarousel />
						</div>
					</div>

					<div className="mt-10 flex flex-col items-center text-center md:absolute md:bottom-[10%] md:right-[-8%] md:mt-0 md:items-center md:text-right">
						<p className="whitespace-nowrap text-3xl font-semibold font-display tracking-display text-tiger-900 leading-none md:text-4xl md:font-medium lg:text-6xl">
							Ranthambhore
						</p>
						<p className="mt-2 max-w-xs font-display text-sm font-semibold text-charcoal-700 md:max-w-sm lg:text-base">
							Into the Land of Tigers.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-10 max-w-4xl mx-auto">
				<ul className="flex items-center font-display justify-between font-medium gap-4">
					{TRUST_BADGES.map((badge) => (
						<li key={badge} className="text-lg text-center">
							{badge}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
