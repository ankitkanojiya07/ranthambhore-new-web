import type { ReactNode } from "react";
import {
	FormFieldLabel,
	FormInput,
	formInputClasses,
	formLabelClasses,
} from "#/components/forms/form-field";

export { FormFieldLabel as AuthFieldLabel, FormInput as AuthInput };
export { formInputClasses, formLabelClasses };

export function AuthCard({
	title,
	subtitle,
	children,
	footer,
}: {
	title: string;
	subtitle?: string;
	children: ReactNode;
	footer?: ReactNode;
}) {
	return (
		<section className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto w-full max-w-md">
				<div className="overflow-hidden rounded-2xl bg-cream-100 shadow-sm ring-1 ring-muted-300">
					<div className="px-6 py-8 sm:px-8 sm:py-10">
						<div className="mb-8 text-center">
							<h1 className="font-display text-2xl text-charcoal-800">
								{title}
							</h1>
							{subtitle && (
								<p className="mt-2 font-body text-sm text-charcoal-600">
									{subtitle}
								</p>
							)}
						</div>
						{children}
					</div>
					{footer && (
						<div className="border-t border-muted-300 bg-sand-100 px-6 py-4 text-center sm:px-8">
							{footer}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
