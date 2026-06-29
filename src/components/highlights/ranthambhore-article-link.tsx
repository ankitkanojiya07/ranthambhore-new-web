import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

type RanthambhoreArticleLinkProps = {
	slug: string;
	className?: string;
	children: ReactNode;
};

export function RanthambhoreArticleLink({
	slug,
	className,
	children,
}: RanthambhoreArticleLinkProps) {
	return (
		<Link
			to="/highlights/ranthambhore-insights/$slug"
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
