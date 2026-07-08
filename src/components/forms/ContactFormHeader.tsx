import { cn } from "#/lib/utils";

export function ContactFormHeader({ className }: { className?: string }) {
	return (
		<p
			className={cn(
				"font-display text-xs font-medium uppercase tracking-display text-earth-500 lg:text-sm",
				className,
			)}
		>
			Feel Free To Communicate With Us
		</p>
	);
}
