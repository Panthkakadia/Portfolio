'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-300 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono text-primary-500">
            &lt;PK/&gt;
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/panthkakadia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/panthkakadia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:panthkakadia101@gmail.com"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              Built with <FaHeart className="text-red-500" /> by Panth Kakadia
            </p>
            <p className="mt-2">
              © {currentYear} All rights reserved. Designed & Developed with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}