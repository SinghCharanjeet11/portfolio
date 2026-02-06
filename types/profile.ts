/**
 * Personal Profile Type Definitions
 * 
 * Defines types for personal information, professional details,
 * and social media links used in the about section.
 */

import { Image } from './media';

/**
 * Supported social media platforms
 */
export type SocialPlatform = 
  | 'linkedin'
  | 'github'
  | 'twitter'
  | 'dribbble'
  | 'behance'
  | 'instagram'
  | 'youtube'
  | 'medium'
  | 'dev'
  | 'stackoverflow';

/**
 * Social media link with platform information
 */
export interface SocialLink {
  /** Social media platform identifier */
  platform: SocialPlatform;
  
  /** Full URL to the profile */
  url: string;
  
  /** Username or handle on the platform */
  username: string;
}

/**
 * Availability status for work opportunities
 */
export type AvailabilityStatus = 'available' | 'busy' | 'unavailable';

/**
 * Personal profile information
 * 
 * Contains all personal and professional information displayed
 * in the hero section, about section, and throughout the site.
 */
export interface PersonalProfile {
  // Basic Info
  /** Full name */
  name: string;
  
  /** Professional title or role */
  title: string;
  
  /** Brief tagline or value proposition */
  tagline: string;
  
  /** Detailed biography or about text */
  bio: string;
  
  /** Location (city, country, or "Remote") */
  location: string;
  
  // Contact
  /** Primary email address */
  email: string;
  
  /** Phone number (optional) */
  phone?: string;
  
  /** Personal website URL (if different from portfolio) */
  website?: string;
  
  // Social Media
  /** Array of social media profile links */
  socialLinks: SocialLink[];
  
  // Professional
  /** URL to downloadable resume/CV PDF */
  resumeUrl: string;
  
  /** Current availability status */
  availability: AvailabilityStatus;
  
  /** Hourly rate or rate range (optional) */
  hourlyRate?: string;
  
  // Media
  /** Profile photo/avatar */
  profileImage: Image;
  
  /** Optional hero/background image */
  heroImage?: Image;
  
  // SEO
  /** Meta description for the site */
  metaDescription: string;
}
