import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const metadata = {
	title: {
		template: "%s - truID",
		default: "truID - Secure Identity Verification Solutions",
	},
	description:
		"We help banks, fintechs, and governments verify users in seconds   reducing fraud, enabling compliance, and securing digital access for everyone.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	)
}
