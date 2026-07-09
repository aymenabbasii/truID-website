																																							"use client"
import React, { useState } from "react"

const IndustryCaseStudies = () => {
	const testimonials = [
		{
			id: 1,
			company: "Askari Bank",
			title:
				"How Askari Bank completed over 2.6 million secure verifications with truID.",
			description:
				"Askari Bank integrated truID's biometric verification and liveness detection across its onboarding flow, reducing manual verification times from hours to seconds.",
			image: "/api/placeholder/150/200",
			stats: [
				{ value: "2.6M", label: "verifications" },
				{ value: "96.6%", label: "overall accuracy" },
				{ value: "91%", label: "NADRA match rate" },
				{ value: "<30s", label: "Avg verification time" },
			],
		},
		{
			id: 2,
			company: "MyTM",	 	 	
			title: "How MyTM reduced onboarding time by 60% with truID.",
			description:
				"By integrating truID's AI-powered verification APIs, MyTM enabled instant customer KYC and reduced dropout rates through faster verification.",
			image: "/api/placeholder/150/200",
			stats: [
				{ value: "60%", label: "faster onboarding" },
				{ value: "99%", label: "liveness accuracy" },
				{ value: "93%", label: "authenticity detection" },
				{ value: "40%", label: "reduced drop-offs" },
			],
		},
	]

	return (
		<div className="w-full max-w-7xl mx-auto px-10  py-16 md:py-24">
			{/* Header */}
			<div className="text-center mb-16">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					Trusted by leading banks,
					<br />
					fintechs, and enterprises.
				</h1>
			</div>

			{/* Testimonial Cards Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				{testimonials.map(testimonial => (
					<div
						key={testimonial.id}
						className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="p-8">
							<div className="flex items-start gap-6 mb-6">
								<div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden shrink-0">
									<img
										src={testimonial.image}
										alt={testimonial.company}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{testimonial.title}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										{testimonial.description}
									</p>
								</div>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
								{testimonial.stats.map((stat, index) => (
									<div key={index} className="text-center">
										<div className="text-2xl font-bold text-gray-900 mb-1">
											{stat.value}
										</div>
										<div className="text-xs text-gray-600 leading-tight">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default IndustryCaseStudies
