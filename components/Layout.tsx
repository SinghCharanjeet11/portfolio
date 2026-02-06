import React from 'react';
import Navigation from './Navigation';

export interface LayoutProps {
  children: React.ReactNode;
  navigationItems?: Array<{ label: string; href: string }>;
}

export const Layout: React.FC<LayoutProps> = ({ children, navigationItems = [] }) => {
  return (
    <div className="min-h-screen">
      {navigationItems.length > 0 && <Navigation items={navigationItems} />}
      <main className={navigationItems.length > 0 ? 'pt-16' : ''}>{children}</main>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
};
