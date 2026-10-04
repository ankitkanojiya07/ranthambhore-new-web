import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
	createMailTransport,
	getEnquiryRecipients,
	getMailFromAddress,
} from "#/server/mailer";

const sendEnquiryInputSchema = z.object({
	name: z.string().trim().min(1).max(200),
	email: z.string().trim().email().max(320),
	checkInDate: z.string().trim().min(1).max(32),
	checkOutDate: z.string().trim().min(1).max(32),
	guests: z.string().trim().min(1).max(100),
	phone: z.string().trim().max(50).optional(),
	specialRequests: z.string().trim().max(2000).optional(),
	gotcha: z.string().optional(),
});

export type SendEnquiryInput = z.infer<typeof sendEnquiryInputSchema>;

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function fieldRow(label: string, value: string) {
	return `
		<tr>
			<td style="padding: 0 0 14px;">
				<p style="margin: 0 0 6px; font-family: Georgia, 'Times New Roman', serif; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #46362a;">
					${escapeHtml(label)}
				</p>
				<div style="border: 1px solid #b49d86; border-radius: 4px; background: #faf5ed; padding: 10px 12px; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; color: #33261e;">
					${escapeHtml(value)}
				</div>
			</td>
		</tr>
	`.trim();
}

function twoColumnFieldRow(
	leftLabel: string,
	leftValue: string,
	rightLabel: string,
	rightValue: string,
) {
	return `
		<tr>
			<td style="padding: 0 0 14px;">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
					<tr>
						<td width="50%" valign="top" style="padding-right: 6px;">
							<p style="margin: 0 0 6px; font-family: Georgia, 'Times New Roman', serif; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #46362a;">
								${escapeHtml(leftLabel)}
							</p>
							<div style="border: 1px solid #b49d86; border-radius: 4px; background: #faf5ed; padding: 10px 12px; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; color: #33261e;">
								${escapeHtml(leftValue)}
							</div>
						</td>
						<td width="50%" valign="top" style="padding-left: 6px;">
							<p style="margin: 0 0 6px; font-family: Georgia, 'Times New Roman', serif; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #46362a;">
								${escapeHtml(rightLabel)}
							</p>
							<div style="border: 1px solid #b49d86; border-radius: 4px; background: #faf5ed; padding: 10px 12px; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; color: #33261e;">
								${escapeHtml(rightValue)}
							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	`.trim();
}

function buildEnquiryEmail(input: SendEnquiryInput) {
	const phone = input.phone?.trim() || "Not provided";
	const specialRequests =
		input.specialRequests?.trim() || "No special requests.";

	const text = [
		"Feel Free To Communicate With Us",
		"New booking enquiry",
		"",
		`Check-in Date: ${input.checkInDate}`,
		`Check-out Date: ${input.checkOutDate}`,
		`Guests: ${input.guests}`,
		`Full Name: ${input.name}`,
		`Email Address: ${input.email}`,
		`Phone Number: ${phone}`,
		`Special Requests: ${specialRequests}`,
		"",
		"Thanks,",
		"Team Ranthambhore",
		"ranthambhor.com",
	].join("\n");

	const html = `
		<!DOCTYPE html>
		<html lang="en">
			<body style="margin: 0; padding: 0; background: #f5ecde;">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #f5ecde; padding: 28px 12px;">
					<tr>
						<td align="center">
							<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background: #faf5ed; border: 1px solid #e0c9b0; border-radius: 8px; overflow: hidden;">
								<tr>
									<td style="padding: 22px 24px 12px; border-bottom: 1px solid #ecdccb;">
										<p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #a46338; text-align: center;">
											Feel Free To Communicate With Us
										</p>
									</td>
								</tr>
								<tr>
									<td style="padding: 20px 24px 8px;">
										<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
											${twoColumnFieldRow(
												"Check-in Date",
												input.checkInDate,
												"Check-out Date",
												input.checkOutDate,
											)}
											${fieldRow("Guests", input.guests)}
											${fieldRow("Full Name", input.name)}
											${twoColumnFieldRow(
												"Email Address",
												input.email,
												"Phone Number",
												phone,
											)}
											${fieldRow("Special Requests", specialRequests)}
										</table>
									</td>
								</tr>
								<tr>
									<td style="padding: 8px 24px 24px;">
										<div style="margin-top: 8px; padding-top: 16px; border-top: 1px solid #ecdccb;">
											<p style="margin: 0 0 4px; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; color: #33261e;">
												Thanks,
											</p>
											<p style="margin: 0 0 2px; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; color: #33261e; font-weight: 600;">
												Team Ranthambhore
											</p>
											<p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 12px; letter-spacing: 0.08em; color: #d95e2a;">
												ranthambhor.com
											</p>
										</div>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</body>
		</html>
	`.trim();

	return { text, html };
}

export const sendEnquiry = createServerFn({ method: "POST" })
	.validator(sendEnquiryInputSchema)
	.handler(async ({ data }) => {
		// Honeypot — bots fill this; silently accept without sending.
		if (data.gotcha?.trim()) {
			return { ok: true as const };
		}

		const recipients = getEnquiryRecipients();
		const transport = createMailTransport();
		const { text, html } = buildEnquiryEmail(data);

		await transport.sendMail({
			from: getMailFromAddress(),
			to: recipients.to,
			cc: recipients.cc.length > 0 ? recipients.cc : undefined,
			replyTo: data.email,
			subject: "Booking Enquiry for the Regency Hotel",
			text,
			html,
		});

		return { ok: true as const };
	});
