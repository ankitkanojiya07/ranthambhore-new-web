import { Link } from "@tanstack/react-router";
import { ContentChangelog } from "#/components/seo/ContentChangelog";
import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import { TIGERS, type TigerProfile } from "#/lib/tigers";
import {
	TIGERS_HUB_CONTENT,
	TIGERS_HUB_FAQS,
	TIGERS_HUB_SECTIONS,
	TIGERS_RELATED_GUIDES,
} from "#/lib/tigers-hub";
import { Image } from "#/util/Image";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Tigers", path: "/about/tigers" },
];

function TigerCard({ tiger }: { tiger: TigerProfile }) {
	return (
		<Link
			to="/about/tigers/$slug"
			params={{ slug: tiger.slug }}
			className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.08)] ring-1 ring-sand-300/60 transition-shadow hover:shadow-[0_8px_32px_rgba(45,35,25,0.12)]"
		>
			<div className="aspect-4/3 overflow-hidden">
				<Image
					src={tiger.image}
					alt={tiger.imageAlt}
					width={640}
					height={480}
					className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="space-y-2 px-5 py-5">
				<p className="font-display text-[0.625rem] font-medium uppercase tracking-display text-forest-600">
					{tiger.meta.code}
				</p>
				<h3 className="font-playfair text-xl font-semibold text-charcoal-900 transition-colors group-hover:text-forest-700">
					{tiger.name}
				</h3>
				<p className="font-body text-sm italic text-earth-600">
					{tiger.tagline}
				</p>
				<p className="line-clamp-2 font-body text-sm leading-relaxed text-charcoal-600">
					{tiger.excerpt}
				</p>
			</div>
		</Link>
	);
}

export function TigersPage() {
	const { eyebrow, title, intro, lastReviewed } = TIGERS_HUB_CONTENT;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
					<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />
					<header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
						<p className="font-display text-xs font-medium uppercase tracking-display text-muted-400">
							{eyebrow}
						</p>
						<h1 className="mt-4 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							{intro}
						</p>
						<div className="mt-4 flex flex-col items-center">
							<LastReviewed path="/about/tigers" date={lastReviewed} />
							<div className="mt-3 w-full max-w-xl">
								<ContentChangelog path="/about/tigers" />
							</div>
						</div>
					</header>

					<div className="mx-auto mb-14 max-w-3xl space-y-10">
						{TIGERS_HUB_SECTIONS.map((section) => (
							<section key={section.title}>
								<h2 className="font-playfair text-2xl text-charcoal-900">
									{section.title}
								</h2>
								<div className="mt-4 space-y-4">
									{section.paragraphs.map((paragraph) => (
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
										to="/about/tigers/$slug"
										params={{ slug: "machali" }}
										className="mt-4 inline-block font-display text-xs font-semibold uppercase tracking-display text-earth-700 underline-offset-4 hover:underline"
									>
										{section.linkLabel}
									</Link>
								) : null}
							</section>
						))}
					</div>

					<header className="mx-auto mb-10 max-w-3xl text-center">
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							Famous tigers of Ranthambore
						</h2>
						<p className="mt-4 font-body text-sm leading-relaxed text-charcoal-600 lg:text-base">
							Open a profile for field notes, identification details, and the
							story behind each name — including Machali (T-16).
						</p>
					</header>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{TIGERS.map((tiger) => (
							<TigerCard key={tiger.slug} tiger={tiger} />
						))}
					</div>

					<section className="mx-auto mt-16 max-w-3xl">
						<h2 className="font-playfair text-2xl text-charcoal-900">
							Tiger FAQs
						</h2>
						<dl className="mt-6 space-y-6">
							{TIGERS_HUB_FAQS.map((faq) => (
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
				</div>
			</section>

			<RelatedGuides guides={[...TIGERS_RELATED_GUIDES]} />
		</div>
	);
}
