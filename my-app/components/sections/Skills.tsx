'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const bentoItems = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
    accent: 'from-blue-500/20 to-blue-600/5',
    accentBorder: 'group-hover:border-blue-500/20',
    tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/10',
    size: 'md:col-span-2',
    icon: '{ }',
  },
  {
    category: 'Automation & AI',
    skills: ['N8N', 'Claude API', 'LangChain', 'LangGraph', 'RAG', 'MCP', 'Zapier', 'Claude Code', 'Cursor'],
    accent: 'from-violet-500/20 to-violet-600/5',
    accentBorder: 'group-hover:border-violet-500/20',
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/10',
    size: 'md:col-span-2',
    icon: '~ $',
  },
  {
    category: 'Backend & Frontend',
    skills: ['React', 'React Native', 'Node.js', 'Express', 'Spring Boot', 'Firebase', 'REST APIs'],
    accent: 'from-cyan-500/20 to-cyan-600/5',
    accentBorder: 'group-hover:border-cyan-500/20',
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/10',
    size: 'md:col-span-2',
    icon: '< />',
  },
  {
    category: 'Data & Databases',
    skills: ['pandas', 'ETL Pipelines', 'Power BI', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server'],
    accent: 'from-emerald-500/20 to-emerald-600/5',
    accentBorder: 'group-hover:border-emerald-500/20',
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/10',
    size: 'md:col-span-2',
    icon: 'db',
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'Maven', 'Jira', 'Linux CLI', 'Agile/Scrum', 'JUnit', 'JSON/XML'],
    accent: 'from-amber-500/20 to-amber-600/5',
    accentBorder: 'group-hover:border-amber-500/20',
    tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/10',
    size: 'md:col-span-2',
    icon: '>>',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              <span className="text-blue-400 font-mono text-lg mr-2">02.</span>
              Technical Skills
            </h2>
            <div className="h-px bg-white/[0.06] flex-1" />
          </div>
          <p className="text-slate-500 mb-12 max-w-lg">
            Tools and technologies I work with daily to build, automate, and ship.
          </p>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bentoItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl glass glass-hover p-6 ${item.size} ${item.accentBorder} overflow-hidden`}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </h3>
                    <span className="text-xs font-mono text-slate-600">{item.icon}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-sm rounded-lg border ${item.tagColor} transition-colors duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
