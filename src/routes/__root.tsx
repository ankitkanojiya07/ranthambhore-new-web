import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";
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
				title: "Ranthambhore Wildlife Hotel",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
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
