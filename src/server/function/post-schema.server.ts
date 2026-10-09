import { createInsertSchema } from "drizzle-orm/zod";
import { z } from "zod";
import { blogPostTable } from "#/server/schema";

export const createPostInputSchema = createInsertSchema(blogPostTable, {
	title: (schema) => schema.min(1),
	content: (schema) => schema.min(1),
})
	.pick({
		title: true,
		content: true,
		coverImage: true,
		status: true,
		type: true,
		metaDescription: true,
		authorId: true,
		spottedDate: true,
	})
	.extend({
		category: z.string().trim().optional(),
		zoneId: z.string().trim().optional(),
		submitterName: z
			.string()
			.trim()
			.max(120)
			.transform((value) => value || undefined)
			.optional(),
		submitterEmail: z
			.string()
			.trim()
			.transform((value) => value || undefined)
			.pipe(z.email().optional())
			.optional(),
		tags: z.array(z.string().trim().min(1)).optional(),
		spottedDate: z.coerce.date().optional(),
	});

export type CreatePostInput = z.infer<typeof createPostInputSchema>;
