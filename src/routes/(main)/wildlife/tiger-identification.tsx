import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/tiger-identification")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Tiger Identification Guide | Stripe Patterns & Individual Tigers",
			},
			{
				name: "description",
				content:
					"Identify individual Ranthambore tigers by their unique stripe patterns. A visual guide to the park's resident tigers, their territories, and distinguishing features.",
			},
		],
	}),
	component: TigerIdentificationPage,
});

const SECTIONS = [
	{
		heading: "Every Tiger Is Unique",
		body: "Every tiger is as unique as a human fingerprint — the pattern of their stripes is distinctive to each individual and never repeated. Field naturalists and researchers use stripe patterns, ear tears, scar marks, and facial features to identify and monitor individual tigers across the park.",
	},
	{
		heading: "How to Identify a Tiger",
		body: "Use these field marks to distinguish one tiger from another during and after your safari.",
		items: [
			"Facial stripe pattern: The stripes on each side of a tiger's face are unique. A tiger can be identified from a clear photograph of either side of the face.",
			"Ear marks: Notches, tears, or distinctive scarring on the ears help distinguish individuals at a distance.",
			"Body scars: Fight wounds and territorial scars on flanks, shoulders, and haunches are persistent identifiers.",
			"Tail pattern: The unique banding on the tail tip aids identification from behind.",
		],
	},
	{
		heading: "Notable Current Residents",
		body: "These are among the most frequently encountered and identifiable tigers in the park today. Your naturalist guide will help you identify the tiger you encounter during your safari and note its territory and recent sightings.",
		items: [
			"Arrowhead (T-84): Identifiable by the distinctive arrow-shaped mark between her eyes.",
			"Sultan (T-72): Large, broad face with a prominent scar on his left cheek.",
			"Riddhi (T-101): Younger tigress with bold facial markings and an exceptionally confident temperament around vehicles.",
		],
	},
];

function TigerIdentificationPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Tiger Identification Guide</>}
			subtitle="Read the stripes — every tiger tells its own story"
			image="/tiger-footstep.png"
			badge="Field Guide"
			stats={[
				{ value: "4", unit: "", label: "Key ID Features", index: "01" },
				{ value: "60", unit: "+", label: "Individual Tigers", index: "02" },
				{
					value: "2",
					unit: "",
					label: "Face Sides to Photograph",
					index: "03",
				},
				{ value: "3", unit: "", label: "Notable Residents", index: "04" },
			]}
			sections={SECTIONS}
			ctaTitle="Identify Tigers on Safari"
			ctaDescription="Travel with an experienced naturalist who knows every stripe pattern, territory, and recent sighting in the park."
			ctaButtonText="Book a Safari"
		/>
	);
}
