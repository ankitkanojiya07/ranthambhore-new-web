import { useEffect, useState } from "react";
import { Image } from "#/util/Image";

const HERO_SLIDES: { src: string; srcSet?: string; alt: string }[] = [
	// {
	// 	src: "/hero/8-640.webp",
	// 	srcSet: "/hero/8-640.webp 640w, /hero/8.webp 1200w",
	// 	alt: "Tiger portrait in dramatic golden light at Ranthambhore",
	// },
	{
		src: "/hero/16.webp",
		alt: "Bengal tiger emerging from tall grass in Ranthambhore",
	},
	{
		src: "/hero/15.jpg",
		alt: "Bengal tiger emerging from tall grass in Ranthambhore",
	},
	{
		src: "/hero/14.jpg",
		alt: "Bird silhouetted against an amber sunset sky in the wild",
	},
	{
		src: "/hero/12.webp",
		alt: "Ranthambhore wildlife",
	},
	{
		src: "/hero/13.webp",
		alt: "Wildlife in Ranthambhore National Park",
	},
];

const SLIDE_INTERVAL_MS = 8000;

export function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (media.matches) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setIndex((current) => (current + 1) % HERO_SLIDES.length);
		}, SLIDE_INTERVAL_MS);

		return () => window.clearInterval(intervalId);
	}, []);

	const slide = HERO_SLIDES[index] ?? HERO_SLIDES[0];

	return (
		<div className="absolute inset-0 bg-charcoal-950">
			<Image
				key={slide.src}
				src={slide.src}
				srcSet={slide.srcSet}
				sizes="100vw"
				alt={slide.alt}
				width={1920}
				height={1080}
				priority={index === 0}
				className="absolute inset-0 size-full object-cover"
			/>
			<nav
				className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2"
				aria-label="Hero slides"
			>
				{HERO_SLIDES.map((item, slideIndex) => (
					<button
						key={item.src}
						type="button"
						className="group flex h-6 w-4 items-center justify-center"
						aria-label={`Show slide ${slideIndex + 1}`}
						aria-current={slideIndex === index ? "true" : undefined}
						onClick={() => setIndex(slideIndex)}
					>
						<span
							className={`h-1 rounded-full transition-all ${
								slideIndex === index
									? "w-7 bg-sand-50"
									: "w-2 bg-sand-50/55 group-hover:bg-sand-50/80"
							}`}
						/>
					</button>
				))}
			</nav>
		</div>
	);
}
