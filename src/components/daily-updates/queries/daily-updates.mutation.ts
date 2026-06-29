import { mutationOptions } from "@tanstack/react-query";
import { uploadImageToCloudinary } from "#/lib/cloudinary-upload";
import { prepareImageForUpload } from "#/lib/file";
import { getCloudinaryUploadSignature } from "#/server/function/get-cloudinary-upload-signature";
import { createPost } from "#/server/function/post";
import type { CreatePostInput } from "#/server/function/post-schema.server";
import { dailyUpdatesKeys } from "./daily-updates.keys";

export type DailyUpdateFormInput = CreatePostInput & {
	imageFile?: File | null;
};

export const createDailyUpdateMutationOptions = mutationOptions({
	mutationFn: async ({ imageFile, ...postInput }: DailyUpdateFormInput) => {
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
