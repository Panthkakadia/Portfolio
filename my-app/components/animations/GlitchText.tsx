'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________'
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setIsGlitching(true)
        
        // Create glitched version
        const glitched = text
          .split('')
          .map(char => {
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            }
            return char
          })
          .join('')
        
        setDisplayText(glitched)
        
        // Reset after short delay
        setTimeout(() => {
          setDisplayText(text)
          setIsGlitching(false)
        }, 100)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [text])

  return (
    <h1 
      className={cn(
        'font-bold transition-all duration-100',
        isGlitching && 'animate-pulse',
        className
      )}
      style={{
        textShadow: isGlitching 
          ? '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00'
          : 'none'
      }}
    >
      {displayText}
    </h1>
  )
}