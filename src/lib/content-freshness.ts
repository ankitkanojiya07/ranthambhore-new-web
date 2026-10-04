/**
 * Phase 3 freshness registry — single source of truth for review dates
 * and substantive changelogs on factual guides.
 *
 * Update this file whenever safari rules, seasons, or key facts change.
 */

export type ContentReview = {
	path: string;
	lastReviewed: string;
	note?: string;
	changelog?: readonly string[];
};

/** Monthly operating checklist for the editorial team (also cited on /llm-info). */
export const EDITORIAL_CADENCE = {
	monthly: [
		"Confirm open/closed status and any official timing shifts for the coming month.",
		"Review safari cost/permit wording against the official portal (never invent fees).",
		"Publish or curate at least one genuine field/highlight update when there is real news.",
		"Scan Search Console for queries with impressions but weak CTR — refresh those titles/intros first.",
	],
	quarterly: [
		"Audit top and bottom performing guides; deepen winners and recover decliners.",
		"Merge or redirect overlapping URLs rather than adding near-duplicate pages.",
		"Re-check internal links from hubs to spokes and related guides modules.",
	],
	annual: [
		"Update tiger-population language after official census / NTCA releases.",
		"Full pass on best-time, itineraries, packing, and monsoon-closure copy before October reopening.",
		"Re-validate fee/permit process copy against the current booking portal.",
	],
} as const;

export const CONTENT_REVIEWS: ContentReview[] = [
	{
		path: "/",
		lastReviewed: "2026-10-04",
		changelog: ["Shifted homepage positioning to destination authority"],
	},
	{
		path: "/about/national-park",
		lastReviewed: "2026-10-04",
		note: "Verify live safari rules with official sources",
		changelog: [
			"Expanded ecology and monsoon-closure sections",
			"Added park FAQs and related guides",
		],
	},
	{
		path: "/about/tigers",
		lastReviewed: "2026-10-04",
		note: "Tiger counts and ranges change — verify official updates",
		changelog: [
			"Added naming-system and Machali legacy hub copy",
			"Added tiger FAQs with non-guarantee language",
		],
	},
	{
		path: "/about/flora-and-fauna",
		lastReviewed: "2026-10-04",
		changelog: [
			"Added animal checklist and leopard species card",
			"Added wildlife FAQs",
		],
	},
	{
		path: "/about/conservation",
		lastReviewed: "2026-10-04",
		changelog: ["Linked conservation hub into related-guide clusters"],
	},
	{
		path: "/safari",
		lastReviewed: "2026-10-04",
		note: "Confirm live permits and timings on official sources",
		changelog: [
			"Replaced thin landing with full safari encyclopedia hub",
			"Added FAQs and related guides",
		],
	},
	{
		path: "/safari/zones",
		lastReviewed: "2026-10-04",
		note: "Zone character notes; allocation is forest-department controlled",
		changelog: ["Added opening answer, freshness note, related guides"],
	},
	{
		path: "/safari/jeep",
		lastReviewed: "2026-10-04",
		note: "Indicative costs — verify live fees officially",
		changelog: ["Added Gypsy vs Canter comparison table and FAQs"],
	},
	{
		path: "/safari/timing-and-fees",
		lastReviewed: "2026-10-04",
		note: "Verify live fees and session times on the official portal",
		changelog: [
			"Added safari cost/permit framework (no invented fee tables)",
			"Clarified booking-window language",
		],
	},
	{
		path: "/plan",
		lastReviewed: "2026-10-04",
		note: "Confirm monsoon closure and safari windows before booking travel",
		changelog: [
			"Added month-by-month table and 2-/3-day itineraries",
			"Expanded Delhi/Jaipur FAQs",
		],
	},

	{
		path: "/stay/hotels",
		lastReviewed: "2026-10-04",
		changelog: ["Reframed meta as independent stay shortlist"],
	},
	{
		path: "/llm-info",
		lastReviewed: "2026-10-04",
		note: "Aligns with site editorial SEO strategy",
		changelog: ["Added citation policy and editorial cadence summary"],
	},
];

export function getContentReview(path: string): ContentReview | undefined {
	const normalized =
		path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
	return CONTENT_REVIEWS.find((entry) => entry.path === normalized);
}

export function getLastReviewed(path: string, fallback = "2026-10-04"): string {
	return getContentReview(path)?.lastReviewed ?? fallback;
}
