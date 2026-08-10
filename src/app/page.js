import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import AnnouncementBar from "@/components/shared/AnnouncementBar"
import ImpactSection from "@/components/landingPage/impactSection"
import LandingHero from "@/components/landingPage/landingHero"
import TrustedBy from "@/components/landingPage/trustedBy"
import IdentityVerificationSection from "@/components/shared/identityVerificationSection"
import PerformanceSection from "@/components/shared/performanceSection"
import TestimonialCards from "@/components/shared/testimonialCards"
import CTA from "@/components/landingPage/cta"

export const metadata = {
	title: "truID - Secure Identity Verification & Digital KYC Solutions",
	description:
		"Transform your customer onboarding with truID's cutting-edge identity verification platform. Fast, secure, and compliant KYC solutions trusted by banks and fintechs to prevent fraud and verify users instantly.",
}

const DemoVideo = () => {
	return (
		<div
			id="demo-video"
			className="w-full px-10 md:px-16 lg:px-24 py-16 md:py-24 relative"
		>
			<h1 className="text-4xl md:text-6xl font-semibold max-w-3xl text-gray-800 leading-tight mb-6 ml-4 relative z-10">
				Watch truID in Action
			</h1>

			<div className="relative max-w-7xl mx-auto rounded-3xl h-[700px] overflow-hidden">
				<video
					src="/videos/TruID.mp4"
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

export default function Home() {
	return (
		<div>
			<AnnouncementBar />
			<Header />
			<LandingHero />
			<PerformanceSection />
			<IdentityVerificationSection />
			<TrustedBy />
			<ImpactSection />
			<TestimonialCards />
			<DemoVideo />
			<CTA />
			<Footer />
		</div>
	)
}