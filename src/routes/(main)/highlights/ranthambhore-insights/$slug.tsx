import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { dailyUpdateDetailQueryOptions } from "#/components/daily-updates/queries/daily-updates.queries";
import { mapPostToRanthambhoreArticle } from "#/components/highlights/map-ranthambhore-highlight";
import { MarkdownContent } from "#/components/ui/markdown-content";
import { Image } from "#/util/Image";

export const Route = createFileRoute(
	"/(main)/highlights/ranthambhore-insights/$slug",
)({
	staticData: { navOverlay: false },
	loader: async ({ context: { queryClient }, params }) => {
		try {
			const post = await queryClient.ensureQueryData(
				dailyUpdateDetailQueryOptions({ slug: params.slug }),
			);
			return { post };
		} catch {
			throw notFound();
		}
	},
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData?.post?.title
					? `${loaderData.post.title} | Ranthambhore Highlights`
					: "Article | Ranthambhore Highlights",
			},
			...(loaderData?.post?.excerpt
				? [{ name: "description", content: loaderData.post.excerpt }]
				: []),
		],
	}),
	component: RanthambhoreArticlePage,
});

function RanthambhoreArticlePage() {
	const { slug } = Route.useParams();
	const { data: post } = useSuspenseQuery(
		dailyUpdateDetailQueryOptions({ slug }),
	);
	const article = mapPostToRanthambhoreArticle(post);

	return (
		<div className="bg-sand-50">
			<article className="px-6 py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-3xl">
					<Link
						to="/highlights/ranthambhore-insights"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-charcoal-700 transition-colors hover:text-tiger-500"
					>
						<ArrowLeft className="size-3.5" />
						All Highlights
					</Link>

					<p className="mt-8 font-display text-xs uppercase tracking-display text-muted-500">
						{article.category}
					</p>
					<h1 className="mt-2 font-playfair text-3xl leading-tight text-charcoal-900 lg:text-4xl">
						{article.title}
					</h1>
					<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
						{article.excerpt}
					</p>
					<p className="mt-4 font-body text-sm text-muted-500">
						{article.date}
					</p>

					<div className="mt-8 overflow-hidden rounded-xl">
						<Image
							src={article.image.src}
							alt={article.image.alt}
							width={article.image.width}
							height={article.image.height}
							className="aspect-video w-full object-cover"
						/>
					</div>

					{post.content ? (
						<MarkdownContent content={post.content} className="mt-10" />
					) : null}
				</div>
			</article>

			<section className="border-t border-muted-300/40 bg-sand-100 px-6 py-10 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<p className="font-body text-sm text-charcoal-600">
						Explore more park news, travel guides, and safari tips.
					</p>
					<Link
						to="/highlights/ranthambhore-insights"
						className="mt-4 inline-flex rounded-full bg-forest-500 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-display text-sand-50 transition-colors hover:bg-forest-600"
					>
						Back to Highlights
					</Link>
				</div>
			</section>
		</div>
	);
}
