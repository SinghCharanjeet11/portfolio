'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-5xl md:text-6xl font-bold mb-6 text-white">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Drop me a line and let's chat
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:charansingh9450v@gmail.com"
            className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform"
          >
            <div className="text-xs text-indigo-400 mb-2 font-bold uppercase">Email</div>
            <div className="text-base text-white mb-2">charansingh9450v@gmail.com</div>
            <div className="text-sm text-gray-500">Best way to reach me</div>
          </a>
          
          <a
            href="https://github.com/SinghCharanjeet11"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform"
          >
            <div className="text-xs text-indigo-400 mb-2 font-bold uppercase">GitHub</div>
            <div className="text-base text-white mb-2">@SinghCharanjeet11</div>
            <div className="text-sm text-gray-500">Check out my code</div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/charanjeet-singh-12ba2732a"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform"
          >
            <div className="text-xs text-indigo-400 mb-2 font-bold uppercase">LinkedIn</div>
            <div className="text-base text-white mb-2">Charanjeet Singh</div>
            <div className="text-sm text-gray-500">Connect professionally</div>
          </a>
        </div>
      </div>
    </section>
  )
}
