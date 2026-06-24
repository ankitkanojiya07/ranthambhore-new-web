import { type ImageProps, Image as UnpicImage } from "@unpic/react";
import placeholders from "#/lib/placeholders.json";

const isVercel = import.meta.env.VITE_VERCEL_ENV && import.meta.env.VITE_VERCEL_ENV !== "development";

export function Image({ src, className, ...props }: ImageProps) {
  const placeholder = placeholders[src as keyof typeof placeholders];
  const isTransparent = placeholder === "transparent";

  return (
    <UnpicImage
      src={src}
      fallback={isVercel ? "vercel" : undefined}
      background={isTransparent ? undefined : placeholder}
      className={`${
        isTransparent ? "opacity-0 transition-opacity duration-500" : ""
      } ${className ?? ""}`}
      onLoad={(e) => {
        if (isTransparent) {
          (e.target as HTMLImageElement).classList.replace("opacity-0", "opacity-100");
        }
      }}
      {...props}
    />
  );
}