import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/safari/book")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Book Ranthambore Safari Online | Jeep & Canter Safari Reservations",
			},
			{
				name: "description",
				content:
					"Book your Ranthambore safari with Ranthambhor.com. Secure your jeep or canter safari slot, get zone advice, and enjoy a hassle-free booking experience.",
			},
		],
	}),
	component: BookSafariPage,
});

function BookSafariPage() {
	return (
		<GuidePage
			eyebrow="Safari"
			title="Book Your Safari"
			subtitle="Ready to meet the tiger on his home ground?"
			image="/gallery/6.jpg"
			sections={[
				{
					heading: "Hassle-Free Safari Booking",
					body: "Booking a Ranthambore safari is straightforward when you know the system — and we are here to help you every step of the way. At Ranthambhor.com, we combine official government booking with personalised guidance from experienced local naturalists. Whether you want a specific zone, a particular time of day, or advice on the best dates for your travel style, our team is ready to assist.",
				},
				{
					heading: "What We Offer",
					body: "End-to-end safari booking support from local experts.",
					items: [
						"Confirmed safari slots in Zones 1–10 (subject to availability)",
						"Choice of Jeep (Gypsy) or Canter safari",
						"Certified naturalist guides with deep local knowledge",
						"Pickup and drop from your hotel in Sawai Madhopur",
						"Pre-safari briefing on what to expect, how to photograph, and how to read animal behaviour",
					],
				},
				{
					heading: "How to Book",
					body: "Fill in the enquiry form with your preferred dates, number of travellers, and safari type. Our team will respond within a few hours with available slots and pricing. For urgent bookings or last-minute availability, call or WhatsApp us directly.",
				},
			]}
		/>
	);
}
