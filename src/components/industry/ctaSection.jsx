import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CtaSection({ ctaText }) {
	return (
		<section className="w-full flex justify-center  px-10 md:px-16 lg:px-24 py-16 md:py-24 relative">
			<div className="relative w-full max-w-7xl bg-linear-to-br from-primary-foreground/50  via-blue-500/30 to-primary-foreground/10 rounded-3xl overflow-hidden flex flex-col items-center text-center  md:p-20 py-16 md:py-24">
				{/* Left Content */}
				<div className="absolute inset-0 z-0 ">
					<Image
						src="/cta-image.png"
						alt="Background"
						fill
						className="absolute inset-0 w-full h-full object-cover opacity-60"
					></Image>
				</div>
				<h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
					Ready to Get Started?
				</h2>
				<p className="text-lg sm:text-xl text-gray-600 mb-8 relative z-10">
					Transform your operations with truID's cutting-edge identity
					verification
				</p>
				<Link href="/contact-us">
					<Button
						size="lg"
						variant="secondary"
						className="bg-primary hover:bg-blue-700 cursor-pointer text-white relative z-10"
					>
						{ctaText}
						<ArrowRight className="ml-2 w-5 h-5" />
					</Button>
				</Link>
			</div>
		</section>
	)
}
