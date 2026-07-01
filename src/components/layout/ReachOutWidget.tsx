import { Dialog } from "@base-ui/react/dialog";
import { useState } from "react";
import { ContactEnquiryForm } from "#/components/home/ContactEnquiryForm";

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

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger
				className="fixed bottom-6 right-0 z-40 cursor-pointer rounded-l-lg rounded-r-none border border-r-0 border-tiger-900 bg-sand-50 px-4 py-3.5 font-display text-[10px] uppercase tracking-display text-tiger-900 shadow-[-4px_0_12px_rgba(82,47,16,0.12)] transition-colors hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tiger-900/40 sm:px-5 sm:text-xs"
				aria-label="Reach out to us"
			>
				Reach Out Us
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-charcoal-950/60 opacity-0 transition-opacity duration-300 ease-in-out data-open:opacity-100" />

				<Dialog.Popup className="fixed inset-x-4 bottom-4 top-auto z-50 mx-auto flex max-h-[min(90dvh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-sand-50 shadow-2xl ring-1 ring-muted-300 opacity-0 transition-[opacity,transform] duration-300 ease-out data-open:opacity-100 data-open:translate-y-0 translate-y-4 data-starting-style:opacity-0 data-starting-style:translate-y-4 data-ending-style:opacity-0 data-ending-style:translate-y-4 sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:data-open:translate-x-[-50%] sm:data-open:translate-y-[-50%] sm:data-starting-style:translate-x-[-50%] sm:data-starting-style:translate-y-[calc(-50%+1rem)] sm:data-ending-style:translate-x-[-50%] sm:data-ending-style:translate-y-[calc(-50%+1rem)]">
					<div className="flex shrink-0 items-start justify-between gap-4 border-b border-muted-300 bg-cream-100 px-5 py-4 sm:px-6">
						<div>
							<p className="font-display text-[10px] uppercase tracking-display text-earth-400">
								Contact Us
							</p>
							<Dialog.Title className="mt-1 text-xl text-charcoal-800 sm:text-2xl">
								Reach Out To Our Team
							</Dialog.Title>
							<Dialog.Description className="mt-1 font-body text-sm text-charcoal-600">
								Share your travel dates and we will help plan your Ranthambore
								stay.
							</Dialog.Description>
						</div>
						<Dialog.Close className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-muted-300 text-charcoal-600 transition-colors hover:border-charcoal-400 hover:text-charcoal-800 focus-visible:outline-none">
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
