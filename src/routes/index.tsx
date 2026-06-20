import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/home/AboutSection";
import { HeroSection } from "#/components/home/HeroSection";
import { NewsSection } from "#/components/home/NewsSection";
import { ThingsToDoSection } from "#/components/home/ThingsToDoSection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="mx-auto max-w-7xl bg-sand-50">
			<HeroSection />

			{/* Section divider */}
			<div className="mx-auto max-w-5xl border-t border-earth-200" />

			<AboutSection />

			<div className="mx-auto max-w-5xl border-t border-earth-200" />

			<NewsSection />

			<div className="mx-auto max-w-5xl border-t border-earth-200" />

			<ThingsToDoSection />
		</div>
	);
}
