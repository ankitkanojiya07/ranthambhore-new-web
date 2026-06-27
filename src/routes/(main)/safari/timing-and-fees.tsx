import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/safari/timing-and-fees")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari Timings & Entry Fees 2024-25 | Season-wise Schedule",
			},
			{
				name: "description",
				content:
					"Current Ranthambore safari timings and entry fees for jeep and canter safaris. Season-wise schedule, park closure months, and what the fees include.",
			},
		],
	}),
	component: TimingAndFeesPage,
});

function TimingAndFeesPage() {
	return (
		<GuidePage
			eyebrow="Safari"
			title="Timing & Fees"
			subtitle="Season-wise safari schedules, entry fees, and what your booking includes."
			image="/gallery/4.jpg"
			sections={[
				{
					heading: "Safari Sessions",
					body: "Ranthambore National Park offers two safari sessions per day — one in the morning and one in the afternoon. Timings shift across three seasons:",
					items: [
						"October to January (Winter): Morning 6:30 AM – 10:00 AM | Afternoon 2:30 PM – 6:00 PM",
						"February to March (Spring): Morning 6:00 AM – 9:30 AM | Afternoon 3:00 PM – 6:30 PM",
						"April to June (Summer): Morning 5:30 AM – 9:00 AM | Afternoon 4:00 PM – 7:00 PM",
						"Note: The park is closed from July 1 to September 30 every year during the monsoon season.",
					],
				},
				{
					heading: "Entry Fees (Approximate — Please Verify Current Rates)",
					body: "Fees are set by the Rajasthan Forest Department and are revised periodically. Always confirm current rates when booking. All fees include park entry, vehicle, and a certified naturalist guide.",
					items: [
						"Indian nationals (Jeep): INR 1,300–1,500 per person approximately",
						"Foreign nationals (Jeep): INR 2,500–3,500 per person approximately",
						"Indian nationals (Canter): INR 800–1,000 per person approximately",
						"Camera fee: Additional INR 200–500 for professional video cameras",
					],
				},
			]}
		/>
	);
}
