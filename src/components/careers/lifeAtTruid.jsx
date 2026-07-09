import Image from "next/image"
import React from "react"

export default function LifeAtTruid() {
	const galleryImages = [
		{ id: 1, alt: "Team collaboration outdoors" },
		{ id: 2, alt: "Team discussion" },
		{ id: 3, alt: "Workshop session" },
		{ id: 4, alt: "Office environment" },
		{ id: 5, alt: "Team activities" },
		{ id: 6, alt: "Team gathering" },
		{ id: 7, alt: "Team member portrait" },
		{ id: 8, alt: "Outdoor team activity" },
		{ id: 9, alt: "Team collaboration" },
		{ id: 10, alt: "Team event" },
	]
	return (
		<section className=" px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
					Life at truID
				</h2>

				<p className="text-lg  text-gray-600 text-center max-w-3xl mx-auto mb-12">
					We work in hybrid mode from our NUST Research & Innovation campus
					<br />
					in Islamabad, with flexible hours and a results-first mindset.
				</p>

				{/* Image Grid */}
				<div className="max-w-6xl mx-auto  relative flex flex-col">
					<div className="flex gap-6 flex-wrap  pb-4 justify-center items-center">
						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/1.jpg"
								alt="Community gathering"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 -rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/2.jpg"
								alt="Team collaboration"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform  hover:rotate-0 rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/3.jpg"
								alt="Healthcare worker"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 -rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/4.jpg"
								alt="People working together"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/5.jpg"
								alt="Business meeting"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>
					</div>
					<div className="flex gap-6 flex-wrap  pb-4 justify-center items-center">
						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 -rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/6.jpg"
								alt="Community gathering"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/7.jpg"
								alt="Team collaboration"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform  hover:rotate-0 -rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/8.jpg"
								alt="Healthcare worker"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/9.jpg"
								alt="People working together"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>

						<div className="relative shrink-0 w-32 h-40 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 -rotate-3 bg-gray-200 text-gray-200 hover:scale-105 transition-transform duration-300">
							<Image
								src="/life/10.jpg"
								alt="Business meeting"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
