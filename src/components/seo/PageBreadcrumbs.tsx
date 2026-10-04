import { Link } from "@tanstack/react-router";
import type { BreadcrumbCrumb } from "#/lib/seo";

type PageBreadcrumbsProps = {
	crumbs: BreadcrumbCrumb[];
	className?: string;
};

export function PageBreadcrumbs({ crumbs, className }: PageBreadcrumbsProps) {
	if (crumbs.length === 0) {
		return null;
	}

	return (
		<nav aria-label="Breadcrumb" className={className}>
			<ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-[0.6875rem] uppercase tracking-display text-muted-400">
				{crumbs.map((crumb, index) => {
					const isLast = index === crumbs.length - 1;
					return (
						<li key={crumb.path} className="flex items-center gap-2">
							{index > 0 ? <span aria-hidden>/</span> : null}
							{isLast ? (
								<span className="text-charcoal-600" aria-current="page">
									{crumb.name}
								</span>
							) : (
								<Link
									to={crumb.path}
									className="transition-colors hover:text-earth-700"
								>
									{crumb.name}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
