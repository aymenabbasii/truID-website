import CaseStudiesList from "@/components/caseStudies/caseStudiesList"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import ContactForm from "@/components/shared/contactForm"
import FAQSection from "@/components/shared/faqs"

export const metadata = {
	title: "Case Studies",
	description:
		"Learn how truID helps organizations across industries verify identities faster, prevent fraud, and achieve digital onboarding success.",
}

export default function OurCompany() {
    return (
        <div>
            <Header />
            <CaseStudiesList/>
            <FAQSection/>
            <ContactForm/>
            <Footer />
        </div>
    )
}
