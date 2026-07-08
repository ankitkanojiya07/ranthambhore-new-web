import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

export const formInputClasses =
	"w-full rounded border border-muted-300 bg-sand-50 px-3 py-2 font-body text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:border-sunset-500 focus:outline-none";

export const formDateInputClasses = `${formInputClasses} [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-70`;

export const formLabelClasses =
	"mb-1 block font-display text-[10px] uppercase tracking-display text-charcoal-700";

export const formSpacingClass = "space-y-3";
export const formGridGapClass = "gap-3";

export const formSubmitButtonClasses =
	"rounded bg-sunset-500 px-8 py-2.5 font-display text-xs uppercase tracking-display text-sand-50 transition-colors hover:bg-sunset-600 disabled:cursor-not-allowed disabled:opacity-60";

export function FormFieldLabel({
	htmlFor,
	children,
	required = false,
	className,
}: {
	htmlFor: string;
	children: ReactNode;
	required?: boolean;
	className?: string;
}) {
	return (
		<label htmlFor={htmlFor} className={cn(formLabelClasses, className)}>
			{children}
			{required && <span className="text-sunset-600"> *</span>}
		</label>
	);
}

export function FormInput({
	className,
	...props
}: React.ComponentProps<"input">) {
	return (
		<input className={cn(formInputClasses, className)} {...props} />
	);
}

export function FormTextarea({
	className,
	...props
}: React.ComponentProps<"textarea">) {
	return (
		<textarea className={cn(formInputClasses, className)} {...props} />
	);
}
