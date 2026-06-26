import type { LucideIcon } from "lucide-react";
import {
	Award,
	Binoculars,
	CalendarCheck,
	MapPinned,
	ShieldCheck,
	UserCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export interface WhyChooseFeature {
	id: string;
	icon: LucideIcon;
	title: string;
	description: string;
}

const DEFAULT_FEATURES: WhyChooseFeature[] = [
	{
		id: "guides",
		icon: UserCheck,
		title: "Expert Local Guides",
		description:
			"Sawai Madhopur-based naturalists with decades of combined park experience.",
	},
	{
		id: "sightings",
		icon: Binoculars,
		title: "Prime Tiger Sightings",
		description:
			"Ranthambore offers one of India's highest daylight tiger sighting rates.",
	},
	{
		id: "itineraries",
		icon: MapPinned,
		title: "Tailored Itineraries",
		description:
			"From a single safari to full Rajasthan circuits — planned around your dates.",
	},
	{
		id: "licensed",
		icon: ShieldCheck,
		title: "Licensed Operator",
		description:
			"Authorised safari bookings, verified hotels, and transparent pricing.",
	},
	{
		id: "experience",
		icon: Award,
		title: "Years of Experience",
		description:
			"Trusted by wildlife photographers, families, and repeat safari travellers.",
	},
	{
		id: "support",
		icon: CalendarCheck,
		title: "7-Day Support",
		description:
			"Our booking desk is available every day to help before and during your trip.",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1, delayChildren: 0.15 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

interface WhyChooseSectionProps {
	eyebrow?: string;
	title?: string;
	description?: string;
	features?: WhyChooseFeature[];
	dark?: boolean;
}

export function WhyChooseSection({
	eyebrow = "Why Travel With Us",
	title = "Your Ranthambore Journey, Expertly Guided",
	description = "Discover authentic tiger country with a locally based team — every safari, stay, and itinerary crafted with passion and deep park knowledge.",
	features = DEFAULT_FEATURES,
	dark = false,
}: WhyChooseSectionProps) {
	return (
		<section
			className={
				dark
					? "bg-charcoal-900 px-6 py-20 lg:px-8 lg:py-28"
					: "border-y border-muted-300 bg-cream-100 px-6 py-20 lg:px-8 lg:py-28"
			}
			aria-label="Why choose us"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-3xl text-center">
					<SectionHeading
						eyebrow={eyebrow}
						title={title}
						centered
						className={
							dark ? "[&_p]:text-sunset-400 [&_h2]:text-sand-50" : undefined
						}
					/>
					<p
						className={`mt-6 font-body text-base leading-relaxed lg:text-lg ${
							dark ? "text-sand-200/80" : "text-charcoal-600"
						}`}
					>
						{description}
					</p>
				</div>

				<motion.div
					className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{features.map((feature) => (
						<motion.article
							key={feature.id}
							variants={itemVariants}
							className={`group rounded-sm p-6 ring-1 transition-shadow hover:shadow-lg ${
								dark
									? "bg-charcoal-800/60 ring-charcoal-700 hover:ring-sunset-500/40"
									: "bg-sand-50 ring-muted-300 hover:ring-sunset-500/30"
							}`}
						>
							<div
								className={`flex size-12 items-center justify-center rounded-full ${
									dark
										? "bg-tiger-800 text-sunset-400"
										: "bg-tiger-50 text-tiger-600"
								}`}
							>
								<feature.icon className="size-5" strokeWidth={1.5} />
							</div>
							<h3
								className={`mt-5 font-playfair text-xl ${
									dark ? "text-sand-50" : "text-charcoal-900"
								}`}
							>
								{feature.title}
							</h3>
							<p
								className={`mt-2 font-body text-sm leading-relaxed ${
									dark ? "text-sand-200/70" : "text-charcoal-600"
								}`}
							>
								{feature.description}
							</p>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
