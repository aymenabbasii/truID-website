"use client"
import { Linkedin, Mail } from "lucide-react"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import teamMembers from "../../utils/ourTeam.json"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function OurTeamSection() {
	return (
		<section
			className="px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-white"
			id="team"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Our Team
					</h2>
					<p className="text-gray-600 max-w-3xl mx-auto text-lg">
						Our diverse team of tech experts building innovative solutions and
						pushing the boundaries of what's possible
					</p>
				</div>
				<div>
					<h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700 my-8 mt-14">
						Executive Team
					</h2>
					<div className="flex flex-wrap items-center justify-center gap-8">
						{teamMembers.filter(member => member.tag === "Executive Team").map((member, index) => (
							<div
								key={index}
								className="flex flex-col h-96 w-72 items-center justify-center bg-primary-foreground py-6 rounded-xl transition-all  hover:shadow-lg duration-300"
							>
								<div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-200 relative ring-4 ring-white">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="w-full h-full object-cover"
									/>
								</div>

								<h3 className="text-base font-semibold text-gray-900 text-center px-2">
									{member.name}
								</h3>
								<p className="text-sm text-gray-600 mb-3 text-center px-2">
									{member.department}
								</p>

								<div className="flex items-center gap-3">
									<Link
										href={member.linkedin}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="LinkedIn"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="w-6 h-6" />
									</Link>
									<Link
										href={`mailto:${member.email}`}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="Email"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Mail className="w-6 h-6" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700 my-8 mt-14">
						Operations & Management Team
					</h2>
					<div className="flex flex-wrap items-center justify-center gap-8">
						{teamMembers.filter(member => member.tag === "Operations & Management Team").map((member, index) => (
							<div
								key={index}
								className="flex flex-col h-96 w-72 items-center justify-center  bg-primary-foreground py-6 rounded-xl transition-all  hover:shadow-lg duration-300"
							>
								<div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-200 relative ring-4 ring-white">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="w-full h-full object-cover"
									/>
								</div>

								<h3 className="text-base font-semibold text-gray-900 text-center px-2">
									{member.name}
								</h3>
								<p className="text-sm text-gray-600 mb-3 text-center px-2">
									{member.department}
								</p>

								<div className="flex items-center gap-3">
									<Link
										href={member.linkedin}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="LinkedIn"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="w-6 h-6" />
									</Link>
									<Link
										href={`mailto:${member.email}`}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="Email"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Mail className="w-6 h-6" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700 my-8 mt-14">
						Engineering Team
					</h2>
					<div className="flex flex-wrap items-center justify-center gap-8">
						{teamMembers.filter(member => member.tag === "Engineering Team").map((member, index) => (
							<div
								key={index}
								className="flex flex-col h-96 w-72 items-center justify-center  bg-primary-foreground py-6 rounded-xl transition-all  hover:shadow-lg duration-300"
							>
								<div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-200 relative ring-4 ring-white">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="w-full h-full object-cover"
									/>
								</div>

								<h3 className="text-base font-semibold text-gray-900 text-center px-2">
									{member.name}
								</h3>
								<p className="text-sm text-gray-600 mb-3 text-center px-2">
									{member.department}
								</p>

								<div className="flex items-center gap-3">
									<Link
										href={member.linkedin}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="LinkedIn"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="w-6 h-6" />
									</Link>
									<Link
										href={`mailto:${member.email}`}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="Email"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Mail className="w-6 h-6" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700 my-8 mt-14">
						R&D Team
					</h2>
					<div className="flex flex-wrap items-center justify-center gap-8">
						{teamMembers.filter(member => member.tag === "R&D Team").map((member, index) => (
							<div
								key={index}
								className="flex flex-col h-96 w-72 items-center justify-center  bg-primary-foreground py-6 rounded-xl transition-all  hover:shadow-lg duration-300"
							>
								<div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-200 relative ring-4 ring-white">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="w-full h-full object-cover"
									/>
								</div>

								<h3 className="text-base font-semibold text-gray-900 text-center px-2">
									{member.name}
								</h3>
								<p className="text-sm text-gray-600 mb-3 text-center px-2">
									{member.department}
								</p>

								<div className="flex items-center gap-3">
									<Link
										href={member.linkedin}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="LinkedIn"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="w-6 h-6" />
									</Link>
									<Link
										href={`mailto:${member.email}`}
										className="text-gray-700 hover:text-blue-600 transition-colors"
										aria-label="Email"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Mail className="w-6 h-6" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>


<div>
	<h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700 my-8 mt-14">
		AI/ML Team
	</h2>

	<div className="flex flex-wrap items-center justify-center gap-8">
		{teamMembers
			.filter(member => member.tag === "AI/ML Team")
			.map((member, index) => (
				<div
					key={index}
					className="flex flex-col h-96 w-72 items-center justify-center bg-primary-foreground py-6 rounded-xl transition-all hover:shadow-lg duration-300"
				>
					<div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-200 relative ring-4 ring-white">
						<Image
							src={member.image}
							alt={member.name}
							fill
							className="w-full h-full object-cover"
						/>
					</div>

					<h3 className="text-base font-semibold text-gray-900 text-center px-2">
						{member.name}
					</h3>

					<p className="text-sm text-gray-600 mb-3 text-center px-2">
						{member.department}
					</p>

					<div className="flex items-center gap-3">
						<Link
							href={member.linkedin}
							className="text-gray-700 hover:text-blue-600 transition-colors"
							target="_blank"
						>
							<Linkedin className="w-6 h-6" />
						</Link>

						<Link
							href={`mailto:${member.email}`}
							className="text-gray-700 hover:text-blue-600 transition-colors"
						>
							<Mail className="w-6 h-6" />
						</Link>
					</div>
				</div>
			))}
	</div>
</div>




		</section>
	)
}
