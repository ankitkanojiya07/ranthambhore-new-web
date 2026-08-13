import { createFileRoute } from "@tanstack/react-router";
import {
	homeRanthambhoreHighlightsQueryOptions,
	homeSafariHighlightsQueryOptions,
} from "#/components/daily-updates/queries/daily-updates.queries";
import { AboutSection } from "#/components/home/AboutSection";
import { ContactSection } from "#/components/home/ContactSection";
import { FaqSection } from "#/components/home/FaqSection";
// import { FeaturesSection } from "#/components/home/FeaturesSection";
import { HeroSection } from "#/components/home/HeroSection";
import { HowToReachSection } from "#/components/home/HowToReachSection";
import { PopularWildlifeSection } from "#/components/home/PopularWildlifeSection";
import { QuickLinksHighlightsSection } from "#/components/home/QuickLinksHighlightsSection";
import { SafariInformationSection } from "#/components/home/SafariInformationSection";
import { StaySection } from "#/components/home/StaySection";
import { TaglineSection } from "#/components/home/TaglineSection";
import { ThingsToDoSection } from "#/components/home/ThingsToDoSection";
export const Route = createFileRoute("/(main)/")({
	loader: ({ context: { queryClient } }) => {
		void queryClient.prefetchQuery(homeSafariHighlightsQueryOptions());
		void queryClient.prefetchQuery(homeRanthambhoreHighlightsQueryOptions());
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
		links: [
			{
				rel: "preload",
				href: "/hero/8.webp",
				as: "image",
				type: "image/webp",
				fetchpriority: "high",
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

			<PopularWildlifeSection />

			<SafariInformationSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />

			<ThingsToDoSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />

			<HowToReachSection />

			<StaySection />

			{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

			{/* <FeaturesSection /> */}

			{/* <div className="mx-auto max-w-5xl border-t border-muted-300" /> */}

			<ContactSection />

			<div className="mx-auto max-w-5xl border-t border-muted-300" />

			<FaqSection />
		</div>
	);
}
