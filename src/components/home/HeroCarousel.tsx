import { AnimatePresence, motion } from "motion/react";

const HERO_IMAGES = [
	{ src: "/hero/3.webp", alt: "Tigers roaming the forest path" },
	{ src: "/hero/2.webp", alt: "Wildlife on a safari trail" },
	{ src: "/hero/1.webp", alt: "Tiger in the wild grasslands of Ranthambhore" },
	{ src: "/hero/4.webp", alt: "Tiger approaching through dry grassland" },
];

export function HeroCarousel({ currentSlide }: { currentSlide: number }) {
	const image = HERO_IMAGES[currentSlide];

	return (
		<div
			className="hero-grunge-mask relative aspect-4/3 w-full lg:aspect-auto lg:h-[600px]"
			aria-live="polite"
		>
			<AnimatePresence>
				<motion.img
					key={currentSlide}
					src={image.src}
					alt={image.alt}
					className="absolute inset-0 h-full w-full object-cover"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				/>
			</AnimatePresence>
		</div>
	);
}

export const SLIDE_COUNT = HERO_IMAGES.length;
