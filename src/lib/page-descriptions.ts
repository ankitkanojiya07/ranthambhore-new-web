/** Short descriptions for section landing link cards */
export const PAGE_DESCRIPTIONS: Record<string, string> = {
	"/about/history":
		"From Chauhan kings to Project Tiger — a thousand years of wild history.",
	"/about/national-park":
		"Definitive park guide — geography, season, fort heritage, and tiger reserve context.",
	"/about/flora-and-fauna":
		"Wilderness of Ranthambore — dhok forest, mammals, reptiles, and 300+ bird species.",
	"/about/tigers":
		"Royal Bengal Tigers — Machli, Arrowhead, Krishna, Sultan, Noor, Riddhi, and Fateh.",
	"/about/conservation":
		"Project Tiger, anti-poaching, community engagement, and conservation milestones.",
	"/about/heritage":
		"Fort, temples, museums, and the cultural heritage inside the tiger reserve.",
	"/about/fort": "A 10th-century hilltop fortress at the heart of the reserve.",
	"/about/temples-and-museums":
		"Sacred sites, Ganesh Temple, and cultural landmarks inside the park.",
	"/safari/jeep":
		"Compare Gypsy (6-seater) and Canter (20-seater) safaris — cost, capacity, and best fit.",
	"/safari/canter":
		"Compare Gypsy (6-seater) and Canter (20-seater) safaris — cost, capacity, and best fit.",
	"/safari/chambal-boat":
		"River safari on the Chambal — gharials, dolphins, and wetland birds.",
	"/safari/zones":
		"Zones 1–10 landscape guide — terrain, lakes, wildlife character, no sighting guarantees.",
	"/safari/timing-and-fees":
		"Season-wise safari timings, booking window, documents, and park rules.",
	"/safari/booking-guidelines":
		"Season-wise safari timings, booking window, documents, and park rules.",
	"/safari/book":
		"Request jeep or canter safari help after you understand zones and timings.",
	"/stay/hotels":
		"Curated stay shortlist near the forest gates — independent planning advice.",
	"/stay/guide": "Where to stay by budget, zone proximity, and travel style.",
	"/plan":
		"How to reach, best time, safari basics, packing, and FAQs for Sawai Madhopur.",
	"/plan/best-time":
		"Season-by-season guide — tigers, weather, and crowd levels.",
	// "/plan/how-to-reach": "Trains, flights, and road routes to Sawai Madhopur.",
	"/plan/dos-and-donts":
		"Park rules, safari etiquette, and responsible wildlife viewing.",
	"/plan/cab-hire":
		"Airport transfers, local taxis, and multi-day vehicle hire.",
	"/plan/tour-packages":
		"Curated safari + stay packages for every budget and duration.",
	"/plan/faqs": "Answers to the most common Ranthambore travel questions.",
	"/plan/travel-tips":
		"Packing lists, booking windows, and insider advice from locals.",
};

export function getPageDescription(href: string): string {
	return (
		PAGE_DESCRIPTIONS[href] ??
		"Expert guides, detailed information, and everything you need to plan your visit."
	);
}
