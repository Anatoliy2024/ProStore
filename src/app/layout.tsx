import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LayoutHeader } from "@/provider/LayoutHeader"
import { cookies } from "next/headers"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ProStore",
  description: "Products Store test project",
  icons: {
    icon: "/icons/favicon.png", // путь к иконке (должна быть в папке public)
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const theme = cookieStore.get("theme")?.value || "light"
  console.log("theme", theme)
  return (
    <html lang="en" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutHeader>{children}</LayoutHeader>
      </body>
    </html>
  )
}
