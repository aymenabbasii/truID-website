import React from "react"
import Image from "next/image"

export default function HeroSection({
	heading,
	description,
	imageSrc,
	imageAlt,
}) {
	return (
		<section className="relative w-full px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24 ">
			<div className="container mx-auto md:px-6">
				{/* Hero Content */}
				<div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 animate-slide-top ">
					<h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-900 mb-6 leading-tight ">
						{heading}
					</h1>
					<p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
						{description}
					</p>
				</div>

				{/* Hero Image */}
				<div className="max-w-4xl mx-auto animate-slide-bottom">
					<div className="relativeoverflow-hidden ">
						<div className="relative rounded-4xl md:rounded-[100px]  overflow-hidden bg-white shadow-lg">
							<div className="aspect-video relative">
								<Image
									src={imageSrc}
									alt={imageAlt}
									fill
									className="object-cover"
									priority
									style={{ objectPosition: "0% 45%" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
