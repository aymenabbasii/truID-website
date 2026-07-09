import MapArea from "@/components/contactUs/mapArea"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import CompanyHero from "@/components/ourCompany/companyHero"
import HeadquartersSection from "@/components/ourCompany/headQuartersSection"
import HowItStarted from "@/components/ourCompany/howItStarted"
import OurTeamSection from "@/components/ourCompany/ourTeam"
import OurValues from "@/components/ourCompany/ourValues"
import StatsSection from "@/components/ourCompany/statsSection"
import TrustSection from "@/components/ourCompany/trustSection"
import ContactForm from "@/components/shared/contactForm"
import HeroSection from "@/components/shared/heroSection"

export const metadata = {
	title: "Our Company",
	description: "Making identity verification faster, safer, and accessible.",
}

export default function OurCompany() {
	return (
		<div>
			<Header />
			<CompanyHero />
			<HowItStarted />
			<TrustSection />
			<OurValues />
			<OurTeamSection />
			<StatsSection />
			<MapArea />
			<ContactForm />
			<Footer />
		</div>
	)
}
