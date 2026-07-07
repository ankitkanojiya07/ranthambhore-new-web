import type { LucideIcon } from "lucide-react";
import { Leaf, PawPrint } from "lucide-react";
import {
	FAUNA_HIGHLIGHTS,
	FAUNA_SPECIES,
	FLORA_HIGHLIGHTS,
	FLORA_SPECIES,
	type SpeciesCard,
	WILDLIFE_GALLERY,
} from "#/lib/flora-and-fauna";
import { Image } from "#/util/Image";

function HighlightBlock({
	icon: Icon,
	title,
	items,
}: {
	icon: LucideIcon;
	title: string;
	items: readonly string[];
}) {
	return (
		<article>
			<h3 className="flex items-center gap-3 font-display text-sm font-medium uppercase tracking-display text-charcoal-900">
				<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-earth-100 text-earth-600">
					<Icon className="size-4" strokeWidth={1.5} aria-hidden />
				</span>
				{title}
			</h3>
			<ul className="mt-5 space-y-3.5 pl-12">
				{items.map((item) => (
					<li
						key={item}
						className="relative font-body text-[0.9375rem] leading-[1.75] text-charcoal-600 before:absolute before:-left-4 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-earth-400"
					>
						{item}
					</li>
				))}
			</ul>
		</article>
	);
}

function SpeciesGuideSection({
	icon: Icon,
	title,
	species,
	borderTop = true,
}: {
	icon: LucideIcon;
	title: string;
	species: SpeciesCard[];
	borderTop?: boolean;
}) {
	return (
		<section className={borderTop ? "border-t border-sand-300/80" : undefined}>
			<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
				<header className="mb-10 lg:mb-12">
					<h2 className="flex items-center gap-3 font-display text-lg font-medium uppercase tracking-display text-charcoal-900 lg:text-xl">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-earth-100 text-earth-600">
							<Icon className="size-4.5" strokeWidth={1.5} aria-hidden />
						</span>
						{title}
					</h2>
					<div className="mt-5 h-px w-full bg-earth-300/70" aria-hidden />
				</header>

				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
					{species.map((item) => (
						<SpeciesCardItem key={item.name} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}

function SpeciesCardItem({
	name,
	scientificName,
	description,
	image,
	imageAlt,
}: SpeciesCard) {
	return (
		<article className="overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.08)] ring-1 ring-sand-300/60">
			<div className="aspect-4/3 overflow-hidden">
				<Image
					src={image}
					alt={imageAlt}
					width={640}
					height={480}
					className="size-full object-cover"
				/>
			</div>
			<div className="space-y-2 px-5 py-5">
				<h3 className="font-playfair text-xl font-semibold text-charcoal-900">
					{name}
				</h3>
				<p className="font-body text-sm italic text-earth-600">
					{scientificName}
				</p>
				<p className="line-clamp-3 font-body text-sm leading-relaxed text-charcoal-600">
					{description}
				</p>
			</div>
		</article>
	);
}

export function FloraAndFaunaPage() {
	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 lg:pb-20">
					<header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							Wilderness of Ranthambore
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							Discover the extraordinary biodiversity that makes Ranthambore
							National Park a crown jewel of India&apos;s natural heritage
						</p>
					</header>

					<div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14 xl:gap-16">
						<div className="space-y-12">
							<HighlightBlock
								icon={Leaf}
								title="Flora Highlights"
								items={FLORA_HIGHLIGHTS}
							/>
							<HighlightBlock
								icon={PawPrint}
								title="Fauna Diversity"
								items={FAUNA_HIGHLIGHTS}
							/>
						</div>

						<div className="overflow-hidden rounded-2xl">
							{WILDLIFE_GALLERY.map((photo) => (
								<Image
									key={photo.src}
									src={photo.src}
									alt={photo.alt}
									width={960}
									height={720}
									className="aspect-4/3 size-full object-cover"
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			<SpeciesGuideSection
				icon={Leaf}
				title="Flora Species Guide"
				species={FLORA_SPECIES}
				borderTop={false}
			/>

			<SpeciesGuideSection
				icon={PawPrint}
				title="Fauna Species Guide"
				species={FAUNA_SPECIES}
			/>
		</div>
	);
}
