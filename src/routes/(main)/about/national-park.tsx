import { createFileRoute } from "@tanstack/react-router";
import CTASection from "#/components/cta";
import { TrustBar } from "#/components/pages/TrustBar";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/about/national-park")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"Ranthambore National Park | Wild Heart of Rajasthan — Overview & Geography",
			},
			{
				name: "description",
				content:
					"Explore the geography, ecology, and landscape of Ranthambore National Park — 1,334 sq km of tropical forest, ancient ruins, and three sacred lakes at the heart of tiger country.",
			},
		],
	}),
	component: NationalParkPage,
});

interface ParkStat {
	value: string;
	unit: string;
	label: string;
	index: string;
}

interface Connection {
	city: string;
	duration: string;
	via: string;
	direction: string;
}

interface CardinalBoundary {
	direction: string;
	label: string;
	boundary: string;
	description: string;
}

interface Lake {
	name: string;
	meaning: string;
	position: string;
	index: string;
	note: string;
}

interface Species {
	name: string;
	latin: string;
}

const PARK_STATS: ParkStat[] = [
	{ value: "392", unit: "km²", label: "Core Zone", index: "01" },
	{ value: "1,334", unit: "km²", label: "Tiger Reserve", index: "02" },
	{ value: "14", unit: "km", label: "To Main Gate", index: "03" },
	{ value: "215-505", unit: "m", label: "Elevation Range", index: "04" },
];

const CONNECTIONS: Connection[] = [
	{
		city: "Delhi",
		duration: "5-6",
		via: "Rajdhani / Shatabdi",
		direction: "North",
	},
	{
		city: "Jaipur",
		duration: "3",
		via: "Intercity Express",
		direction: "West",
	},
	{
		city: "Agra",
		duration: "3",
		via: "Intercity / Road",
		direction: "Northeast",
	},
];

const CARDINAL_BOUNDARIES: CardinalBoundary[] = [
	{
		direction: "N",
		label: "North",
		boundary: "Banas River",
		description: "Monsoon-fed lifeline flowing along the upper reserve",
	},
	{
		direction: "S",
		label: "South",
		boundary: "Chambal River",
		description: "Ravine-carved river forming the southern wilderness edge",
	},
	{
		direction: "W",
		label: "West",
		boundary: "Aravalli Hills",
		description: "Ancient folded hills sheltering the park from arid winds",
	},
	{
		direction: "E",
		label: "East",
		boundary: "Vindhya Ranges",
		description:
			"Plateau scarps that close the eastern horizon with dense forest",
	},
];

const LAKES: Lake[] = [
	{
		name: "Padam Talab",
		meaning: "Lake of Lotuses",
		position: "Primary",
		index: "01",
		note: "The largest and most storied of the three — where tigers wade at dawn and lotus blooms carpet the shallows in summer.",
	},
	{
		name: "Raj Bagh Talab",
		meaning: "Royal Garden Lake",
		position: "Historic",
		index: "02",
		note: "Framed by the crumbling arches of a Mughal pavilion, this lake is one of the most photographed scenes in Indian wildlife.",
	},
	{
		name: "Malik Talab",
		meaning: "Master's Lake",
		position: "Sanctuary",
		index: "03",
		note: "Quieter and smaller, yet a prime spot for marsh crocodiles and migratory waterfowl in the cooler months.",
	},
];

const VEGETATION_SPECIES: Species[] = [
	{ name: "Banyan", latin: "Ficus benghalensis" },
	{ name: "Pipal", latin: "Ficus religiosa" },
	{ name: "Flame of the Forest", latin: "Butea monosperma" },
	{ name: "Mango", latin: "Mangifera indica" },
	{ name: "Jamun", latin: "Syzygium cumini" },
];

function NationalParkPage() {
	return (
		<div className="bg-sand-50">
			{/* ── Hero ── */}
			<section
				className="relative flex min-h-[80dvh] items-end overflow-hidden"
				aria-label="Page hero"
			>
				<div className="absolute inset-0">
					<img
						src="/tiger.png"
						alt=""
						aria-hidden
						className="size-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-charcoal-900/90 via-charcoal-900/45 to-charcoal-900/20" />
				</div>

				<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28">
					<p className="font-display text-xs uppercase tracking-display text-sunset-400">
						Ranthambore National Park
					</p>
					<h1 className="mt-4 font-playfair text-5xl font-semibold italic text-sand-50 lg:text-7xl">
						Wild Heart of
						<br className="hidden lg:block" /> Rajasthan
					</h1>
					<p className="mt-5 max-w-2xl font-body text-base text-sand-300 lg:text-lg">
						One of India's great wilderness preserves — 1,334 square kilometres
						of ancient forest, sacred lakes, and living ruins at the
						southeastern edge of Rajasthan.
					</p>
				</div>
			</section>

			<TrustBar />

			{/* ── Stats Banner ── */}
			<StatsBanner />

			{/* ── Location & Access ── */}
			<LocationSection />

			{/* ── Area & Boundaries ── */}
			<BoundariesSection />

			{/* ── Vegetation ── */}
			<VegetationSection />

			{/* ── Landscape & Lakes ── */}
			<LakesSection />

			<WhyChooseSection />

			{/* ── CTA ── */}
			<CTASection />
		</div>
	);
}

