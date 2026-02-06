import React, { useState } from 'react';
import { PortfolioProject } from '../types/portfolio';

export interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={project.thumbnailImage.src}
                alt={project.thumbnailImage.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech.name}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
