import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Image } from "#/util/Image";

const MotionImage = motion.create(Image);

const HERO_SLIDES = [
	{
		src: "/hero/8.webp",
		alt: "Tiger portrait in dramatic golden light at Ranthambhore",
	},
	{
		src: "/hero/9.webp",
		alt: "Bengal tiger emerging from tall grass in Ranthambhore",
	},
	{
		src: "/hero/10.webp",
		alt: "Bird silhouetted against an amber sunset sky in the wild",
	},
	{
		src: "/hero/11.jpg",
		alt: "Bengal tiger climbing through tree branches in Ranthambhore National Park",
	},
	// {
	// 	src: "/hero/11.jpg",
	// 	alt: "Bengal tiger climbing through tree branches in Ranthambhore National Park",
	// },
	{
		src: "/hero/1.webp",
		alt: "Bengal tiger climbing through tree branches in Ranthambhore National Park",
	},
	{
		src: "/hero/t1.webp",
		alt: "Bengal tiger climbing through tree branches in Ranthambhore National Park",
	},
] as const;

const SLIDE_INTERVAL_MS = 5000;

export function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((current) => (current + 1) % HERO_SLIDES.length);
		}, SLIDE_INTERVAL_MS);

		return () => clearInterval(timer);
	}, []);

	const slide = HERO_SLIDES[index];

	return (
		<div className="relative size-full">
			<AnimatePresence>
				<MotionImage
					key={slide.src}
					src={slide.src}
					alt={slide.alt}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.9, ease: "easeInOut" }}
					className="absolute inset-0 size-full object-cover"
				/>
			</AnimatePresence>
		</div>
	);
}
