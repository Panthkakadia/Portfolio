'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const newProgress = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(newProgress)
      scaleX.set(newProgress)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [scaleX])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] scroll-progress origin-left"
      style={{ scaleX }}
    />
  )
}
