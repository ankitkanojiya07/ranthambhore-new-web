import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_ITEMS = [
	{ label: "Home", href: "/" },
	{
		label: "Ranthambhore",
		href: "#ranthambhore",
		children: [
			{ label: "History", href: "#history" },
			{ label: "Conservation", href: "#conservation" },
			{ label: "Flora & Fauna", href: "#flora-fauna" },
			{ label: "Tigers In Ranthambore", href: "#tigers" },
		],
	},
	{ label: "Wildlife", href: "#wildlife" },
	{
		label: "Safaris",
		href: "#safaris",
		children: [
			{ label: "Jeep Safari", href: "#jeep-safari" },
			{ label: "Canter Safari", href: "#canter-safari" },
			{ label: "Bird Watching", href: "#bird-watching" },
		],
	},
	{ label: "Hotels", href: "#hotels" },
	{ label: "TravelTips", href: "#travel-tips" },
] as const;

function NavDropdown({
	children,
}: {
	children: readonly { label: string; href: string }[];
}) {
	return (
		<motion.div
			className="absolute top-full left-0 z-50 mt-2 min-w-[200px] rounded py-2 bg-white shadow-lg"
			initial={{ opacity: 0, y: -8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -8 }}
			transition={{ duration: 0.2 }}
		>
			{children.map((child) => (
				<a
					key={child.label}
					href={child.href}
					className="block px-5 py-2 font-body text-sm text-charcoal-700 transition-colors hover:bg-sand-100 hover:text-forest-500"
				>
					{child.label}
				</a>
			))}
		</motion.div>
	);
}

function NavItem({ item }: { item: (typeof NAV_ITEMS)[number] }) {
	const [open, setOpen] = useState(false);
	const hasChildren = "children" in item && item.children;

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: hover dropdown trigger
		<div
			className="relative"
			onMouseEnter={() => hasChildren && setOpen(true)}
			onMouseLeave={() => hasChildren && setOpen(false)}
		>
			<a
				href={item.href}
				className="flex items-center font-body gap-1 text-sm font-semibold uppercase tracking-nav text-charcoal-900 transition-colors hover:text-forest-500"
			>
				{item.label}
				{hasChildren && <ChevronDown className="size-3" />}
			</a>
			{hasChildren && (
				<AnimatePresence>
					{open && <NavDropdown>{item.children}</NavDropdown>}
				</AnimatePresence>
			)}
		</div>
	);
}

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<motion.nav
			className="relative z-50"
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3 lg:gap-8 lg:px-4">
				{/* Logo */}
				<Link to="/" className="flex shrink-0 items-center">
					<img src="/logo.png" alt="Ranthambhore" className="h-16 lg:h-[72px]" />
				</Link>

				{/* Desktop Nav Links */}
				<div className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-5">
					{NAV_ITEMS.map((item) => (
						<NavItem key={item.label} item={item} />
					))}
				</div>

				{/* Right side: CTA */}
				<div className="hidden shrink-0 lg:block">
					<a
						href="#quote"
						className="inline-block rounded-lg bg-forest-500 px-8 py-3 font-display text-xs font-semibold uppercase tracking-nav text-white transition-colors hover:bg-forest-600"
					>
						Get Free Quote
					</a>
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					className="ml-auto flex size-10 items-center justify-center rounded lg:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					{mobileOpen ? (
						<X className="size-6 text-charcoal-800" />
					) : (
						<Menu className="size-6 text-charcoal-800" />
					)}
				</button>
			</div>

			{/* Mobile drawer */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						className="border-t border-muted-200 bg-white px-6 pb-6 lg:hidden"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col gap-4 pt-4">
							{NAV_ITEMS.map((item) => (
								<div key={item.label}>
									<a
										href={item.href}
										className="font-display text-sm uppercase tracking-nav text-charcoal-800"
										onClick={() => setMobileOpen(false)}
									>
										{item.label}
									</a>
									{"children" in item && item.children && (
										<div className="mt-2 flex flex-col gap-2 pl-4">
											{item.children.map((child) => (
												<a
													key={child.label}
													href={child.href}
													className="font-body text-sm text-charcoal-600"
													onClick={() => setMobileOpen(false)}
												>
													{child.label}
												</a>
											))}
										</div>
									)}
								</div>
							))}
						</div>

						<a
							href="#quote"
							className="mt-6 inline-block rounded-lg bg-forest-500 px-8 py-3 font-display text-xs font-semibold uppercase tracking-nav text-white"
						>
							Get Free Quote
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
