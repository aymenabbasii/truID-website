import React from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="w-full py-12 px-8">
			<div className="max-w-7xl mx-auto">
				{/* Decorative Line with truID text */}
				<div className="flex items-center justify-center mb-12">
					<div className="flex-1 h-px bg-gray-300"></div>
					<div className="px-6">
						<Link href={"/"}>
							<Image
								src={"/logo.png"}
								alt="Truid Logo"
								width={100}
								height={100}
							/>
						</Link>
					</div>
					<div className="flex-1 h-px bg-gray-300"></div>
				</div>
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Section */}
					<div>
						<h3 className="font-semibold mb-4 uppercase ">COMPANY</h3>
						<ul className="space-y-3 font-medium text-sm">
							<li>
								<Link
									href="/our-company"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									href="/our-company#team"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Our team
								</Link>
							</li>
							<li>
								<Link
									href="/our-company#values"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Our values
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4 uppercase ">Resources</h3>
						<ul className="space-y-3 font-medium text-sm">
							<li>
								<Link
									href="/news&blogs"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Blogs
								</Link>
							</li>
							<li>
								<Link
									href="/faqs"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									href="/news&blogs"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Events
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media Section */}
					<div>
						<h3 className="font-semibold mb-4 uppercase ">SOCIAL MEDIA</h3>
						<ul className="space-y-3 font-medium text-sm">
							<li>
								<Link
									href="https://pk.linkedin.com/company/truidai"
									target="_blank"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									LinkedIn
								</Link>
							</li>
							<li>
								<Link
									href="https://www.instagram.com/truid.ai/"
									target="_blank"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Instagram
								</Link>
							</li>
							<li>
								<Link
									href="https://www.facebook.com/100090698217248/"
									target="_blank"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									Facebook
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div>
						<h3 className="font-semibold mb-4 uppercase ">CONTACT</h3>
						<ul className="space-y-3 font-medium text-sm">
							<li className="flex items-start gap-2">
								<Phone className="w-4 h-4 text-gray-800 mt-1 shrink-0" />
								<Link
									href="tel:+923335549094"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									+92 333 5549094
								</Link>
							</li>
							<li className="flex items-start gap-2">
								<Mail className="w-4 h-4 text-gray-800 mt-1 shrink-0" />
								<Link
									href="mailto:info@truid.ai"
									className="text-gray-800 hover:text-primary transition-colors"
								>
									info@truid.ai
								</Link>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="w-4 h-4 text-gray-800 mt-1 shrink-0" />
								<span className="text-gray-800">
									Office no. 3201-3202,
									<br />
									NSTP, NUST, H-12,
									<br />
									Islamabad, Pakistan
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-gray-200">
					<div className="flex flex-row justify-start items-center gap-4">
						<p className="text-sm text-gray-800">© Copyright 2026 truID</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
