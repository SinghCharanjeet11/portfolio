'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [formStatus, setFormStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear errors when user starts typing
        if (formStatus.type === 'error') {
            setFormStatus({ type: '', message: '' })
        }
    }

    const validateForm = () => {
        if (!formData.name.trim()) {
            setFormStatus({ type: 'error', message: 'Please enter your name' })
            return false
        }
        if (!formData.email.trim()) {
            setFormStatus({ type: 'error', message: 'Please enter your email' })
            return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setFormStatus({ type: 'error', message: 'Please enter a valid email address' })
            return false
        }
        if (!formData.message.trim()) {
            setFormStatus({ type: 'error', message: 'Please enter a message' })
            return false
        }
        if (formData.message.trim().length < 10) {
            setFormStatus({ type: 'error', message: 'Message must be at least 10 characters' })
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        setFormStatus({ type: '', message: '' })

        try {
            // Send email using EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )

            setFormStatus({
                type: 'success',
                message: 'Thanks for reaching out! I\'ll get back to you soon.'
            })

            // Reset form
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            setFormStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or email me directly at charansingh9450v@gmail.com'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section ref={ref} className="py-40 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C7CFF]/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-space text-5xl md:text-6xl font-bold mb-6 text-white">
                        Let's work together
                    </h2>
                    <p className="text-xl text-[#A1A9D6] max-w-2xl mx-auto">
                        Have a project in mind? Drop me a message and let's chat
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-3">Get in touch</h3>
                            <p className="text-[#A1A9D6] leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        <motion.a
                            href="mailto:charansingh9450v@gmail.com"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.25)] transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#1F2A44] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#7C7CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-[#A1A9D6] mb-1">Email</div>
                                <div className="text-white font-medium">charansingh9450v@gmail.com</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/SinghCharanjeet11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.25)] transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#1F2A44] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#7C7CFF]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-[#A1A9D6] mb-1">GitHub</div>
                                <div className="text-white font-medium">@SinghCharanjeet11</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/charanjeet-singh-12ba2732a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-[#11162A] border border-[#1F2A44] hover:border-[#7C7CFF]/50 hover:shadow-[0_0_28px_rgba(124,124,255,0.25)] transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#1F2A44] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#7C7CFF]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-[#A1A9D6] mb-1">LinkedIn</div>
                                <div className="text-white font-medium">Charanjeet Singh</div>
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#A1A9D6] mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-[#11162A] border border-[#1F2A44] text-white placeholder-[#A1A9D6]/50 focus:outline-none focus:border-[#7C7CFF] transition-colors"
                                    placeholder="Your name"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#A1A9D6] mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-[#11162A] border border-[#1F2A44] text-white placeholder-[#A1A9D6]/50 focus:outline-none focus:border-[#7C7CFF] transition-colors"
                                    placeholder="your.email@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#A1A9D6] mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-[#11162A] border border-[#1F2A44] text-white placeholder-[#A1A9D6]/50 focus:outline-none focus:border-[#7C7CFF] transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Status Message */}
                            {formStatus.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg border ${formStatus.type === 'success'
                                            ? 'bg-green-500/10 border-green-500/50 text-green-400'
                                            : 'bg-red-500/10 border-red-500/50 text-red-400'
                                        }`}
                                >
                                    {formStatus.message}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-8 py-4 font-semibold rounded-lg transition-all ${isSubmitting
                                        ? 'bg-[#1F2A44] text-[#A1A9D6] cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#7C7CFF] to-[#8B5CF6] text-white hover:shadow-[0_0_28px_rgba(124,124,255,0.4)]'
                                    }`}
                                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
