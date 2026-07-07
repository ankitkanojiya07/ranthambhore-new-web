import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
	BEST_TIME_TO_VISIT,
	BOOK_SAFARI_ADVANCE,
	GETTING_HERE,
	JOURNEY_STEPS,
	type JourneyStep,
	PACKING_LISTS,
	PLAN_FAQS,
	PLAN_YOUR_VISIT_CONTENT,
	SAFARI_DAY_GUIDE,
	SAFARI_VEHICLE_OPTIONS,
	SAFARI_ZONE_GUIDE,
	SAFARI_ZONES,
	TRAVEL_TIPS,
	WHERE_TO_STAY,
} from "#/lib/plan-your-visit";
import { cn } from "#/lib/utils";
import { Image } from "#/util/Image";

const stepCircleVariants = {
	hidden: { scale: 0.5, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.45, ease: "easeOut" as const },
	},
};

const connectorLineVariants = {
	hidden: { scaleY: 0 },
	visible: {
		scaleY: 1,
		transition: { duration: 0.75, ease: "easeOut" as const, delay: 0.2 },
	},
};

const stepContentVariants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.1 },
	},
};

function JourneySection({
	id,
	step,
	title,
	intro,
	icon: Icon,
	isLast = false,
	children,
}: JourneyStep & { isLast?: boolean; children: React.ReactNode }) {
	return (
		<motion.section
			id={id}
			className={cn("scroll-mt-28", !isLast && "pb-16 lg:pb-20")}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.15 }}
		>
			<div className="flex items-stretch gap-4 lg:gap-6">
				<div className="flex w-12 shrink-0 flex-col items-center" aria-hidden>
					<motion.span
						variants={stepCircleVariants}
						className="relative z-10 flex size-12 items-center justify-center rounded-full bg-earth-100 font-display text-sm font-medium text-earth-700 ring-4 ring-sand-50"
					>
						{step}
					</motion.span>
					{!isLast ? (
						<div className="relative w-px flex-1">
							<div className="absolute inset-0 bg-earth-200/50" />
							<motion.div
								variants={connectorLineVariants}
								className="absolute inset-0 origin-top bg-earth-400/90"
							/>
						</div>
					) : null}
				</div>
				<motion.div variants={stepContentVariants} className="min-w-0 flex-1">
					<div className="flex items-center gap-3">
						<span className="flex size-9 items-center justify-center rounded-lg bg-sand-200/80 text-earth-600">
							<Icon className="size-4" strokeWidth={1.5} aria-hidden />
						</span>
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-[1.75rem]">
							{title}
						</h2>
					</div>
					<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600 lg:text-[0.9375rem]">
						{intro}
					</p>
					<div className="mt-6">{children}</div>
				</motion.div>
			</div>
		</motion.section>
	);
}

function ContentCard({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-xl bg-white px-6 py-6 shadow-[0_4px_24px_rgba(45,35,25,0.04)] ring-1 ring-sand-300/50 lg:px-8">
			{children}
		</div>
	);
}

function BulletList({ items }: { items: readonly string[] }) {
	return (
		<ul className="space-y-2.5">
			{items.map((item) => (
				<li
					key={item}
					className="relative pl-4 font-body text-sm leading-relaxed text-charcoal-700 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-earth-400"
				>
					{item}
				</li>
			))}
		</ul>
	);
}

function InlineLink({ to, label }: { to: string; label: string }) {
	return (
		<Link
			to={to}
			className="mt-6 inline-flex items-center gap-1.5 font-display text-xs font-medium uppercase tracking-display text-earth-600 transition-colors hover:text-earth-700"
		>
			{label}
			<ArrowRight className="size-3.5" strokeWidth={2} aria-hidden />
		</Link>
	);
}

function VehicleCompareCard({
	id,
	title,
	image,
	imageAlt,
	capacity,
	cost,
	advantages,
	bestFor,
}: (typeof SAFARI_VEHICLE_OPTIONS)[number]) {
	return (
		<article
			id={id}
			className="overflow-hidden rounded-xl bg-white ring-1 ring-sand-300/50"
		>
			<div className="aspect-video overflow-hidden">
				<Image
					src={image}
					alt={imageAlt}
					width={640}
					height={360}
					className="size-full object-cover"
				/>
			</div>
			<div className="px-5 py-5">
				<h3 className="font-playfair text-lg text-charcoal-900">{title}</h3>
				<p className="mt-2 font-body text-xs text-charcoal-600">
					<span className="font-medium text-charcoal-800">Capacity:</span>{" "}
					{capacity}
				</p>
				<p className="mt-1 font-body text-xs text-charcoal-600">
					<span className="font-medium text-charcoal-800">Cost:</span> {cost}
				</p>
				<p className="mt-4 font-display text-[0.625rem] font-medium uppercase tracking-display text-earth-600">
					Best For
				</p>
				<ul className="mt-2 space-y-1.5">
					{bestFor.slice(0, 2).map((item) => (
						<li
							key={item}
							className="font-body text-xs leading-relaxed text-charcoal-700"
						>
							{item}
						</li>
					))}
				</ul>
				<p className="mt-4 font-display text-[0.625rem] font-medium uppercase tracking-display text-earth-600">
					Key Advantage
				</p>
				<p className="mt-1 font-body text-xs leading-relaxed text-charcoal-700">
					{advantages[0]}
				</p>
			</div>
		</article>
	);
}

