'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'

const roles = [
  'Software Developer',
  'Automation Engineer',
  'AI Systems Builder',
]

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)))
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const typedText = useTypingEffect(roles)

  // Parallax mouse effect on shapes
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2

      const shapes = container.querySelectorAll<HTMLElement>('.floating-shape')
      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 8
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large ring */}
        <div
          className="floating-shape absolute top-[15%] right-[10%] w-72 h-72 rounded-full border border-blue-500/[0.07] transition-transform duration-700 ease-out"
          style={{ animation: 'float-slow 15s ease-in-out infinite' }}
        />
        {/* Small filled circle */}
        <div
          className="floating-shape absolute bottom-[25%] left-[8%] w-3 h-3 rounded-full bg-blue-400/20 transition-transform duration-700 ease-out"
          style={{ animation: 'float-fast 8s ease-in-out infinite' }}
        />
        {/* Medium ring */}
        <div
          className="floating-shape absolute top-[60%] right-[25%] w-32 h-32 rounded-full border border-violet-500/[0.05] transition-transform duration-700 ease-out"
          style={{ animation: 'float-medium 12s ease-in-out infinite' }}
        />
        {/* Gradient blob */}
        <div
          className="floating-shape absolute top-[30%] left-[20%] w-96 h-96 rounded-full transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
            animation: 'float-slow 18s ease-in-out infinite',
            animationDelay: '5s',
          }}
        />
        {/* Small accent dot */}
        <div
          className="floating-shape absolute top-[20%] left-[45%] w-1.5 h-1.5 rounded-full bg-cyan-400/30 transition-transform duration-700 ease-out"
          style={{ animation: 'float-fast 6s ease-in-out infinite', animationDelay: '2s' }}
        />
        {/* Horizontal line accent */}
        <div
          className="floating-shape absolute top-[45%] left-[5%] w-24 h-px glow-line transition-transform duration-700 ease-out"
          style={{ animation: 'float-medium 14s ease-in-out infinite', animationDelay: '3s' }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 max-w-5xl">
        <div className="space-y-8">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              <span className="block text-white">Panth</span>
              <span className="block text-white">Kakadia</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-xl md:text-2xl font-mono text-blue-400">
                {typedText}
                <span className="animate-pulse text-blue-400/60">|</span>
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
          >
            I turn <span className="text-white">90-minute manual processes</span> into{' '}
            <span className="text-white">15-minute automated workflows</span>.
            Building React frontends, REST APIs, and AI-powered systems at YRES.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-slate-300 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-white/[0.04]"
          >
            {[
              { value: '90→15', unit: 'min', label: 'Process Time' },
              { value: '6', unit: '', label: 'AI Workflows' },
              { value: '2K+', unit: '', label: 'Records Processed' },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold font-mono text-white">
                  {m.value}
                  {m.unit && <span className="text-blue-400/70 text-base ml-0.5">{m.unit}</span>}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side social bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="fixed bottom-0 left-8 hidden xl:flex flex-col items-center gap-5 z-50"
      >
        <a href="https://github.com/panthkakadia" target="_blank" rel="noopener noreferrer"
           className="text-slate-600 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-200" aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href="https://linkedin.com/in/panthkakadia" target="_blank" rel="noopener noreferrer"
           className="text-slate-600 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-200" aria-label="LinkedIn">
          <FaLinkedin size={18} />
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}
