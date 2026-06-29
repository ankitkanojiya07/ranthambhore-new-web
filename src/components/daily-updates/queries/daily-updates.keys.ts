import type { ListPostsInput } from "#/server/function/get-posts-schema";

export const dailyUpdatesKeys = {
	all: ["daily-updates"] as const,
	lists: () => [...dailyUpdatesKeys.all, "list"] as const,
	list: (input: ListPostsInput) =>
		[...dailyUpdatesKeys.lists(), input] as const,
	details: () => [...dailyUpdatesKeys.all, "detail"] as const,
	detail: (slug: string) => [...dailyUpdatesKeys.details(), slug] as const,
	categories: () => [...dailyUpdatesKeys.all, "categories"] as const,
	tags: () => [...dailyUpdatesKeys.all, "tags"] as const,
	zones: () => [...dailyUpdatesKeys.all, "zones"] as const,
};
