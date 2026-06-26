interface IntroSectionProps {
	children: React.ReactNode;
	eyebrow?: string;
	title?: string;
}

export function IntroSection({ children, eyebrow, title }: IntroSectionProps) {
	return (
		<section
			className="border-b border-muted-300 bg-cream-100 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Introduction"
		>
			<div className="mx-auto max-w-3xl text-center">
				{eyebrow && (
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						{eyebrow}
					</p>
				)}
				{title && (
					<h2 className="mt-3 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
						{title}
					</h2>
				)}
				<div className="mx-auto mt-5 h-px w-12 bg-sunset-500/40" />
				<div className="mt-6 font-body text-base leading-[1.85] text-charcoal-700 lg:text-lg">
					{children}
				</div>
			</div>
		</section>
	);
}
