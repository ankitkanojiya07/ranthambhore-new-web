import { createFileRoute } from "@tanstack/react-router";
import { SafariTimingsBookingPage } from "#/components/pages/SafariTimingsBookingPage";

export const Route = createFileRoute("/(main)/safari/timing-and-fees")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari Timings & Booking Guidelines | Season-wise Schedule",
			},
			{
				name: "description",
				content:
					"Ranthambore safari timings by season, day-of schedule, booking window, documents required, and official booking guidelines.",
			},
		],
	}),
	component: SafariTimingsBookingPage,
});
