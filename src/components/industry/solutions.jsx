import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function SolutionsSection({ solutions, title }) {
	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 ">
			<div className="container mx-auto max-w-5xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
						Solutions & Use Cases
					</h2>
					<p className="text-gray-600 text-lg max-w-4xl mx-auto">
						Explore our comprehensive solutions designed to meet your business
						needs
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
					{solutions.slice(0, 4).map((solution, index) => (
						<div
							key={index}
							className="rounded-2xl cursor-pointer border shadow-md overflow-hidden hover:shadow-lg group transition-shadow duration-500"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image
									fill
									src={`/industries/${title}/${index + 1}.png`}
									alt={solution.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									objectPosition="25% 20%"
								/>
							</div>

							{/* Hover State - Features List */}
							<div className=" flex flex-col justify-start p-8 transition-all duration-500 ">
								<h3 className="text-2xl font-bold text-gray-800 mb-2">
									{solution.title}
								</h3>
								<p className="text-gray-700 text-sm leading-relaxed mb-2">
									{solution.description}
								</p>

								{/* Features List */}
								<div className="space-y-3">
									{solution.features.map((feature, idx) => (
										<div key={idx} className="flex items-center gap-3">
											<div className="flex-shrink-0">
												<CheckCircle className="w-6 h-6 text-primary" />
											</div>
											<span className="text-gray-700 text-sm leading-relaxed">
												{feature}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
