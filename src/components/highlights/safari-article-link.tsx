import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

type SafariArticleLinkProps = {
	slug: string;
	className?: string;
	children: ReactNode;
};

export function SafariArticleLink({
	slug,
	className,
	children,
}: SafariArticleLinkProps) {
	return (
		<Link
			to="/highlights/safari-insights/$slug"
			params={{ slug }}
			className={cn(
				"transition-colors hover:text-tiger-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiger-500/40",
				className,
			)}
		>
			{children}
		</Link>
	);
}
