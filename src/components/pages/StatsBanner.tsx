interface Stat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

export function StatsBanner({
	stats,
	label = "Quick facts",
	size = "default",
}: {
	stats: Stat[];
	label?: string;
	size?: "default" | "compact";
}) {
	const compact = size === "compact";

	return (
		<section
			className="border-y border-muted-300 bg-sand-100"
			aria-label={label}
		>
			<div className="mx-auto max-w-7xl grid grid-cols-2 divide-y divide-muted-300 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
				{stats.map((stat) => (
					<div
						key={stat.index}
						className={
							compact
								? "flex flex-col gap-2 px-5 py-6 sm:px-6 lg:py-8"
								: "flex flex-col gap-3 px-8 py-12 lg:py-16"
						}
					>
						<p
							className={
								compact
									? "font-display text-[10px] uppercase tracking-display text-sunset-500/70"
									: "font-display text-xs uppercase tracking-display text-sunset-500/70"
							}
						>
							{stat.index}
						</p>
						<div className="flex items-end gap-1">
							<span
								className={
									compact
										? "font-playfair text-3xl font-semibold leading-none text-charcoal-900 whitespace-nowrap sm:text-4xl"
										: "font-playfair text-5xl font-semibold leading-none text-charcoal-900 whitespace-nowrap sm:text-6xl lg:text-7xl"
								}
							>
								{stat.value}
							</span>
							{stat.unit && (
								<span
									className={
										compact
											? "pb-1 font-playfair text-sm text-earth-600 sm:text-base"
											: "pb-1.5 font-playfair text-xl text-earth-600 sm:text-2xl lg:text-3xl"
									}
								>
									{stat.unit}
								</span>
							)}
						</div>
						<p
							className={
								compact
									? "font-display text-[9px] uppercase tracking-display text-earth-500 sm:text-[10px]"
									: "font-display text-[10px] uppercase tracking-display text-earth-500 sm:text-xs"
							}
						>
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
