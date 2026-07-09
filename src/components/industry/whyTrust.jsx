import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Check } from "lucide-react"
import { CheckCircle } from "lucide-react"

export default function WhyTrustSection({ whyTrust }) {
	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-primary-foreground rounded-b-[150px]">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
						{whyTrust.title}
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
						{whyTrust.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{whyTrust.features.slice(0,4).map((feature, index) => (
						<div
							key={index}
							className="bg-white/80 border border-slate-200 p-7 hover:shadow-md transition-all duration-300 rounded-lg"
						>
							<h3 className="text-lg font-semibold text-gray-900 mb-4 pb-4 border-b border-slate-200">
								{feature.title}
							</h3>
							<ul className="grid gap-x-8 gap-y-3 list-disc">
								{feature.points.map((point, idx) => (
									<li key={idx} className="flex items-start gap-3">
										<div className="flex-shrink-0 mt-1">
											<CheckCircle className="w-6 h-6 text-primary" />
										</div>
										<span className="text-gray-700 leading-relaxed">
											{point}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
