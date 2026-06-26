import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { Spinner } from "#/components/ui/spinner";
import { cn } from "#/lib/utils";

export const buttonVariants = cva(
	"relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border font-display text-xs uppercase outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-forest-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-sand-50 disabled:pointer-events-none disabled:opacity-60 data-loading:select-none data-loading:text-transparent [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		defaultVariants: {
			size: "default",
			variant: "default",
		},
		variants: {
			size: {
				default: "px-6 py-2 tracking-nav",
				sm: "px-5 py-1.5 tracking-nav",
				lg: "px-8 py-3 tracking-display",
				xl: "px-10 py-4 tracking-display",
				icon: "size-11",
				"icon-lg": "size-12",
				"icon-sm": "size-9",
				"icon-xl": "size-14 [&_svg:not([class*='size-'])]:size-5",
				"icon-xs": "size-7",
			},
			variant: {
				default:
					"border-transparent bg-sunset-500 text-charcoal-900 tracking-display hover:bg-sunset-600 data-pressed:bg-sunset-600 *:data-[slot=button-loading-indicator]:text-charcoal-900",
				outline:
					"border-charcoal-800 bg-transparent text-charcoal-800 tracking-nav hover:bg-charcoal-800 hover:text-sand-50 data-pressed:bg-charcoal-800 data-pressed:text-sand-50 *:data-[slot=button-loading-indicator]:text-charcoal-800",
				secondary:
					"border-transparent bg-forest-500 text-sand-50 tracking-display hover:bg-forest-600 data-pressed:bg-forest-600 *:data-[slot=button-loading-indicator]:text-sand-50",
				ghost:
					"border-transparent text-charcoal-800 hover:bg-sand-100 data-pressed:bg-sand-100 *:data-[slot=button-loading-indicator]:text-charcoal-800",
				link: "border-transparent text-forest-600 underline-offset-4 hover:underline data-pressed:underline *:data-[slot=button-loading-indicator]:text-forest-600",
				destructive:
					"border-transparent bg-earth-700 text-sand-50 tracking-display hover:bg-earth-800 data-pressed:bg-earth-800 *:data-[slot=button-loading-indicator]:text-sand-50",
				"destructive-outline":
					"border-earth-700 bg-transparent text-earth-700 tracking-nav hover:bg-earth-700 hover:text-sand-50 data-pressed:bg-earth-700 data-pressed:text-sand-50 *:data-[slot=button-loading-indicator]:text-earth-700",
			},
		},
	},
);

export interface ButtonProps extends useRender.ComponentProps<"button"> {
	variant?: VariantProps<typeof buttonVariants>["variant"];
	size?: VariantProps<typeof buttonVariants>["size"];
	loading?: boolean;
}

export function Button({
	className,
	variant,
	size,
	render,
	children,
	loading = false,
	disabled: disabledProp,
	...props
}: ButtonProps): React.ReactElement {
	const isDisabled: boolean = Boolean(loading || disabledProp);
	const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
		render ? undefined : "button";

	const defaultProps = {
		children: (
			<>
				{children}
				{loading && (
					<Spinner
						className="pointer-events-none absolute"
						data-slot="button-loading-indicator"
					/>
				)}
			</>
		),
		className: cn(buttonVariants({ className, size, variant })),
		"aria-disabled": loading || undefined,
		"data-loading": loading ? "" : undefined,
		"data-slot": "button",
		disabled: isDisabled,
		type: typeValue,
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, props),
		render,
	});
}
