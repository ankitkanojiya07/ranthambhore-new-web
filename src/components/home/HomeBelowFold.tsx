import { AboutSection } from "#/components/home/AboutSection";
import { ContactSection } from "#/components/home/ContactSection";
import { FaqSection } from "#/components/home/FaqSection";
import { HowToReachSection } from "#/components/home/HowToReachSection";
import { PopularWildlifeSection } from "#/components/home/PopularWildlifeSection";
import { QuickLinksHighlightsSection } from "#/components/home/QuickLinksHighlightsSection";
import { SafariInformationSection } from "#/components/home/SafariInformationSection";
import { StaySection } from "#/components/home/StaySection";
import { TaglineSection } from "#/components/home/TaglineSection";
import { ThingsToDoSection } from "#/components/home/ThingsToDoSection";

export function HomeBelowFold() {
	return (
		<>
			<QuickLinksHighlightsSection />
			<AboutSection />
			<div className="mx-auto max-w-5xl border-t border-muted-300" />
			<TaglineSection />
			<PopularWildlifeSection />
			<SafariInformationSection />
			<div className="mx-auto max-w-5xl border-t border-muted-300" />
			<ThingsToDoSection />
			<div className="mx-auto max-w-5xl border-t border-muted-300" />
			<HowToReachSection />
			<StaySection />
			<ContactSection />
			<div className="mx-auto max-w-5xl border-t border-muted-300" />
			<FaqSection />
		</>
	);
}
