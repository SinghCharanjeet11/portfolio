'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiJavascript
} from 'react-icons/si'
import { TbApi, TbCode } from 'react-icons/tb'

const techIcons = {
  'React': <SiReact className="w-5 h-5" />,
  'Next.js': <SiNextdotjs className="w-5 h-5" />,
  'TypeScript': <SiTypescript className="w-5 h-5" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5" />,
  'Framer Motion': <SiFramer className="w-5 h-5" />,
  'Node.js': <SiNodedotjs className="w-5 h-5" />,
  'Express.js': <SiExpress className="w-5 h-5" />,
  'PostgreSQL': <SiPostgresql className="w-5 h-5" />,
  'MongoDB': <SiMongodb className="w-5 h-5" />,
  'REST APIs': <TbApi className="w-5 h-5" />,
  'Git': <SiGit className="w-5 h-5" />,
  'GitHub': <SiGithub className="w-5 h-5" />,
  'Vercel': <SiVercel className="w-5 h-5" />,
  'Postman': <SiJavascript className="w-5 h-5" />,
  'VS Code': <TbCode className="w-5 h-5" />
}

const techStack = [
  {
    category: 'Frontend Engineering',
    subtitle: 'Architecting performant, accessible user interfaces for real-world applications',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    primary: [
      { name: 'React', detail: 'Component architecture in 10+ projects' },
      { name: 'Next.js', detail: 'SSR & API routes for production apps' },
      { name: 'TypeScript', detail: 'Type-safe development' }
    ],
    supporting: [
      { name: 'Tailwind CSS', detail: 'Rapid UI development' },
      { name: 'Framer Motion', detail: 'Production animations' }
    ]
  },
  {
    category: 'Backend Engineering',
    subtitle: 'Designing scalable APIs and data-driven systems',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    primary: [
      { name: 'Node.js', detail: 'Primary backend runtime' },
      { name: 'Express.js', detail: 'Production REST APIs' },
      { name: 'PostgreSQL', detail: 'Relational data modeling' },
      { name: 'MongoDB', detail: 'Document-based storage' }
    ],
    supporting: [
      { name: 'REST APIs', detail: 'API design & integration' }
    ]
  },
  {
    category: 'Development & Deployment',
    subtitle: 'Version control, testing, and seamless production deployments',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    primary: [
      { name: 'Git', detail: 'Version control & branching' },
      { name: 'GitHub', detail: 'Code collaboration' },
      { name: 'Vercel', detail: 'CI/CD deployments' }
    ],
    supporting: [
      { name: 'Postman', detail: 'API testing' },
      { name: 'VS Code', detail: 'Primary development environment' }
    ]
  }
]

function TechCard({ category, subtitle, icon, primary, supporting, index }) {
  const [hoveredTech, setHoveredTech] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-[#11162A] rounded-xl p-8 border border-[#1F2A44] hover:border-[#7C7CFF] transition-all duration-300">
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#1F2A44] flex items-center justify-center text-[#A1A9D6]">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#F5F7FF] mb-2">{category}</h3>
              <p className="text-sm text-[#A1A9D6] leading-relaxed">{subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {primary.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="relative"
                >
                  <div className="px-5 py-2.5 bg-[#1F2A44] text-[#F5F7FF] text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-[#7C7CFF] hover:to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(124,124,255,0.4)] transition-all cursor-default flex items-center gap-2">
                    {techIcons[tech.name] && (
                      <span className="text-white">{techIcons[tech.name]}</span>
                    )}
                    {tech.name}
                  </div>

                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[#0A0D18] border border-[#1F2A44] rounded-lg text-xs text-[#A1A9D6] whitespace-nowrap z-20 shadow-xl"
                    >
                      {tech.detail}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0A0D18] border-l border-t border-[#1F2A44] rotate-45"></div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {supporting && supporting.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {supporting.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + (primary.length + techIndex) * 0.05 }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="relative"
                  >
                    <div className="px-5 py-2.5 bg-[#1F2A44] text-[#F5F7FF] text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-[#7C7CFF] hover:to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(124,124,255,0.4)] transition-all cursor-default flex items-center gap-2">
                      {techIcons[tech.name] && (
                        <span className="text-white">{techIcons[tech.name]}</span>
                      )}
                      {tech.name}
                    </div>

                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[#0A0D18] border border-[#1F2A44] rounded-lg text-xs text-[#A1A9D6] whitespace-nowrap z-20 shadow-xl"
                      >
                        {tech.detail}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0A0D18] border-l border-t border-[#1F2A44] rotate-45"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F7FF] mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-[#A1A9D6] max-w-3xl mx-auto">
            Tools and technologies I use to build scalable, production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {techStack.map((stack, index) => (
            <TechCard
              key={stack.category}
              category={stack.category}
              subtitle={stack.subtitle}
              icon={stack.icon}
              primary={stack.primary}
              supporting={stack.supporting}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-[#A1A9D6] italic">
            Every tool listed here has been used in real-world projects, not just tutorials.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
