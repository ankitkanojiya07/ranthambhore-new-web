import { getContentReview } from "#/lib/content-freshness";

type LastReviewedProps = {
	date?: string;
	path?: string;
	note?: string;
};

/** Visible freshness signal for factual guides (E-E-A-T). */
export function LastReviewed({ date, path, note }: LastReviewedProps) {
	const review = path ? getContentReview(path) : undefined;
	const resolvedDate = date ?? review?.lastReviewed;
	if (!resolvedDate) {
		return null;
	}

	const resolvedNote = note ?? review?.note;
	const formatted = new Intl.DateTimeFormat("en-IN", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(new Date(resolvedDate));

	return (
		<p className="font-body text-xs text-muted-400">
			<span className="font-medium text-charcoal-600">Last reviewed:</span>{" "}
			<time dateTime={resolvedDate}>{formatted}</time>
			{resolvedNote ? ` — ${resolvedNote}` : null}
		</p>
	);
}
