import { Dialog } from "@base-ui/react/dialog";
import { useEffect, useRef, useState } from "react";
import { ContactFormHeader } from "#/components/forms/ContactFormHeader";
import { ContactEnquiryForm } from "#/components/home/ContactEnquiryForm";
import { cn } from "#/lib/utils";

const AUTO_OPEN_DELAY_MS = 15_000;
const AUTO_OPEN_INTERVAL_MS = 45_000;
const MAX_AUTO_OPEN_COUNT = 2;
const AUTO_OPEN_COUNT_KEY = "reach-out-widget-auto-open-count";

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

export function ReachOutWidget() {
	const [open, setOpen] = useState(false);
	const [footerVisible, setFooterVisible] = useState(false);
	const footerVisibleRef = useRef(footerVisible);
	const openRef = useRef(open);

	footerVisibleRef.current = footerVisible;
	openRef.current = open;

	useEffect(() => {
		const footer = document.getElementById("site-footer");
		if (!footer) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry) setFooterVisible(entry.isIntersecting);
			},
			{ threshold: 0 },
		);

		observer.observe(footer);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (footerVisible && open) setOpen(false);
	}, [footerVisible, open]);

	useEffect(() => {
		let timeoutId: number | undefined;
		let autoOpenCount = Number(
			window.sessionStorage.getItem(AUTO_OPEN_COUNT_KEY) ?? "0",
		);
		let started = false;

		const scheduleAutoOpen = (delay: number) => {
			timeoutId = window.setTimeout(() => {
				if (
					autoOpenCount < MAX_AUTO_OPEN_COUNT &&
					!footerVisibleRef.current &&
					!openRef.current
				) {
					autoOpenCount += 1;
					window.sessionStorage.setItem(
						AUTO_OPEN_COUNT_KEY,
						String(autoOpenCount),
					);
					setOpen(true);
				}

				if (autoOpenCount < MAX_AUTO_OPEN_COUNT) {
					scheduleAutoOpen(AUTO_OPEN_INTERVAL_MS);
				}
			}, delay);
		};

		const startAfterScroll = () => {
			if (started) return;
			started = true;
			window.removeEventListener("scroll", startAfterScroll);
			scheduleAutoOpen(AUTO_OPEN_DELAY_MS);
		};

		if (window.scrollY > 0) {
			startAfterScroll();
		} else {
			window.addEventListener("scroll", startAfterScroll, { passive: true });
		}

		return () => {
			window.removeEventListener("scroll", startAfterScroll);
			if (timeoutId !== undefined) window.clearTimeout(timeoutId);
		};
	}, []);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger
				className={cn(
					"fixed bottom-6 right-0 z-40 cursor-pointer rounded-l-lg rounded-r-none border border-r-0 border-tiger-900 bg-sand-50 px-4 py-3.5 font-display text-[10px] uppercase tracking-display text-tiger-900 shadow-[-4px_0_12px_rgba(82,47,16,0.12)] transition-[opacity,transform] duration-300 hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tiger-900/40 sm:px-5 sm:text-xs",
					footerVisible && "pointer-events-none translate-x-full opacity-0",
				)}
				aria-label="Reach out to us"
				aria-hidden={footerVisible}
				tabIndex={footerVisible ? -1 : 0}
			>
				Reach Out Us
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Backdrop className="fixed inset-0 z-[150] bg-charcoal-950/60 opacity-0 transition-opacity duration-300 ease-in-out data-open:opacity-100" />

				<Dialog.Popup className="fixed inset-x-4 top-1/2 z-[150] mx-auto flex max-h-[min(calc(100dvh-5rem),720px)] w-full max-w-lg -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-sand-50 shadow-2xl ring-1 ring-muted-300 opacity-0 transition-[opacity,transform] duration-300 ease-out data-open:opacity-100 data-open:translate-y-[-50%] translate-y-[calc(-50%+1rem)] data-starting-style:opacity-0 data-starting-style:translate-y-[calc(-50%+1rem)] data-ending-style:opacity-0 data-ending-style:translate-y-[calc(-50%+1rem)] sm:inset-x-auto sm:left-1/2 sm:max-h-[min(calc(100dvh-6rem),720px)] sm:-translate-x-1/2 sm:data-open:translate-x-[-50%] sm:data-open:translate-y-[-50%] sm:data-starting-style:translate-x-[-50%] sm:data-starting-style:translate-y-[calc(-50%+1rem)] sm:data-ending-style:translate-x-[-50%] sm:data-ending-style:translate-y-[calc(-50%+1rem)]">
					<div className="flex shrink-0 items-center justify-between gap-4 border-b border-muted-300 bg-cream-100 px-5 py-4 sm:px-6">
						<Dialog.Title className="sr-only">
							Contact enquiry form
						</Dialog.Title>
						<ContactFormHeader className="flex-1 text-center" />
						<Dialog.Close
							aria-label="Close enquiry form"
							className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-muted-300 text-charcoal-700 transition-colors hover:border-charcoal-400 hover:text-charcoal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiger-500/40"
						>
							<CloseIcon className="size-4" />
						</Dialog.Close>
					</div>

					<div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
						<ContactEnquiryForm />
					</div>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
