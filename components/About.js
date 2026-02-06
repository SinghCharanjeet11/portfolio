'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    
    let startTime
    const duration = 2000
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function TraitCard({ icon, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative flex items-start gap-4 p-6 rounded-2xl overflow-hidden transition-all duration-300"
        whileHover={{ scale: 1.02, y: -4 }}
      >
        {/* Gradient background - visible on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#7C7CFF] via-[#8B5CF6] to-[#9D5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        
        {/* Default background */}
        <div className="absolute inset-0 bg-[#11162A] border border-[#1F2A44] rounded-2xl group-hover:opacity-0 transition-opacity duration-500" />
        
        {/* Content */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-xl bg-[#11162A]/50 backdrop-blur-sm border border-[#1F2A44] group-hover:border-white/20 group-hover:bg-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300"
          animate={isHovered ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        </motion.div>
        <div className="relative z-10 flex-1">
          <h3 className="text-lg font-bold text-white mb-2 transition-colors">{title}</h3>
          <motion.p
            className="text-sm text-[#9AA3C7] group-hover:text-white/90 leading-relaxed transition-colors duration-300"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-40 px-6 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7C7CFF]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-8">
              <motion.div
                className="w-12 h-1 bg-[#1F2A44] rounded-full mb-6"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-sm font-bold text-[#A1A9D6] uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="font-space text-4xl md:text-5xl font-bold mb-10 text-white leading-tight">
              I build things that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C7CFF] to-[#8B5CF6]">
                make a difference
              </span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Hey! I'm a developer who genuinely loves what I do.{' '}
                <span className="text-white font-semibold">I turn ideas into clean, functional products</span>{' '}
                that people actually enjoy using.
              </p>
              <p className="text-gray-400">
                What drives me? The challenge of solving complex problems with simple, elegant solutions. Whether it's{' '}
                <span className="text-white font-semibold">building responsive interfaces</span> or{' '}
                <span className="text-white font-semibold">architecting scalable backends</span>, I'm all about that sweet spot where design meets functionality.
              </p>
              <p className="text-gray-400">
                I'm constantly learning, experimenting with new tech, and pushing myself to write better code. Because at the end of the day,{' '}
                <span className="text-white font-semibold">quality matters</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div
                className="group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient background - visible on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#7C7CFF] via-[#8B5CF6] to-[#9D5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Default background */}
                <div className="absolute inset-0 bg-[#11162A] border border-[#1F2A44] rounded-2xl group-hover:opacity-0 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-[#F5F7FF] group-hover:text-white mb-2 transition-colors duration-300">
                    <AnimatedNumber value={2} suffix="+" />
                  </div>
                  <div className="text-sm text-[#A1A9D6] group-hover:text-white/90 font-medium transition-colors duration-300">Years Building</div>
                </div>
              </motion.div>
              <motion.div
                className="group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient background - visible on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#7C7CFF] via-[#8B5CF6] to-[#9D5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Default background */}
                <div className="absolute inset-0 bg-[#11162A] border border-[#1F2A44] rounded-2xl group-hover:opacity-0 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-[#F5F7FF] group-hover:text-white mb-2 transition-colors duration-300">
                    <AnimatedNumber value={15} suffix="+" />
                  </div>
                  <div className="text-sm text-[#A1A9D6] group-hover:text-white/90 font-medium transition-colors duration-300">Technologies</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="space-y-4">
              <TraitCard
                delay={0.3}
                icon={
                  <svg className="w-7 h-7 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                title="Problem Solver"
                description="I love digging into complex challenges and finding elegant ways to solve them. The harder the problem, the more fun it is."
              />
              <TraitCard
                delay={0.4}
                icon={
                  <svg className="w-7 h-7 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Fast Learner"
                description="Tech moves fast, and so do I. Always exploring new frameworks, tools, and best practices to stay ahead of the curve."
              />
              <TraitCard
                delay={0.5}
                icon={
                  <svg className="w-7 h-7 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                title="Team Player"
                description="Great products are built by great teams. I thrive in collaborative environments where ideas flow freely."
              />
              <TraitCard
                delay={0.6}
                icon={
                  <svg className="w-7 h-7 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Detail-Oriented"
                description="The little things matter. From pixel-perfect UIs to clean, maintainable code—I sweat the details so you don't have to."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
