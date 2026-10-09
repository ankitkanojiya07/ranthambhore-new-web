import { HeroCarousel } from "#/components/home/HeroCarousel";

const TRUST_BADGES = [
	"Expert Local Guides",
	"60+ Tigers in the Wild",
	"300+ Species Flora & Fauna",
];

export function HeroSection() {
	return (
		<section
			id="hero"
			className="relative isolate h-dvh min-h-[600px] w-full overflow-hidden bg-charcoal-950"
			aria-label="Ranthambhore wildlife"
		>
			<HeroCarousel />
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal-950/45 via-transparent to-charcoal-950/75" />

			<ul
				className="absolute inset-x-0 bottom-16 z-10 mx-auto grid max-w-5xl grid-cols-1 gap-3 px-6 text-center font-display text-xs uppercase tracking-display text-sand-50 sm:grid-cols-3 sm:gap-4 sm:px-8 sm:text-sm"
				aria-label="Trust highlights"
			>
				{TRUST_BADGES.map((badge) => (
					<li
						key={badge}
						className="flex items-center justify-center gap-2 text-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
					>
						<span className="size-1.5 shrink-0 rotate-45 bg-sunset-500" />
						{badge}
					</li>
				))}
			</ul>
		</section>
	);
}
