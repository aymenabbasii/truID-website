  "use client"
import React, { useState } from "react"
import Link from "next/link"
import jobsData from "@/utils/jobsData.json"

const categoryColors = {
	blue: {
		text: "text-blue-600",
		bg: "bg-blue-50",
		badge: "text-blue-700",
	},
	pink: {
		text: "text-pink-600",
		bg: "bg-pink-50",
		badge: "text-pink-700",
	},
	purple: {
		text: "text-purple-600",
		bg: "bg-purple-50",
		badge: "text-purple-700",
	},
	green: {
		text: "text-green-600",
		bg: "bg-green-50",
		badge: "text-green-700",
	},
	orange: {
		text: "text-orange-600",
		bg: "bg-orange-50",
		badge: "text-orange-700",
	},
}

const ITEMS_PER_PAGE = 3

export default function CurrentOpportunities() {
	const [currentPage, setCurrentPage] = useState(1)

	// Filter out expired jobs
	// Today's date
const today = new Date()

// Sirf Android Developer show hoga
const activeJobs = jobsData.jobs.filter(
  job => job.title === "Android Developer"
)
	// Calculate total pages
	const totalPages = Math.ceil(activeJobs.length / ITEMS_PER_PAGE)

	// Get current page items
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const endIndex = startIndex + ITEMS_PER_PAGE
	const currentOpportunities = activeJobs
  .filter(job => {
    const expiryDate = new Date(job.expiryDate)
    return today <= expiryDate
  })
  .slice(startIndex, endIndex)

	// Pagination handlers
	const handlePrevious = () => {
		setCurrentPage(prev => Math.max(prev - 1, 1))
	}

	const handleNext = () => {
		setCurrentPage(prev => Math.min(prev + 1, totalPages))
	}

	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
					Current Opportunities
				</h2>

				<p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
					We're always looking for talented people to join our team. Explore
					open roles below or reach out if you think you'd be a great fit.
				</p>

				{/* Job Listings */}
					<div className="space-y-6">
  {currentOpportunities.length === 0 ? (
    <div className="text-center py-10">
      <h4 className="text-2xl font-semibold text-gray-700">
        No Jobs Available
      </h4>
    </div>
  ) : (
					currentOpportunities.map(job => {
						 const expiryDate = new Date(job.expiryDate)
  const isExpired = today > expiryDate
						const colors = categoryColors[job.categoryColor]

						return (
							<div
								key={job.id}
								className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
							>
								<div className="flex justify-between items-start mb-3">
	<div>
		<span className={`text-sm text-blue-600 font-medium`}>
			{job.category}
		</span>
		<div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-1">
			<h3 className="text-xl font-semibold text-gray-900">
				{job.title}
			</h3>
			<span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
				{job.level}
			</span>
		</div>
	</div>

	<div className="flex flex-col items-end gap-2">
		{/* Open Badge */}
		<span
  className={`px-3 py-1 rounded-full text-xs font-semibold ${
    isExpired
      ? "bg-red-100 text-red-700"
      : "bg-green-100 text-green-700"
  }`}
>
  {isExpired ? "🔴 Expired" : "🟢 Open"}
</span>
		{isExpired ? (
  <span className="text-red-600 font-semibold text-xs md:text-sm">
    Expired Job
  </span>
) : (
  <Link
    href={`/job-details/${job.id}`}
    className="text-blue-600 hover:text-blue-700 font-medium text-xs md:text-sm flex items-center gap-1"
  >
    View job
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </Link>
)}
	</div>
</div>
								<p className="text-gray-600 text-sm mb-4">{job.description}</p>

								<div className="flex items-center gap-4 text-sm text-gray-600">
									<div className="flex items-center gap-1.5">
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										{job.location}
									</div>
									<div className="flex items-center gap-1.5">
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										{job.type}
									</div>
								</div>
							</div>
						)
						})
)}

				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex justify-between items-center mt-12">
						<button
							onClick={handlePrevious}
							disabled={currentPage === 1}
							className={`flex items-center gap-2 font-medium text-sm ${
								currentPage === 1
									? "text-gray-400 cursor-not-allowed"
									: "text-blue-600 hover:text-blue-700"
							}`}
						>
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
							Previous
						</button>

						<span className="text-sm text-gray-600">
							Page {currentPage} of {totalPages}
						</span>

						<button
							onClick={handleNext}
							disabled={currentPage === totalPages}
							className={`flex items-center gap-2 font-medium text-sm ${
								currentPage === totalPages
									? "text-gray-400 cursor-not-allowed"
									: "text-blue-600 hover:text-blue-700"
							}`}
						>
							Next
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</div>
				)}
			</div>
		</section>
	)
}
