import { createFileRoute } from "@tanstack/react-router";
import { SafariTimingsBookingPage } from "#/components/pages/SafariTimingsBookingPage";
import { buildPageHead } from "#/lib/seo";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "Safari", path: "/safari" },
	{ name: "Timings & Booking", path: "/safari/timing-and-fees" },
];

export const Route = createFileRoute("/(main)/safari/timing-and-fees")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title:
				"Ranthambore Safari Timings & Booking Guidelines | Season Schedule",
			description:
				"Season-wise Ranthambore safari timings, day-of schedule, documents required, booking windows, and practical guidelines. Always verify live fees with official sources.",
			path: "/safari/timing-and-fees",
			breadcrumbs: BREADCRUMBS,
		}),
	component: SafariTimingsBookingPage,
});
