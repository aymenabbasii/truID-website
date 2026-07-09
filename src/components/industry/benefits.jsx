import React from "react"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function BenefitsSection({ benefits, iconMap }) {
	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-primary-foreground rounded-t-[150px]">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
					Benefits
				</h2>
				<p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
					Discover how our platform delivers tangible value to your business
				</p>

				<div className="grid md:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => {
						const BenefitIcon = iconMap[benefit.icon]
						return (
							<Card
								key={index}
								className="border0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80"
							>
								<div className="flex flex-col gap-6 p-6  relative">
									{/* Icon and Title Section */}
									<div className="flex flex-col items-start gap-4  flex-shrink-0">
										<div className="w-18 h-18 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0 m-auto mb-2 ">
											<BenefitIcon className="w-7 h-7 text-primary" />
										</div>
										<div className="w-full text-center">
											<CardTitle className="text-xl font-bold text-gray-900 mb-2">
												{benefit.title}
											</CardTitle>
											<CardDescription className="text-gray-600 leading-relaxed text-sm">
												{benefit.description}
											</CardDescription>
										</div>
									</div>

									{/* Details Section */}
									{/* <div className="flex md:pl-4">
										<ul className="space-y-3">
											{benefit.details.map((detail, idx) => (
												<li
													key={idx}
													className="flex items-start gap-3 text-sm"
												>
													<div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
													<span className="text-gray-700 leading-relaxed">
														{detail}
													</span>
												</li>
											))}
										</ul>
									</div> */}
								</div>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
