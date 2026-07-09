"use client"

import React from 'react'

export default function SolutionOverview({ title, description }) {
	return (
		<section className="bg-white px-10 md:px-16 lg:px-24 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
						{title}
					</h2>
					<div className="prose prose-lg max-w-none">
						<p className="text-lg text-slate-700 leading-relaxed">
							{description}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}