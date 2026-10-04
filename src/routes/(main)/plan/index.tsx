import { createFileRoute } from "@tanstack/react-router";
import { PlanYourVisitPage } from "#/components/pages/PlanYourVisitPage";
import { getLastReviewed } from "#/lib/content-freshness";
import { PLAN_FAQS } from "#/lib/plan-your-visit";
import { buildPageHead, faqPageJsonLd } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Plan Your Visit", path: "/plan" },
];

export const Route = createFileRoute("/(main)/plan/")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title:
				"Plan Your Visit to Ranthambore | Best Time, How to Reach & Itinerary",
			description:
				"Plan a Ranthambore trip — Delhi/Jaipur routes, month-by-month best time, monsoon closure, 2- and 3-day itineraries, safari booking, packing lists, and FAQs.",
			path: "/plan",
			dateModified: getLastReviewed("/plan"),
			breadcrumbs: BREADCRUMBS,
			jsonLd: faqPageJsonLd(
				PLAN_FAQS.map(({ question, answer }) => ({ question, answer })),
			),
		}),
	component: PlanYourVisitPage,
});
