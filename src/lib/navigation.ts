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
			{ label: "National Park", href: "/about/national-park" },
			{ label: "Wildlife (Flora & Fauna)", href: "/about/flora-and-fauna" },
			{ label: "Tigers", href: "/about/tigers" },
			{ label: "Conservation", href: "/about/conservation" },
			// { label: "Heritage (Fort, Temples & Museums)", href: "/about/heritage" },
		],
	},
	{
		label: "Safari",
		href: "/safari",
		children: [
			{ label: "Jeep & Canter Safari", href: "/safari/jeep" },
			// { label: "Chambal Boat Safari", href: "/safari/chambal-boat" },
			{ label: "Zone Guide (Zones 1–10)", href: "/safari/zones" },
			{ label: "Timings & Booking Guidelines", href: "/safari/timing-and-fees" },
			// { label: "Book Your Safari", href: "/safari/book" },
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
		label: "Plan Your Visit",
		href: "/plan",
	},
	{
		label: "Stay",
		href: "/stay/hotels",
	},
	{
		label: "Attractions",
		href: "/nearby-places",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];
