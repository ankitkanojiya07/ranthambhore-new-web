import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowRight,
	Building2,
	Castle,
	Church,
	Landmark,
	Library,
	type LucideIcon,
	Mountain,
	Waves,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Image } from "#/util/Image";

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

type Attraction = {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	href: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};

const ATTRACTIONS: Attraction[] = [
	{
		id: "ranthambore-fort",
		title: "Ranthambore Fort",
		description:
			"10th-century Chauhan fort, UNESCO World Heritage Site, panoramic views over the jungle.",
		icon: Castle,
		href: "/about/fort",
		image: {
			src: "/gallery/7.jpg",
			alt: "Ranthambore Fort overlooking the national park",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "trinetra-ganesh-temple",
		title: "Trinetra Ganesh Temple",
		description:
			"Only temple where Lord Ganesha is seen with his complete family; inside the Fort, built in 1300 AD.",
		icon: Church,
		href: "/about/temples-and-museums",
		image: {
			src: "/gallery/8.jpg",
			alt: "Trinetra Ganesh Temple inside Ranthambore Fort",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "padam-talao",
		title: "Padam Talao",
		description:
			"Largest lake in the park, covered in water lilies, prime tiger and crocodile sighting location.",
		icon: Waves,
		href: "/about/national-park",
		image: {
			src: "/gallery/9.jpg",
			alt: "Padam Talao lake with water lilies in Ranthambore",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "raj-bagh-ruins",
		title: "Raj Bagh Ruins",
		description:
			"Ancient palace outhouses, arches and domes set beside a lake — tigers frequently rest among the ruins.",
		icon: Landmark,
		href: "/safari/zones",
		image: {
			src: "/gallery/10.jpg",
			alt: "Raj Bagh ruins beside a lake in Ranthambore",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "rajbagh-talao",
		title: "Rajbagh Talao",
		description:
			"Most famous lake for tiger sightings; deer and predators create natural dramas here.",
		icon: Waves,
		href: "/safari/zones",
		image: {
			src: "/gallery/11.jpg",
			alt: "Rajbagh Talao lake in Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "malik-talao",
		title: "Malik Talao",
		description:
			"Smallest of the three lakes, rich in marsh crocodiles, kingfishers, and wading birds.",
		icon: Waves,
		href: "/safari/zones",
		image: {
			src: "/gallery/12.jpg",
			alt: "Malik Talao with wading birds and crocodiles",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "jogi-mahal",
		title: "Jogi Mahal",
		description:
			"Historic royal hunting lodge beside Padam Talao; second-largest banyan tree in India nearby.",
		icon: Building2,
		href: "/safari/zones",
		image: {
			src: "/gallery/13.jpg",
			alt: "Jogi Mahal hunting lodge beside Padam Talao",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "kachida-valley",
		title: "Kachida Valley",
		description:
			"Valley known for sunrise views, leopard sightings, and sloth bears at the park's edge.",
		icon: Mountain,
		href: "/safari/zones",
		image: {
			src: "/gallery/14.jpg",
			alt: "Kachida Valley rocky terrain in Ranthambore",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "rajiv-gandhi-museum",
		title: "Rajiv Gandhi Regional Museum",
		description:
			"Natural history museum in Ramsinghpura village — wildlife, biodiversity, and Rajasthan heritage.",
		icon: Library,
		href: "/about/temples-and-museums",
		image: {
			src: "/gallery/1.jpg",
			alt: "Rajiv Gandhi Regional Museum of Natural History",
			width: 2048,
			height: 1365,
		},
	},
];

const CARD_W = 300;
const GAP = 24;
const STEP = CARD_W + GAP;
const TOTAL_TRACK_W = ATTRACTIONS.length * STEP - GAP;

export function ThingsToDoSection() {
	const [index, setIndex] = useState(0);
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

	return (
		<section
			className="overflow-hidden bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Top tourist attractions in Ranthambore"
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

											<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
												<Link
													to={attraction.href}
													className="scale-[0.92] rounded-full bg-tiger-900 px-8 py-3 font-display text-xs uppercase tracking-display text-sand-50 transition-[transform,background-color] duration-300 ease-out group-hover:scale-100 group-focus-within:scale-100 hover:bg-tiger-800"
												>
													Know More
												</Link>
											</div>
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
												<p className="overflow-hidden font-body text-xs leading-relaxed text-charcoal-600 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
													<span className="mt-2 block">
														{attraction.description}
													</span>
												</p>
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
						to="/about/fort"
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
