const CLOUDINARY_UPLOAD_SEGMENT = "/image/upload/";

export function isCloudinaryUrl(src: string): boolean {
	return (
		src.includes("res.cloudinary.com") &&
		src.includes(CLOUDINARY_UPLOAD_SEGMENT)
	);
}

export function cloudinaryUrl(src: string, width: number): string {
	if (!isCloudinaryUrl(src) || src.includes("f_auto")) {
		return src;
	}

	return src.replace(
		CLOUDINARY_UPLOAD_SEGMENT,
		`${CLOUDINARY_UPLOAD_SEGMENT}f_auto,q_auto:eco,c_limit,w_${width}/`,
	);
}

export function cloudinarySrcSet(src: string): string | undefined {
	if (!isCloudinaryUrl(src) || src.includes("f_auto")) {
		return undefined;
	}

	return [480, 768, 1024, 1280]
		.map((width) => `${cloudinaryUrl(src, width)} ${width}w`)
		.join(", ");
}
