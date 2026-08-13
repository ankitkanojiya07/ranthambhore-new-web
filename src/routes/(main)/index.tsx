import { createFileRoute } from "@tanstack/react-router";
import { type ComponentType, useEffect, useState } from "react";
import { HeroSection } from "#/components/home/HeroSection";

export const Route = createFileRoute("/(main)/")({
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore Safari & Tiger Reserve | Book Jeep Safari | Ranthambhor.com",
			},
			{
				name: "description",
				content:
					"Plan your Ranthambore trip with expert help. Book jeep & canter safaris, find top hotels, and explore India's most famous tiger reserve in Rajasthan.",
			},
			{
				name: "google-site-verification",
				content: "yujpTPb26klOVmIbEr7mqoxwa7U72ZdhWwiGpNIvvs8",
			},
		],
		links: [
			{
				rel: "preload",
				href: "/hero/8-640.webp",
				as: "image",
				type: "image/webp",
				fetchpriority: "high",
			},
		],
	}),
	component: Home,
});

function Home() {
	const [BelowFold, setBelowFold] = useState<ComponentType | null>(null);

	useEffect(() => {
		void import("#/components/home/HomeBelowFold").then((mod) => {
			setBelowFold(() => mod.HomeBelowFold);
		});
	}, []);

	return (
		<div>
			<HeroSection />
			{BelowFold ? <BelowFold /> : <div className="min-h-48 bg-sand-50" />}
		</div>
	);
}
