import { type ImageProps, Image as UnpicImage } from "@unpic/react";
import placeholders from "#/lib/placeholders.json";


const ALLOWED_WIDTHS = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

export const Image = ({ src, ...props }: ImageProps) => {
	const background = placeholders[src as keyof typeof placeholders];
	return (
		<UnpicImage
			{...props}
			src={src}
			breakpoints={ALLOWED_WIDTHS}
			background={background}
			fallback="vercel"
		/>
	);
};
