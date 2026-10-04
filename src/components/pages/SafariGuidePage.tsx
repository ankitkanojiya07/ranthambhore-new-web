import { Link } from "@tanstack/react-router";
import { ContentChangelog } from "#/components/seo/ContentChangelog";
import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import {
	SAFARI_GUIDE_CONTENT,
	SAFARI_GUIDE_FAQS,
	SAFARI_GUIDE_LINKS,
	SAFARI_GUIDE_SECTIONS,
} from "#/lib/safari-guide";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
];

export function SafariGuidePage() {
	const { eyebrow, title, intro, lastReviewed } = SAFARI_GUIDE_CONTENT;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<article>
				<div className="mx-auto max-w-3xl px-6 pb-16 lg:px-8 lg:pb-20">
					<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />
					<header>
						<p className="font-display text-xs font-medium uppercase tracking-display text-muted-400">
							{eyebrow}
						</p>
						<h1 className="mt-4 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700 lg:text-lg">
							{intro}
						</p>
						<div className="mt-4">
							<LastReviewed path="/safari" date={lastReviewed} />
							<ContentChangelog path="/safari" />
						</div>
					</header>

					<div className="mt-12 space-y-10">
						{SAFARI_GUIDE_SECTIONS.map((section) => (
							<section
								key={section.id}
								id={section.id}
								className="scroll-mt-28"
							>
								<h2 className="font-playfair text-2xl text-charcoal-900">
									{section.title}
								</h2>
								<div className="mt-4 space-y-4">
									{section.body.map((paragraph) => (
										<p
											key={paragraph.slice(0, 40)}
											className="font-body text-[0.9375rem] leading-[1.85] text-charcoal-700"
										>
											{paragraph}
										</p>
									))}
								</div>
								{"href" in section && section.href ? (
									<Link
										to={section.href}
										className="mt-4 inline-block font-display text-xs font-semibold uppercase tracking-display text-earth-700 underline-offset-4 hover:underline"
									>
										{section.linkLabel}
									</Link>
								) : null}
							</section>
						))}
					</div>

					<section className="mt-14">
						<h2 className="font-playfair text-2xl text-charcoal-900">
							Safari FAQs
						</h2>
						<dl className="mt-6 space-y-6">
							{SAFARI_GUIDE_FAQS.map((faq) => (
								<div key={faq.question}>
									<dt className="font-playfair text-lg text-charcoal-900">
										{faq.question}
									</dt>
									<dd className="mt-2 font-body text-sm leading-relaxed text-charcoal-700">
										{faq.answer}
									</dd>
								</div>
							))}
						</dl>
					</section>

					<section className="mt-14 rounded-xl bg-sand-100/70 px-6 py-8 text-center ring-1 ring-sand-300/60">
						<p className="font-display text-xs uppercase tracking-display text-muted-400">
							Planning your trip?
						</p>
						<p className="mt-3 font-body text-sm text-charcoal-700">
							Use the travel guide for seasons and logistics, then enquire when
							you are ready to book sessions.
						</p>
						<Link
							to="/plan"
							className="mt-5 inline-block font-display text-xs font-semibold uppercase tracking-display text-earth-700 underline-offset-4 hover:underline"
						>
							Plan your visit
						</Link>
					</section>
				</div>
			</article>

			<RelatedGuides guides={[...SAFARI_GUIDE_LINKS]} />
		</div>
	);
}
