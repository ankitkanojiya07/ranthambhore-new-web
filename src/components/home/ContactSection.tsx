import { motion } from "motion/react";
import { ContactFormHeader } from "#/components/forms/ContactFormHeader";
import { ContactEnquiryForm } from "#/components/home/ContactEnquiryForm";

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

export function ContactSection() {
	return (
		<section
			className="relative overflow-hidden bg-cream-100"
			aria-label="Contact"
		>
			<div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20">
				<motion.header
					variants={itemVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mb-10 text-center lg:mb-12"
				>
					<ContactFormHeader />
				</motion.header>

				<motion.div
					variants={itemVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mx-auto w-full max-w-xl"
				>
					<ContactEnquiryForm />
				</motion.div>
			</div>
		</section>
	);
}
