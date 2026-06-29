import { MessageCircle, Share2 } from "lucide-react";
import type { RanthambhoreArticle } from "#/lib/highlights-data";
import { Image } from "#/util/Image";

export function FeaturedArticleSection({
	featured,
	sidebar,
}: {
	featured: RanthambhoreArticle;
	sidebar: RanthambhoreArticle[];
}) {
	return (
		<section
			className="px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Popular highlights"
		>
			<div className="mx-auto max-w-7xl">
				<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
					Popular Highlights
				</h2>

				<div className="mt-10 grid gap-10 lg:grid-cols-5">
					<article className="lg:col-span-3">
						<div className="overflow-hidden rounded-xl">
							<Image
								src={featured.image.src}
								alt={featured.image.alt}
								width={featured.image.width}
								height={featured.image.height}
								className="aspect-4/3 w-full object-cover lg:aspect-16/10"
							/>
						</div>
						<p className="mt-5 font-display text-xs uppercase tracking-display text-muted-500">
							{featured.category}
						</p>
						<h3 className="mt-2 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							{featured.title}
						</h3>
						<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
							{featured.excerpt}
						</p>
						<p className="mt-4 font-body text-sm text-charcoal-700">
							By <span className="text-sunset-600">{featured.author}</span>
						</p>
						{(featured.shares != null || featured.comments != null) && (
							<div className="mt-5 inline-flex items-center gap-5 rounded-lg border border-muted-300/60 px-4 py-2.5">
								{featured.shares != null && (
									<span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-500">
										<Share2 className="size-3.5" />
										{featured.shares}
									</span>
								)}
								{featured.comments != null && (
									<span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-500">
										<MessageCircle className="size-3.5" />
										{featured.comments}
									</span>
								)}
							</div>
						)}
					</article>

					<aside className="lg:col-span-2">
						<ul className="divide-y divide-muted-300/60">
							{sidebar.map((article) => (
								<li key={article.id} className="flex gap-4 py-5 first:pt-0">
									<div className="size-20 shrink-0 overflow-hidden rounded-lg">
										<Image
											src={article.image.src}
											alt={article.image.alt}
											width={article.image.width}
											height={article.image.height}
											className="size-full object-cover"
										/>
									</div>
									<div className="min-w-0">
										<h4 className="font-body text-sm font-semibold leading-snug text-charcoal-900">
											{article.title}
										</h4>
										<p className="mt-1 font-body text-xs text-muted-500">
											{article.date}
										</p>
									</div>
								</li>
							))}
						</ul>
					</aside>
				</div>
			</div>
		</section>
	);
}

