"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function IdentityVerificationSection() {
	const [activeTab, setActiveTab] = useState(0)
	const [visibleDetails, setVisibleDetails] = useState([
		false,
		false,
		false,
		false,
	])

	React.useEffect(() => {
		// Reset visibility when tab changes
		setVisibleDetails([false, false, false, false])

		// Stagger the animation of detail boxes
		const timers = [
			setTimeout(
				() =>
					setVisibleDetails(prev => {
						const next = [...prev]
						next[0] = true
						return next
					}),
				200
			),
			setTimeout(
				() =>
					setVisibleDetails(prev => {
						const next = [...prev]
						next[1] = true
						return next
					}),
				400
			),
			setTimeout(
				() =>
					setVisibleDetails(prev => {
						const next = [...prev]
						next[2] = true
						return next
					}),
				600
			),
			setTimeout(
				() =>
					setVisibleDetails(prev => {
						const next = [...prev]
						next[3] = true
						return next
					}),
				800
			),
		]

		return () => timers.forEach(timer => clearTimeout(timer))
	}, [activeTab])

	const tabs = [
		{ id: 0, number: "1.", label: "Face Liveness" },
		{ id: 1, number: "2.", label: "ID Verification" },
		{ id: 2, number: "3.", label: "ID Selfie Matching" },
		{ id: 3, number: "4.", label: "Touchless Fingerprint Biometric" },
		{ id: 4, number: "5.", label: "OCR Data Extraction" },
	]

	const tabContent = [
		{
			instruction: "Hold your face in front of the camera frame",
			title:
				"truID provides passive liveness detection with 3D anti-spoofing which prevents photo, video, and mask attacks.",
			image: "/steps/check.jpg",
			details: [
				{ text: "Passive face liveness detection" },
				{ text: "No gestures required" },
				{ text: "<1% false positives" },
				{ text: "Auto genuine/spoof classification" },
			],
		},
		{
			instruction: "Hold your ID document to the camera.",
			title:
				"truID verifies document authenticity by analyzing embedded security elements, visual patterns, and structural features to detect tampering or forgery.",
			image: "/steps/id.png",
			details: [
				{ text: "Auto-captures ID documents" },
				{ text: "Smart automatic document cropping" },
				{ text: "Deep inspection of micro-features" },
				{ text: "98% fully automated process" },
			],
		},
		{
			instruction: "Take a quick selfie to verify your identity.",
			title:
				"Our AI compares your live photo with the ID image, accounting for natural variations in lighting, age, or appearance.",
			image: "/steps/selfie.jpg",
			details: [
				{ text: "ID-to-selfie face matching" },
				{ text: "Neural network feature embeddings" },
				{ text: "Works despite facial changes" },
				{ text: "Invariant to age and accessories" },
			],
		},
		{
			instruction: "Capture your fingerprints using your smartphone camera.",
			title:
				"truID delivers high-accuracy identity verification through our proprietary touchless biometric system, ensuring secure and reliable matching without physical contact.",
			image: "/steps/online.png",
			details: [
				{ text: "Eliminates physical scanners entirely" },
				{ text: "Generates WSQ/ISO biometrics" },
				{ text: "NADRA-ready fingerprint formats" },
				{ text: "Streamlines remote onboarding" },
			],
		},
		{
			instruction: "AI-powered text extraction from your documents.",
			title:
				"AI-powered OCR accurately extracts data from your ID for fast and seamless digital processing.",
			image: "/steps/extraction.png",
			details: [
				{ text: "AI-powered text extraction" },
				{ text: "Urdu and English OCR" },
				{ text: "Raw-to-key-value conversion" },
				{ text: "Geometry-based data validation" },
			],
		},
	]

	const handlePrevious = () => {
		setActiveTab(prev => (prev > 0 ? prev - 1 : prev))
	}
