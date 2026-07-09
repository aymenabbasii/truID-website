"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
	return (
		<section className="w-full flex justify-center px-10 md:px-16 lg:px-24 py-16 md:py-24 relative">
			<div className="relative w-full max-w-7xl bg-linear-to-b from-primary-foreground/50  via-blue-500/30 to-blue-500/30 rounded-3xl overflow-hidden flex flex-col items-center text-center p-8 md:p-20 py-16 md:py-24">
				{/* Left Content */}
				<div className="absolute inset-0 z-0 ">
					<Image
						src="/cta-image.png"
						alt="Background"
						fill
						className="absolute inset-0 w-full h-full object-cover opacity-60"
					></Image>
				</div>
				<h1 className="text-4xl md:text-6xl font-semibold max-w-3xl text-gray-800 leading-tight mb-6 relative z-10">
					Start verifying identities in 30 seconds
				</h1>

				<p className="text-lg sm:text-xl max-w-3xl text-gray-600  relative z-10">
					See how truID can help your organization onboard customers faster,
					prevent fraud, and stay fully compliant.
				</p>
				<Link
					href="https://calendly.com/d/4nt-r5r-fg7/product-demo"
					target="_blank"
					className=" relative z-10"
				>
					<Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-6 mt-6 cursor-pointer ">
						Book a demo
					</Button>
				</Link>
			</div>
		</section>
	)
}
