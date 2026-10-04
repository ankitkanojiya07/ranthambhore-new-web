import {
	HOSPITALITY_PURPOSE_SIDE_COPY,
	HOSPITALITY_PURPOSE_WHEEL,
	type HospitalityPurposePillar,
	type HospitalityPurposeSegment,
} from "#/lib/conservation";
import { cn } from "#/lib/utils";
import { Image } from "#/util/Image";

const SIZE = 1000;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R_OUTER = 492;
const R_INNER_RING = 318;
const R_CENTER = 198;
const SEGMENT_ANGLE = 40;
const PILLAR_ANGLE = 120;

type FlatSegment = HospitalityPurposeSegment & {
	startAngle: number;
	endAngle: number;
	midAngle: number;
};

function polar(cx: number, cy: number, r: number, angleDeg: number) {
	const rad = (angleDeg * Math.PI) / 180;
	return {
		x: cx + r * Math.sin(rad),
		y: cy - r * Math.cos(rad),
	};
}

function donutWedge(
	cx: number,
	cy: number,
	rInner: number,
	rOuter: number,
	startAngle: number,
	endAngle: number,
) {
	const startOuter = polar(cx, cy, rOuter, startAngle);
	const endOuter = polar(cx, cy, rOuter, endAngle);
	const startInner = polar(cx, cy, rInner, endAngle);
	const endInner = polar(cx, cy, rInner, startAngle);
	const largeArc = endAngle - startAngle > 180 ? 1 : 0;

	return [
		`M ${startOuter.x} ${startOuter.y}`,
		`A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
		`L ${startInner.x} ${startInner.y}`,
		`A ${rInner} ${rInner} 0 ${largeArc} 0 ${endInner.x} ${endInner.y}`,
		"Z",
	].join(" ");
}

function flattenSegments(
	pillars: readonly HospitalityPurposePillar[],
): FlatSegment[] {
	const segments: FlatSegment[] = [];
	let angle = 0;

	for (const pillar of pillars) {
		for (const segment of pillar.segments) {
			const startAngle = angle;
			const endAngle = angle + SEGMENT_ANGLE;
			segments.push({
				...segment,
				startAngle,
				endAngle,
				midAngle: startAngle + SEGMENT_ANGLE / 2,
			});
			angle = endAngle;
		}
	}

	return segments;
}

function segmentById(
	pillars: readonly HospitalityPurposePillar[],
	id: string,
): HospitalityPurposeSegment | undefined {
	for (const pillar of pillars) {
		const match = pillar.segments.find((segment) => segment.id === id);
		if (match) return match;
	}
	return undefined;
}

function SideCopyColumn({
	ids,
	pillars,
	align,
}: {
	ids: readonly string[];
	pillars: readonly HospitalityPurposePillar[];
	align: "left" | "right";
}) {
	return (
		<ul
			className={cn(
				"flex flex-col justify-center gap-7 lg:gap-9",
				align === "left" ? "text-right" : "text-left",
			)}
		>
			{ids.map((id) => {
				const segment = segmentById(pillars, id);
				if (!segment) return null;
				return (
					<li key={id}>
						<p className="font-playfair text-sm font-bold uppercase tracking-[0.04em] text-charcoal-900 lg:text-base">
							{segment.title}
						</p>
						<p className="mt-1.5 font-body text-sm leading-relaxed text-charcoal-600 lg:text-[0.9375rem]">
							{segment.description}
						</p>
					</li>
				);
			})}
		</ul>
	);
}

function WheelSvg({
	pillars,
	segments,
}: {
	pillars: readonly HospitalityPurposePillar[];
	segments: FlatSegment[];
}) {
	const { brand, tagline } = HOSPITALITY_PURPOSE_WHEEL;

	return (
		<svg
			viewBox={`0 0 ${SIZE} ${SIZE}`}
			className="mx-auto h-auto w-full"
			role="img"
			aria-label={`${brand} — ${tagline}. Environmental, Social, and Governance initiatives wheel.`}
		>
			<title>{`${brand} — ${tagline}`}</title>

			{/* Outer segments — title + icon only */}
			{segments.map((segment) => {
				const Icon = segment.icon;
				const flip = segment.midAngle > 90 && segment.midAngle < 270;
				const rotation = flip ? segment.midAngle + 180 : segment.midAngle;
				const labelPoint = polar(
					CX,
					CY,
					(R_OUTER + R_INNER_RING) / 2 + 8,
					segment.midAngle,
				);

				return (
					<g
						key={segment.id}
						className="origin-center transition-[filter] duration-200 hover:brightness-105"
					>
						<path
							d={donutWedge(
								CX,
								CY,
								R_INNER_RING,
								R_OUTER,
								segment.startAngle,
								segment.endAngle,
							)}
							fill={segment.color}
							stroke="#f7f3ea"
							strokeWidth={4}
						/>
						<g
							transform={`translate(${labelPoint.x} ${labelPoint.y}) rotate(${rotation})`}
						>
							<foreignObject x={-84} y={-48} width={168} height={96}>
								<div
									className={cn(
										"flex h-full w-full items-center justify-center px-1 text-center",
										flip ? "flex-col-reverse gap-1.5" : "flex-col gap-1.5",
									)}
									style={{ color: segment.textColor }}
								>
									<Icon
										className="mx-auto size-6 shrink-0"
										strokeWidth={2.25}
										aria-hidden
									/>
									<p
										className="font-playfair text-[16px] uppercase leading-tight tracking-[0.03em]"
										style={{ fontWeight: 700 }}
									>
										{segment.title}
									</p>
								</div>
							</foreignObject>
						</g>
					</g>
				);
			})}

			{/* Inner pillar ring */}
			{pillars.map((pillar, index) => {
				const startAngle = index * PILLAR_ANGLE;
				const endAngle = startAngle + PILLAR_ANGLE;
				const midAngle = startAngle + PILLAR_ANGLE / 2;
				const flip = midAngle > 90 && midAngle < 270;
				const rotation = flip ? midAngle + 180 : midAngle;
				const labelPoint = polar(
					CX,
					CY,
					(R_INNER_RING + R_CENTER) / 2,
					midAngle,
				);

				return (
					<g key={pillar.id}>
						<path
							d={donutWedge(
								CX,
								CY,
								R_CENTER,
								R_INNER_RING,
								startAngle,
								endAngle,
							)}
							fill={pillar.color}
							stroke="#f7f3ea"
							strokeWidth={4}
						/>
						<g
							transform={`translate(${labelPoint.x} ${labelPoint.y}) rotate(${rotation})`}
						>
							<foreignObject x={-96} y={-20} width={192} height={40}>
								<div
									className="flex h-full w-full items-center justify-center"
									style={{ color: pillar.textColor }}
								>
									<p
										className="font-playfair text-[18px] uppercase tracking-[0.14em]"
										style={{ fontWeight: 700 }}
									>
										{pillar.label}
									</p>
								</div>
							</foreignObject>
						</g>
					</g>
				);
			})}

			{/* Center — logo only */}
			<circle
				cx={CX}
				cy={CY}
				r={R_CENTER - 2}
				fill="#ffffff"
				stroke="#e8e0d4"
				strokeWidth={2}
			/>
			<foreignObject x={CX - 100} y={CY - 100} width={200} height={200}>
				<div className="flex h-full w-full items-center justify-center p-4">
					<Image
						src="/logo.webp"
						alt={brand}
						width={160}
						height={160}
						className="h-auto w-[70%] object-contain"
					/>
				</div>
			</foreignObject>
		</svg>
	);
}

function MobilePillarStack({
	pillars,
}: {
	pillars: readonly HospitalityPurposePillar[];
}) {
	return (
		<div className="space-y-5 md:hidden">
			{pillars.map((pillar) => {
				const PillarIcon = pillar.icon;
				return (
					<div
						key={pillar.id}
						className="overflow-hidden rounded-2xl ring-1 ring-sand-300/60"
					>
						<div
							className="flex items-center gap-3 px-5 py-4"
							style={{ backgroundColor: pillar.color, color: pillar.textColor }}
						>
							<span className="flex size-9 items-center justify-center rounded-lg bg-white/50">
								<PillarIcon
									className="size-4.5"
									strokeWidth={1.6}
									aria-hidden
								/>
							</span>
							<h3 className="font-display text-sm font-medium uppercase tracking-display">
								{pillar.label}
							</h3>
						</div>
						<ul>
							{pillar.segments.map((segment) => {
								const Icon = segment.icon;
								return (
									<li
										key={segment.id}
										className="flex gap-3 border-t border-white/40 px-5 py-4"
										style={{
											backgroundColor: segment.color,
											color: segment.textColor,
										}}
									>
										<span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-black/5">
											<Icon className="size-4" strokeWidth={1.6} aria-hidden />
										</span>
										<div>
											<p className="font-display text-xs font-medium uppercase tracking-display">
												{segment.title}
											</p>
											<p className="mt-1 font-body text-sm leading-relaxed opacity-95">
												{segment.description}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
}

export function HospitalityPurposeWheel() {
	const pillars = HOSPITALITY_PURPOSE_WHEEL.pillars;
	const segments = flattenSegments(pillars);

	return (
		<div className="mx-auto w-full max-w-7xl">
			<div className="hidden items-center gap-6 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_minmax(0,0.9fr)] lg:gap-10">
				<SideCopyColumn
					ids={HOSPITALITY_PURPOSE_SIDE_COPY.left}
					pillars={pillars}
					align="left"
				/>
				<WheelSvg pillars={pillars} segments={segments} />
				<SideCopyColumn
					ids={HOSPITALITY_PURPOSE_SIDE_COPY.right}
					pillars={pillars}
					align="right"
				/>
			</div>
			<MobilePillarStack pillars={pillars} />
		</div>
	);
}
