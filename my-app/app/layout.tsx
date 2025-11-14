import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Panth Kakadia | Software Engineer',
  description: 'Computer Programming student specializing in AI integration, full-stack development, and performance optimization',
  keywords: 'Panth Kakadia, Software Engineer, Full Stack Developer, AI, Next.js, React, TypeScript',
  authors: [{ name: 'Panth Kakadia' }],
  openGraph: {
    title: 'Panth Kakadia | Software Engineer',
    description: 'Building AI-powered solutions & optimizing user experiences',
    url: 'https://panthkakadia.vercel.app',
    siteName: 'Panth Kakadia Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark-300 text-gray-100`}>
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