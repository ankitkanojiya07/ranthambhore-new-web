import { useId, useState } from "react";
import { MultiSelectDropdown } from "#/components/ui/multi-select-dropdown";

const FORMSUBMIT_RECEIVER_EMAIL = "akanojiya550@gmail.com";
const FORMSUBMIT_CC_EMAILS =
	"ravindra2007@icloud.com,ranthambhoreregency@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_RECEIVER_EMAIL}`;

const QUERY_OPTIONS = ["Safari", "Hotels & Resorts"];

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

export function ContactEnquiryForm() {
	const formId = useId();
	const fieldId = (name: string) => `${formId}-${name}`;

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
		const formData = new FormData(form);

		if (formData.get("_honey")) {
			setLoading(false);
			return;
		}

		const payload = {
			_subject: "Booking Enquiry for the Regency Hotel",
			_cc: FORMSUBMIT_CC_EMAILS,
			_captcha: "false",
			name: formData.get("fullName")?.toString() ?? "",
			email: formData.get("email")?.toString() ?? "",
			checkInDate: formatIsoDateDisplay(
				formData.get("checkInDate")?.toString() ?? "",
			),
			checkOutDate: formatIsoDateDisplay(
				formData.get("checkOutDate")?.toString() ?? "",
			),
			guests: formData.get("guests")?.toString() ?? "",
			queryAbout: formData.getAll("queryAbout").join(", "),
			phone: formData.get("phone")?.toString() || "Not provided",
			specialRequests:
				formData.get("specialRequests")?.toString() || "No special requests.",
		};

		try {
			const response = await fetch(FORMSUBMIT_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});
			const result = (await response.json()) as {
				success?: string | boolean;
				message?: string;
			};

			if (
				!response.ok ||
				result.success === false ||
				result.success === "false"
			) {
				setError("Unable to send enquiry. Please try again.");
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
		<form onSubmit={handleSubmit} className="space-y-4">
			<input
				type="text"
				name="_honey"
				tabIndex={-1}
				autoComplete="off"
				className="hidden"
				style={{ display: "none" }}
			/>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<FieldLabel htmlFor={fieldId("check-in")} required>
						Check-in Date
					</FieldLabel>
					<input
						id={fieldId("check-in")}
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
					<FieldLabel htmlFor={fieldId("check-out")} required>
						Check-out Date
					</FieldLabel>
					<input
						id={fieldId("check-out")}
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
					<FieldLabel htmlFor={fieldId("guests")} required>
						Guests
					</FieldLabel>
					<select
						id={fieldId("guests")}
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
					<FieldLabel htmlFor={fieldId("query-about")} required>
						Query About
					</FieldLabel>
					<MultiSelectDropdown
						id={fieldId("query-about")}
						name="queryAbout"
						options={QUERY_OPTIONS}
						placeholder="Query about"
						required
					/>
				</div>
			</div>

			<div>
				<FieldLabel htmlFor={fieldId("full-name")} required>
					Full Name
				</FieldLabel>
				<input
					id={fieldId("full-name")}
					name="fullName"
					type="text"
					required
					placeholder="Enter your full name"
					className={inputClasses}
				/>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<FieldLabel htmlFor={fieldId("email")} required>
						Email Address
					</FieldLabel>
					<input
						id={fieldId("email")}
						name="email"
						type="email"
						required
						placeholder="Enter your email"
						className={inputClasses}
					/>
				</div>
				<div>
					<FieldLabel htmlFor={fieldId("phone")}>Phone Number</FieldLabel>
					<input
						id={fieldId("phone")}
						name="phone"
						type="tel"
						placeholder="Enter your phone number"
						className={inputClasses}
					/>
				</div>
			</div>

			<div>
				<FieldLabel htmlFor={fieldId("special-requests")}>
					Special Requests
				</FieldLabel>
				<textarea
					id={fieldId("special-requests")}
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
					Thank you! Your enquiry has been sent. We will get back to you
					shortly.
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
		</form>
	);
}
