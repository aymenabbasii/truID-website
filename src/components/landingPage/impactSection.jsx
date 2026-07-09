import React from "react"
import {
	Building2,
	Smartphone,
	Truck,
	Cross,
	UserCheck,
	Globe,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const impactAreas = [
	{
		icon: Building2,
		title: "Financial Services",
		slug: "financial-services",
		description:
			"Account opening and eKYC compliance for banks, insurance companies, and fintech platforms.",
	},
	{
		icon: Smartphone,
		title: "Telecom",
		slug: "telecom",
		description:
			"User identification and SIM verification powered by NADRA integration for telcos and mobile operators.",
	},
	{
		icon: Truck,
		title: "Transportation",
		slug: "transportation",
		description:
			"Driver identity verification for ride-hailing, fleet management, and logistics platforms.",
	},
	{
		icon: Cross,
		title: "Healthcare",
		slug: "healthcare",
		description:
			"Patient identification and record verification for hospitals and telehealth providers.",
	},
	{
		icon: UserCheck,
		title: "Human Resources",
		slug: "human-resources",
		description:
			"Employee onboarding and background checks with instant document and biometric validation.",
	},
	{
		icon: Globe,
		title: "Travel & Security",
		slug: "travel-security",
		description:
			"Border control, visa processing, and airport identity verification for secure, touchless travel.",
	},
]

export default function ImpactSection() {
	return (
		<section className="w-full bg-white px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
{/* HEADER */}
<div className="flex flex-col items-center text-center mb-16">

	{/* INDUSTRIES BUTTON */}
<div className="px-7 py-3 bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-gray-200 mb-5 inline-block">
	<span className="text-lg font-medium text-gray-800 tracking-wide">
		Industries
	</span>
</div>
	<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
		Where truID creates impact
	</h2>

	<p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
		From banks to governments, truID's AI-powered verification
		technology secures digital identities across industries ensuring
		speed, accuracy, and compliance at every step.
	</p>

</div>

{/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

					{impactAreas.map((area, index) => {
						const IconComponent = area.icon

						return (
							<Link
								href={`/industry/${area.slug}`}
								key={index}
								className="h-full"
							>
								<Card className="h-full border-none shadow-none bg-gray-100/70 hover:bg-primary-foreground transition-colors duration-300 p-4 cursor-pointer">

									<CardContent className="p-0 h-full">

										<div className="flex gap-6 h-full">

											{/* ICON */}
											<div className="shrink-0">
												<div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center">
													<IconComponent
														className="w-10 h-10 text-primary"
														strokeWidth={1.5}
													/>
												</div>
											</div>

											{/* CONTENT */}
											<div className="flex-1 flex flex-col">

												<h3 className="text-sm font-semibold mb-1">
													{area.title}
												</h3>

												<p className="text-sm text-gray-700 leading-relaxed flex-1">
													{area.description}
												</p>

											</div>

										</div>

									</CardContent>

								</Card>
							</Link>
						)
					})}

				</div>

			</div>
		</section>
	)
}