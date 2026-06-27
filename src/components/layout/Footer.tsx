import { Mail, MapPin } from "lucide-react";
import { FacebookIcon } from "#/icons/facebook.icon";
import { InstagramIcon } from "#/icons/instagram.icon";
import { Image } from "#/util/Image";
import { Button } from "../ui/button";

const QUICK_LINKS: { label: string; href: string }[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Wildlife", href: "/wildlife" },
	{ label: "Park Zones", href: "/park-zones" },
	{ label: "Safari Information", href: "/safari" },
	{ label: "Book Safari", href: "/book" },
	{ label: "Photo Gallery", href: "/gallery" },
];

const RESOURCES: { label: string; href: string }[] = [
	{ label: "Ranthambore Regency", href: "/ranthambore-regency" },
	{ label: "Vanaashrya Resort", href: "/vanaashrya-resort" },
	{ label: "Ranthambore Aangan", href: "/ranthambore-aangan" },
];

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
							width={594}
							height={420}
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

					{/* Column 3 — Newsletter */}
					<div>
						<h3 className="mb-2 font-display uppercase tracking-display text-charcoal-900">
							Sign Up For Our Newsletter
						</h3>
						<p className="mb-5 font-body font-medium text-sm text-charcoal-700">
							Receive safari updates, wildlife stories, and travel inspiration
							directly in your inbox.
						</p>

						{/* Name inputs */}
						<div className="mb-4 grid grid-cols-2 gap-4">
							<div>
								<input
									type="text"
									placeholder="Your Name"
									className="w-full border-b border-muted-300 bg-transparent pb-2 font-body font-medium text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:border-sunset-500 focus:outline-none"
								/>
							</div>
							<div>
								<input
									type="email"
									placeholder="Your Email"
									className="w-full border-b border-muted-300 bg-transparent pb-2 font-body font-medium text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:border-sunset-500 focus:outline-none"
								/>
							</div>
						</div>

						{/* Checkbox */}
						<label className="mb-5 flex cursor-pointer items-start gap-3">
							<input
								type="checkbox"
								className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-sunset-500"
							/>
							<span className="font-body font-medium text-sm text-charcoal-700">
								By signing up for our mailing list, you agree to our{" "}
								<a
									href="/privacy-policy"
									className="underline transition-colors hover:text-earth-700"
								>
									privacy policy
								</a>
								.
							</span>
						</label>

						{/* Sign up button */}
						<Button
							variant="default"
							className="w-full h-auto px-3 py-2 text-base font-medium"
						>
							Sign Up
						</Button>
					</div>
				</div>

				{/* ── Bottom Bar ── */}
				<div className="mt-10 flex flex-col items-center gap-4 border-t border-muted-300 py-6 md:flex-row md:justify-between">
					{/* Copyright */}
					<p className="font-body font-medium text-sm text-charcoal-600">
						&copy; {new Date().getFullYear()} Ranthambhore Wildlife Hotel. All
						rights reserved.
					</p>

					{/* Legal links */}
					<div className="flex items-center gap-6">
						<a
							href="/terms"
							className="font-body font-medium text-sm text-charcoal-700 transition-colors hover:text-earth-700"
						>
							&rsaquo; Terms &amp; Conditions
						</a>
						<a
							href="/privacy-policy"
							className="font-body font-medium text-sm text-charcoal-700 transition-colors hover:text-earth-700"
						>
							Privacy Policy
						</a>
					</div>

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
							href="https://www.facebook.com/"
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
