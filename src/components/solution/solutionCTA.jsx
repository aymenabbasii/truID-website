"use client"

import React from "react"
import { ArrowRight, Mail, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolutionCta() {
	return (
		<section className="w-full flex justify-center px-10 md:px-16 lg:px-24 py-16 md:py-24 relative">
			<div className="relative w-full max-w-7xl bg-linear-to-br from-primary-foreground/50 via-blue-500/30 to-primary-foreground/10 rounded-3xl overflow-hidden flex flex-col items-center text-center p-8 md:p-20 py-16 md:py-24">

				<div className="absolute inset-0 z-0">
					<Image
						src="/cta-image.png"
						alt="Background"
						fill
						className="absolute inset-0 w-full h-full object-cover opacity-60"
					/>
				</div>

				<div className="max-w-4xl mx-auto text-center relative z-10">

					{/* Main Heading */}
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Ready to Get Started?
					</h2>

					<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
						Transform your identity verification process with truID. Join
						thousands of organizations already using our solutions.
					</p>
{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
	<Link
		href="/contact-us"
		className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
	>
		Contact Us
	</Link>
</div>

				</div>

			</div>
		</section>
	)
}