'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import Badge from '@/components/ui/Badge'

const projects = [
  {
    title: 'Calipher — MCQ Answer Optimization Engine',
    description: 'Designed modular Spring Boot microservice with statistical analyzers that processes multiple-choice questions. Deployed REST APIs handling 50+ concurrent requests with 99.9% uptime on AWS EC2. Built configurable decision pipeline with pattern, statistical, and structural analyzers to rank answer options and generate confidence scores.',
    tech: ['Java', 'Spring Boot', 'AWS EC2', 'Maven', 'REST API', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/panthkakadia/mcq-optimizer',
    demo: null,
    featured: true,
  },
  {
    title: 'Low Ballers (Property Intel) — Real Estate Analytics App',
    description: 'Built React Native mobile app that evaluates Toronto property listings by comparing listing price vs. comparable values and days-on-market to flag overpriced properties and suggest offer ranges. Implemented Home, Search, Analysis, Saved, Auth, and Settings screens with bottom-tab navigation. Integrated Firebase Authentication and API-based listing data.',
    tech: ['React Native', 'Firebase Authentication', 'REST APIs', 'Redux', 'JavaScript'],
    github: 'https://github.com/panthkakadia/PropertyIntel',
    demo: null,
    featured: true,
  },
  {
    title: 'Movies App — Full-Stack Movie Discovery Platform',
    description: 'Architected full-stack platform serving 100+ REST endpoints with optimized MongoDB pipelines achieving 120ms avg response time. Developed React front end with Node.js/Express backend, implemented search, browse, and detail pages with reusable components. Added user authentication for personalized movie discovery with real-time search over 10K+ records.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'AWS EC2'],
    github: 'https://github.com/panthkakadia/movies-app',
    demo: null,
    featured: true,
  },
  {
    title: 'Customer Experience Analytics Dashboard',
    description: 'Built ETL pipeline processing 2,000+ customer records, reducing dashboard refresh time from 45s to 3s. Created analytics dashboard tracking customer/service performance metrics using Power BI. Developed Python (pandas) pipeline to clean and transform data, then modeled for reporting. Automated recurring report refresh/workflows.',
    tech: ['Python', 'Apache Spark', 'AWS EMR', 'SQL', 'Power BI', 'Pandas'],
    github: null,
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
    <section id="projects" className="py-20 px-6 bg-dark-200/50">
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

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-dark-100/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500/30 transition-all ${
                  project.featured ? 'md:grid md:grid-cols-12 md:gap-8' : ''
                }`}
              >
                <div className={project.featured ? 'md:col-span-7 p-8' : 'p-6'}>
                  <div className="flex items-center gap-2 mb-3">
                    {project.featured && (
                      <span className="text-primary-500 text-sm font-mono">Featured Project</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className={`${project.featured ? 'bg-dark-200/80 p-6 rounded-lg mb-4' : 'mb-4'}`}>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-500 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-500 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {project.featured && (
                  <div className="md:col-span-5 relative min-h-[200px] md:min-h-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                        💻
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/panthkakadia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-500 hover:bg-primary-500/10 rounded-lg font-semibold transition-colors"
            >
              View More on GitHub
              <FaExternalLinkAlt size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}