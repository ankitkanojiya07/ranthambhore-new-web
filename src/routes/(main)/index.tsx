import { createFileRoute } from "@tanstack/react-router";
import { homeSafariHighlightsQueryOptions } from "#/components/daily-updates/queries/daily-updates.queries";
import { AboutSection } from "#/components/home/AboutSection";
import { ContactSection } from "#/components/home/ContactSection";
import { FaqSection } from "#/components/home/FaqSection";
// import { FeaturesSection } from "#/components/home/FeaturesSection";
import { HeroSection } from "#/components/home/HeroSection";
import { NewsSection } from "#/components/home/NewsSection";
import { QuickLinksHighlightsSection } from "#/components/home/QuickLinksHighlightsSection";
import { TaglineSection } from "#/components/home/TaglineSection";
import { ThingsToDoSection } from "#/components/home/ThingsToDoSection";
import { ZoneSection } from "#/components/home/ZoneSection";

export const Route = createFileRoute("/(main)/")({
	loader: async ({ context: { queryClient } }) => {
		await queryClient.ensureQueryData(homeSafariHighlightsQueryOptions());
	},
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari & Tiger Reserve | Book Jeep Safari | Ranthambhor.com",
			},
			{
				name: "description",
				content:
					"Plan your Ranthambore trip with expert help. Book jeep & canter safaris, find top hotels, and explore India's most famous tiger reserve in Rajasthan.",
			},
		],
	}),
	component: Home,
});

function Home() {
	return (
		<div>
			<HeroSection />

			<QuickLinksHighlightsSection />

			<AboutSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />
			<TaglineSection />

			{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

			<NewsSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />

			<ThingsToDoSection />

			<ZoneSection />

			{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

			{/* <FeaturesSection /> */}

			{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

			<ContactSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />

			<FaqSection />
		</div>
	);
}
