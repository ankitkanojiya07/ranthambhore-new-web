import { createFileRoute } from "@tanstack/react-router";
import CTASection from "#/components/cta";
import { ContactSection } from "#/components/home/ContactSection";
import { ContentSection } from "#/components/pages/ContentSection";
import { IntroSection } from "#/components/pages/IntroSection";
import { PageHero } from "#/components/pages/PageHero";
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
			<PageHero
				eyebrow="Contact"
				title="Get in Touch"
				subtitle="Safari bookings, hotel reservations, tour packages, and custom Rajasthan itineraries."
				image="/gallery/7.jpg"
				primaryCta={{ label: "Send Enquiry", href: "#contact-form" }}
				secondaryCta={{ label: "Book a Safari", href: "/safari/book" }}
			/>

			<IntroSection
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
				blocks={[
					{
						heading: "How to Reach Us",
						body: "Reach our Sawai Madhopur booking desk by phone, email, or through the enquiry form below.",
						items: [
							"Website: ranthambhor.com",
							"Email: [your contact email]",
							"Phone / WhatsApp: [your contact number]",
							"Office Address: [your address], Sawai Madhopur, Rajasthan",
							"Office Hours: 8:00 AM to 8:00 PM (IST), Monday to Sunday",
						],
					},
					{
						heading: "What We Can Help With",
						body: "From a single safari booking to a full Rajasthan itinerary — we handle every detail.",
						items: [
							"Safari bookings (Jeep, Canter, Chambal river)",
							"Hotel and resort reservations",
							"Custom tour packages and itineraries",
							"Private naturalist guide arrangements",
							"Vehicle hire and airport/station transfers",
							"Wedding and event photography packages in the forest zone",
						],
					},
				]}
			/>

			<div id="contact-form">
				<ContactSection />
			</div>

			<WhyChooseSection />

			<CTASection
				eyebrowLabel="Start Planning"
				title="Your Ranthambore Adventure Awaits"
				description="Whether it's your first safari or your tenth, our local team is ready to help you plan every detail."
				buttonText="Book a Safari"
				buttonLink="/safari/book"
			/>
		</div>
	);
}
