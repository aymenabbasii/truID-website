"use client"

import React from "react"
import {
	Camera,
	Shield,
	UserCheck,
	FileText,
	Fingerprint,
	Sparkles,
	Zap,
	Target,
	Users,
	TrendingUp,
	Lock,
	FileSearch,
	Layers,
	Eye,
	GitBranch,
	CheckCircle2,
	ScanFace,
	Brain,
	Shuffle,
	CheckCheck,
	Type,
	Languages,
	BadgeCheck,
	Gauge,
	Smartphone,
	ShieldAlert,
	Award,
	Database,
} from "lucide-react"

const iconMap = {
	Camera,
	Shield,
	UserCheck,
	FileText,
	Fingerprint,
	Sparkles,
	Zap,
	Target,
	Users,
	TrendingUp,
	Lock,
	FileSearch,
	Layers,
	Eye,
	GitBranch,
	CheckCircle2,
	ScanFace,
	Brain,
	Shuffle,
	CheckCheck,
	Type,
	Languages,
	BadgeCheck,
	Gauge,
	Smartphone,
	ShieldAlert,
	Award,
	Database,
}

export default function SolutionKeyFeatures({ features }) {
	return (
		<section className=" px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-24">
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Key Features & Benefits
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Discover the powerful capabilities that make our solution stand out
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
					{features.map((feature, index) => {
						const IconComponent = iconMap[feature.icon]

						return (
							<div
								key={index}
								className="group bg-white rounded-2xl text-center relative p-8 shadow-md hover:shadow-xl transition-all duration-300 border hover:-translate-y-1"
							>
								{/* Icon */}
								<div className="absolute -top-9 left-2/5 mb-6">
									<div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
										{IconComponent && (
											<IconComponent className="w-7 h-7 text-white" />
										)}
									</div>
								</div>

								{/* Content */}
								<h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors mt-6">
									{feature.title}
								</h3>
								<p className="text-slate-600 leading-relaxed">
									{feature.description}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
