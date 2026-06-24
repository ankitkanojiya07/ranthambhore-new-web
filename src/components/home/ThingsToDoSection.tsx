import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Image } from "#/util/Image";

const MotionImage = motion.create(Image);

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

const ACTIVITIES = [
	{
		id: "tiger-safari",
		title: "Ranthambore Tiger Safari",
		description:
			"Witness the beauty of Ranthambore's wildlife with our trusted Tiger Safari bookings.",
		image: {
			src: "/gallery/14.jpg",
			alt: "Tiger walking through grasslands",
			width: 2048,
			height: 1365,
		},
	},
	{
		id: "jeep-safari",
		title: "Ranthambore Jeep Safari",
		description:
			"Experience the thrill of Ranthambore with our exclusive Jeep Safari. Limited seats left!",
		image: {
			src: "/gallery/2.jpg",
			alt: "Jeep safari through the forest",
			width: 2048,
			height: 1093,
		},
	},
	{
		id: "canter-safari",
		title: "Ranthambore Canter Safari",
		description:
			"Explore Ranthambore in a budget-friendly Canter Safari. Perfect for groups and families.",
		image: {
			src: "/gallery/3.jpg",
			alt: "Canter safari with group of visitors",
			width: 2048,
			height: 1381,
		},
	},
	{
		id: "boat-safari",
		title: "Chambal Boat Safari",
		description:
			"Sail through the calm Chambal River and spot gharials, crocodiles, and rare birds.",
		image: {
			src: "/gallery/4.jpg",
			alt: "Boat safari on the Chambal River",
			width: 2048,
			height: 1480,
		},
	},
	{
		id: "hotels",
		title: "Ranthambore Hotels & Resorts",
		description:
			"Plan a comfortable stay near the jungle with our curated hotels and resorts.",
		image: {
			src: "/gallery/5.jpg",
			alt: "Hotel resort near Ranthambore forest",
			width: 1365,
			height: 2048,
		},
	},
	{
		id: "tour-packages",
		title: "Ranthambore Tour Packages",
		description:
			"Complete Ranthambore Tour with all-inclusive safari, stay, and sightseeing covered.",
		image: {
			src: "/gallery/6.jpg",
			alt: "Scenic view of Ranthambore National Park",
			width: 2048,
			height: 1365,
		},
	},
];

export function ThingsToDoSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const active = ACTIVITIES[activeIndex];

	return (
		<section
			className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Things to Do"
		>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.p
						variants={itemVariants}
						className="font-display text-xs uppercase tracking-display text-earth-400"
					>
						Things To Do In Ranthambhore
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="mt-2 text-3xl text-charcoal-800 lg:text-4xl"
					>
						Choose Your Adventure
						<br />
						Tour Type With Us
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="mt-4 max-w-xl font-body text-base text-charcoal-600"
					>
						From thrilling tiger safaris to serene boat rides on the Chambal
						River, discover the best experiences Ranthambhore has to offer.
					</motion.p>
				</motion.div>

				{/* Bento layout */}
				<div className="mt-12 flex flex-col gap-5 lg:flex-row">
					{/* Featured card — left */}
					<motion.article
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						className="relative overflow-hidden rounded-2xl lg:w-[42%] lg:shrink-0"
					>
						<div className="relative h-full min-h-96">
							<AnimatePresence mode="wait">
								<MotionImage
									key={active.id}
									src={active.image.src}
									alt={active.image.alt}
									width={active.image.width}
									height={active.image.height}
									className="absolute inset-0 h-full w-full object-cover"
									initial={{ opacity: 0, scale: 1.05 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.98 }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
								/>
							</AnimatePresence>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

							<span className="absolute right-5 top-5 font-display text-8xl font-bold leading-none text-white/10">
								{String(activeIndex + 1).padStart(2, "0")}
							</span>

							<div className="relative flex h-full min-h-96 flex-col justify-end p-6 lg:p-8">
								<AnimatePresence mode="wait">
									<motion.div
										key={active.id}
										initial={{ opacity: 0, y: 15 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.35, ease: "easeOut" }}
									>
										<h3 className="font-display text-2xl uppercase tracking-display text-white lg:text-3xl">
											{active.title}
										</h3>
										<p className="mt-3 max-w-md font-body text-sm leading-relaxed text-sand-200">
											{active.description}
										</p>
										<button
											type="button"
											className="mt-5 rounded bg-sunset-500 px-7 py-3 font-display text-xs uppercase tracking-display text-white transition-colors hover:bg-sunset-600"
										>
											Know More
										</button>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</motion.article>

					{/* Small cards — right, 3×2 grid */}
					<motion.div
						className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						{ACTIVITIES.map((activity, i) => (
							<motion.button
								key={activity.id}
								type="button"
								variants={itemVariants}
								onMouseEnter={() => setActiveIndex(i)}
								onClick={() => setActiveIndex(i)}
								className={`group relative rounded-2xl text-left overflow-hidden shadow transition-colors duration-300 ${
									i === activeIndex && "border-sunset-500 border-2"
								}`}
							>
								<div className="relative size-full overflow-hidden rounded-xl">
									<Image
										src={activity.image.src}
										alt={activity.image.alt}
										layout="constrained"
										width={activity.image.width}
										height={activity.image.height}
										className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										fallback="vercel"
									/>
									<div
										className={`absolute inset-0 transition-colors duration-300 ${
											i === activeIndex
												? "bg-linear-to-t from-sunset-900/70 via-sunset-900/20 to-transparent"
												: "bg-linear-to-t from-black/60 via-black/10 to-transparent"
										}`}
									/>

									<span className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full bg-white/20 font-display text-xs font-semibold text-white backdrop-blur-sm">
										{String(i + 1).padStart(2, "0")}
									</span>

									<div className="absolute inset-x-0 bottom-0 p-3">
										<h3 className="font-display text-xs uppercase tracking-display text-white drop-shadow-md lg:text-sm">
											{activity.title}
										</h3>
									</div>
								</div>
							</motion.button>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
