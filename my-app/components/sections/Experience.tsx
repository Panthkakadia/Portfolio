'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Badge from '@/components/ui/Badge'

const experiences = [
  {
    title: 'Junior Service Technician',
    company: 'Canada Computers & Electronics',
    period: 'Oct 2024 - Sep 2025',
    location: 'Vaughan, ON',
    description: [
      'Resolved 50+ daily technical cases across Windows/Linux with 95% first-contact resolution',
      'Orchestrated 200+ system deployments with custom network configurations under 2-hour SLAs',
      'Authored 15+ troubleshooting standards, reducing escalations by 20%',
      'Provided technical consultation and hardware diagnostics for customers'
    ],
    technologies: ['Windows', 'Linux', 'Hardware Diagnostics', 'Network Configuration', 'Technical Support']
  },
  {
    title: 'Bookkeeper & Web Support Assistant',
    company: 'Ilaxi Foods',
    period: 'Jan 2024 - Oct 2024',
    location: 'Toronto, ON',
    description: [
      'Automated reconciliation of 100+ weekly transactions using Python, reducing processing time by 25%',
      'Built data validation workflows ensuring 100% accuracy across JSON/XML financial feeds',
      'Managed financial records and supported web operations',
      'Streamlined bookkeeping processes through automation'
    ],
    technologies: ['Python', 'Data Validation', 'JSON/XML', 'Financial Systems', 'Process Automation']
  }
]

const leadership = {
  title: 'Event Coordinator — Volunteer',
  organization: 'BAPS Swaminarayan Sanstha',
  period: '2022 - Present',
  description: 'Coordinated 15+ large-scale events, leading 50+ volunteers and optimizing schedules for community service initiatives.'
}

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
            
            {/* Work Experience */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 pb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-300"></div>
                
                <div className="bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-primary-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
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
                  <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                  
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
            
            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: experiences.length * 0.2 }}
              className="relative pl-12 pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-300"></div>
              
              <div className="bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-primary-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {leadership.title}
                    </h3>
                    <p className="text-primary-400 font-semibold">@ {leadership.organization}</p>
                  </div>
                  <span className="text-gray-400 font-mono text-sm mt-2 md:mt-0">
                    {leadership.period}
                  </span>
                </div>
                
                <p className="text-gray-300">
                  <span className="text-primary-500 mr-2">▹</span>
                  {leadership.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}