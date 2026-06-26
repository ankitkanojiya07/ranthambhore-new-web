import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

const CTASection = ({
	eyebrowLabel = "Plan Your Visit",
	title = "Be Part of Ranthambore's Living Story",
	description = "Walk the same ancient forests that sheltered Maharajas, tigers, and legends. Your chapter in Ranthambore's story begins with a single safari.",
	buttonText = "Book a Safari",
	buttonLink = "/safari/book",
	secondaryButtonText = "Get Free Quote",
	secondaryButtonLink = "/contact",
	variant = "dark",
	className = "",
}: {
	eyebrowLabel?: string;
	title?: string;
	description?: string;
	buttonText?: string;
	buttonLink?: string;
	secondaryButtonText?: string;
	secondaryButtonLink?: string;
	variant?: "light" | "dark";
	className?: string;
}) => {
	const isDark = variant === "dark";

	return (
		<section
			className={cn(
				"px-6 py-24 lg:px-8 lg:py-32",
				isDark ? "bg-forest-900" : "bg-sand-50",
				className,
			)}
			aria-label="Call to action"
		>
			<div className="mx-auto max-w-3xl text-center">
				<p
					className={cn(
						"font-display text-xs uppercase tracking-display",
						isDark ? "text-sunset-400" : "text-sunset-500",
					)}
				>
					{eyebrowLabel}
				</p>
				<h2
					className={cn(
						"mt-4 font-playfair text-3xl lg:text-5xl",
						isDark ? "text-sand-50" : "text-charcoal-900",
					)}
				>
					{title}
				</h2>
				<p
					className={cn(
						"mx-auto mt-5 max-w-xl font-body text-base leading-relaxed",
						isDark ? "text-sand-200/80" : "text-charcoal-700",
					)}
				>
					{description}
				</p>
				<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
					<Button
						render={<Link to={buttonLink} className="no-underline" />}
						size="lg"
					>
						{buttonText}
					</Button>
					<Button
						render={<Link to={secondaryButtonLink} className="no-underline" />}
						variant="outline"
						size="lg"
						className={
							isDark
								? "border-sand-50/50 text-sand-50 hover:bg-sand-50 hover:text-charcoal-900"
								: undefined
						}
					>
						{secondaryButtonText}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
