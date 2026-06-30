import { createFileRoute } from "@tanstack/react-router";
import { WhyChooseSection } from "#/components/pages/WhyChooseSection";

export const Route = createFileRoute("/(main)/about/history")({
	staticData: { navOverlay: true },
	head: () => ({
		meta: [
			{
				title:
					"History of Ranthambore National Park | From Royal Hunting Ground to Tiger Reserve",
			},
			{
				name: "description",
				content:
					"Discover the fascinating history of Ranthambore — from Chauhan kings and Mughal battles to the Jaipur Maharajas' hunting grounds and modern-day tiger conservation.",
			},
		],
	}),
	component: HistoryPage,
});

interface Era {
	badge: string;
	heading: string;
	body: string;
	image: string;
	imageAlt: string;
	imageFirst: boolean;
	decorative?: boolean;
}

const ERAS: Era[] = [
	{
		badge: "10th Century",
		heading: "Ancient Roots",
		body: "The land that is now Ranthambore National Park has been inhabited and contested for well over a thousand years. The Ranthambore Fort, perched dramatically on a 700-foot hill inside the forest, was built during the 10th century and served as a stronghold of the Chauhan Rajput dynasty. It witnessed some of the most significant battles of medieval India, including sieges by Alauddin Khilji in 1301 and later, Mughal Emperor Akbar in 1569.",
		image: "/map.png",
		imageAlt: "Illustrated map of Ranthambore and the ancient fort",
		imageFirst: true,
	},
	{
		badge: "18th–19th Century",
		heading: "The Hunting Grounds of Jaipur",
		body: "With the rise of the Jaipur royal family (Kachwaha Rajputs), Ranthambore became the exclusive shikar (hunting) reserve of the Maharajas of Jaipur. For centuries, the forests were zealously guarded and managed, unintentionally preserving the wildlife and habitat that we cherish today. The game logs maintained by the royal family represent some of the earliest wildlife records from this region.",
		image: "/house.png",
		imageAlt: "Royal lodge in the forests of Ranthambore",
		imageFirst: false,
	},
	{
		badge: "1955–1991",
		heading: "Project Tiger & Modern Conservation",
		body: "After Indian independence, the forests came under government management. In 1955, the area was declared a Wildlife Sanctuary. The real turning point came in 1973 when Prime Minister Indira Gandhi launched Project Tiger, and Ranthambore was designated one of the original nine tiger reserves in India. In 1980, it was elevated to the status of a National Park, and in 1991, the surrounding buffer zone was added to create the Ranthambore Tiger Reserve.",
		image: "/tiger-footstep.png",
		imageAlt: "Tiger paw print — symbol of conservation",
		imageFirst: true,
		decorative: true,
	},
];

function HistoryPage() {
	return (
		<div className="bg-sand-50">
			{/* ── Hero ── */}
			<section
				className="relative flex min-h-[80dvh] items-end overflow-hidden"
				aria-label="Page hero"
			>
				<div className="absolute inset-0">
					<img
						src="/Home/fort1.jpg"
						alt=""
						aria-hidden
						className="size-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-charcoal-900/90 via-charcoal-900/45 to-charcoal-900/20" />
				</div>

				<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28">
					<div>
						<p className="font-display text-xs uppercase tracking-display text-sunset-400">
							About Ranthambore
						</p>
						<h1 className="mt-4 font-playfair text-5xl font-semibold italic text-sand-50 lg:text-7xl">
							A Thousand Years
							<br className="hidden lg:block" /> in the Wild
						</h1>
						<p className="mt-5 max-w-2xl font-body text-base text-sand-300 lg:text-lg">
							From Chauhan kings and Mughal battles to Maharaja hunting grounds
							and modern tiger conservation — the land that is Ranthambore has
							always been extraordinary.
						</p>
					</div>
				</div>
			</section>

			{/* ── Timeline ── */}
			<section
				className="px-6 py-24 lg:px-8 lg:py-32"
				aria-label="Historical timeline"
			>
				<div className="mx-auto max-w-7xl">
					<div className="mb-20 text-center">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							Timeline
						</p>
						<h2 className="mt-3 font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							Epochs That Shaped a Reserve
						</h2>
						<div className="mx-auto mt-5 h-px w-16 bg-sunset-500/40" />
					</div>

					<div className="space-y-28">
						{ERAS.map((era, idx) => (
							<TimelineEra key={era.badge} era={era} index={idx} />
						))}
					</div>
				</div>
			</section>

			{/* ── Machhli Feature ── */}
			<MachhliSection />

			<WhyChooseSection />
		</div>
	);
}

