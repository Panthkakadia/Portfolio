'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) throw new Error()

    setFormData({ name: '', email: '', message: '' })
    alert('Message sent!')
  } catch {
    alert('Failed to send message.')
  } finally {
    setIsSubmitting(false)
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'panthkakadia101@gmail.com',
      href: 'mailto:panthkakadia101@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (647) 554-7618',
      href: 'tel:+16475547618'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/panthkakadia',
      href: 'https://github.com/panthkakadia'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/panthkakadia',
      href: 'https://linkedin.com/in/panthkakadia'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-dark-200/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500 font-mono">05.</span> Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary-500 mb-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-dark-100/50 hover:bg-dark-100/80 transition-colors group"
                  >
                    <link.icon className="text-primary-500 text-xl group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold text-white">{link.label}</p>
                      <p className="text-gray-400 text-sm">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <Card variant="glass">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200/50 border border-gray-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200/50 border border-gray-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-200/50 border border-gray-600 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}