import { motion } from "motion/react";
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

const QUERY_OPTIONS = [
	"Tiger Safari",
	"Jeep Safari",
	"Canter Safari",
	"Boat Safari",
	"Hotels & Resorts",
	"Tour Packages",
];

const SOURCE_OPTIONS = [
	"Google Search",
	"Social Media",
	"Friend / Family",
	"Travel Blog",
	"Other",
];

const inputClasses =
	"w-full rounded border border-sand-300 bg-sand-100 px-4 py-3 font-body text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:border-earth-400 focus:outline-none";

export function ContactSection() {
	return (
		<section
			className="bg-sand-50 relative px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Contact"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-16">
					{/* Tiger image */}
					<motion.div
						className="w-full shrink-0 lg:w-[40%]"
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						<div className="hero-grunge-mask h-full min-h-[460px] w-full z-10 relative">
							<Image
								src="/gallery/7.jpg"
								alt="Tiger resting in the wild"
								layout="constrained"
								width={2048}
								height={1365}
								className="h-full w-full object-cover"
							/>
						</div>
					</motion.div>

					{/* Form */}
					<motion.div
						className="w-full lg:w-[60%]"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
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
							Let Us Help You In Your Safari
						</motion.h3>

						<motion.form
							variants={itemVariants}
							onSubmit={(e) => e.preventDefault()}
							className="mt-8 space-y-4 relative z-10"
						>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<input
									type="text"
									placeholder="First name"
									className={inputClasses}
								/>
								<input
									type="text"
									placeholder="Last name"
									className={inputClasses}
								/>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<input
									type="email"
									placeholder="Email address"
									className={inputClasses}
								/>
								<input
									type="tel"
									placeholder="Phone Number"
									className={inputClasses}
								/>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<select className={inputClasses} defaultValue="">
									<option value="" disabled>
										Query about
									</option>
									{QUERY_OPTIONS.map((opt) => (
										<option key={opt} value={opt}>
											{opt}
										</option>
									))}
								</select>
								<select className={inputClasses} defaultValue="">
									<option value="" disabled>
										How you know about us
									</option>
									{SOURCE_OPTIONS.map((opt) => (
										<option key={opt} value={opt}>
											{opt}
										</option>
									))}
								</select>
							</div>

							<textarea
								placeholder="Please enter your query"
								rows={4}
								className={inputClasses}
							/>

							<div>
								<button
									type="submit"
									className="rounded bg-sunset-500 px-8 py-3 font-display text-xs uppercase tracking-display text-white transition-colors hover:bg-sunset-600"
								>
									Send Enquiry
								</button>
							</div>
						</motion.form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
