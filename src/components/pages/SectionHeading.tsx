import { cn } from "#/lib/utils";

interface SectionHeadingProps {
	eyebrow: string;
	title: string;
	centered?: boolean;
	className?: string;
}

export function SectionHeading({
	eyebrow,
	title,
	centered = true,
	className,
}: SectionHeadingProps) {
	return (
		<div className={cn(centered && "text-center", className)}>
			<p className="font-display text-xs uppercase tracking-display text-sunset-700">
				{eyebrow}
			</p>
			<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
				{title}
			</h2>
			<div
				className={cn("mt-5 h-px w-16 bg-sunset-500/40", centered && "mx-auto")}
			/>
		</div>
	);
}
