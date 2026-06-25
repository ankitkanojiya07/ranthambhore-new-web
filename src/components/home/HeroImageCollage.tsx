import { motion } from "motion/react";
import { Image } from "#/util/Image";

export function HeroImageCollage() {
	return (
		<div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
			{/* Arch background — peeks above and right of the clover */}
			<motion.div
				className="absolute left-[55%] top-[-15%] h-[110%] w-[50%] -translate-x-1/2 rounded-t-full bg-sand-200"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.8 }}
			/>

			{/* Masked image using the clover frame */}
			<motion.div
				className="hero-frame-mask relative z-10 aspect-square w-full"
				initial={{ opacity: 0, scale: 0.92 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
			>
				<Image
					src="/hero/1.webp"
					alt="Tiger in the wild grasslands of Ranthambhore"
					className="h-full w-full object-cover"
				/>
			</motion.div>
		</div>
	);
}
