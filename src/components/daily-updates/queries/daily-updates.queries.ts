import { queryOptions } from "@tanstack/react-query";
import {
	getCategories,
	getPost,
	getPosts,
	getTags,
	getZones,
} from "#/server/function/get-posts";
import type {
	GetPostInput,
	ListPostsInput,
} from "#/server/function/get-posts-schema";
import { dailyUpdatesKeys } from "./daily-updates.keys";

export const defaultDailyUpdatesListInput = {
	page: 1,
	limit: 10,
	status: "published",
	type: "daily_update",
	sortBy: "publishedAt",
	sortOrder: "desc",
} satisfies ListPostsInput;

export const homeSafariHighlightsListInput = {
	page: 1,
	limit: 4,
	status: "published",
	type: "daily_update",
	sortBy: "spottedDate",
	sortOrder: "desc",
} satisfies ListPostsInput;

export const homeSafariHighlightsQueryOptions = () =>
	dailyUpdatesListQueryOptions(homeSafariHighlightsListInput);

export const safariInsightsListInput = {
	page: 1,
	limit: 50,
	status: "published",
	type: "daily_update",
	sortBy: "spottedDate",
	sortOrder: "desc",
} satisfies ListPostsInput;

export const safariInsightsQueryOptions = () =>
	dailyUpdatesListQueryOptions(safariInsightsListInput);

export const ranthambhoreInsightsListInput = {
	page: 1,
	limit: 50,
	status: "published",
	type: "ranthambhore_update",
	sortBy: "publishedAt",
	sortOrder: "desc",
} satisfies ListPostsInput;

export const ranthambhoreInsightsQueryOptions = () =>
	dailyUpdatesListQueryOptions(ranthambhoreInsightsListInput);

export const dailyUpdatesListQueryOptions = (
	input: ListPostsInput = defaultDailyUpdatesListInput,
) =>
	queryOptions({
		queryKey: dailyUpdatesKeys.list(input),
		queryFn: () => getPosts({ data: input }),
	});

export const dailyUpdateDetailQueryOptions = (input: GetPostInput) =>
	queryOptions({
		queryKey: dailyUpdatesKeys.detail(input.slug),
		queryFn: () => getPost({ data: input }),
	});

export const dailyUpdateCategoriesQueryOptions = () =>
	queryOptions({
		queryKey: dailyUpdatesKeys.categories(),
		queryFn: () => getCategories(),
	});

export const dailyUpdateTagsQueryOptions = () =>
	queryOptions({
		queryKey: dailyUpdatesKeys.tags(),
		queryFn: () => getTags(),
	});

export const dailyUpdateZonesQueryOptions = () =>
	queryOptions({
		queryKey: dailyUpdatesKeys.zones(),
		queryFn: () => getZones(),
	});
