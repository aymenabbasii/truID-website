"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

const steps = [
	{
		number: "01.",
		title: "Face liveness to detect real users, not fake ones.",
		description:
			"AI-powered humans detection verifies genuine users through micro-expressions and facial texture   no gestures required, no spoofing possible.",

		picture: "/steps/check.JPEG",
	},
	{
		number: "02.",
		title: "Validate IDs with forensic-level precision.",
		description:
			"truID's multi-layer document analysis detects tampering, forgery, and deepfake attempts in real-time with 99% accuracy.",
		picture: "/steps/id.png",
	},
	{
		number: "03.",
		title: "Match ID photos with live selfies in seconds.",
		description:
			"AI compares the user's live image to their ID photo, accounting for lighting, age, and appearance variations.",
		picture: "/steps/selfie.jpg",
	},
	{
		number: "04.",
		title: "Touchless fingerprint biometric capture.",
		description:
			"Instantly capture and verify fingerprints via smartphone, with fake-proof scans and high-quality NFIQ2 matching to government databases like NADRA. ",
		picture: "/steps/online.png",
	},
	{
		number: "05.",
		title: "Accurate OCR for Instant Text Extraction.",
		description:
			"Extract English & Urdu text from IDs instantly, validating identity and saving manual entry hassle.",
		picture: "/steps/extraction.png",
	},
]

export default function Steps() {
	const [activeIndex, setActiveIndex] = useState(0)
	const containerRef = useRef(null)
	const sectionRefs = useRef([])

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return

			const containerRect = containerRef.current.getBoundingClientRect()
			const triggerPoint = window.innerHeight * 0.3 // Start when container is 30% from top

			// Only activate when the container enters the viewport
			if (containerRect.top > triggerPoint) {
				setActiveIndex(-1)
				return
			}

			// Calculate which card should be active based on scroll
			const scrollIntoContainer = triggerPoint - containerRect.top
			const sectionHeight = window.innerHeight * 0.6
			const newIndex = Math.floor(scrollIntoContainer / sectionHeight)

			setActiveIndex(Math.min(steps.length - 1, Math.max(0, newIndex)))
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div>
			{/* Sticky Stack Container */}
			<div ref={containerRef} className="relative pb-32">
				{steps.map((step, index) => {
					const isActive = index <= activeIndex
					const isPassed = index < activeIndex

					// Cards stack from bottom to top
					const stackOffset = index * 20
					const scale = 1
					const opacity = 1

					return (
						<div
							key={index}
							ref={el => (sectionRefs.current[index] = el)}
							className="sticky transition-all duration-700 ease-out"
							style={{
								top: `${100 + stackOffset}px`,
								transform: `translateY(${index * 20}px)`,
								opacity: opacity,
								zIndex: steps.length + index,
							}}
						>
							<div className="mx-auto max-w-7xl  mb-8 ">
								<div className="bg-linear-to-r from-primary-foreground to-purple-200  rounded-[80px] shadow-lg overflow-hidden border border-gray-300  px-4">
									<div className="p-6 md:p-10 flex flex-col md:flex-row justify-between gap-8">
										{/* Number */}
										<div className="text-4xl font-semibold  mt-2">
											{step.number}
										</div>
										<div className="md:w-1/2">
											{/* Title */}
											<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
												{step.title}
											</h2>

											{/* Description */}
											<p className="text-base text-gray-600 leading-relaxed">
												{step.description}
											</p>
										</div>
										<div className="w-full md:w-[40%] mx-auto h-100 relative">
											<Image
												src={step.picture}
												alt={step.title}
												fill
												className="object-contain"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
