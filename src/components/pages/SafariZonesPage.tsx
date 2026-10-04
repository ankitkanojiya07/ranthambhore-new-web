import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import { Button } from "#/components/ui/button";
import {
	SAFARI_ZONES,
	SAFARI_ZONES_CONTENT,
	SAFARI_ZONES_RELATED_GUIDES,
	ZONE_ALLOCATION_SECTION,
	ZONE_GUIDE_CLOSING,
	ZONE_GUIDE_DETAILS,
	type ZoneDetail,
} from "#/lib/safari-zones";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
	{ name: "Zones", path: "/safari/zones" },
];

function ZonesTable() {
	return (
		<div className="overflow-hidden rounded-xl ring-1 ring-sand-300/70">
			<table className="w-full border-collapse">
				<thead>
					<tr className="bg-sand-200/80">
						<th className="px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
							Zone
						</th>
						<th className="px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
							Zone Name / Area
						</th>
						<th className="hidden px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800 md:table-cell">
							Safari Type
						</th>
						<th className="hidden px-5 py-4 text-left font-display text-xs font-medium uppercase tracking-display text-charcoal-800 lg:table-cell">
							Famous For
						</th>
					</tr>
				</thead>
				<tbody>
					{SAFARI_ZONES.map((zone, index) => (
						<tr
							key={zone.zone}
							className={index % 2 === 0 ? "bg-white" : "bg-sand-50/80"}
						>
							<td className="border-t border-sand-300/50 px-5 py-4 font-display text-sm font-semibold text-tiger-700">
								Zone {zone.zone}
							</td>
							<td className="border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-800">
								{zone.area}
							</td>
							<td className="hidden border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-700 md:table-cell">
								{zone.safariType}
							</td>
							<td className="hidden border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-600 lg:table-cell">
								{zone.famousFor}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function ZoneDetailCard({
	title,
	paragraphs,
	pointsOfInterest,
	closing,
}: ZoneDetail) {
	return (
		<article className="rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8 lg:py-7">
			<h3 className="font-playfair text-xl text-charcoal-900 lg:text-2xl">
				{title}
			</h3>
			<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />

			<div className="mt-5 space-y-4">
				{paragraphs.map((paragraph) => (
					<p
						key={paragraph.slice(0, 48)}
						className="font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]"
					>
						{paragraph}
					</p>
				))}
			</div>

			<p className="mt-5 font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]">
				<span className="font-medium text-charcoal-800">
					Points of Interest:
				</span>{" "}
				{pointsOfInterest.join(" • ")}
			</p>

			<p className="mt-4 font-body text-sm italic leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]">
				{closing}
			</p>
		</article>
	);
}

function InfoCard({
	title,
	items,
	body,
}: {
	title: string;
	items?: readonly string[];
	body?: string;
}) {
	return (
		<article className="rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8 lg:py-7">
			<h3 className="font-playfair text-xl text-charcoal-900 lg:text-2xl">
				{title}
			</h3>
			<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />
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

export function SafariZonesPage() {
	const { title, intro, brochureHref, brochureLabel, lastReviewed } =
		SAFARI_ZONES_CONTENT;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-4xl px-6 pb-14 lg:px-8 lg:pb-20">
					<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />
					<header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-sm leading-relaxed text-charcoal-700 lg:text-base">
							{intro}
						</p>
						<div className="mt-4 flex justify-center">
							<LastReviewed
								date={lastReviewed}
								note="Zone character notes; allocation is forest-department controlled"
							/>
						</div>
						<div className="mt-7">
							<Button
								variant="outline"
								render={
									<a
										href={brochureHref}
										download="Ranthambore-Zone-Brochure.pdf"
									>
										{brochureLabel}
									</a>
								}
							/>
						</div>
					</header>

					<div>
						<ZonesTable />
					</div>

					<div className="mt-16 space-y-6">
						{ZONE_GUIDE_DETAILS.map((zone) => (
							<ZoneDetailCard key={zone.zone} {...zone} />
						))}
					</div>

					<div className="mt-16 rounded-xl bg-white px-6 py-8 text-center shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-10 lg:py-10">
						<p className="font-display text-xs uppercase tracking-display text-earth-600 lg:text-sm">
							{ZONE_GUIDE_CLOSING.tagline}
						</p>
						<div
							className="mx-auto mt-5 h-px w-12 bg-earth-300/70"
							aria-hidden
						/>
						<div className="mx-auto mt-6 max-w-2xl space-y-4">
							{ZONE_GUIDE_CLOSING.paragraphs.map((paragraph) => (
								<p
									key={paragraph.slice(0, 48)}
									className="font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]"
								>
									{paragraph}
								</p>
							))}
						</div>
					</div>

					<div className="mt-16">
						<InfoCard
							title={ZONE_ALLOCATION_SECTION.title}
							body={ZONE_ALLOCATION_SECTION.body}
							items={ZONE_ALLOCATION_SECTION.tips}
						/>
					</div>
				</div>
			</section>

			<RelatedGuides guides={[...SAFARI_ZONES_RELATED_GUIDES]} />
		</div>
	);
}
