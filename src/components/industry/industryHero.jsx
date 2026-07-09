import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function IndustryHero({
	title,
	heading,
	description,
	imageSrc,
	imageAlt,
}) {
	return (
		<section className="relative w-full px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24 bg-primary-foreground ">
			<div className="flex flex-col lg:flex-row max-w-7xl justify-between items-center mx-auto gap-12 ">
				{/* Hero Content */}
				<div className=" mx-auto mb-12 md:mb-16 animate-slide-top max-w-2xl">
					<h2 className="text-lg font-semibold text-blue-600 mb-4 ml-1">
						{title}
					</h2>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ">
						{heading}
					</h1>
					<p className="text-base md:text-lg  text-gray-600 ">{description}</p>
					<div className="hidden md:flex items-center gap-4 mt-6 ">
						
						<Link
							href={"https://calendly.com/d/4nt-r5r-fg7/product-demo"}
							target="_blank"
						>
							<Button className="bg-blue-600 hover:bg-blue-700 text-white py-[22px] cursor-pointer">
								Book a demo
							</Button>
						</Link>
					</div>
				</div>

				<div className="relative h-60 lg:h-120 w-full lg:w-160 rounded-4xl  overflow-hidden bg-white shadow-lg">
					<Image
						src={imageSrc}
						alt={imageAlt}
						fill
						className="object-cover"
						style={{objectPosition:"60% 0%"}}
						priority
					/>
				</div>
			</div>
		</section>
	)
}
