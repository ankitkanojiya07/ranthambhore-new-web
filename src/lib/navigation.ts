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
			{ label: "Chambal Boat Safari", href: "/safari/chambal-boat" },
			{ label: "Zone Guide (Zones 1–10)", href: "/safari/zones" },
			{ label: "Timing & Fees", href: "/safari/timing-and-fees" },
			{ label: "Booking Guidelines", href: "/safari/booking-guidelines" },
			{ label: "Book Your Safari", href: "/safari/book" },
		],
	},
	{
		label: "Wildlife",
		href: "/wildlife",
		children: [
			{ label: "Tigers of Ranthambore", href: "/wildlife/tigers" },
			{ label: "Mammals", href: "/wildlife/mammals" },
			{ label: "Birds", href: "/wildlife/birds" },
			{
				label: "Reptiles & Amphibians",
				href: "/wildlife/reptiles-and-amphibians",
			},
			{ label: "Flora", href: "/wildlife/flora" },
			{ label: "Wildlife Photography", href: "/wildlife/photography" },
			{
				label: "Tiger Identification Guide",
				href: "/wildlife/tiger-identification",
			},
			{ label: "Conservation Projects", href: "/wildlife/conservation" },
		],
	},
	{
		label: "Stay",
		href: "/stay",
		children: [
			{ label: "Hotels & Resorts", href: "/stay/hotels" },
			{ label: "Where to Stay Guide", href: "/stay/guide" },
		],
	},
	{
		label: "Plan Your Visit",
		href: "/plan",
		children: [
			{ label: "Best Time to Visit", href: "/plan/best-time" },
			{ label: "How to Reach", href: "/plan/how-to-reach" },
			{ label: "Do's & Don'ts", href: "/plan/dos-and-donts" },
			{ label: "Cab Hire", href: "/plan/cab-hire" },
			{ label: "Tour Packages", href: "/plan/tour-packages" },
			{ label: "FAQs", href: "/plan/faqs" },
			{ label: "Travel Tips", href: "/plan/travel-tips" },
		],
	},
	{
		label: "Nearby Places",
		href: "/nearby-places",
	},
	{
		label: "Blog / Stories",
		href: "/blog",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];
