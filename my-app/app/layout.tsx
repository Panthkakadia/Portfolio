import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Panth Kakadia — Software Developer',
  description: 'Software Developer building React frontends, REST APIs, and AI-powered automation systems. Turned a 90-minute manual process into a 15-minute automated workflow.',
  keywords: 'Panth Kakadia, Software Developer, React, TypeScript, N8N, AI Automation, REST APIs, Toronto',
  authors: [{ name: 'Panth Kakadia' }],
  openGraph: {
    title: 'Panth Kakadia — Software Developer',
    description: 'React frontends, REST APIs, and AI-powered automation. I eliminate manual friction.',
    url: 'https://panthkakadia.vercel.app',
    siteName: 'Panth Kakadia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panth Kakadia — Software Developer',
    description: 'React frontends, REST APIs, and AI-powered automation. I eliminate manual friction.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#030712] text-slate-100 antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
