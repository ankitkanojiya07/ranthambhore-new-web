import type {
	ParkTrendingColumn,
	RanthambhoreArticle,
} from "#/components/highlights/ranthambhore-highlight.types";
import type { handleGetPosts } from "#/server/function/get-posts.server";

type PostListItem = Awaited<ReturnType<typeof handleGetPosts>>["data"][number];

const FALLBACK_IMAGE = {
	src: "/hero/9.webp",
	alt: "Ranthambore National Park",
	width: 2048,
	height: 1365,
} as const;

const NEW_POST_DAYS = 30;

const TRENDING_CATEGORY_COLUMNS = [
	{ id: "visitors", categorySlugs: ["park-news"] },
	{ id: "season", categorySlugs: ["travel-guide"] },
	{ id: "booking", categorySlugs: ["safari-tips"] },
	{ id: "heritage", categorySlugs: ["heritage"] },
] as const;

function formatArticleDate(date: Date): string {
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(date);
}

function getPostDisplayDate(post: PostListItem): Date | null {
	return post.publishedAt ?? post.createdAt ?? null;
}

function isRecentPost(date: Date | null): boolean {
	if (!date) {
		return false;
	}

	const cutoff = new Date();
	cutoff.setDate(cutoff.getDate() - NEW_POST_DAYS);
	return date >= cutoff;
}

function mapPostImage(post: PostListItem) {
	return post.coverImage
		? {
				src: post.coverImage,
				alt: post.title,
				width: 1200,
				height: 900,
			}
		: FALLBACK_IMAGE;
}

export function mapPostToRanthambhoreArticle(
	post: PostListItem,
): RanthambhoreArticle {
	const displayDate = getPostDisplayDate(post);

	return {
		id: post.slug,
		category: post.category?.name ?? "Highlights",
		title: post.title,
		excerpt: post.excerpt ?? "",
		date: displayDate ? formatArticleDate(displayDate) : "",
		image: mapPostImage(post),
		...(isRecentPost(displayDate) ? { isNew: true } : {}),
	};
}

export type HomeHighlightCard = {
	id: string;
	slug?: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	isNew?: boolean;
};

export type HomeHighlightSlide = {
	id: string;
	cards: HomeHighlightCard[];
};

export function mapPostToHomeHighlightCard(
	post: PostListItem,
): HomeHighlightCard {
	const displayDate = getPostDisplayDate(post);

	return {
		id: post.slug,
		slug: post.slug,
		title: post.title,
		description: post.excerpt ?? "",
		image: mapPostImage(post),
		...(isRecentPost(displayDate) ? { isNew: true } : {}),
	};
}

export function groupHomeHighlightCardsIntoSlides(
	cards: HomeHighlightCard[],
): HomeHighlightSlide[] {
	const slides: HomeHighlightSlide[] = [];

	for (let index = 0; index < cards.length; index += 2) {
		const slideCards = cards.slice(index, index + 2);
		if (slideCards.length === 0) {
			continue;
		}

		slides.push({
			id: slideCards.map((card) => card.id).join("-"),
			cards: slideCards,
		});
	}

	return slides;
}

export function mapPostsToParkTrendingColumns(
	posts: PostListItem[],
): ParkTrendingColumn[] {
	const columns = TRENDING_CATEGORY_COLUMNS.map((column) => {
		const columnPosts = posts
			.filter(
				(post) =>
					post.category?.slug &&
					(column.categorySlugs as readonly string[]).includes(
						post.category.slug,
					),
			)
			.sort((a, b) => {
				const aDate = getPostDisplayDate(a)?.getTime() ?? 0;
				const bDate = getPostDisplayDate(b)?.getTime() ?? 0;
				return bDate - aDate;
			});

		const leadPost = columnPosts[0];
		if (!leadPost) {
			return null;
		}

		return {
			id: column.id,
			image: mapPostImage(leadPost),
			items: columnPosts.slice(0, 4).map((post, index) => {
				const displayDate = getPostDisplayDate(post);

				return {
					id: post.slug,
					date: displayDate ? formatArticleDate(displayDate) : "",
					title: post.title,
					featured: index === 0,
				};
			}),
			latestDate: getPostDisplayDate(leadPost)?.getTime() ?? 0,
		};
	})
		.filter((column): column is NonNullable<typeof column> => column !== null)
		.sort((a, b) => b.latestDate - a.latestDate)
		.map(({ latestDate: _latestDate, ...column }) => column);

	return columns;
}

export function resolveQuickLinkSlug(
	label: string,
	articles: RanthambhoreArticle[],
): string | undefined {
	const zoneMatch = /^Zone (\d+)$/.exec(label);
	if (zoneMatch) {
		const slug = `zone-${zoneMatch[1]}`;
		return articles.find((article) => article.id === slug)?.id;
	}

	const words = label
		.toLowerCase()
		.split(/[^a-z0-9]+/)
		.filter((word) => word.length > 2);

	if (words.length === 0) {
		return undefined;
	}

	return articles.find((article) => {
		const haystack = `${article.id} ${article.title}`.toLowerCase();
		return words.every((word) => haystack.includes(word));
	})?.id;
}

export function buildQuickLinks(
	labels: string[],
	articles: RanthambhoreArticle[],
) {
	return labels.map((label) => ({
		label,
		slug: resolveQuickLinkSlug(label, articles),
	}));
}
