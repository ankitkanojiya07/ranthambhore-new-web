import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "#/util/Image";

const HEADING_SIZE = "text-[clamp(2rem,4.5vw,5.5rem)]";

const MODES = [
	{
		icon: "✈",
		title: "By Air",
		description:
			"Nearest airport: Jaipur International Airport (~180 km, ~2.5 hrs by car). Taxis and cabs available from the airport directly to Sawai Madhopur.",
	},
	{
		icon: "🚂",
		title: "By Train",
		description:
			"Nearest station: Sawai Madhopur Railway Station (~14 km from park gate). Well-connected to Delhi, Mumbai, Jaipur, Agra. Luxury trains — Palace on Wheels, Maharaja Express — also stop here.",
	},
	{
		icon: "🚌",
		title: "By Road",
		description:
			"Delhi: 381 km · Jaipur: 155 km · Agra: 239 km · Udaipur: 388 km. Regular buses from Jaipur; private cabs available from all major cities.",
	},
] as const;

export function HowToReachSection() {
	return (
		<section
			className="relative overflow-hidden bg-sand-50"
			aria-label="How to reach Ranthambore National Park"
		>
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
				<div className="relative lg:min-h-[720px]">
					{/* Split display heading */}
					<div className="pointer-events-none relative z-0 mb-10 text-center lg:absolute lg:inset-x-0 lg:top-0 lg:mb-0">
						<p className="font-display text-xs font-medium uppercase tracking-display text-earth-500 lg:text-sm">
							Getting Here
						</p>

						<p
							className={`mt-4 font-display font-extralight uppercase leading-none tracking-[0.18em] text-charcoal-900 lg:mt-6 ${HEADING_SIZE}`}
						>
							How to Reach
						</p>
					</div>

					<div className="relative z-10 grid items-end gap-12 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-8 lg:pt-44">
						{/* Mode cards + CTA */}
						<div className="space-y-8 lg:max-w-md">
							{MODES.map((mode) => (
								<article key={mode.title}>
									<h3 className="font-display text-sm font-medium uppercase tracking-display text-charcoal-900">
										<span aria-hidden="true" className="mr-2">
											{mode.icon}
										</span>
										{mode.title}
									</h3>
									<p className="mt-2 font-body text-sm leading-relaxed text-charcoal-600">
										{mode.description}
									</p>
								</article>
							))}

							<Link
								to="/travel-info"
								className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700"
							>
								Detailed Travel Guide
								<ArrowRight className="size-4" />
							</Link>
						</div>

						{/* Travel route graphic */}
						<div className="mx-auto w-full max-w-lg lg:absolute lg:right-0 lg:bottom-0 lg:mx-0 lg:max-w-none lg:w-[52%]">
							<Image
								src="/im1.png"
								alt="Decorative travel route graphic showing the journey to Ranthambore National Park"
								width={1200}
								height={800}
								className="h-auto w-full object-contain"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="h-px bg-sunset-500" aria-hidden="true" />
		</section>
	);
}
