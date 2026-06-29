import { createServerFn } from "@tanstack/react-start";
import { createPostInputSchema } from "#/server/function/post-schema.server";
import { optionalAuthMiddleware } from "#/server/middleware";
import { handleCreatePost } from "./post.server";

export const createPost = createServerFn({ method: "POST" })
	.validator(createPostInputSchema)
	.middleware([optionalAuthMiddleware])
	.handler(handleCreatePost);
