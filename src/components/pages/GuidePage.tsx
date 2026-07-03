import type { ContentBlock } from "./ContentSection";
import { ContentSection } from "./ContentSection";
import type { FaqItem } from "./FaqAccordion";
import { FaqAccordion } from "./FaqAccordion";
import { IntroSection } from "./IntroSection";
import { PageHero } from "./PageHero";
import { StatsBanner } from "./StatsBanner";
import type { WhyChooseFeature } from "./WhyChooseSection";
import { WhyChooseSection } from "./WhyChooseSection";

interface Stat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

interface GuidePageProps {
	showHero?: boolean;
	eyebrow?: string;
	title?: React.ReactNode;
	subtitle?: string;
	image?: string | false;
	badge?: string;
	stats?: Stat[];
	statsSize?: "default" | "compact";
	intro?: string;
	introTitle?: string;
	sections: ContentBlock[];
	faqs?: FaqItem[];
	features?: WhyChooseFeature[];
	showWhyChoose?: boolean;
	imageOffset?: number;
	heroPrimaryCta?: { label: string; href: string };
	heroSecondaryCta?: { label: string; href: string };
	beforeSections?: React.ReactNode;
}

export function GuidePage({
	showHero = true,
	eyebrow = "",
	title = "",
	subtitle,
	image,
	badge,
	stats,
	statsSize,
	intro,
	introTitle,
	sections,
	faqs,
	features,
	showWhyChoose = true,
	imageOffset = 0,
	heroPrimaryCta = { label: "Book a Safari", href: "/safari/book" },
	heroSecondaryCta = { label: "Get Free Quote", href: "/contact" },
	beforeSections,
}: GuidePageProps) {
	return (
		<div className="bg-sand-50">
			{showHero && (
				<PageHero
					eyebrow={eyebrow}
					title={title}
					subtitle={subtitle}
					image={image}
					badge={badge}
					tall={image !== false}
					primaryCta={heroPrimaryCta}
					secondaryCta={heroSecondaryCta}
				/>
			)}
			{stats && stats.length > 0 && (
				<StatsBanner stats={stats} size={statsSize} />
			)}
			{intro && (
				<IntroSection eyebrow="Overview" title={introTitle}>
					{intro}
				</IntroSection>
			)}
			{beforeSections}
			<ContentSection
				blocks={sections}
				imageOffset={imageOffset}
				className={!showHero ? "pt-28 lg:pt-32" : undefined}
			/>
			{showWhyChoose && <WhyChooseSection features={features} />}
			{faqs && faqs.length > 0 && <FaqAccordion items={faqs} />}
		</div>
	);
}
