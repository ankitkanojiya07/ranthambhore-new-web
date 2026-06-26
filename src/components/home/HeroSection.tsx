const TRUST_BADGES = [
	"Expert Local Guides",
	"60+ Tigers in the Wild",
	"Open October to June",
];

export function HeroSection() {
	return (
		<section
			id="hero"
			className="bg-sand-50 container mx-auto min-h-dvh"
			aria-label="Hero"
		>
			<div className="py-20">
				{/* Mobile: stacked, centered — brand sits on cream below the image */}
				<div className="flex flex-col items-center md:hidden">
					<h1 className="whitespace-nowrap text-3xl text-center font-semibold font-display tracking-display text-forest-900">
						WELCOME TO
					</h1>
					<div className="relative mt-10 w-full max-w-sm">
						<div className="absolute left-1/2 top-[-6%] h-[106%] w-[80%] -translate-x-1/2 rounded-t-full bg-cream-100" />
						<div className="hero-frame-mask relative aspect-square w-full">
							<img
								src="/hero/3.webp"
								alt="Ranthambhore"
								className="size-full object-cover"
							/>
						</div>
					</div>
					<div className="mt-10 flex flex-col items-center text-center">
						<h2 className="whitespace-nowrap text-3xl font-semibold font-display tracking-display text-forest-900 leading-none">
							Ranthambhore
						</h2>
						<p className="mt-2 max-w-xs font-body text-sm text-charcoal-700">
							Into the Land of Tigers.
						</p>
					</div>
				</div>

				{/* Desktop: overlay composition — image left, brand over the cream arch */}
				<div className="hidden md:block">
					<div className="relative max-w-4xl mx-auto">
						<div className="h-[70dvh] relative mx-auto bg-cream-100 rounded-t-full w-[60%]" />
						<div className="absolute aspect-square max-w-[550px] max-h-[550px] -bottom-20  mx-auto left-0 hero-frame-mask size-full">
							<img
								src="/gallery/9.jpg"
								alt="Ranthambhore"
								className="size-full object-cover"
							/>
						</div>
						<h1 className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-5xl lg:text-7xl text-center font-medium font-display tracking-display text-forest-900">
							WELCOME TO
						</h1>
						<div className="absolute bottom-[10%] right-[-8%] flex flex-col items-center text-right">
							<h2 className="whitespace-nowrap text-4xl lg:text-6xl font-medium font-display tracking-display text-forest-900 leading-none">
								Ranthambhore
							</h2>
							<p className="mt-2 max-w-sm font-body text-sm lg:text-base text-charcoal-700">
								Into the Land of Tigers
							</p>
						</div>
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
