export const TIGERS_HUB_CONTENT = {
	eyebrow: "Tigers pillar",
	title: "Tigers of Ranthambore",
	intro:
		"Ranthambore is famous because its Royal Bengal tigers are relatively visible in open dry forest, lakes, and fort landscapes — and because individual cats have become known by name and T-code. This hub explains how tigers are identified here, why Machali still matters, and how to read famous-tiger stories without treating any animal as a guaranteed sighting.",
	lastReviewed: "2026-10-04",
} as const;

export const TIGERS_HUB_SECTIONS = [
	{
		title: "Royal Bengal tigers in this landscape",
		paragraphs: [
			"Ranthambore's tigers live in a dry deciduous system of dhok forest, grasslands, ravines, and lakes. Prey such as chital and sambar, plus water availability in the dry months, shapes where tigers move and how often visitors glimpse them.",
			"Population figures change with official monitoring cycles. Treat any public count as approximate and prefer Forest Department / NTCA updates over informal social-media tallies.",
		],
	},
	{
		title: "How Ranthambore tiger names work",
		paragraphs: [
			"Many Ranthambore tigers carry both a popular name and a monitoring code (for example T-16 for Machali). Codes help researchers and forest staff track individuals across camera traps and field records; popular names help visitors and storytellers remember distinctive animals.",
			"Names often come from a physical mark, a territory landmark, or a family line. A fish-like facial mark made Machali famous; later generations of her lineage still shape how people talk about the park's tiger dynasty.",
		],
	},
	{
		title: "Machali's legacy",
		paragraphs: [
			"Machali (T-16), often called the Lady of the Lakes, became one of the world's most photographed wild tigers. Her comfort near tourist routes, long life, and dramatic territory around the lakes and fort brought global attention to Ranthambore — and to Project Tiger's public story.",
			"Her descendants and the territories she once held still appear in visitor conversations. Read her full profile for verified narrative detail, and remember that today's safaris encounter living individuals with their own ranges and temperaments.",
		],
		href: "/about/tigers/machali",
		linkLabel: "Read Machali's full profile",
	},
	{
		title: "Reading sightings responsibly",
		paragraphs: [
			"Famous-tiger pages are biographies and field notes — not booking promises. A tiger associated with Zone 3 last season may shift range, share space, or remain unseen for days.",
			"If you care about identification, ask your naturalist about stripe patterns, territory clues, and recent verified movement. Never pressure a driver to leave a track or crowd an animal for a closer look.",
		],
	},
] as const;

export const TIGERS_HUB_FAQS = [
	{
		question: "How many tigers are in Ranthambore?",
		answer:
			"Published counts vary by census year and whether cubs or adjoining reserve areas are included. Use the latest official Project Tiger / Forest Department figures rather than a fixed marketing number. On this site we treat population as approximate and date-sensitive.",
	},
	{
		question: "Who was Machali?",
		answer:
			"Machali (T-16) was a legendary Ranthambore tigress known as the Lady of the Lakes — widely photographed, long-lived, and central to the park's modern tourism story. She died in 2016; her legacy continues through descendants and the global attention she brought to the reserve.",
	},
	{
		question: "Can I request a zone to see a specific tiger?",
		answer:
			"You can request zones associated with recent activity, but allocation is forest-department controlled and animals move. Book multiple safaris and treat any named tiger as a hope, not a deliverable.",
	},
] as const;

export const TIGERS_RELATED_GUIDES = [
	{
		title: "Safari Zones 1–10",
		href: "/safari/zones",
		description: "Where lake, fort, and valley habitats shape tiger movement.",
	},
	{
		title: "Wildlife & Flora",
		href: "/about/flora-and-fauna",
		description:
			"Prey species, leopards, birds, and the forest that supports tigers.",
	},
	{
		title: "Conservation",
		href: "/about/conservation",
		description: "Project Tiger, protection, and why the population recovered.",
	},
	{
		title: "Safari Guide",
		href: "/safari",
		description: "Vehicles, permits, and how to plan sessions responsibly.",
	},
] as const;
