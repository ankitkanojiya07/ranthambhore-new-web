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
			className="relative overflow-hidden border-t border-muted-300 bg-cream-100"
			aria-label="Contact"
		>
			<motion.div
				className="grid min-h-0 lg:grid-cols-2 lg:min-h-[560px]"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div
					variants={itemVariants}
					className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full"
				>
					<div className="hero-grunge-mask absolute inset-0">
						<Image
							src="/Home/10.webp"
							alt="Tiger resting in the wild"
							width={2048}
							height={1365}
							className="size-full object-cover"
						/>
					</div>
				</motion.div>

				<div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
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
			</motion.div>
		</section>
	);
}
