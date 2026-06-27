import { Accordion } from "@base-ui/react/accordion";
import { Dialog } from "@base-ui/react/dialog";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import { FacebookIcon } from "#/icons/facebook.icon";
import { InstagramIcon } from "#/icons/instagram.icon";
import { LinkedinIcon } from "#/icons/linkedin.icon";
import { TripadvisorIcon } from "#/icons/tripadvisor.icon";
import { WhatsappIcon } from "#/icons/whatsapp.icon";
import { YoutubeIcon } from "#/icons/youtube.icon";
import type { NavItem } from "#/lib/navigation";
import { NAV_ITEMS } from "#/lib/navigation";

// Icons

function CloseIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			aria-hidden="true"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}

// Social link data

const SOCIAL_LINKS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/ranthambhore.com",
		icon: FacebookIcon,
		bg: "bg-[#1877F2]",
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/ranthambhoreregencyhotel/",
		icon: InstagramIcon,
		bg: "bg-[#E4405F]",
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/@ranthambhore",
		icon: YoutubeIcon,
		bg: "bg-[#FF0000]",
	},
	{
		label: "TripAdvisor",
		href: "https://www.tripadvisor.com",
		icon: TripadvisorIcon,
		bg: "bg-[#34E0A1]",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com",
		icon: LinkedinIcon,
		bg: "bg-[#0A66C2]",
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/919876543210",
		icon: WhatsappIcon,
		bg: "bg-[#25D366]",
	},
] as const;

//  Nav Item

function NavMenuItem({
	item,
	onClose,
}: {
	item: NavItem;
	onClose: () => void;
}) {
	const linkClasses =
		"block py-3 font-display text-lg lg:text-xl text-sand-100 hover:text-golden-300 transition-colors duration-200 leading-snug";

	if (!item.children?.length) {
		return (
			<div className="border-b border-white/10">
				<Link to={item.href} onClick={onClose} className={linkClasses}>
					{item.label}
				</Link>
			</div>
		);
	}

	return (
		<Accordion.Item value={item.href} className="border-b border-white/10">
			<Accordion.Header className="flex">
				<Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between py-3 text-left font-display text-lg lg:text-xl text-sand-100 transition-colors duration-200 hover:text-golden-300 focus-visible:outline-none">
					{item.label}
					<ChevronRight className="ml-2 size-4 shrink-0 text-sand-400 transition-transform duration-300 group-data-open:rotate-90" />
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Panel className="overflow-hidden h-(--accordion-panel-height) transition-[height] duration-300 ease-in-out data-starting-style:h-0 data-ending-style:h-0">
				<ul className="flex flex-col gap-0 pb-4 pl-2 pt-1">
					{item.children.map((child) => (
						<li key={child.href}>
							<Link
								to={child.href}
								onClick={onClose}
								className="group/sub flex items-center gap-1.5 py-1.5 font-body text-base text-sand-400 hover:text-golden-300 transition-colors duration-150 leading-snug"
							>
								<ChevronRight className="size-3 shrink-0 text-sand-600 transition-colors duration-150 group-hover/sub:text-golden-400" />
								{child.label}
							</Link>
						</li>
					))}
				</ul>
			</Accordion.Panel>
		</Accordion.Item>
	);
}

// Drawer Content

function NavDrawerContent({ onClose }: { onClose: () => void }) {
	return (
		<>
			{/* Backdrop */}
			<Dialog.Backdrop className="fixed inset-0 z-40 bg-charcoal-950/60 opacity-0 transition-opacity duration-300 ease-in-out data-open:opacity-100" />

			{/* Panel — slides in from right */}
			<Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex h-dvh w-[320px] sm:w-[360px] flex-col bg-charcoal-900 translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] data-open:translate-x-0 data-starting-style:translate-x-full data-ending-style:translate-x-full shadow-2xl">
				{/* Header */}
				<div className="flex shrink-0 items-center justify-between px-6 py-5 border-b border-white/10">
					<Link
						to="/"
						onClick={onClose}
						className="block h-10 focus-visible:outline-none"
					>
						<img
							src="/logo.png"
							alt="Ranthambhore.com"
							width={323}
							height={186}
							className="h-full w-auto object-contain"
						/>
					</Link>

					<Dialog.Close className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/25 text-sand-300 hover:text-sand-100 hover:border-white/40 transition-colors duration-200 focus-visible:outline-none">
						<CloseIcon className="size-4" />
					</Dialog.Close>
				</div>

				{/* Navigation list */}
				<nav
					className="flex-1 overflow-y-auto px-6 py-4"
					aria-label="Site navigation"
				>
					<Accordion.Root className="w-full">
						{NAV_ITEMS.map((item) => (
							<NavMenuItem key={item.href} item={item} onClose={onClose} />
						))}
					</Accordion.Root>
				</nav>

				{/* Footer: social icons + CTA */}
				<div className="shrink-0 border-t border-white/10 px-6 py-5 space-y-4">
					{/* Social icon circles */}
					<div className="flex items-center gap-2.5">
						{SOCIAL_LINKS.map(({ label, href, icon: Icon, bg }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex size-8 items-center justify-center rounded-full ${bg} text-white transition-opacity duration-200 hover:opacity-80`}
							>
								<Icon className="size-4" />
							</a>
						))}
					</div>

					{/* Plan My Safari CTA */}
					<Link
						to="/safari/book"
						onClick={onClose}
						className="block w-full rounded border border-golden-400 px-4 py-2.5 text-center font-display text-sm uppercase tracking-display text-golden-300 transition-colors duration-200 hover:bg-golden-400/10"
					>
						Plan My Safari
					</Link>
				</div>
			</Dialog.Popup>
		</>
	);
}

// Public API

export function NavDrawerRoot({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = React.useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			{children}
			<Dialog.Portal>
				<NavDrawerContent onClose={() => setOpen(false)} />
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export const NavDrawerTrigger = Dialog.Trigger;
