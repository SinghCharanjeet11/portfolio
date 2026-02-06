'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [typedText, setTypedText] = useState('')

  const roles = [
    'Full-Stack Developer',
    'Frontend Architect',
    'Backend Engineer',
    'Problem Solver'
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const deletingDelay = 2000
    const nextRoleDelay = 500

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), deletingDelay)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const codeLines = [
    { key: 'name', value: '"Charanjeet Singh"', color: 'text-green-400' },
    { key: 'role', value: '"Full-Stack Developer"', color: 'text-green-400' },
    { key: 'education', value: '"B.Tech in Computer Science"', color: 'text-green-400' },
    { key: 'focus', value: '["Frontend Architecture", "API Design", "Databases"]', color: 'text-yellow-400' },
    { key: 'tech', value: '["React", "Next.js", "Node.js", "Java", "PostgreSQL"]', color: 'text-yellow-400' },
    { key: 'projects', value: '"15+ real-world projects"', color: 'text-green-400' },
    { key: 'status', value: '"Open to internships & full-time roles"', color: 'text-green-400' }
  ]

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#7C7CFF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-[#F5F7FF]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Charanjeet Singh
            </motion.h1>

            <motion.div
              className="mb-6 h-12 lg:h-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-2xl lg:text-3xl font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C7CFF] to-[#8B5CF6]">
                  {typedText}
                </span>
                <span className={`inline-block w-1 h-8 lg:h-10 bg-[#7C7CFF] ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl text-[#A1A9D6] mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-stack developer building scalable, high-performance web applications with clean UX
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-[#7C7CFF] to-[#8B5CF6] text-white font-semibold rounded-lg transition-all"
                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 0 28px rgba(124, 124, 255, 0.55)' }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 text-[#A1A9D6] font-semibold rounded-lg border border-[#1F2A44] hover:border-[#7C7CFF] hover:text-[#F5F7FF] transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="https://github.com/SinghCharanjeet11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A9D6] hover:text-[#7C7CFF] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/charanjeet-singh-12ba2732a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A9D6] hover:text-[#7C7CFF] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="relative bg-[#11162A] rounded-2xl border border-[#1F2A44] overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0D18] border-b border-[#1F2A44]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-[#A1A9D6] font-mono">developer.json</span>
                  </div>
                </div>

                <div className="p-8 font-mono text-sm">
                  <div className="text-gray-500 mb-2">{'{'}</div>
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={line.key}
                      className="ml-4 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <span className="text-[#7C7CFF]">&quot;{line.key}&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className={line.color}>{line.value}</span>
                      {index < codeLines.length - 1 && <span className="text-gray-500">,</span>}
                    </motion.div>
                  ))}
                  <div className="text-gray-500 flex items-center">
                    {'}'}
                    <span className={`ml-1 inline-block w-2 h-4 bg-[#7C7CFF] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#11162A] border border-[#7C7CFF]/50 rounded-xl px-4 py-2 shadow-lg shadow-[#7C7CFF]/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7C7CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-[#F5F7FF] font-semibold">15+ Projects</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 bg-[#11162A] border border-[#7C7CFF]/50 rounded-xl px-4 py-2 shadow-lg shadow-[#7C7CFF]/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7C7CFF] animate-pulse"></div>
                  <span className="text-sm text-[#F5F7FF] font-semibold">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[#A1A9D6] text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-[#7C7CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
