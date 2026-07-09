"use client"
import React, { useState } from "react"

const TestimonialCards = () => {
	const [activeCard, setActiveCard] = useState(0)

	const products = [
		{
			id: 0,
			number: "01",
			title: {
				primary: "Secure Element",
				secondary: "GaurdX",
			},
			description:
				"A production-ready secure boot CPU that ensures only authenticated firmware executes, establishing a trusted firmware root from power-up.",
			image:
				"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
		},
		{
			id: 1,
			number: "02",
			title: {
				primary: "Concordia 2 Qsafe",
				secondary: "Embedded Processor (EP)",
			},
			description:
				"Advanced cryptographic security solution for embedded systems with hardware-level protection.",
			image:
				"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
		},
		{
			id: 2,
			number: "03",
			title: {
				primary: "Concordia 1",
				secondary: "Qsafe MCU",
			},
			description:
				"Integrated voltage monitoring and security protection system for critical infrastructure.",
			image:
				"https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop&q=80",
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#b8ff1f] via-[#c4ff3d] to-[#d4ff6b] p-8 md:p-12">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<p className="text-black text-xs font-semibold mb-3 tracking-widest uppercase">
						TECHNOLOGY
					</p>
					<div className="flex items-start justify-between gap-8">
						<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1]">
							Our Industry-specific
							<br />
							Products
						</h2>
						<div className="hidden lg:flex items-start gap-4 bg-white rounded-3xl px-6 py-4 max-w-sm">
							<p className="text-black text-sm leading-relaxed pt-1">
								Production-ready IP blocks designed to accelerate secure SoC
								development.
							</p>
						</div>
					</div>
				</div>

				{/* Cards Container */}
				<div className="flex gap-6 mb-8 h-[500px]">
					{products.map((product, index) => (
						<div
							key={product.id}
							onMouseEnter={() => setActiveCard(index)}
							onMouseLeave={() => setActiveCard(0)}
							className={`relative overflow-hidden border-l-4 border-l-black pl-4 cursor-pointer ${
								activeCard === index ? "flex-4" : "flex-1"
							}`}
							style={{
								transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
							}}
						>
							{/* Expanded Card Content */}
							{activeCard === index ? (
								<div className="flex h-full">
									{/* Image Section */}
									<div className="w-1/2 relative">
										<img
											src={product.image}
											alt={product.title.primary}
											className="w-full h-full object-cover"
										/>
									</div>

									{/* Text Content Section */}
									<div className="w-1/2 p-6 flex flex-col justify-between">
										<div>
											<h3 className="text-7xl font-bold text-black mb-6">
												{product.number}
											</h3>
											<h4 className="text-3xl font-bold text-black mb-6 leading-tight">
												{product.title.primary} <br />
												{product.title.secondary}
											</h4>
											<p className="text-black text-base leading-relaxed mb-8">
												{product.description}
											</p>
										</div>
										<button className="w-fit px-8 py-3 bg-transparent border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-all duration-300 uppercase text-sm tracking-wider">
											EXPLORE
										</button>
									</div>
								</div>
							) : (
								/* Collapsed Card Content */
								<div className="relative h-full flex-col items-center justify-start gap-4 pl-4">
									{/* Number */}
									<div>
										<h3 className="text-7xl font-bold text-black opacity-90">
											{product.number}
										</h3>
									</div>

									{/* Vertical Title - Centered */}
									<div className="flex items-start justify h-full mt-4 ">
										<h4
											className="text-black text-2xl font-semibold whitespace-nowrap tracking-wide text-left uppercase"
											style={{
												writingMode: "vertical-rl",
												textOrientation: "mixed",
												letterSpacing: "0.05em",
											}}
										>
											{product.title.primary} <br />
											{product.title.secondary}
										</h4>
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Explore All Button */}
				<button className="flex items-center gap-3 px-10 py-4 bg-black text-white font-bold hover:bg-gray-900 transition-colors duration-300 uppercase text-sm tracking-wider">
					EXPLORE ALL PRODUCTS
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 10H16M16 10L10 4M16 10L10 16"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default TestimonialCards
