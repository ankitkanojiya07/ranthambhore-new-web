import { motion } from "motion/react";
import { MultiSelectDropdown } from "#/components/ui/multi-select-dropdown";
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

const GUEST_OPTIONS = [
	"1 Guest",
	"2 Guests",
	"3 Guests",
	"4 Guests",
	"5 Guests",
	"6+ Guests",
];

const inputClasses =
	"w-full rounded border border-muted-300 bg-cream-50 px-4 py-3 font-body text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:border-sunset-500 focus:outline-none";

const labelClasses =
	"mb-1.5 block font-display text-[10px] uppercase tracking-display text-charcoal-700";

function FieldLabel({
	htmlFor,
	children,
	required = false,
}: {
	htmlFor: string;
	children: React.ReactNode;
	required?: boolean;
}) {
	return (
		<label htmlFor={htmlFor} className={labelClasses}>
			{children}
			{required && <span className="text-sunset-600"> *</span>}
		</label>
	);
}

export function ContactSection() {
	return (
		<section
			className="bg-sand-50 relative px-6 py-16 lg:px-8 lg:py-20"
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
								Let Us Help You In Your Journey
							</motion.h3>

							<motion.form
								variants={itemVariants}
								onSubmit={(e) => e.preventDefault()}
								className="mt-8 space-y-4"
							>
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="check-in-date" required>
											Check-in Date
										</FieldLabel>
										<input
											id="check-in-date"
											name="checkInDate"
											type="text"
											required
											placeholder="dd/mm/yyyy"
											inputMode="numeric"
											pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}"
											title="Date format: dd/mm/yyyy"
											className={inputClasses}
										/>
									</div>
									<div>
										<FieldLabel htmlFor="check-out-date" required>
											Check-out Date
										</FieldLabel>
										<input
											id="check-out-date"
											name="checkOutDate"
											type="text"
											required
											placeholder="dd/mm/yyyy"
											inputMode="numeric"
											pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}"
											title="Date format: dd/mm/yyyy"
											className={inputClasses}
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="guests" required>
											Guests
										</FieldLabel>
										<select
											id="guests"
											name="guests"
											required
											className={inputClasses}
											defaultValue=""
										>
											<option value="" disabled>
												Select guests
											</option>
											{GUEST_OPTIONS.map((opt) => (
												<option key={opt} value={opt}>
													{opt}
												</option>
											))}
										</select>
									</div>
									<div>
										<FieldLabel htmlFor="query-about" required>
											Query About
										</FieldLabel>
										<MultiSelectDropdown
											id="query-about"
											name="queryAbout"
											options={QUERY_OPTIONS}
											placeholder="Query about"
											required
										/>
									</div>
								</div>

								<div>
									<FieldLabel htmlFor="full-name" required>
										Full Name
									</FieldLabel>
									<input
										id="full-name"
										name="fullName"
										type="text"
										required
										placeholder="Enter your full name"
										className={inputClasses}
									/>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="email" required>
											Email Address
										</FieldLabel>
										<input
											id="email"
											name="email"
											type="email"
											required
											placeholder="Enter your email"
											className={inputClasses}
										/>
									</div>
									<div>
										<FieldLabel htmlFor="phone">Phone Number</FieldLabel>
										<input
											id="phone"
											name="phone"
											type="tel"
											placeholder="Enter your phone number"
											className={inputClasses}
										/>
									</div>
								</div>

								<div>
									<FieldLabel htmlFor="special-requests">
										Special Requests
									</FieldLabel>
									<textarea
										id="special-requests"
										name="specialRequests"
										placeholder="Any special requests?"
										rows={4}
										className={inputClasses}
									/>
								</div>

								<div>
									<button
										type="submit"
										className="rounded bg-sunset-500 px-8 py-3 font-display text-xs uppercase tracking-display text-charcoal-900 transition-colors hover:bg-sunset-600"
									>
										Send Enquiry
									</button>
								</div>
							</motion.form>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
