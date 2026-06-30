import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Image } from "#/util/Image";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
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

const POPULAR_ANIMALS = [
	{
		id: "bengal-tiger",
		image: {
			src: "/hero/1.webp",
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
		href: "/wildlife/tigers",
	},
	{
		id: "leopard",
		image: {
			src: "/Home/leo.jpg",
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
		href: "/wildlife/mammals",
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
		href: "/wildlife/mammals",
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
		href: "/wildlife/mammals",
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
		href: "/wildlife/mammals",
	},
	{
		id: "marsh-crocodile",
		image: {
			src: "/Home/croc.jpg",
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
		href: "/wildlife/reptiles-and-amphibians",
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
		href: "/wildlife/mammals",
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
		href: "/wildlife/mammals",
	},
] as const;

function getItemsPerPage(width: number) {
	if (width >= 1024) {
		return 3;
	}
	if (width >= 768) {
		return 2;
	}
	return 1;
}

export function PopularWildlifeSection() {
	const [pageIndex, setPageIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	useEffect(() => {
		const updateItemsPerPage = () => {
			setItemsPerPage(getItemsPerPage(window.innerWidth));
		};

		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);
		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const totalPages = Math.ceil(POPULAR_ANIMALS.length / itemsPerPage);

	useEffect(() => {
		setPageIndex((current) => Math.min(current, Math.max(0, totalPages - 1)));
	}, [totalPages]);

	const visibleAnimals = useMemo(() => {
		const start = pageIndex * itemsPerPage;
		return POPULAR_ANIMALS.slice(start, start + itemsPerPage);
	}, [pageIndex, itemsPerPage]);

	const canGoPrev = pageIndex > 0;
	const canGoNext = pageIndex < totalPages - 1;

	return (
		<section
			className="bg-sand-100 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Popular wildlife"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="font-display text-xs uppercase tracking-display text-earth-400">
							Wildlife
						</p>
						<h2 className="mt-2 text-3xl text-charcoal-800 lg:text-4xl">
							Popular Animals in Ranthambore
						</h2>
						<p className="mt-4 max-w-lg font-body text-base text-charcoal-600">
							Meet the iconic species that call Ranthambore home — from Bengal
							tigers and leopards to crocodiles, deer, and rare gazelles.
						</p>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							aria-label="Previous animals"
							disabled={!canGoPrev}
							onClick={() => setPageIndex((current) => current - 1)}
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:pointer-events-none disabled:opacity-40"
						>
							<ArrowLeft className="size-5" />
						</button>
						<button
							type="button"
							aria-label="Next animals"
							disabled={!canGoNext}
							onClick={() => setPageIndex((current) => current + 1)}
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:pointer-events-none disabled:opacity-40"
						>
							<ArrowRight className="size-5" />
						</button>
					</div>
				</div>

				<motion.div
					key={`${pageIndex}-${itemsPerPage}`}
					className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{visibleAnimals.map((animal) => (
						<motion.article
							key={animal.id}
							variants={itemVariants}
							className="flex flex-col overflow-hidden rounded-2xl bg-cream-100 shadow-sm ring-1 ring-muted-300"
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
									<span className="ml-2 font-body text-sm text-charcoal-500">
										{animal.fameTag}
									</span>
								</p>

								<p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
									{animal.description}
								</p>

								<div className="mt-5 flex items-center justify-between gap-4">
									<span className="inline-block rounded bg-sunset-500/20 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-display text-sunset-700 ring-1 ring-sunset-500/30">
										{animal.badge}
									</span>
									<Link
										to={animal.href}
										className="inline-flex items-center gap-2 border border-charcoal-800 px-5 py-2.5 font-display text-xs uppercase tracking-display text-charcoal-800 transition-colors hover:bg-charcoal-800 hover:text-sand-50"
									>
										<FileText className="size-3.5" />
										Read More
									</Link>
								</div>
							</div>
						</motion.article>
					))}
				</motion.div>

				<div className="mt-10 flex justify-center lg:justify-end">
					<Link
						to="/wildlife"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700"
					>
						Explore Full Wildlife Guide
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
