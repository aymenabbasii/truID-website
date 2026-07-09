import React from "react"

const CompanyHero = () => {
	return (
		<section className="w-full  bg-linear-to-b from-blue-50 to-white px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24">
			<div className="max-w-4xl mx-auto text-center animate-slide-top">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
					Building digital trust through AI-powered identity verification
				</h1>

				<p className="text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
					We help banks, fintechs, and governments verify users in seconds reducing fraud, enabling compliance, and securing digital access for
					everyone.
				</p>
			</div>
		</section>
	)
}

export default CompanyHero
