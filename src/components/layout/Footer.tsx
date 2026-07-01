import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { FacebookIcon } from "#/icons/facebook.icon";
import { InstagramIcon } from "#/icons/instagram.icon";
import { Image } from "#/util/Image";
import { Button } from "../ui/button";

const QUICK_LINKS: { label: string; href: string }[] = [
	{ label: "Home", href: "/" },
	{ label: "About Ranthambore", href: "/about" },
	{ label: "Safari", href: "/safari" },
	{ label: "Plan Your Visit", href: "/plan" },
	{ label: "Safari Highlights", href: "/highlights/safari-insights" },
	{ label: "Stay", href: "/stay/hotels" },
	{ label: "Nearby Places", href: "/nearby-places" },
	{ label: "Contact", href: "/contact" },
];

const RESOURCES: { label: string; href: string }[] = [
	{ label: "Ranthambore Regency", href: "https://ranthamboreregency.com/" },
	{ label: "Vanaashrya Resort", href: "https://www.vanaashrya.com/" },
	{ label: "Ranthambore Aangan", href: "https://ranthamboreaangan.com/" },
];

function openExternalLink(url: string) {
	window.open(url, "_blank", "noopener,noreferrer");
}

export function Footer() {
	return (
		<footer className="relative overflow-hidden border-t border-muted-300 bg-sand-100">
			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				{/* ── Top Branding Zone ── */}
				<div className="relative flex items-end justify-center pb-10 pt-16">
					<div className="flex flex-col items-center gap-3 text-center">
						<Image
							src="/logo.png"
							alt="Ranthambhore logo"
							width={323}
							height={186}
							className="h-16 w-auto object-contain opacity-90 brightness-0"
						/>
						<h2 className="font-display text-4xl tracking-display text-charcoal-900">
							RANTHAMBHORE
						</h2>
						<p className="font-body font-medium text-sm uppercase tracking-display text-charcoal-600">
							Wildlife &amp; Safari
						</p>
					</div>
				</div>

				{/* ── Middle 3-Column Section ── */}
				<div className="grid grid-cols-1 gap-10 border-t border-muted-300 pt-10 md:grid-cols-3">
					{/* Column 1 — Quick Links */}
					<div>
						<h3 className="mb-2 font-display uppercase tracking-display text-charcoal-900">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{QUICK_LINKS.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="font-body font-medium text-sm text-charcoal-700 transition-colors hover:text-earth-700"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Column 2 — Explore */}
					<div>
						<h3 className="mb-2 font-display uppercase tracking-display text-charcoal-900">
							Explore
						</h3>
						<ul className="mb-6 space-y-3">
							{RESOURCES.map((resource) => (
								<li key={resource.label}>
									<a
										href={resource.href}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(event) => {
											event.preventDefault();
											openExternalLink(resource.href);
										}}
										className="font-body font-medium text-sm text-charcoal-700 transition-colors hover:text-earth-700"
									>
										{resource.label}
									</a>
								</li>
							))}
						</ul>
						<div className="space-y-3 border-t border-muted-300 pt-5">
							<div className="flex items-start gap-3">
								<MapPin
									className="mt-0.5 size-4 shrink-0 text-earth-600"
									strokeWidth={1.5}
								/>
								<p className="font-body font-medium text-sm text-charcoal-700">
									Sawai Madhopur, Rajasthan
									<br />
									India
								</p>
							</div>
							<div className="flex items-center gap-3">
								<Mail
									className="size-4 shrink-0 text-earth-600"
									strokeWidth={1.5}
								/>
								<a
									href="mailto:ranthambhoreregency@gmail.com"
									className="font-body font-medium text-sm text-charcoal-700 transition-colors hover:text-earth-700"
								>
									ranthambhoreregency@gmail.com
								</a>
							</div>
						</div>
					</div>

					{/* Column 3 — Sighting Updates */}
					<div>
						<h3 className="mb-2 font-display uppercase tracking-display text-charcoal-900">
							+ Add Your Sighting Update
						</h3>
						<p className="mb-5 font-body font-medium text-sm text-charcoal-700">
							Share your latest tiger sighting or wildlife update from the park
							and help fellow visitors plan their safari.
						</p>
						<Button
							variant="secondary"
							className="h-auto w-full px-3 py-2 text-base font-medium"
							render={
								<Link
									to="/daily-updates/new"
									className="no-underline"
									aria-label="Add your sighting update"
								/>
							}
						>
							+ Add Your Sighting Update
						</Button>

						<div className="mt-8 border-t border-muted-300 pt-8">
							<h3 className="mb-2 font-display uppercase tracking-display text-charcoal-900">
								Ranthambhore Highlights
							</h3>
							<p className="mb-5 font-body font-medium text-sm text-charcoal-700">
								Read the latest park news, conservation updates, and stories
								from Ranthambhore.
							</p>
							<Button
								variant="outline"
								className="h-auto w-full px-3 py-2 text-base font-medium"
								render={
									<Link
										to="/highlights/ranthambhore-insights"
										className="no-underline"
										aria-label="View Ranthambhore highlights"
									/>
								}
							>
								Ranthambhore Highlights
							</Button>
						</div>
					</div>
				</div>

				{/* ── Bottom Bar ── */}
				<div className="mt-10 flex flex-col items-center gap-4 border-t border-muted-300 py-6 md:flex-row md:justify-between">
					{/* Copyright */}
					<p className="font-body font-medium text-sm text-charcoal-600">
						&copy; {new Date().getFullYear()} Ranthambhore Wildlife Hotel. All
						rights reserved.
					</p>

					{/* Social icons */}
					<div className="flex items-center gap-3">
						<a
							href="https://www.instagram.com/ranthambhoreregencyhotel/"
							aria-label="Follow us on Instagram"
							target="_blank"
							rel="noopener noreferrer"
							className="text-charcoal-700 transition-colors hover:text-earth-700"
						>
							<InstagramIcon className="size-4" />
						</a>
						<a
							href="https://www.facebook.com/ranthambhoreregency"
							aria-label="Follow us on Facebook"
							target="_blank"
							rel="noopener noreferrer"
							className="text-charcoal-700 transition-colors hover:text-earth-700"
						>
							<FacebookIcon className="size-4" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
