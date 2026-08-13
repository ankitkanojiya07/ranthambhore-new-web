import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { mapPostToSafariHighlight } from "#/components/daily-updates/map-safari-highlight";
import {
	homeRanthambhoreHighlightsQueryOptions,
	homeSafariHighlightsQueryOptions,
} from "#/components/daily-updates/queries/daily-updates.queries";
import {
	groupHomeHighlightCardsIntoSlides,
	type HomeHighlightCard,
	type HomeHighlightSlide,
	mapPostToHomeHighlightCard,
} from "#/components/highlights/map-ranthambhore-highlight";
import { Button } from "#/components/ui/button";
import { SAFARI_HIGHLIGHTS } from "#/lib/highlights-data";
import { Image } from "#/util/Image";

const HOME_RANTHAMBHORE_HIGHLIGHTS_FALLBACK: HomeHighlightSlide[] = [
	{
		id: "plan-and-visitors",
		cards: [
			{
				id: "plan-trip",
				title: "Why Plan A Trip To Ranthambore?",
				description:
					"If you are a wildlife lover wishing to know more about tigers in the wild, you must visit Ranthambore — one of India's finest tiger reserves.",
				image: {
					src: "/hero/8.webp",
					alt: "Scenic lake view at Ranthambore National Park",
					width: 2048,
					height: 1365,
				},
			},
			{
				id: "record-visitors",
				title: "Record Visitors – 7.27 Lakh Tourists In 2025",
				description:
					"Ranthambore crossed 727,000 visitors in the 2025 season, making it one of India's most visited tiger reserves.",
				isNew: true,
				image: {
					src: "/hero/9.webp",
					alt: "Tiger walking past a safari vehicle in Ranthambore",
					width: 2048,
					height: 1365,
				},
			},
		],
	},
	{
		id: "safari-and-zones",
		cards: [
			{
				id: "jeep-safari",
				title: "Book A Gypsy Safari For The Best Sightings",
				description:
					"Travel in a 6-seater open jeep with an expert naturalist guide for an intimate, flexible wildlife experience.",
				image: {
					src: "/hero/7.webp",
					alt: "Jeep safari through Ranthambore forest trails",
					width: 2048,
					height: 1365,
				},
			},
			{
				id: "safari-zones",
				title: "Explore All 10 Ranthambore Safari Zones",
				description:
					"From the iconic lakes of Zones 1–5 to the quieter buffer zones — find the right territory for your goals.",
				image: {
					src: "/hero/10.webp",
					alt: "Golden sunset over Ranthambore wilderness",
					width: 2048,
					height: 1365,
				},
			},
		],
	},
	{
		id: "season-and-booking",
		cards: [
			{
				id: "best-season",
				title: "Best Time To Visit Ranthambore",
				description:
					"October to April offers peak tiger sightings, while summer months concentrate wildlife around the lakes.",
				image: {
					src: "/hero/1.webp",
					alt: "Tiger in golden light at Ranthambore",
					width: 2048,
					height: 1365,
				},
			},
			{
				id: "booking-guide",
				title: "Things To Know Before Safari Booking",
				description:
					"Park rules, ID requirements, zone selection, and booking timelines — everything you need before you go.",
				image: {
					src: "/hero/8.webp",
					alt: "Safari briefing at Ranthambore gate",
					width: 2048,
					height: 1365,
				},
			},
		],
	},
];

const HOME_SAFARI_HIGHLIGHTS_FALLBACK = SAFARI_HIGHLIGHTS.slice(0, 4);
const SLIDE_INTERVAL_MS = 6000;

