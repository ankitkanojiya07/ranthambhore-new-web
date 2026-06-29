import { z } from "zod";

export const listPostsInputSchema = z.object({
	page: z.coerce.number().int().min(1).default(1),
	limit: z.coerce.number().int().min(1).max(50).default(10),
	status: z.enum(["draft", "published", "archived"]).default("published"),
	type: z.enum(["daily_update", "ranthambhore_update"]).optional(),
	categorySlug: z.string().trim().min(1).optional(),
	zoneId: z.string().trim().min(1).optional(),
	tagSlug: z.string().trim().min(1).optional(),
	search: z.string().trim().min(1).optional(),
	spottedDateFrom: z.coerce.date().optional(),
	spottedDateTo: z.coerce.date().optional(),
	sortBy: z
		.enum(["publishedAt", "spottedDate", "createdAt"])
		.default("publishedAt"),
	sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export const getPostInputSchema = z.object({
	slug: z.string().trim().min(1),
});

export type ListPostsInput = z.infer<typeof listPostsInputSchema>;
export type GetPostInput = z.infer<typeof getPostInputSchema>;
