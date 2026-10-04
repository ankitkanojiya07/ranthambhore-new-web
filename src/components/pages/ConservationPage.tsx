import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LastReviewed } from "#/components/seo/LastReviewed";
import { PageBreadcrumbs } from "#/components/seo/PageBreadcrumbs";
import { RelatedGuides } from "#/components/seo/RelatedGuides";
import {
	CONSERVATION_CONTENT,
	CONSERVATION_INITIATIVES,
	CONSERVATION_RELATED_GUIDES,
	CONSERVATION_SUCCESS_STORY,
	type ConservationInitiative,
	ENVIRONMENTAL_SUSTAINABILITY,
	INITIATIVE_DETAILS,
	type InitiativeDetail,
	type InitiativeDetailSection,
	SUSTAINABILITY_ITEMS,
	type SustainabilityItem,
} from "#/lib/conservation";
import { cn } from "#/lib/utils";
import { Image } from "#/util/Image";
import { HospitalityPurposeWheel } from "./HospitalityPurposeWheel";

const BREADCRUMBS = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Conservation", path: "/about/conservation" },
];

function InitiativeCard({
	id,
	title,
	description,
	linkLabel,
	icon: Icon,
	isActive,
	onToggle,
}: ConservationInitiative & {
	isActive: boolean;
	onToggle: () => void;
}) {
	return (
		<article
			className={cn(
				"flex h-full flex-col rounded-xl bg-white px-6 py-7 shadow-[0_4px_24px_rgba(45,35,25,0.06)] ring-1 transition-shadow",
				isActive
					? "ring-earth-400 shadow-[0_8px_32px_rgba(45,35,25,0.1)]"
					: "ring-sand-300/50",
			)}
		>
			<span className="flex size-10 items-center justify-center rounded-lg bg-earth-100 text-earth-600">
				<Icon className="size-4.5" strokeWidth={1.5} aria-hidden />
			</span>

			<h3 className="mt-5 font-playfair text-lg text-charcoal-900 lg:text-xl">
				{title}
			</h3>

			<p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal-600 lg:text-[0.9375rem]">
				{description}
			</p>

			<button
				type="button"
				onClick={onToggle}
				aria-expanded={isActive}
				aria-controls={`initiative-detail-${id}`}
				className="mt-6 inline-flex cursor-pointer items-center gap-1.5 font-display text-xs font-medium uppercase tracking-display text-earth-600 transition-colors hover:text-earth-700"
			>
				{linkLabel}
				<ArrowRight
					className={cn(
						"size-3.5 transition-transform duration-200",
						isActive && "rotate-90",
					)}
					strokeWidth={2}
					aria-hidden
				/>
			</button>
		</article>
	);
}

