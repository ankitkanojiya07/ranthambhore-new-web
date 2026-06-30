import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { mapPostToSafariHighlight } from "#/components/daily-updates/map-safari-highlight";
import { dailyUpdateDetailQueryOptions } from "#/components/daily-updates/queries/daily-updates.queries";
import { MarkdownContent } from "#/components/ui/markdown-content";
import { Image } from "#/util/Image";

export const Route = createFileRoute(
	"/(main)/highlights/safari-insights/$slug",
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
					? `${loaderData.post.title} | Safari Highlights — Ranthambore`
					: "Sighting | Safari Highlights — Ranthambore",
			},
			...(loaderData?.post?.excerpt
				? [{ name: "description", content: loaderData.post.excerpt }]
				: []),
		],
	}),
	component: SafariSightingPage,
});

function SafariSightingPage() {
	const { slug } = Route.useParams();
	const { data: post } = useSuspenseQuery(
		dailyUpdateDetailQueryOptions({ slug }),
	);
	const highlight = mapPostToSafariHighlight(post);

	return (
		<div className="bg-sand-50">
			<article className="px-6 py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-3xl">
					<Link
						to="/highlights/safari-insights"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-charcoal-700 transition-colors hover:text-tiger-500"
					>
						<ArrowLeft className="size-3.5" />
						All Safari Highlights
					</Link>

					<p className="mt-8 font-display text-xs uppercase tracking-display text-forest-600">
						{highlight.zone}
					</p>
					<h1 className="mt-2 font-playfair text-3xl leading-tight text-charcoal-900 lg:text-4xl">
						{highlight.title}
					</h1>
					<p className="mt-4 font-body text-base leading-relaxed text-charcoal-600">
						{highlight.description}
					</p>
					<p className="mt-4 font-body text-sm text-muted-500">
						Spotted {highlight.date}
					</p>

					<div className="mt-8 overflow-hidden rounded-xl">
						<Image
							src={highlight.image.src}
							alt={highlight.image.alt}
							width={highlight.image.width}
							height={highlight.image.height}
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
						Explore more tiger sightings and wildlife updates from Ranthambore.
					</p>
					<Link
						to="/highlights/safari-insights"
						className="mt-4 inline-flex rounded-full bg-forest-500 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-display text-sand-50 transition-colors hover:bg-forest-600"
					>
						Back to Safari Highlights
					</Link>
				</div>
			</section>
		</div>
	);
}
