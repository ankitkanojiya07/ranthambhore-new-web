import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useInterval } from "#/hooks/useInterval";
import { Image } from "#/util/Image";

const MotionImage = motion.create(Image);

const SLIDE_INTERVAL_MS = 5000;

export type HotelSlide = {
	src: string;
	alt: string;
};

interface HotelImageCarouselProps {
	slides: HotelSlide[];
	hotelName: string;
	className?: string;
}

export function HotelImageCarousel({
	slides,
	hotelName,
	className = "",
}: HotelImageCarouselProps) {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const goTo = (nextIndex: number) => setIndex(nextIndex);
	const prev = () =>
		setIndex((current) => (current - 1 + slides.length) % slides.length);
	const next = () => setIndex((current) => (current + 1) % slides.length);

	useInterval(
		() => setIndex((current) => (current + 1) % slides.length),
		paused || slides.length <= 1 ? null : SLIDE_INTERVAL_MS,
	);

	const slide = slides[index] ?? slides[0];

	if (!slide) {
		return null;
	}

	return (
		<section
			className={`group relative size-full ${className}`}
			aria-label={`${hotelName} photo gallery`}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					setPaused(false);
				}
			}}
		>
			<div className="relative aspect-4/3 size-full lg:aspect-auto lg:min-h-[300px]">
				<AnimatePresence>
					<MotionImage
						key={`${slide.src}-${index}`}
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

			{slides.length > 1 ? (
				<>
					<button
						type="button"
						onClick={prev}
						aria-label={`Previous ${hotelName} photo`}
						className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-900/55 text-sand-50 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
					>
						<ArrowLeft className="size-4" />
					</button>
					<button
						type="button"
						onClick={next}
						aria-label={`Next ${hotelName} photo`}
						className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-900/55 text-sand-50 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
					>
						<ArrowRight className="size-4" />
					</button>

					<div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2">
						{slides.map((item, slideIndex) => (
							<button
								key={item.src}
								type="button"
								aria-label={`Go to ${hotelName} photo ${slideIndex + 1}`}
								aria-current={slideIndex === index ? "true" : undefined}
								onClick={() => goTo(slideIndex)}
								className={`h-2 rounded-full transition-all ${
									slideIndex === index
										? "w-7 bg-sand-50"
										: "w-2 bg-sand-50/60 hover:bg-sand-50"
								}`}
							/>
						))}
					</div>
				</>
			) : null}
		</section>
	);
}
