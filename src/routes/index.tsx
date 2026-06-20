import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "#/components/home/HeroSection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="bg-sand-50">
			<HeroSection />

			{/* Section divider */}
			<div className="mx-auto max-w-5xl border-t border-earth-200" />

			{/* Content section */}
			<section className="px-8 py-16">
				<p className="text-center font-display text-xs uppercase tracking-display text-earth-400">
					Our History, Mission, Vision and Passion
				</p>
				<h2 className="mt-2 text-center text-3xl text-charcoal-800">
					Choose your adventures tour
					<br />
					type with us
				</h2>
				<div className="prose mx-auto mt-8 max-w-3xl">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis.
					</p>
				</div>
			</section>
		</div>
	);
}
