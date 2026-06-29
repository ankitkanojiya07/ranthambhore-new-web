export type HighlightImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type RanthambhoreArticle = {
	id: string;
	category: string;
	title: string;
	excerpt: string;
	author?: string;
	date: string;
	image: HighlightImage;
	readTime?: string;
	shares?: number;
	comments?: number;
	isNew?: boolean;
};

export type ParkTrendingColumn = {
	id: string;
	image: HighlightImage;
	items: {
		id: string;
		date: string;
		title: string;
		featured?: boolean;
	}[];
};
