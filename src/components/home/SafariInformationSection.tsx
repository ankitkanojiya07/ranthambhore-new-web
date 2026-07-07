import { Link } from "@tanstack/react-router";
import { Camera, Users } from "lucide-react";
import { Image } from "#/util/Image";

const SAFARI_TYPES = [
	{
		id: "gypsy",
		href: "/safari/jeep",
		hash: "gypsy",
		image: {
			src: "/Home/canter.webp",
			alt: "Photographer on a Gypsy safari in Ranthambore",
			width: 2048,
			height: 1365,
		},
		icon: Camera,
		title: "Gypsy Safari (6-Seater)",
		description: "More maneuverable, ideal for photography enthusiasts",
	},
	{
		id: "canter",
		href: "/safari/jeep",
		hash: "canter",
		image: {
			src: "/Home/gypsy.webp",
			alt: "Canter safari vehicle with passengers in Ranthambore",
			width: 2048,
			height: 1365,
		},
		icon: Users,
		title: "Canter Safari (20-Seater)",
		description: "Cost-effective option, perfect for larger groups",
	},
] as const;

export function SafariInformationSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-16 lg:px-8 lg:py-20"
			aria-label="Safari information"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-playfair text-3xl text-charcoal-800 lg:text-4xl">
						Safari Information
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-muted-300" />

					<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600">
						Embark on open Gypsy (6-seater) or Canter (20-seater) safaris
						through the wild terrains of Ranthambore. Each safari is guided by
						experienced naturalists who share fascinating insights about the
						park&apos;s ecosystem.
					</p>

					<p className="mt-4 font-body text-sm text-sunset-600">
						Click on any safari type below to compare Gypsy and Canter options.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
					{SAFARI_TYPES.map((safari) => {
						const Icon = safari.icon;

						return (
							<Link
								key={safari.id}
								to={safari.href}
								hash={safari.hash}
								className="group relative aspect-5/3 overflow-hidden rounded-2xl shadow-md ring-1 ring-muted-300/60 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
							>
								<Image
									src={safari.image.src}
									alt={safari.image.alt}
									width={safari.image.width}
									height={safari.image.height}
									className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-charcoal-900/85 via-charcoal-900/25 to-transparent" />

								<div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
									<Icon
										className="size-5 text-sand-50"
										strokeWidth={1.5}
										aria-hidden
									/>
									<h3 className="mt-3 text-xl text-sand-50 lg:text-2xl">
										{safari.title}
									</h3>
									<p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-sand-200">
										{safari.description}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
