import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import {
	getOtherTigers,
	type TigerMeta,
	type TigerProfile,
	type TigerStorySection,
} from "#/lib/tigers";
import { cn } from "#/lib/utils";
import { Image } from "#/util/Image";

function statusBadgeClass(status: string): string {
	const normalized = status.toLowerCase();
	if (normalized.includes("dead")) {
		return "bg-charcoal-800 text-sand-100";
	}
	if (normalized.includes("alive") || normalized.includes("live")) {
		return "bg-forest-600 text-sand-50";
	}
	if (normalized.includes("zoo") || normalized.includes("shifted")) {
		return "bg-earth-500 text-sand-50";
	}
	return "bg-sand-200 text-charcoal-800";
}

function TigerMetaTable({ meta }: { meta: TigerMeta }) {
	const rows: { label: string; value: string }[] = [
		{ label: "Tiger Code", value: meta.code },
		{ label: "First Seen", value: meta.firstSeen },
		{ label: "Gender", value: meta.gender },
		{ label: "Identification Sign", value: meta.identificationSign },
		{ label: "Age", value: meta.age },
		{ label: "Zone", value: meta.zone },
		{ label: "Status", value: meta.status },
	];

	return (
		<div className="overflow-hidden rounded-xl bg-white ring-1 ring-sand-300/60">
			<table className="w-full text-left">
				<tbody>
					{rows.map((row, index) => (
						<tr
							key={row.label}
							className={cn(
								index % 2 === 0 ? "bg-sand-50/60" : "bg-white",
								"border-b border-sand-300/50 last:border-b-0",
							)}
						>
							<th
								scope="row"
								className="w-[42%] px-5 py-3.5 font-display text-[0.6875rem] font-medium uppercase tracking-display text-muted-400"
							>
								{row.label}
							</th>
							<td className="px-5 py-3.5 font-body text-sm text-charcoal-800">
								{row.label === "Status" ? (
									<span
										className={cn(
											"inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
											statusBadgeClass(row.value),
										)}
									>
										{row.value}
									</span>
								) : (
									row.value
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function StorySection({ heading, body }: TigerStorySection) {
	const paragraphs = Array.isArray(body) ? body : [body];

	return (
		<article>
			<h2 className="font-playfair text-xl text-charcoal-900 lg:text-2xl">
				{heading}
			</h2>
			<div className="mt-4 h-px w-12 bg-earth-300/70" aria-hidden />
			<div className="mt-5 space-y-4">
				{paragraphs.map((paragraph) => (
					<p
						key={paragraph.slice(0, 48)}
						className="font-body text-[0.9375rem] leading-[1.85] text-charcoal-700 lg:text-base"
					>
						{paragraph}
					</p>
				))}
			</div>
		</article>
	);
}

function OtherTigerCard({ tiger }: { tiger: TigerProfile }) {
	return (
		<Link
			to="/about/tigers/$slug"
			params={{ slug: tiger.slug }}
			className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(45,35,25,0.06)] ring-1 ring-sand-300/60 transition-shadow hover:shadow-[0_8px_32px_rgba(45,35,25,0.1)]"
		>
			<div className="aspect-4/3 overflow-hidden">
				<Image
					src={tiger.image}
					alt={tiger.imageAlt}
					width={480}
					height={360}
					className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="px-4 py-4">
				<p className="font-display text-[0.625rem] font-medium uppercase tracking-display text-forest-600">
					{tiger.meta.code}
				</p>
				<h3 className="mt-1 font-playfair text-lg text-charcoal-900 transition-colors group-hover:text-forest-700">
					{tiger.name}
				</h3>
				<p className="mt-1 line-clamp-2 font-body text-xs leading-relaxed text-charcoal-600">
					{tiger.excerpt}
				</p>
			</div>
		</Link>
	);
}

export function TigerDetailPage({ tiger }: { tiger: TigerProfile }) {
	const otherTigers = getOtherTigers(tiger.slug);

	return (
		<div className="bg-sand-50 pt-28 lg:pt-32">
			<article className="px-6 pb-14 lg:px-8 lg:pb-20">
				<div className="mx-auto max-w-4xl">
					<Link
						to="/about/tigers"
						className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-display text-charcoal-700 transition-colors hover:text-forest-600"
					>
						<ArrowLeft className="size-3.5" />
						All Tigers of Ranthambore
					</Link>

					<div className="mt-8 overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(45,35,25,0.1)]">
						<Image
							src={tiger.image}
							alt={tiger.imageAlt}
							width={1200}
							height={675}
							className="aspect-video w-full object-cover"
						/>
					</div>

					<p className="mt-8 font-display text-xs uppercase tracking-display text-forest-600">
						{tiger.meta.code}
					</p>
					<h1 className="mt-2 font-playfair text-3xl leading-tight text-charcoal-900 lg:text-4xl">
						{tiger.name}
					</h1>
					<p className="mt-3 font-body text-lg italic text-earth-600">
						{tiger.tagline}
					</p>

					<div className="mt-8">
						<TigerMetaTable meta={tiger.meta} />
					</div>

					<div className="mt-12 space-y-10">
						{tiger.sections.map((section) => (
							<StorySection key={section.heading} {...section} />
						))}
					</div>
				</div>
			</article>

			<section className="border-t border-sand-300/80 bg-sand-100/40">
				<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
					<header className="mb-10">
						<h2 className="font-playfair text-2xl text-charcoal-900 lg:text-3xl">
							Other Tigers of Ranthambore
						</h2>
						<p className="mt-3 font-body text-sm text-charcoal-600 lg:text-base">
							Explore more legendary individuals from Ranthambore&apos;s tiger
							dynasty.
						</p>
						<div className="mt-5 h-px w-full bg-earth-300/70" aria-hidden />
					</header>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{otherTigers.map((other) => (
							<OtherTigerCard key={other.slug} tiger={other} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
