import { motion } from "motion/react";
import { ContactEnquiryForm } from "#/components/home/ContactEnquiryForm";
import { Image } from "#/util/Image";

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

export function ContactSection() {
	return (
		<section
			className="bg-sand-50 relative px-6 py-16 lg:px-8 lg:py-20 border-t border-muted-300"
			aria-label="Contact"
		>
			<div className="mx-auto max-w-5xl">
				<motion.div
					className="overflow-hidden rounded-2xl bg-cream-100 shadow-sm ring-1 ring-muted-300"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="grid lg:grid-cols-[2fr_3fr]">
						<motion.div
							variants={itemVariants}
							className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-full"
						>
							<div className="hero-grunge-mask absolute inset-0">
								<Image
									src="/gallery/7.jpg"
									alt="Tiger resting in the wild"
									width={2048}
									height={1365}
									className="size-full object-cover"
								/>
							</div>
						</motion.div>

						<div className="p-8 lg:p-10">
							<motion.p
								variants={itemVariants}
								className="font-display text-xs uppercase tracking-display text-earth-400"
							>
								Feel Free To Communicate With Us
							</motion.p>
							<motion.h3
								variants={itemVariants}
								className="mt-2 text-2xl text-charcoal-800 lg:text-3xl"
							>
								Explore Ranthambore With Us Fill The Form
							</motion.h3>

							<motion.div variants={itemVariants} className="mt-8">
								<ContactEnquiryForm />
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
