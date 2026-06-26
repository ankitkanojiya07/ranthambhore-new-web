const DEFAULT_TRUST_BADGES = [
	"Expert Local Guides",
	"60+ Tigers in the Wild",
	"Open October to June",
];

export function TrustBar({
	badges = DEFAULT_TRUST_BADGES,
}: {
	badges?: string[];
}) {
	if (badges.length === 0) return null;

	return (
		<section
			className="border-b border-muted-300 bg-tiger-900"
			aria-label="Trust highlights"
		>
			<div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
				<ul className="grid gap-4 text-center sm:grid-cols-3">
					{badges.map((item) => (
						<li
							key={item}
							className="flex items-center justify-center gap-2.5 font-display text-xs uppercase tracking-display text-sand-100 sm:text-sm"
						>
							<span className="size-2 shrink-0 rotate-45 bg-sunset-500" />
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
