import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import ImpactSection from "@/components/landingPage/impactSection"
import LandingHero from "@/components/landingPage/landingHero"
import TrustedBy from "@/components/landingPage/trustedBy"
import IdentityVerificationSection from "@/components/shared/identityVerificationSection"
import PerformanceSection from "@/components/shared/performanceSection"
import TestimonialCards from "@/components/shared/testimonialCards"
import CTA from "@/components/landingPage/cta"
// import TestimonialsSection from "@/components/shared/testimonialsSections"

export const metadata = {
	title: "truID - Secure Identity Verification & Digital KYC Solutions",
	description:
		"Transform your customer onboarding with truID's cutting-edge identity verification platform. Fast, secure, and compliant KYC solutions trusted by banks and fintechs to prevent fraud and verify users instantly.",
}

export default function Home() {
	return (
		<div>
			<Header />
			<LandingHero />
			<PerformanceSection />
			<IdentityVerificationSection />
			<TrustedBy />
			<ImpactSection />
			<TestimonialCards />
			<CTA />
			<Footer />
		</div>
	)
}

