import React from "react"
import Image from "next/image"

export default function TrustSection() {
	return (
		<section className="relative w-full  px-10 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden bg-primary-foreground rounded-[200px]">
			<div className="container mx-auto md:px-6">
				{/* Top Section - Mission Statement */}
				<div className="max-w-3xl mx-auto text-center mb-16 relative px-6 md:px-0">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Digital identity is the foundation of trust
					</h2>
					<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
						Our mission is to empower individuals and organizations to build
						trust through frictionless verification, advanced biometrics, and
						strong data protection.
					</p>
				</div>
				<div className="flex flex-col gap-20 max-w-7xl mx-auto ">
					<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 w-full">
						{/* Image Grid */}

						{/* Right 2x2 Grid */}
						<div className="lg:col-span-2 grid grid-cols-1 grid-rows-2 gap-6 h-100 ">
							{["/our-company/1.jpg", "/our-company/2.jpg"].map(
								(src, index) => (
									<div
										key={index}
										className="relative overflow-hidden bg-gray-200 rounded-4xl"
									>
										<Image
											src={src}
											alt={`Life at truid ${index + 2}`}
											fill
											style={{ objectPosition: "0% 0%" }}
											placeholder="blur"
											blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyMjIyMjIiIC8+PC9zdmc+"
											className="object-cover transition-transform duration-500 hover:scale-105"
										/>
									</div>
								),
							)}
						</div>
						<div className="lg:col-span-2 h-100 relative overflow-hidden bg-gray-200 rounded-4xl">
							<Image
								src="/our-company/0.jpg"
								alt="Life at truid"
								fill
								className="object-cover transition-transform duration-500 hover:scale-105"
							/>
						</div>

						<div className="lg:col-span-2 grid grid-cols-1 grid-rows-2 gap-6 h-100 ">
							{["/our-company/3.jpg", "/our-company/4.jpg"].map(
								(src, index) => (
									<div
										key={index}
										className="relative overflow-hidden bg-gray-200 rounded-4xl"
									>
										<Image
											src={src}
											alt={`Life at truid ${index + 2}`}
											fill
											style={{ objectPosition: "0% 0%" }}
											placeholder="blur"
											blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyMjIyMjIiIC8+PC9zdmc+"
											className="object-cover transition-transform duration-500 hover:scale-105"
										/>
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
