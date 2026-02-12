'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '@/components/ui/Card'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-6 bg-dark-200/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500 font-mono">01.</span> About Me
          </h2>
          <div className="h-1 w-20 bg-primary-500 mb-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm Panth, a Computer Programming student at Humber College with a strong interest 
                in <span className="text-primary-400 font-semibold">Java backend development</span>. 
                I focus on building <span className="text-primary-400 font-semibold">RESTful APIs</span> and 
                <span className="text-primary-400 font-semibold"> Spring Boot microservices</span> that 
                are maintainable, well-tested, and production-ready.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My approach to development centers on writing clean code, implementing comprehensive 
                test coverage with JUnit and Selenium, and following SOLID design principles. I've worked 
                with both relational databases (PostgreSQL, MySQL) and NoSQL solutions (MongoDB), 
                focusing on query optimization and proper schema design.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently working as a Junior Service Technician at Canada Computers, where I troubleshoot 
                technical issues across Windows and Linux systems with a 90% resolution rate. This role has 
                sharpened my problem-solving skills and taught me the importance of clear documentation 
                and systematic debugging.
              </p>
            </div>
            
            <Card variant="glass" className="font-mono text-sm">
              <div className="text-primary-400 mb-4">const panth = &#123;</div>
              <div className="ml-4 space-y-2 text-gray-300">
                <div>location: <span className="text-green-400">"Toronto, ON"</span>,</div>
                <div>education: <span className="text-green-400">"Humber College"</span>,</div>
                <div>program: <span className="text-green-400">"Computer Programming"</span>,</div>
                <div>graduation: <span className="text-green-400">"2026"</span>,</div>
                <div>currentRole: <span className="text-green-400">"Junior Service Technician"</span>,</div>
                <div>focus: [</div>
                <div className="ml-4">
                  <div><span className="text-green-400">"Java Backend Development"</span>,</div>
                  <div><span className="text-green-400">"Spring Boot Microservices"</span>,</div>
                  <div><span className="text-green-400">"RESTful API Design"</span>,</div>
                  <div><span className="text-green-400">"Automated Testing (JUnit)"</span>,</div>
                  <div><span className="text-green-400">"Database Optimization"</span></div>
                </div>
                <div>],</div>
                <div>testing: [</div>
                <div className="ml-4">
                  <div><span className="text-green-400">"JUnit 5"</span>,</div>
                  <div><span className="text-green-400">"Selenium WebDriver"</span>,</div>
                  <div><span className="text-green-400">"Test-Driven Development"</span></div>
                </div>
                <div>],</div>
                <div>databases: [</div>
                <div className="ml-4">
                  <div><span className="text-green-400">"PostgreSQL"</span>,</div>
                  <div><span className="text-green-400">"MongoDB"</span>,</div>
                  <div><span className="text-green-400">"MySQL"</span></div>
                </div>
                <div>]</div>
              </div>
              <div className="text-primary-400 mt-4">&#125;;</div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}