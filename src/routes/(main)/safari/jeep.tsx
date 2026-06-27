import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/safari/jeep")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Jeep Safari | Gypsy Safari Booking, Cost & Best Zones",
			},
			{
				name: "description",
				content:
					"A Jeep (Gypsy) safari is the best way to spot tigers at Ranthambore. Learn about costs, zones, capacity, and how to book your jeep safari online.",
			},
		],
	}),
	component: JeepSafariPage,
});

function JeepSafariPage() {
	return (
		<GuidePage
			eyebrow="Safari"
			title="Jeep Safari"
			subtitle="The gold standard of wildlife experiences at Ranthambore — intimate, agile, and built for serious tiger tracking."
			image="/hero/2.webp"
			badge="Gypsy Safari"
			stats={[
				{ value: "6", unit: "", label: "Max Passengers", index: "01" },
				{ value: "3.5-4", unit: "hrs", label: "Per Session", index: "02" },
				{ value: "2", unit: "", label: "Daily Sessions", index: "03" },
				{
					value: "1,500-2,500",
					unit: "INR",
					label: "Approx. Per Person",
					index: "04",
				},
			]}
			sections={[
				{
					heading: "The Gypsy Experience",
					body: "The Jeep safari — locally called a Gypsy safari — is the gold standard of wildlife experiences at Ranthambore. A specially converted open-sided Maruti Gypsy carries up to 6 passengers along with a certified naturalist guide and a licensed driver. The smaller footprint allows the vehicle to access narrower forest tracks, penetrate deeper into certain zones, and manoeuvre quickly when a tiger is sighted.",
				},
				{
					heading: "Key Details",
					body: "Everything you need to know before booking your jeep safari slot.",
					items: [
						"Vehicle: Maruti Gypsy (open-sided, no roof)",
						"Capacity: Maximum 6 passengers per vehicle",
						"Includes: Government-licensed naturalist, trained driver",
						"Duration: Approximately 3.5 to 4 hours per session",
						"Sessions: Morning and afternoon (timings vary by season)",
						"Cost: Approximately INR 1,500–2,500 per person (government fees + guide + vehicle charges — verify current fees at the time of booking)",
					],
				},
				{
					heading: "Why Choose a Jeep Safari?",
					body: "For serious wildlife enthusiasts and photographers, the jeep safari is the clear choice. The low seating position brings you closer to eye level with the wildlife. With fewer people than a canter, conversations are quieter and wildlife encounters more intimate. The vehicle can also reverse or reposition more easily when tracking an animal.",
				},
				{
					heading: "Booking Tips",
					body: "Jeep safari slots are limited and fill up quickly, especially during peak season (October to March). Book at least 30–45 days in advance. Government online booking opens 90 days ahead. Zone allocation is done by the booking system — you can express a preference but zone assignment is not guaranteed. Our team at Ranthambhor.com can assist with pre-booking and on-ground guidance.",
				},
			]}
		/>
	);
}