function SafariHighlightsCarousel() {
	const { data: posts } = useQuery(homeSafariHighlightsQueryOptions());
	const safariHighlights = useMemo(
		() =>
			posts?.data && posts.data.length > 0
				? posts.data.map(mapPostToSafariHighlight)
				: HOME_SAFARI_HIGHLIGHTS_FALLBACK,
		[posts?.data],
	);
	const [safariIndex, setSafariIndex] = useState(0);
	const safariHighlight = safariHighlights[safariIndex] ?? safariHighlights[0];

	useEffect(() => {
		if (safariHighlights.length <= 1) {
			return;
		}

		const timer = setInterval(() => {
			setSafariIndex((current) => (current + 1) % safariHighlights.length);
		}, SLIDE_INTERVAL_MS);

		return () => clearInterval(timer);
	}, [safariHighlights.length]);

	if (!safariHighlight) {
		return null;
	}

	return (
		<aside className="flex flex-col overflow-hidden rounded-2xl bg-tiger-900 lg:col-span-1">
			<div className="flex items-center justify-between border-b border-tiger-800 px-5 py-4">
				<h2 className="font-display text-sm font-bold uppercase tracking-display text-sand-50">
					Safari Highlights
				</h2>
				<Link
					to="/highlights/safari-insights"
					aria-label="View all safari highlights"
					className="flex size-8 items-center justify-center rounded-full text-sand-200 transition-colors hover:bg-tiger-800 hover:text-sand-50"
				>
					<ArrowRight className="size-4" />
				</Link>
			</div>

			<div className="relative flex-1 overflow-hidden px-4 pt-4">
				<AnimatePresence mode="wait">
					<motion.article
						key={safariHighlight.id}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -16 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="overflow-hidden rounded-xl bg-tiger-950/40 ring-1 ring-tiger-800/60"
					>
						<div className="relative aspect-4/3 overflow-hidden">
							<Image
								src={safariHighlight.image.src}
								alt={safariHighlight.image.alt}
								width={safariHighlight.image.width}
								height={safariHighlight.image.height}
								className="h-full w-full object-cover"
							/>
							<span className="absolute left-3 top-3 rounded-sm bg-tiger-800/90 px-2 py-1 font-display text-[10px] font-semibold uppercase tracking-display text-sand-50">
								{safariHighlight.zone}
							</span>
						</div>
						<div className="p-4">
							<p className="font-body text-xs text-tiger-200">
								{safariHighlight.date}
							</p>
							<h3 className="mt-1 font-display text-sm font-semibold uppercase leading-snug tracking-display text-sand-50">
								{safariHighlight.title}
							</h3>
							<p className="mt-2 line-clamp-3 font-body text-sm leading-relaxed text-sand-200/90">
								{safariHighlight.description}
							</p>
						</div>
					</motion.article>
				</AnimatePresence>
			</div>

			{safariHighlights.length > 1 ? (
				<div className="mt-4 flex items-center justify-center gap-2 px-4">
					{safariHighlights.map((highlight, index) => (
						<button
							key={highlight.id}
							type="button"
							aria-label={`Go to safari highlight ${index + 1}`}
							aria-current={index === safariIndex ? "true" : undefined}
							onClick={() => setSafariIndex(index)}
							className={`h-2 rounded-full transition-all ${
								index === safariIndex
									? "w-7 bg-sand-100"
									: "w-2 bg-tiger-700 hover:bg-tiger-500"
							}`}
						/>
					))}
				</div>
			) : null}

			<div className="p-4 pt-3">
				<Button
					variant="secondary"
					size="lg"
					className="w-full rounded-lg"
					render={
						<Link
							to="/daily-updates/new"
							className="no-underline"
							aria-label="Add your sightings update"
						/>
					}
				>
					Add Your Sightings Update
				</Button>
			</div>
		</aside>
	);
}

function HighlightCardItem({ card }: { card: HomeHighlightCard }) {
	const cardContent = (
		<>
			<div className="relative aspect-4/3 overflow-hidden">
				<Image
					src={card.image.src}
					alt={card.image.alt}
					width={card.image.width}
					height={card.image.height}
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				{card.isNew ? (
					<span className="absolute left-3 top-3 rounded-sm bg-sunset-600 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-display text-sand-50 shadow-sm">
						New
					</span>
				) : null}
			</div>
			<div className="flex flex-1 flex-col p-4 lg:p-5">
				<h3 className="font-display text-sm font-semibold uppercase leading-snug tracking-display text-charcoal-900 lg:text-base">
					{card.title}
				</h3>
				<p className="mt-2 line-clamp-3 font-body text-sm leading-relaxed text-charcoal-600">
					{card.description}
				</p>
			</div>
		</>
	);

	const linkClassName =
		"group flex h-full flex-col overflow-hidden rounded-xl bg-cream-50 shadow-md ring-1 ring-muted-300/60 transition-shadow hover:shadow-lg";

	if (card.slug) {
		return (
			<Link
				to="/highlights/ranthambhore-insights/$slug"
				params={{ slug: card.slug }}
				className={linkClassName}
			>
				{cardContent}
			</Link>
		);
	}

	return (
		<Link to="/highlights/ranthambhore-insights" className={linkClassName}>
			{cardContent}
		</Link>
	);
}

