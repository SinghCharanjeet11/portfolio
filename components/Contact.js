'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-40 px-6 relative overflow-hidden">
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
          <p className="text-xl text-[#A1A9D6] max-w-2xl mx-auto">
            Drop me a line and let's chat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:charansingh9450v@gmail.com"
            className="rounded-2xl p-8 bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.25)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs text-[#A1A9D6] mb-2 font-bold uppercase">Email</div>
            <div className="text-base text-white mb-2">charansingh9450v@gmail.com</div>
            <div className="text-sm text-[#A1A9D6]">Best way to reach me</div>
          </motion.a>

          <motion.a
            href="https://github.com/SinghCharanjeet11"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-8 bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.25)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs text-[#A1A9D6] mb-2 font-bold uppercase">GitHub</div>
            <div className="text-base text-white mb-2">@SinghCharanjeet11</div>
            <div className="text-sm text-[#A1A9D6]">Check out my code</div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/charanjeet-singh-12ba2732a"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-8 bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.25)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs text-[#A1A9D6] mb-2 font-bold uppercase">LinkedIn</div>
            <div className="text-base text-white mb-2">Charanjeet Singh</div>
            <div className="text-sm text-[#A1A9D6]">Connect professionally</div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
