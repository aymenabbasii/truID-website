"use client"

import Link from "next/link"

const items = Array.from({ length: 8 })

export default function AnnouncementBar() {
	return (
		<div className="bg-[#0057FF] h-10 overflow-hidden">
			<Link
				href="/#demo-video"
				className="block h-full w-full"
			>
				<div className="marquee">
					<div className="marquee-track">
						{items.map((_, index) => (
							<span
								key={`first-${index}`}
								className="marquee-item"
							>
								🎥 Click here to watch truID in action
							</span>
						))}

						{items.map((_, index) => (
							<span
								key={`second-${index}`}
								className="marquee-item"
								aria-hidden="true"
							>
								🎥 Click here to watch truID in action
							</span>
						))}
					</div>
				</div>
			</Link>
		</div>
	)
}