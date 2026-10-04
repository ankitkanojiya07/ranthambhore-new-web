/** Canonical production origin — override with VITE_SITE_URL when needed. */
export const SITE_URL = (
	import.meta.env.VITE_SITE_URL ?? "https://ranthambhor.com"
).replace(/\/$/, "");

export const SITE = {
	name: "Ranthambhor.com",
	shortName: "Ranthambhore",
	url: SITE_URL,
	locale: "en_IN",
	defaultTitle:
		"Ranthambore National Park Guide | Tigers, Safari & Travel — Ranthambhor.com",
	defaultDescription:
		"The practical field guide to Ranthambore National Park — tigers, safari zones, wildlife, conservation, and how to plan a visit. Written by people who work in Sawai Madhopur.",
	defaultOgImage: "/hero/8.webp",
	sameAs: [
		"https://www.instagram.com/ranthambhoreregencyhotel/",
		"https://www.facebook.com/ranthambhoreregency",
	],
} as const;

export type BreadcrumbCrumb = {
	name: string;
	path: string;
};

export type PageSeoInput = {
	title: string;
	description: string;
	path: string;
	image?: string;
	ogType?: "website" | "article";
	noindex?: boolean;
	/** ISO date — emits og:updated_time / article:modified_time for freshness. */
	dateModified?: string;
	breadcrumbs?: BreadcrumbCrumb[];
	jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function absoluteUrl(path = "/"): string {
	if (path.startsWith("http://") || path.startsWith("https://")) {
		return path;
	}
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function organizationJsonLd(): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE.name,
		url: SITE_URL,
		logo: absoluteUrl("/logo.webp"),
		description: SITE.defaultDescription,
		areaServed: {
			"@type": "Place",
			name: "Ranthambore National Park, Sawai Madhopur, Rajasthan, India",
		},
		sameAs: [...SITE.sameAs],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer support",
			email: "ranthambhoreregency@gmail.com",
			availableLanguage: ["English", "Hindi"],
		},
	};
}

export function websiteJsonLd(): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE.name,
		url: SITE_URL,
		description: SITE.defaultDescription,
		inLanguage: "en-IN",
		publisher: {
			"@type": "Organization",
			name: SITE.name,
			url: SITE_URL,
		},
	};
}

export function breadcrumbJsonLd(
	crumbs: BreadcrumbCrumb[],
): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: crumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.path),
		})),
	};
}

export function faqPageJsonLd(
	faqs: { question: string; answer: string }[],
): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

export function touristAttractionJsonLd(input: {
	name: string;
	description: string;
	path: string;
	image?: string;
	latitude?: number;
	longitude?: number;
}): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "TouristAttraction",
		name: input.name,
		description: input.description,
		url: absoluteUrl(input.path),
		image: absoluteUrl(input.image ?? SITE.defaultOgImage),
		address: {
			"@type": "PostalAddress",
			addressLocality: "Sawai Madhopur",
			addressRegion: "Rajasthan",
			addressCountry: "IN",
		},
		...(input.latitude != null && input.longitude != null
			? {
					geo: {
						"@type": "GeoCoordinates",
						latitude: input.latitude,
						longitude: input.longitude,
					},
				}
			: {}),
	};
}

export function articleJsonLd(input: {
	headline: string;
	description: string;
	path: string;
	image?: string;
	datePublished?: string;
	dateModified?: string;
}): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: input.headline,
		description: input.description,
		url: absoluteUrl(input.path),
		image: absoluteUrl(input.image ?? SITE.defaultOgImage),
		inLanguage: "en-IN",
		author: {
			"@type": "Organization",
			name: SITE.name,
			url: SITE_URL,
		},
		publisher: {
			"@type": "Organization",
			name: SITE.name,
			url: SITE_URL,
			logo: {
				"@type": "ImageObject",
				url: absoluteUrl("/logo.webp"),
			},
		},
		...(input.datePublished ? { datePublished: input.datePublished } : {}),
		...(input.dateModified ? { dateModified: input.dateModified } : {}),
		mainEntityOfPage: absoluteUrl(input.path),
	};
}

/**
 * Head payload for TanStack Router `head()`.
 * Uses a loose meta shape so `script:ld+json` is accepted by route typings.
 */
export type PageHeadResult = {
	meta: Array<Record<string, unknown>>;
	links: Array<{ rel: string; href: string }>;
};

export function buildPageHead(input: PageSeoInput): PageHeadResult {
	const canonical = absoluteUrl(input.path);
	const image = absoluteUrl(input.image ?? SITE.defaultOgImage);
	const robots = input.noindex
		? "noindex, nofollow"
		: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

	const meta: Array<Record<string, unknown>> = [
		{ title: input.title },
		{ name: "description", content: input.description },
		{ name: "robots", content: robots },
		{ property: "og:type", content: input.ogType ?? "website" },
		{ property: "og:site_name", content: SITE.name },
		{ property: "og:locale", content: SITE.locale },
		{ property: "og:title", content: input.title },
		{ property: "og:description", content: input.description },
		{ property: "og:url", content: canonical },
		{ property: "og:image", content: image },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: input.title },
		{ name: "twitter:description", content: input.description },
		{ name: "twitter:image", content: image },
	];

	if (input.dateModified) {
		meta.push(
			{ property: "og:updated_time", content: input.dateModified },
			{ property: "article:modified_time", content: input.dateModified },
		);
	}

	const schemas: Record<string, unknown>[] = [];
	if (input.breadcrumbs?.length) {
		schemas.push(breadcrumbJsonLd(input.breadcrumbs));
	}
	if (input.jsonLd) {
		schemas.push(
			...(Array.isArray(input.jsonLd) ? input.jsonLd : [input.jsonLd]),
		);
	}
	for (const schema of schemas) {
		meta.push({ "script:ld+json": schema });
	}

	return {
		meta,
		links: [{ rel: "canonical", href: canonical }],
	};
}

/** Soft planning CTA copy — encyclopedia pages should not hard-sell hotels. */
export const PLANNING_CTA = {
	label: "Planning your trip?",
	body: "Use our travel guide for seasons, safari logistics, and practical tips — then enquire when you are ready.",
	href: "/plan",
	linkLabel: "Plan your visit",
} as const;
