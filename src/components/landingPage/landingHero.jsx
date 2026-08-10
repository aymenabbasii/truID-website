"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

const LandingHero = () => {
	const [visibleCards, setVisibleCards] = useState({
		card1: false,
		card2: false,
		card3: false,
	})

	const card1Ref = useRef(null)
	const card2Ref = useRef(null)
	const card3Ref = useRef(null)

	// const partners = ["/2.png", "/3.png", "/4.png", "/5.png", "/6.png" , "/7.png"]
	const partners = ["/3.png", "/4.png", "/5.png"]
	const sizes = [
 "w-64 h-40",
 "w-48 h-28",
 "w-80 h-40",
 "w-48 h-28",
 "w-40 h-24",
 "w-40 h-16",
]

	useEffect(() => {
		const observers = []

		const createObserver = (ref, cardKey) => {
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setVisibleCards(prev => ({ ...prev, [cardKey]: true }))
						}
					})
				},
				{ threshold: 0.1 }
			)

			if (ref.current) {
				observer.observe(ref.current)
			}

			return observer
		}

		observers.push(createObserver(card1Ref, "card1"))
		observers.push(createObserver(card2Ref, "card2"))
		observers.push(createObserver(card3Ref, "card3"))

		return () => {
			observers.forEach(observer => observer.disconnect())
		}
	}, [])

	return (
		<section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-linear-to-b from-blue-50 to-white overflow-hidden">
			{/* Background Decoration - Circles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Large circles */}
				<div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
				<div className="absolute top-40 right-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
				<div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>

				{/* Medium circles */}
				<div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>
				<div className="absolute bottom-1/4 right-10 w-56 h-56 bg-cyan-100 rounded-full opacity-15 blur-2xl"></div>

				{/* Small circles */}
				<div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-xl"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="flex flex-col gap-16 items-center">
					{/* Left Content */}
					<div className="text-center space-y-6 md:space-y-8">
						{/* Trust Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 animate-slide-top">
							<div className="flex items-center gap-1">
								<span className="text-sm md:text-base md:text-sm text-gray-600">
									<span className="text-blue-600">Trusted by</span> leading
									banks and fintech across Pakistan & Africa
								</span>
							</div>
						</div>

						{/* Main Headline */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight relative z-10 animate-slide-left">
							<span className="text-gray-900">AI-powered remote biometric</span>
							<br />
							<span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
								verification in 30 seconds
							</span>
						</h1>
					</div>

					{/* Right Content - Phone with Animated Details */}
					<div className="relative block">
						<div className="h-[400px] md:h-[600px] w-60 md:w-[20rem] flex items-center justify-center relative">
							{/* Concentric Circles Background */}
							<div className="absolute z-0 inset-0 flex items-center justify-center">
								<div className="absolute w-[800px] h-[800px] rounded-full border-2 border-blue-200 opacity-30"></div>
								<div className="absolute w-[700px] h-[700px] rounded-full border-2 border-blue-200 opacity-40"></div>
								<div className="absolute w-[600px] h-[600px] rounded-full border-2 border-blue-200 opacity-50"></div>
								<div className="absolute w-[500px] h-[500px] rounded-full border-2 border-blue-300 opacity-60"></div>
								<div className="absolute w-[400px] h-[400px] rounded-full border-2 border-blue-300 opacity-70"></div>
								<div className="absolute w-[300px] h-[300px] rounded-full border-2 border-blue-300 opacity-80"></div>
								<div className="absolute w-[200px] h-[200px] rounded-full border-2 border-blue-400 opacity-90"></div>
							</div>

							{/* Phone Image */}
							<Image
								src="/Phone - Landing.png"
								alt="TruID Biometric Verification"
								fill
								className="object-contain animate-slide-bottom"
							/>

							{/* Animated Detail Divs */}
							<div
								ref={card1Ref}
								className={`absolute z-20 top-[35%] -right-[30%] md:-right-[45%] bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 transition-all duration-200 ${
									visibleCards.card1
										? "opacity-100 scale-100 translate-y-0"
										: "opacity-0 scale-80 translate-y-5"
								}`}
							>
								<div className="w-4 md:w-10 h-4 md:h-10 bg-blue-50 rounded-full flex items-center justify-center">
									<svg
										className="w-5 h-5 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm md:text-base text-gray-900">
										Scan Face for Liveness
									</p>
								</div>
							</div>

							<div
								ref={card2Ref}
								className={`absolute z-20 top-[65%] -right-[30%] md:-right-[50%] bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 transition-all duration-600 delay-200 ${
									visibleCards.card2
										? "opacity-100 scale-100 translate-y-0"
										: "opacity-0 scale-80 translate-y-5"
								}`}
							>
								<div className="w-4 md:w-10 h-4 md:h-10 bg-blue-50 rounded-full flex items-center justify-center">
									<svg
										className="w-5 h-5 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm md:text-base text-gray-900">
										Capture ID Document
									</p>
								</div>
							</div>

							<div
								ref={card3Ref}
								className={`absolute z-20 bottom-[6%] -left-[25%] md:-left-[75%] bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 transition-all duration-600 delay-400 ${
									visibleCards.card3
										? "opacity-100 scale-100 translate-y-0"
										: "opacity-0 scale-80 translate-y-5"
								}`}
							>
								<div className="w-4 md:w-10 h-4 md:h-10 bg-blue-50 rounded-full flex items-center justify-center">
									<svg
										className="w-5 h-5 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm md:text-base text-gray-900">
										Touchless Fingerprint Verification
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Partners Section */}
				<div className="mt-32">
					{/* Infinite Scroll Partners Slider */}
					<div className="relative w-full h-24 overflow-hidden bg-white rounded-3xl shadow-lg flex items-center">
						{/* Scrolling container */}
						<div className="flex w-max items-center animate-scroll">
							{/* First set of logos */}
						{partners.map((logo, index) => (
  <div
  key={`logo-1-${index}`}
  className="flex-shrink-0 flex items-center justify-center mx-14"
  style={{
    width: "220px",
    height: "80px",
  }}
>
  <img
    src={`/partners/${logo}`}
    alt={`Partner ${index + 1}`}
    className={`${sizes[index]} object-contain`}
  />
</div>
))}
							{/* Duplicate set for seamless loop */}
							{partners.map((logo, index) => (
								<div
  key={`logo-2-${index}`}
  className="flex-shrink-0 flex items-center justify-center mx-10"
  style={{
    width: "180px",
    height: "80px",
  }}
>
  <img
    src={`/partners/${logo}`}
    alt={`Partner ${index + 1}`}
    className={`${sizes[index]} object-contain`}
  />
</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-scroll {
					animation: scroll 20s linear infinite;
				}

				// .animate-scroll:hover {
				// 	animation-play-state: paused;
				// }

				.delay-200 {
					transition-delay: 200ms;
				}

				.delay-400 {
					transition-delay: 400ms;
				}

				.duration-600 {
					transition-duration: 600ms;
				}

				.scale-80 {
					transform: scale(0.8);
				}
			`}</style>
		</section>
	)
}

export default LandingHero