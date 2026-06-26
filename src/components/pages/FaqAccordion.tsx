import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

export function FaqAccordion({
	items,
	eyebrow = "FAQs",
	title = "Common Questions",
}: {
	items: FaqItem[];
	eyebrow?: string;
	title?: string;
}) {
	const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

	return (
		<section
			className="border-t border-muted-300 bg-cream-100 px-6 py-20 lg:px-8 lg:py-28"
			aria-label="Frequently asked questions"
		>
			<div className="mx-auto max-w-3xl">
				<SectionHeading eyebrow={eyebrow} title={title} centered />

				<div className="mt-12 space-y-3">
					{items.map((item) => {
						const isOpen = openId === item.id;
						return (
							<div
								key={item.id}
								className="overflow-hidden rounded-sm bg-sand-50 ring-1 ring-muted-300"
							>
								<button
									type="button"
									onClick={() => setOpenId(isOpen ? null : item.id)}
									className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-cream-50 sm:px-6"
									aria-expanded={isOpen}
								>
									<span className="font-playfair text-lg text-charcoal-900">
										{item.question}
									</span>
									<ChevronDown
										className={`size-5 shrink-0 text-sunset-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
									/>
								</button>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.25 }}
											className="overflow-hidden"
										>
											<p className="border-t border-muted-300 px-5 py-5 font-body text-base leading-[1.85] text-charcoal-600 sm:px-6">
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
