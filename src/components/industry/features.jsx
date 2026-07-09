import React from "react"
import Image from "next/image"
import { Shield, Rocket, MapPin, Award, Star, Headphones } from "lucide-react"

export default function Features() {
	const features = [
		{
			icon: Shield,
			title: "Face Liveness Detection",
			description:
				"AI confirms real user presence by detecting spoofing, masks, and deepfakes with 99% accuracy.",
		},
		{
			icon: Rocket,
			title: "Document Authentication",
			description:
				"Validate CNICs, NICOPs, and passports automatically with multi-layer forgery and tampering detection.",
		},
		{
			icon: MapPin,
			title: "Touchless Fingerprint Matching",
			description:
				"Verify fingerprints using any smartphone camera requireing no hardware scanners.",
		},
		{
			icon: Award,
			title: "Integrity",
			description:
				"Extract and convert data from IDs in English or Urdu with 95% OCR accuracy.",
		},
		{
			icon: Star,
			title: "Excellence",
			description:
				"End-to-end encryption, localized data, and complete audit trails ensure total trust.",
		},
		{
			icon: Headphones,
			title: "Customer Centricity",
			description:
				"Deploy quickly, scale effortlessly, and deliver verification in under 30 seconds.",
		},
	]
	return (
		<section className="relative w-full  px-10 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden bg-primary-foreground rounded-[200px]">
			<div className="container mx-auto px-6">
				{/* Top Section - Mission Statement */}
				<div className="max-w-3xl mx-auto text-center mb-16 relative">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Digital identity is the foundation of trust.
					</h2>
					<p className="text-base md:text-lg text-gray-700 mb-6">
						At truID, we believe secure digital identity isn't just technology
						it's a human right.
					</p>

					<p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
						Our mission is to empower individuals and organizations to build
						trust through frictionless verification, advanced biometrics, and
						strong data protection.
					</p>
				</div>
				<div className="flex flex-col gap-20">
					{/* Image Gallery */}
					<div className="max-w-6xl mx-auto  relative">
						<div className="flex gap-6  pb-4 justify-center items-center">
							<div className="relative shrink-0 w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 rotate-3 bg-gray-100 hover:scale-105 transition-transform duration-300">
								<Image
									src="/gallery-1.jpg"
									alt="Community gathering"
									fill
									className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>

							<div className="relative shrink-0 w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 -rotate-3 bg-gray-100 hover:scale-105 transition-transform duration-300">
								<Image
									src="/gallery-2.jpg"
									alt="Team collaboration"
									fill
									className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>

							<div className="relative shrink-0 w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform  hover:rotate-0 rotate-3 bg-gray-100 hover:scale-105 transition-transform duration-300">
								<Image
									src="/gallery-3.jpg"
									alt="Healthcare worker"
									fill
									className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>

							<div className="relative shrink-0 w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 -rotate-3 bg-gray-100 hover:scale-105 transition-transform duration-300">
								<Image
									src="/gallery-4.jpg"
									alt="People working together"
									fill
									className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>

							<div className="relative shrink-0 w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-0 rotate-3 bg-gray-100 hover:scale-105 transition-transform duration-300">
								<Image
									src="/gallery-5.jpg"
									alt="Business meeting"
									fill
									className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>
						</div>
					</div>
					<div className="w-full">
						<div className="max-w-6xl mx-auto h-[0.2px] bg-gray-300"></div>
					</div>

					{/* Stats Section */}
					<div className="max-w-6xl mx-auto ">
						{/* Left - Stats Text */}
						<div className="max-w-3xl">
							<h3 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-900 mb-8">
								Fast. Secure. Compliant. Verified in 30 seconds.
							</h3>

							<p className="ext-base md:text-lg text-gray-700">
								truID empowers banks and fintechs to onboard users seamlessly
								with a complete suite of AI-powered identity verification tools
								all built for speed, accuracy, and regulatory compliance.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
							{features.map((value, index) => {
								const Icon = value.icon
								return (
									<div
										key={index}
										className="flex flex-col items-start space-y-4"
									>
										<div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
											<Icon className="w-6 h-6 text-gray-700" strokeWidth={2} />
										</div>

										<div className="space-y-2">
											<h3 className="text-2xl font-semibold text-gray-900">
												{value.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">
												{value.description}
											</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
