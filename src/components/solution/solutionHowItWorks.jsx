"use client"

import Image from "next/image"
import React from "react"

export default function SolutionHowItWorks({ title, subtitle, phone, steps }) {
	return (
		<section className="bg-linear-to-b from-white to-primary-foreground px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
						HOW IT WORKS
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
  {subtitle}
</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
					<div className="w-full rounded-4xl mx-auto h-160 relative">
						<div className="absolute z-0 inset-0 flex items-center justify-center">
							<div className="absolute w-[700px] h-[700px] rounded-full border-2 border-blue-200 opacity-40"></div>
							<div className="absolute w-[600px] h-[600px] rounded-full border-2 border-blue-200 opacity-50"></div>
							<div className="absolute w-[500px] h-[500px] rounded-full border-2 border-blue-300 opacity-60"></div>
							<div className="absolute w-[400px] h-[400px] rounded-full border-2 border-blue-300 opacity-70"></div>
							<div className="absolute w-[300px] h-[300px] rounded-full border-2 border-blue-300 opacity-80"></div>
							<div className="absolute w-[200px] h-[200px] rounded-full border-2 border-blue-400 opacity-90"></div>
						</div>
						<Image src={phone} alt={title} fill className="object-contain" />
					</div>
					<div className="space-y-6">
						{steps.map((step, index) => (
							<div
								key={index}
								className={`relative ${
									index === steps.length - 1 ? "" : "pb-6"
								}`}
							>
								{/* Connecting Line */}
								{index < steps.length - 1 && (
									<div className="absolute left-6 top-14 w-0.5 h-full bg-gray-300"></div>
								)}

								{/* Step Card */}
								<div className="flex gap-6">
									{/* Number Badge */}
									<div
										className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10 
											bg-primary text-white backdrop-blur-sm border border-black/50 `}
									>
										{step.number}
									</div>

									{/* Content */}
									<div
										className={`flex-1 backdrop-blur-sm border border-black/20 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 group`}
									>
										<h3 className="text-xl font-bold mb-2 text-gray-800">
											{step.title}
										</h3>
										{/* <p className="text-sm mb-3 text-gray-600">
						F					{step.description}
										</p> */}
										<p className="text-sm leading-relaxed text-gray-600">
											{step.detail}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
