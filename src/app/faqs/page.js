import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import FAQSection from "@/components/shared/faqs"

export const metadata = {
	title: "Faqs",
	description:
		"Insights, research, and thought leadership from truID   exploring AI, biometrics, cybersecurity, and the future of digital verification.",
}

export default function OurCompany() {
	return (
		<div>
			<Header />
			<FAQSection main />
			<Footer />
		</div>
	)
}
