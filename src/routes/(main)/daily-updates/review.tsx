import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { formSpacingClass } from "#/components/forms/form-field";
import { Button } from "#/components/ui/button";
import { buildPageHead } from "#/lib/seo";
import { reviewDailyUpdate } from "#/server/function/review-daily-update";

const reviewSearchSchema = z.object({
	token: z.string().regex(/^[a-f0-9]{64}$/),
	action: z.enum(["approve", "decline"]),
});

export const Route = createFileRoute("/(main)/daily-updates/review")({
	validateSearch: (search) => reviewSearchSchema.parse(search),
	component: ReviewDailyUpdatePage,
	head: () =>
		buildPageHead({
			title: "Review Daily Update | Ranthambhor.com",
			description: "Review a submitted safari sighting.",
			path: "/daily-updates/review",
			noindex: true,
		}),
});

function ReviewDailyUpdatePage() {
	const { token, action } = Route.useSearch();
	const [completedAction, setCompletedAction] = useState<
		"approve" | "decline" | null
	>(null);
	const mutation = useMutation({
		mutationFn: () => reviewDailyUpdate({ data: { token, action } }),
		onSuccess: (result) => setCompletedAction(result.action),
	});
	const isApprove = action === "approve";

	return (
		<section className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto w-full max-w-2xl">
				<div className="rounded-2xl bg-cream-100 px-6 py-8 shadow-sm ring-1 ring-muted-300 sm:px-8">
					{completedAction ? (
						<output className="block text-center">
							<h1 className="font-display text-3xl text-charcoal-800">
								{completedAction === "approve"
									? "Update approved"
									: "Update declined"}
							</h1>
							<p className="mt-3 font-body text-charcoal-700">
								{completedAction === "approve"
									? "The sighting is now published on the website."
									: "The sighting was declined and will not appear on the website."}
							</p>
						</output>
					) : (
						<form
							className={formSpacingClass}
							onSubmit={(event) => {
								event.preventDefault();
								mutation.mutate();
							}}
						>
							<div className="text-center">
								<h1 className="font-display text-3xl text-charcoal-800">
									{isApprove
										? "Approve this sighting?"
										: "Decline this sighting?"}
								</h1>
								<p className="mt-3 font-body text-charcoal-700">
									{isApprove
										? "Confirming will publish this daily update on the website."
										: "Confirming will decline this update. It will not be visible on the website."}
								</p>
							</div>
							{mutation.error && (
								<p
									role="alert"
									className="rounded border border-earth-200 bg-earth-50 px-4 py-3 font-body text-sm text-earth-800"
								>
									{mutation.error instanceof Error
										? mutation.error.message
										: "Unable to review this update. Please try again."}
								</p>
							)}
							<Button
								type="submit"
								className="w-full"
								variant={isApprove ? "secondary" : "default"}
								loading={mutation.isPending}
							>
								Confirm {isApprove ? "Approval" : "Decline"}
							</Button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
