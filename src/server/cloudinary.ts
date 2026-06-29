import { v2 as cloudinary } from "cloudinary";

export const DAILY_UPDATES_FOLDER = "daily-updates";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type CloudinaryUploadSignature = {
	cloudName: string;
	apiKey: string;
	timestamp: number;
	signature: string;
	folder: string;
};

export function generateUploadSignature(
	folder = DAILY_UPDATES_FOLDER,
): CloudinaryUploadSignature {
	const apiSecret = process.env.CLOUDINARY_API_SECRET;
	const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
	const apiKey = process.env.CLOUDINARY_API_KEY;

	if (!apiSecret || !cloudName || !apiKey) {
		throw new Error("Cloudinary is not configured");
	}

	const timestamp = Math.round(Date.now() / 1000);
	const params = { timestamp, folder };
	const signature = cloudinary.utils.api_sign_request(params, apiSecret);

	return {
		cloudName,
		apiKey,
		timestamp,
		signature,
		folder,
	};
}
