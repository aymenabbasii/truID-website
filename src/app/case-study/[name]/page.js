// app/case-studies/[id]/page.jsx
import { notFound } from "next/navigation"
import caseStudiesData from "@/utils/caseStudies.json"
import Detail from "@/components/caseStudy/detail"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import HeroSection from "@/components/shared/heroSection"

// Generate metadata for SEO
export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const { name } = resolvedParams
	const caseStudy = caseStudiesData.find(caseStudy => caseStudy.id === name)

	if (!caseStudy) {
		return {
			title: "Case Study Not Found - truID",
		}
	}

	return {
		title: `${caseStudy.heading} - truID Case Studies`,
		description:
			caseStudy.description ||
			"Explore how truID delivers innovative identity verification solutions.",
	}
}

// Generate static params for all case studies (for static site generation)
export async function generateStaticParams() {
	return Object.keys(caseStudiesData).map(id => ({
		id: id,
	}))
}

export default async function CaseStudyPage({ params }) {
	const resolvedParams = await params
	const { name } = resolvedParams
	const caseStudy = caseStudiesData.find(caseStudy => caseStudy.id === name)

	if (!caseStudy) {
		notFound()
	}

	return (
		<>
			<Header />
			<HeroSection
				heading={caseStudy.heading}
				description={
					caseStudy.description ||
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque voluptate quisquam fugit porro optio autem, tenetur reprehenderit voluptatem laboriosam repellat, vero cumque corrupti quis iure quas quaerat odio quam?"
				}
				imageSrc={caseStudy.image}
				imageAlt={`${caseStudy.heading} case study`}
			/>
			<Detail caseStudy={caseStudy} />
			<Footer />
		</>
	)
}
