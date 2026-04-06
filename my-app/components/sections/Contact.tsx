'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheck, FaTimes, FaDownload } from 'react-icons/fa'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const links = [
    { icon: FaEnvelope, label: 'Email', value: 'panthkakadia101@gmail.com', href: 'mailto:panthkakadia101@gmail.com' },
    { icon: FaGithub, label: 'GitHub', value: 'panthkakadia', href: 'https://github.com/panthkakadia' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'panthkakadia', href: 'https://linkedin.com/in/panthkakadia' },
  ]

  const inputClasses = 'w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl focus:border-blue-500/30 focus:ring-1 focus:ring-blue-500/10 focus:outline-none transition-all text-white placeholder-slate-600 text-sm'

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-full h-px glow-line" />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              <span className="text-blue-400 font-mono text-lg mr-2">05.</span>
              Get In Touch
            </h2>
            <div className="h-px bg-white/[0.06] flex-1" />
          </div>
          <p className="text-slate-500 mb-12 max-w-lg">
            Open to new opportunities, automation challenges, or interesting collaborations.
          </p>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-4">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                    <link.icon className="text-slate-500 group-hover:text-blue-400 transition-colors" size={15} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{link.label}</p>
                    <p className="text-slate-600 text-xs">{link.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Hire CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-xl p-6 mt-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                <div className="relative z-10">
                  <p className="text-white font-semibold mb-1.5">Looking to hire?</p>
                  <p className="text-slate-500 text-sm mb-4">
                    I&apos;m open to full-time roles where I can build impactful software and automate operations.
                  </p>
                  <a
                    href="/Panth_Kakadia_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <FaDownload size={12} />
                    Download Resume
                    <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono text-slate-600 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      className={inputClasses} placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono text-slate-600 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className={inputClasses} placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono text-slate-600 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-violet-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={13} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/10 text-green-400 text-sm"
                  >
                    <FaCheck size={12} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/10 text-red-400 text-sm"
                  >
                    <FaTimes size={12} />
                    Failed to send. Try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
