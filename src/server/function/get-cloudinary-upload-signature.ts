import { createServerFn } from "@tanstack/react-start";
import { requireAuthMiddleware } from "#/server/middleware";

export const getCloudinaryUploadSignature = createServerFn({
	method: "GET",
})
	.middleware([requireAuthMiddleware])
	.handler(async () => {
		const { generateUploadSignature } = await import("#/server/cloudinary");
		return generateUploadSignature();
	});
