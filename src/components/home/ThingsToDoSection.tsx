import {
	ArrowLeft,
	ArrowRight,
	Bird,
	Compass,
	type LucideIcon,
	PawPrint,
	Sailboat,
	Tent,
	TreePalm,
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

type Activity = {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	props_img: string;
};

const ACTIVITIES: Activity[] = [
	{
		id: "tiger-safari",
		title: "Ranthambore Tiger Safari",
		description:
			"Witness the beauty of Ranthambore's wildlife with our trusted Tiger Safari bookings.",
		icon: PawPrint,
		image: {
			src: "/gallery/14.jpg",
			alt: "Tiger walking through grasslands",
			width: 2048,
			height: 1365,
		},
		props_img: "/house.png",
	},
	{
		id: "jeep-safari",
		title: "Ranthambore Jeep Safari",
		description:
			"Experience the thrill of Ranthambore with our exclusive Jeep Safari. Limited seats left!",
		icon: Compass,
		image: {
			src: "/gallery/2.jpg",
			alt: "Jeep safari through the forest",
			width: 2048,
			height: 1093,
		},
		props_img: "/house.png",
	},
	{
		id: "canter-safari",
		title: "Ranthambore Canter Safari",
		description:
			"Explore Ranthambore in a budget-friendly Canter Safari. Perfect for groups and families.",
		icon: Bird,
		image: {
			src: "/gallery/3.jpg",
			alt: "Canter safari with group of visitors",
			width: 2048,
			height: 1381,
		},
		props_img: "/house.png",
	},
	{
		id: "boat-safari",
		title: "Chambal Boat Safari",
		description:
			"Sail through the calm Chambal River and spot gharials, crocodiles, and rare birds.",
		icon: Sailboat,
		image: {
			src: "/gallery/4.jpg",
			alt: "Boat safari on the Chambal River",
			width: 2048,
			height: 1480,
		},
		props_img: "/tiger-footstep.png",
	},
	{
		id: "hotels",
		title: "Ranthambore Hotels & Resorts",
		description:
			"Plan a comfortable stay near the jungle with our curated hotels and resorts.",
		icon: Tent,
		image: {
			src: "/gallery/5.jpg",
			alt: "Hotel resort near Ranthambore forest",
			width: 1365,
			height: 2048,
		},
		props_img: "/car.png",
	},
	{
		id: "tour-packages",
		title: "Ranthambore Tour Packages",
		description:
			"Complete Ranthambore Tour with all-inclusive safari, stay, and sightseeing covered.",
		icon: TreePalm,
		image: {
			src: "/gallery/6.jpg",
			alt: "Scenic view of Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
		props_img: "/tiger.png",
	},
];

const CARD_W = 300;
const GAP = 24;
const STEP = CARD_W + GAP;
const TOTAL_TRACK_W = ACTIVITIES.length * STEP - GAP;

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
	const next = () => setIndex((i) => Math.min(ACTIVITIES.length - 1, i + 1));

	return (
		<section
			className="overflow-hidden bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Things to Do"
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
						Things To Do In Ranthambhore
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="mt-3 font-display text-4xl font-normal uppercase tracking-display text-charcoal-900 lg:text-6xl"
					>
						What We Offer
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
							{ACTIVITIES.map((activity, i) => {
								const Icon = activity.icon;
								return (
									<motion.article
										key={activity.id}
										variants={itemVariants}
										className={`group relative w-[280px] shrink-0 lg:w-[300px] ${
											i % 2 === 0 ? "lg:-translate-y-8" : "lg:translate-y-8"
										}`}
									>
										{/* Image wrapper — the only clipped layer */}
										<div className="relative aspect-9/13 w-full overflow-hidden rounded-sm">
											<Image
												src={activity.image.src}
												alt={activity.image.alt}
												width={activity.image.width}
												height={activity.image.height}
												className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
											/>
											<div className="absolute inset-0 bg-charcoal-900/5 transition-colors duration-500 group-hover:bg-sand-50/45 group-focus-within:bg-sand-50/45" />

											<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
												<button
													type="button"
													className="scale-[0.92] rounded-full bg-forest-900 px-8 py-3 font-display text-xs uppercase tracking-display text-sand-50 transition-[transform,background-color] duration-300 ease-out group-hover:scale-100 group-focus-within:scale-100 hover:bg-forest-800"
												>
													Know More
												</button>
											</div>
										</div>

										{/* Icon circle — protrudes on the outer edge */}
										<div
											className={`absolute right-6 z-20 flex size-12 items-center justify-center rounded-full bg-sand-50 ${
												i % 2 === 0 ? "-bottom-6" : "-top-6"
											}`}
										>
											<Icon
												className="size-5 text-forest-900"
												strokeWidth={1.25}
											/>
										</div>

										{/* Cream label box — overlaps below the image */}
										<div className="absolute bottom-6 left-0 z-10 max-w-[80%] bg-sand-50 px-4 py-3 transition-[max-width] duration-300 ease-out group-hover:max-w-[88%] group-focus-within:max-w-[88%]">
											<h3 className="font-display text-sm uppercase leading-snug tracking-display text-charcoal-900 drop-shadow-sm">
												{activity.title}
											</h3>
											<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
												<p className="overflow-hidden font-body text-xs leading-relaxed text-charcoal-600 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
													<span className="mt-2 block">
														{activity.description}
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
							aria-label="Previous offerings"
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:cursor-not-allowed disabled:opacity-40"
						>
							<ArrowLeft className="size-5" />
						</button>
						<button
							type="button"
							onClick={next}
							disabled={!canNext}
							aria-label="Next offerings"
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800 disabled:cursor-not-allowed disabled:opacity-40"
						>
							<ArrowRight className="size-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
