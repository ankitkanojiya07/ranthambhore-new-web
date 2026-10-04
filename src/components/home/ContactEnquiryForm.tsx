import { useId, useState } from "react";
import {
	FormFieldLabel,
	FormTextarea,
	formDateInputClasses,
	formGridGapClass,
	formInputClasses,
	formSpacingClass,
	formSubmitButtonClasses,
} from "#/components/forms/form-field";
import { sendEnquiry } from "#/server/function/send-enquiry";

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

		try {
			const result = await sendEnquiry({
				data: {
					name: formData.get("fullName")?.toString() ?? "",
					email: formData.get("email")?.toString() ?? "",
					checkInDate: formatIsoDateDisplay(
						formData.get("checkInDate")?.toString() ?? "",
					),
					checkOutDate: formatIsoDateDisplay(
						formData.get("checkOutDate")?.toString() ?? "",
					),
					guests: formData.get("guests")?.toString() ?? "",
					phone: formData.get("phone")?.toString() || undefined,
					specialRequests:
						formData.get("specialRequests")?.toString() || undefined,
					gotcha: formData.get("_gotcha")?.toString() || undefined,
				},
			});

			if (!result.ok) {
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
		<form onSubmit={handleSubmit} className={formSpacingClass}>
			<input
				type="text"
				name="_gotcha"
				tabIndex={-1}
				autoComplete="off"
				className="hidden"
				style={{ display: "none" }}
				aria-hidden="true"
			/>
			<div className={`grid grid-cols-1 sm:grid-cols-2 ${formGridGapClass}`}>
				<div>
					<FormFieldLabel htmlFor={fieldId("check-in")} required>
						Check-in Date
					</FormFieldLabel>
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
						className={formDateInputClasses}
					/>
				</div>
				<div>
					<FormFieldLabel htmlFor={fieldId("check-out")} required>
						Check-out Date
					</FormFieldLabel>
					<input
						id={fieldId("check-out")}
						name="checkOutDate"
						type="date"
						required
						min={checkInDate || today}
						value={checkOutDate}
						onChange={(event) => setCheckOutDate(event.target.value)}
						className={formDateInputClasses}
					/>
				</div>
			</div>

			<div>
				<FormFieldLabel htmlFor={fieldId("guests")} required>
					Guests
				</FormFieldLabel>
				<input
					id={fieldId("guests")}
					name="guests"
					type="text"
					required
					placeholder="Enter number of guests"
					className={formInputClasses}
				/>
			</div>

			<div>
				<FormFieldLabel htmlFor={fieldId("full-name")} required>
					Full Name
				</FormFieldLabel>
				<input
					id={fieldId("full-name")}
					name="fullName"
					type="text"
					required
					placeholder="Enter your full name"
					className={formInputClasses}
				/>
			</div>

			<div className={`grid grid-cols-1 sm:grid-cols-2 ${formGridGapClass}`}>
				<div>
					<FormFieldLabel htmlFor={fieldId("email")} required>
						Email Address
					</FormFieldLabel>
					<input
						id={fieldId("email")}
						name="email"
						type="email"
						required
						placeholder="Enter your email"
						className={formInputClasses}
					/>
				</div>
				<div>
					<FormFieldLabel htmlFor={fieldId("phone")}>
						Phone Number
					</FormFieldLabel>
					<input
						id={fieldId("phone")}
						name="phone"
						type="tel"
						placeholder="Enter your phone number"
						className={formInputClasses}
					/>
				</div>
			</div>

			<div>
				<FormFieldLabel htmlFor={fieldId("special-requests")}>
					Special Requests
				</FormFieldLabel>
				<FormTextarea
					id={fieldId("special-requests")}
					name="specialRequests"
					placeholder="Any special requests?"
					rows={2}
				/>
			</div>

			{error && (
				<p role="alert" className="font-body text-sm text-sunset-700">
					{error}
				</p>
			)}
			{success && (
				<output className="block font-body text-sm text-tiger-800">
					Thank you! Your enquiry has been sent. We will get back to you
					shortly.
				</output>
			)}

			<div>
				<button
					type="submit"
					disabled={loading}
					className={formSubmitButtonClasses}
				>
					{loading ? "Sending…" : "Send Enquiry"}
				</button>
			</div>
		</form>
	);
}
