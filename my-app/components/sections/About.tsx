'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techStack = [
  'React', 'TypeScript', 'Python', 'Java', 'N8N', 'Claude API',
  'Node.js', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Power BI',
  'REST APIs', 'Docker', 'AWS', 'LangChain', 'pandas', 'scikit-learn', 'Git',
]

const highlights = [
  { label: 'Current', value: 'Software Developer @ YRES' },
  { label: 'Focus', value: 'Automation & AI Integration' },
  { label: 'Education', value: 'Computer Programming, Humber College' },
  { label: 'Based in', value: 'Toronto, ON' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-px glow-line" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              <span className="text-blue-400 font-mono text-lg mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-white/[0.06] flex-1" />
          </div>

          <div className="grid lg:grid-cols-5 gap-14 mt-12">
            {/* Story */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m a Software Developer at{' '}
                <span className="text-white font-medium">YRES</span>, building
                React frontends, REST API endpoints, and database-driven features
                for an educational platform serving thousands of users.
              </p>

              <p className="text-slate-400 text-[17px] leading-relaxed">
                My biggest obsession is eliminating manual friction. I built a production
                N8N automation system — six workflows integrating the Claude API, Notion,
                and third-party job APIs — that{' '}
                <span className="text-white font-medium">cut a 90-minute process to 15 minutes</span>.
              </p>

              <p className="text-slate-400 text-[17px] leading-relaxed">
                I work daily with LLMs, AI coding tools, Python ETL pipelines, and Power BI.
                Whether it&apos;s a React component, a REST endpoint, or a data pipeline,
                I build things that work reliably and save people time.
              </p>
            </div>

            {/* Quick facts */}
            <div className="lg:col-span-2 space-y-4">
              <div className="glass rounded-2xl p-6">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="py-3 first:pt-0 last:pb-0"
                  >
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                    {i < highlights.length - 1 && <div className="h-px bg-white/[0.04] mt-3" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 border-y border-white/[0.04] py-5 overflow-hidden"
      >
        <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-sm font-mono text-slate-600 flex items-center gap-3">
              {tech}
              <span className="text-slate-800">/</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
