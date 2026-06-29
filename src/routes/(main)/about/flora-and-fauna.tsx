import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/about/flora-and-fauna")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Flora & Fauna of Ranthambore National Park | Complete Wildlife Guide",
			},
			{
				name: "description",
				content:
					"Explore the diverse flora and fauna of Ranthambore — from Bengal tigers and leopards to sloth bears, crocodiles, and over 300 species of birds in their natural habitat.",
			},
		],
	}),
	component: FloraAndFaunaPage,
});

interface PageStat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

interface FloraSpecies {
	name: string;
	localName?: string;
	note: string;
	featured?: boolean;
}

interface SpeciesCard {
	name: string;
	role?: string;
	note: string;
	featured?: boolean;
}

interface ReptileCard {
	name: string;
	note: string;
	index: string;
	featured?: boolean;
}

interface BirdCard {
	name: string;
	role?: string;
	note: string;
	featured?: boolean;
	spanTwo?: boolean;
}

interface KingdomLink {
	id: string;
	label: string;
}

const PAGE_STATS: PageStat[] = [
	{ value: "300", unit: "+", label: "Bird Species", index: "01" },
	{ value: "40", unit: "+", label: "Mammal Species", index: "02" },
	{ value: "80", unit: "%", label: "Dhok Forest Cover", index: "03" },
	{ value: "6", unit: "", label: "Predator Species", index: "04" },
];

const KINGDOM_LINKS: KingdomLink[] = [
	{ id: "flora", label: "Flora" },
	{ id: "mammals", label: "Mammals" },
	{ id: "reptiles", label: "Reptiles" },
	{ id: "birdlife", label: "Birdlife" },
];

const FLORA_SPECIES: FloraSpecies[] = [
	{
		name: "Dhok",
		localName: "Anogeissus pendula",
		note: "Omnipresent — broad canopy for summer shade, sheds leaves by February to open visibility for tiger tracking.",
		featured: true,
	},
	{
		name: "Indian Gooseberry",
		localName: "Amla",
		note: "A prominent understory species found throughout the dry deciduous forest.",
	},
	{
		name: "Flame of the Forest",
		localName: "Palash",
		note: "Bursts into vivid orange-red bloom, marking the arrival of spring in the reserve.",
	},
	{
		name: "Tendu",
		note: "Hardy deciduous tree whose leaves are woven into the local economy.",
	},
	{
		name: "Kardhai",
		note: "Drought-resistant species adapted to the arid Rajasthan climate.",
	},
];

const PREDATORS: SpeciesCard[] = [
	{
		name: "Leopard",
		role: "Stealth Predator",
		note: "Stalks rocky escarpments, often unseen despite their numbers.",
	},
	{
		name: "Sloth Bear",
		role: "Dawn & Dusk",
		note: "Regularly spotted shuffling through the forest in their distinctive rolling gait.",
	},
	{
		name: "Striped Hyena",
		role: "Scavenger",
		note: "One of the park's lesser-seen but vital predators.",
	},
];

const HERBIVORES: SpeciesCard[] = [
	{
		name: "Sambar Deer",
		note: "The tiger's preferred prey — found in large numbers across the reserve.",
	},
	{
		name: "Chital",
		note: "Spotted deer grazing in open clearings and forest edges.",
	},
	{
		name: "Nilgai",
		note: "India's largest antelope, common on the park's grassland fringes.",
	},
	{
		name: "Wild Boar",
		note: "Robust populations rooting through undergrowth year-round.",
	},
	{
		name: "Chinkara",
		note: "Indian gazelle adapted to the park's open savannah zones.",
	},
];

const OTHER_MAMMALS: SpeciesCard[] = [
	{
		name: "Jackal",
		role: "Predator",
		note: "Opportunistic hunter and scavenger across all zones.",
	},
	{
		name: "Jungle Cat",
		role: "Predator",
		note: "Elusive small cat patrolling grassland and scrub.",
	},
	{
		name: "Langur",
		role: "Canopy Sentinel",
		note: "Shaggy-coated monkeys ever-present in the canopy.",
	},
	{
		name: "Rhesus Macaque",
		role: "Canopy Sentinel",
		note: "Natural alarm systems for tigers below.",
	},
];

const REPTILES: ReptileCard[] = [
	{
		name: "Mugger Crocodile",
		note: "Often seen basking on the banks of Padam Talab — the park's most iconic reptile.",
		index: "01",
		featured: true,
	},
	{
		name: "Indian Softshell Turtle",
		note: "Glides through the still waters of the park's lakes and rivers.",
		index: "02",
	},
	{
		name: "Monitor Lizard",
		note: "Large reptile foraging along lake shores and rocky outcrops.",
		index: "03",
	},
	{
		name: "Indian Rock Python",
		note: "Along with cobra and rat snake — adding to the park's herpetological diversity.",
		index: "04",
	},
];

