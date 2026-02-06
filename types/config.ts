/**
 * Site Configuration Type Definitions
 * 
 * Defines types for site-wide configuration, branding,
 * and feature toggles used throughout the application.
 */

import { Image } from './media';

/**
 * Color palette for site branding
 * 
 * Defines the core color scheme used throughout the portfolio.
 * Colors should be in hex format (e.g., "#FF5733").
 */
export interface ColorPalette {
  /** Primary brand color */
  primary: string;
  
  /** Secondary brand color */
  secondary: string;
  
  /** Accent color for highlights and CTAs */
  accent: string;
  
  /** Background color */
  background: string;
  
  /** Surface color (cards, panels) */
  surface: string;
  
  /** Primary text color */
  text: string;
  
  /** Secondary text color (muted) */
  textSecondary: string;
  
  /** Error color */
  error?: string;
  
  /** Success color */
  success?: string;
  
  /** Warning color */
  warning?: string;
}

/**
 * Navigation menu item configuration
 */
export interface NavigationItem {
  /** Display label */
  label: string;
  
  /** Link href (internal or external) */
  href: string;
  
  /** Whether this is an external link */
  isExternal?: boolean;
  
  /** Optional icon identifier */
  icon?: string;
  
  /** Whether to show this item in mobile menu */
  showInMobile?: boolean;
}

/**
 * SEO configuration
 */
export interface SEOConfig {
  /** Default meta title template */
  titleTemplate: string;
  
  /** Default meta description */
  defaultDescription: string;
  
  /** Default Open Graph image */
  defaultImage: Image;
  
  /** Twitter handle (without @) */
  twitterHandle?: string;
  
  /** Site verification codes */
  verification?: {
    google?: string;
    bing?: string;
  };
}

/**
 * Analytics configuration
 */
export interface AnalyticsConfig {
  /** Google Analytics measurement ID */
  googleAnalyticsId?: string;
  
  /** Plausible domain (if using Plausible) */
  plausibleDomain?: string;
  
  /** Fathom site ID (if using Fathom) */
  fathomSiteId?: string;
  
  /** Whether to enable analytics in development */
  enableInDev?: boolean;
}

/**
 * Contact configuration
 */
export interface ContactConfig {
  /** Primary contact email */
  email: string;
  
  /** Calendly URL for meeting scheduling */
  calendlyUrl?: string;
  
  /** reCAPTCHA site key (if enabled) */
  recaptchaSiteKey?: string;
  
  /** Email service configuration (for form submissions) */
  emailService?: {
    provider: 'sendgrid' | 'mailgun' | 'ses' | 'custom';
    fromEmail: string;
    fromName: string;
  };
}

/**
 * Feature flags for optional functionality
 */
export interface FeatureFlags {
  /** Enable blog functionality */
  blog: boolean;
  
  /** Enable contact form */
  contactForm: boolean;
  
  /** Enable analytics tracking */
  analytics: boolean;
  
  /** Enable newsletter subscription */
  newsletter: boolean;
  
  /** Enable dark mode toggle */
  darkMode: boolean;
  
  /** Enable search functionality */
  search: boolean;
}

/**
 * Complete site configuration
 * 
 * Central configuration object containing all site-wide settings,
 * branding, and feature toggles.
 */
export interface SiteConfig {
  // Basic Info
  /** Site name/title */
  siteName: string;
  
  /** Site description */
  siteDescription: string;
  
  /** Full site URL (e.g., "https://example.com") */
  siteUrl: string;
  
  /** Site language code (e.g., "en", "en-US") */
  language: string;
  
  // Branding
  /** Site logo image */
  logo: Image;
  
  /** Favicon image */
  favicon: Image;
  
  /** Brand color palette */
  brandColors: ColorPalette;
  
  // Navigation
  /** Main navigation menu items */
  navigation: NavigationItem[];
  
  // Features
  /** Feature flags */
  features: FeatureFlags;
  
  // SEO
  /** SEO configuration */
  seo: SEOConfig;
  
  // Analytics
  /** Analytics configuration */
  analytics: AnalyticsConfig;
  
  // Contact
  /** Contact configuration */
  contact: ContactConfig;
  
  // Social Media
  /** Social media share image */
  socialShareImage?: Image;
  
  // Performance
  /** Enable image optimization */
  imageOptimization: boolean;
  
  /** Enable lazy loading */
  lazyLoading: boolean;
  
  /** Maximum image quality (1-100) */
  imageQuality: number;
}
