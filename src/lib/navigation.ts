export type NavItem = {
	label: string;
	href: string;
	children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Ranthambore",
		href: "/about",
		children: [
			{ label: "History", href: "/about/history" },
			{ label: "National Park", href: "/about/national-park" },
			{ label: "Flora & Fauna", href: "/about/flora-and-fauna" },
			{ label: "Tigers", href: "/about/tigers" },
			{ label: "Conservation", href: "/about/conservation" },
			{ label: "Fort", href: "/about/fort" },
			{ label: "Temples & Museums", href: "/about/temples-and-museums" },
		],
	},
	{
		label: "Safari",
		href: "/safari",
		children: [
			{ label: "Jeep Safari", href: "/safari/jeep" },
			{ label: "Canter Safari", href: "/safari/canter" },
			// { label: "Chambal Boat Safari", href: "/safari/chambal-boat" },
			{ label: "Zone Guide (Zones 1–10)", href: "/safari/zones" },
			{ label: "Timing & Fees", href: "/safari/timing-and-fees" },
			{ label: "Booking Guidelines", href: "/safari/booking-guidelines" },
			// { label: "Book Your Safari", href: "/safari/book" },
		],
	},
	{
		label: "Plan Your Visit",
		href: "/plan",
		children: [
			{ label: "Best Time to Visit", href: "/plan/best-time" },
			{ label: "How to Reach", href: "/plan/how-to-reach" },
			{ label: "Do's & Don'ts", href: "/plan/dos-and-donts" },
			// { label: "Cab Hire", href: "/plan/cab-hire" },
			// { label: "Tour Packages", href: "/plan/tour-packages" },
			{ label: "FAQs", href: "/plan/faqs" },
			{ label: "Travel Tips", href: "/plan/travel-tips" },
		],
	},
	{
		label: "Highlights",
		href: "/highlights/safari-insights",
		children: [
			{ label: "Safari Highlights", href: "/highlights/safari-insights" },
			{
				label: "Ranthambhore Highlights",
				href: "/highlights/ranthambhore-insights",
			},
		],
	},
	{
		label: "Stay",
		href: "/stay/hotels",
	},
	{
		label: "Nearby Places",
		href: "/nearby-places",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];