const FEATURED_BIRDS: BirdCard[] = [
	{
		name: "Crested Serpent Eagle",
		role: "Iconic Raptor",
		note: "Among the park's most iconic birds, often seen soaring above the canopy.",
		featured: true,
		spanTwo: true,
	},
	{
		name: "Lake Waders",
		role: "Shore Birds",
		note: "Painted storks, woolly-necked storks, and open-billed storks wade in the shallows of the lakes.",
	},
	{
		name: "Indian Roller",
		role: "Open Clearing",
		note: "Flashes electric blue wings across open clearings — a photographer's favourite.",
	},
	{
		name: "Paradise Flycatcher",
		role: "Birder Highlight",
		note: "Elegant long-tailed beauty among the park's most sought-after sightings.",
	},
	{
		name: "Indian Pitta",
		role: "Birder Highlight",
		note: "Vividly coloured ground bird — a prize for serious birdwatchers.",
	},
	{
		name: "Grey-headed Fish Eagle",
		role: "Birder Highlight",
		note: "Majestic raptor hunting above the park's lakes and rivers.",
	},
];

function FloraAndFaunaPage() {
	return (
		<div className="bg-sand-50">
			<HeroSection />
			<StatsBanner />
			<KingdomNavigator />
			<FloraSection />
			<MammalsSection />
			<ReptilesSection />
			<BirdlifeSection />
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
					src="/gallery/6.jpg"
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
					Life in Every
					<br className="hidden lg:block" /> Layer
				</h1>
				<p className="mt-5 max-w-2xl font-body text-base text-sand-300 lg:text-lg">
					Tropical dry deciduous forest supporting Bengal tigers, robust deer
					herds, lake-dwelling crocodiles, and over 300 species of birds — a
					complete wilderness ecosystem in the heart of Rajasthan.
				</p>
			</div>
		</section>
	);
}