function ZoneGuideTable() {
	return (
		<div className="overflow-hidden rounded-xl ring-1 ring-sand-300/50">
			<div className="overflow-x-auto">
				<table className="w-full min-w-[32rem] border-collapse text-left">
					<thead>
						<tr className="bg-earth-600">
							<th className="px-4 py-3 font-display text-[0.625rem] font-medium uppercase tracking-display text-sand-50">
								Zone
							</th>
							<th className="px-4 py-3 font-display text-[0.625rem] font-medium uppercase tracking-display text-sand-50">
								Area
							</th>
							<th className="hidden px-4 py-3 font-display text-[0.625rem] font-medium uppercase tracking-display text-sand-50 sm:table-cell">
								Vehicle
							</th>
							<th className="hidden px-4 py-3 font-display text-[0.625rem] font-medium uppercase tracking-display text-sand-50 md:table-cell">
								Famous For
							</th>
						</tr>
					</thead>
					<tbody>
						{SAFARI_ZONES.map((zone, index) => (
							<tr
								key={zone.zone}
								className={index % 2 === 0 ? "bg-white" : "bg-sand-100/80"}
							>
								<td className="px-4 py-3 font-display text-sm font-medium text-earth-700">
									{zone.zone}
								</td>
								<td className="px-4 py-3 font-body text-sm text-charcoal-700">
									{zone.area}
								</td>
								<td className="hidden px-4 py-3 font-body text-sm text-charcoal-600 sm:table-cell">
									{zone.safariType}
								</td>
								<td className="hidden px-4 py-3 font-body text-sm text-charcoal-600 md:table-cell">
									{zone.famousFor}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function PlanFaqList() {
	const [openId, setOpenId] = useState<string | null>(PLAN_FAQS[0]?.id ?? null);

	return (
		<div className="space-y-3">
			{PLAN_FAQS.map((item) => {
				const isOpen = openId === item.id;
				return (
					<div
						key={item.id}
						className="overflow-hidden rounded-xl bg-white ring-1 ring-sand-300/50"
					>
						<button
							type="button"
							onClick={() => setOpenId(isOpen ? null : item.id)}
							className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sand-50 sm:px-6"
							aria-expanded={isOpen}
						>
							<span className="font-playfair text-base text-charcoal-900 lg:text-lg">
								{item.question}
							</span>
							<ChevronDown
								className={cn(
									"size-5 shrink-0 text-earth-600 transition-transform duration-200",
									isOpen && "rotate-180",
								)}
								aria-hidden
							/>
						</button>
						<AnimatePresence initial={false}>
							{isOpen ? (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.25 }}
									className="overflow-hidden"
								>
									<p className="border-t border-sand-300/60 px-5 py-4 font-body text-sm leading-[1.85] text-charcoal-700 sm:px-6">
										{item.answer}
									</p>
								</motion.div>
							) : null}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
}

export function PlanYourVisitPage() {
	const { title, subtitle, intro } = PLAN_YOUR_VISIT_CONTENT;
	const [
		gettingHere,
		bestTimeToVisit,
		bookSafari,
		chooseVehicle,
		safariZoneGuide,
		whereToStay,
		whatToCarry,
		safariDayGuide,
		travelTips,
		faqs,
	] = JOURNEY_STEPS;

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<section>
				<div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
					<header className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
						<h1 className="font-playfair text-3xl text-charcoal-900 lg:text-4xl">
							{title}
						</h1>
						<div className="mx-auto mt-5 h-px w-16 bg-muted-300" aria-hidden />
						<p className="mt-6 font-body text-base leading-relaxed text-charcoal-600 lg:text-lg">
							{subtitle}
						</p>
						<p className="mt-4 font-body text-sm leading-[1.85] text-charcoal-700">
							{intro}
						</p>
					</header>

					<div>
						<JourneySection {...gettingHere}>
							<div className="space-y-4">
								{GETTING_HERE.modes.map((mode) => (
									<ContentCard key={mode.title}>
										<h3 className="font-playfair text-lg text-charcoal-900">
											{mode.title}
										</h3>
										<p className="mt-3 font-body text-sm leading-relaxed text-charcoal-700">
											{mode.description}
										</p>
										{mode.details ? (
											<ul className="mt-4 space-y-2">
												{mode.details.map((detail) => (
													<li
														key={detail}
														className="font-body text-sm text-charcoal-600"
													>
														{detail}
													</li>
												))}
											</ul>
										) : null}
									</ContentCard>
								))}
							</div>
						</JourneySection>

						<JourneySection {...bestTimeToVisit}>
							<ContentCard>
								<div className="space-y-4">
									<p className="font-body text-sm leading-[1.85] text-charcoal-700">
										{BEST_TIME_TO_VISIT.peakSeason}
									</p>
									<p className="font-body text-sm leading-[1.85] text-charcoal-700">
										{BEST_TIME_TO_VISIT.summerSeason}
									</p>
									<p className="font-body text-sm leading-[1.85] text-charcoal-700">
										{BEST_TIME_TO_VISIT.closedSeason}
									</p>
								</div>
								<div className="mt-6 border-t border-sand-300/60 pt-6">
									<p className="font-display text-xs font-medium uppercase tracking-display text-earth-600">
										Month-by-Month Highlights
									</p>
									<ul className="mt-4 space-y-2">
										{BEST_TIME_TO_VISIT.monthlyHighlights.map((item) => (
											<li
												key={item}
												className="font-body text-sm leading-relaxed text-charcoal-700"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</ContentCard>
						</JourneySection>

						<JourneySection {...bookSafari}>
							<ContentCard>
								<p className="font-body text-sm leading-[1.85] text-charcoal-700">
									{BOOK_SAFARI_ADVANCE.intro}
								</p>
								<div className="mt-6">
									<BulletList items={BOOK_SAFARI_ADVANCE.bookingTips} />
								</div>
								<div className="mt-6 flex flex-wrap gap-4">
									<InlineLink
										to={BOOK_SAFARI_ADVANCE.timingsHref}
										label="Timings & Booking Guidelines"
									/>
									<InlineLink
										to={BOOK_SAFARI_ADVANCE.safariHref}
										label="Jeep & Canter Safari"
									/>
								</div>
							</ContentCard>
						</JourneySection>

						<JourneySection {...chooseVehicle}>
							<div className="grid gap-5 sm:grid-cols-2">
								{SAFARI_VEHICLE_OPTIONS.map((vehicle) => (
									<VehicleCompareCard key={vehicle.id} {...vehicle} />
								))}
							</div>
							<InlineLink
								to={BOOK_SAFARI_ADVANCE.safariHref}
								label="Full Gypsy & Canter Comparison"
							/>
						</JourneySection>

						<JourneySection {...safariZoneGuide}>
							<ContentCard>
								<p className="font-body text-sm leading-[1.85] text-charcoal-700">
									{SAFARI_ZONE_GUIDE.intro}
								</p>
								<div className="mt-6">
									<BulletList items={SAFARI_ZONE_GUIDE.tips} />
								</div>
							</ContentCard>
							<div className="mt-5">
								<ZoneGuideTable />
							</div>
							<InlineLink
								to={SAFARI_ZONE_GUIDE.zonesHref}
								label="Full Zone Guide"
							/>
						</JourneySection>

						<JourneySection {...whereToStay}>
							<ContentCard>
								<p className="font-body text-sm leading-[1.85] text-charcoal-700">
									{WHERE_TO_STAY.body}
								</p>
								<div className="mt-6">
									<BulletList items={WHERE_TO_STAY.tips} />
								</div>
								<InlineLink
									to={WHERE_TO_STAY.stayHref}
									label="Browse Hotels & Resorts"
								/>
							</ContentCard>
						</JourneySection>

						<JourneySection {...whatToCarry}>
							<div className="grid gap-5 lg:grid-cols-2">
								{PACKING_LISTS.map((list) => (
									<ContentCard key={list.audience}>
										<h3 className="font-playfair text-lg text-charcoal-900">
											{list.audience}
										</h3>
										<div className="mt-4">
											<BulletList items={list.items} />
										</div>
									</ContentCard>
								))}
							</div>
						</JourneySection>

						<JourneySection {...safariDayGuide}>
							<p className="mb-5 font-body text-sm leading-relaxed text-charcoal-600">
								{SAFARI_DAY_GUIDE.intro}
							</p>
							<div className="grid gap-5 lg:grid-cols-2">
								<ContentCard>
									<h3 className="font-playfair text-lg text-earth-700">
										Do&apos;s
									</h3>
									<div className="mt-4">
										<BulletList items={SAFARI_DAY_GUIDE.dos} />
									</div>
								</ContentCard>
								<ContentCard>
									<h3 className="font-playfair text-lg text-sunset-600">
										Don&apos;ts
									</h3>
									<div className="mt-4">
										<BulletList items={SAFARI_DAY_GUIDE.donts} />
									</div>
								</ContentCard>
							</div>
							<div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
								{SAFARI_DAY_GUIDE.relatedLinks.map((link) => (
									<InlineLink
										key={link.href}
										to={link.href}
										label={link.label}
									/>
								))}
							</div>
						</JourneySection>

						<JourneySection {...travelTips}>
							<div className="grid gap-4 sm:grid-cols-2">
								{TRAVEL_TIPS.map((tip) => (
									<ContentCard key={tip.title}>
										<h3 className="font-playfair text-base text-charcoal-900">
											{tip.title}
										</h3>
										<p className="mt-2 font-body text-sm leading-relaxed text-charcoal-700">
											{tip.body}
										</p>
									</ContentCard>
								))}
							</div>
						</JourneySection>

						<JourneySection {...faqs} isLast>
							<PlanFaqList />
						</JourneySection>
					</div>
				</div>
			</section>
		</div>
	);
}
