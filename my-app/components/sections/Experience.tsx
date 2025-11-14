'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Badge from '@/components/ui/Badge'

const experiences = [
  {
    title: 'Junior Service Technician',
    company: 'Canada Computers',
    period: 'Oct 2024 - Present',
    description: [
      'Orchestrated technical support workflows for 50+ daily interactions with 95% first-contact resolution',
      'Analyzed customer feedback patterns improving satisfaction scores by 20%',
      'Optimized service delivery processes reducing resolution time by 30%',
      'Generated $15K+ monthly revenue through strategic consultation'
    ],
    technologies: ['Hardware Diagnostics', 'Process Optimization', 'Customer Support']
  },
  {
    title: 'Bookkeeper & Web Support Assistant',
    company: 'Ilaxi\'s Food',
    period: 'Jan 2024 - Oct 2024',
    description: [
      'Streamlined financial operations reducing processing time by 25%',
      'Architected customer support framework handling 100+ weekly inquiries',
      'Enhanced digital experience increasing conversion rate by 15%',
      'Collaborated on Next.js/Tailwind implementations improving page speeds by 40%'
    ],
    technologies: ['WordPress', 'Next.js', 'Financial Management', 'UX/UI Design']
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500 font-mono">04.</span> Experience
          </h2>
          <div className="h-1 w-20 bg-primary-500 mb-12"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-500/30"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-300"></div>
                
                <div className="bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-primary-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary-400 font-semibold">@ {exp.company}</p>
                    </div>
                    <span className="text-gray-400 font-mono text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-primary-500 mr-2 mt-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="primary" size="sm">
                        {tech}
                      </Badge>
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