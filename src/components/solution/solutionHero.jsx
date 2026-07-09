"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function SolutionHero({
	title,
	subtitle,
	heroImage,
	description,
}) {
	return (
		<section className="relative w-full px-10 md:px-16 lg:px-24 pt-32 lg:pt-16 pb-12">
			<div className="flex flex-col lg:flex-row max-w-7xl justify-between items-center mx-auto lg:gap-12">

				{/* Hero Content */}
				<div className="mx-auto mb-12 lg:mb-16 animate-slide-top lg:max-w-2xl">

					<h2 className="text-lg font-semibold text-blue-600 mb-4 ml-1">
						{title}
					</h2>

					<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						{subtitle}
					</h1>

					<p className="text-base lg:text-lg text-gray-600">
						{description}
					</p>


					{/* CTA Buttons */}
					<div className="flex items-center gap-5 mt-6">

						<Link href="/contact-us">
							<Button
								className="bg-blue-600 hover:bg-blue-700 text-white 
								px-8 py-4 text-base font-semibold rounded-md 
								min-h-[52px] cursor-pointer"
							>
								Contact Us
							</Button>
						</Link>


						<Link
							href="https://calendly.com/d/4nt-r5r-fg7/product-demo"
							target="_blank"
						>
							<Button
								className="bg-blue-600 hover:bg-blue-700 text-white 
								px-8 py-4 text-base font-semibold rounded-md 
								min-h-[52px] cursor-pointer"
							>
								Book a demo
							</Button>
						</Link>

					</div>

				</div>


				{/* Image */}
				<div className="relative h-100 lg:h-160 w-full lg:w-160 overflow-hidden lg:mb-20 bg-white">

					<Image
						src={`/solutions${heroImage}`}
						alt={title}
						fill
						className="object-contain lg:object-cover"
						priority
					/>

				</div>

			</div>
		</section>
	)
}