"use client"
import React, { useEffect, useRef, useState } from "react"
import { FileText, MessageSquare, Code, Users } from "lucide-react"

export default function HiringProcess() {
	const [isVisible, setIsVisible] = useState(false)
	const [activeStep, setActiveStep] = useState(0)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.2 },
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	useEffect(() => {
		if (isVisible) {
			const stepTimers = [
				setTimeout(() => setActiveStep(1), 400),
				setTimeout(() => setActiveStep(2), 1200),
				setTimeout(() => setActiveStep(3), 1800),
				setTimeout(() => setActiveStep(4), 2400),
			]

			return () => {
				stepTimers.forEach(timer => clearTimeout(timer))
			}
		}
	}, [isVisible])

	const steps = [
		{
			number: "01",
			icon: FileText,
			title: "Application Review",
			description:
				"Our team reviews every application submitted to us with fairness.",
			highlight: true,
		},
		{
			number: "02",
			icon: MessageSquare,
			title: "Initial Interview",
			description:
				"A quick chat to learn about your goals, interests, and fit at truID.",
		},
		{
			number: "03",
			icon: Code,
			title: "Technical Task",
			description:
				"Depending on the role a design or technical task to show your process and creativity.",
		},
		{
			number: "04",
			icon: Users,
			title: "Final Interview",
			description:
				"Meet the wider team to discuss growth, culture, and your impact at truID.",
		},
	]

	return (
		<section className="px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24 bg-linear-to-br from-gray-50 to-gray-100">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl m-auto text-gray-900 mb-6 leading-tight">
						Join the team building the future of digital trust.
					</h1>
					{/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Simple, transparent, and built to find
						<br />
						the right fit.
					</h2> */}
					<p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
						At truID, we value clarity and respect your time. Our hiring process
						is designed to be fast, fair, and focused on finding people who
						align with our mission building digital trust through design, AI,
						and innovation.
					</p>
				</div>
				<div ref={sectionRef}></div>
				{/* Desktop Timeline */}
				<div className="hidden md:block relative">
					<div className="flex items-start justify-between relative gap-4">
						{steps.map((step, index) => (
							<div
								key={index}
								className="flex-1 flex flex-col items-center relative"
							>
								{/* Connecting Line */}
								{index < steps.length - 1 && (
									<div
										className="absolute left-1/2 top-6 w-full h-0.5 bg-gray-200"
										style={{ transformOrigin: "left" }}
									>
										<div
											className="h-full bg-blue-600 transition-all duration-700 ease-out"
											style={{
												width: activeStep > index + 1 ? "100%" : "0%",
											}}
										/>
									</div>
								)}

								{/* Step Number Circle */}
								<div
									className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base z-10 relative mb-6 transition-all duration-500 ${
										activeStep >= index + 1
											? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
											: "bg-white text-gray-400 border-2 border-gray-300"
									}`}
								>
									{step.number}
								</div>

								{/* Step Card */}
								<div
									className={`rounded-2xl min-h-[200px] p-6 w-full transition-all duration-700 transform ${
										activeStep >= index + 1
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									} ${"bg-white text-gray-900 border border-gray-200"}`}
									style={{
										transitionDelay: `${index * 100}ms`,
									}}
								>
									<div className={`mb-4 text-blue-600}`}>
										<step.icon className="w-6 h-6" />
									</div>

									<h3 className={`text-base font-bold mb-3 ${"text-gray-900"}`}>
										{step.title}
									</h3>

									<p className={`text-sm leading-relaxed ${"text-gray-600"}`}>
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile Timeline - Zigzag Layout */}
				<div className="md:hidden relative">
					{/* Vertical Center Line */}
					<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2">
						<div
							className="w-full bg-blue-600 transition-all duration-1000 ease-out"
							style={{
								height: `${(activeStep / steps.length) * 100}%`,
							}}
						/>
					</div>

					{steps.map((step, index) => (
						<div key={index} className="relative mb-12 last:mb-0">
							<div
								className={`flex items-center ${
									index % 2 === 0 ? "flex-row" : "flex-row-reverse"
								}`}
							>
								{/* Card - Left or Right */}
								<div className="w-5/12">
									<div
										className={`rounded-2xl p-5 transition-all duration-700 transform ${
											activeStep >= index + 1
												? "opacity-100 translate-x-0"
												: index % 2 === 0
													? "opacity-0 -translate-x-8"
													: "opacity-0 translate-x-8"
										} ${"bg-white text-gray-900 border border-gray-200"}`}
										style={{
											transitionDelay: `${index * 100}ms`,
										}}
									>
										<div className={`mb-3 ${"text-blue-600"}`}>
											<step.icon className="w-5 h-5" />
										</div>

										<h3 className={`text-sm font-bold mb-2 ${"text-gray-900"}`}>
											{step.title}
										</h3>

										<p className={`text-xs leading-relaxed ${"text-gray-600"}`}>
											{step.description}
										</p>
									</div>
								</div>

								{/* Circle - Center */}
								<div className="w-2/12 flex justify-center">
									<div
										className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all duration-500 ${
											activeStep >= index + 1
												? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
												: "bg-white text-gray-400 border-2 border-gray-300"
										}`}
									>
										{step.number}
									</div>
								</div>

								{/* Empty Space - Opposite Side */}
								<div className="w-5/12"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
