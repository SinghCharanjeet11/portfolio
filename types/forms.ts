/**
 * Form Data Type Definitions
 * 
 * Defines types for form inputs, validation, and submission handling
 * used throughout the portfolio, especially in the contact form.
 */

/**
 * Project type options for contact form
 */
export type ProjectType = 
  | 'web-development'
  | 'mobile-app'
  | 'design'
  | 'consulting'
  | 'other';

/**
 * Budget range options for project inquiries
 */
export type BudgetRange = 
  | 'under-5k'
  | '5k-10k'
  | '10k-25k'
  | '25k-50k'
  | 'over-50k'
  | 'not-sure';

/**
 * Timeline options for project inquiries
 */
export type ProjectTimeline = 
  | 'asap'
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | 'flexible';

/**
 * Contact form submission data
 * 
 * Contains all fields submitted through the contact form
 * with validation requirements.
 */
export interface ContactFormData {
  /** Full name (required) */
  name: string;
  
  /** Email address (required, validated) */
  email: string;
  
  /** Company or organization name (optional) */
  company?: string;
  
  /** Type of project or inquiry (required) */
  projectType: ProjectType;
  
  /** Budget range for the project (optional) */
  budget?: BudgetRange;
  
  /** Desired timeline for the project (optional) */
  timeline?: ProjectTimeline;
  
  /** Detailed message or project description (required) */
  message: string;
  
  /** Phone number (optional) */
  phone?: string;
  
  /** Honeypot field for spam prevention (should be empty) */
  honeypot?: string;
  
  /** reCAPTCHA token (if enabled) */
  recaptchaToken?: string;
}

/**
 * Form validation error structure
 */
export interface FormValidationError {
  /** Field name that has the error */
  field: keyof ContactFormData;
  
  /** Error message to display */
  message: string;
}

/**
 * Form submission status
 */
export type FormSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Form submission response
 */
export interface FormSubmissionResponse {
  /** Whether the submission was successful */
  success: boolean;
  
  /** Success or error message */
  message: string;
  
  /** Validation errors (if any) */
  errors?: FormValidationError[];
  
  /** Submission ID for tracking (if successful) */
  submissionId?: string;
}

/**
 * Newsletter subscription form data
 */
export interface NewsletterFormData {
  /** Email address (required, validated) */
  email: string;
  
  /** Optional name */
  name?: string;
  
  /** Honeypot field for spam prevention */
  honeypot?: string;
}
