// app/resources/[slug]/page.jsx
import { notFound } from "next/navigation"
import PostData from "@/utils/postData.json"
import BlogPost from "@/components/blog/blogPost"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import HeroSection from "@/components/shared/heroSection"
import Articles from "@/components/newsAndBlogs/articles"

// Generate metadata for SEO
export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const post = PostData.find(data => data.url === `/blog/${id}`)

	if (!post) {
		return {
			title: "Blog Post Not Found - truID",
		}
	}

	return {
		title: `${post.title} - truID`,
		description: post.excerpt,
	}
}

// Generate static params for all blog posts (optional, for static site generation)
export async function generateStaticParams() {
	return PostData.map(post => ({
		slug: post.url.replace("/blog/", ""),
	}))
}

export default async function BlogPostPage({ params }) {
	const resolvedParams = await params
	const { id } = resolvedParams
	const post = PostData.find(data => data.url === `/blog/${id}`)

	if (!post) {
		notFound()
	}

	return (
		<>
			<Header />{" "}
			<HeroSection
				heading={post.title}
				description={post.excerpt}
				imageSrc={post.image}
				imageAlt="Description of image"
			/>
			<BlogPost post={post} />
			<Articles blogs={PostData.filter(item => item.url !== post.url)} />
			<Footer />
		</>
	)
}
