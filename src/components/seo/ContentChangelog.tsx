import { getContentReview } from "#/lib/content-freshness";

type ContentChangelogProps = {
	path: string;
	heading?: string;
};

/** Optional visible changelog for substantive guide refreshes (Phase 3). */
export function ContentChangelog({
	path,
	heading = "What we updated",
}: ContentChangelogProps) {
	const review = getContentReview(path);
	if (!review?.changelog?.length) {
		return null;
	}

	return (
		<details className="mt-4 rounded-lg bg-sand-100/70 px-4 py-3 text-left ring-1 ring-sand-300/60">
			<summary className="cursor-pointer font-display text-[0.6875rem] font-medium uppercase tracking-display text-charcoal-600">
				{heading}
			</summary>
			<ul className="mt-3 list-disc space-y-1.5 pl-5 font-body text-xs leading-relaxed text-charcoal-600">
				{review.changelog.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</details>
	);
}
