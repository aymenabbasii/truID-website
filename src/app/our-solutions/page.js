import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import Steps from "@/components/ourSolutions/steps"
import ContactForm from "@/components/shared/contactForm"
import FAQSection from "@/components/shared/faqs"
import HeroSection from "@/components/shared/heroSection"
import IdentityVerificationSection from "@/components/shared/identityVerificationSection"

export const metadata = {
	title: "Our Solutions",
	description:
		"truID provides AI-powered verification solutions that help banks, fintechs, telcos, and enterprises verify customers securely   in seconds.",
}

export default function OurCompany() {
	return (
		<div>
			<Header />
			<HeroSection
				heading="One platform. Every identity verified."
				description="truID provides AI-powered verification solutions that help banks, fintechs, telcos, and enterprises verify customers securely   in seconds."
				imageSrc="/heros/ourSolutions.png"
				imageAlt="Description of image"
			/>
			{/* <IdentityVerificationSection /> */}
			<Steps />
			<FAQSection />
			<ContactForm />
			<Footer />
		</div>
	)
}
