const META_TITLE_SUFFIX = " | Ranthambhore.com";
const EXCERPT_MAX_LENGTH = 160;
const META_TITLE_MAX_LENGTH = 60;

export function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}

function stripContentToPlainText(content: string): string {
	return content
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/!\[[^\]]*]\([^)]*\)/g, " ")
		.replace(/\[([^\]]*)]\([^)]*\)/g, "$1")
		.replace(/<[^>]+>/g, " ")
		.replace(/[#>*_~-]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export function generateExcerpt(content: string): string {
	const plain = stripContentToPlainText(content);

	if (plain.length <= EXCERPT_MAX_LENGTH) {
		return plain;
	}

	const truncated = plain.slice(0, EXCERPT_MAX_LENGTH);
	const lastSpace = truncated.lastIndexOf(" ");
	const end = lastSpace > 0 ? lastSpace : EXCERPT_MAX_LENGTH;

	return `${truncated.slice(0, end).trim()}…`;
}

export function generateMetaTitle(title: string): string {
	const fullTitle = `${title.trim()}${META_TITLE_SUFFIX}`;

	if (fullTitle.length <= META_TITLE_MAX_LENGTH) {
		return fullTitle;
	}

	const available = META_TITLE_MAX_LENGTH - META_TITLE_SUFFIX.length - 1;
	return `${title.trim().slice(0, available).trim()}…${META_TITLE_SUFFIX}`;
}
