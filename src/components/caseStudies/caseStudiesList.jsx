"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import caseStudiesData from "@/utils/caseStudies.json"
import Link from "next/link"
import Image from "next/image"

const CaseStudiesList = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 4

	const totalPages = Math.ceil(caseStudiesData.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const currentcaseStudiesData = caseStudiesData.slice(startIndex, endIndex)

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	return (
		<div className="w-full  mx-auto px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24">
			{/* Header */}
			<div className="text-center mb-16 max-w-7xl mx-auto">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
					Trusted by leading banks,
					<br />
					fintechs, and enterprises.
				</h1>
				<p className="text-gray-600 text-lg max-w-3xl mx-auto">
					Learn how truID helps organizations across industries verify
					identities faster, prevent fraud, and achieve digital onboarding
					success.
				</p>
			</div>

			{/* Testimonial Cards Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto ">
				{currentcaseStudiesData.map((testimonial, index) => (
					<Link href={`/case-study/${testimonial.id}`} key={index}>
						<div
							key={testimonial.id}
							className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
						>
							<div className="p-8">
								<div className="flex flex-col md:flex-row items-start gap-6 mb-6">
									<div className="w-36 h-40 bg-gray-200 rounded-lg overflow-hidden shrink-0 relative">
										<Image
											src={testimonial.image}
											alt={testimonial.company}
											className="w-full h-full object-cover"
											objectPosition="90% 0%"
											fill
										/>
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-gray-900 mb-3">
											{testimonial.heading}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{testimonial.description}
										</p>
									</div>
								</div>

								{/* Stats */}
								<div className="grid grid-cols-2   pt-6 border-t border-gray-200">
									<div className="flex flex-col ">
										<div className="font-bold text-gray-900 mb-1">
											Industry:
										</div>
										<div className="text-sm text-gray-600">
											{testimonial.industry}
										</div>
									</div>
									<div className="flex flex-col  ">
										<div className="font-bold text-gray-900 mb-1">
											Use Case:
										</div>
										<div className="text-sm text-gray-600">
											{testimonial.useCase}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Pagination */}
			<div className="flex items-center justify-center gap-4">
				<button
					onClick={prevPage}
					disabled={currentPage === 1}
					className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					aria-label="Previous page"
				>
					<ChevronLeft className="w-5 h-5 text-gray-600" />
				</button>

				<div className="flex items-center gap-2">
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`w-10 h-10 rounded-lg font-medium transition-colors ${
								currentPage === page
									? "bg-blue-600 text-white"
									: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
							}`}
						>
							{page}
						</button>
					))}
				</div>

				<button
					onClick={nextPage}
					disabled={currentPage === totalPages}
					className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					aria-label="Next page"
				>
					<ChevronRight className="w-5 h-5 text-gray-600" />
				</button>
			</div>

			{/* Page Info */}
			<div className="text-center mt-4 text-sm text-gray-600">
				Showing {startIndex + 1}-{Math.min(endIndex, caseStudiesData.length)} of{" "}
				{caseStudiesData.length} case studies
			</div>
		</div>
	)
}

export default CaseStudiesList
