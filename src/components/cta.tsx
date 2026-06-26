import { Link } from "@tanstack/react-router";
import { cn } from "#/lib/utils";

const CTASection = ({
	eyebrowLabel = "Plan Your Visit",
	title = "Be Part of Ranthambore's Living Story",
	description = "Walk the same ancient forests that sheltered Maharajas, tigers, and legends. Your chapter in Ranthambore's story begins with a single safari.",
	buttonText = "Book a Safari",
	buttonLink = "/#contact",
	className = "",
}: {
	eyebrowLabel?: string;
	title?: string;
	description?: string;
	buttonText?: string;
	buttonLink?: string;
	className?: string;
}) => {
	return (
		<section
			className={cn("bg-sand-50 px-6 py-24 lg:px-8 lg:py-32", className)}
			aria-label="Call to action"
		>
			<div className="mx-auto max-w-3xl text-center">
				<p className="font-display text-xs uppercase tracking-display text-sunset-500">
					{eyebrowLabel}
				</p>
				<h2 className="mt-4 font-playfair text-3xl text-charcoal-900 lg:text-5xl">
					{title}
				</h2>
				<p className="mx-auto mt-5 max-w-xl font-body text-base text-charcoal-700">
					{description}
				</p>
				<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
					<Link
						to={buttonLink}
						hash="contact"
						className="rounded bg-sunset-600 px-8 py-3.5 font-display text-xs uppercase tracking-display text-sand-50 hover:bg-sunset-700"
					>
						{buttonText}
					</Link>
					<Link
						to={buttonLink}
						hash="contact"
						className="rounded border border-charcoal-800 px-8 py-3.5 font-display text-xs uppercase tracking-display text-charcoal-800 hover:bg-charcoal-800 hover:text-sand-50"
					>
						{buttonLink}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
