'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 80 },
    ]
  },
  {
    title: 'Frameworks & APIs',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'React', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'Node.js/Express', level: 85 },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'Relational Design', level: 80 },
    ]
  },
  {
    title: 'Cloud & Data',
    skills: [
      { name: 'Apache Spark', level: 75 },
      { name: 'AWS EMR', level: 70 },
      { name: 'REST APIs', level: 90 },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Maven', level: 85 },
      { name: 'Linux CLI', level: 85 },
      { name: 'Docker', level: 70 },
    ]
  },
  {
    title: 'Specializations',
    skills: [
      { name: 'Full-Stack Development', level: 90 },
      { name: 'Microservices Architecture', level: 85 },
      { name: 'ETL Pipelines', level: 80 },
      { name: 'Performance Optimization', level: 85 },
    ]
  }
]

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-blue-500 font-mono">02.</span> Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-500 mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
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

export default Skills