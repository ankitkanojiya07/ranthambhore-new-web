import { useEffect, useState } from "react";
import { Image } from "#/util/Image";

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
	{
		src: "/hero/1.webp",
		alt: "Bengal tiger climbing through tree branches in Ranthambhore National Park",
	},
	{
		src: "/hero/t1.webp",
		alt: "Bengal tiger climbing through tree branches in Ranthambhore National Park",
	},
] as const;

const SLIDE_INTERVAL_MS = 8000;
const SLIDE_START_DELAY_MS = 8000;

export function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (media.matches) {
			return;
		}

		let intervalId = 0;
		const timeoutId = window.setTimeout(() => {
			intervalId = window.setInterval(() => {
				setIndex((current) => (current + 1) % HERO_SLIDES.length);
			}, SLIDE_INTERVAL_MS);
		}, SLIDE_START_DELAY_MS);

		return () => {
			window.clearTimeout(timeoutId);
			window.clearInterval(intervalId);
		};
	}, []);

	const slide = HERO_SLIDES[index] ?? HERO_SLIDES[0];

	return (
		<div className="relative size-full bg-tiger-100">
			<Image
				key={slide.src}
				src={slide.src}
				alt={slide.alt}
				width={1200}
				height={1200}
				priority={index === 0}
				className="absolute inset-0 size-full object-cover"
			/>
		</div>
	);
}
