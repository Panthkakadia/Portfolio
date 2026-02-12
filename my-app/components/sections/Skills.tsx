'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring MVC', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Microservices', level: 75 },
      { name: 'Design Patterns', level: 80 },
    ]
  },
  {
    title: 'Testing & Quality',
    skills: [
      { name: 'JUnit 5', level: 85 },
      { name: 'Selenium WebDriver', level: 70 },
      { name: 'Mockito', level: 75 },
      { name: 'Integration Testing', level: 80 },
      { name: 'Test-Driven Development', level: 75 },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'Query Optimization', level: 75 },
      { name: 'Schema Design', level: 80 },
    ]
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React', level: 80 },
      { name: 'React Native', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5/CSS3', level: 80 },
    ]
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Maven', level: 85 },
      { name: 'Linux CLI', level: 80 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'Postman', level: 85 },
    ]
  },
  {
    title: 'Core Competencies',
    skills: [
      { name: 'Object-Oriented Programming', level: 90 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'System Architecture', level: 75 },
      { name: 'Code Reviews', level: 80 },
      { name: 'Technical Documentation', level: 85 },
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