import React from "react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const FAQSection = ({ main }) => {
	const faqs = [
		{
			question: "What is truID?",
			answer:
				"truID is an AI-powered identity verification platform that enables banks, fintechs, telcos, and enterprises to verify users remotely using facial, fingerprint, and document biometrics   all through a smartphone.",
		},
		{
			question: "How does truID verify identity?",
			answer:
				"truID uses advanced AI and biometric technology to verify identities through facial recognition, document scanning, and liveness detection. The process involves capturing a selfie, scanning government-issued ID documents, and performing real-time verification against official databases to ensure authenticity.",
		},
		{
			question:
				"Is truID compliant with data protection and banking regulations?",
			answer:
				"Yes, truID is fully compliant with major data protection regulations including GDPR, CCPA, and local banking regulations. We employ bank-grade encryption, secure data storage, and follow strict privacy protocols to protect user information. Our platform is regularly audited and certified by relevant regulatory bodies.",
		},
		{
			question: "What industries can use truID?",
			answer:
				"truID serves multiple industries including banking and financial services, fintech companies, telecommunications, insurance, healthcare, e-commerce, government services, and any organization requiring secure digital identity verification for customer onboarding or authentication.",
		},
		{
			question:
				"What makes truID different from other identity verification platforms?",
			answer:
				"truID stands out with its AI-powered liveness detection, 99%+ accuracy rates, sub-30 second verification times, multi-modal biometric verification, seamless mobile experience, compliance with local regulations, and integration with national databases. Our platform is specifically optimized for emerging markets.",
		},
		{
			question: "Can truID work without an internet connection?",
			answer:
				"truID requires an internet connection for real-time verification and database checks to ensure the highest level of security and accuracy. However, we've optimized our platform to work efficiently even on slower network connections, making it accessible in areas with limited connectivity.",
		},
		{
			question: "How accurate is truID's verification system?",
			answer:
				"truID maintains a verification accuracy rate of 96.6% to 99.5% depending on the verification method used. Our AI-powered liveness detection achieves 99% accuracy, and our document authenticity checks have a 93%+ success rate. We continuously improve our algorithms through machine learning.",
		},
		{
			question: "How can I integrate truID with my existing app or platform?",
			answer:
				"truID offers flexible integration options including RESTful APIs, SDKs for iOS and Android, web plugins, and pre-built UI components. Our technical team provides comprehensive documentation, sandbox environments for testing, and dedicated support throughout the integration process. Most implementations can be completed within 2-4 weeks.",
		},
	]

	return (
		<div
			className={`w-full max-w-4xl px-10 md:px-16 lg:px-24 py-16 ${main && "py-32"}  mx-auto`}
		>
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					Questions about truID, answered.
				</h1>
				<p className="text-gray-600 text-lg">
					Here's everything you need to know about how truID keeps digital
					identity verification fast,
					<br className="hidden md:block" />
					secure, and compliant.
				</p>
			</div>

			{/* FAQ Accordion using shadcn */}
			<Accordion
				type="single"
				collapsible
				defaultValue="item-0"
				className="space-y-4"
			>
				{faqs.map((faq, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="bg-white rounded-lg border border-gray-200 px-6"
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
	)
}

export default FAQSection
