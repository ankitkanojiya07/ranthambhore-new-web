export type HighlightImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type SafariHighlight = {
	id: string;
	title: string;
	zone: string;
	date: string;
	description: string;
	image: HighlightImage;
};

export type TrendingColumn = {
	id: string;
	image: HighlightImage;
	items: {
		id: string;
		date: string;
		title: string;
		featured?: boolean;
	}[];
};

export type SafariZoneCard = {
	id: string;
	zoneNumber: number;
	slug: string;
	name: string;
	tagline: string;
	description: string;
	safariType: string | null;
	image: HighlightImage;
	bestFor: string;
	insights: string[];
};
