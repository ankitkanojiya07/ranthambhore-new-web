import type {
	SafariHighlight,
	SafariZoneCard,
	TrendingColumn,
} from "#/components/highlights/safari-highlight.types";
import { getZoneByNumber } from "#/lib/highlights-data";
import type {
	handleGetPosts,
	handleGetZones,
} from "#/server/function/get-posts.server";

type PostListItem = Awaited<ReturnType<typeof handleGetPosts>>["data"][number];
type DbZone = Awaited<ReturnType<typeof handleGetZones>>[number];

const FALLBACK_IMAGE = {
	src: "/hero/9.webp",
	alt: "Tiger in Ranthambore National Park",
	width: 2048,
	height: 1365,
} as const;

function formatHighlightDate(date: Date): string {
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(date);
}

function getPostDisplayDate(post: PostListItem): Date | null {
	return post.spottedDate ?? post.publishedAt ?? post.createdAt ?? null;
}

function formatZoneLabel(
	zone: NonNullable<PostListItem["zone"]> | null,
): string {
	if (!zone) {
		return "Ranthambore";
	}

	return `Zone ${zone.number}`;
}

function getZoneOverlay(zoneNumber: number) {
	return getZoneByNumber(zoneNumber);
}

export function mapPostToSafariHighlight(post: PostListItem): SafariHighlight {
	const displayDate = getPostDisplayDate(post);

	return {
		id: post.slug,
		title: post.title,
		zone: formatZoneLabel(post.zone),
		date: displayDate ? formatHighlightDate(displayDate) : "",
		description: post.excerpt ?? "",
		image: post.coverImage
			? {
					src: post.coverImage,
					alt: post.title,
					width: 1200,
					height: 900,
				}
			: FALLBACK_IMAGE,
	};
}

export function mapPostsToTrendingColumns(
	posts: PostListItem[],
): TrendingColumn[] {
	const postsByZone = new Map<string, PostListItem[]>();

	for (const post of posts) {
		const zoneKey = post.zone?.id ?? "unassigned";
		const zonePosts = postsByZone.get(zoneKey) ?? [];
		zonePosts.push(post);
		postsByZone.set(zoneKey, zonePosts);
	}

	return [...postsByZone.entries()]
		.map(([zoneKey, zonePosts]) => {
			const sortedPosts = [...zonePosts].sort((a, b) => {
				const aDate = getPostDisplayDate(a)?.getTime() ?? 0;
				const bDate = getPostDisplayDate(b)?.getTime() ?? 0;
				return bDate - aDate;
			});
			const leadPost = sortedPosts[0];

			if (!leadPost) {
				return null;
			}

			return {
				id: zoneKey,
				image: leadPost.coverImage
					? {
							src: leadPost.coverImage,
							alt: leadPost.title,
							width: 1200,
							height: 900,
						}
					: FALLBACK_IMAGE,
				items: sortedPosts.slice(0, 4).map((post, index) => {
					const displayDate = getPostDisplayDate(post);

					return {
						id: post.slug,
						date: displayDate ? formatHighlightDate(displayDate) : "",
						title: post.title,
						featured: index === 0,
					};
				}),
				latestDate: getPostDisplayDate(leadPost)?.getTime() ?? 0,
			};
		})
		.filter((column): column is NonNullable<typeof column> => column !== null)
		.sort((a, b) => b.latestDate - a.latestDate)
		.slice(0, 4)
		.map(({ latestDate: _latestDate, ...column }) => column);
}

export function mapDbZoneToSafariZoneCard(zone: DbZone): SafariZoneCard {
	const overlay = getZoneOverlay(zone.number);

	return {
		id: zone.id,
		zoneNumber: zone.number,
		slug: zone.slug,
		name: overlay?.name ?? `Zone ${zone.number} — ${zone.name}`,
		tagline: overlay?.tagline ?? zone.description ?? "",
		description: overlay?.description ?? zone.description ?? "",
		safariType: zone.safariType,
		image: overlay?.image ?? FALLBACK_IMAGE,
		bestFor: overlay?.bestFor ?? zone.safariType ?? "Safari",
		insights: overlay?.insights ?? [],
	};
}
