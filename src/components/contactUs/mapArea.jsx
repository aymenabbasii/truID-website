"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

export default function MapArea() {
	const [isLocationVisible, setIsLocationVisible] = useState(false)
	const mapRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							setIsLocationVisible(true)
						}, 300)
					}
				})
			},
			{ threshold: 0.3 },
		)

		if (mapRef.current) {
			observer.observe(mapRef.current)
		}

		return () => {
			if (mapRef.current) {
				observer.unobserve(mapRef.current)
			}
		}
	}, [])

	return (
		<section className="relative w-full bg-white px-10 md:px-16 lg:px-24 py-24 md:pt-32">
			<div className="container max-w-6xl mx-auto">
				{/* Header */}
				<div className="max-w-4xl mx-auto mb-12 text-center">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
						30 seconds to verify. <br /> A few seconds to reach us
					</h2>
					<p className="text-gray-600 text-base md:text-lg">
						We'd love to hear from you. Whether you're looking to integrate
						truID, explore partnerships, or schedule a live demo, our experts
						are ready to assist.
					</p>
				</div>

				{/* Map Section */}
				<div ref={mapRef} className="relative mx-auto mb-12 md:px-12">
					<div className="relative aspect-video rounded-2xl overflow-hidden ">
						<Image
							src="/World-map.png"
							alt="World map showing truID locations"
							fill
							className="object-contain"
						/>

						{/* Single Blinking Blue Circle - Islamabad, Pakistan */}
						<div className="absolute" style={{ top: "43%", left: "62%" }}>
							<div className="relative">
								<div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute opacity-75"></div>
								<div className="w-3 h-3 bg-blue-500 rounded-full relative"></div>

								{/* Small Popup Card beside marker */}
								<div
									className={`absolute right-3 md:left-3   bg-white rounded-tr-none md:rounded-tr-4xl md:rounded-tl-none rounded-4xl shadow-xl p-3 min-w-[200px] md:min-w-[300px] border border-blue-200 transition-all duration-500 ${
										isLocationVisible
											? "opacity-100 scale-100"
											: "opacity-0  scale-0 ointer-events-none"
									}`}
								>
									<div className="flex items-start gap-4">
										<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h4 className="text-xs md:text-sm font-medium text-gray-900">
												<span className="font-normal">
													Office no. 3201-3202,
													<br />
													NSTP, NUST, H-12,
													<br />
												</span>
												Islamabad, Pakistan
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Footer */}
				<div className="grid md:grid-cols-3 gap-8 mx-auto text-center">
					{/* Support */}
					<div>
						<h3 className="text-gray-900 font-semibold text-lg mb-2">
							Support
						</h3>
						<p className="text-gray-600 text-sm mb-3">
							Our friendly team is here to help.
						</p>
						<a
							href="mailto:support@truid.ai"
							className="text-blue-600 hover:text-blue-700 text-sm font-medium"
						>
							support@truid.ai
						</a>
					</div>

					{/* Sales */}
					<div>
						<h3 className="text-gray-900 font-semibold text-lg mb-2">Sales</h3>
						<p className="text-gray-600 text-sm mb-3">
							Questions or queries? Get in touch!
						</p>
						<a
							href="mailto:sales@truid.ai"
							className="text-blue-600 hover:text-blue-700 text-sm font-medium"
						>
							sales@truid.ai
						</a>
					</div>

					{/* Phone */}
					<div>
						<h3 className="text-gray-900 font-semibold text-lg mb-2">Phone</h3>
						<p className="text-gray-600 text-sm mb-3">
							Mon-Fri from 8am to 5pm.
						</p>
						<a
							href="tel:+16550000000"
							className="text-blue-600 hover:text-blue-700 text-sm font-medium"
						>
							+92 333 5549094
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
