"use client"

import React from 'react'
import { Briefcase, Smartphone, ShieldCheck } from 'lucide-react'

export default function SolutionUseCases({ useCases }) {
	const icons = [Briefcase, Smartphone, ShieldCheck]

	return (
		<section className="bg-primary-foreground px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Use Cases
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						See how our solution can be applied across different scenarios
					</p>
				</div>

				{/* Use Cases Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{useCases.map((useCase, index) => {
						const IconComponent = icons[index] || Briefcase
						
						return (
							<div
								key={index}
								className="group relative bg-white/40 backdrop-blur-sm border shadow-md hover:shadow-xl rounded-2xl p-8 transition-all duration-300"
							>
								{/* Content */}
								<div className="relative">
									{/* Icon */}
									<div className="mb-6">
										<div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
											<IconComponent className="w-7 h-7 text-white" />
										</div>
									</div>

									{/* Title */}
									<h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors">
										{useCase.title}
									</h3>

									{/* Description */}
									<p className="text-gray-600 leading-relaxed">
										{useCase.description}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}