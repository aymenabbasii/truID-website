import { CheckCircle } from "lucide-react"
import React from "react"

export default function Detail({ caseStudy }) {
	return (
		<div className="px-10 md:px-16 lg:px-24 py-16 pt-0 md:py-24 md:pt-8">
			{/* Header Section - Matching Design */}
			<header>
				<div className="max-w-5xl mx-auto  ">
					<div className="grid grid-cols-2 gap-x-16 gap-y-4">
						<div>
							<p className=" mb-1 font-bold">Client</p>
							<p className=" text-gray-600">{caseStudy.client}</p>
						</div>
						<div>
							<p className="mb-1 font-bold">Industry</p>
							<p className=" text-gray-600">{caseStudy.industry}</p>
						</div>
						<div>
							<p className=" mb-1 font-bold">Region</p>
							<p className=" text-gray-600">{caseStudy.region}</p>
						</div>
						<div>
							<p className="mb-1 font-bold">Use Case:</p>
							<p className=" text-gray-600">{caseStudy.useCase}</p>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-5xl mx-auto py-12">
				{/* Overview Section */}
				<section className="mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-8">
						{caseStudy.overview.title}
					</h2>
					<p className="text-gray-700 text-base leading-relaxed mb-8 whitespace-pre-line">
						{caseStudy.overview.content}
					</p>

					{/* Overview Image if exists */}
					{caseStudy.overview.image && (
						<div className="my-8">
							<img
								src={caseStudy.overview.image}
								alt="Overview"
								className="w-full rounded-lg"
							/>
						</div>
					)}
				</section>

				{/* Dynamic Sections */}
				{caseStudy.sections.map((section, sectionIdx) => (
					<section key={sectionIdx} className="mb-16">
						<div className="flex flex-col items-start">
							{section.title.split(":")[1] ? (
								<>
									<div className="px-4 py-2 bg-primary-foreground/50 rounded-full shadow-sm border border-gray-100 mb-4">
										<span className="text-base">
											{section.title.split(":")[0]}
										</span>
									</div>
									<h2 className="text-4xl font-bold text-gray-900 mb-8">
										{section.title.split(":")[1]}
									</h2>
								</>
							) : (
								<h2 className="text-4xl font-bold text-gray-900 mb-8">
									{section.title}
								</h2>
							)}
						</div>

						{section.content && (
							<p className="text-gray-700 text-base leading-relaxed mb-6">
								{section.content}
							</p>
						)}

						{section.bullets && (
							<ul className="space-y-4">
								{section.bullets.map((bullet, bulletIdx) => (
									<li key={bulletIdx} className="pl-0  ml-6">
										{bullet.heading ? (
											<div className="flex items-center gap-3 mb-1">
												<div className="flex-shrink-0">
													<CheckCircle className="w-6 h-6 text-primary" />
												</div>
												<p className="text-gray-900 text-base leading-relaxed">
													<span className="font-bold">{bullet.heading}:</span>{" "}
													{bullet.text}
												</p>
												{bullet.punchline && (
													<p className="text-gray-600 text-sm mt-1 ml-4">
														⟶ {bullet.punchline}
													</p>
												)}
											</div>
										) : (
											<div className="flex items-center gap-3 mb-1">
												<div className="flex-shrink-0">
													<CheckCircle className="w-6 h-6 text-primary" />
												</div>
												<p className="text-gray-700 text-base leading-relaxed">
													{bullet.text}
												</p>
											</div>
										)}
									</li>
								))}
							</ul>
						)}

						{section.punchline && (
							<div className="mt-6">
								<p className="text-gray-900 text-base ">{section.punchline}</p>
							</div>
						)}
					</section>
				))}

				{/* Conclusion */}
				{caseStudy.conclusion && (
					<section className="mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-8">
							Conclusion
						</h2>
						<p className="text-gray-700 text-base leading-relaxed">
							{caseStudy.conclusion}
						</p>
					</section>
				)}
			</main>
		</div>
	)
}
