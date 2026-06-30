import { mutationOptions } from "@tanstack/react-query";
import { dailyUpdatesKeys } from "#/components/daily-updates/queries/daily-updates.keys";
import { uploadImageToCloudinary } from "#/lib/cloudinary-upload";
import { prepareImageForUpload } from "#/lib/file";
import { getCloudinaryUploadSignature } from "#/server/function/get-cloudinary-upload-signature";
import { createPost } from "#/server/function/post";
import type { CreatePostInput } from "#/server/function/post-schema.server";

export type CreatePostFormInput = CreatePostInput & {
	imageFile?: File | null;
};

export const createPostMutationOptions = mutationOptions({
	mutationFn: async ({ imageFile, ...postInput }: CreatePostFormInput) => {
		let coverImage = postInput.coverImage;

		if (imageFile) {
			const prepared = await prepareImageForUpload(imageFile);
			const signature = await getCloudinaryUploadSignature();
			coverImage = await uploadImageToCloudinary(prepared, signature);
		}

		return createPost({ data: { ...postInput, coverImage } });
	},
	onSuccess: (_response, _variables, _onMutateResult, context) => {
		context.client.invalidateQueries({ queryKey: dailyUpdatesKeys.all });
	},
});
