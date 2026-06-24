import { type ImageProps, Image as UnpicImage } from "@unpic/react";

export const Image = (props: ImageProps) => {
	return <UnpicImage {...props} fallback="vercel" />;
};
