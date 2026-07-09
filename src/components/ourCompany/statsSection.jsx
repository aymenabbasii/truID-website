import Image from "next/image"
import React from "react"

const StatsSection = () => {
	return (
		<div className="px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-linear-to-b from-white to-primary-foreground relative overflow-hidden ">
			<div className="max-w-7xl mx-auto px-6 md:px-0 ">
				
				<div className="absolute aspect-video w-2/3 -right-[18%] ">
					<Image
						src="/backgrounds/waves.png"
						alt="Background waves"
						fill
						className="absolute object-cover transition-all duration-300 opacity-40"
					/>
				</div>

				<div className="grid gap-12 items-center">
					{/* Left Content */}
					<div className="md:w-2/3">
						
						<h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 relative z-20">
							Key Achievements
						</h3>

						<ul className="space-y-4">
							<li className="flex items-start">
								<span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0"></span>
								<span className="text-base md:text-lg text-gray-700">
									Pioneers of Indigenous Biometric Technology in Pakistan
								</span>
							</li>

							<li className="flex items-start">
								<span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0"></span>
								<span className="text-base md:text-lg text-gray-700">
									Successful commercialization of R&D
								</span>
							</li>

							<li className="flex items-start">
								<span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0"></span>
								<span className="text-base md:text-lg text-gray-700">
									Highly secure SDK
								</span>
							</li>

							<li className="flex items-start">
								<span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0"></span>
								<span className="text-base md:text-lg text-gray-700">
									Local tech with global outreach targeting African markets and preparing for US & European expansion
								</span>
							</li>

							<li className="flex items-start">
								<span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0"></span>
								<span className="text-base md:text-lg text-gray-700">
									6M+ Digital Identities Verified
								</span>
							</li>
						</ul>

					</div>
				</div>
			</div>
		</div>
	)
}

export default StatsSection