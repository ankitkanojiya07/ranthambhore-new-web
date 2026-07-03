import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "#/hooks/useInterval";
import { ATTRACTIONS, attractionHref } from "#/lib/attractions";
import { Image } from "#/util/Image";

const AUTO_ADVANCE_MS = 4500;

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

const CARD_W = 300;
const GAP = 24;
const STEP = CARD_W + GAP;
const TOTAL_TRACK_W = ATTRACTIONS.length * STEP - GAP;

export function ThingsToDoSection() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const viewportRef = useRef<HTMLDivElement>(null);
	const [viewportW, setViewportW] = useState(0);

	useEffect(() => {
		const el = viewportRef.current;
		if (!el) return;
		const ro = new ResizeObserver(([entry]) => {
			setViewportW(entry.contentRect.width);
		});
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	const maxOffset = Math.max(0, TOTAL_TRACK_W - viewportW);
	const offset = Math.min(index * STEP, maxOffset);
	const canPrev = index > 0;
	const canNext = offset < maxOffset;

	const prev = () => setIndex((i) => Math.max(0, i - 1));
	const next = () => setIndex((i) => Math.min(ATTRACTIONS.length - 1, i + 1));

	useInterval(
		() => {
			setIndex((current) => {
				const max = Math.max(0, TOTAL_TRACK_W - viewportW);
				const nextOffset = Math.min((current + 1) * STEP, max);
				if (nextOffset >= max) {
					return 0;
				}
				return current + 1;
			});
		},
		paused || viewportW === 0 ? null : AUTO_ADVANCE_MS,
	);

	return (
		<section
			className="overflow-hidden bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Top tourist attractions in Ranthambore"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					setPaused(false);
				}
			}}
		>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="text-center"
				>
					<motion.p
						variants={itemVariants}
						className="font-playfair text-sm font-medium uppercase tracking-display text-earth-400"
					>
						Explore Inside the Park
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="mt-3 font-display text-4xl font-normal uppercase tracking-display text-charcoal-900 lg:text-6xl"
					>
						Attractions in Ranthambore
					</motion.h2>
				</motion.div>

				{/* Carousel */}
				<div className="relative mt-14 lg:mt-20">
					<div ref={viewportRef} className="overflow-hidden pb-10 lg:pb-16">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							animate={{ x: -offset }}
							transition={{ type: "spring", stiffness: 260, damping: 36 }}
							className="flex gap-6"
						>
							{ATTRACTIONS.map((attraction, i) => {
								const Icon = attraction.icon;
								return (
									<motion.article
										key={attraction.id}
										variants={itemVariants}
										className={`group relative w-[280px] shrink-0 lg:w-[300px] ${
											i % 2 === 0 ? "lg:-translate-y-8" : "lg:translate-y-8"
										}`}
									>
										{/* Image wrapper — the only clipped layer */}
										<div className="relative aspect-9/13 w-full overflow-hidden rounded-sm">
											<Image
												src={attraction.image.src}
												alt={attraction.image.alt}
												width={attraction.image.width}
												height={attraction.image.height}
												className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
											/>
											<div className="absolute inset-0 bg-charcoal-900/5 transition-colors duration-500 group-hover:bg-tiger-900/30 group-focus-within:bg-tiger-900/30" />
										</div>

										{/* Icon circle — protrudes on the outer edge */}
										<div
											className={`absolute right-6 z-20 flex size-12 items-center justify-center rounded-full bg-cream-100 shadow-sm ring-1 ring-muted-300 ${
												i % 2 === 0 ? "-bottom-6" : "-top-6"
											}`}
										>
											<Icon
												className="size-5 text-tiger-900"
												strokeWidth={1.25}
											/>
										</div>

										{/* Cream label box — overlaps below the image */}
										<div className="absolute bottom-6 left-0 z-10 max-w-[80%] rounded-r-lg bg-cream-100 px-4 py-3 shadow-md ring-1 ring-muted-300 transition-[max-width] duration-300 ease-out group-hover:max-w-[88%] group-focus-within:max-w-[88%]">
											<h3 className="font-display text-sm uppercase leading-snug tracking-display text-charcoal-900 drop-shadow-sm">
												{attraction.title}
											</h3>
											<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
												<div className="overflow-hidden font-body text-xs leading-relaxed text-charcoal-600 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
													<span className="mt-2 block">
														{attraction.shortDescription}
													</span>
													<a
														href={attractionHref(attraction.id)}
														className="mt-3 inline-flex items-center gap-1 font-display text-[10px] uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700"
													>
														Know More
														<ArrowRight className="size-3" />
													</a>
												</div>
											</div>
										</div>
									</motion.article>
								);
							})}
						</motion.div>
					</div>

					{/* Arrow navigation */}
					<div className="mt-10 flex items-center justify-center gap-3 lg:mt-4">
						<button
							type="button"
							onClick={prev}
							disabled={!canPrev}
							aria-label="Previous attractions"
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:cursor-not-allowed disabled:opacity-40"
						>
							<ArrowLeft className="size-5" />
						</button>
						<button
							type="button"
							onClick={next}
							disabled={!canNext}
							aria-label="Next attractions"
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:cursor-not-allowed disabled:opacity-40"
						>
							<ArrowRight className="size-5" />
						</button>
					</div>
				</div>

				<div className="mt-10 flex justify-center">
					<Link
						to="/nearby-places"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700"
					>
						All Attractions
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
