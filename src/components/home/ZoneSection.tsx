import { motion } from "motion/react";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const ZONES = [
	{
		zone: 1,
		area: "Singhdwar, Tuti Ka Nalla",
		safariType: "Gypsy/Canter",
		famousFor: "T-39 Noor, Scenic Valleys",
		tigers: ["T-101 (M)", "T-105 (F)", "T-107 (F)", "T-39 (F)"],
	},
	{
		zone: 2,
		area: "Lakkarda, Nal Ghati",
		safariType: "Gypsy/Canter",
		famousFor: "T-57, Dense Forest Tracks",
		tigers: [
			"T-84 (F) with 3 cubs",
			"T-101 (M)",
			"T-105 (F)",
			"T-120 (M)",
			"T-123 (M)",
		],
	},
	{
		zone: 3,
		area: "Padam Talao, Raj Bagh",
		safariType: "Gypsy/Canter",
		famousFor: "Iconic Lake Views, T-84 Arrowhead",
		tigers: ["T-124 (F) with 3 cubs", "T-120 (M)"],
	},
	{
		zone: 4,
		area: "George Lodge, Lakkarda",
		safariType: "Gypsy/Canter",
		famousFor: "T-19 Krishna Territory",
		tigers: [
			"T-84 (F) with 3 cubs",
			"T-111 (F)",
			"T-120 (M)",
			"T-121 (M)",
			"T-112 (M)",
		],
	},
	{
		zone: 5,
		area: "Kala Peela Pani, Baghda",
		safariType: "Gypsy/Canter",
		famousFor: "Good Water Sources, T-73",
		tigers: [
			"T-120 (M)",
			"T-121 (M)",
			"T-125 (F) with 2 cubs",
			"T-2311 (M)",
			"T-112 (M)",
		],
	},
	{
		zone: 6,
		area: "Kundal Area",
		safariType: "Gypsy/Canter",
		famousFor: "Open Grasslands, T-34",
		tigers: ["T-39 (F)", "T-108 (M)", "T-127 (F)", "T-101 (M)"],
	},
	{
		zone: 7,
		area: "Chidikho Area",
		safariType: "Gypsy Only",
		famousFor: "Quiet, Less Crowded",
		tigers: ["T-108 (M)", "T-127 (F)", "T-8 (F)"],
	},
	{
		zone: 8,
		area: "Balas Area",
		safariType: "Gypsy Only",
		famousFor: "Rugged Terrain",
		tigers: ["T-2309 (M)", "T-129 (M)", "T-2310 (F)"],
	},
	{
		zone: 9,
		area: "Kuwal ji Area",
		safariType: "Gypsy Only",
		famousFor: "Rare Tiger Sightings",
		tigers: ["T-108 (M)", "T-127 (F)"],
	},
	{
		zone: 10,
		area: "Bhadlav Area",
		safariType: "Gypsy/Canter",
		famousFor: "Good Leopard Sightings",
		tigers: ["T-108 (M)", "T-99 (F)", "T-08 (F)", "T-129 (M)"],
	},
];

export function ZoneSection() {
	return (
		<section
			className="relative w-full overflow-hidden bg-[url('/gallery/8.jpg')] bg-fixed bg-cover bg-center py-24 lg:py-32"
			aria-label="Tiger Zones"
		>
			<div className="absolute inset-0 bg-charcoal-900/70" />
			<div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
				{/* Header */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="text-center"
				>
					<motion.p
						variants={itemVariants}
						className="font-display text-xs uppercase tracking-display text-earth-300"
					>
						Safari Zone Guide
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="mt-2 text-3xl text-sand-50 lg:text-4xl"
					>
						Tiger Sightings by Zone
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="mx-auto mt-4 max-w-xl font-body text-base text-sand-300"
					>
						Plan your safari by knowing which tigers frequent each zone. Zones
						with cubs are highlighted for the best sighting opportunities.
					</motion.p>
				</motion.div>

				{/* Table */}
				<motion.div
					className="mt-12 overflow-hidden rounded-xl shadow-2xl shadow-black/40"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					<table className="w-full border-collapse">
						<thead>
							<tr className="bg-tiger-700">
								<th className="px-5 py-4 text-left font-display text-xs uppercase tracking-display text-white">
									Zone
								</th>
								<th className="px-5 py-4 text-left font-display text-xs uppercase tracking-display text-white">
									Zone Name / Area
								</th>
								<th className="hidden px-5 py-4 text-left font-display text-xs uppercase tracking-display text-white md:table-cell">
									Safari Type
								</th>
								<th className="hidden px-5 py-4 text-left font-display text-xs uppercase tracking-display text-white lg:table-cell">
									Famous For
								</th>
							</tr>
						</thead>
						<tbody>
							{ZONES.map((zone, i) => (
								<motion.tr
									key={zone.zone}
									variants={itemVariants}
									className={
										i % 2 === 0
											? "bg-cream-100 hover:bg-tiger-50"
											: "bg-sand-100 hover:bg-tiger-50"
									}
								>
									<td className="px-5 py-4 font-display text-sm font-semibold text-tiger-700">
										Zone {zone.zone}
									</td>
									<td className="px-5 py-4 font-body text-sm text-charcoal-800">
										{zone.area}
									</td>
									<td className="hidden px-5 py-4 font-body text-sm text-charcoal-700 md:table-cell">
										{zone.safariType}
									</td>
									<td className="hidden px-5 py-4 font-body text-sm text-charcoal-600 lg:table-cell">
										{zone.famousFor}
									</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</motion.div>
			</div>
		</section>
	);
}
