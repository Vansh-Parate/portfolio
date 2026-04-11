import React, { useState } from 'react'
import { projects } from '@/data/projects'
import { ChevronRight } from 'lucide-react';

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
    <div className='space-y-1'>
      {projects.map((project) =>(
        <a 
          href={`${project.demoUrl}`}
          className='group cursor-pointer block'
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-neutral-900/30 transition-all duration-200">
            <div className='flex-1'>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-neutral-100 font-satoshi font-medium text-sm">{project.name}</span>
                <span className={`px-1.5 py-0.5 text-[10px] font-satoshi font-medium rounded border ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-0.5 transition-all duration-200" />
          </div>     
        </a>
      ))}  
    </div>
  )
}

export default Projects
