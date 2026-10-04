import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Spinner } from "#/components/ui/spinner";
import { buildPageHead } from "#/lib/seo";

const DailyUpdateForm = lazy(() =>
	import("#/components/daily-updates/DailyUpdateForm").then((module) => ({
		default: module.DailyUpdateForm,
	})),
);

export const Route = createFileRoute("/(main)/daily-updates/new")({
	component: NewDailyUpdatePage,
	pendingComponent: DailyUpdateFormPending,
	head: () =>
		buildPageHead({
			title: "New Safari Highlight | Ranthambhor.com",
			description: "Submit a new safari sighting update for Ranthambore.",
			path: "/daily-updates/new",
			noindex: true,
		}),
});

function DailyUpdateFormPending() {
	return (
		<section className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto flex w-full max-w-2xl justify-center py-24">
				<Spinner className="size-8 text-forest-600" />
			</div>
		</section>
	);
}

function NewDailyUpdatePage() {
	return (
		<section className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto w-full max-w-2xl">
				<div className="mb-8 text-center">
					<h1 className="font-display text-3xl text-charcoal-800">
						New Daily Update
					</h1>
					<p className="mt-2 font-body text-sm text-charcoal-600">
						Quickly log a tiger sighting or park update.
					</p>
				</div>
				<div className="rounded-2xl bg-cream-100 px-6 py-8 shadow-sm ring-1 ring-muted-300 sm:px-8">
					<Suspense
						fallback={
							<div className="flex justify-center py-12">
								<Spinner className="size-8 text-forest-600" />
							</div>
						}
					>
						<DailyUpdateForm />
					</Suspense>
				</div>
			</div>
		</section>
	);
}