function TimelineEra({ era, index }: { era: Era; index: number }) {
	const imageBlock = (
		<div className="w-full lg:w-[45%]">
			<div
				className={`relative overflow-hidden rounded-sm ring-1 ring-inset ring-sunset-500/15 ${era.decorative ? "bg-sand-100 flex items-center justify-center py-16" : ""}`}
			>
				<img
					src={era.image}
					alt={era.imageAlt}
					className={
						era.decorative
							? "h-44 w-auto object-contain opacity-50"
							: "aspect-[4/3] w-full object-cover"
					}
				/>
			</div>
		</div>
	);

	const textBlock = (
		<div className="w-full lg:w-[50%]">
			<p className="font-display text-xs uppercase tracking-display text-sunset-500">
				{era.badge}
			</p>
			<div className="mt-2 flex items-center gap-3">
				<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
				<h3 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
					{era.heading}
				</h3>
			</div>
			<div className="mt-4 h-px w-12 bg-sunset-500/40" />
			<p className="mt-6 font-body text-base leading-relaxed text-charcoal-700">
				{era.body}
			</p>
			<p className="mt-8 font-display text-xs uppercase tracking-display text-muted-400">
				0{index + 1} / 04
			</p>
		</div>
	);

	return (
		<div
			className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${era.imageFirst ? "" : "lg:flex-row-reverse"}`}
		>
			{imageBlock}
			{textBlock}
		</div>
	);
}

function MachhliSection() {
	return (
		<section
			className="bg-charcoal-900 px-6 py-24 lg:px-8 lg:py-32"
			aria-label="Machhli — Lady of the Lakes"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center">
					<p className="font-display text-xs uppercase tracking-display text-sunset-500">
						The Legend
					</p>
					<h2 className="mt-3 font-playfair text-3xl text-sand-50 lg:text-4xl">
						The Tigress That Changed Everything
					</h2>
				</div>

				<div className="overflow-hidden rounded-sm ring-1 ring-sunset-500/30 lg:flex">
					<div className="w-full shrink-0 lg:w-[45%] aspect-square">
						<img
							src="/Home/machli.jpg"
							alt="The legendary tigress Machhli at Ranthambore"
							className="size-full min-h-[300px] object-cover object-center lg:min-h-[520px]"
						/>
					</div>

					<div className="flex flex-1 flex-col justify-center bg-charcoal-950 px-8 py-12 lg:px-14 lg:py-16">
						<p className="font-display text-xs uppercase tracking-display text-sunset-500">
							1997 – 2016
						</p>
						<div className="mt-2 flex items-center gap-3">
							<span className="size-2.5 shrink-0 rotate-45 bg-sunset-500" />
							<h3 className="font-playfair text-2xl text-sand-50 lg:text-4xl">
								Lady of the Lakes
							</h3>
						</div>
						<div className="mt-4 h-px w-12 bg-sunset-500/50" />

						<blockquote className="mt-8 border-l-2 border-sunset-500 pl-5">
							<p className="font-playfair text-lg italic text-sand-200 lg:text-xl">
								"The most photographed tiger in the world — and the soul of
								Ranthambore."
							</p>
						</blockquote>

						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-300">
							No account of Ranthambore's history is complete without Machhli.
							Born around 1997, she lived to the remarkable age of 19 and became
							the most photographed tiger in the world. Her fearless, bold
							personality and striking beauty brought Ranthambore into the
							international spotlight and inspired a generation of wildlife
							photographers and conservationists.
						</p>

						<div className="mt-10 flex items-end gap-1.5 opacity-30">
							<img
								src="/tiger-footstep.png"
								alt=""
								aria-hidden
								className="h-9 w-9 object-contain invert"
							/>
							<img
								src="/tiger-footstep.png"
								alt=""
								aria-hidden
								className="mb-1 h-7 w-7 object-contain invert opacity-70"
							/>
							<img
								src="/tiger-footstep.png"
								alt=""
								aria-hidden
								className="mb-2 h-5 w-5 object-contain invert opacity-40"
							/>
						</div>

						<p className="mt-8 font-display text-xs uppercase tracking-display text-sand-400">
							04 / 04
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
