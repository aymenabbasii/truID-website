"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import caseStudiesData from "@/utils/caseStudies"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export default function TrustedBy() {
	return (
		<section className="w-full bg-white  pl-10 md:pl-16 lg:pl-24 py-16 md:py-24 ">
			{/* Header */}
			<div className="flex flex-col items-start  mb-8">
				<div className="px-4 py-2 bg-primary-foreground/50 rounded-full shadow-sm border border-gray-100 mb-4">
					<span className="text-base ">
						Case Studies
					</span>
				</div>
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight max-w-5xl">
					Trusted by leading banks, fintechs, and digital innovators
				</h2>
				<p className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed">
					From financial institutions to telecom providers, businesses across
					industries rely on truID's advanced identity verification to onboard
					customers faster and prevent fraud at scale.
				</p>
			</div>

			{/* Carousel */}
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full "
			>
				<CarouselContent className="-ml-4 md:-ml-6">
					{caseStudiesData.map((study, index) => (
						<CarouselItem
							key={index}
							className="pl-4 md:pl-6 py-8 basis-[85%] sm:basis-[45%] lg:basis-[32%] xl:basis-[23%]"
						>
							<Link href={`/case-study/${study.id}`}>
								<Card className="overflow-hidden border-none shadow-lg hover:shadow-xl hover:scale-[103%] ml-2 transition-all duration-300 py-0 rounded-3xl">
									<div className="relative h-[350px] lg:h-[400px]">
										{/* Background Image */}
										<div
											className="absolute inset-0 bg-cover bg-center"
											style={{
												backgroundImage: `url("/case-studies/${study.id}/cover.png")`,
											}}
										>
											{/* Dark Overlay */}
											<div className="absolute inset-0 bg-gray-900/30 " />
										</div>

										{/* Content */}
										<CardContent className="relative h-full flex flex-col justify-between p-8 text-white">
											{/* Top Content */}
											<div>
												<h3 className="text-2xl font-semibold mb-2">
													{study.client}
												</h3>
												<p className="text-base text-gray-200">
													{study.heading}
												</p>
											</div>

											{/* Bottom Content */}
											<div>
												<p className="text-xl font-semibold leading-tight">
													{study.industry}
												</p>
											</div>
										</CardContent>
									</div>
								</Card>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 z-20 bg-primary-foreground text-primary" />
				<CarouselNext className="hidden md:flex -right-4 lg:right-4 z-50 absolute bg-primary-foreground text-primary" />
			</Carousel>
		</section>
	)
}
