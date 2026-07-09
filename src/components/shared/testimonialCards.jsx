import React from "react"
import testimonials from "../../utils/testimonials.json"
import Image from "next/image"

const TestimonialCards = () => {
	return (
		<section className="py-20 px-6 bg-gradient-to-b from-gray-50/30 to-blue-50">
			<div className="max-w-7xl mx-auto">

				{/* Header */}
				<div className="flex flex-col items-center text-center mb-16">

					{/* Badge */}
<div className="px-7 py-3 bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-gray-100 mb-5 inline-block">
	<span className="text-lg font-medium text-gray-800">
		Testimonials
	</span>
</div>

					{/* Title */}
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
						Trusted by Industry Leaders
					</h2>

					{/* Description */}
					<p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						From banks to fintechs, businesses rely on truID to onboard users
						faster, prevent fraud, and stay compliant — all through one unified
						verification platform.
					</p>

				</div>

				{/* Cards */}
				<div className="grid md:grid-cols-2 gap-8">

					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="flex flex-col justify-between rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-md border border-gray-100"
						>

							{/* Quote */}
							<p className="text-gray-700 text-base leading-relaxed mb-8 italic">
								&quot;{testimonial.quote}&quot;
							</p>

							{/* User Info */}
							<div className="flex items-center gap-4 pt-6 border-t border-gray-100">

								{/* Avatar */}
								<div className="w-14 h-14 rounded-full relative overflow-hidden">
									<Image
										src={testimonial.avatar}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>

								{/* Details */}
								<div>
									<h4 className="font-semibold text-gray-900 text-lg">
										{testimonial.name}
									</h4>
									<p className="text-gray-600 text-sm">
										{testimonial.position} -{" "}
										<span className="font-medium text-blue-600">
											{testimonial.company}
										</span>
									</p>
								</div>

							</div>

						</div>
					))}

				</div>

			</div>
		</section>
	)
}

export default TestimonialCards