// Auto change tab every 3 seconds
React.useEffect(() => {
	const interval = setInterval(() => {
		setActiveTab(prev => (prev + 1) % tabs.length)
	}, 3000)

	return () => clearInterval(interval)
}, [])
	const handleNext = () => {
		setActiveTab(prev => (prev < tabs.length - 1 ? prev + 1 : prev))
	}

	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex flex-col items-center justify-center text-center mb-12">
					<div className="px-4 py-2 bg-primary-foreground/50 rounded-full shadow-sm border border-gray-100 mb-4">
						<span className="text-base ">Our Solutions</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 leading-tight">
						Identity verification,
						<br />
						simplified, secured, and powered by AI
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						truID's end-to-end identity verification process combines
						biometrics, liveness detection, and AI-powered document analysis to
						confirm authenticity in less than 30 seconds.
					</p>
				</div>

				{/* Tabs Navigation */}
				<div className="flex justify-center mb-12 overflow-x-auto ">
					<div className="flex gap-8 px-4 justify-between w-full">
						{tabs.map(tab => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`whitespace-nowrap pb-3 w-full text-left border-b-4 transition-all cursor-pointer ${
									activeTab === tab.id
										? "border-primary text-gray-900 font-medium"
										: "border-gray-200 text-gray-400 hover:text-gray-600"
								}`}
							>
								<span className="text-sm md:text-base">{tab.label}</span>
							</button>
						))}
					</div>
				</div>

				{/* Content Area - Single Section */}
				<div>
					<div className="bg-linear-to-br from-primary-foreground/50  via-blue-500/30 to-primary-foreground/10 rounded-3xl p-8 md:p-12 min-h-[600px] flex flex-col lg:flex-row justify-between items-center gap-8 transition-all duration-300">
						<div>
							<p className="text-gray-600 mb-6">
								{tabContent[activeTab].instruction}
							</p>

							<h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-700 max-w-3xl leading-tight">
								{tabContent[activeTab].title}
							</h3>
						</div>

						{/* Phone with Animated Detail Boxes */}
						<div className="relative flex-shrink-0">
							<div className="h-[500px] w-[300px] flex items-center justify-center relative">
								{/* Phone Image */}
								<Image
									src={tabContent[activeTab].image}
									alt="Verification Step"
									width={300}
									height={500}
									className="object-cover relative z-10"
								/>

								{/* Animated Detail Boxes - Only render when visible */}
								{/* Top Right */}
								{/* {visibleDetails[0] && (
									<div className="hidden md:absolute z-20 top-[10%] -right-[60%] bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 opacity-0 scale-80 translate-y-5 animate-fade-in">
										<p className="text-sm text-gray-900 whitespace-nowrap font-medium">
											{tabContent[activeTab].details[0].text}
										</p>
									</div>
								)} */}

								{/* Middle Right */}
								{/* {visibleDetails[1] && (
									<div className="hidden md:absolute z-20 top-[40%] -right-[55%] bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 opacity-0 scale-80 translate-y-5 animate-fade-in delay-200">
										<p className="text-sm text-gray-900 whitespace-nowrap font-medium">
											{tabContent[activeTab].details[1].text}
										</p>
									</div>
								)} */}

								{/* Bottom Left */}
								{/* {visibleDetails[2] && (
									<div className="hidden md:absolute z-20 bottom-[20%] -left-[40%] bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 opacity-0 scale-80 translate-y-5 animate-fade-in delay-400">
										<p className="text-sm text-gray-900 whitespace-nowrap font-medium">
											{tabContent[activeTab].details[2].text}
										</p>
									</div>
								)} */}

								{/* Top Left */}
								{/* {visibleDetails[3] && (
									<div className="hidden md:absolute z-20 top-[15%] -left-[55%] bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 opacity-0 scale-80 translate-y-5 animate-fade-in delay-600">
										<p className="text-sm text-gray-900 whitespace-nowrap font-medium">
											{tabContent[activeTab].details[3].text}
										</p>
									</div>
								)} */}
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Buttons */}
				{/* <div className="flex justify-between items-center mt-8 max-w-5xl mx-auto">
					<Button
						variant="ghost"
						onClick={handlePrevious}
						disabled={activeTab === 0}
						className="text-blue-600 hover:text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed"
					>
						<ChevronLeft className="w-4 h-4 mr-1" />
						Previous
					</Button>

					<div className="flex gap-2">
						{tabs.map(tab => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`w-2 h-2 rounded-full transition-all ${
									activeTab === tab.id
										? "bg-blue-600 w-8"
										: "bg-gray-300 hover:bg-gray-400"
								}`}
								aria-label={`Go to ${tab.label}`}
							/>
						))}
					</div>

					<Button
						variant="ghost"
						onClick={handleNext}
						disabled={activeTab === tabs.length - 1}
						className="text-blue-600 hover:text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed"
					>
						Next
						<ChevronRight className="w-4 h-4 ml-1" />
					</Button>
				</div> */}
			</div>

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: scale(0.8) translateY(20px);
					}
					to {
						opacity: 1;
						transform: scale(1) translateY(0);
					}
				}

				.animate-fade-in {
					animation: fadeIn 0.5s ease-out forwards;
				}

				.delay-200 {
					animation-delay: 200ms;
				}

				.delay-400 {
					animation-delay: 400ms;
				}

				.delay-600 {
					animation-delay: 600ms;
				}

				.scale-80 {
					transform: scale(0.8);
				}
			`}</style>
		</section>
	)
}
