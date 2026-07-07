import {
	BUFFER_ZONES_SECTION,
	CORE_ZONE_DETAILS,
	CORE_ZONES_SECTION,
	SAFARI_ZONES,
	SAFARI_ZONES_CONTENT,
	SAFARI_ZONES_INTRO,
	SAFARI_ZONES_TABLE,
	ZONE_ALLOCATION_SECTION,
	type ZoneDetail,
} from "#/lib/safari-zones";

function ZonesTable() {
	const { title, subtitle } = SAFARI_ZONES_TABLE;

	return (
		<div>
			<h2 className="text-center font-playfair text-2xl text-charcoal-900 lg:text-3xl">
				{title}
			</h2>
			<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
			<p className="mx-auto mt-5 max-w-2xl text-center font-body text-sm leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]">
				{subtitle}
			</p>

			<div className="mt-8 overflow-hidden rounded-xl ring-1 ring-sand-300/70">
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
		</div>
	);
}

function ZoneDetailCard({ title, description, bestFor }: ZoneDetail) {
	return (
		<article className="rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8">
			<h4 className="font-playfair text-lg text-charcoal-900">{title}</h4>
			<div className="mt-3 h-px w-10 bg-earth-300/70" aria-hidden />
			<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]">
				{description}
			</p>
			<p className="mt-4 font-body text-sm text-charcoal-600">
				<span className="font-medium text-charcoal-800">Best for:</span>{" "}
				{bestFor}
			</p>
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

export function SafariZonesPage() {
	const { title, subtitle } = SAFARI_ZONES_CONTENT;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
					<header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							{subtitle}
						</p>
					</header>

					<p className="font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]">
						{SAFARI_ZONES_INTRO}
					</p>

					<div className="mt-16">
						<ZonesTable />
					</div>

					<div className="mt-16">
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							{CORE_ZONES_SECTION.title}
						</h2>
						<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />
						<p className="mt-5 font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]">
							{CORE_ZONES_SECTION.intro}
						</p>

						<div className="mt-8 space-y-4">
							{CORE_ZONE_DETAILS.map((zone) => (
								<ZoneDetailCard key={zone.zone} {...zone} />
							))}
						</div>
					</div>

					<div className="mt-16 space-y-6">
						<InfoCard
							title={BUFFER_ZONES_SECTION.title}
							intro={BUFFER_ZONES_SECTION.intro}
							items={BUFFER_ZONES_SECTION.items}
						/>
						<InfoCard
							title={ZONE_ALLOCATION_SECTION.title}
							body={ZONE_ALLOCATION_SECTION.body}
							items={ZONE_ALLOCATION_SECTION.tips}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
