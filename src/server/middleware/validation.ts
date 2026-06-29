import { createMiddleware } from "@tanstack/react-start";
import type { z } from "zod";

export function validationMiddleware<TSchema extends z.ZodType>(
	schema: TSchema,
) {
	return createMiddleware({ type: "function" })
		.validator((data: unknown) => schema.parse(data))
		.server(({ next }) => next());
}
