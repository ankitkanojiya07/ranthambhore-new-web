import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "#/components/home/ContactSection";
import { ContentSection } from "#/components/pages/ContentSection";
import { IntroSection } from "#/components/pages/IntroSection";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";
import { buildPageHead } from "#/lib/seo";

export const Route = createFileRoute("/(main)/contact/")({
	staticData: { navOverlay: false },
	head: () =>
		buildPageHead({
			title: "Contact Ranthambhor.com | Safari Planning Enquiries",
			description:
				"Contact the Sawai Madhopur-based Ranthambhor.com team for safari planning help, stay shortlists, and custom Ranthambore itineraries — after you know what you need.",
			path: "/contact",
			breadcrumbs: [
				{ name: "Home", path: "/" },
				{ name: "Contact", path: "/contact" },
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
							"Safari bookings (Jeep, Canter)",
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
