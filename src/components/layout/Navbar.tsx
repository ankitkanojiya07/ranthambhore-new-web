import { Link, useRouterState } from "@tanstack/react-router";
import { AuthNavActions } from "#/components/auth/AuthNavActions";
import { FacebookIcon } from "#/icons/facebook.icon";
import { InstagramIcon } from "#/icons/instagram.icon";
import { MenuIcon } from "#/icons/menu.icon";
import { WhatsappIcon } from "#/icons/whatsapp.icon";
import { cn } from "#/lib/utils";
import { Button } from "../ui/button";
import { NavDrawerRoot, NavDrawerTrigger } from "./NavDrawer";

const NavigationBar = () => {
	const navOverlay = useRouterState({
		select: (state) =>
			state.matches.some((match) => match.staticData?.navOverlay),
	});

	return (
		<NavDrawerRoot>
			<header
				className={cn(
					"px-4 py-3 sm:px-6 sticky top-0 z-100 sm:py-4 lg:px-10 lg:py-2",
					navOverlay
						? "absolute inset-x-0 top-0 z-50 bg-transparent backdrop-blur-sm"
						: "bg-sand-50/80 backdrop-blur-sm",
				)}
			>
				<div className="grid grid-cols-3 items-center gap-2">
					{/* Left: menu trigger + social icons (desktop only) */}
					<div className="flex items-center">
						<NavDrawerTrigger
							render={
								<Button
									variant="ghost"
									className={cn(
										"px-2 py-1 sm:px-3",
										navOverlay &&
											"text-sand-50 hover:bg-white/10 hover:text-sand-50",
									)}
								/>
							}
						>
							<MenuIcon className="size-4 sm:size-5" />
							<span className="hidden sm:inline">Menu</span>
						</NavDrawerTrigger>
						<Button
							variant="ghost"
							size={"icon-sm"}
							className={cn(
								"hidden md:inline-flex",
								navOverlay &&
									"text-sand-50 hover:bg-white/10 hover:text-sand-50",
							)}
							render={
								// biome-ignore lint/a11y/useAnchorContent: this is a custom button
								<a
									href="https://www.instagram.com/ranthambhoreregencyhotel/"
									aria-label="Follow us on Instagram"
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							<InstagramIcon className="size-4" />
						</Button>
						<Button
							variant="ghost"
							size={"icon-sm"}
							className={cn(
								"hidden md:inline-flex",
								navOverlay &&
									"text-sand-50 hover:bg-white/10 hover:text-sand-50",
							)}
							render={
								// biome-ignore lint/a11y/useAnchorContent: this is a custom button
								<a
									href="https://www.facebook.com/ranthambhoreregency"
									aria-label="Follow us on Facebook"
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							<FacebookIcon className="size-4" />
						</Button>
						<Button
							variant="ghost"
							size={"icon-sm"}
							className={cn(
								"hidden md:inline-flex",
								navOverlay &&
									"text-sand-50 hover:bg-white/10 hover:text-sand-50",
							)}
							render={
								// biome-ignore lint/a11y/useAnchorContent: this is a custom button
								<a
									href="https://wa.me/919983171934"
									aria-label="Chat with us on WhatsApp"
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							<WhatsappIcon className="size-4" />
						</Button>
					</div>

					{/* Center: logo */}
					<div className="flex justify-center">
						<Link to="/" className="block h-14 sm:h-16 lg:h-15">
							<img
								src="/logo.png"
								alt="Ranthambhore.com"
								width={323}
								height={186}
								className={cn(
									"h-full w-auto object-contain",
									!navOverlay && "brightness-0",
								)}
							/>
						</Link>
					</div>

					{/* Right: auth + CTA */}
					<div className="flex items-center justify-end gap-2 sm:gap-3">
						<AuthNavActions navOverlay={navOverlay} />
						<Button
							variant="outline"
							className={cn(
								"hidden sm:inline-flex",
								navOverlay &&
									"border-sand-50/70 text-sand-50 hover:bg-white/10 hover:text-sand-50",
							)}
							render={<Link to="/contact" />}
						>
							Make a Request
						</Button>
						<Button
							variant="outline"
							size="icon-sm"
							className={cn(
								"sm:hidden",
								navOverlay &&
									"border-sand-50/70 text-sand-50 hover:bg-white/10 hover:text-sand-50",
							)}
							render={<Link to="/contact" />}
						>
							<span className="sr-only">Make a Request</span>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								className="size-4"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</header>
		</NavDrawerRoot>
	);
};

export default NavigationBar;
