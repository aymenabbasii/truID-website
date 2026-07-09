import React from "react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection({ faqs }) {
	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center leading-tight">
					Frequently Asked Questions
				</h2>

				<Accordion type="single" collapsible className="space-y-4">
					{faqs.map((faq, idx) => (
						<AccordionItem
							key={idx}
							value={`item-${idx}`}
							className="bg-white rounded-lg border border-gray-200 px-6 last:border"
						>
							<AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline py-5">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-gray-600 leading-relaxed pb-5">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
