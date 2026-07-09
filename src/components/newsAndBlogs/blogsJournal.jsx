import React from "react"
import Image from "next/image"
import { Clock } from "lucide-react"
import Link from "next/link"

const BlogJournal = ({ blogs }) => {
	return (
		<div className="w-full max-w-7xl mx-auto  px-10 md:px-16 lg:px-24 py-24 md:py-36 md:pb-24">
			{/* Header */}
			<div className="text-center mb-16">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
					The Digital Identity Journal
				</h1>
				<p className="text-gray-600 text-lg max-w-4xl mx-auto">
					Insights, research, and thought leadership from truID exploring AI,
					biometrics, cybersecurity, and the future of digital verification.
				</p>
			</div>

			{/* Featured Post */}
			<div className="mb-12">
				<Link href={blogs[0].url}>
					<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
						<div className="grid md:grid-cols-2 gap-8 p-8">
							{/* Image */}
							<div className="relative">
								<div className="w-full h-full min-h-[300px] bg-gray-300 rounded-xl overflow-hidden relative">
									<Image
										src={blogs[0].image}
										alt={blogs[0].title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
							</div>

							{/* Content */}
							<div className="flex flex-col justify-center ">
								<span
									className={`inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide w-fit mb-4 ${blogs[0].categoryColor}`}
								>
									{blogs[0].category}
								</span>

								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									{blogs[0].title}
								</h2>

								<p className="text-gray-600 text-base mb-6 leading-relaxed">
									{blogs[0].excerpt}
								</p>

								{/* Meta Info */}
								<div className="flex items-center gap-6 text-sm text-gray-500 divide-x-2">
									{/* <div className="flex items-center gap-2 pr-6">
									<div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center relative overflow-hidden">
										<Image
											src={"/blogs[0].author.avatar"}
											alt={"blogs[0].author.name"}
											fill
											className="object-cover"
											sizes="32px"
										/>
									</div>
								</div> */}

									{/* <div className="flex items-center gap-1 pr-6">
									<Clock className="w-4 h-4" />
									<span>{blogs[0].readTime}</span>
								</div> */}

									<span>{blogs[0].date}</span>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>

			{/* Regular Posts Grid */}
			<div className="grid md:grid-cols-2 gap-8">
				{blogs.slice(1).map((post, index) => (
					<Link href={post.url} key={index}>
						<div
							key={index}
							className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-52"
						>
							<div className="p-6">
								<div className="flex gap-6 items-center">
									{/* Content */}
									<div className="flex-1">
										<span
											className={`inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide w-fit mb-3 ${post.categoryColor}`}
										>
											{post.category}
										</span>

										<h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
											{post.title}
										</h3>

										{/* Meta Info */}
										<div className="flex items-center gap-4 text-sm text-gray-500 divide-x-2">
											{/* <div className="flex items-center gap-1 pr-4">
											<Clock className="w-4 h-4" />
											<span>{post.readTime}</span>
										</div> */}
											<span>{post.date}</span>
										</div>
									</div>

									{/* Image */}
									<div className="w-32 h-32 shrink-0 bg-gray-200 rounded-xl overflow-hidden relative">
										<Image
											src={post.image}
											alt={"post.title"}
											fill
											className="object-cover"
											sizes="128px"
										/>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default BlogJournal
