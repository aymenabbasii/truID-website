import React from "react"

export default function Hero() {
	return (
		<section className="w-full bg-white px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24">
			<div className="max-w-4xl mx-auto text-center animate-slide-top">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
					Join the team building the future of digital trust.
				</h1>

				<p className="text-lg  text-gray-600 max-w-2xl mx-auto leading-relaxed">
					At truID, we're redefining how the world verifies identity using AI,
					biometrics, and a passion for secure innovation.
				</p>
			</div>
		</section>
	)
}
