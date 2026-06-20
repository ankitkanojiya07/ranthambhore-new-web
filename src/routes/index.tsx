import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/home/AboutSection";
import { HeroSection } from "#/components/home/HeroSection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="bg-sand-50 max-w-7xl mx-auto">
			<HeroSection />

			{/* Section divider */}
			<div className="mx-auto max-w-5xl border-t border-earth-200" />

			<AboutSection />
		</div>
	);
}
