import { type ImageProps, Image as UnpicImage } from "@unpic/react";

const isVercel =
	import.meta.env.VITE_VERCEL_ENV &&
	import.meta.env.VITE_VERCEL_ENV !== "development";

export const Image = (props: ImageProps) => {
	return <UnpicImage {...props} fallback={"vercel"} />;
};
