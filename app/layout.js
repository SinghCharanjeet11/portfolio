import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata = {
  title: 'Charanjeet Singh - Full-Stack Developer | React, Next.js, Node.js',
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and PostgreSQL. Building scalable, high-performance web applications with clean UX. Open to internships and full-time roles.',
  keywords: ['Full-Stack Developer', 'React Developer', 'Next.js', 'Node.js', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Charanjeet Singh'],
  authors: [{ name: 'Charanjeet Singh' }],
  creator: 'Charanjeet Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charanjeetsingh.dev',
    title: 'Charanjeet Singh - Full-Stack Developer',
    description: 'Full-stack developer building scalable web applications with React, Next.js, and Node.js',
    siteName: 'Charanjeet Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charanjeet Singh - Full-Stack Developer',
    description: 'Full-stack developer building scalable web applications with React, Next.js, and Node.js',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#0b0b0b] text-white font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
