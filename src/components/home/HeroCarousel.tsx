import { AnimatePresence, motion } from "motion/react";
import { Image } from "#/util/Image";

const MotionImage = motion.create(Image);

const HERO_IMAGES = [
	{
		src: "/hero/3.webp",
		alt: "Tigers roaming the forest path",
		width: 2048,
		height: 1365,
	},
	{
		src: "/hero/2.webp",
		alt: "Wildlife on a safari trail",
		width: 1280,
		height: 771,
	},
	{
		src: "/hero/1.webp",
		alt: "Tiger in the wild grasslands of Ranthambhore",
		width: 2048,
		height: 1365,
	},
	{
		src: "/hero/4.webp",
		alt: "Tiger approaching through dry grassland",
		width: 2048,
		height: 1093,
	},
];

export function HeroCarousel({ currentSlide }: { currentSlide: number }) {
	const image = HERO_IMAGES[currentSlide];

	return (
		<div
			className="hero-grunge-mask relative aspect-4/3 w-full lg:aspect-auto lg:h-[550px]"
			aria-live="polite"
		>
			<AnimatePresence>
				<MotionImage
					key={currentSlide}
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
					priority
					className="absolute inset-0 h-full w-full object-cover"
					fallback="vercel"
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
