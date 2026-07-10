"use client"
import { useEffect } from "react"
import { X } from "lucide-react"

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") onClose()
		}
		if (isOpen) {
			document.addEventListener("keydown", handleEsc)
			document.body.style.overflow = "hidden"
		}
		return () => {
			document.removeEventListener("keydown", handleEsc)
			document.body.style.overflow = "auto"
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 transition-colors"
				>
					<X size={20} className="text-gray-800" />
				</button>

				<video
					src={videoUrl}
					controls
					autoPlay
					className="w-full h-full object-cover"
				>
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	)
}

export default VideoModal