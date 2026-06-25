import { Link } from "@tanstack/react-router";
import { FacebookIcon } from "#/icons/facebook.icon";
import { InstagramIcon } from "#/icons/instagram.icon";
import { MenuIcon } from "#/icons/menu.icon";
import { XIcon } from "#/icons/x.icon";
import { Button } from "../ui/button";
import { NavDrawerRoot, NavDrawerTrigger } from "./NavDrawer";

const NavigationBar = () => {
	return (
		<NavDrawerRoot>
			<header className="bg-sand-50 px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-5">
				<div className="grid grid-cols-3 items-center gap-2">
					{/* Left: menu trigger + social icons (desktop only) */}
					<div className="flex items-center">
						<NavDrawerTrigger
							render={<Button variant="ghost" className="px-2 py-1 sm:px-3" />}
						>
							<MenuIcon className="size-4 sm:size-5" />
							<span className="hidden sm:inline">Menu</span>
						</NavDrawerTrigger>
						<Button
							variant="ghost"
							size={"icon-sm"}
							className="hidden md:inline-flex"
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
							className="hidden md:inline-flex"
							render={
								// biome-ignore lint/a11y/useAnchorContent: this is a custom button
								<a
									href="https://www.facebook.com/ranthambhore.com"
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
							className="hidden md:inline-flex"
							render={
								// biome-ignore lint/a11y/useAnchorContent: this is a custom button
								<a
									href="https://x.com/ranthambhore.com"
									aria-label="Follow us on X"
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							<XIcon className="size-4" />
						</Button>
					</div>

					{/* Center: logo */}
					<div className="flex justify-center">
						<Link to="/" className="block aspect-video h-10 sm:h-12 lg:h-14">
							<img
								src="/logo.png"
								alt="Ranthambhore.com"
								width={100}
								height={100}
								className="w-full h-full object-contain"
							/>
						</Link>
					</div>

					{/* Right: CTA */}
					<div className="flex justify-end">
						<Button variant="outline" className="hidden sm:inline-flex">
							Make a Request
						</Button>
						<Button variant="outline" size="icon-sm" className="sm:hidden">
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
