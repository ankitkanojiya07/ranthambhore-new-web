import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/about/tigers")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Tigers of Ranthambore | Bengal Tiger Sightings, Famous Tigers & Tiger Count",
			},
			{
				name: "description",
				content:
					"Ranthambore is home to 60+ Bengal tigers. Meet the park's famous tigers, learn about their territories, and discover why this is India's best place for tiger sightings.",
			},
		],
	}),
	component: TigersPage,
});

interface PageStat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

interface FamousTiger {
	id: string;
	name: string;
	status: "legend" | "dominant" | "rising" | "notable";
	statusLabel: string;
	zones?: string;
	note: string;
	featured?: boolean;
	highlighted?: boolean;
}

interface ZoneCard {
	zone: string;
	landmark: string;
	note: string;
}

const PAGE_STATS: PageStat[] = [
	{ value: "60", unit: "+", label: "Bengal Tigers", index: "01" },
	{ value: "Top", unit: "", label: "Sighting Density in India", index: "02" },
	{ value: "3", unit: "", label: "Prime Zones (2, 3, 4)", index: "03" },
	{ value: "5", unit: "", label: "Famous Individuals", index: "04" },
];

const TRAIT_CHIPS = [
	"Daylight Activity",
	"Vehicle Tolerance",
	"Open Hunting",
] as const;

const FAMOUS_TIGERS: FamousTiger[] = [
	{
		id: "T-16",
		name: "Machhli",
		status: "legend",
		statusLabel: "Legend · Queen of Ranthambore",
		note: "The legendary 'Queen of Ranthambore' and the most photographed tiger in the world. She lived to 19 years and became a global symbol of tiger conservation.",
		featured: true,
	},
	{
		id: "T-24",
		name: "Ustad",
		status: "notable",
		statusLabel: "Notable Male",
		note: "A large, striking male known for his bold personality. His story remains one of the most discussed in Indian wildlife conservation circles.",
	},
	{
		id: "T-84",
		name: "Arrowhead",
		status: "rising",
		statusLabel: "Most Sought-After",
		zones: "Zone 2",
		note: "Currently one of the park's most sought-after tigresses, known for her distinctive arrow-shaped facial markings and frequent sightings near Zone 2.",
		highlighted: true,
	},
	{
		id: "T-72",
		name: "Sultan",
		status: "dominant",
		statusLabel: "Dominant Male",
		zones: "Kachida Valley",
		note: "A dominant male with a large territory, often seen around the Kachida Valley area.",
	},
	{
		id: "T-101",
		name: "Riddhi",
		status: "rising",
		statusLabel: "Rising Tigress",
		zones: "Zones 3 & 4",
		note: "A relatively young tigress making her mark across Zones 3 and 4.",
	},
];

const ZONE_CARDS: ZoneCard[] = [
	{
		zone: "2",
		landmark: "Lake Edges & Arrowhead Territory",
		note: "Historic lake country with frequent tigress sightings along the water's edge.",
	},
	{
		zone: "3",
		landmark: "Ranthambore Fort & Mixed Terrain",
		note: "Ancient ruins, forest trails, and open clearings around the historic fort.",
	},
	{
		zone: "4",
		landmark: "Open Clearings & Riddhi's Range",
		note: "Grassland fringes and forest edges where young tigers establish territory.",
	},
];

function TigersPage() {
	return (
		<div className="bg-sand-50">
			<HeroSection />
			<StatsBanner />
			<RoyalBengalSection />
			<TigerRegistrySection />
			<PrimeZonesSection />
			<IdentificationSection />
			<RelatedSection />
			<WhyChooseSection />
		</div>
	);
}

