// import { type ImageProps, Image as UnpicImage } from "@unpic/react";
// import placeholders from "#/lib/placeholders.json";

// const isVercel = import.meta.env.VITE_VERCEL_ENV && import.meta.env.VITE_VERCEL_ENV !== "development";

export function Image({
	src,
	className,
	alt,
	...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
	// const placeholder = placeholders[src as keyof typeof placeholders];
	// const isTransparent = placeholder === "transparent";
	// console.log({isVercel});
	// console.log({placeholder});
	// console.log({isTransparent});

	return (
		// <UnpicImage
		//   src={src}
		//   fallback={isVercel ? "vercel" : undefined}
		//   background={isTransparent ? undefined : placeholder}
		//   {...props}
		// />
		<img src={src} alt={alt} className={className} {...props} />
	);
}
