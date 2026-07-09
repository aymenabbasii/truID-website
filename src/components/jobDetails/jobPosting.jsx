"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Clock, AlertCircle } from "lucide-react"

export default function JobPosting({ job }) {
	// Check if job is expired
	const isExpired = job.expired
	

	return (
		<div className="px-8 md:px-16 lg:px-24 py-24 md:pt-32">
			{/* Header */}
			<header className="bg-white border-b">
				<div className="max-w-4xl mx-auto px-6 pb-12 flex flex-col items-center">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{job.title}
					</h1>

					<div className="flex flex-wrap justify-start items-center gap-6 text-gray-600 mb-6 md:justify-center">
						<div className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span>
								<strong>Location:</strong> {job.location} ({job.locationType})
							</span>
						</div>
						<div className="flex items-center gap-2">
							<Building2 className="w-4 h-4" />
							<span>
								<strong>Department:</strong> {job.department}
							</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-4 h-4" />
							<span>
								<strong>Type:</strong> {job.type}
							</span>
						</div>
					</div>

					{/* Expired Warning */}
				{isExpired ? (
  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6">
    <AlertCircle className="w-5 h-5 flex-shrink-0" />
    <div>
      <p className="font-semibold">This position has expired</p>
      <p className="text-sm">
        This job posting is no longer accepting applications. Please
        check our other open positions.
      </p>
    </div>
  </div>
				) : (
  <div className="flex items-center">
    
  </div>
)}	
</div>
			</header>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto pt-12">
				{/* Job Description */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Job description:
					</h2>
					<p className="text-gray-700 leading-relaxed">{job.fullDescription}</p>
				</section>

				{/* What you'll do */}
				{job.responsibilities && job.responsibilities.length > 0 && (
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							What you'll do:
						</h2>
						<ul className="space-y-3 text-gray-700">
							{job.responsibilities.map((responsibility, index) => (
								<li key={index} className="flex gap-3">
									<span className="text-primary mt-1">•</span>
									<span>{responsibility}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Requirements */}
				{job.requirements && job.requirements.length > 0 && (
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							What We're Looking For
						</h2>
						<ul className="space-y-3 text-gray-700">
							{job.requirements.map((requirement, index) => (
								<li key={index} className="flex gap-3">
									<span className="text-primary mt-1">•</span>
									<span>{requirement}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Ideal Candidate */}
				{job.idealCandidate && job.idealCandidate.length > 0 && (
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							What You'll Bring
						</h2>
						<ul className="space-y-3 text-gray-700">
							{job.idealCandidate.map((trait, index) => (
								<li key={index} className="flex gap-3">
									<span className="text-primary mt-1">•</span>
									<span>{trait}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Benefits */}
				{job.benefits && job.benefits.length > 0 && (
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							What We Offer
						</h2>
						<ul className="space-y-3 text-gray-700">
							{job.benefits.map((benefit, index) => (
								<li key={index} className="flex gap-3">
									<span className="text-primary mt-1">•</span>
									<span>{benefit}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* How to Apply */}
				{!isExpired && job.applyInstructions && (
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							How to Apply
						</h2>
						<p className="text-gray-700 leading-relaxed">
							{job.applyInstructions}
						</p>
					</section>
				)}
			</main>
			{/* Apply Button */}
{!isExpired && (
  <div className="flex justify-start mt-12">
    <Button
  className="bg-primary hover:bg-blue-700 text-white px-8 py-6"
  onClick={() =>
    window.open(
      "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
      "_blank"
    )
  }
>
  Apply Now
</Button>
  </div>
)}
		</div>
	)
}
