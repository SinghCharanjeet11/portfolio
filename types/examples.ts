/**
 * Type Usage Examples
 * 
 * This file demonstrates how to use the type definitions in the application.
 * These examples can be used as reference when implementing features.
 */

import {
  PortfolioProject,
  PersonalProfile,
  Skill,
  ContactFormData,
  Testimonial,
  SiteConfig,
  Image,
  ApiResponse,
} from './index';

/**
 * Example: Creating a portfolio project
 */
export const exampleProject: PortfolioProject = {
  id: 'ecommerce-platform',
  slug: 'ecommerce-platform',
  title: 'E-Commerce Platform',
  shortDescription: 'A modern e-commerce platform built with Next.js and TypeScript',
  fullDescription: 'A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
  category: 'web-development',
  technologies: [
    { name: 'Next.js', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'database' },
  ],
  projectDate: new Date('2024-01-15'),
  duration: '4 months',
  role: 'Lead Full Stack Developer',
  thumbnailImage: {
    src: '/images/projects/ecommerce-thumb.jpg',
    alt: 'E-Commerce Platform Screenshot',
    width: 800,
    height: 600,
    format: 'webp',
    blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...',
  },
  heroImage: {
    src: '/images/projects/ecommerce-hero.jpg',
    alt: 'E-Commerce Platform Hero Image',
    width: 1920,
    height: 1080,
    format: 'webp',
  },
  galleryImages: [],
  challenge: 'The client needed a scalable e-commerce solution that could handle high traffic during peak sales periods.',
  approach: 'We implemented a microservices architecture with Next.js for the frontend and Node.js for the backend services.',
  solution: 'The platform successfully handles 10,000+ concurrent users with sub-second page load times.',
  results: [
    { metric: 'Performance', value: '95+ Lighthouse Score', description: 'Excellent performance across all metrics' },
    { metric: 'Conversion Rate', value: '+35%', description: 'Increased conversion rate compared to previous platform' },
    { metric: 'Page Load Time', value: '<1s', description: 'Average page load time under 1 second' },
  ],
  liveUrl: 'https://example-ecommerce.com',
  githubUrl: 'https://github.com/username/ecommerce-platform',
  featured: true,
  published: true,
  publishDate: new Date('2024-02-01'),
};

/**
 * Example: Creating a personal profile
 */
export const exampleProfile: PersonalProfile = {
  name: 'Alex Johnson',
  title: 'Full Stack Developer & UI/UX Designer',
  tagline: 'Building beautiful, performant web experiences that users love',
  bio: 'I\'m a passionate full stack developer with 8+ years of experience creating modern web applications. I specialize in React, TypeScript, and Node.js, with a strong focus on performance optimization and user experience.',
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  socialLinks: [
    { platform: 'github', url: 'https://github.com/alexjohnson', username: 'alexjohnson' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/alexjohnson', username: 'alexjohnson' },
    { platform: 'twitter', url: 'https://twitter.com/alexjohnson', username: 'alexjohnson' },
  ],
  resumeUrl: '/downloads/alex-johnson-resume.pdf',
  availability: 'available',
  hourlyRate: '$100-150/hour',
  profileImage: {
    src: '/images/profile/alex-johnson.jpg',
    alt: 'Alex Johnson Profile Photo',
    width: 500,
    height: 500,
    format: 'webp',
  },
  metaDescription: 'Full Stack Developer specializing in React, TypeScript, and Node.js. Available for freelance projects and consulting.',
};

/**
 * Example: Creating skills
 */
export const exampleSkills: Skill[] = [
  {
    name: 'TypeScript',
    category: 'technical',
    proficiency: 5,
    icon: '/icons/typescript.svg',
    description: 'Expert in TypeScript with 5+ years of production experience',
    yearsOfExperience: 5,
    isPrimary: true,
  },
  {
    name: 'React',
    category: 'technical',
    proficiency: 5,
    icon: '/icons/react.svg',
    description: 'Advanced React development including hooks, context, and performance optimization',
    yearsOfExperience: 6,
    isPrimary: true,
  },
  {
    name: 'Node.js',
    category: 'technical',
    proficiency: 4,
    icon: '/icons/nodejs.svg',
    description: 'Backend development with Express, NestJS, and serverless architectures',
    yearsOfExperience: 5,
    isPrimary: true,
  },
  {
    name: 'UI/UX Design',
    category: 'design',
    proficiency: 4,
    icon: '/icons/design.svg',
    description: 'User-centered design with Figma and Adobe XD',
    yearsOfExperience: 4,
    isPrimary: false,
  },
];

/**
 * Example: Creating a testimonial
 */
export const exampleTestimonial: Testimonial = {
  id: 'testimonial-1',
  content: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding.',
  author: 'Sarah Mitchell',
  title: 'CEO',
  company: 'TechStart Inc',
  avatar: '/images/testimonials/sarah-mitchell.jpg',
  rating: 5,
  projectType: 'web-development',
  linkedInUrl: 'https://linkedin.com/in/sarahmitchell',
  date: new Date('2024-02-15'),
  featured: true,
};

/**
 * Example: Creating contact form data
 */
export const exampleContactForm: ContactFormData = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  company: 'Acme Corporation',
  projectType: 'web-development',
  budget: '25k-50k',
  timeline: '3-6-months',
  message: 'We\'re looking to build a new web application for our business. We\'d love to discuss the project with you and see if you\'re available.',
  phone: '+1 (555) 987-6543',
};

/**
 * Example: Creating an image with optimization
 */
export const exampleImage: Image = {
  src: '/images/hero-background.jpg',
  alt: 'Modern office workspace with laptop',
  width: 1920,
  height: 1080,
  srcSet: '/images/hero-background-640.webp 640w, /images/hero-background-1280.webp 1280w, /images/hero-background-1920.webp 1920w',
  sizes: '(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1920px',
  blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q==',
  format: 'webp',
  caption: 'A modern workspace setup',
  credit: 'Photo by Photographer Name',
};

/**
 * Example: Creating an API response
 */
export const exampleApiResponse: ApiResponse<PortfolioProject[]> = {
  success: true,
  data: [exampleProject],
  meta: {
    timestamp: new Date().toISOString(),
    requestId: 'req-123456',
    version: '1.0',
  },
};

/**
 * Example: Creating site configuration
 */
export const exampleSiteConfig: Partial<SiteConfig> = {
  siteName: 'Alex Johnson Portfolio',
  siteDescription: 'Full Stack Developer & UI/UX Designer specializing in modern web applications',
  siteUrl: 'https://alexjohnson.dev',
  language: 'en-US',
  brandColors: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    accent: '#F59E0B',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#111827',
    textSecondary: '#6B7280',
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
  },
  features: {
    blog: true,
    contactForm: true,
    analytics: true,
    newsletter: false,
    darkMode: true,
    search: false,
  },
  imageOptimization: true,
  lazyLoading: true,
  imageQuality: 85,
};

/**
 * Example: Type-safe function for fetching projects
 */
export async function fetchProjects(): Promise<ApiResponse<PortfolioProject[]>> {
  try {
    const response = await fetch('/api/projects');
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch projects',
      errors: [
        {
          code: 'FETCH_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      ],
    };
  }
}

/**
 * Example: Type-safe function for submitting contact form
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse<{ submissionId: string }>> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to submit form',
      errors: [
        {
          code: 'SUBMISSION_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      ],
    };
  }
}
