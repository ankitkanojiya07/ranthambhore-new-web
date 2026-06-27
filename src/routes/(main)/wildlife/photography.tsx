import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "#/components/pages/GuidePage";

export const Route = createFileRoute("/(main)/wildlife/photography")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Wildlife Photography in Ranthambore | Tips, Camera Gear & Best Zones",
			},
			{
				name: "description",
				content:
					"Everything a wildlife photographer needs to know about shooting at Ranthambore — best zones, camera settings, golden hour timings, and essential tips.",
			},
		],
	}),
	component: PhotographyPage,
});

const SECTIONS = [
	{
		heading: "Why Ranthambore?",
		body: "Ranthambore is a photographer's paradise. The open terrain near the lakes, the bold and habituated tigers, and the golden light of the Rajasthan morning combine to create conditions that are rarely found elsewhere. Whether you are a smartphone snapper or a professional with a 600mm prime lens, Ranthambore will test your skills and reward your patience.",
	},
	{
		heading: "Best Zones for Photography",
		body: "Each safari zone offers distinct photographic opportunities — from open lakeside compositions to moody forest light.",
		items: [
			"Zones 1, 2, and 3: Open lakeside terrain, unobstructed sightlines, excellent light at dawn.",
			"Zone 4 (Kachida Valley): Perfect for dramatic rocky landscape shots with wildlife.",
			"Zone 5: Dense canopy creates dappled forest light — ideal for mood photography.",
		],
	},
	{
		heading: "Camera Tips",
		body: "Technical preparation makes the difference between a good sighting and a great photograph.",
		items: [
			"Use a telephoto lens of at least 300mm; 400–600mm is ideal for frame-filling tiger portraits.",
			"Set shutter speed to at least 1/500s to freeze movement; use burst mode.",
			"Bring a beanbag to stabilise your lens on the vehicle door or bonnet.",
			"Arrive at the first gate at sunrise — the best light lasts only 45–90 minutes.",
			"Forest canopy creates challenging mixed lighting — spot metering and RAW shooting are recommended.",
		],
	},
	{
		heading: "Ethical Photography Guidelines",
		body: "Responsible photography protects both wildlife and the experience of other visitors.",
		items: [
			"Never attempt to bait or call wildlife.",
			"Respect the silence — noise disturbs animals and other visitors.",
			"Do not lean out of the vehicle or use flash photography on tigers.",
			"Respect your guide's instructions about vehicle positioning at all times.",
		],
	},
];

function PhotographyPage() {
	return (
		<GuidePage
			eyebrow="Wildlife Encyclopedia"
			title={<>Wildlife Photography</>}
			subtitle="Gear, zones, and golden-hour techniques for Ranthambore"
			image="/tiger.png"
			badge="Photographer's Paradise"
			stats={[
				{
					value: "300",
					unit: "mm+",
					label: "Recommended Telephoto",
					index: "01",
				},
				{
					value: "1/500",
					unit: "s",
					label: "Minimum Shutter Speed",
					index: "02",
				},
				{ value: "45", unit: "–90", label: "Golden Hour Minutes", index: "03" },
				{ value: "3", unit: "", label: "Top Photo Zones", index: "04" },
			]}
			sections={SECTIONS}
		/>
	);
}
