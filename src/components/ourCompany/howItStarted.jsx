"use client"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const timelineData = [
	{
		year: "2021",
		bullets: [
		
			"Vision to redefine identity verification",
			"Team formation",
			"Secured Angel Investment for our MVP",
			"Initiated R&D on ID Document",
		],
	},
	{
		year: "2022",
		bullets: [
			"Launched the truID Product",
			"First Customer",
			"Extended R&D to Support Multiple ID Document Types",
			"Secured HEC Innovation Seed Fund Grant worth $35,000",
		],
	},
	{
		year: "2023",
		bullets: [
			"Notable presence at Future Fest Lahore",
			"Impactful participation at AITechVerse",
			"Onboarded customers like Askari Bank",
			"Expanded product capabilities for enterprise clients",
		],
	},
	{
		year: "2024",
		bullets: [
		"Signed Partnership with Vaulsys ",
"Deployed Indegenous Fingerprint Capturing algorithm ",
		],
	},
	{
		year: "2025",
		bullets: [
			"Crossed 4 million verification",
		],
	},
	{
		year: "2026",
		bullets: [
			"Onboarded further clients DIB",
		],
	},
]
export default function HowItStarted() {
	const [activeYear, setActiveYear] = useState("2021")
	const [displayedYear, setDisplayedYear] = useState("2021")
	const [isAnimating, setIsAnimating] = useState(false)
	const active = timelineData.find(d => d.year === displayedYear)

	const handleYearChange = year => {
	if (year === activeYear) return

	setIsAnimating(true)
	setActiveYear(year)

	setTimeout(() => {
		setDisplayedYear(year)
		setIsAnimating(false)
	}, 200)
}

// Auto change every 3 seconds
useEffect(() => {
	const interval = setInterval(() => {
		const currentIndex = timelineData.findIndex(
			item => item.year === activeYear
		)

		const nextIndex = (currentIndex + 1) % timelineData.length

		handleYearChange(timelineData[nextIndex].year)
	}, 3000)

	return () => clearInterval(interval)
}, [activeYear])
	return (
		<section
			className="relative w-full bg-white px-10 md:px-16 lg:px-24 py-16 md:py-24"
			id="history"
		>
			<style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .bullet-list {
          animation: fadeSlideIn 0.3s ease forwards;
        }
        .bullet-list.exiting {
          animation: none;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .year-label {
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .year-label:hover {
          transform: translateX(4px);
        }
        .bullet-item {
          opacity: 0;
          animation: fadeSlideIn 0.35s ease forwards;
        }
        .bullet-item:nth-child(1) { animation-delay: 0.05s; }
        .bullet-item:nth-child(2) { animation-delay: 0.10s; }
        .bullet-item:nth-child(3) { animation-delay: 0.15s; }
        .bullet-item:nth-child(4) { animation-delay: 0.20s; }
      `}</style>

			<div className="container max-w-7xl mx-auto">
				<div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
					{/* Left - Timeline */}
					<div className="flex gap-10">
						<div>
							<div className="flex flex-col items-start mb-12">
								<div className="px-4 py-2 bg-primary-foreground/50 rounded-full shadow-sm border border-gray-100 mb-4">
									<span className="text-base">Our Journey</span>
								</div>
								<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
									How It Started
								</h2>
								<p className="text-gray-600 text-base max-w-xl">
									Here's everything you need to know about how truID keeps
									digital identity verification fast, secure, and compliant.
								</p>
							</div>

							<div className="flex gap-10">
								{/* Years column */}
								<div className="flex flex-col">
									{timelineData.map(item => (
										<div
											key={item.year}
											className="flex flex-col items-start cursor-pointer"
											onClick={() => handleYearChange(item.year)}
											onMouseEnter={() => handleYearChange(item.year)}
										>
											<span
												className={`year-label font-bold text-4xl mb-8 ${
													activeYear === item.year
														? "text-blue-600"
														: "text-gray-500 hover:text-blue-400"
												}`}
											>
												{item.year}
											</span>
										</div>
									))}
								</div>

								{/* Content panel */}
								<div className="pt-1 flex-1 min-h-[200px]">
									<ul
										key={displayedYear}
										className={`space-y-6 ${isAnimating ? "exiting" : "bullet-list"}`}
									>
										{active.bullets.map((b, i) => (
											<li
												key={i}
												className="bullet-item flex items-start gap-2"
											>
												<CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" />
												<span className="text-gray-600 text-lg leading-relaxed">
													{b}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Right - Image Grid UNCHANGED */}
					{/* Right - Image Grid */}
					<div
						className="relative h-96 md:h-[500px] bg-white mb-12"
						style={{ isolation: "isolate" }}
					>
						<div
							className="absolute top-0 left-4 md:left-0 w-48 md:w-72 h-32 md:h-80 rounded-3xl overflow-hidden shadow-xl z-20 rotate-3 border-6 border-white bg-gray-200
    transition-all duration-300 ease-in-out
    hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:z-40 hover:rotate-1"
						>
							<Image
								src="/our-company/how-it-started/1.jpg"
								alt="Team meeting"
								fill
								className="object-cover"
							/>
						</div>

						<div
							className="absolute top-28 md:top-32 left-16 md:left-32 w-44 md:w-56 h-48 md:h-64 rounded-3xl -rotate-6 overflow-hidden shadow-xl z-30 border-6 border-white bg-gray-200
    transition-all duration-300 ease-in-out
    hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:z-40 hover:-rotate-3"
						>
							<Image
								src="/our-company/how-it-started/2.jpg"
								alt="Team celebration"
								fill
								className="object-cover"
							/>
						</div>

						<div
							className="absolute bottom-0 right-18 md:right-0 w-48 md:w-80 h-32 md:h-80 rounded-3xl overflow-hidden rotate-6 shadow-xl z-10 border-6 border-white bg-gray-200
    transition-all duration-300 ease-in-out
    hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:z-40 hover:rotate-3"
						>
							<Image
								src="/our-company/how-it-started/3.jpg"
								alt="Outdoor activity"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
