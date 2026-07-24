"use client"

import Link from "next/link"

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0057FF] h-10">
      <Link
        href="/#demo-video"
        className="flex h-full w-full items-center justify-center px-4"
      >
        <span className="text-sm font-medium text-white">
            Experience fast, secure identity verification with truID. Click here to watch the Demo!
        </span>
      </Link>
    </div>
  )
}