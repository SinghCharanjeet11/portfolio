/**
 * Skills and Expertise Type Definitions
 * 
 * Defines types for skills, proficiency levels, and categorization
 * used in the skills showcase section.
 */

/**
 * Skill category types for organization
 */
export type SkillCategory = 'technical' | 'design' | 'soft' | 'tools';

/**
 * Display mode options for skills visualization
 */
export type SkillsDisplayMode = 'grid' | 'list' | 'chart';

/**
 * Individual skill with proficiency information
 * 
 * Represents a single skill or competency with metadata
 * for display in the skills section.
 */
export interface Skill {
  /** Skill name (e.g., "TypeScript", "UI Design", "Leadership") */
  name: string;
  
  /** Category for grouping and filtering */
  category: SkillCategory;
  
  /** Proficiency level on a 1-5 scale (1=beginner, 5=expert) */
  proficiency: number;
  
  /** Optional icon URL or identifier */
  icon?: string;
  
  /** Optional detailed description or context */
  description?: string;
  
  /** Years of experience with this skill (optional) */
  yearsOfExperience?: number;
  
  /** Whether this is a primary/featured skill */
  isPrimary?: boolean;
}

/**
 * Certification or credential information
 */
export interface Certification {
  /** Certification name */
  name: string;
  
  /** Issuing organization */
  issuer: string;
  
  /** Date obtained */
  dateObtained: Date;
  
  /** Expiration date (if applicable) */
  expirationDate?: Date;
  
  /** Credential ID or verification URL */
  credentialId?: string;
  
  /** URL to credential badge or certificate */
  credentialUrl?: string;
}

/**
 * Award or recognition information
 */
export interface Award {
  /** Award title */
  title: string;
  
  /** Awarding organization or event */
  organization: string;
  
  /** Date received */
  date: Date;
  
  /** Optional description or context */
  description?: string;
  
  /** Optional URL to award details */
  url?: string;
}
