import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import {
	BEST_TIME_SECTION,
	BOOKING_SECTION,
	SAFARI_COST_SECTION,
	SAFARI_TIMINGS_SECTION,
	type ScheduleStep,
	SEASON_TIMINGS_TABLE,
	TIMINGS_BOOKING_CONTENT,
	TIMINGS_RELATED_GUIDES,
} from "#/lib/safari-timings-booking";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
	{ name: "Timings & Booking", path: "/safari/timing-and-fees" },
];

function SeasonTimingsTable() {
	const { title, rows } = SEASON_TIMINGS_TABLE;

	return (
		<div>
			<h2 className="text-center font-playfair text-2xl text-charcoal-900 lg:text-3xl">
				{title}
			</h2>
			<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />

			<div className="mt-8 overflow-hidden rounded-xl ring-1 ring-sand-300/70">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-sand-200/80">
							<th className="px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
								Months
							</th>
							<th className="px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
								Morning
							</th>
							<th className="px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
								Afternoon
							</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row, index) => (
							<tr
								key={row.months}
								className={index % 2 === 0 ? "bg-white" : "bg-sand-50/80"}
							>
								<td className="border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-800">
									{row.months}
								</td>
								<td className="border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-700">
									{row.morning}
								</td>
								<td className="border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-700">
									{row.afternoon}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function ScheduleStepCard({ title, body }: ScheduleStep) {
	const paragraphs = Array.isArray(body) ? body : [body];

	return (
		<article className="rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8">
			<h4 className="font-playfair text-lg text-charcoal-900">{title}</h4>
			<div className="mt-3 h-px w-10 bg-earth-300/70" aria-hidden />
			<div className="mt-4 space-y-3">
				{paragraphs.map((paragraph) => (
					<p
						key={paragraph.slice(0, 48)}
						className="font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]"
					>
						{paragraph}
					</p>
				))}
			</div>
		</article>
	);
}

function InfoCard({
	title,
	intro,
	items,
	body,
}: {
	title: string;
	intro?: string;
	items?: readonly string[];
	body?: string;
}) {
	return (
		<article className="rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8 lg:py-7">
			<h3 className="font-playfair text-xl text-charcoal-900 lg:text-2xl">
				{title}
			</h3>
			<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />
			{intro ? (
				<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]">
					{intro}
				</p>
			) : null}
			{body ? (
				<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]">
					{body}
				</p>
			) : null}
			{items ? (
				<ul className="mt-4 space-y-2.5">
					{items.map((item) => (
						<li
							key={item}
							className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-earth-400"
						>
							{item}
						</li>
					))}
				</ul>
			) : null}
		</article>
	);
}

function BestTimeSection() {
	const { title, intro, tips } = BEST_TIME_SECTION;

	return (
		<div className="mt-16">
			<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
				{title}
			</h2>
			<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />
			<p className="mt-5 font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]">
				{intro}
			</p>

			<dl className="mt-8 space-y-5">
				{tips.map((tip) => (
					<div
						key={tip.label}
						className="rounded-xl bg-white px-6 py-5 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50"
					>
						<dt className="font-body text-sm font-medium text-charcoal-900">
							{tip.label}
						</dt>
						<dd className="mt-2 font-body text-sm leading-relaxed text-charcoal-600">
							{tip.description}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}

export function SafariTimingsBookingPage() {
	const { title, subtitle } = TIMINGS_BOOKING_CONTENT;
	const {
		title: timingsTitle,
		overviewHeading,
		overview,
		steps,
	} = SAFARI_TIMINGS_SECTION;
	const booking = BOOKING_SECTION;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
					<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />
					<header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							{subtitle}
						</p>
						<div className="mt-4 flex justify-center">
							<LastReviewed
								date={SAFARI_COST_SECTION.lastReviewed}
								note="Verify live fees and session times on the official portal"
							/>
						</div>
					</header>

					<SeasonTimingsTable />

					<BestTimeSection />

					<div className="mt-16">
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							{timingsTitle}
						</h2>
						<h3 className="mt-6 font-playfair text-xl text-charcoal-900">
							{overviewHeading}
						</h3>
						<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]">
							{overview}
						</p>

						<div className="mt-8 space-y-4">
							{steps.map((step) => (
								<ScheduleStepCard key={step.title} {...step} />
							))}
						</div>
					</div>

					<section id="safari-cost" className="mt-16 scroll-mt-28">
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							{SAFARI_COST_SECTION.title}
						</h2>
						<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-600">
							{SAFARI_COST_SECTION.disclaimer}
						</p>
						<ul className="mt-6 space-y-3">
							{SAFARI_COST_SECTION.points.map((point) => (
								<li
									key={point}
									className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-earth-400"
								>
									{point}
								</li>
							))}
						</ul>
					</section>

					<div className="mt-16 space-y-6">
						<InfoCard
							title={booking.bookingTipsHeading}
							items={booking.bookingTips}
						/>
						<InfoCard
							title={booking.officialBookingHeading}
							body={booking.officialBooking}
						/>
						<InfoCard
							title={booking.bookingWindowHeading}
							body={booking.bookingWindow}
						/>
						<InfoCard
							title={booking.cancellationHeading}
							body={booking.cancellation}
						/>
						<InfoCard
							title={booking.documentsHeading}
							intro={booking.documentsIntro}
							items={booking.documents}
						/>
					</div>
				</div>
			</section>

			<RelatedGuides guides={[...TIMINGS_RELATED_GUIDES]} />
		</div>
	);
}
