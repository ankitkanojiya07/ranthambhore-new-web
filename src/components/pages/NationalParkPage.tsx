import { Landmark, MapPin } from "lucide-react";
import { ContentChangelog } from "#/components/seo/ContentChangelog";
import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import {
	NATIONAL_PARK_CONTENT,
	NATIONAL_PARK_ECOLOGY,
	NATIONAL_PARK_FAQS,
	NATIONAL_PARK_LEGACY,
	NATIONAL_PARK_MONSOON,
	NATIONAL_PARK_QUICK_FACTS,
	NATIONAL_PARK_RELATED_GUIDES,
	NATIONAL_PARK_STATS,
	type NationalParkLegacyCard,
	type QuickFactCard,
} from "#/lib/national-park";
import { Image } from "#/util/Image";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "National Park", path: "/about/national-park" },
];

function QuickFactCardItem({
	title,
	description,
	icon: Icon,
	stats,
}: QuickFactCard) {
	return (
		<article className="flex h-full flex-col rounded-xl bg-white px-5 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.06)] ring-1 ring-sand-300/50">
			<div className="flex items-start gap-3">
				<span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-earth-100 text-earth-600">
					<Icon className="size-4" strokeWidth={1.5} aria-hidden />
				</span>
				<h3 className="pt-1 font-playfair text-base text-earth-700 lg:text-lg">
					{title}
				</h3>
			</div>

			<p className="mt-4 font-body text-xs leading-relaxed text-charcoal-600 lg:text-[0.8125rem]">
				{description}
			</p>

			<div className="mt-5 h-px w-full bg-sand-300/70" aria-hidden />

			<div className="mt-5 grid flex-1 grid-cols-2 gap-4">
				{stats.map((stat) => (
					<div key={stat.label}>
						<p className="font-playfair text-lg text-earth-700 lg:text-xl">
							{stat.value}
						</p>
						<p className="mt-1 font-display text-[0.625rem] font-medium uppercase tracking-display text-muted-400">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</article>
	);
}

function LegacyCard({
	title,
	eyebrow,
	body,
	image,
	imageAlt,
	icon: Icon,
}: NationalParkLegacyCard) {
	return (
		<article className="overflow-hidden rounded-2xl bg-sand-100/70 ring-1 ring-sand-300/70 lg:flex">
			<div className="lg:w-[38%] lg:shrink-0">
				<Image
					src={image}
					alt={imageAlt}
					width={640}
					height={480}
					className="aspect-4/3 size-full object-cover lg:min-h-full lg:aspect-auto"
				/>
			</div>

			<div className="flex flex-1 flex-col px-6 py-8 lg:px-10 lg:py-10">
				<span className="flex size-10 items-center justify-center rounded-lg bg-earth-100 text-earth-600">
					<Icon className="size-4.5" strokeWidth={1.5} aria-hidden />
				</span>

				<h3 className="mt-5 font-playfair text-xl text-charcoal-900 lg:text-2xl">
					{title}
				</h3>
				<p className="mt-2 font-display text-[0.6875rem] font-medium uppercase tracking-display text-muted-400">
					{eyebrow}
				</p>
				<div className="mt-4 h-px w-full bg-sand-300/80" aria-hidden />
				<p className="mt-5 font-body text-sm leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]">
					{body}
				</p>
			</div>
		</article>
	);
}

function StatCard({ label, value }: { label: string; value: string }) {
	return (
		<div className="rounded-lg border border-charcoal-800/80 bg-sand-100/60 px-5 py-4">
			<p className="font-display text-[0.6875rem] font-medium uppercase tracking-display text-muted-400">
				{label}
			</p>
			<p className="mt-2 font-playfair text-2xl text-charcoal-900">{value}</p>
		</div>
	);
}

export function NationalParkPage() {
	const { eyebrow, title, subtitle, intro, quote, outro, map, lastReviewed } =
		NATIONAL_PARK_CONTENT;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
					<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />

					<header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
						<p className="font-display text-xs font-medium uppercase tracking-display text-muted-400">
							{eyebrow}
						</p>
						<h1 className="mt-4 font-playfair text-3xl text-charcoal-900 lg:text-[2.75rem] lg:leading-tight">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-playfair text-lg italic text-charcoal-600 lg:text-xl">
							{subtitle}
						</p>
						<div className="mt-5 flex flex-col items-center">
							<LastReviewed path="/about/national-park" date={lastReviewed} />
							<div className="mt-3 w-full max-w-xl">
								<ContentChangelog path="/about/national-park" />
							</div>
						</div>
					</header>

					<div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14 xl:gap-16">
						<div>
							<div className="space-y-6 font-body text-[0.9375rem] leading-[1.8] text-charcoal-700 lg:text-base">
								<p>{intro}</p>

								<blockquote className="border-l-2 border-muted-300 pl-5">
									<p className="font-body text-[0.9375rem] italic leading-[1.8] text-charcoal-500 lg:text-base">
										{quote}
									</p>
								</blockquote>

								<p>{outro}</p>
							</div>

							<div className="mt-10 grid grid-cols-2 gap-4">
								{NATIONAL_PARK_STATS.map((stat) => (
									<StatCard key={stat.label} {...stat} />
								))}
							</div>
						</div>

						<div className="relative">
							<div className="relative overflow-hidden rounded-sm shadow-[0_8px_32px_rgba(45,35,25,0.12)]">
								<Image
									src={map.src}
									alt={map.alt}
									width={960}
									height={720}
									className="aspect-4/3 w-full object-cover"
								/>

								<div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-sm ring-1 ring-sand-300/60">
									<MapPin
										className="size-3.5 shrink-0 text-charcoal-700"
										strokeWidth={1.75}
										aria-hidden
									/>
									<span className="font-body text-xs font-medium text-charcoal-800">
										{map.location}
									</span>
								</div>
							</div>

							<div className="absolute -bottom-4 right-0 flex max-w-[11rem] items-center gap-2.5 rounded-lg bg-white px-3 py-2.5 shadow-[0_4px_20px_rgba(45,35,25,0.1)] ring-1 ring-sand-300/70 sm:max-w-none">
								<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sand-100 text-earth-600">
									<Landmark className="size-4" strokeWidth={1.5} aria-hidden />
								</span>
								<p className="font-body text-[0.6875rem] leading-snug text-charcoal-700">
									UNESCO World
									<br />
									Heritage Site
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
					<header className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							{NATIONAL_PARK_LEGACY.heading}
						</h2>
						<p className="mt-4 font-body text-sm leading-relaxed text-charcoal-600 lg:text-base">
							{NATIONAL_PARK_LEGACY.intro}
						</p>
					</header>

					<div className="space-y-8 lg:space-y-10">
						{NATIONAL_PARK_LEGACY.cards.map((card) => (
							<LegacyCard key={card.title} {...card} />
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-sand-300/80">
				<div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
					<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
						{NATIONAL_PARK_ECOLOGY.title}
					</h2>
					<div className="mt-6 space-y-4">
						{NATIONAL_PARK_ECOLOGY.paragraphs.map((paragraph) => (
							<p
								key={paragraph.slice(0, 40)}
								className="font-body text-[0.9375rem] leading-[1.85] text-charcoal-700"
							>
								{paragraph}
							</p>
						))}
					</div>
					<h2 className="mt-12 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
						{NATIONAL_PARK_MONSOON.title}
					</h2>
					<div className="mt-6 space-y-4">
						{NATIONAL_PARK_MONSOON.paragraphs.map((paragraph) => (
							<p
								key={paragraph.slice(0, 40)}
								className="font-body text-[0.9375rem] leading-[1.85] text-charcoal-700"
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-sand-300/80 bg-sand-100/40">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
					<header className="mb-10 flex justify-center lg:mb-12">
						<h2 className="inline-block border-b-2 border-earth-400 bg-sand-200/60 px-8 py-4 font-playfair text-xl text-charcoal-900 lg:text-2xl">
							{NATIONAL_PARK_QUICK_FACTS.heading}
						</h2>
					</header>

					<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
						{NATIONAL_PARK_QUICK_FACTS.cards.map((card) => (
							<QuickFactCardItem key={card.title} {...card} />
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-sand-300/80">
				<div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
					<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
						Ranthambore National Park FAQs
					</h2>
					<dl className="mt-8 space-y-6">
						{NATIONAL_PARK_FAQS.map((faq) => (
							<div key={faq.question}>
								<dt className="font-playfair text-lg text-charcoal-900">
									{faq.question}
								</dt>
								<dd className="mt-2 font-body text-sm leading-relaxed text-charcoal-700 lg:text-[0.9375rem]">
									{faq.answer}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			<section className="border-t border-sand-300/80 bg-sand-100/40">
				<div className="mx-auto max-w-3xl px-6 py-12 text-center lg:px-8">
					<p className="font-display text-xs uppercase tracking-display text-muted-400">
						Planning your trip?
					</p>
					<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-700 lg:text-base">
						Use the travel guide for seasons, logistics, and packing — then
						explore safari options when you are ready.
					</p>
					<a
						href="/plan"
						className="mt-5 inline-block font-display text-xs font-semibold uppercase tracking-display text-earth-700 underline-offset-4 hover:underline"
					>
						Plan your visit
					</a>
				</div>
			</section>

			<RelatedGuides guides={[...NATIONAL_PARK_RELATED_GUIDES]} />
		</div>
	);
}
