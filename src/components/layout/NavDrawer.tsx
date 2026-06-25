import { Accordion } from "@base-ui/react/accordion";
import { Dialog } from "@base-ui/react/dialog";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import * as React from "react";
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
			strokeWidth={1.5}
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

function PlusIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			aria-hidden="true"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
		</svg>
	);
}

//  Nav Item

function NavMenuItem({
	item,
	onClose,
}: {
	item: NavItem;
	onClose: () => void;
}) {
	const linkClasses =
		"block py-3 font-display text-xl md:text-2xl lg:text-3xl text-sand-100 uppercase tracking-display hover:text-golden-300 transition-colors duration-200 leading-none";

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
				<Accordion.Trigger className="group flex w-full cursor-pointer items-baseline justify-between py-3 text-left font-display text-xl uppercase tracking-display text-sand-100 transition-colors duration-200 hover:text-golden-300 md:text-2xl lg:text-3xl focus-visible:outline-none">
					{item.label}
					<PlusIcon className="ml-3 size-5 shrink-0 text-sand-400 transition-transform duration-300 group-data-open:rotate-45 lg:size-6" />
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Panel className="overflow-hidden h-(--accordion-panel-height) transition-[height] duration-300 ease-in-out data-starting-style:h-0 data-ending-style:h-0">
				<ul className="grid grid-cols-1 gap-x-6 gap-y-0.5 pb-5 pl-1 pt-2 sm:grid-cols-2 md:grid-cols-3">
					{item.children.map((child) => (
						<li key={child.href}>
							<Link
								to={child.href}
								onClick={onClose}
								className="group/sub flex items-center gap-1.5 py-1.5 font-body text-lg text-sand-400 hover:text-golden-300 transition-colors duration-150 leading-snug md:text-xl"
							>
								<ChevronRight className="size-3.5 shrink-0 text-sand-600 transition-colors duration-150 group-hover/sub:text-golden-400" />
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
			<Dialog.Backdrop className="fixed inset-0 z-40 bg-charcoal-950/80 opacity-0 transition-opacity duration-300 ease-in-out data-open:opacity-100" />

			{/* Popup panel — slides from top */}
			<Dialog.Popup className="fixed inset-x-0 top-0 z-50 flex h-dvh flex-col bg-forest-950 -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] data-open:translate-y-0 data-starting-style:-translate-y-full data-ending-style:-translate-y-full">
				{/* Header bar */}
				<div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-5">
					<Link
						to="/"
						onClick={onClose}
						className="block aspect-video h-12 focus-visible:outline-none"
					>
						<img
							src="/logo.png"
							alt="Ranthambhore.com"
							className="h-full w-full object-contain"
						/>
					</Link>

					<Dialog.Close className="flex cursor-pointer items-center gap-2 font-display text-xs uppercase tracking-display text-sand-400 hover:text-sand-100 transition-colors duration-200 focus-visible:outline-none">
						<span>Close</span>
						<CloseIcon className="size-4" />
					</Dialog.Close>
				</div>

				{/* Navigation list */}
				<nav
					className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-16 lg:py-10"
					aria-label="Site navigation"
				>
					<Accordion.Root className="w-full">
						{NAV_ITEMS.map((item) => (
							<NavMenuItem key={item.href} item={item} onClose={onClose} />
						))}
					</Accordion.Root>
				</nav>

				{/* Footer strip */}
				<div className="shrink-0 border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
					<p className="font-body text-xs text-sand-600">
						© {new Date().getFullYear()} Ranthambhore.com — All rights reserved
					</p>
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
