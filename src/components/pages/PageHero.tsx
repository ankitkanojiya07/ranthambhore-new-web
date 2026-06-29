import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";
import { TrustBar } from "./TrustBar";

interface PageHeroProps {
	eyebrow: string;
	title: React.ReactNode;
	subtitle?: string;
	image?: string;
	badge?: string;
	className?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	trustBadges?: string[];
	tall?: boolean;
	showTrustBar?: boolean;
}

export function PageHero({
	eyebrow,
	title,
	subtitle,
	image = "/tiger.jpg",
	badge,
	className,
	primaryCta,
	secondaryCta,
	trustBadges,
	tall = true,
	showTrustBar = false,
}: PageHeroProps) {
	return (
		<>
			<section
				className={cn(
					"relative flex items-end overflow-hidden",
					tall
						? "min-h-[72dvh] lg:min-h-[80dvh]"
						: "min-h-[52dvh] lg:min-h-[58dvh]",
					className,
				)}
				aria-label="Page hero"
			>
				<div className="absolute inset-0">
					<Image
						src={image}
						alt=""
						aria-hidden
						layout="fullWidth"
						className="size-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-charcoal-900/92 via-charcoal-900/50 to-charcoal-900/25" />
				</div>

				<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
					<p className="font-display text-xs uppercase tracking-display text-sunset-400">
						{badge ?? eyebrow}
					</p>
					<h1 className="mt-4 font-playfair text-4xl font-semibold italic text-sand-50 sm:text-5xl lg:text-7xl">
						{title}
					</h1>
					{subtitle && (
						<p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-sand-200/90 lg:text-lg">
							{subtitle}
						</p>
					)}
					{(primaryCta || secondaryCta) && (
						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							{primaryCta && (
								<Button
									render={
										<Link to={primaryCta.href} className="no-underline" />
									}
									size="lg"
								>
									{primaryCta.label}
								</Button>
							)}
							{secondaryCta && (
								<Button
									render={
										<Link to={secondaryCta.href} className="no-underline" />
									}
									variant="outline"
									size="lg"
									className="border-sand-50/60 text-sand-50 hover:bg-sand-50 hover:text-charcoal-900"
								>
									{secondaryCta.label}
								</Button>
							)}
						</div>
					)}
				</div>
			</section>

			{showTrustBar && <TrustBar badges={trustBadges} />}
		</>
	);
}