function RanthambhoreHighlightsCarousel() {
	const { data: posts } = useQuery(homeRanthambhoreHighlightsQueryOptions());
	const highlightSlides = useMemo(() => {
		if (!posts?.data.length) {
			return HOME_RANTHAMBHORE_HIGHLIGHTS_FALLBACK;
		}

		const slides = groupHomeHighlightCardsIntoSlides(
			posts.data.map(mapPostToHomeHighlightCard),
		);

		return slides.length > 0 ? slides : HOME_RANTHAMBHORE_HIGHLIGHTS_FALLBACK;
	}, [posts?.data]);
	const [highlightIndex, setHighlightIndex] = useState(0);
	const highlightSlide =
		highlightSlides[highlightIndex] ?? highlightSlides[0] ?? null;

	useEffect(() => {
		if (highlightSlides.length <= 1) {
			return;
		}

		const timer = setInterval(() => {
			setHighlightIndex((current) => (current + 1) % highlightSlides.length);
		}, SLIDE_INTERVAL_MS);

		return () => clearInterval(timer);
	}, [highlightSlides.length]);

	if (!highlightSlide) {
		return null;
	}

	return (
		<div className="flex flex-col rounded-2xl bg-tiger-50 px-5 py-5 lg:col-span-2 lg:px-6 lg:py-6">
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="font-display text-xs font-semibold uppercase tracking-display text-earth-700">
						What&apos;s New
					</p>
					<h2 className="mt-1 font-display text-xl font-bold uppercase tracking-display text-charcoal-900 lg:text-2xl">
						Ranthambore Highlights
					</h2>
				</div>
				<Link
					to="/highlights/ranthambhore-insights"
					aria-label="View all Ranthambhore highlights"
					className="flex size-9 shrink-0 items-center justify-center rounded-full border border-tiger-300 text-charcoal-700 transition-colors hover:border-tiger-600 hover:text-tiger-800"
				>
					<ArrowRight className="size-4" />
				</Link>
			</div>

			<div className="relative mt-5 flex-1 overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={highlightSlide.id}
						initial={{ opacity: 0, x: 24 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -24 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="grid grid-cols-1 gap-4 sm:grid-cols-2"
					>
						{highlightSlide.cards.map((card) => (
							<HighlightCardItem key={card.id} card={card} />
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			{highlightSlides.length > 1 ? (
				<div className="mt-6 flex items-center justify-center gap-2">
					{highlightSlides.map((slide, index) => (
						<button
							key={slide.id}
							type="button"
							aria-label={`Go to highlight slide ${index + 1}`}
							aria-current={index === highlightIndex ? "true" : undefined}
							onClick={() => setHighlightIndex(index)}
							className={`h-2 rounded-full transition-all ${
								index === highlightIndex
									? "w-7 bg-tiger-700"
									: "w-2 bg-tiger-300 hover:bg-tiger-500"
							}`}
						/>
					))}
				</div>
			) : null}
		</div>
	);
}

export function QuickLinksHighlightsSection() {
	return (
		<section
			className="bg-sand-50 px-6 pb-4 pt-10 lg:px-8 lg:pt-14"
			aria-label="Safari highlights and park updates"
		>
			<div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3 lg:gap-6">
				<SafariHighlightsCarousel />
				<RanthambhoreHighlightsCarousel />
			</div>
		</section>
	);
}
