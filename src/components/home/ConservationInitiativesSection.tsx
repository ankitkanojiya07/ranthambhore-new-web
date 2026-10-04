import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HospitalityPurposeWheel } from "#/components/pages/HospitalityPurposeWheel";
import { Button } from "#/components/ui/button";
import { CONSERVATION_CONTENT } from "#/lib/conservation";

export function ConservationInitiativesSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-20 lg:px-8 lg:py-28"
			aria-label="Conservation initiatives"
		>
			<div className="mx-auto max-w-7xl">
				<header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
					<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						{CONSERVATION_CONTENT.title}
					</h2>
					<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
						{CONSERVATION_CONTENT.intro}
					</p>
				</header>

				<HospitalityPurposeWheel />

				<div className="mt-10 flex justify-center lg:mt-12">
					<Button
						variant="secondary"
						size="lg"
						render={<Link to="/about/conservation" />}
					>
						Learn More
						<ArrowRight className="size-4" aria-hidden />
					</Button>
				</div>
			</div>
		</section>
	);
}
