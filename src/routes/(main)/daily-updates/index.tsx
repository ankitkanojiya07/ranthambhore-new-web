import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
	dailyUpdateCategoriesQueryOptions,
	dailyUpdateDetailQueryOptions,
	dailyUpdatesListQueryOptions,
	dailyUpdateTagsQueryOptions,
	dailyUpdateZonesQueryOptions,
} from "#/components/daily-updates/queries/daily-updates.queries";

export const Route = createFileRoute("/(main)/daily-updates/")({
	loader: async ({ context: { queryClient } }) => {
		const posts = await queryClient.ensureQueryData(
			dailyUpdatesListQueryOptions(),
		);

		await Promise.all([
			queryClient.ensureQueryData(dailyUpdateCategoriesQueryOptions()),
			queryClient.ensureQueryData(dailyUpdateTagsQueryOptions()),
			queryClient.ensureQueryData(dailyUpdateZonesQueryOptions()),
		]);

		const demoSlug = posts.data[0]?.slug;
		if (demoSlug) {
			await queryClient.ensureQueryData(
				dailyUpdateDetailQueryOptions({ slug: demoSlug }),
			);
		}
	},
	head: () => ({
		meta: [{ title: "Daily Updates | Ranthambhore.com" }],
	}),
	component: DailyUpdatesPage,
});

function DemoPanel({
	title,
	description,
	data,
}: {
	title: string;
	description: string;
	data: unknown;
}) {
	return (
		<section className="rounded-2xl bg-cream-100 p-6 ring-1 ring-muted-300">
			<h2 className="font-display text-lg text-charcoal-800">{title}</h2>
			<p className="mt-1 font-body text-sm text-charcoal-600">{description}</p>
			<pre className="mt-4 max-h-80 overflow-auto rounded-xl bg-charcoal-800 p-4 font-mono text-xs leading-relaxed text-sand-100">
				{JSON.stringify(data, null, 2)}
			</pre>
		</section>
	);
}

function PostDetailDemo({ slug }: { slug: string }) {
	const { data: post } = useSuspenseQuery(
		dailyUpdateDetailQueryOptions({ slug }),
	);

	return (
		<DemoPanel
			title="getPost"
			description={`Single post fetched by slug: ${slug}`}
			data={post}
		/>
	);
}

function DailyUpdatesPage() {
	const { data: posts } = useSuspenseQuery(dailyUpdatesListQueryOptions());
	const { data: categories } = useSuspenseQuery(
		dailyUpdateCategoriesQueryOptions(),
	);
	const { data: tags } = useSuspenseQuery(dailyUpdateTagsQueryOptions());
	const { data: zones } = useSuspenseQuery(dailyUpdateZonesQueryOptions());
	const demoSlug = posts.data[0]?.slug;

	return (
		<div className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
				<header className="text-center">
					<p className="font-display text-xs uppercase tracking-display text-forest-600">
						Daily Updates
					</p>
					<h1 className="mt-2 font-display text-3xl text-charcoal-800">
						Server Functions Demo
					</h1>
					<p className="mx-auto mt-3 max-w-2xl font-body text-sm text-charcoal-600">
						Data is prefetched in the route loader via{" "}
						<code className="rounded bg-sand-200 px-1.5 py-0.5 text-xs">
							queryClient.ensureQueryData
						</code>{" "}
						and read in the component with{" "}
						<code className="rounded bg-sand-200 px-1.5 py-0.5 text-xs">
							useSuspenseQuery
						</code>
						.
					</p>
					<Link
						to="/daily-updates/new"
						className="mt-6 inline-flex rounded-full bg-forest-500 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-display text-sand-50 transition-colors hover:bg-forest-600"
					>
						New Daily Update
					</Link>
				</header>

				<div className="grid gap-6 lg:grid-cols-2">
					<DemoPanel
						title="getPosts"
						description="Paginated list of published daily updates"
						data={posts}
					/>
					<DemoPanel
						title="getCategories"
						description="All blog categories"
						data={categories}
					/>
					<DemoPanel title="getTags" description="All blog tags" data={tags} />
					<DemoPanel
						title="getZones"
						description="All safari zones"
						data={zones}
					/>
				</div>

				{demoSlug ? (
					<PostDetailDemo slug={demoSlug} />
				) : (
					<section className="rounded-2xl bg-cream-100 p-6 ring-1 ring-muted-300">
						<h2 className="font-display text-lg text-charcoal-800">getPost</h2>
						<p className="mt-2 font-body text-sm text-charcoal-600">
							No published daily updates yet. Create one to demo single-post
							fetching.
						</p>
					</section>
				)}
			</div>
		</div>
	);
}
