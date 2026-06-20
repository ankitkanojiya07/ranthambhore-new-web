import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";

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

const NEWS_ARTICLES = [
	{
		id: "tiger-cubs",
		image: { src: "/hero/1.webp", alt: "Tiger with cubs in the wild" },
		title: "Tiger T-109 Spotted With Three New Cubs in Zone 6",
		category: "Wildlife",
		date: "June 15, 2026",
		description:
			"Park rangers confirmed the sighting of tigress T-109 with three healthy cubs near Rajbagh lake, marking a successful breeding season for the reserve.",
		badge: "Ranthambhore",
	},
	{
		id: "conservation-award",
		image: {
			src: "/hero/2.webp",
			alt: "Wildlife on a safari trail in Ranthambhore",
		},
		title: "Ranthambhore Wins National Award for Conservation Excellence",
		category: "Conservation",
		date: "May 28, 2026",
		description:
			"The national park has been recognised for its outstanding efforts in tiger population recovery, habitat restoration, and community-led conservation programmes.",
		badge: "National Park",
	},
	{
		id: "migratory-birds",
		image: {
			src: "/hero/3.webp",
			alt: "Tigers roaming the forest path",
		},
		title: "Migratory Birds Return Early to Padam Talao This Season",
		category: "Birdwatching",
		date: "May 10, 2026",
		description:
			"Over 40 species of migratory birds have arrived at Padam Talao weeks ahead of schedule, delighting birdwatchers and researchers visiting the park.",
		badge: "Padam Talao",
	},
];

export function NewsSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="News"
		>
			<div className="mx-auto max-w-7xl">
				{/* Header row */}
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="font-display text-xs uppercase tracking-display text-earth-400">
							Latest News From Ranthambhore
						</p>
						<h2 className="mt-2 text-3xl text-charcoal-800 lg:text-4xl">
							Wildlife Stories & Conservation Updates
						</h2>
						<p className="mt-4 max-w-lg font-body text-base text-charcoal-600">
							Stay informed about the latest tiger sightings, conservation
							milestones, and seasonal highlights from Ranthambhore National
							Park.
						</p>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							aria-label="Previous articles"
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800"
						>
							<ArrowLeft className="size-5" />
						</button>
						<button
							type="button"
							aria-label="Next articles"
							className="flex size-11 items-center justify-center rounded-full border border-charcoal-300 text-charcoal-700 transition-colors hover:border-charcoal-800 hover:text-charcoal-800"
						>
							<ArrowRight className="size-5" />
						</button>
					</div>
				</div>

				{/* Cards grid */}
				<motion.div
					className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{NEWS_ARTICLES.map((article) => (
						<motion.article
							key={article.id}
							variants={itemVariants}
							className="flex flex-col"
						>
							<div className="hero-grunge-mask relative aspect-4/3 w-full">
								<img
									src={article.image.src}
									alt={article.image.alt}
									className="absolute inset-0 h-full w-full object-cover"
								/>
							</div>

							<div className="mt-5 flex flex-1 flex-col">
								<h3 className="text-xl text-charcoal-800">{article.title}</h3>

								<p className="mt-2">
									<span className="font-display text-xs font-bold uppercase tracking-display text-sunset-500">
										{article.category}
									</span>
									<span className="ml-2 font-body text-sm text-charcoal-500">
										{article.date}
									</span>
								</p>

								<p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
									{article.description}
								</p>

								<div className="mt-5 flex items-center justify-between gap-4">
									<span className="inline-block rounded bg-sunset-500 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-display text-white">
										{article.badge}
									</span>
									<button
										type="button"
										className="inline-flex items-center gap-2 border border-charcoal-800 px-5 py-2.5 font-display text-xs uppercase tracking-display text-charcoal-800 transition-colors hover:bg-charcoal-800 hover:text-sand-50"
									>
										<FileText className="size-3.5" />
										Read More
									</button>
								</div>
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
