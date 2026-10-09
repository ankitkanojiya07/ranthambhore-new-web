import { BLOG_ZONE_OPTIONS } from "#/constants/blog-zones";
import { SITE_URL } from "#/lib/seo";
import { createMailTransport, getMailFromAddress } from "#/server/mailer";
import type { blogPostTable } from "#/server/schema";

const APPROVAL_RECIPIENT =
	process.env.DAILY_UPDATE_APPROVAL_EMAIL?.trim() ||
	"ranthambhoreregency@gmail.com";

type DailyUpdatePost = typeof blogPostTable.$inferSelect;

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function formatDate(date: Date | null): string {
	return date ? date.toLocaleDateString("en-GB") : "Not provided";
}

export async function sendDailyUpdateApprovalEmail({
	post,
	approvalToken,
	zoneId,
	submitterName,
	submitterEmail,
}: {
	post: DailyUpdatePost;
	approvalToken: string;
	zoneId: string | null;
	submitterName: string | undefined;
	submitterEmail: string | undefined;
}) {
	const zone =
		BLOG_ZONE_OPTIONS.find((option) => option.id === zoneId)?.label.trim() ??
		"Not provided";
	const approveUrl = new URL("/daily-updates/review", SITE_URL);
	approveUrl.searchParams.set("token", approvalToken);
	approveUrl.searchParams.set("action", "approve");
	const declineUrl = new URL("/daily-updates/review", SITE_URL);
	declineUrl.searchParams.set("token", approvalToken);
	declineUrl.searchParams.set("action", "decline");

	const title = escapeHtml(post.title);
	const content = escapeHtml(post.content).replaceAll("\n", "<br>");
	const imageUrl = post.coverImage?.trim();
	const hasSafeImage = imageUrl !== undefined && /^https:\/\//i.test(imageUrl);
	const image = hasSafeImage
		? `<img src="${escapeHtml(imageUrl)}" alt="Submitted sighting" style="display:block;max-width:100%;height:auto;border-radius:12px;margin:0 0 20px">`
		: "<p>No image was provided.</p>";
	const spottedDate = formatDate(post.spottedDate);
	const contactName = submitterName?.trim() || "Not provided";
	const contactEmail = submitterEmail?.trim() || "Not provided";
	const plainText = [
		"Daily sighting submitted for approval",
		"",
		`Title: ${post.title}`,
		`Submitted by: ${contactName}`,
		`Submitter email: ${contactEmail}`,
		`Zone: ${zone}`,
		`Spotted Date: ${spottedDate}`,
		"",
		"Content:",
		post.content,
		"",
		post.coverImage ? `Image: ${post.coverImage}` : "Image: Not provided",
		"",
		`Approve: ${approveUrl}`,
		`Decline: ${declineUrl}`,
		"",
		"Links expire in 7 days and open a confirmation page before applying the decision.",
	].join("\n");

	await createMailTransport().sendMail({
		from: getMailFromAddress(),
		to: APPROVAL_RECIPIENT,
		subject: "Daily sighting awaiting approval",
		replyTo: submitterEmail || undefined,
		text: plainText,
		html: `
			<div style="max-width:640px;margin:0 auto;padding:24px;font-family:Arial,sans-serif;color:#29251f">
				<h1 style="font-size:24px;margin:0 0 8px">Daily sighting awaiting approval</h1>
				<p style="margin:0 0 24px;color:#655e55">Review the submission below and choose whether to publish it.</p>
				${image}
				<table style="width:100%;border-collapse:collapse;margin-bottom:20px">
					<tr><th align="left" style="padding:8px 0">Title</th><td style="padding:8px 0">${title}</td></tr>
					<tr><th align="left" style="padding:8px 0">Name</th><td style="padding:8px 0">${escapeHtml(contactName)}</td></tr>
					<tr><th align="left" style="padding:8px 0">Email</th><td style="padding:8px 0">${submitterEmail ? `<a href="mailto:${escapeHtml(submitterEmail)}">${escapeHtml(submitterEmail)}</a>` : contactEmail}</td></tr>
					<tr><th align="left" style="padding:8px 0">Zone</th><td style="padding:8px 0">${escapeHtml(zone)}</td></tr>
					<tr><th align="left" style="padding:8px 0">Spotted Date</th><td style="padding:8px 0">${escapeHtml(spottedDate)}</td></tr>
				</table>
				<h2 style="font-size:18px">Content</h2>
				<p style="line-height:1.6">${content}</p>
				<p style="margin:28px 0">
					<a href="${approveUrl}" style="display:inline-block;margin-right:12px;padding:12px 20px;border-radius:8px;background:#286143;color:#fff;text-decoration:none;font-weight:bold">Approve</a>
					<a href="${declineUrl}" style="display:inline-block;padding:12px 20px;border-radius:8px;background:#8a3828;color:#fff;text-decoration:none;font-weight:bold">Decline</a>
				</p>
				<p style="font-size:13px;color:#655e55">Links expire in 7 days and open a confirmation page before applying the decision.</p>
			</div>
		`.trim(),
	});
}
