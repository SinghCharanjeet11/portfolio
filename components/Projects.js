'use client'

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    title: 'TradeX',
    image: '/projects/tradex.png',
    description: 'Full-stack trading platform designed to provide real-time market insights across crypto, stocks, forex, and commodities with clean UI, responsive dashboards, and secure authentication',
    impact: 'Real-time market data visualization',
    role: 'Full-Stack Developer',
    problem: 'Built a responsive trading dashboard with live data feeds and secure authentication',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
    category: 'Full-Stack',
    github: 'https://github.com/SinghCharanjeet11/TradeX-platform',
    live: 'https://tradex-platform.onrender.com',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'TradeoffAI',
    image: '/projects/tradeoffai.png',
    description: 'Developer-focused application that helps compare technologies by visualizing trade-offs between different options with structured decision-making and clean frontend presentation',
    impact: 'Simplified tech decision-making',
    role: 'Frontend Developer',
    problem: 'Created an intuitive interface for comparing complex technology trade-offs',
    tech: ['Next.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    category: 'Frontend',
    github: 'https://github.com/SinghCharanjeet11/TradeoffAI',
    live: 'https://github.com/SinghCharanjeet11/TradeoffAI',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Portfolio Website',
    image: '/projects/portfolio.jpeg',
    description: 'Minimal, modern portfolio website built to showcase projects, skills, and experience with smooth animations and strong focus on layout, spacing, and responsiveness',
    impact: 'Premium personal brand presence',
    role: 'Designer & Developer',
    problem: 'Designed and built a performant portfolio with attention to detail and user experience',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/SinghCharanjeet11',
    live: 'https://github.com/SinghCharanjeet11',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  }
]

function ProjectCard({ project, index, isInView }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 200 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 200 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="relative rounded-3xl overflow-hidden transition-all duration-500 bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.3)]">
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="block">
          <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden cursor-pointer`}>
            {project.image ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0A0D18] p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11162A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,42,68,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,42,68,0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-40 h-40 rounded-3xl flex items-center justify-center border border-[#1F2A44] bg-[#11162A]/80 backdrop-blur-sm"
                    animate={isHovered ? { rotate: 5, scale: 1.05 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg className="w-20 h-20 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>
                </motion.div>
              </>
            )}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <span className="px-3 py-1.5 rounded-full text-xs text-[#A1A9D6] font-semibold border border-[#1F2A44] bg-[#11162A]/80 backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>
        </a>
        <div className="p-8 relative">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-space text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-base text-gray-400 mb-6 leading-relaxed line-clamp-2">{project.description}</p>
              </motion.div>
            ) : (
              <motion.div
                key="hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 mb-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#11162A] border border-[#1F2A44] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#A1A9D6] font-semibold uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-sm text-white font-medium">{project.impact}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#11162A] border border-[#1F2A44] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#A1A9D6] font-semibold uppercase tracking-wider mb-1">Role</p>
                    <p className="text-sm text-white font-medium">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#11162A] border border-[#1F2A44] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#A1A9D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#A1A9D6] font-semibold uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                className="text-xs text-[#A1A9D6] px-3 py-1.5 rounded-lg cursor-pointer border border-[#1F2A44] bg-[#11162A] hover:text-white hover:border-[#7C7CFF]/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs text-[#A1A9D6] px-3 py-1.5 rounded-lg border border-[#1F2A44] bg-[#11162A] font-semibold">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm text-[#A1A9D6] hover:text-white transition-colors font-semibold"
              whileHover={{ x: 2 }}
            >
              <span className="relative">
                GitHub
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7C7CFF] to-[#8B5CF6]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm text-[#A1A9D6] hover:text-white transition-colors font-semibold"
              whileHover={{ x: 2 }}
            >
              <span className="relative">
                Live Demo
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7C7CFF] to-[#8B5CF6]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </motion.a>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#7C7CFF]/5 via-transparent to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          initial={false}
        />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-40 px-6 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7C7CFF]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <span className="text-sm font-semibold text-[#A1A9D6] uppercase tracking-wider">Featured Work</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-space text-5xl md:text-6xl font-bold mb-20 text-white"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
