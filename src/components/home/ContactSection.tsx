import { motion } from "motion/react";
import { useState } from "react";
import { MultiSelectDropdown } from "#/components/ui/multi-select-dropdown";
import { Image } from "#/util/Image";

const WEB3FORMS_ACCESS_KEY = "80b057d5-9cb6-4677-a700-5b7a7bfc0876";

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
	"w-full rounded border border-muted-300 bg-sand-50 px-4 py-3 font-body text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:border-sunset-500 focus:outline-none";

const dateInputClasses = `${inputClasses} [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-70`;

const labelClasses =
	"mb-1.5 block font-display text-[10px] uppercase tracking-display text-charcoal-700";

function todayIsoDate(): string {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function formatIsoDateDisplay(isoDate: string): string {
	const [year, month, day] = isoDate.split("-");
	if (!year || !month || !day) return isoDate;
	return `${day}/${month}/${year}`;
}

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
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [checkInDate, setCheckInDate] = useState("");
	const [checkOutDate, setCheckOutDate] = useState("");
	const today = todayIsoDate();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);
		setSuccess(false);
		setLoading(true);

		const form = event.currentTarget;
		const data = new FormData(form);

		data.set("access_key", WEB3FORMS_ACCESS_KEY);
		data.set("subject", "Booking Enquiry for the Regency Hotel");
		data.set("from_name", "Regency Hotel");
		data.set("name", data.get("fullName")?.toString() ?? "");
		data.set(
			"message",
			[
				`Check-in: ${formatIsoDateDisplay(data.get("checkInDate")?.toString() ?? "")}`,
				`Check-out: ${formatIsoDateDisplay(data.get("checkOutDate")?.toString() ?? "")}`,
				`Guests: ${data.get("guests")}`,
				`Query about: ${data.getAll("queryAbout").join(", ")}`,
				`Phone: ${data.get("phone") || "Not provided"}`,
				"",
				data.get("specialRequests")?.toString() || "No special requests.",
			].join("\n"),
		);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: data,
			});
			const result = (await response.json()) as {
				success: boolean;
				message?: string;
			};

			if (!response.ok || !result.success) {
				setError(result.message ?? "Unable to send enquiry. Please try again.");
				return;
			}

			setSuccess(true);
			form.reset();
			setCheckInDate("");
			setCheckOutDate("");
		} catch {
			setError("Unable to send enquiry. Please try again.");
		} finally {
			setLoading(false);
		}
	}

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
								Booking Enquiry for the Regency Hotel
							</motion.h3>

							<motion.form
								variants={itemVariants}
								onSubmit={handleSubmit}
								className="mt-8 space-y-4"
							>
								<input
									type="checkbox"
									name="botcheck"
									tabIndex={-1}
									autoComplete="off"
									className="hidden"
									style={{ display: "none" }}
								/>
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="check-in-date" required>
											Check-in Date
										</FieldLabel>
										<input
											id="check-in-date"
											name="checkInDate"
											type="date"
											required
											min={today}
											value={checkInDate}
											onChange={(event) => {
												const nextCheckIn = event.target.value;
												setCheckInDate(nextCheckIn);
												if (checkOutDate && checkOutDate <= nextCheckIn) {
													setCheckOutDate("");
												}
											}}
											className={dateInputClasses}
										/>
									</div>
									<div>
										<FieldLabel htmlFor="check-out-date" required>
											Check-out Date
										</FieldLabel>
										<input
											id="check-out-date"
											name="checkOutDate"
											type="date"
											required
											min={checkInDate || today}
											value={checkOutDate}
											onChange={(event) => setCheckOutDate(event.target.value)}
											className={dateInputClasses}
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

								{error && (
									<p role="alert" className="font-body text-sm text-sunset-700">
										{error}
									</p>
								)}
								{success && (
									<output className="block font-body text-sm text-forest-700">
										Thank you! Your enquiry has been sent. We will get back to
										you shortly.
									</output>
								)}

								<div>
									<button
										type="submit"
										disabled={loading}
										className="rounded bg-sunset-500 px-8 py-3 font-display text-xs uppercase tracking-display text-sand-50 transition-colors hover:bg-sunset-600 disabled:cursor-not-allowed disabled:opacity-60"
									>
										{loading ? "Sending…" : "Send Enquiry"}
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
