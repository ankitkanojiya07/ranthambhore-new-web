import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { NavItem } from "#/lib/navigation";
import { getPageDescription } from "#/lib/page-descriptions";
import { getPageImage } from "#/lib/page-images";
import { IntroSection } from "./IntroSection";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { WhyChooseSection } from "./WhyChooseSection";

interface SectionLandingProps {
	eyebrow: string;
	title: React.ReactNode;
	subtitle: string;
	intro: string;
	links: NavItem[];
	image?: string;
	showWhyChoose?: boolean;
}

export function SectionLanding({
	eyebrow,
	title,
	subtitle,
	intro,
	links,
	image,
	showWhyChoose = true,
}: SectionLandingProps) {
	return (
		<div className="bg-sand-50">
			<PageHero
				eyebrow={eyebrow}
				title={title}
				subtitle={subtitle}
				image={image}
				primaryCta={{
					label: "Explore Guides",
					href: links[0]?.href ?? "/safari",
				}}
				secondaryCta={{ label: "Book a Safari", href: "/safari/book" }}
			/>

			<IntroSection
				eyebrow="Discover"
				title="Your Complete Ranthambore Resource"
			>
				{intro}
			</IntroSection>

			<section
				className="px-6 py-20 lg:px-8 lg:py-28"
				aria-label="Explore topics"
			>
				<div className="mx-auto max-w-7xl">
					<div className="mb-14">
						<SectionHeading
							eyebrow="Explore"
							title="Guides & Resources"
							centered={false}
						/>
						<p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
							Handpicked guides to help you plan every aspect of your
							Ranthambore adventure — from safari zones to where to stay.
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{links.map((child, index) => (
							<Link
								key={child.href}
								to={child.href}
								className="group flex flex-col overflow-hidden rounded-sm bg-cream-100 ring-1 ring-muted-300 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-sunset-500/40"
							>
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={getPageImage(index + 2)}
										alt=""
										layout="fullWidth"
										className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-charcoal-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
								</div>
								<div className="flex flex-1 flex-col px-5 py-5">
									<h3 className="font-playfair text-xl text-charcoal-900 group-hover:text-earth-700">
										{child.label}
									</h3>
									<p className="mt-2 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
										{getPageDescription(child.href)}
									</p>
									<span className="mt-4 inline-flex items-center gap-1.5 font-display text-[10px] uppercase tracking-display text-sunset-500">
										Read Guide
										<ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
									</span>
								</div>
							</Link>
						))}
					</div>

					<div className="mt-12 text-center">
						<Link
							to="/safari/book"
							className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-tiger-700 transition-colors hover:text-sunset-600"
						>
							Ready to book? Start here
							<ArrowUpRight className="size-4" />
						</Link>
					</div>
				</div>
			</section>

			{showWhyChoose && <WhyChooseSection />}
		</div>
	);
}
