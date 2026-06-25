import { motion } from "motion/react";

export function HeroScrollIndicator() {
	const scrollToContent = () => {
		document
			.getElementById("home-content")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<motion.button
			type="button"
			onClick={scrollToContent}
			className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center pb-0"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
			aria-label="Scroll to content below"
		>
			<p className="font-display text-center text-sm font-semibold uppercase tracking-display text-earth-500">
				Your Journey
				<br />
				Starts Below
			</p>

			<div
				className="mt-3 h-2.5 w-2.5 rotate-45 border border-earth-500"
				aria-hidden="true"
			/>

			<div className="mt-1 h-20 w-px bg-earth-500" aria-hidden="true" />
		</motion.button>
	);
}
