"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export default function Articles({ blogs }) {
	return (
		<section className="w-full bg-white  pl-10 md:pl-16 lg:pl-24 py-16 md:py-24 md:pt-0 ">
			{/* Header */}
			<div className="mb-12">
				<h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight text-center">
					Trending Articles
				</h2>
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
					{blogs.map((blog, index) => (
						<CarouselItem
							key={index}
							className="pl-4 md:pl-6 basis-[85%] sm:basis-[45%] "
						>
							<Link href={blog.url}>
								<Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 py-0 rounded-4xl">
									<div className="relative h-[350px] lg:h-[400px]">
										{/* Background Image */}
										<div
											className="absolute inset-0 bg-cover bg-center"
											style={{
												backgroundImage: `url(${blog.image})`,
											}}
										>
											{/* Dark Overlay */}
											<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />
										</div>

										{/* Content */}
										<CardContent className="relative h-full flex flex-col justify-end p-8 text-white">
											{/* Bottom Content */}
											<div>
												<p className="text-xl font-semibold leading-tight">
													{blog.title}
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