function DetailSection({ section }: { section: InitiativeDetailSection }) {
	return (
		<div>
			<h4 className="font-playfair text-lg text-charcoal-900 lg:text-xl">
				{section.heading}
			</h4>
			<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />

			{section.timeline ? (
				<div className="mt-5 space-y-4">
					{section.timeline.map((item) => (
						<div
							key={`${item.year}-${item.label}`}
							className="flex gap-4 border-l-2 border-earth-300/60 pl-4"
						>
							<p className="w-12 shrink-0 font-playfair text-lg text-earth-700">
								{item.year}
							</p>
							<p className="font-body text-sm leading-relaxed text-charcoal-700">
								{item.label}
							</p>
						</div>
					))}
				</div>
			) : null}

			{section.items ? (
				<ul className="mt-5 space-y-2.5">
					{section.items.map((item) => (
						<li
							key={item}
							className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-earth-400"
						>
							{item}
						</li>
					))}
				</ul>
			) : null}

			{section.metrics ? (
				<div className="mt-5 grid gap-4 sm:grid-cols-2">
					{section.metrics.map((metric) => (
						<div
							key={metric.label}
							className="rounded-lg bg-sand-100/80 px-4 py-4 ring-1 ring-sand-300/60"
						>
							<p className="font-display text-[0.625rem] font-medium uppercase tracking-display text-muted-400">
								{metric.label}
							</p>
							<p className="mt-2 font-playfair text-base text-charcoal-900 lg:text-lg">
								{metric.value}
							</p>
						</div>
					))}
				</div>
			) : null}

			{section.subsections ? (
				<div className="mt-5 space-y-4">
					{section.subsections.map((subsection) => (
						<div
							key={subsection.title}
							className="rounded-lg bg-sand-50 px-4 py-4 ring-1 ring-sand-300/50"
						>
							<h5 className="font-playfair text-base text-earth-700">
								{subsection.title}
							</h5>
							<p className="mt-2 font-body text-sm leading-relaxed text-charcoal-700">
								{subsection.body}
							</p>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}

function InitiativeDetailPanel({ detail }: { detail: InitiativeDetail }) {
	return (
		<div
			id={`initiative-detail-${detail.id}`}
			className="mt-8 rounded-2xl bg-white px-6 py-8 shadow-[0_4px_24px_rgba(45,35,25,0.06)] ring-1 ring-sand-300/50 lg:px-10 lg:py-10"
		>
			<h3 className="font-playfair text-2xl text-charcoal-900 lg:text-[1.75rem]">
				{detail.title}
			</h3>
			<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]">
				{detail.intro}
			</p>

			<div className="mt-10 space-y-10">
				{detail.sections.map((section) => (
					<DetailSection key={section.heading} section={section} />
				))}
			</div>
		</div>
	);
}

function ConservationInitiativesSection() {
	const [activeId, setActiveId] = useState<string | null>(null);
	const activeDetail = activeId ? INITIATIVE_DETAILS[activeId] : null;

	return (
		<section>
			<div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 lg:pb-20">
				<PageBreadcrumbs crumbs={BREADCRUMBS} className="mb-8" />
				<header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
					<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						{CONSERVATION_CONTENT.title}
					</h1>
					<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
						{CONSERVATION_CONTENT.intro}
					</p>
					<div className="mt-4 flex justify-center">
						<LastReviewed path="/about/conservation" />
					</div>
				</header>

				<div className="mb-12 lg:mb-16">
					<HospitalityPurposeWheel />
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{CONSERVATION_INITIATIVES.map((initiative) => (
						<InitiativeCard
							key={initiative.id}
							{...initiative}
							isActive={activeId === initiative.id}
							onToggle={() =>
								setActiveId(activeId === initiative.id ? null : initiative.id)
							}
						/>
					))}
				</div>

				<AnimatePresence initial={false}>
					{activeDetail ? (
						<motion.div
							key={activeDetail.id}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="overflow-hidden"
						>
							<InitiativeDetailPanel detail={activeDetail} />
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</section>
	);
}

function SustainabilityAccordionItem({
	item,
	isOpen,
	onToggle,
}: {
	item: SustainabilityItem;
	isOpen: boolean;
	onToggle: () => void;
}) {
	const Icon = item.icon;

	return (
		<div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50">
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-sand-50/60 sm:px-6"
				aria-expanded={isOpen}
			>
				<span
					className={cn(
						"flex size-10 shrink-0 items-center justify-center rounded-lg",
						item.iconClassName,
					)}
				>
					<Icon className="size-4.5" strokeWidth={1.5} aria-hidden />
				</span>
				<span className="flex-1 font-playfair text-lg text-charcoal-900">
					{item.title}
				</span>
				<ChevronDown
					className={cn(
						"size-5 shrink-0 text-charcoal-500 transition-transform duration-200",
						isOpen && "rotate-180",
					)}
					aria-hidden
				/>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="overflow-hidden"
					>
						<div className="border-t border-sand-300/60 px-5 pb-6 pt-2 sm:px-6">
							<p className="font-body text-sm leading-relaxed text-charcoal-600 lg:text-[0.9375rem]">
								{item.intro}
							</p>
							<ul className="mt-4 space-y-2.5">
								{item.items.map((point) => (
									<li
										key={point}
										className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-earth-400"
									>
										{point}
									</li>
								))}
							</ul>
							{item.highlight ? (
								<p className="mt-5 font-body text-sm font-medium italic text-earth-700">
									{item.highlight}
								</p>
							) : null}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function EnvironmentalSustainabilitySection() {
	const { title, subtitle, intro } = ENVIRONMENTAL_SUSTAINABILITY;
	const [openId, setOpenId] = useState<string>(
		SUSTAINABILITY_ITEMS[0]?.id ?? "",
	);

	return (
		<section className="border-t border-sand-300/80 bg-sand-100/40">
			<div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
				<header className="mx-auto max-w-3xl text-center">
					<h2 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
						{title}
					</h2>
					<p className="mt-5 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
						{subtitle}
					</p>
				</header>

				<div className="mt-10 rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8 lg:py-7">
					<p className="text-center font-body text-sm leading-[1.85] text-charcoal-600 lg:text-base">
						{intro}
					</p>
				</div>

				<div className="mt-6 space-y-3">
					{SUSTAINABILITY_ITEMS.map((item) => (
						<SustainabilityAccordionItem
							key={item.id}
							item={item}
							isOpen={openId === item.id}
							onToggle={() => setOpenId(openId === item.id ? "" : item.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export function ConservationPage() {
	const {
		title: storyTitle,
		paragraphs,
		image,
		imageAlt,
		achievements,
	} = CONSERVATION_SUCCESS_STORY;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<ConservationInitiativesSection />

			<section className="border-t border-sand-300/80">
				<div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 lg:pb-20">
					<article className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.06)] ring-1 ring-sand-300/50 lg:flex">
						<div className="lg:w-[42%] lg:shrink-0">
							<Image
								src={image}
								alt={imageAlt}
								width={720}
								height={540}
								className="aspect-4/3 size-full object-cover lg:min-h-full lg:aspect-auto"
							/>
						</div>

						<div className="flex flex-1 flex-col px-6 py-8 lg:px-10 lg:py-10">
							<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-[1.75rem]">
								{storyTitle}
							</h2>

							<div className="mt-5 space-y-4">
								{paragraphs.map((paragraph) => (
									<p
										key={paragraph.slice(0, 48)}
										className="font-body text-sm leading-[1.85] text-charcoal-600 lg:text-[0.9375rem]"
									>
										{paragraph}
									</p>
								))}
							</div>

							<div className="mt-8 rounded-xl bg-sand-100/80 px-5 py-5 ring-1 ring-sand-300/60 lg:px-6 lg:py-6">
								<h3 className="font-playfair text-base text-charcoal-900 lg:text-lg">
									Key Achievements:
								</h3>
								<ul className="mt-4 space-y-3">
									{achievements.map((item) => (
										<li
											key={item}
											className="flex items-start gap-3 font-body text-sm leading-relaxed text-charcoal-700"
										>
											<span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-earth-500 text-sand-50">
												<Check
													className="size-3"
													strokeWidth={2.5}
													aria-hidden
												/>
											</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</article>
				</div>
			</section>

			<EnvironmentalSustainabilitySection />
			<RelatedGuides guides={[...CONSERVATION_RELATED_GUIDES]} />
		</div>
	);
}
