import { createFileRoute } from "@tanstack/react-router";
import type { FaqItem } from "#/components/pages/FaqAccordion";
import { FaqAccordion } from "#/components/pages/FaqAccordion";
import { PageHero } from "#/components/pages/PageHero";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/plan/faqs")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore FAQ | Frequently Asked Questions About Safari & Wildlife",
			},
			{
				name: "description",
				content:
					"Answers to the most common questions about Ranthambore National Park — tiger sightings, safari booking, best zones, park fees, and what to expect.",
			},
		],
	}),
	component: FaqsPage,
});

const FAQ_ITEMS: FaqItem[] = [
	{
		id: "tiger-guarantee",
		question: "Is a tiger sighting guaranteed at Ranthambore?",
		answer:
			"No wildlife sighting is ever guaranteed — we are visiting wild animals in their natural habitat. However, Ranthambore has one of the highest tiger sighting success rates in India. With over 60 tigers in the reserve and open terrain near the lakes, sighting rates during peak season can be as high as 70–80% on any given safari. An expert guide and a well-chosen zone significantly improve your chances.",
	},
	{
		id: "how-many-safaris",
		question: "How many safaris should I do?",
		answer:
			"We recommend a minimum of 2–3 safaris spread across at least 2 days. Each safari brings different wildlife, light, and zone experiences. Many repeat visitors do 4–6 safaris per trip and still discover something new every time.",
	},
	{
		id: "children-safari",
		question: "Can I bring children on safari?",
		answer:
			"Yes — Ranthambore is a fantastic experience for children above the age of 6. Some zones may have age restrictions; confirm at booking. Children under 6 are generally not recommended for safety reasons, though rules may vary.",
	},
	{
		id: "jeep-vs-canter",
		question: "What is the difference between Jeep and Canter safari?",
		answer:
			"A Jeep (Gypsy) holds 6 passengers and offers a more intimate, flexible experience. A Canter holds 20 passengers and is more affordable. Both can offer excellent wildlife sightings. Photographers and serious wildlife watchers prefer the Jeep.",
	},
	{
		id: "walk-in-booking",
		question: "Can I book a safari at the gate on the day?",
		answer:
			"Walk-in slots are extremely limited and generally not available during peak season. Always book in advance — online through the official portal or through an authorised operator like Ranthambhor.com.",
	},
	{
		id: "what-to-wear",
		question: "What should I wear on safari?",
		answer:
			"Wear earth tones — khaki, olive, beige, or light grey. Avoid white, bright colours, or prints that could startle or alert wildlife. Comfortable, layered clothing is recommended as mornings can be chilly and afternoons warm.",
	},
	{
		id: "solo-female",
		question: "Is Ranthambore safe for solo female travellers?",
		answer:
			"Yes. Ranthambore is a well-regulated national park with authorised guides, organised safaris, and established tourist infrastructure. As with any travel in India, standard precautions apply. The town of Sawai Madhopur is generally safe and traveller-friendly.",
	},
];

function FaqsPage() {
	return (
		<div className="bg-sand-50">
			<PageHero
				eyebrow="Plan Your Visit"
				title="FAQs"
				subtitle="Answers to the most common questions about Ranthambore safaris and wildlife."
				image="/gallery/14.jpg"
				primaryCta={{ label: "Book a Safari", href: "/safari/book" }}
				secondaryCta={{ label: "Contact Us", href: "/contact" }}
			/>
			<FaqAccordion
				items={FAQ_ITEMS}
				eyebrow="Wildlife & Safari"
				title="Frequently Asked Questions"
			/>
			<WhyChooseSection />
		</div>
	);
}
