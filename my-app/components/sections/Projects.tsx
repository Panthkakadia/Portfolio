'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'AI-Powered MCQ Analyzer',
    description: 'Built a Java Spring Boot application that analyzes multiple-choice questions using pure algorithmic reasoning. A learning experience about the gap between rule-based systems and true AI.',
    tech: ['Java', 'Spring Boot', 'Pattern Analysis', 'REST API'],
    github: 'https://github.com/panthkakadia/mcq-analyzer',
    demo: null,
    featured: true,
  },
  {
    title: 'AI-Powered MCQ Analyzer',
    description: 'Built a Java Spring Boot application that analyzes multiple-choice questions using pure algorithmic reasoning. A learning experience about the gap between rule-based systems and true AI.',
    tech: ['Java', 'Spring Boot', 'Pattern Analysis', 'REST API'],
    github: 'https://github.com/panthkakadia/mcq-analyzer',
    demo: null,
    featured: true,
  },
  
  {
    title: 'AI-Enhanced E-commerce Platform',
    description: 'Full-stack e-commerce application with AI-powered product recommendations and chatbot support. Achieved 90+ Lighthouse score with real-time performance monitoring.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Machine Learning APIs'],
    github: 'https://github.com/panthkakadia/ecommerce-ai',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    title: 'Customer Analytics Dashboard',
    description: 'Developed ETL pipeline processing 100K+ records with PowerBI dashboards achieving 85% forecasting accuracy.',
    tech: ['Python', 'PowerBI', 'SQL', 'REST APIs'],
    github: 'https://github.com/panthkakadia/analytics-dashboard',
    demo: null,
    featured: false,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500 font-mono">03.</span> Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary-500 mb-12"></div>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${
                  project.featured 
                    ? 'bg-dark-100/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-500/40' 
                    : 'bg-dark-200/30 rounded-lg p-6'
                }`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 text-xs text-primary-500 font-mono">
                    Featured
                  </span>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}