"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function ContactForm() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
		agreeToPolicy: false,
	})

	const handleSubmit = e => {
		e.preventDefault()
		console.log("Form submitted:", formData)
		// Add your form submission logic here
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<section className="relative w-full min-h-screen bg-blue-900 px-10 md:px-16 lg:px-24 py-16 md:py-24  overflow-hidden">
			{/* Background Pattern - Add your image here */}
			<Image
				src={"/backgrounds/contact-bg.jpg"}
				alt="Contact bg"
				fill
				className="absolute inset-0 opacity-20"
			/>

			<div className="relative max-w-2xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						Get in touch
					</h2>
					<p className="text-lg text-blue-100">
						We'd love to hear from you. Please fill out this form.
					</p>
				</div>

				{/* Form Card */}
				<div className="bg-white rounded-3xl p-8 shadow-2xl">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Full Name */}
						<div className="space-y-2">
							<Label
								htmlFor="fullName"
								className="text-sm font-medium text-gray-700"
							>
								Full name
							</Label>
							<Input
								id="fullName"
								name="fullName"
								type="text"
								placeholder="Full name"
								value={formData.fullName}
								onChange={handleChange}
								className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
								required
							/>
						</div>

						{/* Email */}
						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="text-sm font-medium text-gray-700"
							>
								Email
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="email@company.com"
								value={formData.email}
								onChange={handleChange}
								className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
								required
							/>
						</div>

						{/* Phone */}
						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-sm font-medium text-gray-700"
							>
								Phone
							</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								placeholder="+1 (555) 000-0000"
								value={formData.phone}
								onChange={handleChange}
								className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
								required
							/>
						</div>

						{/* Message */}
						<div className="space-y-2">
							<Label
								htmlFor="message"
								className="text-sm font-medium text-gray-700"
							>
								Message
							</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Input Text"
								value={formData.message}
								onChange={handleChange}
								className="min-h-[120px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
								required
							/>
						</div>

					

						{/* Submit Button */}
						<Button
							type="submit"
							className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
						>
							Send message
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
