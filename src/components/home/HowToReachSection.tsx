import type { LucideIcon } from "lucide-react";
import { Bus, Plane, TrainFront } from "lucide-react";
import { Image } from "#/util/Image";

const HEADING_SIZE = "text-[clamp(2rem,4.5vw,4.5rem)]";

const MODES: {
	icon: LucideIcon;
	title: string;
	description: string;
}[] = [
	{
		icon: Plane,
		title: "By Air",
		description:
			"Nearest airport: Jaipur International Airport (~180 km, ~2.5 hrs by car). Taxis and cabs available from the airport directly to Sawai Madhopur.",
	},
	{
		icon: TrainFront,
		title: "By Train",
		description:
			"Nearest station: Sawai Madhopur Railway Station (~14 km from park gate). Well-connected to Delhi, Mumbai, Jaipur, Agra. Luxury trains — Palace on Wheels, Maharaja Express — also stop here.",
	},
	{
		icon: Bus,
		title: "By Road",
		description:
			"Regular buses from Jaipur; private cabs available from all major cities.",
	},
];

const ROAD_DISTANCES = [
	{ city: "Delhi", km: "381 km" },
	{ city: "Jaipur", km: "155 km" },
	{ city: "Agra", km: "239 km" },
	{ city: "Udaipur", km: "388 km" },
	{ city: "Gurugram", km: "400 km" },
	{ city: "Jodhpur", km: "445 km" },
	{ city: "Bandhavgarh National Park", km: "681 km" },
	{ city: "Chambal Gharial Safari", km: "50 km" },
] as const;

/** Outer-edge path for curved label text — tuned to curve-line.png */
const CURVE_LABEL_PATH =
	"M 820 80 C 980 140, 940 360, 760 460 C 520 620, 240 860, 280 1140 C 320 1420, 500 1660, 480 1860";

export function HowToReachSection() {
	return (
		<section
			className="relative overflow-hidden bg-sand-50"
			aria-label="How to reach Ranthambore National Park"
		>
			<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
				<header className="mb-10 text-center lg:mb-12">
					<p className="font-display text-xs font-medium uppercase tracking-display text-earth-700 lg:text-sm">
						Getting Here
					</p>
					<h2
						className={`mt-4 font-display font-normal uppercase leading-none tracking-[0.18em] text-charcoal-900 lg:mt-5 ${HEADING_SIZE}`}
					>
						How to Reach
					</h2>
				</header>

				<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-x-8 xl:gap-x-10">
					{/* Travel modes */}
					<div className="w-full max-w-xl space-y-6 lg:flex-1">
						{MODES.map((mode) => {
							const Icon = mode.icon;
							const isRoad = mode.title === "By Road";
							return (
								<article
									key={mode.title}
									className="border-l-2 border-earth-200 pl-4 sm:pl-5"
								>
									<h3 className="flex items-center gap-2.5 font-display text-sm font-medium uppercase tracking-display text-charcoal-900">
										<Icon
											className="size-4 shrink-0 text-earth-500"
											strokeWidth={1.5}
											aria-hidden
										/>
										{mode.title}
									</h3>
									<p className="mt-2 font-body text-[0.9375rem] leading-[1.7] text-charcoal-600">
										{mode.description}
									</p>
									{isRoad ? (
										<dl className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
											{ROAD_DISTANCES.map(({ city, km }) => (
												<div
													key={city}
													className="rounded-lg border border-sand-300/90 bg-sand-100/70 px-2.5 py-2 text-center"
												>
													<dt className="font-display text-[0.625rem] uppercase leading-tight tracking-display text-earth-700">
														{city}
													</dt>
													<dd className="mt-0.5 font-body text-sm font-semibold text-charcoal-900">
														{km}
													</dd>
												</div>
											))}
										</dl>
									) : null}
								</article>
							);
						})}

						{/* <Button
							variant="outline"
							size="lg"
							className="rounded-none"
							render={
								<Link to="/travel-info">
									Detailed Travel Guide
									<ArrowRight strokeWidth={1.5} />
								</Link>
							}
						/> */}
					</div>

					{/* S-curve journey graphic — fixed height, wider than native aspect to fill horizontal space */}
					<div
						className="relative mx-auto h-[340px] w-[280px] shrink-0 sm:h-[380px] sm:w-[310px] lg:mx-0 lg:h-[420px] lg:w-[360px]"
						aria-hidden
					>
						<div className="how-to-reach-curve-mask absolute inset-0 overflow-hidden">
							<Image
								src="/ocian.jpg"
								alt=""
								width={4000}
								height={3000}
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-sand-50 from-0% via-transparent via-55% to-sand-50 to-100%" />

						<svg
							className="pointer-events-none absolute inset-0 h-full w-full"
							viewBox="0 0 1081 1920"
							aria-hidden
						>
							<title>Decorative journey curve label</title>
							<defs>
								<path
									id="how-to-reach-curve-label"
									d={CURVE_LABEL_PATH}
									fill="none"
								/>
							</defs>
							<text
								fill="var(--color-earth-500)"
								fontFamily="var(--font-display)"
								fontSize="16"
								letterSpacing="3"
							>
								<textPath href="#how-to-reach-curve-label" startOffset="0%">
									RANTHAMBHORE TIGER RESERVE ✦ WILDLIFE SAFARI ✦ RANTHAMBHORE ✦
								</textPath>
							</text>
						</svg>

						<p className="pointer-events-none absolute inset-x-3 top-[49%] -translate-y-1/2 text-center font-body text-[clamp(0.875rem,1.6vw,1.25rem)] font-semibold uppercase leading-tight tracking-[0.32em] text-charcoal-900">
							Your Journey
						</p>
					</div>
				</div>
			</div>

			<div className="h-px bg-sunset-500" aria-hidden="true" />
		</section>
	);
}
