import React from "react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function ContactBar() {
	return (
		<section className="relative w-full px-10 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden bg-linear-to-b from-primary to-blue-900 text-white rounded-[60px]">
			<div className="max-w-3xl mx-auto text-center flex flex-col items-center">

				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
					Verify customers in 30 seconds and move faster than fraud
				</h2>

				<p className="text-base md:text-lg mb-6">
					Partner with truID to deliver frictionless digital onboarding
					experiences that build trust from the first interaction.
				</p>

				<div className="flex gap-4">

					<Link
						href="https://calendly.com/d/4nt-r5r-fg7/product-demo"
						target="_blank"
					>
						<Button className="p-5 bg-white text-primary cursor-pointer">
							Book a demo
						</Button>
					</Link>


					<Link href="/contact-us">
						<Button className="p-5 bg-blue-300 hover:bg-blue-400 text-gray-900 cursor-pointer">
							Contact Us
						</Button>
					</Link>

				</div>
			</div>
		</section>
	)
}