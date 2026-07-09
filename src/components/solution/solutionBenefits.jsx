"use client"

import React from "react"
import { CheckCircle } from "lucide-react"

export default function SolutionBenefits({ benefits }) {
	return (
		<section className="bg-white px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto ">
				<div className="max-w-5xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
							Benefits
						</h2>
						<p className="text-lg text-slate-600">
							Transform your verification process with these advantages
						</p>
					</div>

					{/* Benefits Grid */}
					<div className="grid md:grid-cols-2 gap-6">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="flex gap-4 items-start p-6 rounded-xl border shadow-md hover:shadow-xl  transition-all duration-300"
							>
								<div className="flex-shrink-0 mt-1">
									<CheckCircle className="w-6 h-6 text-primary" />
								</div>
								<p className="text-slate-700 leading-relaxed">{benefit}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
