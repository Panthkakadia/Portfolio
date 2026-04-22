'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Software Developer',
    company: 'York Region Education Services (YRES)',
    period: 'Mar 2026 — Present',
    location: 'Ontario',
    current: true,
    description: [
      'Developing and shipping features across YRES\'s web platform: React frontends, REST API endpoints, and database queries supporting program registration, volunteer coordination, and camp management.',
      'Identifying operational bottlenecks and building software to automate them. Writing unit and integration tests, participating in code reviews, and maintaining technical documentation.',
      'Building data pipelines and reporting tools to surface enrollment metrics, volunteer data, and attendance insights for non-technical leadership.',
    ],
    technologies: ['React', 'REST APIs', 'PostgreSQL', 'Python', 'Power BI'],
  },
  {
    title: 'Junior Service Technician',
    company: 'Canada Computers & Electronics',
    period: 'Oct 2024 — Sep 2025',
    location: 'Vaughan, ON',
    current: false,
    description: [
      'Achieved 90% first-contact resolution by translating complex diagnoses into clear explanations for non-technical customers.',
      'Documented recurring incident patterns into structured guides, reducing team escalations by 20%.',
    ],
    technologies: ['Windows', 'Linux', 'Hardware Diagnostics', 'Documentation'],
  },
  {
    title: 'Bookkeeper & Web Support',
    company: "Ilaxi's Food",
    period: 'Jan 2024 — Oct 2024',
    location: 'Toronto, ON',
    current: false,
    description: [
      'Automated weekly transaction reconciliation with a Python script, cutting processing time by 25%.',
      'Built a JSON/XML validation framework that caught data integrity issues before downstream reports.',
    ],
    technologies: ['Python', 'JSON/XML', 'Data Validation', 'Automation'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              <span className="text-blue-400 font-mono text-lg mr-2">04.</span>
              Experience
            </h2>
            <div className="h-px bg-white/[0.06] flex-1" />
          </div>
          <p className="text-slate-500 mb-12 max-w-lg">
            Where I&apos;ve worked and what I&apos;ve shipped.
          </p>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 md:p-8 glass-hover relative overflow-hidden"
              >
                {/* Current role accent */}
                {exp.current && (
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/40 via-blue-500/20 to-transparent" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      {exp.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/10 uppercase tracking-widest">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm">
                      <span className="text-blue-400/80">{exp.company}</span>
                      <span className="text-slate-700 mx-2">/</span>
                      <span className="text-slate-500">{exp.location}</span>
                    </p>
                  </div>
                  <span className="text-slate-600 font-mono text-xs whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-blue-500/50 mt-1.5 flex-shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="currentColor" /></svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.03] text-slate-500 border border-white/[0.04]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership + Education row */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Leadership</div>
              <h3 className="text-white font-bold mb-1">Event Coordinator</h3>
              <p className="text-sm text-blue-400/80 mb-3">BAPS Swaminarayan Sanstha <span className="text-slate-600 font-mono">/ 2022 — Present</span></p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Plan and coordinate large-scale community events, manage cross-functional
                volunteer teams, and adapt resource allocation in real time.
              </p>
            </motion.div> 
             
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Education</div>
              <h3 className="text-white font-bold mb-1">Diploma in Computer Programming</h3>
              <p className="text-sm text-blue-400/80 mb-3">Humber College <span className="text-slate-600 font-mono">/ Expected 2026</span></p>
              <p className="text-slate-500 text-sm">
                OOP & DSA (Java), Database Design (SQL), Software Testing, System Architecture
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
