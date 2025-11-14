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
                Hello! I'm Panth, a passionate Computer Programming student at Humber College 
                with a deep interest in <span className="text-primary-400 font-semibold">AI integration</span>, 
                <span className="text-primary-400 font-semibold"> full-stack development</span>, and 
                <span className="text-primary-400 font-semibold"> performance optimization</span>.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech started with curiosity about how systems work under the hood. 
                This led me to build everything from AI-powered chatbots to e-commerce platforms. 
                Currently working at Canada Computers, where I've improved customer resolution 
                rates by 20% through systematic process optimization.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or volunteering at community events. I believe in writing 
                clean, efficient code that makes a real impact.
              </p>
            </div>
            
            <Card variant="glass" className="font-mono text-sm">
              <div className="text-primary-400 mb-4">const panth = &#123;</div>
              <div className="ml-4 space-y-2 text-gray-300">
                <div>location: <span className="text-green-400">"Toronto, ON"</span>,</div>
                <div>education: <span className="text-green-400">"Humber College"</span>,</div>
                <div>graduation: <span className="text-green-400">"April 2026"</span>,</div>
                <div>currentRole: <span className="text-green-400">"Junior Service Tech"</span>,</div>
                <div>interests: [</div>
                <div className="ml-4">
                  <div><span className="text-green-400">"AI/ML"</span>,</div>
                  <div><span className="text-green-400">"Web Development"</span>,</div>
                  <div><span className="text-green-400">"System Design"</span>,</div>
                  <div><span className="text-green-400">"Open Source"</span></div>
                </div>
                <div>],</div>
                <div>currentlyLearning: <span className="text-green-400">"Spring Boot"</span>,</div>
                <div>funFact: <span className="text-green-400">"Built an MCQ analyzer that's as accurate as a coin flip 😅"</span></div>
              </div>
              <div className="text-primary-400 mt-4">&#125;;</div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}