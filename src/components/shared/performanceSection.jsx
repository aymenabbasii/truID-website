"use client"
import React, { useEffect, useRef, useState } from "react"

const PerformanceSection = () => {
	const stats = [
		{
			value: "6M+",
			numericValue: 6,
			suffix: "M+",
			label: "Verifications Completed",
			description:
				"Powering secure onboarding for leading banks, fintechs, and enterprises.",
			size: "large",
		},
		// {
		// 	value: "96.6%",
		// 	numericValue: 96.6,
		// 	suffix: "%",
		// 	label: "Overall Accuracy",
		// 	description:
		// 		"Consistent precision across facial, document, and biometric checks.",
		// 	size: "large",
		// },
		// {
		// 	value: "91%",
		// 	numericValue: 91,
		// 	suffix: "%",
		// 	label: "NADRA Match (First Attempt)",
		// 	description:
		// 		"High first-attempt success with touchless fingerprint technology.",
		// 	size: "small",
		// },
		// {
		// 	value: "99%",
		// 	numericValue: 99,
		// 	suffix: "%",
		// 	label: "Liveness Detection Accuracy",
		// 	description:
		// 		"AI-powered defense that stops spoofing and deepfakes instantly.",
		// 	size: "small",
		// },
		{
			value: "<30s",
			numericValue: 30,
			prefix: "<",
			suffix: "s",
			label: "Average Verification Time",
			description:
				"From scan to confirmation - designed for real-time onboarding.",
			size: "small",
		},
		{
			value: "95%",
			numericValue: 95,
			suffix: "%",
			label: "Cost Reduction",
			description:
				"No scanners. No hardware. Just smartphone-based biometrics.",
			size: "small",
		},
	]

	return (
		<section className="relative px-10 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden">
			{/* Background overlay */}
			<div className="absolute inset-0 ">
				<video
					src="/backgrounds/background-video.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				></video>
			</div>
			<div className="absolute inset-0 w-full h-full object-cover bg-linear-to-tr from-primary-foreground/80 via-primary/80 to-primary-foreground/80 "></div>

			<div className="grid grid-cols-1  gap-4 relative z-10 max-w-7xl mx-auto">
				{/* Header Section - Left Side */}
				<div className="lg:col-span-1  flex flex-col justify-center items-start py-8 text-white">
					<div className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-full text-white shadow-md mb-4">
  <span className="text-base md:text-lg font-medium">Our Impact</span>
</div>
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight">
						<span className="">Performance you can measure</span>
						<br />
						<span className="">Trust you can prove</span>
					</h2>
					<p className="text-lg md:text-xl  leading-relaxed">
						Every number reflects truID's mission to make identity verification
						faster, safer, and accessible without friction or compromise.
					</p>
				</div>

				{/* Large cards - Right Side Top Row
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<StatCard stat={stats[0]} />
					<StatCard stat={stats[1]} />
				</div> */}

				{/* Small cards - Bottom row */}
				<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
					{stats.map((stat, index) => (
						<StatCard key={index} stat={stat} />
					))}
				</div>
			</div>
		</section>
	)
}

const StatCard = ({ stat }) => {
	const [count, setCount] = useState(0)
	const hasAnimatedRef = useRef(false)
	const cardRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !hasAnimatedRef.current) {
						hasAnimatedRef.current = true
						animateCounter()
					}
				})
			},
			{ threshold: 0.2 },
		)

		const animateCounter = () => {
			const duration = 2000
			const steps = 60
			const increment = stat.numericValue / steps
			let current = 0

			const timer = setInterval(() => {
				current += increment
				if (current >= stat.numericValue) {
					setCount(stat.numericValue)
					clearInterval(timer)
				} else {
					setCount(current)
				}
			}, duration / steps)
		}

		if (cardRef.current) {
			observer.observe(cardRef.current)
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current)
			}
		}
	}, [stat.numericValue])

	const formatValue = value => {
		const formatted = value.toFixed(stat.suffix === "M+" ? 1 : 0)
		return `${stat.prefix || ""}${formatted}${stat.suffix || ""}`
	}
	return (
		<div
			ref={cardRef}
			className="bg-white/70 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
		>
			<div className="space-y-4">
				<div className="text-4xl md:text-5xl font-bold text-gray-900">
					{formatValue(count)}
				</div>
				<div className="text-lg md:text-xl font-semibold text-gray-700">
					{stat.label}
				</div>
				<p className="text-gray-600 leading-relaxed text-sm md:text-base">
					{stat.description}
				</p>
			</div>
		</div>
	)
}

export default PerformanceSection
