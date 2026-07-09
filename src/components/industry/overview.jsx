import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OverviewSection({ title, description }) {
	return (
		<section className="px-10 md:px-16 lg:px-24 py-16 ">
			<div className="container mx-auto max-w-4xl text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-8  text-gray-900">
					Overview
				</h1>
				<p className="text-xl text-gray-700">{description}</p>
			</div>
		</section>
	)
}
