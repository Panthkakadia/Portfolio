'use client'

import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'AI-Powered Job Search Automation',
    featured: true,
    problem: 'Job applications required 90+ minutes each of manual research, scoring, and outreach.',
    solution: 'Built six connected N8N workflows: job fetcher, AI scoring engine (Claude API), referral matcher (Notion), cover letter generator, daily Gmail briefing, and error-handling with retry logic.',
    impact: '6x productivity gain — 90 min down to 15 min per application.',
    tech: ['N8N', 'Claude API', 'Notion API', 'REST APIs', 'Zapier'],
    github: '',
    gradient: 'from-blue-600/20 via-violet-600/10 to-transparent',
  },
  {
    title: 'Calipher — MCQ Optimization Engine',
    featured: false,
    problem: 'No reliable way to analyze MCQ quality at scale.',
    solution: 'Modular RESTful microservice with pluggable decision pipeline.',
    impact: '85% JUnit test coverage, validated under concurrent load.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'JUnit'],
    github: 'https://github.com/panthkakadia/mcq-optimizer',
    gradient: 'from-cyan-600/15 to-transparent',
  },
  {
    title: 'Customer Experience Analytics Dashboard',
    featured: false,
    problem: 'Customer data scattered with no unified view.',
    solution: 'ETL pipeline ingesting ~2,000 records into Power BI with automated refresh.',
    impact: 'Real-time visibility into customer sentiment for leadership.',
    tech: ['Python', 'pandas', 'Power BI', 'ETL'],
    github: '',
    gradient: 'from-emerald-600/15 to-transparent',
  },
  {
    title: 'Movies Discovery Platform',
    featured: false,
    problem: 'Needed scalable backend with dual data models.',
    solution: 'REST APIs across PostgreSQL and MongoDB with contract testing.',
    impact: 'Sub-200ms response times with scalable query patterns.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/panthkakadia/movies-app',
    gradient: 'from-amber-600/15 to-transparent',
  },
  {
    title: 'Low Ballers — Real Estate Analytics',
    featured: false,
    problem: 'No tools for comparing listings to fair market value.',
    solution: 'Mobile app with property API integration and comparison logic.',
    impact: 'Ranked pricing insights for undervalued properties.',
    tech: ['React Native', 'Firebase', 'REST APIs'],
    github: 'https://github.com/panthkakadia/PropertyIntel',
    gradient: 'from-rose-600/15 to-transparent',
  },
]

function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const featured = projects.find(p => p.featured)!
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding bg-[#030712]/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              <span className="text-blue-400 font-mono text-lg mr-2">03.</span>
              Projects
            </h2>
            <div className="h-px bg-white/[0.06] flex-1" />
          </div>
          <p className="text-slate-500 mb-12 max-w-lg">
            Real systems I&apos;ve built — each one solving a specific problem.
          </p>

          {/* Featured project — large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SpotlightCard className="mb-8 rounded-2xl glass p-8 md:p-10 relative overflow-hidden group glass-hover">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-50`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10 uppercase tracking-widest mb-4">
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {featured.title}
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Problem</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{featured.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Solution</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{featured.solution}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">Impact</div>
                    <p className="text-white text-sm leading-relaxed font-medium">{featured.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-blue-500/10 text-blue-300/80 border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Other projects — grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {others.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <SpotlightCard className="group h-full rounded-2xl glass glass-hover p-6 flex flex-col relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 pr-4 leading-snug">
                        {project.title}
                      </h3>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                          aria-label="View source"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                    </div>

                    <div className="space-y-2.5 mb-5 flex-1">
                      <p className="text-xs text-slate-500">
                        <span className="font-mono">Problem:</span>{' '}
                        <span className="text-slate-400">{project.problem}</span>
                      </p>
                      <p className="text-xs text-slate-500">
                        <span className="font-mono">Solution:</span>{' '}
                        <span className="text-slate-400">{project.solution}</span>
                      </p>
                      <p className="text-xs">
                        <span className="font-mono text-blue-400/70">Impact:</span>{' '}
                        <span className="text-white/90 font-medium">{project.impact}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.04]">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-[11px] font-mono rounded-md bg-white/[0.03] text-slate-500 border border-white/[0.04]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/panthkakadia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] text-slate-400 hover:text-white text-sm font-medium transition-all duration-300"
            >
              <FaGithub size={16} />
              More on GitHub
              <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
