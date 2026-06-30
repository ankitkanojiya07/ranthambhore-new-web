import { createFileRoute, redirect } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Spinner } from "#/components/ui/spinner";
import { getSession } from "#/lib/auth.functions";

const RanthambhoreUpdateForm = lazy(() =>
	import("#/components/highlights/RanthambhoreUpdateForm").then((module) => ({
		default: module.RanthambhoreUpdateForm,
	})),
);

export const Route = createFileRoute(
	"/(main)/highlights/ranthambhore-insights/new",
)({
	staticData: { navOverlay: false },
	beforeLoad: async () => {
		const session = await getSession();
		if (!session) {
			throw redirect({
				to: "/sign-in",
				search: { redirect: "/highlights/ranthambhore-insights/new" },
			});
		}
	},
	component: NewRanthambhoreUpdatePage,
	pendingComponent: RanthambhoreUpdateFormPending,
	head: () => ({
		meta: [{ title: "New Ranthambhore Highlight | Ranthambhore.com" }],
	}),
});

function RanthambhoreUpdateFormPending() {
	return (
		<section className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto flex w-full max-w-2xl justify-center py-24">
				<Spinner className="size-8 text-forest-600" />
			</div>
		</section>
	);
}

function NewRanthambhoreUpdatePage() {
	return (
		<section className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-24">
			<div className="mx-auto w-full max-w-2xl">
				<div className="mb-8 text-center">
					<h1 className="font-display text-3xl text-charcoal-800">
						New Ranthambhore Highlight
					</h1>
					<p className="mt-2 font-body text-sm text-charcoal-600">
						Publish park news, travel guides, safari tips, or heritage stories.
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
						<RanthambhoreUpdateForm />
					</Suspense>
				</div>
			</div>
		</section>
	);
}
