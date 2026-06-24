import { type ImageProps, Image as UnpicImage } from "@unpic/react";

const ALLOWED_WIDTHS = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

export const Image = (props: ImageProps) => {
	return (
		<UnpicImage {...props} breakpoints={ALLOWED_WIDTHS} fallback="vercel" />
	);
};
