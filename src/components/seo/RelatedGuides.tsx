import { Link } from "@tanstack/react-router";

export type RelatedGuide = {
	title: string;
	href: string;
	description?: string;
};

type RelatedGuidesProps = {
	guides: RelatedGuide[];
	heading?: string;
};

export function RelatedGuides({
	guides,
	heading = "Related guides",
}: RelatedGuidesProps) {
	if (guides.length === 0) {
		return null;
	}

	return (
		<section
			className="border-t border-sand-300/80 bg-sand-100/50"
			aria-labelledby="related-guides-heading"
		>
			<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
				<h2
					id="related-guides-heading"
					className="font-playfair text-2xl text-charcoal-900 lg:text-3xl"
				>
					{heading}
				</h2>
				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{guides.map((guide) => (
						<li key={guide.href}>
							<Link
								to={guide.href}
								className="group block h-full rounded-xl bg-white px-5 py-5 ring-1 ring-sand-300/70 transition-colors hover:ring-earth-400"
							>
								<p className="font-playfair text-lg text-charcoal-900 group-hover:text-earth-700">
									{guide.title}
								</p>
								{guide.description ? (
									<p className="mt-2 font-body text-sm leading-relaxed text-charcoal-600">
										{guide.description}
									</p>
								) : null}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
