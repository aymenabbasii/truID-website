import { notFound } from "next/navigation"
import industriesData from "../../../utils/industries.json"
import Header from "@/components/header/header"
import OverviewSection from "@/components/industry/overview"
import SolutionsSection from "@/components/industry/solutions"
import BenefitsSection from "@/components/industry/benefits"
import WhyTrustSection from "@/components/industry/whyTrust"
import FaqSection from "@/components/industry/faqsSection"
import CtaSection from "@/components/industry/ctaSection"
import Footer from "@/components/footer/footer"
import {
	Building2,
	Smartphone,
	Plane,
	Heart,
	CheckCircle2,
	Shield,
	Zap,
	TrendingDown,
	Smile,
} from "lucide-react"
import IndustryHero from "@/components/industry/industryHero"

const iconMap = {
	Building2,
	Smartphone,
	Plane,
	Heart,
	CheckCircle2,
	Shield,
	Zap,
	TrendingDown,
	Smile,
}

export async function generateStaticParams() {
	return industriesData.industries.map(industry => ({
		id: industry.slug,
	}))
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const industry = industriesData.industries.find(ind => ind.slug === id)

	if (!industry) {
		return { title: "Industry Not Found" }
	}

	return {
		title: `${industry.title} - truID`,
		description: industry.hookLine,
	}
}

export default async function IndustryPage({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const industry = industriesData.industries.find(ind => ind.slug === id)
	if (!industry) return notFound()

	return (
		<div>
			<Header />
			<IndustryHero
				title={industry.title}
				heading={industry.subtitle}
				description={industry.hookLine}
				imageSrc={`/industries/${industry.id}.png`}
				imageAlt="Description of image"
			/>

			{/* <OverviewSection
				title={industry.overview.title}
				description={industry.overview.description}
			/> */}

			<SolutionsSection solutions={industry.solutions} title={industry.slug} />

			<BenefitsSection benefits={industry.benefits} iconMap={iconMap} />

			<WhyTrustSection whyTrust={industry.whyTrust} />

			<FaqSection faqs={industry.faqs} />

			<CtaSection ctaText={industry.overview.cta} />
			<Footer />
		</div>
	)
}
