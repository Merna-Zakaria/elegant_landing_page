import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Squid - Beautiful Landing Page Design for You",
  description:
    "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  generator: "Merna.Zakaria",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="dark">{children}</body>
    </html>
  )
}
