// app/careers/[id]/page.jsx
import { notFound } from "next/navigation"
import jobsData from "@/utils/jobsData.json"
import JobPosting from "@/components/jobDetails/jobPosting"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

// Generate metadata for SEO
export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const job = jobsData.jobs.find(j => j.id === id)

	if (!job) {
		return {
			title: "Job Not Found - truID",
		}
	}

	return {
		title: `${job.title} - truID Careers`,
		description: job.description,
	}
}

// Generate static params for all job postings (for static site generation)
export async function generateStaticParams() {
	return jobsData.jobs.map(job => ({
		id: job.id,
	}))
}

export default async function JobDetailPage({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const job = jobsData.jobs.find(j => j.id === id)

	if (!job) {
		notFound()
	}

	return (
		<>
			<Header />
			<JobPosting job={job} />
			<Footer />
		</>
	)
}
