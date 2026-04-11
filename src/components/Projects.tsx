import React, { useState } from 'react'
import { projects } from '@/data/projects'
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Frontend':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
      case 'Backend':
        return 'bg-green-500/10 text-green-300 border-green-500/20';
      case 'Fullstack':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      default:
        return 'bg-neutral-500/10 text-neutral-300 border-neutral-500/20';
    }
  };

  return (
    <div className='mt-12 space-y-6'>
      <h2 className="text-xl font-satoshi font-semibold text-neutral-100">Selected Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {projects.map((project) =>(
          <div 
            key={project.id}
            className='group relative flex flex-col bg-neutral-900/40 border border-neutral-800/50 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-all duration-300'
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image Placeholder */}
            <div className='relative h-48 w-full overflow-hidden bg-neutral-800/50'>
              <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
              {/* Note: User will replace these with real images. */}
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to hide broken image icon until user adds the images
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>

            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-neutral-100 font-satoshi font-medium text-lg leading-tight group-hover:text-neutral-200 transition-colors">
                  {project.name}
                </h3>
                <span className={`shrink-0 ml-3 px-2 py-0.5 text-[10px] font-satoshi font-medium rounded border ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
              </div>
              
              <p className="text-neutral-400 text-sm font-satoshi leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t border-neutral-800/50 flex items-center justify-between">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-satoshi font-medium text-neutral-300 hover:text-white bg-neutral-800/50 hover:bg-neutral-700/50 px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  Live Demo 
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}  
      </div>
    </div>
  )
}

export default Projects
