export interface SeasonTimingRow {
	months: string;
	morning: string;
	afternoon: string;
}

export interface ScheduleStep {
	title: string;
	body: string | readonly string[];
}

export const TIMINGS_BOOKING_CONTENT = {
	title: "Timings & Booking Guidelines",
	subtitle:
		"Season-wise safari schedules, day-of logistics, and everything you need to book your Ranthambore safari with confidence.",
} as const;

export const SEASON_TIMINGS_TABLE = {
	title: "Safari Timings by Season",
	rows: [
		{
			months: "October 1st – October 31st",
			morning: "6:30 AM – 10:00 AM",
			afternoon: "2:30 PM – 6:00 PM",
		},
		{
			months: "November 1st – January 31st",
			morning: "7:00 AM – 10:30 AM",
			afternoon: "2:00 PM – 5:30 PM",
		},
		{
			months: "February 1st – March 31st",
			morning: "6:30 AM – 10:00 AM",
			afternoon: "2:30 PM – 6:00 PM",
		},
		{
			months: "April 1st – May 15th",
			morning: "6:00 AM – 9:30 AM",
			afternoon: "3:00 PM – 6:30 PM",
		},
		{
			months: "May 16th – June 30th",
			morning: "6:00 AM – 9:30 AM",
			afternoon: "3:30 PM – 7:00 PM",
		},
	] satisfies SeasonTimingRow[],
} as const;

export const SAFARI_TIMINGS_SECTION = {
	title: "Safari Timings",
	overviewHeading: "Safari Schedule: An Overview",
	overview:
		"Please note that safari timings in Ranthambhore National Park shift slightly (approximately ±1 hour) depending on the season. Our team will confirm your exact safari timings when you arrive. Below is a general outline to help you plan:",
	steps: [
		{
			title: "Arrival & Briefing",
			body: "Upon your arrival in Ranthambhore — or at another convenient time — a member of our team will meet you at your hotel for a quick briefing. We'll walk you through your safari itinerary, answer any questions, and make sure you're fully prepared for the adventure ahead.",
		},
		{
			title: "Safari Departure from Hotel",
			body: [
				"Morning Safari: Pick-up at approximately 06:00",
				"Afternoon Safari: Pick-up at approximately 14:00 (Exact timings vary by season.)",
				"Your private Jeep, along with your experienced naturalist guide and driver, will meet you at your hotel. Unlike shared safaris, your private vehicle ensures a direct, non-stop journey to the park — no time wasted collecting other guests.",
			],
		},
		{
			title: "Arrival at Ranthambhore National Park",
			body: [
				"Morning Entry: Around 06:30",
				"Afternoon Entry: Around 14:30",
				"It typically takes about 20 minutes to reach the park entrance from most hotels. Thanks to your private Jeep, you'll enjoy an efficient and smooth entry process.",
			],
		},
		{
			title: "Safari Exit from Ranthambhore National Park",
			body: [
				"Morning Exit: Around 10:00",
				"Afternoon Exit: Around 18:00",
				"You're allowed to stay inside the park until these official exit times. However, with a private Jeep, you have the flexibility to end your safari earlier if you wish — whether it's after a memorable sighting or simply to return for some rest.",
			],
		},
		{
			title: "Return to Hotel",
			body: [
				"Morning Drop-off: Approximately 10:30",
				"Afternoon Drop-off: Approximately 18:30",
				"Morning safari guests typically return to a hearty breakfast at their hotel, while those on afternoon safaris arrive back just in time to relax before dinner or enjoy a sundowner drink. (Exact timing varies depending on the season.)",
			],
		},
	] satisfies ScheduleStep[],
} as const;

export interface SafariPlanningTip {
	label: string;
	description: string;
}

export const BEST_TIME_SECTION = {
	title: "Best Time for Ranthambore's Jungle Safari",
	intro:
		"The best time to visit Ranthambore National Park is during the months of October to March since the weather is pleasant to travel. But it is during the months of April to June that you can see tigers more since they can be seen near the lakes and other water bodies to quench their thirst during the hot summer season.",
	tips: [
		{
			label: "Advance Booking",
			description:
				"Ensure you book your Ranthambore safari well in advance. Due to its popularity, failing to do so might result in not getting your preferred zone, vehicle, or even a seat.",
		},
		{
			label: "Multiple Safaris",
			description:
				"Consider taking multiple safaris. This increases your chances of sighting a tiger, as sightings are influenced by both seasons and tiger movements.",
		},
		{
			label: "Hydration",
			description:
				"Bring plenty of water. A safari typically lasts around 3 and a half hours.",
		},
		{
			label: "Binoculars",
			description:
				"Given that animals might be distant, carrying binoculars can enhance your viewing experience.",
		},
		{
			label: "Clothing",
			description:
				"Opt for earthy-toned clothes like brown, green, and beige. These help you blend in with the surroundings. Avoid bright colors like red, which might make animals cautious and deter them from approaching.",
		},
	] satisfies SafariPlanningTip[],
} as const;

export const BOOKING_SECTION = {
	bookingTipsHeading: "Booking Tips",
	bookingTips: [
		"Book safaris through official websites at least 90 days in advance, especially during peak season (October–June).",
		"Carry a government-issued photo ID for mandatory park entry verification.",
		"Patience and silence are key virtues that often reward visitors with rare wildlife sightings.",
	],
	officialBookingHeading: "Official Online Booking",
	officialBooking:
		"All Ranthambore safaris must be booked through the official Rajasthan Forest Department online portal (ranthambore.rajasthan.gov.in) or through authorised tour operators like Ranthambhor.com. Walk-in bookings on the day are generally not possible during peak season.",
	bookingWindowHeading: "Booking Window",
	bookingWindow:
		"The booking portal opens 90 days before your preferred safari date. Peak season slots (October to March) get booked rapidly — often within hours of opening. For guaranteed slots during peak months, book as early as possible, ideally 45–60 days in advance.",
	cancellationHeading: "Cancellation Policy",
	cancellation:
		"Government bookings: Cancellations made 48 hours before the safari are generally eligible for a refund (less processing fees). Last-minute cancellations are typically non-refundable. Operator-arranged bookings may have different terms — confirm with your booking agent.",
	documentsHeading: "Documents Required",
	documentsIntro: "Carry the following for every passenger on your safari.",
	documents: [
		"Government-issued photo ID for every passenger (Aadhaar card, passport, driving licence, or voter ID)",
		"For foreign nationals: passport details are mandatory",
		"Printout or digital copy of the booking confirmation",
	],
} as const;
