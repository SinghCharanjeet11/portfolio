/**
 * Portfolio Project Type Definitions
 * 
 * Defines types for portfolio projects, case studies, and related metadata.
 * These types support the portfolio showcase and detailed case study pages.
 */

import { Image } from './media';
import { Testimonial } from './testimonial';

/**
 * Project category types for filtering and organization
 */
export type ProjectCategory = 
  | 'web-development'
  | 'mobile-app'
  | 'design'
  | 'consulting'
  | 'open-source'
  | 'other';

/**
 * Technology/tool used in a project
 */
export interface Technology {
  /** Technology name (e.g., "React", "TypeScript", "Node.js") */
  name: string;
  
  /** Optional icon URL or identifier */
  icon?: string;
  
  /** Category of technology (frontend, backend, design, etc.) */
  category?: 'frontend' | 'backend' | 'design' | 'devops' | 'database' | 'other';
}

/**
 * Measurable result or outcome from a project
 */
export interface ProjectResult {
  /** Metric name (e.g., "Performance Improvement", "User Growth") */
  metric: string;
  
  /** Metric value (e.g., "50%", "10,000 users", "2 seconds") */
  value: string;
  
  /** Optional detailed description of the result */
  description?: string;
}

/**
 * Case study image with type classification
 */
export interface CaseStudyImage extends Image {
  /** Type of image in the case study context */
  type: 'hero' | 'process' | 'result' | 'detail';
}

/**
 * Complete portfolio project with case study information
 * 
 * Represents a single portfolio item with all metadata needed for
 * display in the portfolio grid and detailed case study pages.
 */
export interface PortfolioProject {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug for routing */
  slug: string;
  
  /** Project title */
  title: string;
  
  /** Brief description for grid display */
  shortDescription: string;
  
  /** Detailed description for case study page */
  fullDescription: string;
  
  /** Project category for filtering */
  category: ProjectCategory;
  
  /** Technologies and tools used */
  technologies: Technology[];
  
  /** Client name (if applicable) */
  client?: string;
  
  /** Project completion or publication date */
  projectDate: Date;
  
  /** Project duration (e.g., "3 months", "6 weeks") */
  duration: string;
  
  /** Your role in the project */
  role: string;
  
  /** Team size (if applicable) */
  teamSize?: number;
  
  // Media
  /** Thumbnail image for grid display */
  thumbnailImage: Image;
  
  /** Hero image for case study page */
  heroImage: Image;
  
  /** Additional images for case study gallery */
  galleryImages: CaseStudyImage[];
  
  /** Optional video URL (YouTube, Vimeo, etc.) */
  videoUrl?: string;
  
  // Case Study Content
  /** Problem or challenge description */
  challenge: string;
  
  /** Approach taken to solve the problem */
  approach: string;
  
  /** Solution implementation details */
  solution: string;
  
  /** Measurable results and outcomes */
  results: ProjectResult[];
  
  /** Optional client testimonial for this project */
  testimonial?: Testimonial;
  
  // Links
  /** Live project URL */
  liveUrl?: string;
  
  /** GitHub repository URL */
  githubUrl?: string;
  
  /** Case study page URL (if external) */
  caseStudyUrl?: string;
  
  // SEO
  /** Custom meta title (defaults to project title) */
  metaTitle?: string;
  
  /** Custom meta description (defaults to short description) */
  metaDescription?: string;
  
  // Status
  /** Whether to feature this project prominently */
  featured: boolean;
  
  /** Whether the project is published and visible */
  published: boolean;
  
  /** Publication date */
  publishDate: Date;
}
