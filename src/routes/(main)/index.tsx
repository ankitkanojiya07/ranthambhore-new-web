import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/home/AboutSection";
import { ContactSection } from "#/components/home/ContactSection";
import { FaqSection } from "#/components/home/FaqSection";
// import { FeaturesSection } from "#/components/home/FeaturesSection";
import { HeroSection } from "#/components/home/HeroSection";
import { NewsSection } from "#/components/home/NewsSection";
import { TaglineSection } from "#/components/home/TaglineSection";
import { ThingsToDoSection } from "#/components/home/ThingsToDoSection";
import { ZoneSection } from "#/components/home/ZoneSection";

export const Route = createFileRoute("/(main)/")({ component: Home });

function Home() {
	return (
		<div>
			<HeroSection />

			{/* <div className="mx-auto max-w-5xl my-10 border-t border-muted-300" /> */}

			<AboutSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />
			<TaglineSection />

			{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

			<NewsSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />

			<ThingsToDoSection />

			<ZoneSection />

			<div className="mx-auto max-w-7xl">
				{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

				{/* <FeaturesSection /> */}

				{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

				<ContactSection />

				<div className="mx-auto max-w-5xl border-t border-muted-300" />

				<FaqSection />
			</div>
		</div>
	);
}
