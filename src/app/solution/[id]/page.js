import { notFound } from "next/navigation"
import solutionsData from "../../../utils/solutions.json"
import Header from "@/components/header/header"
import SolutionHero from "@/components/solution/solutionHero"
import SolutionOverview from "@/components/solution/solutionOverview"
import SolutionHowItWorks from "@/components/solution/solutionHowItWorks"
import SolutionKeyFeatures from "@/components/solution/solutionKeyFeatures"
import SolutionBenefits from "@/components/solution/solutionBenefits"
import SolutionUseCases from "@/components/solution/solutionUseCases"
import SolutionWhyChoose from "@/components/solution/solutionWhyChooseUs"
import SolutionCta from "@/components/solution/solutionCTA"
import Footer from "@/components/footer/footer"

export async function generateStaticParams() {
	return solutionsData.solutions.map(solution => ({
		id: solution.slug,
	}))
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const solution = solutionsData.solutions.find(sol => sol.slug === id)

	if (!solution) {
		return { title: "Solution Not Found" }
	}

	return {
		title: `${solution.title} - truID`,
		description: solution.subtitle,
	}
}

export default async function SolutionPage({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const solution = solutionsData.solutions.find(sol => sol.slug === id)
	
	if (!solution) return notFound()

	return (
		<div>
			<Header />
			
			<SolutionHero
				title={solution.title}
				subtitle={solution.subtitle}
				description={solution.overview.description}
				heroImage={solution.heroImage}
				icon={solution.icon}
				// iconMap={iconMap}
			/>
			<SolutionHowItWorks
				title={solution.howItWorks.title}
				subtitle={solution.howItWorks.subtitle}
				phone={solution.phone}
				steps={solution.howItWorks.steps}
			/>

			<SolutionKeyFeatures
				features={solution.keyFeatures}
				// iconMap={iconMap}
			/>

			{/* <SolutionBenefits benefits={solution.benefits} /> */}

			<SolutionUseCases useCases={solution.useCases} />

			<SolutionWhyChoose
				title={solution.whyChoose.title}
				description={solution.whyChoose.description}
				heroImage={solution.heroImage}
			/>
{/* 
			<SolutionCta />
			 */}
			<Footer />
		</div>
	)
}