function StatsBanner() {
	return (
		<section className="bg-sand-100" aria-label="Park statistics">
			<div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 divide-y divide-muted-300 lg:divide-y-0 lg:divide-x">
				{PARK_STATS.map((stat) => (
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
							<span className="font-playfair text-2xl lg:text-3xl text-earth-600 pb-1.5">
								{stat.unit}
							</span>
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

function LocationSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Location and access"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
					{/* Left: intro */}
					<div className="w-full lg:w-[38%]">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Location & Access
						</p>
						<div className="mt-3 flex items-center gap-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
							<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
								Getting to Ranthambore
							</h2>
						</div>
						<div className="mt-5 h-px w-12 bg-sunset-500/40" />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700">
							Sawai Madhopur, the nearest railhead, lies just 14 kilometres from
							the main park gate. The town sits on major rail corridors
							connecting three of India's great cities — making Ranthambore one
							of the most accessible wilderness destinations in the country.
						</p>
						<p className="mt-6 font-display text-xs uppercase tracking-display text-charcoal-400">
							Sawai Madhopur District · Southeastern Rajasthan
						</p>
					</div>

					{/* Right: journey cards */}
					<div className="w-full lg:flex-1 space-y-4">
						{CONNECTIONS.map((conn) => (
							<div
								key={conn.city}
								className="relative overflow-hidden rounded-sm bg-cream-100 ring-1 ring-muted-300 px-6 py-5 flex items-center justify-between gap-6"
							>
								<div className="absolute left-0 inset-y-0 w-0.5 bg-sunset-500/40" />
								<div>
									<p className="font-display text-xs uppercase tracking-display text-charcoal-400">
										{conn.direction}
									</p>
									<p className="mt-1 font-playfair text-2xl text-charcoal-900">
										{conn.city}
									</p>
									<p className="mt-1 font-body text-sm text-charcoal-500">
										{conn.via}
									</p>
								</div>
								<div className="text-right shrink-0">
									<p className="font-playfair text-4xl font-semibold text-sunset-600 leading-none">
										{conn.duration}
									</p>
									<p className="mt-1 font-display text-xs uppercase tracking-display text-charcoal-400">
										hours by rail
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function BoundariesSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Area and boundaries"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						Area & Boundaries
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Where the Wild Begins and Ends
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
				</div>

				<div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
					{/* Left: area figures */}
					<div className="w-full lg:w-[32%]">
						<div>
							<p className="font-display text-xs uppercase tracking-display text-sunset-500">
								Core Zone
							</p>
							<p className="mt-2 font-playfair text-5xl font-semibold text-charcoal-900 leading-none">
								392 km²
							</p>
							<p className="mt-3 font-body text-sm text-charcoal-600 leading-relaxed">
								The protected heart of the park — the zone from which no human
								settlement is permitted.
							</p>
						</div>

						<div className="my-8 h-px w-24 bg-muted-300" />

						<div>
							<p className="font-display text-xs uppercase tracking-display text-sunset-500">
								Tiger Reserve Total
							</p>
							<p className="mt-2 font-playfair text-5xl font-semibold text-charcoal-900 leading-none">
								1,334 km²
							</p>
							<p className="mt-3 font-body text-sm text-charcoal-600 leading-relaxed">
								Including buffer zones — one of the most complete tiger
								ecosystems in India.
							</p>
						</div>
					</div>

					{/* Right: compass grid */}
					<div className="w-full lg:flex-1">
						<div className="grid grid-cols-2 gap-px bg-earth-300 overflow-hidden rounded-sm">
							{CARDINAL_BOUNDARIES.map((b) => (
								<div key={b.direction} className="bg-sand-50 p-8 relative">
									<p
										className="absolute top-4 right-5 font-playfair text-7xl lg:text-8xl font-semibold italic text-charcoal-900/8 leading-none select-none"
										aria-hidden
									>
										{b.direction}
									</p>
									<p className="font-display text-xs uppercase tracking-display text-sunset-500">
										{b.label}
									</p>
									<p className="mt-2 font-playfair text-xl text-charcoal-900">
										{b.boundary}
									</p>
									<p className="mt-2 font-body text-sm text-charcoal-600 leading-relaxed">
										{b.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function LakesSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Landscape and lakes"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-6 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						Landscape & Water
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						Three Lakes, One Living Wilderness
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
				</div>

				<p className="mx-auto mt-5 max-w-2xl font-body text-base text-charcoal-600 text-center leading-relaxed">
					Ranthambore's three lakes are the ecological pulse of the park —
					drawing tigers, crocodiles, and hundreds of bird species. In the dry
					summer months, the lakes become the only reliable water source,
					concentrating wildlife in scenes that have defined the park's global
					reputation.
				</p>

				<div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
					{LAKES.map((lake) => (
						<div
							key={lake.name}
							className="relative flex flex-col overflow-hidden rounded-sm bg-cream-100 ring-1 ring-muted-300 min-h-[380px]"
						>
							<div className="flex-1 p-8 flex flex-col">
								<p className="absolute top-6 right-6 font-display text-xs uppercase tracking-display text-sunset-500/60">
									{lake.index}
								</p>
								<p className="font-display text-xs uppercase tracking-display text-sunset-500">
									{lake.position}
								</p>
								<h3 className="mt-3 font-playfair text-2xl text-charcoal-900 lg:text-3xl">
									{lake.name}
								</h3>
								<p className="mt-1 font-playfair text-sm italic text-charcoal-500">
									{lake.meaning}
								</p>
								<div className="mt-5 h-px w-10 bg-sunset-500/40" />
								<p className="mt-6 font-body text-sm leading-relaxed text-charcoal-600 flex-1">
									{lake.note}
								</p>
							</div>
							<div className="border-t border-muted-300 px-8 py-5 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<span className="size-1.5 rotate-45 bg-sunset-500/60 shrink-0" />
									<p className="font-display text-xs uppercase tracking-display text-charcoal-400">
										Lake
									</p>
								</div>
								<p className="font-playfair text-xs text-charcoal-400">
									{lake.index} / 03
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function VegetationSection() {
	return (
		<section
			className="bg-sand-50 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Vegetation"
		>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
					{/* Left: dominant species feature */}
					<div className="w-full lg:w-[42%]">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Forest Composition
						</p>
						<div className="mt-3 flex items-center gap-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
							<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
								The Dhok Forest
							</h2>
						</div>
						<div className="mt-5 h-px w-12 bg-sunset-500/40" />

						<div className="mt-8 flex items-end gap-3">
							<span className="font-playfair text-8xl font-semibold text-tiger-700 leading-none">
								80
							</span>
							<div className="flex flex-col pb-2 gap-0.5">
								<span className="font-playfair text-3xl text-tiger-600 leading-none">
									%
								</span>
								<span className="font-display text-xs uppercase tracking-display text-charcoal-400">
									of forest cover
								</span>
							</div>
						</div>
						<p className="mt-2 font-playfair text-base italic text-charcoal-500">
							Anogeissus pendula
						</p>

						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700">
							The dhok tree is so dominant it defines the very character of
							Ranthambore's forest — its pale, papery bark and deciduous canopy
							creating the dappled light in which tigers hunt and leopards rest.
						</p>

						<div className="mt-8 inline-flex items-center gap-3 rounded-sm border border-tiger-700/40 px-5 py-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-tiger-600" />
							<span className="font-display text-xs uppercase tracking-display text-tiger-700">
								Tropical Dry Deciduous Forest
							</span>
						</div>
					</div>

					{/* Right: species list */}
					<div className="w-full lg:flex-1">
						<p className="font-display text-xs uppercase tracking-display text-charcoal-400">
							Supporting Species
						</p>

						<div className="mt-6 divide-y divide-muted-300">
							{VEGETATION_SPECIES.map((sp) => (
								<div
									key={sp.name}
									className="py-4 flex items-baseline justify-between gap-4"
								>
									<span className="font-playfair text-lg text-charcoal-900">
										{sp.name}
									</span>
									<span className="font-playfair text-sm italic text-charcoal-400 shrink-0">
										{sp.latin}
									</span>
								</div>
							))}
						</div>

						<div className="mt-8 pt-6 border-t border-muted-300">
							<p className="font-body text-sm text-charcoal-500 leading-relaxed">
								Undergrowth of grasses, shrubs, and creepers completes the
								layered ecology that supports over 300 recorded bird species, 40
								mammal species, and some of India's most productive
								tiger-sighting corridors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
