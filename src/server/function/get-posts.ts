import { createServerFn } from "@tanstack/react-start";
import {
	getPostInputSchema,
	listPostsInputSchema,
} from "#/server/function/get-posts-schema";
import {
	handleGetCategories,
	handleGetPost,
	handleGetPosts,
	handleGetTags,
	handleGetZones,
} from "./get-posts.server";

export const getPosts = createServerFn({ method: "GET" })
	.validator(listPostsInputSchema)
	.handler(handleGetPosts);

export const getPost = createServerFn({ method: "GET" })
	.validator(getPostInputSchema)
	.handler(handleGetPost);

export const getTags = createServerFn({ method: "GET" }).handler(handleGetTags);

export const getCategories = createServerFn({ method: "GET" }).handler(
	handleGetCategories,
);

export const getZones = createServerFn({ method: "GET" }).handler(
	handleGetZones,
);