function HeroSection() {
	return (
		<section
			className="relative flex min-h-[80dvh] items-end overflow-hidden"
			aria-label="Page hero"
		>
			<div className="absolute inset-0">
				<img
					src="/hero/1.webp"
					alt=""
					aria-hidden
					className="size-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-charcoal-900/90 via-charcoal-900/45 to-charcoal-900/20" />
			</div>

			<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28">
				<p className="font-display text-xs uppercase tracking-display text-sunset-400">
					About Ranthambore
				</p>
				<h1 className="mt-4 font-playfair text-5xl font-semibold italic text-sand-50 lg:text-7xl">
					Lords of the
					<br className="hidden lg:block" /> Lake Country
				</h1>
				<p className="mt-5 max-w-2xl font-body text-base text-sand-300 lg:text-lg">
					Over 60 Bengal tigers roam Ranthambore&apos;s forests — unusually
					tolerant of safari vehicles and frequently seen hunting, drinking, and
					playing in open daylight.
				</p>
				<div className="mt-6 inline-flex items-center gap-3 rounded-sm border border-sand-50/30 px-5 py-2.5">
					<span className="size-2 shrink-0 rotate-45 bg-sunset-500" />
					<span className="font-playfair text-sm italic text-sand-200">
						Panthera tigris tigris
					</span>
				</div>
			</div>
		</section>
	);
}

