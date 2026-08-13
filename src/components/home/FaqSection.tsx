import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const FAQ_ITEMS = [
	{
		id: "open-season",
		question: "When is Ranthambhore National Park open to visitors?",
		answer:
			"Ranthambhore is open from 1st October to 30th June each year. It remains closed during July, August, and September due to the monsoon season.",
	},
	{
		id: "zones-count",
		question: "How many safari zones are there in Ranthambhore?",
		answer:
			"The park is divided into 10 safari zones, each offering unique landscapes and wildlife sightings.",
	},
	{
		id: "best-zone",
		question: "Which is the best zone for tiger sightings?",
		answer:
			"Zones 1 to 5 are considered core areas and typically have higher chances of spotting tigers, but good sightings have been recorded in buffer zones (6 to 10) as well. Wildlife being unpredictable, luck plays a big role!",
	},
	{
		id: "choose-zone",
		question: "Can I choose my safari zone?",
		answer:
			"You may request a preferred zone, but allocation is subject to availability and is controlled by the forest department. We always try to honor zone preferences wherever possible.",
	},
	{
		id: "animals",
		question: "What animals can I expect to see?",
		answer:
			"Besides tigers, Ranthambhore is home to leopards, sloth bears, hyenas, jackals, marsh crocodiles, sambars, nilgai, langurs, and over 300 species of birds.",
	},
	{
		id: "booking",
		question: "How do I book a jungle safari?",
		answer:
			"You can book your safari through us — just share your passport details, preferred dates, and number of guests. We will handle all the formalities and send you a confirmation.",
	},
	{
		id: "payment",
		question: "How do I make the payment?",
		answer:
			"You can pay via bank transfer, UPI, or credit/debit card. Payment links and account details will be shared upon confirmation.",
	},
	{
		id: "passport",
		question: "Why is a passport required at the time of booking?",
		answer:
			"As per government regulations, photo ID proof (passport for international visitors) is mandatory for booking and entry into the park. This helps verify identities and prevents illegal access.",
	},
	{
		id: "cash",
		question: "Can I pay in cash upon arrival?",
		answer:
			"Safari bookings must be paid in advance, as slots are limited and confirmed only after payment. Hotel services can often accept cash on arrival, depending on your reservation.",
	},
	{
		id: "pricing",
		question: "Why are your prices higher than the government website?",
		answer:
			"Our prices include full-service assistance: zone requests, priority processing, park fee management, vehicle arrangements, and doorstep pick-up. It's a seamless, stress-free experience compared to the limited direct options.",
	},
	{
		id: "confirmation",
		question: "Do I need to bring my booking confirmation with me?",
		answer:
			"Yes, it's best to carry either a digital or printed copy of your booking confirmation for smooth check-in and safari entry.",
	},
	{
		id: "pickup",
		question: "How will I know my safari pick-up time?",
		answer:
			"We will share your exact pick-up time and vehicle details by the evening prior to your safari, via WhatsApp or email.",
	},
	{
		id: "timings",
		question: "What are the safari timings in Ranthambhore?",
		answer:
			"Safaris run twice daily:\n\nMorning: Around 6:00 AM – 9:30 AM\nAfternoon: Around 2:30 PM – 6:00 PM\n\nTimings vary slightly with the seasons.",
	},
	{
		id: "tiger-count",
		question: "How many tigers live in Ranthambhore?",
		answer:
			"Ranthambhore is home to approximately 75 to 80 tigers, including cubs, across the park's zones.",
	},
	{
		id: "services",
		question: "What services does Ranthambhore Regency provide?",
		answer:
			"Alongside your stay at Ranthambhore Regency, we book safari bookings in Ranthambhore National Park, assist with transportation to and from Ranthambhore, and other excursions such as a visit to Ranthambhore Fort. We can also arrange to pick you up from Sawai Madhopur station should you be arriving by rail.",
	},
	{
		id: "children",
		question: "Are children allowed on safari?",
		answer:
			"Yes, children of all ages are welcome, though those under 5 years may find the bumpy ride tiring. Do bring snacks and water for younger kids.",
	},
	{
		id: "safety",
		question: "Is the park safe for tourists?",
		answer:
			"Ranthambhore is very safe. All safaris are conducted by trained drivers and guides, and visitors are not allowed to step out of the vehicle inside the park.",
	},
	{
		id: "clothing",
		question: "What should I wear for a safari?",
		answer:
			"Wear neutral-coloured clothes (khaki, brown, green), a hat or cap, and closed shoes. Mornings can be cold from October to February, so bring a jacket or shawl.",
	},
	{
		id: "carry",
		question: "What should I carry on safari?",
		answer:
			"Bring: ID proof (original), water bottle, binoculars and camera, hat, sunglasses, sunscreen, and light snacks if needed.",
	},
	{
		id: "best-time",
		question: "When is the best time to visit Ranthambhore?",
		answer:
			"October–March: Comfortable weather, great birding.\nApril–June: Peak tiger sighting season (dry heat drives animals to water).",
	},
];

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section
			className="bg-sand-100 px-6 py-16 mx-7xl mx-auto lg:px-8 lg:py-20"
			aria-label="FAQ"
		>
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="text-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.p
						variants={itemVariants}
						className="font-display text-xs uppercase tracking-display text-earth-700"
					>
						Frequently Asked Questions
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="mt-2 text-3xl text-charcoal-800 lg:text-4xl"
					>
						Ranthambhore National Park
					</motion.h2>
				</motion.div>

				<motion.div
					className="mx-auto mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.05 }}
				>
					{FAQ_ITEMS.map((item, i) => {
						const isOpen = openIndex === i;
						return (
							<motion.div
								key={item.id}
								variants={itemVariants}
								className="h-fit overflow-hidden rounded-xl bg-cream-100 px-5 shadow-sm ring-1 ring-muted-300"
							>
								<button
									type="button"
									onClick={() => setOpenIndex(isOpen ? null : i)}
									className="flex w-full items-center justify-between gap-4 py-5 text-left"
									aria-expanded={isOpen}
								>
									<span className="font-display text-base text-charcoal-800">
										{i + 1}. {item.question}
									</span>
									<motion.span
										animate={{
											rotate: isOpen ? 180 : 0,
										}}
										transition={{ duration: 0.3 }}
										className="shrink-0"
									>
										<ChevronDown className="size-5 text-charcoal-500" />
									</motion.span>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{
												height: 0,
												opacity: 0,
											}}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{
												height: 0,
												opacity: 0,
											}}
											transition={{
												duration: 0.3,
												ease: "easeInOut",
											}}
											className="overflow-hidden"
										>
											<p className="whitespace-pre-line pb-5 font-body text-sm leading-relaxed text-charcoal-600">
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
