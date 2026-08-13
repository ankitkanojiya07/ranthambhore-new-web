import { Image } from "#/util/Image";

const FONT_SIZE = "text-[clamp(2.8rem,6vw,7rem)]";

export function TaglineSection() {
	return (
		<section className="bg-sand-50 py-20 text-center" aria-label="Tagline">
			<div className="mx-auto max-w-7xl px-6">
				<p className="font-playfair text-sm uppercase tracking-display text-earth-700">
					India&apos;s Most Iconic Tiger Reserve
				</p>

				{/* Line 1: WHERE [image] TIGERS */}
				<div
					className={`mt-10 flex flex-wrap items-center justify-center gap-x-5 font-playfair uppercase tracking-display text-charcoal-900 leading-none ${FONT_SIZE}`}
				>
					<span>Where</span>
					<span
						className="inline-block aspect-square overflow-hidden rounded-full shrink-0"
						style={{ height: "1.5em" }}
					>
						<Image
							src="/Home/8.webp"
							alt=""
							width={96}
							height={96}
							className="size-full object-cover"
						/>
					</span>
					<span>Tigers</span>
				</div>

				{/* Line 2: RULE THE [image] WILD */}
				<div
					className={`mt-4 flex flex-wrap items-center justify-center gap-x-5 font-playfair uppercase tracking-display text-charcoal-900 leading-none ${FONT_SIZE}`}
				>
					<span>Rule The</span>
					<span
						className="inline-block aspect-video overflow-hidden rounded-full shrink-0"
						style={{ height: "1.5em" }}
					>
						<Image
							src="/hero/10.webp"
							alt=""
							width={160}
							height={90}
							className="size-full object-cover"
						/>
					</span>
					<span>Wild</span>
				</div>

				<p className="mt-14 font-display text-3xl text-earth-700 leading-none">
					〜
				</p>
			</div>
		</section>
	);
}
