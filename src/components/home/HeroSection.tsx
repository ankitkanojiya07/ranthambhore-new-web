import { useState } from "react";
import { HeroCarousel, SLIDE_COUNT } from "./HeroCarousel";
import { HeroContent } from "./HeroContent";
export function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<section
			className="relative min-h-screen overflow-hidden bg-sand-50"
			aria-label="Hero"
		>
			<div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center px-6 lg:flex-row lg:gap-8 lg:px-8">
				<HeroContent
					currentSlide={currentSlide}
					totalSlides={SLIDE_COUNT}
					onDotClick={setCurrentSlide}
				/>

				<div className="relative w-full lg:w-[55%]">
					<HeroCarousel currentSlide={currentSlide} />
				</div>
			</div>
		</section>
	);
}
