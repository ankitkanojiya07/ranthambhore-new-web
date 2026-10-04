import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import {
	SAFARI_GUIDELINES,
	SAFARI_VEHICLES,
	SAFARI_VEHICLES_CONTENT,
	type SafariVehicle,
	VEHICLE_COMPARISON_ROWS,
	VEHICLE_FAQS,
	VEHICLE_RELATED_GUIDES,
} from "#/lib/safari-vehicles";
import { Image } from "#/util/Image";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
	{ name: "Jeep & Canter", path: "/safari/jeep" },
];

function VehicleCard({
	id,
	title,
	image,
	imageAlt,
	capacity,
	cost,
	advantages,
	bestFor,
}: SafariVehicle) {
	return (
		<article
			id={id}
			className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.06)] ring-1 ring-sand-300/50"
		>
			<div className="aspect-video overflow-hidden">
				<Image
					src={image}
					alt={imageAlt}
					width={960}
					height={540}
					className="size-full object-cover"
				/>
			</div>

			<div className="px-6 py-8 lg:px-8 lg:py-9">
				<h2 className="font-playfair text-2xl text-charcoal-900">{title}</h2>
				<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />

				<div className="mt-6">
					<h3 className="font-display text-xs font-medium uppercase tracking-display text-earth-600">
						Vehicle Details
					</h3>
					<dl className="mt-3 space-y-2">
						<div>
							<dt className="font-body text-sm font-medium text-charcoal-800">
								Capacity
							</dt>
							<dd className="font-body text-sm leading-relaxed text-charcoal-600">
								{capacity}
							</dd>
						</div>
						<div>
							<dt className="font-body text-sm font-medium text-charcoal-800">
								Average Cost
							</dt>
							<dd className="font-body text-sm leading-relaxed text-charcoal-600">
								{cost}
							</dd>
						</div>
					</dl>
				</div>

				<div className="mt-8">
					<h3 className="font-display text-xs font-medium uppercase tracking-display text-earth-600">
						Advantages
					</h3>
					<ul className="mt-3 space-y-2.5">
						{advantages.map((item) => (
							<li
								key={item}
								className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-earth-400"
							>
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className="mt-8">
					<h3 className="font-display text-xs font-medium uppercase tracking-display text-earth-600">
						Best For
					</h3>
					<ul className="mt-3 space-y-2.5">
						{bestFor.map((item) => (
							<li
								key={item}
								className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-tiger-400"
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
}

function SafariGuidelinesSection() {
	const {
		title,
		dosAndDontsHeading,
		guidelines,
		essentialsHeading,
		essentials,
	} = SAFARI_GUIDELINES;

	return (
		<section className="border-t border-sand-300/80 bg-sand-100/40">
			<div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
				<header className="text-center">
					<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						{title}
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
				</header>

				<div className="mt-10 rounded-2xl bg-white px-6 py-8 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-10 lg:py-10">
					<h3 className="font-playfair text-xl text-charcoal-900 lg:text-2xl">
						{dosAndDontsHeading}
					</h3>
					<div className="mt-5 h-px w-12 bg-earth-300/70" aria-hidden />

					<dl className="mt-6 space-y-5">
						{guidelines.map((item) => (
							<div key={item.label}>
								<dt className="font-body text-sm font-medium text-charcoal-900">
									{item.label}
								</dt>
								<dd className="mt-1 font-body text-sm leading-relaxed text-charcoal-600">
									{item.description}
								</dd>
							</div>
						))}
					</dl>
				</div>

				<div className="mt-6 rounded-2xl bg-white px-6 py-8 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-10 lg:py-10">
					<h3 className="font-playfair text-xl text-charcoal-900 lg:text-2xl">
						{essentialsHeading}
					</h3>
					<div className="mt-5 h-px w-12 bg-earth-300/70" aria-hidden />

					<div className="mt-6 space-y-4">
						{essentials.map((item) => (
							<p
								key={item}
								className="font-body text-sm leading-[1.85] text-charcoal-700 lg:text-[0.9375rem]"
							>
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export function SafariVehiclesPage() {
	const { title, subtitle, intro, lastReviewed } = SAFARI_VEHICLES_CONTENT;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
					<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />
					<header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							{subtitle}
						</p>
						<p className="mt-4 font-body text-sm leading-relaxed text-charcoal-700">
							{intro}
						</p>
						<div className="mt-4 flex justify-center">
							<LastReviewed
								date={lastReviewed}
								note="Indicative costs — verify live fees officially"
							/>
						</div>
					</header>

					<div className="mb-12 overflow-hidden rounded-xl ring-1 ring-sand-300/70">
						<table className="w-full border-collapse text-left">
							<thead>
								<tr className="bg-sand-200/80">
									<th className="px-5 py-4 font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
										Aspect
									</th>
									<th className="px-5 py-4 font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
										Gypsy
									</th>
									<th className="px-5 py-4 font-display text-xs font-medium uppercase tracking-display text-charcoal-800">
										Canter
									</th>
								</tr>
							</thead>
							<tbody>
								{VEHICLE_COMPARISON_ROWS.map((row, index) => (
									<tr
										key={row.aspect}
										className={index % 2 === 0 ? "bg-white" : "bg-sand-50/80"}
									>
										<td className="border-t border-sand-300/50 px-5 py-4 font-display text-sm font-medium text-charcoal-800">
											{row.aspect}
										</td>
										<td className="border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-700">
											{row.gypsy}
										</td>
										<td className="border-t border-sand-300/50 px-5 py-4 font-body text-sm text-charcoal-700">
											{row.canter}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
						{SAFARI_VEHICLES.map((vehicle) => (
							<VehicleCard key={vehicle.id} {...vehicle} />
						))}
					</div>

					<section className="mx-auto mt-16 max-w-3xl">
						<h2 className="font-playfair text-2xl text-charcoal-900">
							Gypsy vs Canter FAQs
						</h2>
						<dl className="mt-6 space-y-6">
							{VEHICLE_FAQS.map((faq) => (
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

			<SafariGuidelinesSection />
			<RelatedGuides guides={[...VEHICLE_RELATED_GUIDES]} />
		</div>
	);
}
