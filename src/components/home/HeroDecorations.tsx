import { motion } from "motion/react";

export function HeroDecorations() {
	return (
		<motion.img
				src="/leaf-prop-3.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute bottom-8 left-0 z-0 hidden w-[200px] select-none opacity-60 md:block"
				initial={{ y: 40, opacity: 0 }}
				animate={{ y: 0, opacity: 0.6 }}
				transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
			/>
	);
}
