import { motion } from "motion/react";

export function HeroContent() {
	return (
		<motion.div
			className="pt-8 text-center lg:pt-12"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
		>
			<p className="font-display text-4xl uppercase tracking-display text-charcoal-800 md:text-5xl lg:text-6xl">
				Welcome To
			</p>
		</motion.div>
	);
}
