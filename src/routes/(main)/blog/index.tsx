import { createFileRoute } from "@tanstack/react-router";
import { ContentSection } from "#/components/pages/ContentSection";
import { IntroSection } from "#/components/pages/IntroSection";
import { PageHero } from "#/components/pages/PageHero";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/blog/")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Wildlife Blog | Tiger Stories, Safari Reports & Photography Journals",
			},
			{
				name: "description",
				content:
					"Read first-hand safari reports, tiger encounter stories, photography tips, and conservation news from Ranthambore National Park on the Ranthambhor.com blog.",
			},
		],
	}),
	component: BlogPage,
});

function BlogPage() {
	return (
		<div className="bg-sand-50">
			<PageHero
				eyebrow="Blog / Stories"
				title="Wildlife Stories"
				subtitle="Safari reports, tiger encounters, photography journals, and conservation news from Ranthambore."
				image="/gallery/14.jpg"
				badge="Coming Soon"
				primaryCta={{ label: "Contact Us", href: "/contact" }}
				secondaryCta={{ label: "Book a Safari", href: "/safari/book" }}
			/>

			<IntroSection eyebrow="Editorial" title="Stories From Tiger Country">
				A blog is one of the most powerful tools for organic SEO growth. Fresh,
				human-written content about recent tiger sightings, safari experiences,
				seasonal guides, and conservation news will drive consistent search
				traffic and build authority for ranthambhor.com. We&apos;re preparing
				our first stories — here&apos;s what&apos;s coming.
			</IntroSection>

			<ContentSection
				eyebrow="Coming Soon"
				title="Recommended Blog Post Topics"
				blocks={[
					{
						heading: "First Batch",
						body: "Recommended first-post ideas to establish the blog section:",
						items: [
							"We Spotted Arrowhead Twice in One Safari — Here's How (First-person safari report, Zone 2)",
							"Ranthambore in Summer vs Winter — Which Season Is Really Better? (Evergreen comparison guide)",
							"Machhli: The Tiger Who Made Ranthambore Famous (Long-form heritage story)",
							"The Complete Beginner's Guide to Your First Ranthambore Safari (Practical, shareable guide)",
							"10 Birds You Must Photograph at Ranthambore Before You Leave (Birding listicle)",
							"Chambal River Safari — India's Most Underrated Wildlife Experience (Destination spotlight)",
							"Ranthambore Fort: Walking Through 1,000 Years of History Inside a Tiger Reserve (Heritage + wildlife crossover)",
							"How to Choose the Right Safari Zone for Your Goals (Practical decision guide — high search intent)",
						],
					},
				]}
			/>

			<WhyChooseSection dark />
		</div>
	);
}
