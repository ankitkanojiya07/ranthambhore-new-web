import { createHash } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { and, eq, gt } from "drizzle-orm";
import { z } from "zod";
import { db } from "#/server/db";
import { blogPostTable } from "#/server/schema";

const reviewDailyUpdateInputSchema = z.object({
	token: z.string().regex(/^[a-f0-9]{64}$/),
	action: z.enum(["approve", "decline"]),
});

export const reviewDailyUpdate = createServerFn({ method: "POST" })
	.validator(reviewDailyUpdateInputSchema)
	.handler(async ({ data }) => {
		const tokenHash = createHash("sha256").update(data.token).digest("hex");
		const now = new Date();
		const [post] = await db
			.update(blogPostTable)
			.set({
				status: data.action === "approve" ? "published" : "archived",
				publishedAt: data.action === "approve" ? now : null,
				approvalTokenHash: null,
				approvalTokenExpiresAt: null,
			})
			.where(
				and(
					eq(blogPostTable.type, "daily_update"),
					eq(blogPostTable.status, "draft"),
					eq(blogPostTable.approvalTokenHash, tokenHash),
					gt(blogPostTable.approvalTokenExpiresAt, now),
				),
			)
			.returning({ id: blogPostTable.id });

		if (!post) {
			throw new Error(
				"This review link is invalid, expired, or has already been used.",
			);
		}

		return { action: data.action };
	});
