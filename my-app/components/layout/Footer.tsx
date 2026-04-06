'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="https://github.com/panthkakadia" target="_blank" rel="noopener noreferrer"
               className="text-slate-600 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/in/panthkakadia" target="_blank" rel="noopener noreferrer"
               className="text-slate-600 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a href="mailto:panthkakadia101@gmail.com"
               className="text-slate-600 hover:text-white transition-colors duration-200" aria-label="Email">
              <FaEnvelope size={16} />
            </a>
          </div>
          <p className="text-slate-700 text-xs font-mono">
            Panth Kakadia / {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
