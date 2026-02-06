/**
 * Blog Post Type Definitions
 * 
 * Defines types for blog functionality (optional feature).
 * Supports article management, categorization, and SEO optimization.
 */

import { Image } from './media';

/**
 * Blog post with full content and metadata
 * 
 * Represents a single blog article with all information needed
 * for display in blog listings and individual post pages.
 */
export interface BlogPost {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug for routing */
  slug: string;
  
  /** Post title */
  title: string;
  
  /** Brief excerpt for listings */
  excerpt: string;
  
  /** Full post content (Markdown or HTML) */
  content: string;
  
  /** Author name */
  author: string;
  
  /** Publication date */
  publishDate: Date;
  
  /** Last modified date */
  lastModified: Date;
  
  // Categorization
  /** Post categories for organization */
  categories: string[];
  
  /** Tags for detailed classification */
  tags: string[];
  
  // Media
  /** Featured image for the post */
  featuredImage?: Image;
  
  // SEO
  /** Custom meta title (defaults to post title) */
  metaTitle?: string;
  
  /** Custom meta description (defaults to excerpt) */
  metaDescription?: string;
  
  // Engagement
  /** Estimated reading time in minutes */
  readingTime: number;
  
  /** Whether the post is published and visible */
  published: boolean;
  
  /** Whether to feature this post prominently */
  featured: boolean;
  
  /** View count (optional, for analytics) */
  viewCount?: number;
}

/**
 * Blog category with metadata
 */
export interface BlogCategory {
  /** Category identifier */
  id: string;
  
  /** Category name */
  name: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Optional description */
  description?: string;
  
  /** Number of posts in this category */
  postCount?: number;
}

/**
 * Blog tag with metadata
 */
export interface BlogTag {
  /** Tag identifier */
  id: string;
  
  /** Tag name */
  name: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Number of posts with this tag */
  postCount?: number;
}

/**
 * Blog post summary for listings
 * 
 * Lightweight version of BlogPost for use in blog listing pages
 * to improve performance.
 */
export interface BlogPostSummary {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Post title */
  title: string;
  
  /** Brief excerpt */
  excerpt: string;
  
  /** Author name */
  author: string;
  
  /** Publication date */
  publishDate: Date;
  
  /** Categories */
  categories: string[];
  
  /** Tags */
  tags: string[];
  
  /** Featured image */
  featuredImage?: Image;
  
  /** Reading time in minutes */
  readingTime: number;
  
  /** Whether this is a featured post */
  featured: boolean;
}
