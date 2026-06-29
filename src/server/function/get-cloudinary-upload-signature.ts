import { createServerFn } from "@tanstack/react-start";

export const getCloudinaryUploadSignature = createServerFn({
	method: "GET",
}).handler(async () => {
	const { generateUploadSignature } = await import("#/server/cloudinary");
	return generateUploadSignature();
});
