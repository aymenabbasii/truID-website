"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
	const [visibleCount, setVisibleCount] = useState(6)

	const testimonials = [
		{
			id: 1,
			stars: 5,
			text: "truID transformed our entire onboarding experience   verification that once took days now happens in seconds. It's secure, compliant, and effortless.",
			author: "Steven F.",
			role: "CEO @Askari Bank",
		},
		{
			id: 2,
			stars: 5,
			text: "truID transformed our entire onboarding experience   verification that once took days now happens in seconds. It's secure, compliant, and effortless.",
			author: "Steven F.",
			role: "CEO @Askari Bank",
		},
		{
			id: 3,
			stars: 5,
			text: "truID transformed our entire onboarding experience   verification that once took days now happens in seconds. It's secure, compliant, and effortless.",
			author: "Steven F.",
			role: "CEO @Askari Bank",
		},
		{
			id: 4,
			stars: 5,
			text: "truID transformed our entire onboarding experience   verification that once took days now happens in seconds. It's secure, compliant, and effortless.",
			author: "Steven F.",
			role: "CEO @Askari Bank",
		},
		{
			id: 5,
			stars: 5,
			text: "truID transformed our entire onboarding experience   verification that once took days now happens in seconds. It's secure, compliant, and effortless.",
			author: "Steven F.",
			role: "CEO @Askari Bank",
		},
		{
			id: 6,
			stars: 5,
			text: "truID transformed our entire onboarding experience   verification that once took days now happens in seconds. It's secure, compliant, and effortless.",
			author: "Steven F.",
			role: "CEO @Askari Bank",
		},
		{
			id: 7,
			stars: 5,
			text: "The speed and accuracy of truID's verification is unmatched. Our customer satisfaction has increased significantly since implementation.",
			author: "Sarah M.",
			role: "CTO @FinanceHub",
		},
		{
			id: 8,
			stars: 5,
			text: "Implementing truID was seamless. Their support team guided us through every step, and the results speak for themselves.",
			author: "Michael K.",
			role: "VP Operations @SecureBank",
		},
		{
			id: 9,
			stars: 5,
			text: "We've seen a 70% reduction in verification time. truID's AI-powered system is incredibly accurate and reliable.",
			author: "Jennifer L.",
			role: "Head of Digital @TechFinance",
		},
		{
			id: 10,
			stars: 5,
			text: "The compliance features alone are worth it. truID keeps us ahead of regulatory requirements while improving user experience.",
			author: "David R.",
			role: "Compliance Officer @GlobalBank",
		},
		{
			id: 11,
			stars: 5,
			text: "Our fraud prevention has improved dramatically. The biometric verification catches issues that manual processes would miss.",
			author: "Rachel T.",
			role: "Security Director @PaymentCo",
		},
		{
			id: 12,
			stars: 5,
			text: "truID has become an essential part of our infrastructure. Can't imagine going back to our old verification system.",
			author: "James W.",
			role: "CEO @NeoBank",
		},
	]

	const handleLoadMore = () => {
		setVisibleCount(prev => prev + 3)
	}

	const visibleTestimonials = testimonials.slice(0, visibleCount)
	const hasMore = visibleCount < testimonials.length

	return (
		<section className="py-20 px-6 bg-linear-to-b from-gray-50 to-blue-50">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
						Trusted by Industry Leaders
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						From banks to fintechs, businesses rely on truID to onboard users
						faster, prevent fraud, and stay compliant all through one unified
						verification platform.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative">
					{visibleTestimonials.map((testimonial, index) => {
						const isInLastRow = hasMore && index >= visibleCount - 3
						const shouldTranslateUp = [1, 4, 7, 10].includes(index)
						return (
							<div
								key={testimonial.id}
								className={`bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-4 ${
									isInLastRow ? "opacity-40 blur-[2px]" : ""
								} ${shouldTranslateUp ? "md:-translate-y-6" : ""}`}
								style={{ animationDelay: `${(index % 3) * 100}ms` }}
							>
								{/* Stars */}
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.stars)].map((_, starIndex) => (
										<Star
											key={starIndex}
											className="w-5 h-5 fill-blue-600 text-blue-600"
										/>
									))}
								</div>

								{/* Testimonial Text */}
								<p className="text-gray-700 text-sm leading-relaxed mb-6">
									{testimonial.text}
								</p>

								{/* Author Info */}
								<div className="flex items-center gap-3">
									{/* Avatar Placeholder */}
									<div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-300 to-gray-400 shrink-0"></div>

									<div>
										<p className="font-semibold text-gray-900 text-sm">
											{testimonial.author}
										</p>
										<p className="text-gray-500 text-xs">{testimonial.role}</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				{/* Load More / See All Button */}
				{hasMore && (
					<div className="text-center">
						<Button
							onClick={handleLoadMore}
							variant="outline"
							className="bg-white hover:bg-gray-50 text-blue-600 border-blue-600 hover:border-blue-700 px-8"
						>
							See more testimonials
						</Button>
					</div>
				)}

				{/* Show "All testimonials loaded" when done */}
				{!hasMore && (
					<div className="text-center">
						<p className="text-gray-500 text-sm">End</p>
					</div>
				)}
			</div>
		</section>
	)
}
