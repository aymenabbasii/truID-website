import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import Articles from "@/components/newsAndBlogs/articles"
import BlogJournal from "@/components/newsAndBlogs/blogsJournal"
import ContactForm from "@/components/shared/contactForm"
import blogs from "@/utils/postData.json"

export const metadata = {
	title: "Blogs",
	description:
		"Insights, research, and thought leadership from truID   exploring AI, biometrics, cybersecurity, and the future of digital verification.",
}

export default function OurCompany() {
	return (
		<div>
			<Header />
			<BlogJournal blogs={blogs.slice(0, 3)} />
			<Articles blogs={blogs.slice(3)} />
			<ContactForm />
			<Footer />
		</div>
	)
}
