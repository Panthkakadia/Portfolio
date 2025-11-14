'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import CodeRain from '@/components/animations/CodeRain'
import GlitchText from '@/components/animations/GlitchText'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CodeRain />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-100/80 backdrop-blur-sm rounded-lg p-8 border border-primary-500/20">
            <div className="flex items-center gap-2 text-primary-500 font-mono text-sm mb-4">
              <span className="animate-pulse">$</span>
              <span>whoami</span>
            </div>
            
            <GlitchText text="Panth Kakadia" className="text-5xl md:text-7xl font-bold mb-4" />
            
            <div className="flex items-center gap-2 text-primary-500 font-mono text-sm mb-2">
              <span className="animate-pulse">$</span>
              <span>cat role.txt</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-6">
              Software Engineer | AI Enthusiast | Problem Solver
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Computer Programming student at Humber College building AI-powered solutions 
              and optimizing user experiences through innovative technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary-500 hover:bg-primary-500/10 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <FaDownload /> Resume
              </motion.a>
              
              <div className="flex gap-4 items-center ml-auto">
                <a href="https://github.com/panthkakadia" target="_blank" rel="noopener noreferrer" 
                   className="text-2xl hover:text-primary-500 transition-colors">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/panthkakadia" target="_blank" rel="noopener noreferrer"
                   className="text-2xl hover:text-primary-500 transition-colors">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}