import { Image } from "@unpic/react";
import { getPageImage } from "#/lib/page-images";
import { cn } from "#/lib/utils";
import { SectionHeading } from "./SectionHeading";

export interface ContentBlock {
	id?: string;
	heading: string;
	body: string | string[];
	items?: string[];
	image?: string;
	imageAlt?: string;
	imageClassName?: string;
	imageWrapperClassName?: string;
	stretchImage?: boolean;
	/** full = centered prose only; split = image + text side by side; card = highlighted card grid for items; card-text = text-only card (groups side by side) */
	layout?: "full" | "split" | "card" | "card-text";
	eyebrow?: string;
	dark?: boolean;
}

interface ContentSectionProps {
	eyebrow?: string;
	title?: string;
	blocks: ContentBlock[];
	className?: string;
	imageOffset?: number;
}

function DetailGrid({
	items,
	dark = false,
}: {
	items: string[];
	dark?: boolean;
}) {
	return (
		<dl className="mt-8 grid gap-3 sm:grid-cols-2">
			{items.map((item) => {
				const colonIdx = item.indexOf(":");
				const hasLabel = colonIdx > 0 && colonIdx < 40;
				const dt = hasLabel ? item.slice(0, colonIdx).trim() : null;
				const dd = hasLabel ? item.slice(colonIdx + 1).trim() : item;

				return (
					<div
						key={item.slice(0, 60)}
						className={cn(
							"rounded-sm px-5 py-4 ring-1",
							dark
								? "bg-charcoal-800/60 ring-charcoal-700"
								: "bg-cream-100 ring-muted-300",
						)}
					>
						{dt ? (
							<>
								<dt
									className={cn(
										"font-display text-[10px] uppercase tracking-display",
										dark ? "text-sunset-400" : "text-earth-500",
									)}
								>
									{dt}
								</dt>
								<dd
									className={cn(
										"mt-1.5 font-body text-sm leading-relaxed",
										dark ? "text-sand-200/90" : "text-charcoal-800",
									)}
								>
									{dd}
								</dd>
							</>
						) : (
							<dd
								className={cn(
									"flex gap-2.5 font-body text-sm leading-relaxed",
									dark ? "text-sand-200/90" : "text-charcoal-800",
								)}
							>
								<span className="mt-1.5 size-2 shrink-0 rotate-45 bg-sunset-500" />
								{item}
							</dd>
						)}
					</div>
				);
			})}
		</dl>
	);
}

function CardTextBlock({ block }: { block: ContentBlock }) {
	const paragraphs = Array.isArray(block.body) ? block.body : [block.body];
	const dark = block.dark ?? false;

	return (
		<article
			className={cn(
				"flex h-full flex-col rounded-sm px-6 py-8 ring-1 lg:px-8 lg:py-10",
				dark
					? "bg-charcoal-900 ring-charcoal-700"
					: "bg-cream-100 ring-muted-300",
			)}
		>
			{block.eyebrow && (
				<p
					className={cn(
						"font-display text-xs uppercase tracking-display",
						dark ? "text-sunset-400" : "text-earth-500",
					)}
				>
					{block.eyebrow}
				</p>
			)}
			<h2
				className={cn(
					"font-playfair text-2xl lg:text-3xl",
					block.eyebrow ? "mt-2" : "",
					dark ? "text-sand-50" : "text-charcoal-900",
				)}
			>
				{block.heading}
			</h2>
			<div
				className={cn(
					"mt-3 h-px w-12",
					dark ? "bg-sunset-500/50" : "bg-sunset-500/40",
				)}
			/>
			<div className="mt-5 flex-1 space-y-4">
				{paragraphs.map((paragraph) => (
					<p
						key={paragraph.slice(0, 40)}
						className={cn(
							"font-body text-base leading-[1.85]",
							dark ? "text-sand-200/85" : "text-charcoal-700",
						)}
					>
						{paragraph}
					</p>
				))}
			</div>
		</article>
	);
}

