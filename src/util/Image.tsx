import {
	forwardRef,
	type ImgHTMLAttributes,
	type Ref,
	useEffect,
	useRef,
} from "react";
import {
	cloudinarySrcSet,
	cloudinaryUrl,
	isCloudinaryUrl,
} from "#/lib/optimize-image";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
	priority?: boolean;
};

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
	if (typeof ref === "function") {
		ref(value);
	} else if (ref) {
		ref.current = value;
	}
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
	{
		src,
		className,
		alt = "",
		priority = false,
		loading,
		decoding,
		fetchPriority,
		srcSet,
		sizes,
		...props
	},
	forwardedRef,
) {
	const nodeRef = useRef<HTMLImageElement | null>(null);

	const resolvedSrc =
		typeof src === "string" && isCloudinaryUrl(src)
			? cloudinaryUrl(src, 960)
			: src;
	const resolvedSrcSet =
		srcSet ?? (typeof src === "string" ? cloudinarySrcSet(src) : undefined);

	useEffect(() => {
		if (priority) {
			return;
		}

		const node = nodeRef.current;
		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) {
					return;
				}

				if (typeof resolvedSrc === "string") {
					node.src = resolvedSrc;
				}
				if (resolvedSrcSet) {
					node.srcset = resolvedSrcSet;
				}
				observer.disconnect();
			},
			{ rootMargin: "160px 0px" },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [priority, resolvedSrc, resolvedSrcSet]);

	return (
		<img
			{...props}
			ref={(node) => {
				nodeRef.current = node;
				assignRef(forwardedRef, node);
			}}
			src={priority ? resolvedSrc : undefined}
			srcSet={priority ? resolvedSrcSet : undefined}
			sizes={
				sizes ??
				(resolvedSrcSet
					? "(max-width: 768px) 92vw, (max-width: 1200px) 50vw, 640px"
					: undefined)
			}
			alt={alt}
			className={className}
			loading={loading ?? (priority ? "eager" : "lazy")}
			decoding={decoding ?? "async"}
			fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
		/>
	);
});
