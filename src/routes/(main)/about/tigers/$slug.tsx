import { createFileRoute, notFound } from "@tanstack/react-router";
import { TigerDetailPage } from "#/components/pages/TigerDetailPage";
import { getTigerBySlug } from "#/lib/tigers";

export const Route = createFileRoute("/(main)/about/tigers/$slug")({
	staticData: { navOverlay: false },
	loader: ({ params }) => {
		const tiger = getTigerBySlug(params.slug);
		if (!tiger) {
			throw notFound();
		}
		return { tiger };
	},
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData?.tiger
					? `${loaderData.tiger.name} (${loaderData.tiger.meta.code}) | Tigers of Ranthambore`
					: "Tiger Profile | Tigers of Ranthambore",
			},
			...(loaderData?.tiger?.excerpt
				? [{ name: "description", content: loaderData.tiger.excerpt }]
				: []),
		],
	}),
	component: TigerProfilePage,
});

function TigerProfilePage() {
	const { tiger } = Route.useLoaderData();
	return <TigerDetailPage tiger={tiger} />;
}
