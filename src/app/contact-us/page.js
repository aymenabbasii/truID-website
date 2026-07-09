import MapArea from "@/components/contactUs/mapArea"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import ContactForm from "@/components/shared/contactForm"

export const metadata = {
	title: "Contact",
	description:
		"Insights, research, and thought leadership from truID   exploring AI, biometrics, cybersecurity, and the future of digital verification.",
}

export default function OurCompany() {
	return (
		<div>
			<Header />
			<MapArea />
			<ContactForm />
			<Footer />
		</div>
	)
}