export function HighlightsCardGrid({
	articles,
}: {
	articles: RanthambhoreArticle[];
}) {
	return (
		<section
			className="bg-sand-100 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="All highlights"
		>
			<div className="mx-auto max-w-7xl">
				<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
					Highlights
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
					{articles.map((article) => (
						<article key={article.id} className="flex flex-col">
							<div className="relative overflow-hidden rounded-xl">
								<Image
									src={article.image.src}
									alt={article.image.alt}
									width={article.image.width}
									height={article.image.height}
									className="aspect-4/3 w-full object-cover"
								/>
								{article.isNew ? (
									<span className="absolute left-3 top-3 rounded-sm bg-sunset-600 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-display text-sand-50">
										New
									</span>
								) : null}
							</div>
							<p className="mt-4 font-display text-xs uppercase tracking-display text-muted-500">
								{article.category}
							</p>
							<h3 className="mt-2 font-body text-lg font-semibold leading-snug text-charcoal-900">
								{article.title}
							</h3>
							<p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-charcoal-600">
								{article.excerpt}
							</p>
							{(article.shares != null || article.comments != null) && (
								<div className="mt-4 inline-flex w-fit items-center gap-5 rounded-lg border border-muted-300/60 px-4 py-2">
									{article.shares != null && (
										<span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-500">
											<Share2 className="size-3.5" />
											{article.shares}
										</span>
									)}
									{article.comments != null && (
										<span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-500">
											<MessageCircle className="size-3.5" />
											{article.comments}
										</span>
									)}
								</div>
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export function ArticleSpotlightSection({
	article,
	related,
	quickLinks,
}: {
	article: RanthambhoreArticle;
	related: { title: string }[];
	quickLinks: string[];
}) {
	return (
		<section
			className="border-t border-muted-300/40 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Featured spotlight"
		>
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-12">
					<aside className="lg:col-span-2">
						<h3 className="border-b border-muted-300/60 pb-2 font-display text-xs font-bold uppercase tracking-display text-charcoal-900">
							Related
						</h3>
						<ul className="mt-4 space-y-3">
							{related.map((item) => (
								<li key={item.title}>
									<span className="font-body text-sm font-semibold leading-snug text-charcoal-800">
										{item.title}
									</span>
								</li>
							))}
						</ul>

						<h3 className="mt-8 border-b border-muted-300/60 pb-2 font-display text-xs font-bold uppercase tracking-display text-charcoal-900">
							Trending
						</h3>
						<ol className="mt-4 space-y-3">
							{related.slice(0, 4).map((item, index) => (
								<li key={item.title} className="flex gap-2">
									<span className="font-display text-sm font-bold text-sunset-500">
										{index + 1}
									</span>
									<span className="font-body text-sm leading-snug text-charcoal-800">
										{item.title}
									</span>
								</li>
							))}
						</ol>
					</aside>

					<article className="lg:col-span-7">
						<h2 className="font-playfair text-3xl leading-tight text-charcoal-900 lg:text-4xl">
							{article.title}
						</h2>
						<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
							{article.excerpt}
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-4 font-body text-sm text-muted-500">
							<span>
								By <span className="text-sunset-600">{article.author}</span>
							</span>
							<span>·</span>
							<span>{article.category}</span>
							<span>·</span>
							<span>{article.date}</span>
							{article.readTime && (
								<>
									<span>·</span>
									<span>Read Time: {article.readTime}</span>
								</>
							)}
						</div>
						<div className="mt-8 overflow-hidden rounded-xl">
							<Image
								src={article.image.src}
								alt={article.image.alt}
								width={article.image.width}
								height={article.image.height}
								className="aspect-video w-full object-cover"
							/>
						</div>
						<div className="prose prose-charcoal mt-8 max-w-none font-body">
							<p>
								Ranthambore National Park remains one of India&apos;s most
								celebrated tiger reserves, drawing visitors from across the
								world. Whether you&apos;re planning your first safari or
								returning for another season, staying informed about park
								updates, seasonal patterns, and booking requirements will help
								you make the most of your visit.
							</p>
							<p>
								From the iconic lakes of Zones 1 and 2 to the quieter buffer
								forests of Zones 6 through 10, each territory offers a distinct
								experience. Our guides and naturalists share regular updates to
								help you plan with confidence.
							</p>
						</div>
					</article>

					<aside className="lg:col-span-3">
						<div className="rounded-xl border border-muted-300/60 p-5">
							<h3 className="font-display text-xs font-bold uppercase tracking-display text-charcoal-900">
								Quick Links
							</h3>
							<div className="mt-4 flex flex-wrap gap-2">
								{quickLinks.map((link) => (
									<span
										key={link}
										className="rounded border border-muted-300/60 bg-cream-50 px-3 py-1.5 font-body text-xs text-charcoal-700"
									>
										{link}
									</span>
								))}
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}

export function RanthambhoreTrendingSection({
	columns,
}: {
	columns: {
		id: string;
		image: { src: string; alt: string; width: number; height: number };
		items: { id: string; date: string; title: string; featured?: boolean }[];
	}[];
}) {
	return (
		<section
			className="border-t border-muted-300/40 bg-tiger-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Trending topics"
		>
			<div className="mx-auto max-w-7xl">
				<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
					Trending
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{columns.map((column) => (
						<article key={column.id} className="flex flex-col">
							<div className="relative aspect-4/3 overflow-hidden rounded-lg">
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
