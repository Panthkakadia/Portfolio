'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import Badge from '@/components/ui/Badge'

const projects = [
  {
    title: 'Calipher — MCQ Answer Optimization Engine',
    description: 'Architected Spring Boot microservice with modular analyzer components processing concurrent requests. Implemented weighted scoring algorithms and statistical analysis modules following SOLID principles. Developed comprehensive JUnit test suite with 85% code coverage, including edge case validation.',
    tech: ['Java', 'Spring Boot', 'Maven', 'JUnit 5', 'REST API', 'Design Patterns'],
    github: 'https://github.com/panthkakadia/mcq-optimizer',
  },
  {
    title: 'Movies Discovery Platform',
    description: 'Engineered backend REST APIs with Node.js/Express handling user authentication and catalog search functionality. Designed relational schema in PostgreSQL for structured data and leveraged MongoDB for flexible document storage. Optimized database queries, reducing average response time to sub-200ms.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/panthkakadia/movies-app',
  },
  {
    title: 'Low Ballers — Real Estate Analytics Mobile App',
    description: 'Built mobile application analyzing Toronto property listings against comparable market values. Integrated Firebase Authentication for secure user sessions and persistent data storage. Consumed third-party REST APIs to retrieve and parse real estate listing data.',
    tech: ['React Native', 'Firebase Authentication', 'REST APIs', 'JavaScript'],
    github: 'https://github.com/panthkakadia/PropertyIntel',
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
            <span className="text-primary-500 font-mono">03.</span> Projects
          </h2>
          <div className="h-1 w-20 bg-primary-500 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-primary-500/30 transition-all hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors flex-shrink-0 ml-3"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
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

              <FaGithub size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}