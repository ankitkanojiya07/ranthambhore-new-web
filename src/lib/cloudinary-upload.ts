export type CloudinaryUploadSignature = {
	cloudName: string;
	apiKey: string;
	timestamp: number;
	signature: string;
	folder: string;
};

type CloudinaryUploadResponse = {
	secure_url?: string;
	error?: { message?: string };
};

export async function uploadImageToCloudinary(
	file: File,
	params: CloudinaryUploadSignature,
): Promise<string> {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("api_key", params.apiKey);
	formData.append("timestamp", String(params.timestamp));
	formData.append("signature", params.signature);
	formData.append("folder", params.folder);

	const response = await fetch(
		`https://api.cloudinary.com/v1_1/${params.cloudName}/image/upload`,
		{ method: "POST", body: formData },
	);

	const result = (await response.json()) as CloudinaryUploadResponse;

	if (!response.ok || !result.secure_url) {
		throw new Error(result.error?.message ?? "Image upload failed");
	}

	return result.secure_url;
}
