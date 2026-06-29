const MAX_UPLOAD_BYTES = 9 * 1024 * 1024;
const MAX_DIMENSION = 2040;
const JPEG_QUALITY_START = 0.85;
const JPEG_QUALITY_MIN = 0.5;

function canvasToBlob(
	canvas: HTMLCanvasElement,
	type: string,
	quality: number,
): Promise<Blob> {
	return new Promise((resolve, reject) => {
		canvas.toBlob(
			(blob) => {
				if (blob) {
					resolve(blob);
					return;
				}
				reject(new Error("Failed to compress image"));
			},
			type,
			quality,
		);
	});
}

export async function prepareImageForUpload(file: File): Promise<File> {
	if (!file.type.startsWith("image/")) {
		return file;
	}

	if (file.size <= MAX_UPLOAD_BYTES && file.type === "image/jpeg") {
		return file;
	}

	const bitmap = await createImageBitmap(file);
	const longestEdge = Math.max(bitmap.width, bitmap.height);
	const scale = Math.min(1, MAX_DIMENSION / longestEdge);
	const width = Math.max(1, Math.round(bitmap.width * scale));
	const height = Math.max(1, Math.round(bitmap.height * scale));

	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;

	const context = canvas.getContext("2d");
	if (!context) {
		bitmap.close();
		return file;
	}

	context.drawImage(bitmap, 0, 0, width, height);
	bitmap.close();

	let quality = JPEG_QUALITY_START;
	let blob = await canvasToBlob(canvas, "image/jpeg", quality);

	while (blob.size > MAX_UPLOAD_BYTES && quality > JPEG_QUALITY_MIN) {
		quality -= 0.1;
		blob = await canvasToBlob(canvas, "image/jpeg", quality);
	}

	const baseName = file.name.replace(/\.[^.]+$/, "") || "upload";
	return new File([blob], `${baseName}.jpg`, {
		type: "image/jpeg",
		lastModified: Date.now(),
	});
}
