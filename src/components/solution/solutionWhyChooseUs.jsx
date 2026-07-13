"use client"

import React from "react"
import { Award, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export default function SolutionWhyChoose({ title, description, heroImage }) {
	const highlights = [
		{ icon: Award, text: "Industry-leading accuracy" },
		{ icon: Shield, text: "Bank-grade security" },
		{ icon: Zap, text: "Lightning-fast verification" },
		{ icon: CheckCircle, text: "Proven reliability" },
	]

	return (
		<section className=" px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center bg-linear-to-br from-primary-foreground/50  via-blue-500/30 to-primary-foreground/10 max-w-6xl mx-auto rounded-3xl border shadow-lg gap-8 p-10 lg:p-12">
					{/* Main Content */}
					<div className="lg:w-1/2 overflow-hidden">
						<div className="grid">
							{/* Left Side - Content */}
							<div>
								<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
									{title}
								</h2>
								<p className="text-lg text-slate-700 leading-relaxed mb-8">
									{description}
								</p>
								<Link href={"/contact-us"}>
									<Button className="bg-blue-600 hover:bg-blue-700 text-white py-[22px] cursor-pointer">
										Contact Us
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative rounded-4xl h-60 lg:h-120 w-full lg:w-120 overflow-hidden">
						<Image
							src={`/solutions/whyus${heroImage}`}
							alt={title}
							fill
							className="object-contain"
							style={{ objectPosition: "60% 100%" }}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
