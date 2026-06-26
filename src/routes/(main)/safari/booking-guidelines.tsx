import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/safari/booking-guidelines")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title: "How to Book Ranthambore Safari | Online Booking Guide & Tips",
			},
			{
				name: "description",
				content:
					"Step-by-step guide to booking your Ranthambore safari online. Learn about advance booking windows, ID requirements, cancellation policies, and what to expect.",
			},
		],
	}),
	component: BookingGuidelinesPage,
});

function BookingGuidelinesPage() {
	return (
		<GuidePage
			eyebrow="Safari"
			title="Booking Guidelines"
			subtitle="Everything you need to know before securing your Ranthambore safari slot."
			image="/gallery/5.jpg"
			sections={[
				{
					heading: "Official Online Booking",
					body: "All Ranthambore safaris must be booked through the official Rajasthan Forest Department online portal (ranthambore.rajasthan.gov.in) or through authorised tour operators like Ranthambhor.com. Walk-in bookings on the day are generally not possible during peak season.",
				},
				{
					heading: "Booking Window",
					body: "The booking portal opens 90 days before your preferred safari date. Peak season slots (October to March) get booked rapidly — often within hours of opening. For guaranteed slots during peak months, book as early as possible, ideally 45–60 days in advance.",
				},
				{
					heading: "Documents Required",
					body: "Carry the following for every passenger on your safari.",
					items: [
						"Government-issued photo ID for every passenger (Aadhaar card, passport, driving licence, or voter ID)",
						"For foreign nationals: passport details are mandatory",
						"Printout or digital copy of the booking confirmation",
					],
				},
				{
					heading: "Important Rules",
					body: "Park rules every visitor must follow during their safari.",
					items: [
						"Arrival at the gate at least 30 minutes before the scheduled safari departure time",
						"No plastic bags, outside food, or alcohol inside the park",
						"Remain seated in the vehicle at all times unless at a designated halt point",
						"No loud music or unnecessary noise",
						"Children under 6 years may not be permitted on certain zones — confirm at time of booking",
					],
				},
				{
					heading: "Cancellation Policy",
					body: "Government bookings: Cancellations made 48 hours before the safari are generally eligible for a refund (less processing fees). Last-minute cancellations are typically non-refundable. Operator-arranged bookings may have different terms — confirm with your booking agent.",
				},
			]}
			ctaTitle="Ready to Book?"
			ctaDescription="Let our team handle the booking process — from zone selection to gate arrival instructions."
			ctaButtonText="Book a Safari"
			ctaButtonLink="/safari/book"
		/>
	);
}
