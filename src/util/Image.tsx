type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	priority?: boolean;
};

export function Image({
	src,
	className,
	alt = "",
	priority = false,
	loading,
	decoding,
	fetchPriority,
	...props
}: ImageProps) {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			loading={loading ?? (priority ? "eager" : "lazy")}
			decoding={decoding ?? (priority ? "sync" : "async")}
			fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
			{...props}
		/>
	);
}
