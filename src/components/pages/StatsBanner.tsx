interface Stat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

export function StatsBanner({
	stats,
	label = "Quick facts",
}: {
	stats: Stat[];
	label?: string;
}) {
	return (
		<section
			className="border-y border-muted-300 bg-cream-100"
			aria-label={label}
		>
			<div className="mx-auto max-w-7xl grid grid-cols-2 divide-y divide-muted-300 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
				{stats.map((stat) => (
					<div
						key={stat.index}
						className="flex flex-col gap-3 px-8 py-12 lg:py-16"
					>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500/70">
							{stat.index}
						</p>
						<div className="flex items-end gap-1.5">
							<span className="font-playfair text-5xl font-semibold leading-none text-charcoal-900 whitespace-nowrap sm:text-6xl lg:text-7xl">
								{stat.value}
							</span>
							{stat.unit && (
								<span className="pb-1.5 font-playfair text-xl text-earth-600 sm:text-2xl lg:text-3xl">
									{stat.unit}
								</span>
							)}
						</div>
						<p className="font-display text-[10px] uppercase tracking-display text-earth-500 sm:text-xs">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
