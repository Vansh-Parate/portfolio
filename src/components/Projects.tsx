"use client"
import React, { useState } from 'react'
import { projects } from '@/data/projects'
import { ExternalLink, ArrowUpRight, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './Badge';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, 
  SiTailwindcss, SiJavascript, SiMongodb, SiPrisma, SiVercel,
  SiExpress, SiPython, SiExpo, SiJsonwebtokens
} from 'react-icons/si';

// Map technology names to icons and colors
const getTechIconAndColor = (techName: string) => {
  const t = techName.toLowerCase();
  if (t.includes('react')) return { icon: SiReact, color: 'text-blue-400' };
  if (t.includes('next')) return { icon: SiNextdotjs, color: 'text-neutral-300' };
  if (t.includes('typescript')) return { icon: SiTypescript, color: 'text-blue-500' };
  if (t.includes('javascript')) return { icon: SiJavascript, color: 'text-yellow-400' };
  if (t.includes('node')) return { icon: SiNodedotjs, color: 'text-green-500' };
  if (t.includes('postgres') || t.includes('sql')) return { icon: SiPostgresql, color: 'text-blue-600' };
  if (t.includes('tailwind')) return { icon: SiTailwindcss, color: 'text-cyan-400' };
  if (t.includes('mongo')) return { icon: SiMongodb, color: 'text-green-500' };
  if (t.includes('prisma')) return { icon: SiPrisma, color: 'text-neutral-300' };
  if (t.includes('vercel')) return { icon: SiVercel, color: 'text-neutral-100' };
  if (t.includes('express')) return { icon: SiExpress, color: 'text-neutral-400' };
  if (t.includes('python')) return { icon: SiPython, color: 'text-blue-400' };
  if (t.includes('expo')) return { icon: SiExpo, color: 'text-neutral-200' };
  if (t.includes('jwt') || t.includes('token')) return { icon: SiJsonwebtokens, color: 'text-pink-500' };
  
  return { icon: Code, color: 'text-neutral-400' };
}

interface ProjectsProps {
  showAll?: boolean;
}

const Projects = ({ showAll = false }: ProjectsProps) => {

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const selectedProjectIds = ["rehabos", "Cultiva", "nexus", "acadly-mentor"];
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(p => selectedProjectIds.includes(p.id));

  return (
    <div className='mt-12 space-y-8'>
      {!showAll && (
        <h2 className="text-xl font-satoshi font-semibold text-neutral-100">Selected Projects</h2>
      )}
      
      <div className={`grid ${showAll ? 'grid-cols-1 gap-12 sm:gap-16' : 'grid-cols-1 sm:grid-cols-2 gap-6'}`}>
        {displayedProjects.map((project) =>(
          <div 
            key={project.id}
            className={`group relative flex flex-col bg-neutral-900/20 border border-neutral-800/50 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden ${
              showAll ? 'rounded-3xl' : 'rounded-2xl'
            }`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image Section */}
            {showAll ? (
              // Large Card Elegant Image Frame
              <div className='p-4 sm:p-6 pb-0'>
                <div className='relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/50 ring-1 ring-white/5'>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-auto block opacity-95 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              // Small Card Full Width Image
              <div className='relative aspect-video w-full overflow-hidden bg-neutral-950 border-b border-neutral-800/50'>
                {((project as any).imageHome || project.image) && (
                  <img 
                    src={(project as any).imageHome || project.image} 
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
            )}

            {/* Content Section */}
            <div className={`flex flex-col flex-1 ${showAll ? 'p-6 sm:p-8' : 'p-5'}`}>
              <div className={`flex ${showAll ? 'flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4' : 'flex-col mb-2'}`}>
                <div>
                  <h3 className={`text-neutral-100 font-satoshi font-semibold leading-tight group-hover:text-neutral-200 transition-colors ${showAll ? 'text-2xl mb-2' : 'text-lg mb-1'}`}>
                    {project.name}
                  </h3>
                  <p className={`text-neutral-400 font-satoshi leading-relaxed ${showAll ? 'text-sm max-w-2xl' : 'text-sm mb-4 flex-1'}`}>
                    {project.description}
                  </p>
                </div>
                
                {showAll ? (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 text-sm font-satoshi font-medium text-neutral-700 bg-neutral-100 text-black hover:bg-neutral-200 px-5 py-2.5 rounded-full transition-all duration-200 hover-lift shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    Visit Site
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
              
              {/* Tech Stack Icons */}
              <div className={`mt-auto ${showAll ? 'pt-6 border-t border-neutral-800/50' : 'pt-4'}`}>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.slice(0, showAll ? undefined : 6).map((techName) => {
                    const { icon: TechIcon, color } = getTechIconAndColor(techName);
                    return (
                      <Badge key={techName} variant="secondary" className="text-[10px] px-2 py-0.5 gap-1 bg-neutral-900/50 hover:bg-neutral-800 border-neutral-800 hover-scale cursor-default text-neutral-300">
                        <TechIcon className={`w-3 h-3 ${color}`} />
                        {techName}
                      </Badge>
                    )
                  })}
                  {!showAll && project.tech && project.tech.length > 6 && (
                    <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-neutral-900/50 border-neutral-800 text-neutral-400">
                      +{project.tech.length - 6}
                    </Badge>
                  )}
                </div>
              </div>

              {!showAll && (
                <div className="mt-5 pt-4 border-t border-neutral-800/50 flex items-center justify-between">
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
              )}
            </div>
          </div>
        ))}  
      </div>

      {!showAll && (
        <div className="pt-4 flex justify-center">
          <Link 
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-satoshi font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
          >
            Show all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Projects
