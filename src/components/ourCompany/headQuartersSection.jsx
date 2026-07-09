export default function HeadquartersSection() {
	const operatingCountries = ["Algeria", "Ghana", "Kenya", "Rwanda"]

	return (
		<section className="bg-primary text-white rounded-4xl px-10 md:px-16 lg:px-24 py-16 md:py-24 ">
			<div className="max-w-7xl mx-auto">
				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
					{/* Left Side - Heading */}
					<div>
						<h2 className="text-4xl  = font-bold leading-tight">
							Headquartered in Pakistan.
							<br />
							Trusted around the world.
						</h2>
					</div>

					{/* Right Side - Description */}
					<div className="flex items-center">
						<p className="text-base md:text-lg text-blue-50 leading-relaxed">
							While truID operates from our innovation hub in Islamabad, our
							technology powers secure digital identity verification for clients
							across multiple regions.
						</p>
					</div>
				</div>
				<div className="mb-6">
					<p className="text-sm text-blue-200 mb-2">Head Office</p>
					<p className="font-medium text-lg">NSTP, Islamabad,</p>
					<p className="font-medium text-lg">Pakistan</p>
				</div>
				{/* Location Information */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					{/* Head Office */}

					{/* Where we operate */}
					<div className="lg:col-span-4">
						<p className="text-sm text-blue-200 mb-2">Where we operate</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{operatingCountries.map((country, index) => (
								<p key={index} className="font-medium text-lg">
									{country}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
