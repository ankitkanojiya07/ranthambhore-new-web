import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { TrendingColumn } from "#/lib/highlights-data";
import { Image } from "#/util/Image";

export function TrendingGrid({ columns }: { columns: TrendingColumn[] }) {
	return (
		<section
			className="px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Trending sightings"
		>
			<div className="mx-auto max-w-7xl">
				<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
					Trending
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{columns.map((column) => (
						<article key={column.id} className="flex flex-col">
							<div className="relative aspect-4/3 overflow-hidden">
								<Image
									src={column.image.src}
									alt={column.image.alt}
									width={column.image.width}
									height={column.image.height}
									className="h-full w-full object-cover"
								/>
							</div>

							<div className="mt-0 flex flex-col divide-y divide-muted-300/60">
								{column.items.map((item) => (
									<div key={item.id} className="py-4">
										<p className="font-body text-xs text-muted-500">
											{item.date}
										</p>
										<p
											className={`mt-1 font-body leading-snug text-charcoal-900 ${
												item.featured ? "text-base font-semibold" : "text-sm"
											}`}
										>
											{item.title}
										</p>
									</div>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export function SafariHighlightsGrid({
	highlights,
}: {
	highlights: {
		id: string;
		title: string;
		zone: string;
		date: string;
		description: string;
		image: { src: string; alt: string; width: number; height: number };
	}[];
}) {
	return (
		<section
			className="bg-sand-100 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Recent safari highlights"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-10 flex items-end justify-between gap-4">
					<div>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Latest Sightings
						</p>
						<h2 className="mt-2 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							Safari Highlights
						</h2>
					</div>
					<Link
						to="/contact"
						className="hidden items-center gap-2 font-display text-xs uppercase tracking-display text-forest-600 transition-colors hover:text-forest-700 sm:inline-flex"
					>
						Share Your Sighting
						<ArrowRight className="size-4" />
					</Link>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{highlights.map((highlight) => (
						<article
							key={highlight.id}
							className="group flex flex-col overflow-hidden rounded-xl bg-cream-50 shadow-sm ring-1 ring-muted-300/60 transition-shadow hover:shadow-md"
						>
							<div className="relative aspect-4/3 overflow-hidden">
								<Image
									src={highlight.image.src}
									alt={highlight.image.alt}
									width={highlight.image.width}
									height={highlight.image.height}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-sm bg-forest-600/90 px-2 py-1 font-display text-[10px] font-semibold uppercase tracking-display text-sand-50">
									{highlight.zone}
								</span>
							</div>
							<div className="flex flex-1 flex-col p-5">
								<p className="font-body text-xs text-muted-500">
									{highlight.date}
								</p>
								<h3 className="mt-1 font-display text-sm font-semibold uppercase leading-snug tracking-display text-charcoal-900">
									{highlight.title}
								</h3>
								<p className="mt-2 line-clamp-3 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
									{highlight.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
