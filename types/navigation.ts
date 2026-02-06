/**
 * Navigation Type Definitions
 * 
 * Types for the responsive navigation component with accessibility features.
 */

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  currentSection: string;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  items: NavigationItem[];
  onNavigate?: (href: string) => void;
  onMobileMenuToggle?: () => void;
}

export interface NavigationState {
  currentSection: string;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}
