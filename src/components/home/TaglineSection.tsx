const FONT_SIZE = "text-[clamp(2.8rem,6vw,7rem)]";

export function TaglineSection() {
	return (
		<section className="bg-sand-50 py-20 text-center" aria-label="Tagline">
			<div className="mx-auto max-w-7xl px-6">
				<p className="font-playfair text-sm uppercase tracking-display text-earth-500">
					India's Most Iconic Tiger Reserve
				</p>

				{/* Line 1: WHERE [video] TIGERS */}
				<div
					className={`mt-10 flex flex-wrap items-center justify-center gap-x-5 font-playfair uppercase tracking-display text-charcoal-900 leading-none ${FONT_SIZE}`}
				>
					<span>Where</span>
					<span
						className="inline-block aspect-square rounded-full overflow-hidden shrink-0"
						style={{ height: "1.5em" }}
					>
						<video
							autoPlay
							muted
							loop
							playsInline
							src="/ASP_2993.mp4"
							className="size-full object-cover"
						/>
					</span>
					<span>Tigers</span>
				</div>

				{/* Line 2: RULE THE [video] WILD */}
				<div
					className={`mt-4 flex flex-wrap items-center justify-center gap-x-5 font-playfair uppercase tracking-display text-charcoal-900 leading-none ${FONT_SIZE}`}
				>
					<span>Rule The</span>
					<span
						className="inline-block aspect-video rounded-full overflow-hidden shrink-0"
						style={{ height: "1.5em" }}
					>
						<video
							autoPlay
							muted
							loop
							playsInline
							className="size-full object-cover"
						>
							<source src="/ASP_3008.MOV" type="video/quicktime" />
							<source src="/ASP_3008.MOV" type="video/mp4" />
						</video>
					</span>
					<span>Wild</span>
				</div>

				<p className="mt-14 font-display text-3xl text-charcoal-300 leading-none">
					〜
				</p>
			</div>
		</section>
	);
}
