"use client"
import React, { useState } from "react"
import {
	Menu,
	X,
	ChevronDown,
	Building2,
	Smartphone,
	Truck,
	Heart,
	Users,
	Plane,
	BookOpen,
	FileText,
	Code2,
	Camera,
	Shield,
	UserCheck,
	Fingerprint,
	PlayCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import VideoModal from "../shared/videoModal"


const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isResourcesOpen, setIsResourcesOpen] = useState(false)
	const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
	const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
	const [isVideoOpen, setIsVideoOpen] = useState(false)
	const pathname = usePathname()

	const navItems = [
		{ label: "Our Company", href: "/our-company" },
	]

	const solutionItems = [
		{ 
			label: "Face Liveness Detection", 
			icon: Camera, 
			href: "/solution/face-liveness-detection",
			description: "Passive liveness verification with advanced AI anti-spoofing"
		},
		{ 
			label: "ID Document Authenticity", 
			icon: Shield, 
			href: "/solution/id-document-authenticity",
			description: "AI-powered verification of Pakistani identity documents"
		},
		{ 
			label: "Photo ID Selfie Matching", 
			icon: UserCheck, 
			href: "/solution/photo-id-selfie-matching",
			description: "AI-powered matching between ID photos and live selfies"
		},
		{ 
			label: "Accurate OCR", 
			icon: FileText, 
			href: "/solution/accurate-ocr",
			description: "AI-powered text extraction from ID documents"
		},
		{ 
			label: "Touchless Fingerprint", 
			icon: Fingerprint, 
			href: "/solution/touchless-fingerprint",
			description: "Smartphone-based fingerprint capture and verification"
		},
	]

	const resourceItems = [
		{ label: "Blogs", icon: BookOpen, href: "/news&blogs" },
		{ label: "Case Studies", icon: FileText, href: "/case-studies" },
		{
			label: "Developer Kit",
			icon: Code2,
			href: "https://github.com/truid-ai/docs/blob/main/TruID%20Android%20Integration%20Document.md",
		},
	]

	const industryItems = [
		{
			label: "Financial Services",
			icon: Building2,
			href: "/industry/financial-services",
		},
		{ label: "Telecom", icon: Smartphone, href: "/industry/telecom" },
		{
			label: "Transportation",
			icon: Truck,
			href: "/industry/transportation",
		},
		{ label: "Healthcare", icon: Heart, href: "/industry/healthcare" },
		{
			label: "Human Resources",
			icon: Users,
			href: "/industry/human-resources",
		},
		{
			label: "Travel & Security",
			icon: Plane,
			href: "/industry/travel-security ",
		},
	]

	const isHome = pathname === "/"

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<div
				className={`max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 my-2 
     bg-blue-100/40 backdrop-blur-sm rounded-3xl border-2
        ${isHome ? "border-white" : "border-[#2255FF1F]"}`}
			>
				<div className="flex items-stretch justify-between h-18">
					<div className="flex items-center justify-between gap-12">
						{/* Logo */}
						<div className="flex items-center">
							<Link href={"/"}>
								<Image
									src={"/logo.png"}
									alt="Truid Logo"
									width={100}
									height={100}
								/>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center space-x-8">
							{navItems.map(item => (
								<Link
									key={item.label}
									href={item.href}
									className={`transition-colors text-sm font-medium ${
										pathname === item.href
											? "text-blue-600"
											: "text-gray-700 hover:text-blue-600"
									}`}
								>
									{item.label}
								</Link>
							))}

							{/* Solutions Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setIsSolutionsOpen(true)}
								onMouseLeave={() => setIsSolutionsOpen(false)}
							>
								<button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
									Our Solutions
									<ChevronDown
										size={16}
										className={`transition-transform ${
											isSolutionsOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{isSolutionsOpen && (
									<div className="absolute top-full left-0 w-[700px] bg-white rounded-lg shadow-lg border border-gray-100 p-6">
										<h3 className="text-sm font-semibold text-gray-900 mb-4">
											Our Solutions
										</h3>
										<div className="grid grid-cols-2 gap-3">
											{solutionItems.map(item => {
												const Icon = item.icon
												return (
													<Link
														key={item.label}
														href={item.href}
														className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
													>
														<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-50 flex-shrink-0">
															<Icon
																size={20}
																className="text-gray-600 group-hover:text-blue-600"
															/>
														</div>
														<div className="flex flex-col">
															<span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
																{item.label}
															</span>
															<span className="text-xs text-gray-500 mt-1">
																{item.description}
															</span>
														</div>
													</Link>
												)
											})}
										</div>
									</div>
								)}
							</div>

							{/* Industries Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setIsIndustriesOpen(true)}
								onMouseLeave={() => setIsIndustriesOpen(false)}
							>
								<button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
									Industries
									<ChevronDown
										size={16}
										className={`transition-transform ${
											isIndustriesOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{isIndustriesOpen && (
									<div className="absolute top-full left-0 w-[700px] bg-white rounded-lg shadow-lg border border-gray-100 p-6">
										<h3 className="text-sm font-semibold text-gray-900 mb-4">
											Industries
										</h3>
										<div className="grid grid-cols-3 gap-3">
											{industryItems.map(item => {
												const Icon = item.icon
												return (
													<Link
														key={item.label}
														href={item.href}
														className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
													>
														<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-50">
															<Icon
																size={18}
																className="text-gray-600 group-hover:text-blue-600"
															/>
														</div>
														<span className="text-sm text-gray-700 group-hover:text-blue-600">
															{item.label}
														</span>
													</Link>
												)
											})}
										</div>
									</div>
								)}
							</div>

							{/* Careers Link */}
							<Link
								href="/careers"
								className={`transition-colors text-sm font-medium ${
									pathname === "/careers"
										? "text-blue-600"
										: "text-gray-700 hover:text-blue-600"
								}`}
							>
								Careers
							</Link>

							{/* Resources Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setIsResourcesOpen(true)}
								onMouseLeave={() => setIsResourcesOpen(false)}
							>
								<button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
									Resources
									<ChevronDown
										size={16}
										className={`transition-transform ${
											isResourcesOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{isResourcesOpen && (
									<div className="absolute top-full left-0 w-[280px] bg-white rounded-lg shadow-lg border border-gray-100 p-2">
										<div className="flex flex-col ">
											{resourceItems.map(item => {
												const Icon = item.icon
												return (
													<Link
														key={item.label}
														href={item.href}
														className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
													>
														<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-50">
															<Icon
																size={18}
																className="text-gray-600 group-hover:text-blue-600"
															/>
														</div>
														<span className="text-sm text-gray-700 group-hover:text-blue-600">
															{item.label}
														</span>
													</Link>
												)
											})}
										</div>
									</div>
								)}
							</div>
						</nav>
					</div>

					{/* Desktop CTA Buttons */}
					<div className="hidden md:flex items-center gap-4 ">
						<Link
							href={"/contact-us"}
							className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2"
						>
							Contact us
						</Link>
						<button
							onClick={() => setIsVideoOpen(true)}
							className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2 cursor-pointer"
						>
							<PlayCircle size={16} />
							Watch Demo
						</button>
						<Link href={"https://calendly.com/d/4nt-r5r-fg7/product-demo"} target="_blank" >
						<Button className="bg-blue-600 hover:bg-blue-700 text-white py-[22px] cursor-pointer">
							Book a demo
						</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 text-gray-700 hover:text-blue-600"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-100">
						<nav className="flex flex-col space-y-4">
							{navItems.map(item => (
								<Link
									key={item.label}
									href={item.href}
									className={`transition-colors text-sm font-medium px-2 ${
										pathname === item.href
											? "text-blue-600"
											: "text-gray-700 hover:text-blue-600"
									}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}

							{/* Mobile Solutions Dropdown */}
							<div>
								<button
									onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
									className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2"
								>
									Our Solutions
									<ChevronDown
										size={16}
										className={`transition-transform ${
											isSolutionsOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{isSolutionsOpen && (
									<div className="mt-2 ml-4 flex flex-col space-y-2">
										{solutionItems.map(item => {
											const Icon = item.icon
											return (
												<Link
													key={item.label}
													href={item.href}
													className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm px-2 py-2"
													onClick={() => {
														setIsMenuOpen(false)
														setIsSolutionsOpen(false)
													}}
												>
													<Icon size={16} />
													{item.label}
												</Link>
											)
										})}
									</div>
								)}
							</div>

							{/* Mobile Industries Dropdown */}
							<div>
								<button
									onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
									className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2"
								>
									Industries
									<ChevronDown
										size={16}
										className={`transition-transform ${
											isIndustriesOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{isIndustriesOpen && (
									<div className="mt-2 ml-4 flex flex-col space-y-2">
										{industryItems.map(item => {
											const Icon = item.icon
											return (
												<Link
													key={item.label}
													href={item.href}
													className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm px-2 py-2"
													onClick={() => {
														setIsMenuOpen(false)
														setIsIndustriesOpen(false)
													}}
												>
													<Icon size={16} />
													{item.label}
												</Link>
											)
										})}
									</div>
								)}
							</div>

							{/* Mobile Careers Link */}
							<Link
								href="/careers"
								className={`transition-colors text-sm font-medium px-2 ${
									pathname === "/careers"
										? "text-blue-600"
										: "text-gray-700 hover:text-blue-600"
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								Careers
							</Link>

							{/* Mobile Resources Dropdown */}
							<div>
								<button
									onClick={() => setIsResourcesOpen(!isResourcesOpen)}
									className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2"
								>
									Resources
									<ChevronDown
										size={16}
										className={`transition-transform ${
											isResourcesOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{isResourcesOpen && (
									<div className="mt-2 ml-4 flex flex-col space-y-2">
										{resourceItems.map(item => {
											const Icon = item.icon
											return (
												<Link
													key={item.label}
													href={item.href}
													className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm px-2 py-2"
													onClick={() => {
														setIsMenuOpen(false)
														setIsResourcesOpen(false)
													}}
												>
													<Icon size={16} />
													{item.label}
												</Link>
											)
										})}
									</div>
								)}
							</div>

							{/* Mobile Watch Demo + CTA */}
							<div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
								<Link
									href={"/contact-us"}
									className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2"
								>
									Contact us
								</Link>
								<button
									onClick={() => {
										setIsMenuOpen(false)
										setIsVideoOpen(true)
									}}
									className="flex items-center gap-1.5 text-left text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium px-2 cursor-pointer"
								>
									<PlayCircle size={16} />
									Watch Demo
								</button>
								<Link href="https://calendly.com/d/4nt-r5r-fg7/product-demo" target="_blank">
									<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
										Book a demo
									</Button>
								</Link>
							</div>
						</nav>
					</div>
				)}
			</div>

			{/* Demo Video Modal */}
			<VideoModal
				isOpen={isVideoOpen}
				onClose={() => setIsVideoOpen(false)}
				videoUrl="/videos/Truid.mp4"
			/>
		</header>
	)
}

export default Header