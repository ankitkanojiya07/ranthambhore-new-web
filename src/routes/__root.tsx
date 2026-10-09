import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { organizationJsonLd, SITE, websiteJsonLd } from "#/lib/seo";
import voncaSemibold from "../fonts/vonca-semibold.woff2?url";
import appCss from "../styles.css?url";

export interface RouterContext {
	queryClient: QueryClient;
}

function NotFound() {
	return (
		<div>
			<h1>404</h1>
			<p>Page not found</p>
		</div>
	);
}

const ClientDevtools = import.meta.env.DEV
	? lazy(() =>
			import("#/components/layout/ClientDevtools").then((mod) => ({
				default: mod.ClientDevtools,
			})),
		)
	: () => null;

const CRITICAL_CSS = `html,body{background:#faf5ed;color:#33261e;margin:0}#hero{min-height:100dvh}.hero-frame-mask{-webkit-mask-image:url("/hero/frame.webp");mask-image:url("/hero/frame.webp");-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}`;

export const Route = createRootRouteWithContext<RouterContext>()({
	notFoundComponent: NotFound,
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: SITE.defaultTitle,
			},
			{
				name: "description",
				content: SITE.defaultDescription,
			},
			{
				name: "robots",
				content:
					"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
			},
			{
				name: "theme-color",
				content: "#faf5ed",
			},
			{
				name: "author",
				content: SITE.name,
			},
			{
				property: "og:site_name",
				content: SITE.name,
			},
			{
				property: "og:locale",
				content: SITE.locale,
			},
			{
				"script:ld+json": organizationJsonLd(),
			},
			{
				"script:ld+json": websiteJsonLd(),
			},
		],
		links: [
			{
				rel: "preload",
				href: voncaSemibold,
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: appCss,
				as: "style",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-IN">
			<head>
				<HeadContent />
				<style>{CRITICAL_CSS}</style>
				<link rel="stylesheet" href={appCss} />
			</head>
			<body>
				{children}
				{import.meta.env.DEV ? (
					<Suspense fallback={null}>
						<ClientDevtools />
					</Suspense>
				) : null}
				<Scripts />
			</body>
		</html>
	);
}
