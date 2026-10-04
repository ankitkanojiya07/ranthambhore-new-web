import nodemailer from "nodemailer";

function requiredEnv(name: string): string {
	const value = process.env[name]?.trim();
	if (!value) {
		throw new Error(`${name} is not set`);
	}
	return value;
}

function parseEmailList(value: string | undefined): string[] {
	if (!value?.trim()) return [];
	return value
		.split(",")
		.map((email) => email.trim())
		.filter(Boolean);
}

export function getEnquiryRecipients() {
	return {
		to: requiredEnv("ENQUIRY_TO_EMAIL"),
		cc: parseEmailList(process.env.ENQUIRY_CC_EMAILS),
	};
}

export function createMailTransport() {
	const host = requiredEnv("SMTP_HOST");
	const port = Number(process.env.SMTP_PORT ?? "587");
	const user = requiredEnv("SMTP_USER");
	const pass = requiredEnv("SMTP_PASS");
	const secure = process.env.SMTP_SECURE === "true" || port === 465;

	return nodemailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass },
	});
}

export function getMailFromAddress() {
	return process.env.SMTP_FROM?.trim() || requiredEnv("SMTP_USER");
}
