import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "#/lib/utils";

type MarkdownContentProps = {
	content: string;
	className?: string;
};

function MarkdownLink({
	href,
	children,
	className,
	...props
}: ComponentProps<"a">) {
	if (!href) {
		return <span className={className}>{children}</span>;
	}

	if (href.startsWith("/") || href.startsWith("#")) {
		return (
			<Link to={href} className={className} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={href}
			className={className}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	);
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
	return (
		<div
			className={cn(
				"prose prose-charcoal max-w-none",
				"prose-headings:font-display prose-headings:text-charcoal-900",
				"prose-p:font-body prose-p:leading-relaxed prose-p:text-charcoal-800",
				"prose-a:text-tiger-500 prose-a:font-medium prose-a:no-underline hover:prose-a:text-tiger-600 hover:prose-a:underline",
				"prose-strong:text-charcoal-900",
				"prose-blockquote:border-sunset-500 prose-blockquote:text-earth-600 prose-blockquote:font-display prose-blockquote:italic",
				"prose-li:font-body prose-li:text-charcoal-800",
				className,
			)}
		>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					a: MarkdownLink,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
