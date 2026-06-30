/** Short descriptions for section landing link cards */
export const PAGE_DESCRIPTIONS: Record<string, string> = {
	"/about/history":
		"From Chauhan kings to Project Tiger — a thousand years of wild history.",
	"/about/national-park":
		"392 sq km of lakes, fort country, and India's most celebrated tiger terrain.",
	"/about/flora-and-fauna":
		"Dry deciduous forests, 300+ bird species, and the full spectrum of park wildlife.",
	"/about/tigers":
		"60+ Bengal tigers, famous individuals, and why sightings here are unmatched.",
	"/about/conservation":
		"Project Tiger legacy, anti-poaching efforts, and community conservation.",
	"/about/fort": "A 10th-century hilltop fortress at the heart of the reserve.",
	"/about/temples-and-museums":
		"Sacred sites, Ganesh Temple, and cultural landmarks inside the park.",
	"/safari/jeep":
		"Six-seat Gypsy safaris — the gold standard for wildlife photography.",
	"/safari/canter":
		"Affordable 20-seat open bus safaris through core tiger zones.",
	"/safari/chambal-boat":
		"River safari on the Chambal — gharials, dolphins, and wetland birds.",
	"/safari/zones":
		"All 10 safari zones explained — terrain, tigers, and booking tips.",
	"/safari/timing-and-fees":
		"Morning and afternoon slots, current fees, and seasonal schedules.",
	"/safari/booking-guidelines":
		"How to book online, ID requirements, and what to expect at the gate.",
	"/safari/book":
		"Reserve your jeep or canter safari with our Sawai Madhopur team.",
	"/stay/hotels":
		"Handpicked resorts and lodges minutes from the forest gates.",
	"/stay/guide": "Where to stay by budget, zone proximity, and travel style.",
	"/plan/best-time":
		"Season-by-season guide — tigers, weather, and crowd levels.",
	"/plan/how-to-reach": "Trains, flights, and road routes to Sawai Madhopur.",
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