function ContentBlockArticle({
	block,
	index,
	imageOffset = 0,
}: {
	block: ContentBlock;
	index: number;
	imageOffset?: number;
}) {
	const paragraphs = Array.isArray(block.body) ? block.body : [block.body];
	const layout = block.layout ?? (index === 0 ? "full" : "split");
	const imageSrc = block.image ?? getPageImage(index + imageOffset);
	const imageAlt = block.imageAlt ?? block.heading;
	const imageFirst = index % 2 === 1;
	const dark = block.dark ?? false;

	const headingEl = (
		<>
			{block.eyebrow && (
				<p
					className={cn(
						"font-display text-xs uppercase tracking-display",
						dark ? "text-sunset-400" : "text-earth-500",
					)}
				>
					{block.eyebrow}
				</p>
			)}
			<h2
				className={cn(
					"font-playfair text-2xl lg:text-3xl",
					block.eyebrow ? "mt-2" : "",
					dark ? "text-sand-50" : "text-charcoal-900",
				)}
			>
				{block.heading}
			</h2>
			<div
				className={cn(
					"mt-3 h-px w-12",
					dark ? "bg-sunset-500/50" : "bg-sunset-500/40",
				)}
			/>
		</>
	);

	if (layout === "full") {
		return (
			<article
				id={block.id}
				className={cn(
					"mx-auto max-w-3xl scroll-mt-24 rounded-sm px-6 py-10 lg:px-10",
					dark && "bg-charcoal-900",
				)}
			>
				{headingEl}
				<div className="mt-6 space-y-4">
					{paragraphs.map((paragraph) => (
						<p
							key={paragraph.slice(0, 40)}
							className={cn(
								"font-body text-base leading-[1.85]",
								dark ? "text-sand-200/85" : "text-charcoal-700",
							)}
						>
							{paragraph}
						</p>
					))}
				</div>
				{block.items && block.items.length > 0 && (
					<DetailGrid items={block.items} dark={dark} />
				)}
			</article>
		);
	}

	if (layout === "card" && block.items) {
		return (
			<article>
				<div className="mb-10 text-center">
					{headingEl}
					{paragraphs[0] && (
						<p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-charcoal-600">
							{paragraphs[0]}
						</p>
					)}
				</div>
				<DetailGrid items={block.items} />
			</article>
		);
	}

	const textContent = (
		<div className="flex flex-col justify-center">
			{headingEl}
			<div className="mt-5 space-y-4">
				{paragraphs.map((paragraph) => (
					<p
						key={paragraph.slice(0, 40)}
						className={cn(
							"font-body text-base leading-[1.85]",
							dark ? "text-sand-200/85" : "text-charcoal-700",
						)}
					>
						{paragraph}
					</p>
				))}
			</div>
			{block.items && block.items.length > 0 && (
				<DetailGrid items={block.items} dark={dark} />
			)}
		</div>
	);

	const imageContent = (
		<div
			className={cn(
				"overflow-hidden rounded-sm ring-1 ring-muted-300",
				block.stretchImage && "h-full",
				block.imageWrapperClassName,
			)}
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				layout="fullWidth"
				className={cn(
					block.imageClassName ??
						(block.stretchImage
							? "h-full min-h-[280px] w-full object-cover lg:min-h-0"
							: "aspect-4/3 w-full object-cover"),
				)}
			/>
		</div>
	);

	const imageColumnClass = cn(
		"flex items-center justify-center",
		imageFirst ? "lg:justify-end lg:pr-4" : "lg:justify-start lg:pl-4",
		block.stretchImage && "h-full lg:items-stretch",
	);

	return (
		<article
			id={block.id}
			className={cn(
				"grid scroll-mt-24 gap-10 rounded-sm lg:gap-16",
				block.stretchImage ? "items-stretch" : "items-center",
				dark && "bg-charcoal-900 px-6 py-12 lg:px-12",
				"lg:grid-cols-2",
			)}
		>
			{imageFirst ? (
				<>
					<div className={imageColumnClass}>{imageContent}</div>
					{textContent}
				</>
			) : (
				<>
					{textContent}
					<div className={imageColumnClass}>{imageContent}</div>
				</>
			)}
		</article>
	);
}

export function ContentSection({
	eyebrow,
	title,
	blocks,
	className,
	imageOffset = 0,
}: ContentSectionProps) {
	return (
		<section
			className={cn("bg-sand-50 px-6 py-20 lg:px-8 lg:py-28", className)}
		>
			<div className="mx-auto max-w-7xl">
				{eyebrow && title && (
					<div className="mb-16">
						<SectionHeading eyebrow={eyebrow} title={title} centered />
					</div>
				)}

				<div className="space-y-24 lg:space-y-32">
					{(() => {
						const elements: React.ReactNode[] = [];
						let index = 0;

						while (index < blocks.length) {
							const block = blocks[index];
							const layout = block.layout ?? (index === 0 ? "full" : "split");

							if (layout === "card-text") {
								const group: ContentBlock[] = [];
								let groupIndex = index;

								while (groupIndex < blocks.length) {
									const groupBlock = blocks[groupIndex];
									const groupLayout =
										groupBlock.layout ?? (groupIndex === 0 ? "full" : "split");
									if (groupLayout !== "card-text") break;
									group.push(groupBlock);
									groupIndex++;
								}

								elements.push(
									<div
										key={group.map((item) => item.heading).join("-")}
										className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8"
									>
										{group.map((item) => (
											<CardTextBlock key={item.heading} block={item} />
										))}
									</div>,
								);
								index = groupIndex;
								continue;
							}

							elements.push(
								<ContentBlockArticle
									key={block.heading}
									block={block}
									index={index}
									imageOffset={imageOffset}
								/>,
							);
							index++;
						}

						return elements;
					})()}
				</div>
			</div>
		</section>
	);
}
