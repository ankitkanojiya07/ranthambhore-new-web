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
	eyebrow: string;
	title: React.ReactNode;
	subtitle?: string;
	image?: string;
	badge?: string;
	stats?: Stat[];
	intro?: string;
	introTitle?: string;
	sections: ContentBlock[];
	faqs?: FaqItem[];
	features?: WhyChooseFeature[];
	showWhyChoose?: boolean;
	imageOffset?: number;
	heroPrimaryCta?: { label: string; href: string };
	heroSecondaryCta?: { label: string; href: string };
}

export function GuidePage({
	eyebrow,
	title,
	subtitle,
	image,
	badge,
	stats,
	intro,
	introTitle,
	sections,
	faqs,
	features,
	showWhyChoose = true,
	imageOffset = 0,
	heroPrimaryCta = { label: "Book a Safari", href: "/safari/book" },
	heroSecondaryCta = { label: "Get Free Quote", href: "/contact" },
}: GuidePageProps) {
	return (
		<div className="bg-sand-50">
			<PageHero
				eyebrow={eyebrow}
				title={title}
				subtitle={subtitle}
				image={image}
				badge={badge}
				primaryCta={heroPrimaryCta}
				secondaryCta={heroSecondaryCta}
			/>
			{stats && stats.length > 0 && <StatsBanner stats={stats} />}
			{intro && (
				<IntroSection eyebrow="Overview" title={introTitle}>
					{intro}
				</IntroSection>
			)}
			<ContentSection blocks={sections} imageOffset={imageOffset} />
			{showWhyChoose && <WhyChooseSection features={features} />}
			{faqs && faqs.length > 0 && <FaqAccordion items={faqs} />}
		</div>
	);
}
