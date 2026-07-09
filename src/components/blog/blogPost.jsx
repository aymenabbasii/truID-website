// components/BlogPost/BlogPost.jsx
import Image from "next/image"

export default function BlogPost({ post }) {
	return (
		<div className="w-full ">
			{/* Hero Section with Cover Image */}
			{/* <div className="relative w-full h-[400px] mb-8">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-4xl">
            {post.title}
          </h1>
        </div>
      </div> */}

			{/* Blog Content - Centered with max-w-5xl */}
			<div className="max-w-5xl mx-auto px-6 lg:px-8 pb-0 md:pb-24">
				{/* <div className="mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg"
            quality={100}
          />
        </div> */}

				<div className="prose prose-lg max-w-none mb-6">
					<p className="text-gray-700 leading-relaxed whitespace-pre-line">
						{post.content}
					</p>
				</div>

				<p className="text-sm text-gray-500 border-t pt-4">
					Publish Date: {post.date}
				</p>
			</div>

			{/* Latest News Section */}
			{/* <div className="mt-16">
        <BlogLatestNews />
      </div> */}
		</div>
	)
}
