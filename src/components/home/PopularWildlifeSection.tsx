import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "#/hooks/useInterval";
import { Image } from "#/util/Image";

const AUTO_ADVANCE_MS = 6000;
const GAP_PX = 32;

const POPULAR_ANIMALS = [
	{
		id: "bengal-tiger",
		image: {
			src: "/Home/11.jpg",
			alt: "Bengal tiger in Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
		title: "Bengal Tiger",
		category: "Mammal",
		fameTag: "Star of the reserve",
		description:
			"Star of the reserve — 80+ tigers roam Ranthambore's lakes and open terrain.",
		badge: "Apex Predator",
		href: "/about/tigers",
	},
	{
		id: "leopard",
		image: {
			src: "/Home/1111.webp",
			alt: "Leopard in Kachida Valley, Ranthambore",
			width: 2048,
			height: 1365,
		},
		title: "Leopard",
		category: "Mammal",
		fameTag: "Kachida Valley",
		description:
			"Often spotted in Kachida Valley — stealthy and elusive among rocky escarpments.",
		badge: "Kachida Valley",
		href: "/about/flora-and-fauna",
	},
	{
		id: "sloth-bear",
		image: {
			src: "/Home/bear.jpg",
			alt: "Sloth bear foraging in Ranthambore forest",
			width: 2048,
			height: 1365,
		},
		title: "Sloth Bear",
		category: "Mammal",
		fameTag: "100+ in reserve",
		description:
			"100+ in the reserve — frequently seen shuffling through forest at dawn and dusk.",
		badge: "Rocky Terrain",
		href: "/about/flora-and-fauna",
	},
	{
		id: "spotted-deer",
		image: {
			src: "/Home/chital.jpg",
			alt: "Spotted deer grazing on a Ranthambore safari trail",
			width: 2048,
			height: 1365,
		},
		title: "Spotted Deer (Chital)",
		category: "Mammal",
		fameTag: "Most common sighting",
		description:
			"Most commonly seen on safari — graceful herds in open clearings and forest edges.",
		badge: "Open Clearings",
		href: "/about/flora-and-fauna",
	},
	{
		id: "sambar-deer",
		image: {
			src: "/Home/sambhar.jpg",
			alt: "Sambar deer in Ranthambore woodland",
			width: 2048,
			height: 1365,
		},
		title: "Sambar Deer",
		category: "Mammal",
		fameTag: "Largest deer in India",
		description:
			"Largest deer species in India — the tiger's preferred prey, found across the reserve.",
		badge: "Forest Edge",
		href: "/about/flora-and-fauna",
	},
	{
		id: "marsh-crocodile",
		image: {
			src: "/Home/14.webp",
			alt: "Marsh crocodile basking at a Ranthambore lake",
			width: 2048,
			height: 1365,
		},
		title: "Marsh Crocodile",
		category: "Reptile",
		fameTag: "All 3 major lakes",
		description:
			"Found in all 3 major lakes — often seen basking on the banks of Padam Talao.",
		badge: "Padam Talao",
		href: "/about/flora-and-fauna",
	},
	{
		id: "chinkara",
		image: {
			src: "/Home/chinkara.jpg",
			alt: "Chinkara gazelle in Ranthambore buffer zone",
			width: 2048,
			height: 1365,
		},
		title: "Chinkara",
		category: "Mammal",
		fameTag: "Shy & rare",
		description:
			"Indian Gazelle — shy and rare, adapted to the park's open savannah buffer zones.",
		badge: "Buffer Zones",
		href: "/about/flora-and-fauna",
	},
	{
		id: "wild-boar",
		image: {
			src: "/Home/wild.jpg",
			alt: "Wild boar near a Ranthambore lake",
			width: 2048,
			height: 1365,
		},
		title: "Wild Boar",
		category: "Mammal",
		fameTag: "Near the lakes",
		description:
			"Frequently spotted near lakes — robust populations rooting through undergrowth year-round.",
		badge: "Lake Shores",
		href: "/about/flora-and-fauna",
	},
] as const;

function getVisibleCount(width: number) {
	if (width >= 1024) {
		return 3;
	}
	if (width >= 768) {
		return 2;
	}
	return 1;
}

export function PopularWildlifeSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [visibleCount, setVisibleCount] = useState(3);
	const [paused, setPaused] = useState(false);
	const viewportRef = useRef<HTMLDivElement>(null);
	const [viewportW, setViewportW] = useState(0);

	useEffect(() => {
		const el = viewportRef.current;
		if (!el) {
			return;
		}

		const observer = new ResizeObserver(([entry]) => {
			const width = entry.contentRect.width;
			setViewportW(width);
			setVisibleCount(getVisibleCount(width));
		});

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const cardWidth =
		visibleCount > 0 && viewportW > 0
			? (viewportW - GAP_PX * (visibleCount - 1)) / visibleCount
			: 0;
	const step = cardWidth + GAP_PX;
	const maxIndex = Math.max(0, POPULAR_ANIMALS.length - visibleCount);
	const offset = activeIndex * step;

	useEffect(() => {
		setActiveIndex((current) => Math.min(current, maxIndex));
	}, [maxIndex]);

	const canGoPrev = activeIndex > 0;
	const canGoNext = activeIndex < maxIndex;

	useInterval(
		() => {
			setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
		},
		paused || maxIndex === 0 || viewportW === 0 ? null : AUTO_ADVANCE_MS,
	);

	return (
		<section
			className="bg-sand-100 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Popular wildlife"
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
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="font-display text-xs uppercase tracking-display text-earth-700">
							Wildlife
						</p>
						<h2 className="mt-2 text-3xl text-charcoal-800 lg:text-4xl">
							Popular Animals in Ranthambore
						</h2>
						<p className="mt-4 max-w-lg font-body text-base text-charcoal-600">
							Meet the iconic species that call Ranthambore home — from Bengal
							tigers and leopards to crocodiles, deer, and rare gazelle.
						</p>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							aria-label="Previous animals"
							disabled={!canGoPrev}
							onClick={() => setActiveIndex((current) => current - 1)}
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:pointer-events-none disabled:opacity-40"
						>
							<ArrowLeft className="size-5" />
						</button>
						<button
							type="button"
							aria-label="Next animals"
							disabled={!canGoNext}
							onClick={() => setActiveIndex((current) => current + 1)}
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:pointer-events-none disabled:opacity-40"
						>
							<ArrowRight className="size-5" />
						</button>
					</div>
				</div>

				<div ref={viewportRef} className="mt-12 overflow-hidden">
					<motion.div
						className="flex gap-8"
						animate={{ x: -offset }}
						transition={{ type: "spring", stiffness: 260, damping: 36 }}
					>
						{POPULAR_ANIMALS.map((animal) => (
							<article
								key={animal.id}
								style={cardWidth > 0 ? { width: cardWidth } : undefined}
								className="flex shrink-0 flex-col overflow-hidden rounded-2xl bg-cream-100 shadow-sm ring-1 ring-muted-300"
							>
								<div className="relative aspect-4/3 w-full overflow-hidden">
									<Image
										src={animal.image.src}
										alt={animal.image.alt}
										width={animal.image.width}
										height={animal.image.height}
										className="absolute inset-0 h-full w-full object-cover"
									/>
								</div>

								<div className="flex flex-1 flex-col p-6">
									<h3 className="text-xl text-charcoal-800">{animal.title}</h3>

									<p className="mt-2">
										<span className="font-display text-xs font-bold uppercase tracking-display text-sunset-500">
											{animal.category}
										</span>
										<span className="ml-2 font-body text-sm text-charcoal-700">
											{animal.fameTag}
										</span>
									</p>

									<p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
										{animal.description}
									</p>

									<div className="mt-5">
										<span className="inline-block rounded bg-sunset-500/20 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-display text-sunset-700 ring-1 ring-sunset-500/30">
											{animal.badge}
										</span>
									</div>
								</div>
							</article>
						))}
					</motion.div>
				</div>

				<div className="mt-10 flex justify-center lg:justify-end">
					<Link
						to="/about/flora-and-fauna"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-tiger-700 transition-colors hover:text-tiger-800"
					>
						Explore Flora &amp; Fauna
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
