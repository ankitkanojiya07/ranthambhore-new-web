import { Mail, MapPin, PawPrint } from "lucide-react";
import { Image } from "#/util/Image";

const QUICK_LINKS = [
	"Home",
	"About",
	"Wildlife",
	"Park Zones",
	"Safari Information",
	"Book Safari",
	"Photo Gallery",
];

const RESOURCES = [
	"Ranthambore Regency",
	"Vanaashrya Resort",
	"Ranthambore Aangan",
];

export function Footer() {
	return (
		<footer className="relative overflow-hidden bg-sand-100">
			{/* Tree logo watermark */}
			<Image
				src="/logo.png"
				alt=""
				aria-hidden="true"
				layout="fullWidth"
				className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-[0.04]"
				fallback="vercel"
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
					{/* About */}
					<div>
						<h3 className="flex items-center gap-2 border-b border-earth-200 pb-2 font-display text-lg text-charcoal-800">
							<PawPrint className="size-5" strokeWidth={1.5} />
							About Ranthambore
						</h3>
						<div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-charcoal-600">
							<p>
								Ranthambore National Park is a premier tiger reserve in
								Rajasthan, India. With a rich blend of history, wildlife, and
								natural beauty, it offers an unforgettable safari experience.
							</p>
							<p>
								Once the private hunting grounds of Jaipur's Maharajas,
								Ranthambore now thrives as a conservation success story under
								Project Tiger.
							</p>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="border-b border-earth-200 pb-2 font-display text-lg text-charcoal-800">
							Quick Links
						</h3>
						<ul className="mt-4 space-y-2">
							{QUICK_LINKS.map((link) => (
								<li
									key={link}
									className="font-body text-sm text-charcoal-600 transition-colors hover:text-forest-500"
								>
									<span className="mr-2 text-earth-400">•</span>
									{link}
								</li>
							))}
						</ul>
					</div>

					{/* Supported Resources */}
					<div>
						<h3 className="border-b border-earth-200 pb-2 font-display text-lg text-charcoal-800">
							Supported Resources
						</h3>
						<ul className="mt-4 space-y-2">
							{RESOURCES.map((resource) => (
								<li
									key={resource}
									className="font-body text-sm text-charcoal-600 transition-colors hover:text-forest-500"
								>
									<span className="mr-2 text-earth-400">•</span>
									{resource}
								</li>
							))}
						</ul>
					</div>

					{/* Get In Touch */}
					<div>
						<h3 className="border-b border-earth-200 pb-2 font-display text-lg text-charcoal-800">
							Get In Touch
						</h3>
						<div className="mt-4 space-y-4">
							<div className="flex items-start gap-3">
								<MapPin
									className="mt-0.5 size-5 shrink-0 text-charcoal-700"
									strokeWidth={1.5}
								/>
								<p className="font-body text-sm leading-relaxed text-charcoal-600">
									Sawai Madhopur, Rajasthan
									<br />
									India
								</p>
							</div>
							<div className="flex items-center gap-3">
								<Mail
									className="size-5 shrink-0 text-charcoal-700"
									strokeWidth={1.5}
								/>
								<a
									href="mailto:ranthambhoreregency@gmail.com"
									className="font-body text-sm text-charcoal-600 transition-colors hover:text-forest-500"
								>
									ranthambhoreregency@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright bar */}
				<div className="mt-12 border-t border-earth-200 pt-6 text-center">
					<p className="font-body text-xs text-charcoal-500">
						© {new Date().getFullYear()} Ranthambhore Wildlife Hotel. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
