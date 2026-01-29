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
                Hello! I'm Panth, a Computer Programming student at Humber College 
                with a strong passion for <span className="text-primary-400 font-semibold">Java and backend development</span>. 
                I've built production systems ranging from <span className="text-primary-400 font-semibold">Spring Boot microservices</span> to 
                <span className="text-primary-400 font-semibold"> React Native mobile apps</span>, always focusing on 
                scalable architecture and clean code.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech has been driven by curiosity and a willingness to go beyond course 
                requirements to truly understand how systems work end to end. From deploying microservices 
                on AWS EC2 to building ETL pipelines with Apache Spark, I've gained hands-on experience 
                with the full development lifecycle.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently working as a Junior Service Technician at Canada Computers, where I've resolved 
                50+ daily technical cases with 95% first-contact resolution and orchestrated 200+ system 
                deployments. When I'm not coding or troubleshooting systems, you'll find me volunteering 
                as an Event Coordinator, leading 50+ volunteers in community service initiatives.
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
                <div>interests: [</div>
                <div className="ml-4">
                  <div><span className="text-green-400">"Spring Boot Development"</span>,</div>
                  <div><span className="text-green-400">"Full-Stack Applications"</span>,</div>
                  <div><span className="text-green-400">"Cloud Architecture (AWS)"</span>,</div>
                  <div><span className="text-green-400">"Mobile Development"</span>,</div>
                  <div><span className="text-green-400">"System Design"</span></div>
                </div>
                <div>],</div>
                <div>currentlyBuilding: <span className="text-green-400">"Scalable microservices"</span>,</div>
                <div>strengths: [</div>
                <div className="ml-4">
                  <div><span className="text-green-400">"Backend architecture"</span>,</div>
                  <div><span className="text-green-400">"Problem solving"</span>,</div>
                  <div><span className="text-green-400">"Full-stack thinking"</span></div>
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