import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "#/components/pages/SectionLanding";
import { NAV_ITEMS } from "#/lib/navigation";
import { buildPageHead } from "#/lib/seo";

const aboutChildren =
	NAV_ITEMS.find((item) => item.label === "About Ranthambore")?.children ?? [];

export const Route = createFileRoute("/(main)/about/")({
	staticData: { navOverlay: true },
	head: () =>
		buildPageHead({
			title:
				"About Ranthambore | National Park, Wildlife, Tigers & Conservation",
			description:
				"Explore Ranthambore through destination guides — national park facts, wildlife, famous tigers, conservation, and the heritage that shapes the reserve.",
			path: "/about",
			image: "/Home/ran1.jpg",
			breadcrumbs: [
				{ name: "Home", path: "/" },
				{ name: "About", path: "/about" },
			],
		}),
	component: AboutLandingPage,
});

function AboutLandingPage() {
	return (
		<SectionLanding
			showWhyChoose={false}
			eyebrow="About Ranthambore"
			title={
				<>
					Where History
					<br className="hidden lg:block" /> Meets the Wild
				</>
			}
			subtitle="National park, wildlife, tigers, conservation, and heritage in one of India's most celebrated wild places."
			intro="Nestled amidst the ancient Aravalli and Vindhya hill ranges in Rajasthan's Sawai Madhopur district, Ranthambore offers a rare blend of Royal Bengal Tigers, protected forests, historic lakes, and the 10th-century Ranthambore Fort. These guides bring together the national park story, flora and fauna, famous tigers, conservation work, and cultural heritage that make the destination unforgettable."
			links={aboutChildren}
			image="/Home/ran1.jpg"
		/>
	);
}
