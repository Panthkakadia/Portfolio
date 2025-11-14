import dynamic from 'next/dynamic'

// Use dynamic imports to avoid Next.js 15.5.x compound component issues
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: true })
const About = dynamic(() => import('@/components/sections/About'), { ssr: true })
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: true })
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: true })
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: true })
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}