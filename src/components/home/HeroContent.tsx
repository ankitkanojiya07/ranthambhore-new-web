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

const DOTS = [
	{ id: "dot-1", index: 0 },
	{ id: "dot-2", index: 1 },
	{ id: "dot-3", index: 2 },
	{ id: "dot-4", index: 3 },
];

interface HeroContentProps {
	currentSlide: number;
	totalSlides: number;
	onDotClick: (index: number) => void;
}

export function HeroContent({
	currentSlide,
	totalSlides,
	onDotClick,
}: HeroContentProps) {
	return (
		<motion.div
			className="relative z-10 w-full py-8 lg:w-[45%] lg:py-0"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.p
				className="font-display text-sm uppercase tracking-display text-forest-500"
				variants={itemVariants}
			>
				Into the wild 365 welcomes you to
			</motion.p>

			<motion.h1
				className="mt-4 text-5xl text-charcoal-800 md:text-6xl lg:text-7xl"
				variants={itemVariants}
			>
				Experience
				<br />
				<span className="font-extrabold">Wildlife Safari</span>
			</motion.h1>

			<motion.p
				className="mt-6 max-w-md font-body text-lg text-charcoal-600"
				variants={itemVariants}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
				suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
				lacus vel facilisis.
			</motion.p>

			<motion.div className="mt-8" variants={itemVariants}>
				<button
					type="button"
					className="rounded border-2 border-sunset-400 bg-sunset-500 px-8 py-3 font-display text-sm uppercase tracking-nav text-white transition-colors hover:bg-sunset-600"
				>
					Book Your Safari
				</button>
			</motion.div>

			<motion.div className="mt-8 flex gap-2.5" variants={itemVariants}>
				{DOTS.slice(0, totalSlides).map((dot) => (
					<button
						key={dot.id}
						type="button"
						onClick={() => onDotClick(dot.index)}
						aria-label={`Go to slide ${dot.index + 1}`}
						aria-current={dot.index === currentSlide ? "true" : undefined}
						className={`h-3 w-3 rounded-full transition-colors ${
							dot.index === currentSlide
								? "bg-charcoal-800"
								: "border border-charcoal-400 bg-transparent"
						}`}
					/>
				))}
			</motion.div>
		</motion.div>
	);
}