function StatsBanner() {
	return (
		<section className="bg-sand-100" aria-label="Tiger statistics">
			<div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 divide-y divide-muted-300 lg:divide-y-0 lg:divide-x">
				{PAGE_STATS.map((stat) => (
					<div
						key={stat.index}
						className="px-8 py-12 lg:py-16 flex flex-col gap-3"
					>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500/70">
							{stat.index}
						</p>
						<div className="flex items-end gap-1.5">
							<span className="font-playfair text-6xl lg:text-7xl font-semibold text-charcoal-900 whitespace-nowrap leading-none">
								{stat.value}
							</span>
							{stat.unit && (
								<span className="font-playfair text-2xl lg:text-3xl text-earth-600 pb-1.5">
									{stat.unit}
								</span>
							)}
						</div>
						<p className="font-display text-xs uppercase tracking-display text-earth-500">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

function RoyalBengalSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="The Royal Bengal Tiger"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
					<div className="w-full lg:w-[55%]">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Apex Predator
						</p>
						<div className="mt-3 flex items-center gap-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
							<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
								The Royal Bengal Tiger
							</h2>
						</div>
						<div className="mt-5 h-px w-12 bg-sunset-500/40" />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700">
							The Bengal tiger (Panthera tigris tigris) is the undisputed star
							of Ranthambore. As of the latest census, the park and its buffer
							zones support over 60 tigers, making it one of the densest tiger
							populations in India. What makes Ranthambore exceptional is not
							just the number of tigers but their behaviour — they are unusually
							tolerant of safari vehicles and are frequently seen hunting,
							drinking, and playing in open daylight, giving visitors
							experiences that few wildlife reserves can match.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							{TRAIT_CHIPS.map((trait) => (
								<span
									key={trait}
									className="inline-flex items-center gap-2 rounded-sm border border-tiger-700/40 px-4 py-2 font-display text-xs uppercase tracking-display text-tiger-700"
								>
									<span className="size-1.5 shrink-0 rotate-45 bg-tiger-600" />
									{trait}
								</span>
							))}
						</div>
					</div>

					<div className="relative w-full lg:w-[45%]">
						<div
							className="pointer-events-none absolute -right-4 top-0 bottom-0 w-3 opacity-20"
							style={{
								backgroundImage:
									"repeating-linear-gradient(-12deg, transparent, transparent 8px, #4e3020 8px, #4e3020 20px, transparent 20px, transparent 36px, #6f3f15 36px, #6f3f15 48px)",
							}}
							aria-hidden
						/>
						<div className="relative overflow-hidden rounded-sm ring-1 ring-muted-300">
							<img
								src="/gallery/14.jpg"
								alt="Bengal tiger walking through the grasslands of Ranthambore"
								className="aspect-3/4 w-full object-cover object-center"
							/>
							<div className="absolute inset-x-0 bottom-0 bg-charcoal-950/90 px-6 py-5">
								<blockquote>
									<p className="font-playfair text-base italic text-sand-200 lg:text-lg">
										&ldquo;Unusually tolerant of safari vehicles — experiences
										few reserves can match.&rdquo;
									</p>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function TigerRegistrySection() {
	const featured = FAMOUS_TIGERS.find((t) => t.featured);
	const registry = FAMOUS_TIGERS.filter((t) => !t.featured);

	return (
		<section
			className="bg-charcoal-900 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Famous Tigers of Ranthambore"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						The Registry
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-sand-50 lg:text-4xl">
						Famous Tigers of Ranthambore
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
				</div>

				{featured && <FeaturedTigerDossier tiger={featured} />}

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{registry.map((tiger) => (
						<TigerRegistryCard key={tiger.id} tiger={tiger} />
					))}
				</div>
			</div>
		</section>
	);
}

function FeaturedTigerDossier({ tiger }: { tiger: FamousTiger }) {
	return (
		<div className="relative overflow-hidden rounded-sm ring-1 ring-sunset-500/30 lg:flex">
			<div className="w-full shrink-0 lg:w-[45%] aspect-square">
				<img
					src="/tiger.png"
					alt="Machhli — the legendary Queen of Ranthambore"
					className="size-full min-h-[300px] object-cover object-center lg:min-h-[480px]"
				/>
			</div>

			<div className="relative flex flex-1 flex-col justify-center overflow-hidden bg-charcoal-950 px-8 py-12 lg:px-14 lg:py-16">
				<p
					className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 font-playfair text-[10rem] font-semibold leading-none text-sand-50/5 select-none lg:text-[14rem]"
					aria-hidden
				>
					{tiger.id}
				</p>

				<p className="relative font-display text-xs uppercase tracking-display text-sunset-500">
					{tiger.statusLabel}
				</p>
				<div className="relative mt-2 flex items-center gap-3">
					<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
					<h3 className="font-playfair text-2xl text-sand-50 lg:text-4xl">
						{tiger.name}
					</h3>
					<span className="font-display text-xs uppercase tracking-display text-charcoal-500">
						{tiger.id}
					</span>
				</div>
				<div className="relative mt-4 h-px w-12 bg-sunset-500/50" />
				<p className="relative mt-6 font-body text-base leading-relaxed text-charcoal-300">
					{tiger.note}
				</p>

				<div className="relative mt-10 flex items-end gap-1.5 opacity-30">
					<img
						src="/tiger-footstep.png"
						alt=""
						aria-hidden
						className="h-8 w-auto object-contain"
					/>
					<img
						src="/tiger-footstep.png"
						alt=""
						aria-hidden
						className="h-6 w-auto object-contain -mb-1"
					/>
					<img
						src="/tiger-footstep.png"
						alt=""
						aria-hidden
						className="h-8 w-auto object-contain"
					/>
				</div>
			</div>
		</div>
	);
}

function TigerRegistryCard({ tiger }: { tiger: FamousTiger }) {
	return (
		<div
			className={`group rounded-sm bg-sand-100 p-6 ring-1 ring-muted-300 transition-colors hover:ring-sunset-500/40 lg:p-8 ${tiger.highlighted ? "border-l-4 border-sunset-500" : ""}`}
		>
			<div className="flex items-start justify-between gap-4">
				<p className="font-playfair text-4xl font-semibold text-charcoal-900/20 leading-none">
					{tiger.id}
				</p>
				{tiger.zones && (
					<span className="shrink-0 rounded-sm bg-earth-800 px-3 py-1 font-display text-xs uppercase tracking-display text-sand-200">
						{tiger.zones}
					</span>
				)}
			</div>
			<p className="mt-4 font-display text-xs uppercase tracking-display text-sunset-500">
				{tiger.statusLabel}
			</p>
			<h3 className="mt-1 font-playfair text-2xl text-charcoal-900">
				{tiger.name}
			</h3>
			<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
				{tiger.note}
			</p>
		</div>
	);
}

function PrimeZonesSection() {
	return (
		<section
			className="bg-sand-100 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Best zones for tiger sightings"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						Sighting Zones
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Best Zones for Tiger Sightings
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
					<p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
						Zones 2, 3, and 4 — which include the main lakes and the historic
						area around Ranthambore Fort — have historically offered the highest
						probability of tiger sightings. However, tigers are wild animals and
						unpredictable — every zone has its own magic.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
					{ZONE_CARDS.map((zone) => (
						<div
							key={zone.zone}
							className="flex flex-col rounded-sm bg-sand-50 p-8 ring-1 ring-muted-300"
						>
							<p className="font-display text-xs uppercase tracking-display text-sunset-500">
								Zone
							</p>
							<p className="mt-2 font-playfair text-6xl font-semibold text-charcoal-900 leading-none">
								{zone.zone}
							</p>
							<h3 className="mt-4 font-playfair text-xl text-charcoal-900">
								{zone.landmark}
							</h3>
							<p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
								{zone.note}
							</p>
						</div>
					))}
				</div>

				<p className="mt-12 text-center font-body text-sm text-charcoal-600">
					Our{" "}
					<a
						href="/safari/zones"
						className="font-display text-xs uppercase tracking-display text-tiger-700 underline decoration-sunset-500/50 underline-offset-4 transition-colors hover:text-tiger-600"
					>
						Zone Guide
					</a>{" "}
					provides a detailed breakdown of what each zone offers.
				</p>
			</div>
		</section>
	);
}

function IdentificationSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Tiger identification guide"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						Field Guide
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Tiger Identification Guide
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
				</div>

				<div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
					<div className="w-full lg:w-1/2">
						<p className="font-body text-base leading-relaxed text-charcoal-700">
							Every tiger has a unique stripe pattern, just like human
							fingerprints. Our Tiger Identification Guide helps you identify
							individual tigers by their markings during and after your safari.
						</p>
						<a
							href="/wildlife/tiger-identification"
							className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-tiger-700 transition-colors hover:text-tiger-600"
						>
							Explore the Identification Guide
							<span aria-hidden>→</span>
						</a>
					</div>

					<div className="w-full lg:w-1/2">
						<div className="relative overflow-hidden rounded-sm bg-charcoal-900 px-8 py-12 ring-1 ring-charcoal-700">
							<div
								className="absolute inset-0 opacity-30"
								style={{
									backgroundImage:
										"repeating-linear-gradient(168deg, transparent 0px, transparent 18px, rgba(250,245,237,0.12) 18px, rgba(250,245,237,0.12) 28px, transparent 28px, transparent 52px, rgba(250,245,237,0.06) 52px, rgba(250,245,237,0.06) 62px)",
								}}
								aria-hidden
							/>
							<div className="relative">
								<p className="font-display text-xs uppercase tracking-display text-sunset-500">
									Stripe Specimen
								</p>
								<h3 className="mt-3 font-playfair text-2xl text-sand-50 lg:text-3xl">
									Every Pattern Is Unique
								</h3>
								<p className="mt-4 font-body text-sm leading-relaxed text-charcoal-300">
									No two tigers share the same stripe configuration — each
									individual can be recognised by the shape, spacing, and angle
									of markings on the face and flanks.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function RelatedSection() {
	return (
		<section
			className="bg-sand-50 px-6 pb-8 lg:px-8"
			aria-label="Related pages"
		>
			<div className="mx-auto max-w-7xl">
				<p className="mb-6 text-center font-display text-xs uppercase tracking-display text-charcoal-400">
					Continue Exploring
				</p>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<Link
						to="/about/flora-and-fauna"
						className="group flex flex-col rounded-sm bg-cream-100 p-6 ring-1 ring-muted-300 transition-colors hover:ring-sunset-500/40"
					>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							About Ranthambore
						</p>
						<h3 className="mt-2 font-playfair text-xl text-charcoal-900 group-hover:text-tiger-700">
							Flora &amp; Fauna
						</h3>
						<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
							Explore the full wildlife ecosystem — predators, prey, reptiles,
							and over 300 bird species.
						</p>
					</Link>
					<Link
						to="/about/national-park"
						className="group flex flex-col rounded-sm bg-cream-100 p-6 ring-1 ring-muted-300 transition-colors hover:ring-sunset-500/40"
					>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							About Ranthambore
						</p>
						<h3 className="mt-2 font-playfair text-xl text-charcoal-900 group-hover:text-tiger-700">
							Park Overview &amp; Geography
						</h3>
						<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
							Explore the geography, sacred lakes, and forest composition of
							Ranthambore Tiger Reserve.
						</p>
					</Link>
					<Link
						to="/about/history"
						className="group flex flex-col rounded-sm bg-cream-100 p-6 ring-1 ring-muted-300 transition-colors hover:ring-sunset-500/40"
					>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							About Ranthambore
						</p>
						<h3 className="mt-2 font-playfair text-xl text-charcoal-900 group-hover:text-tiger-700">
							History &amp; Conservation
						</h3>
						<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
							From royal hunting grounds to Project Tiger — and the legend of
							Machhli.
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
