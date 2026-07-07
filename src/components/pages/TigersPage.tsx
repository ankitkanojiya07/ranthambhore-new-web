import { Link } from "@tanstack/react-router";
import { TIGERS, type TigerProfile } from "#/lib/tigers";
import { Image } from "#/util/Image";

function TigerCard({ tiger }: { tiger: TigerProfile }) {
	return (
		<Link
			to="/about/tigers/$slug"
			params={{ slug: tiger.slug }}
			className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.08)] ring-1 ring-sand-300/60 transition-shadow hover:shadow-[0_8px_32px_rgba(45,35,25,0.12)]"
		>
			<div className="aspect-4/3 overflow-hidden">
				<Image
					src={tiger.image}
					alt={tiger.imageAlt}
					width={640}
					height={480}
					className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="space-y-2 px-5 py-5">
				<p className="font-display text-[0.625rem] font-medium uppercase tracking-display text-forest-600">
					{tiger.meta.code}
				</p>
				<h3 className="font-playfair text-xl font-semibold text-charcoal-900 transition-colors group-hover:text-forest-700">
					{tiger.name}
				</h3>
				<p className="font-body text-sm italic text-earth-600">
					{tiger.tagline}
				</p>
				<p className="line-clamp-2 font-body text-sm leading-relaxed text-charcoal-600">
					{tiger.excerpt}
				</p>
			</div>
		</Link>
	);
}

export function TigersPage() {
	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
					<header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							Famous Tigers of Ranthambore
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							Meet the legendary individuals whose stories have shaped
							Ranthambore&apos;s tiger legacy. Click a profile to read their
							full story.
						</p>
					</header>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{TIGERS.map((tiger) => (
							<TigerCard key={tiger.slug} tiger={tiger} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
