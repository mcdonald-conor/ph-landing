import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.practicehero.co.uk'),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || "Practice Hero",
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || "Practice Hero"}`,
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "AI-powered EHR summarization tool that helps GPs prepare for consultations",
  keywords: ["AI", "healthcare", "GP", "EHR", "patient records", "consultation", "agentic AI", "NHS", "medical software", "practice management"],
  authors: [{ name: "Practice Hero" }],
  creator: "Practice Hero",
  publisher: "Practice Hero",
  generator: "Next.js",
  applicationName: "Practice Hero",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "Practice Hero - AI-powered EHR summarization for GPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'
