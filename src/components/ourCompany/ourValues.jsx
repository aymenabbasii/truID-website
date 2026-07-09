import { Shield, Rocket, MapPin, Award, Star, Headphones } from "lucide-react"

export default function OurValues() {
	const values = [
		{
			icon: Rocket,
			title: "Innovation",
			description:
				"Pushing boundaries to create game-changing identity verification solutions.",
		},
		{
			icon: Award,
			title: "Integrity",
			description: "Transparency and compliance guide everything we do.",
		},
		{
			icon: Shield,
			title: "Trust",
			description:
				"Building reliable, secure systems to foster deep-rooted trust with clients.",
		},
		{
			icon: Headphones,
			title: "Customer Centricity",
			description: "Providing a fast and smooth experience to the users",
		},
	]

	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 md:py-24 " id="values">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
					Our Values
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-16 mb-12">
					{values.map((value, index) => {
						const Icon = value.icon
						return (
							<div
								key={index}
								className="flex flex-col items-start space-y-4 group transition-all"
							>
								<div className=" h-16 w-16 rounded-2xl bg-gray-200 flex items-center justify-center group-hover:bg-primary duration-300 ">
									<Icon
										className="w-8 h-8 text-gray-700 group-hover:text-white duration-300"
										strokeWidth={2}
									/>
								</div>

								<div className="space-y-2">
									<h3 className="text-2xl font-semibold text-gray-900">
										{value.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{value.description}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
