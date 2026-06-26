import { Award, Binoculars, MapPinned, UserCheck } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

const FEATURES = [
	{ id: "experience", icon: Award, label: "Years of Experience" },
	{ id: "guide", icon: UserCheck, label: "Expert Tour Guide" },
	{ id: "plan", icon: MapPinned, label: "Excellent Tour Plan" },
	{ id: "safaris", icon: Binoculars, label: "Comfortable Safaris" },
];

export function FeaturesSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Our Features"
		>
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="text-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.p
						variants={itemVariants}
						className="font-display text-xs uppercase tracking-display text-earth-400"
					>
						Our Features
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="mt-2 text-3xl text-charcoal-800 lg:text-4xl"
					>
						Why You Should Choose Us
					</motion.h2>

					<motion.div
						className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4"
						variants={containerVariants}
					>
						{FEATURES.map((feature) => (
							<motion.div
								key={feature.id}
								variants={itemVariants}
								className="flex flex-col items-center gap-3"
							>
								<div className="flex size-16 items-center justify-center rounded-full border border-muted-300">
									<feature.icon
										className="size-7 text-tiger-600"
										strokeWidth={1.5}
									/>
								</div>
								<p className="font-display text-xs uppercase tracking-display text-charcoal-800">
									{feature.label}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