function StatsBanner() {
	return (
		<section className="bg-sand-100" aria-label="Wildlife statistics">
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

function KingdomNavigator() {
	return (
		<nav
			className="sticky top-0 z-20 bg-sand-50/95 backdrop-blur-sm border-b border-muted-300"
			aria-label="Kingdom navigation"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<ul className="flex items-center justify-center gap-1 overflow-x-auto py-3 lg:gap-2">
					{KINGDOM_LINKS.map((link) => (
						<li key={link.id} className="shrink-0">
							<a
								href={`#${link.id}`}
								className="block px-4 py-2 font-display text-xs uppercase tracking-display text-charcoal-600 hover:text-tiger-600 border-b-2 border-transparent hover:border-tiger-600 transition-colors"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

function FloraSection() {
	return (
		<section
			id="flora"
			className="scroll-mt-16 bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Flora"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
					<div className="w-full lg:w-[40%]">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Flora
						</p>
						<div className="mt-3 flex items-center gap-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
							<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
								The Living Forest
							</h2>
						</div>
						<div className="mt-5 h-px w-12 bg-sunset-500/40" />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700">
							Ranthambore&apos;s plant life is dominated by tropical dry
							deciduous forest. The dhok tree is omnipresent — its broad canopy
							providing shade in summer and dramatically shedding leaves by
							February, which opens up visibility for tiger tracking. Other
							prominent species include the Indian gooseberry (amla), flame of
							the forest (palash), tendu, and Kardhai.
						</p>
						<div className="mt-8 inline-flex items-center gap-3 rounded-sm border border-tiger-700/40 px-5 py-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-tiger-600" />
							<span className="font-display text-xs uppercase tracking-display text-tiger-700">
								Tropical Dry Deciduous Forest
							</span>
						</div>
					</div>

					<div className="w-full lg:flex-1">
						<p className="font-display text-xs uppercase tracking-display text-charcoal-400">
							Species Index
						</p>
						<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
							{FLORA_SPECIES.map((species) =>
								species.featured ? (
									<div
										key={species.name}
										className="sm:col-span-2 rounded-sm bg-sand-100 p-6 ring-1 ring-muted-300 border-l-4 border-tiger-700"
									>
										<p className="font-display text-xs uppercase tracking-display text-sunset-500">
											Dominant Species
										</p>
										<h3 className="mt-2 font-playfair text-2xl text-charcoal-900">
											{species.name}
										</h3>
										{species.localName && (
											<p className="mt-1 font-playfair text-sm italic text-charcoal-500">
												{species.localName}
											</p>
										)}
										<p className="mt-4 font-body text-sm leading-relaxed text-charcoal-700">
											{species.note}
										</p>
									</div>
								) : (
									<div
										key={species.name}
										className="rounded-sm bg-cream-100 p-5 ring-1 ring-muted-300"
									>
										<h3 className="font-playfair text-lg text-charcoal-900">
											{species.name}
										</h3>
										{species.localName && (
											<p className="mt-0.5 font-playfair text-xs italic text-charcoal-400">
												{species.localName}
											</p>
										)}
										<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
											{species.note}
										</p>
									</div>
								),
							)}
						</div>

						<div className="mt-4 flex items-start gap-4 rounded-sm border border-muted-300 bg-sand-100 px-5 py-4">
							<span className="mt-1 size-2 shrink-0 rotate-45 bg-golden-500" />
							<div>
								<p className="font-display text-xs uppercase tracking-display text-charcoal-500">
									Grasslands
								</p>
								<p className="mt-2 font-body text-sm leading-relaxed text-charcoal-700">
									Open areas are covered in tall savannah grasses that support
									deer and antelope populations across the reserve.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function MammalsSection() {
	return (
		<section
			id="mammals"
			className="scroll-mt-16 bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Mammals"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						Mammals
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Predators, Prey &amp; Canopy Life
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
					<p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
						Beyond the iconic Bengal tiger, Ranthambore supports a rich
						mammalian diversity — from leopards on rocky escarpments to robust
						herbivore populations and canopy-dwelling primates.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
					{/* Tiger feature */}
					<div className="lg:col-span-6 overflow-hidden rounded-sm bg-cream-100 ring-1 ring-muted-300">
						<div className="aspect-16/10 overflow-hidden">
							<img
								src="/tiger.png"
								alt="Bengal tiger in Ranthambore National Park"
								className="size-full object-cover object-center"
							/>
						</div>
						<div className="p-6 lg:p-8">
							<p className="font-display text-xs uppercase tracking-display text-sunset-500">
								Apex Predator
							</p>
							<h3 className="mt-2 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
								Bengal Tiger
							</h3>
							<p className="mt-4 font-body text-sm leading-relaxed text-charcoal-600">
								The undisputed star of Ranthambore — unusually tolerant of
								safari vehicles and frequently seen hunting, drinking, and
								playing in open daylight.
							</p>
						</div>
					</div>

					{/* Predators stack */}
					<div className="lg:col-span-3 flex flex-col gap-4">
						{PREDATORS.map((predator) => (
							<div
								key={predator.name}
								className="flex-1 rounded-sm bg-cream-100 p-5 ring-1 ring-muted-300"
							>
								{predator.role && (
									<p className="font-display text-xs uppercase tracking-display text-sunset-500/70">
										{predator.role}
									</p>
								)}
								<h3 className="mt-1 font-playfair text-xl text-charcoal-900">
									{predator.name}
								</h3>
								<p className="mt-2 font-body text-sm leading-relaxed text-charcoal-600">
									{predator.note}
								</p>
							</div>
						))}
					</div>

					{/* Herbivores column */}
					<div className="lg:col-span-3 rounded-sm bg-cream-100 p-5 ring-1 ring-muted-300">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Herbivores
						</p>
						<div className="mt-4 divide-y divide-muted-300">
							{HERBIVORES.map((herbivore) => (
								<div key={herbivore.name} className="py-3 first:pt-0 last:pb-0">
									<h3 className="font-playfair text-base text-charcoal-900">
										{herbivore.name}
									</h3>
									<p className="mt-1 font-body text-xs leading-relaxed text-charcoal-500">
										{herbivore.note}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Canopy sentinels band */}
					<div className="lg:col-span-12 mt-2 rounded-sm bg-cream-100 p-6 ring-1 ring-muted-300 lg:p-8">
						<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
							<div className="shrink-0">
								<p className="font-display text-xs uppercase tracking-display text-sunset-500">
									Canopy Sentinels
								</p>
								<h3 className="mt-2 font-playfair text-xl text-charcoal-900 lg:text-2xl">
									Natural Alarm Systems
								</h3>
							</div>
							<div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
								{OTHER_MAMMALS.map((mammal) => (
									<div key={mammal.name}>
										{mammal.role && (
											<p className="font-display text-xs uppercase tracking-display text-charcoal-400">
												{mammal.role}
											</p>
										)}
										<h4 className="mt-1 font-playfair text-base text-charcoal-900">
											{mammal.name}
										</h4>
										<p className="mt-1 font-body text-xs leading-relaxed text-charcoal-600">
											{mammal.note}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ReptilesSection() {
	return (
		<section
			id="reptiles"
			className="scroll-mt-16 bg-sand-100 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Reptiles"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						Reptiles
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Lakeside &amp; Rocky Shores
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
					<p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
						The lakes and rivers of Ranthambore support healthy populations of
						mugger crocodiles, often seen basking on the banks of Padam Talab.
						Indian softshell turtles, monitor lizards, and a variety of snakes
						add to the herpetological diversity of the park.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{REPTILES.map((reptile) => (
						<div
							key={reptile.name}
							className={`relative flex flex-col rounded-sm bg-sand-50 p-6 ring-1 ring-muted-300 ${reptile.featured ? "lg:min-h-[280px]" : ""}`}
						>
							<p className="absolute top-5 right-5 font-display text-xs uppercase tracking-display text-sunset-500/60">
								{reptile.index} / 04
							</p>
							{reptile.featured && (
								<p className="font-display text-xs uppercase tracking-display text-sunset-500">
									Most Iconic
								</p>
							)}
							<h3 className="mt-2 font-playfair text-xl text-charcoal-900 lg:text-2xl">
								{reptile.name}
							</h3>
							<p className="mt-4 flex-1 font-body text-sm leading-relaxed text-charcoal-600">
								{reptile.note}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function BirdlifeSection() {
	return (
		<section
			id="birdlife"
			className="scroll-mt-16 bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Birdlife"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-20">
					<div className="w-full lg:w-[38%]">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Birdlife
						</p>
						<div className="mt-3 flex items-center gap-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
							<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
								A Birder&apos;s Paradise
							</h2>
						</div>
						<div className="mt-5 h-px w-12 bg-sunset-500/40" />
						<div className="mt-8 flex items-end gap-2">
							<span className="font-playfair text-7xl font-semibold text-tiger-700 leading-none">
								300
							</span>
							<span className="font-playfair text-3xl text-tiger-600 pb-2">
								+
							</span>
						</div>
						<p className="mt-1 font-display text-xs uppercase tracking-display text-charcoal-400">
							Recorded Species
						</p>
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700">
							With over 300 recorded species, Ranthambore is a birder&apos;s
							paradise — from soaring raptors and lake waders to vividly
							coloured ground birds that reward the patient observer.
						</p>
					</div>

					<div className="hidden w-full overflow-hidden rounded-sm ring-1 ring-muted-300 lg:block lg:w-[42%]">
						<img
							src="/gallery/3.jpg"
							alt="Birdlife and open clearings in Ranthambore"
							className="aspect-4/3 w-full object-cover"
						/>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{FEATURED_BIRDS.map((bird) => (
						<div
							key={bird.name}
							className={`rounded-sm p-6 ring-1 ring-muted-300 ${bird.spanTwo ? "sm:col-span-2 lg:col-span-2 bg-sand-100 border-l-4 border-tiger-700" : "bg-cream-100"}`}
						>
							{bird.role && (
								<p className="font-display text-xs uppercase tracking-display text-sunset-500">
									{bird.role}
								</p>
							)}
							<h3 className="mt-2 font-playfair text-xl text-charcoal-900 lg:text-2xl">
								{bird.name}
							</h3>
							<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-700">
								{bird.note}
							</p>
						</div>
					))}
				</div>

				<div className="mt-12 overflow-hidden rounded-sm bg-sand-100 ring-1 ring-muted-300 border-l-4 border-tiger-700">
					<div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-10">
						<div className="shrink-0">
							<p className="font-display text-xs uppercase tracking-display text-sunset-500">
								Winter Migration
							</p>
							<h3 className="mt-2 font-playfair text-2xl text-charcoal-900">
								Visitors from Central Asia
							</h3>
						</div>
						<p className="font-body text-base leading-relaxed text-charcoal-600">
							Winter months bring migratory species from Central Asia, including
							various ducks, warblers, and raptors — transforming the park into
							one of India&apos;s most rewarding birdwatching destinations
							between November and February.
						</p>
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
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
						to="/about/tigers"
						className="group flex flex-col rounded-sm bg-cream-100 p-6 ring-1 ring-muted-300 transition-colors hover:ring-sunset-500/40"
					>
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							About Ranthambore
						</p>
						<h3 className="mt-2 font-playfair text-xl text-charcoal-900 group-hover:text-tiger-700">
							Tigers of Ranthambore
						</h3>
						<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
							Meet the Bengal tigers, famous individuals, and best zones for
							sightings in the park.
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
