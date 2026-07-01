import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "#/components/home/ContactSection";
import { ContentSection } from "#/components/pages/ContentSection";
import { IntroSection } from "#/components/pages/IntroSection";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/contact/")({
	staticData: { navOverlay: false },
	head: () => ({
		meta: [
			{
				title:
					"Contact Ranthambhor.com | Safari Bookings, Enquiries & Custom Packages",
			},
			{
				name: "description",
				content:
					"Get in touch with the Ranthambhor.com team for safari bookings, hotel reservations, tour packages, and custom Rajasthan itineraries. Based in Sawai Madhopur.",
			},
		],
	}),
	component: ContactPage,
});

function ContactPage() {
	return (
		<div className="bg-sand-50">
			<IntroSection
				className="pt-28 lg:pt-32"
				eyebrow="Local Experts"
				title="Sawai Madhopur-Based Wildlife Team"
			>
				We are a Sawai Madhopur-based wildlife travel team with deep local
				knowledge of Ranthambore National Park. Our guides have decades of
				combined experience inside the park, and our booking desk operates seven
				days a week to ensure every traveller gets the best possible Ranthambore
				experience.
			</IntroSection>

			<ContentSection
				className="pt-0"
				blocks={[
					{
						heading: "What We Can Help With",
						body: "From a single safari booking to a full Rajasthan itinerary — we handle every detail.",
						items: [
							"Safari bookings (Jeep, Canter, Chambal river)",
							"Hotel and resort reservations",
							"Custom tour packages and itineraries",
							"Private naturalist guide arrangements",
							"Vehicle hire and airport/station transfers",
							// "Wedding and event photography packages in the forest zone",
						],
					},
				]}
			/>

			<div id="contact-form">
				<ContactSection />
			</div>

			<WhyChooseSection />
		</div>
	);
}
