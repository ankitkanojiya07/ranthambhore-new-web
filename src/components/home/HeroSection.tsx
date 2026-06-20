import { useState } from "react";
import { HeroCarousel, SLIDE_COUNT } from "./HeroCarousel";
import { HeroContent } from "./HeroContent";
import { HeroScrollIndicator } from "./HeroScrollIndicator";
export function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<section
			className="relative min-h-[95dvh]  overflow-x-hidden bg-sand-50"
			aria-label="Hero"
		>
			<div className="mx-auto flex min-h-[90dvh] max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:gap-8 lg:px-4">
				<HeroContent
					currentSlide={currentSlide}
					totalSlides={SLIDE_COUNT}
					onDotClick={setCurrentSlide}
				/>

				<div className="relative w-full lg:w-[55%]">
					<HeroCarousel currentSlide={currentSlide} />
				</div>
			</div>

			<HeroScrollIndicator />
		</section>
	);
}
