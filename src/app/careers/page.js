import CurrentOpportunities from "@/components/careers/currentOpportunities"
import Hero from "@/components/careers/hero"
import HiringProcess from "@/components/careers/hiringProcess"
import LifeAtTruid from "@/components/careers/lifeAtTruid"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import ContactForm from "@/components/shared/contactForm"

export const metadata = {
	title: "Careers",
	description:
		"At truID, we're redefining how the world verifies identity using AI, biometrics, and a passion for secure innovation.",
}

export default function Careers() {
	return (
		<div>
			<Header />
			{/* <Hero /> */}
			<HiringProcess />
			<LifeAtTruid />
			<CurrentOpportunities />
			<ContactForm />
			<Footer />
		</div>
	)
}
