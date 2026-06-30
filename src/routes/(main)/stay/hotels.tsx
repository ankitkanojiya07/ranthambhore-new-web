import { createFileRoute } from "@tanstack/react-router";
import { ContentSection } from "#/components/pages/ContentSection";
import { FeaturedHotelsSection } from "#/components/pages/FeaturedHotelsSection";
import { IntroSection } from "#/components/pages/IntroSection";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/stay/hotels")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Hotels & Resorts in Ranthambore | Luxury, Boutique & Budget Stay Options",
			},
			{
				name: "description",
				content:
					"Find the best hotels and resorts near Ranthambore National Park — Ranthambore Regency, Ranthambhore Aangan, Taj Sawai Madhopur Lodge, and more.",
			},
		],
	}),
	component: HotelsPage,
});

function HotelsPage() {
	return (
		<div className="bg-sand-50">
			<IntroSection eyebrow="Accommodation" title="Stay Close to the Forest">
				Where you stay in Ranthambore is as important as where you safari. The
				right hotel puts you close to the forest gates, ensures you reach the
				morning safari briefing on time, and provides a comfortable refuge after
				an exhilarating day in the wild.
			</IntroSection>

			<FeaturedHotelsSection />

			<ContentSection
				blocks={[
					{
						heading: "By Budget",
						body: "Beyond our recommended picks, Ranthambore's accommodation ranges from ultra-luxury tented camps used by royalty to characterful family-run guesthouses — and everything in between.",
						items: [
							"Luxury (INR 15,000+ per night): Expect tented camps with private butlers, curated wildlife experiences, and in-house naturalists. Top picks: Oberoi Vanya Vilas, Aman-i-Khás, Sher Bagh.",
							"Deluxe (INR 6,000–15,000 per night): Comfortable cottages or rooms with pool, multi-cuisine restaurant, and in-house safari desk. Top picks: Sajjan Bagh, Dev Vilas, Tiger Moon Resort.",
							"Standard (INR 2,500–6,000 per night): Good quality rooms, reliable service, and close to park gates. Vatika Resort, Rajputana Heritage, and Raj Palace are perennial favourites.",
							"Budget (Under INR 2,500 per night): Clean guesthouses and family-run lodges in Sawai Madhopur town and along Ranthambore Road. Ideal for backpackers and budget-conscious travellers.",
						],
					},
				]}
				imageOffset={3}
			/>

			<WhyChooseSection />
		</div>
	);
}
