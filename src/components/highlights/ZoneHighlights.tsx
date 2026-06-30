import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SafariArticleLink } from "#/components/highlights/safari-article-link";
import type {
	SafariHighlight,
	SafariZoneCard,
} from "#/components/highlights/safari-highlight.types";
import { Image } from "#/util/Image";

const titleLinkClass =
	"transition-colors hover:text-tiger-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiger-500/40";

export function ZoneHighlightsGrid({ zones }: { zones: SafariZoneCard[] }) {
	return (
		<section
			className="bg-tiger-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Zone-wise highlights"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-10 max-w-2xl">
					<p className="font-display text-xs uppercase tracking-display text-earth-500">
						All 10 Zones
					</p>
					<h2 className="mt-2 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Zone-Wise Highlights
					</h2>
					<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
						Explore safari insights, recent sightings, and expert tips for each
						of Ranthambore&apos;s ten designated safari zones.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
					{zones.map((zone) => (
						<Link
							key={zone.id}
							to="/highlights/safari-insights/zone/$zoneId"
							params={{ zoneId: String(zone.zoneNumber) }}
							className="group flex flex-col overflow-hidden rounded-xl bg-cream-50 shadow-sm ring-1 ring-muted-300/60 transition-all hover:-translate-y-0.5 hover:shadow-md"
						>
							<div className="relative aspect-4/3 overflow-hidden">
								<Image
									src={zone.image.src}
									alt={zone.image.alt}
									width={zone.image.width}
									height={zone.image.height}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-sm bg-tiger-800/90 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-display text-sand-50">
									Zone {zone.zoneNumber}
								</span>
							</div>
							<div className="flex flex-1 flex-col p-4">
								<h3 className="font-display text-xs font-semibold uppercase leading-snug tracking-display text-charcoal-900">
									{zone.name.split(" — ")[1] ?? zone.name}
								</h3>
								<p className="mt-1.5 line-clamp-2 font-body text-xs leading-relaxed text-charcoal-600">
									{zone.tagline}
								</p>
								<span className="mt-3 inline-flex items-center gap-1 font-display text-[10px] uppercase tracking-display text-forest-600 transition-colors group-hover:text-forest-700">
									View Insights
									<ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

export function ZoneDetailContent({
	zone,
	highlights,
}: {
	zone: SafariZoneCard;
	highlights: SafariHighlight[];
}) {
	return (
		<div className="bg-sand-50">
			<section className="px-6 py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-10 lg:grid-cols-3">
						<div className="lg:col-span-2">
							<p className="font-display text-xs uppercase tracking-display text-sunset-500">
								Zone {zone.zoneNumber}
							</p>
							<h2 className="mt-2 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
								{zone.name}
							</h2>
							<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
								{zone.description}
							</p>
							<p className="mt-3 font-display text-xs uppercase tracking-display text-forest-600">
								Best for: {zone.bestFor}
							</p>
							{zone.safariType ? (
								<p className="mt-2 font-body text-sm text-muted-500">
									Safari type: {zone.safariType}
								</p>
							) : null}
						</div>

						<div className="overflow-hidden rounded-xl ring-1 ring-muted-300/60">
							<Image
								src={zone.image.src}
								alt={zone.image.alt}
								width={zone.image.width}
								height={zone.image.height}
								className="aspect-4/3 w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{zone.insights.length > 0 ? (
				<section
					className="border-t border-muted-300/40 bg-sand-100 px-6 py-16 lg:px-8 lg:py-20"
					aria-label="Zone insights"
				>
					<div className="mx-auto max-w-7xl">
						<h3 className="font-playfair text-2xl text-charcoal-900">
							Safari Insights
						</h3>
						<ul className="mt-6 space-y-4">
							{zone.insights.map((insight) => (
								<li
									key={insight}
									className="flex gap-3 font-body text-base leading-relaxed text-charcoal-700"
								>
									<span className="mt-2 size-1.5 shrink-0 rounded-full bg-sunset-500" />
									{insight}
								</li>
							))}
						</ul>
					</div>
				</section>
			) : null}

			{highlights.length > 0 ? (
				<section
					className="border-t border-muted-300/40 px-6 py-16 lg:px-8 lg:py-20"
					aria-label="Recent sightings in zone"
				>
					<div className="mx-auto max-w-7xl">
						<h3 className="font-playfair text-2xl text-charcoal-900">
							Recent Sightings
						</h3>
						<div className="mt-8 grid gap-6 sm:grid-cols-2">
							{highlights.map((highlight) => (
								<article
									key={highlight.id}
									className="flex gap-4 overflow-hidden rounded-xl bg-cream-50 p-4 ring-1 ring-muted-300/60"
								>
									<SafariArticleLink
										slug={highlight.id}
										className="size-24 shrink-0 overflow-hidden rounded-lg"
									>
										<Image
											src={highlight.image.src}
											alt={highlight.image.alt}
											width={highlight.image.width}
											height={highlight.image.height}
											className="size-full object-cover transition-transform duration-300 hover:scale-105"
										/>
									</SafariArticleLink>
									<div className="min-w-0 flex-1">
										<p className="font-body text-xs text-muted-500">
											{highlight.date}
										</p>
										<h4 className="mt-1 font-display text-sm font-semibold uppercase tracking-display text-charcoal-900">
											<SafariArticleLink
												slug={highlight.id}
												className={titleLinkClass}
											>
												{highlight.title}
											</SafariArticleLink>
										</h4>
										<p className="mt-1 line-clamp-2 font-body text-sm text-charcoal-600">
											{highlight.description}
										</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			) : (
				<section className="border-t border-muted-300/40 px-6 py-16 lg:px-8 lg:py-20">
					<div className="mx-auto max-w-7xl text-center">
						<p className="font-body text-base text-charcoal-600">
							No recent sightings reported for this zone yet. Check back soon or{" "}
							<Link
								to="/contact"
								className="text-forest-600 underline-offset-2 hover:underline"
							>
								share your update
							</Link>
							.
						</p>
					</div>
				</section>
			)}

			<section className="border-t border-muted-300/40 bg-tiger-50 px-6 py-12 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<Link
						to="/highlights/safari-insights"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700"
					>
						<ArrowRight className="size-4 rotate-180" />
						Back to Safari Highlights
					</Link>
				</div>
			</section>
		</div>
	);
}
