/**
 * Media and Image Type Definitions
 * 
 * Defines types for image optimization and media handling throughout the portfolio.
 * Supports responsive images, modern formats, and progressive loading.
 */

/**
 * Image format types supported by the optimization pipeline
 */
export type ImageFormat = 'webp' | 'avif' | 'jpg' | 'png';

/**
 * Image interface with optimization support
 * 
 * Provides comprehensive image data including responsive variants,
 * optimization metadata, and accessibility information.
 */
export interface Image {
  /** Source URL of the image */
  src: string;
  
  /** Alternative text for accessibility (required) */
  alt: string;
  
  /** Original width in pixels */
  width: number;
  
  /** Original height in pixels */
  height: number;
  
  /** Responsive image source set for different screen sizes */
  srcSet?: string;
  
  /** Sizes attribute for responsive images */
  sizes?: string;
  
  /** Base64 encoded blur placeholder for progressive loading */
  blurDataUrl?: string;
  
  /** Optimized image format */
  format: ImageFormat;
  
  /** Optional caption text displayed below the image */
  caption?: string;
  
  /** Optional credit/attribution for the image */
  credit?: string;
}
