import { MessageCircle, Share2 } from "lucide-react";
import { RanthambhoreArticleLink } from "#/components/highlights/ranthambhore-article-link";
import type {
	ParkTrendingColumn,
	RanthambhoreArticle,
} from "#/components/highlights/ranthambhore-highlight.types";
import { MarkdownContent } from "#/components/ui/markdown-content";
import { Image } from "#/util/Image";

const articleTitleClass =
	"transition-colors hover:text-tiger-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiger-500/40";

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
						<RanthambhoreArticleLink slug={featured.id} className="group block">
							<div className="overflow-hidden rounded-xl">
								<Image
									src={featured.image.src}
									alt={featured.image.alt}
									width={featured.image.width}
									height={featured.image.height}
									className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] lg:aspect-16/10"
								/>
							</div>
						</RanthambhoreArticleLink>
						<p className="mt-5 font-display text-xs uppercase tracking-display text-muted-500">
							{featured.category}
						</p>
						<h3 className="mt-2 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							<RanthambhoreArticleLink
								slug={featured.id}
								className={articleTitleClass}
							>
								{featured.title}
							</RanthambhoreArticleLink>
						</h3>
						<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
							{featured.excerpt}
						</p>
						{featured.author ? (
							<p className="mt-4 font-body text-sm text-charcoal-700">
								By <span className="text-sunset-600">{featured.author}</span>
							</p>
						) : null}
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
									<RanthambhoreArticleLink
										slug={article.id}
										className="size-20 shrink-0 overflow-hidden rounded-lg"
									>
										<Image
											src={article.image.src}
											alt={article.image.alt}
											width={article.image.width}
											height={article.image.height}
											className="size-full object-cover transition-transform duration-300 hover:scale-105"
										/>
									</RanthambhoreArticleLink>
									<div className="min-w-0">
										<h4 className="font-body text-sm font-semibold leading-snug text-charcoal-900">
											<RanthambhoreArticleLink
												slug={article.id}
												className={articleTitleClass}
											>
												{article.title}
											</RanthambhoreArticleLink>
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
							<RanthambhoreArticleLink
								slug={article.id}
								className="group relative block overflow-hidden rounded-xl"
							>
								<Image
									src={article.image.src}
									alt={article.image.alt}
									width={article.image.width}
									height={article.image.height}
									className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
								/>
								{article.isNew ? (
									<span className="absolute left-3 top-3 rounded-sm bg-sunset-600 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-display text-sand-50">
										New
									</span>
								) : null}
							</RanthambhoreArticleLink>
							<p className="mt-4 font-display text-xs uppercase tracking-display text-muted-500">
								{article.category}
							</p>
							<h3 className="mt-2 font-body text-lg font-semibold leading-snug text-charcoal-900">
								<RanthambhoreArticleLink
									slug={article.id}
									className={articleTitleClass}
								>
									{article.title}
								</RanthambhoreArticleLink>
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
	content,
	related,
	quickLinks,
}: {
	article: RanthambhoreArticle;
	content?: string;
	related: { id: string; title: string }[];
	quickLinks: { label: string; slug?: string }[];
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
								<li key={item.id}>
									<RanthambhoreArticleLink
										slug={item.id}
										className="font-body text-sm font-semibold leading-snug text-charcoal-800 hover:text-tiger-500"
									>
										{item.title}
									</RanthambhoreArticleLink>
								</li>
							))}
						</ul>

						<h3 className="mt-8 border-b border-muted-300/60 pb-2 font-display text-xs font-bold uppercase tracking-display text-charcoal-900">
							Trending
						</h3>
						<ol className="mt-4 space-y-3">
							{related.slice(0, 4).map((item, index) => (
								<li key={item.id} className="flex gap-2">
									<span className="font-display text-sm font-bold text-sunset-500">
										{index + 1}
									</span>
									<RanthambhoreArticleLink
										slug={item.id}
										className="font-body text-sm leading-snug text-charcoal-800 hover:text-tiger-500"
									>
										{item.title}
									</RanthambhoreArticleLink>
								</li>
							))}
						</ol>
					</aside>

					<article className="lg:col-span-7">
						<h2 className="font-playfair text-3xl leading-tight text-charcoal-900 lg:text-4xl">
							<RanthambhoreArticleLink
								slug={article.id}
								className={articleTitleClass}
							>
								{article.title}
							</RanthambhoreArticleLink>
						</h2>
						<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
							{article.excerpt}
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-4 font-body text-sm text-muted-500">
							{article.author ? (
								<>
									<span>
										By <span className="text-sunset-600">{article.author}</span>
									</span>
									<span>·</span>
								</>
							) : null}
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
						<RanthambhoreArticleLink
							slug={article.id}
							className="group mt-8 block overflow-hidden rounded-xl"
						>
							<Image
								src={article.image.src}
								alt={article.image.alt}
								width={article.image.width}
								height={article.image.height}
								className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
							/>
						</RanthambhoreArticleLink>
						{content ? (
							<MarkdownContent content={content} className="mt-8" />
						) : null}
					</article>

					<aside className="lg:col-span-3">
						<div className="rounded-xl border border-muted-300/60 p-5">
							<h3 className="font-display text-xs font-bold uppercase tracking-display text-charcoal-900">
								Quick Links
							</h3>
							<div className="mt-4 flex flex-wrap gap-2">
								{quickLinks.map((link) =>
									link.slug ? (
										<RanthambhoreArticleLink
											key={link.label}
											slug={link.slug}
											className="rounded border border-muted-300/60 bg-cream-50 px-3 py-1.5 font-body text-xs text-charcoal-700 transition-colors hover:border-tiger-500/40 hover:bg-sand-100 hover:text-tiger-600"
										>
											{link.label}
										</RanthambhoreArticleLink>
									) : (
										<span
											key={link.label}
											className="rounded border border-muted-300/60 bg-cream-50 px-3 py-1.5 font-body text-xs text-charcoal-700"
										>
											{link.label}
										</span>
									),
								)}
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
	columns: ParkTrendingColumn[];
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
							{column.items[0] ? (
								<RanthambhoreArticleLink
									slug={column.items[0].id}
									className="group relative block aspect-4/3 overflow-hidden rounded-lg"
								>
									<Image
										src={column.image.src}
										alt={column.image.alt}
										width={column.image.width}
										height={column.image.height}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
									/>
								</RanthambhoreArticleLink>
							) : (
								<div className="relative aspect-4/3 overflow-hidden rounded-lg">
									<Image
										src={column.image.src}
										alt={column.image.alt}
										width={column.image.width}
										height={column.image.height}
										className="h-full w-full object-cover"
									/>
								</div>
							)}
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
											<RanthambhoreArticleLink
												slug={item.id}
												className={articleTitleClass}
											>
												{item.title}
											</RanthambhoreArticleLink>
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
