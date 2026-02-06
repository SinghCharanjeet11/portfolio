/**
 * Testimonial Type Definitions
 * 
 * Defines types for client testimonials and professional recommendations
 * used for social proof throughout the portfolio.
 */

/**
 * Client testimonial or professional recommendation
 * 
 * Represents feedback from clients, colleagues, or employers
 * displayed in the testimonials section or on case study pages.
 */
export interface Testimonial {
  /** Unique identifier */
  id: string;
  
  /** Testimonial text content */
  content: string;
  
  /** Name of the person giving the testimonial */
  author: string;
  
  /** Job title of the author */
  title: string;
  
  /** Company or organization name */
  company: string;
  
  /** Optional avatar/photo URL */
  avatar?: string;
  
  /** Optional rating (1-5 scale) */
  rating?: number;
  
  /** Type of project or engagement (optional) */
  projectType?: string;
  
  /** LinkedIn profile URL for verification (optional) */
  linkedInUrl?: string;
  
  /** Date the testimonial was given */
  date?: Date;
  
  /** Whether to feature this testimonial prominently */
  featured?: boolean;
}
