"use client";

import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowUpRight, Github } from 'lucide-react';

const MockupScreen = ({ accent, name }: { accent: string; name: string }) => (
  <div className="w-full h-full flex flex-col">
    {/* Browser chrome */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-900/80 border-b border-neutral-800/60 flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-neutral-700" />
      <div className="w-2 h-2 rounded-full bg-neutral-700" />
      <div className="w-2 h-2 rounded-full bg-neutral-700" />
      <div className="flex-1 mx-2 h-4 rounded-sm bg-neutral-800/80 flex items-center px-2">
        <span className="text-[8px] text-neutral-600 font-mono truncate">{name.toLowerCase()}.vercel.app</span>
      </div>
    </div>
    {/* Content area */}
    <div className="flex-1 relative overflow-hidden flex flex-col gap-2 p-3">
      {/* Hero text block */}
      <div className="space-y-1.5">
        <div className="h-3 rounded-sm w-3/4" style={{ background: accent + '40' }} />
        <div className="h-5 rounded-sm w-full" style={{ background: accent + '25' }} />
        <div className="h-3 rounded-sm w-1/2" style={{ background: accent + '15' }} />
      </div>
      {/* Fake command bar */}
      <div className="flex items-center gap-1.5 mt-1">
        <div className="h-6 rounded flex-1 bg-neutral-800/60 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent + 'aa' }} />
          <div className="h-2 rounded-sm w-24 bg-neutral-700/60" />
        </div>
        <div className="h-6 rounded px-3 text-[9px] font-medium flex items-center" style={{ background: accent + '30', color: accent }}>
          Demo
        </div>
      </div>
      {/* Floating cards row */}
      <div className="flex gap-1.5 mt-auto">
        <div className="flex-1 h-8 rounded bg-neutral-800/50 border border-neutral-700/30 flex items-center gap-1.5 px-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: accent + '80' }} />
          <div className="h-1.5 rounded-sm flex-1 bg-neutral-700/60" />
        </div>
        <div className="flex-1 h-8 rounded bg-neutral-800/50 border border-neutral-700/30 flex items-center gap-1.5 px-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: accent + '50' }} />
          <div className="h-1.5 rounded-sm flex-1 bg-neutral-700/60" />
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="group relative flex flex-col bg-neutral-950 border border-neutral-800/60 rounded-xl overflow-hidden hover:border-neutral-700/80 transition-all duration-300 hover:-translate-y-0.5">
    {/* Preview window */}
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: '160px',
        background: `radial-gradient(ellipse at 60% 40%, ${project.accent}18 0%, transparent 70%), #0a0a0a`
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
      />
      {/* Browser mockup */}
      <div className="absolute inset-3 rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-950/90 shadow-2xl">
        <MockupScreen accent={project.accent} name={project.shortName} />
      </div>
    </div>

    {/* Divider line with accent fade */}
    <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${project.accent}40, transparent)` }} />

    {/* Card body */}
    <div className="flex flex-col gap-3 p-4">
      {/* Name + type */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-neutral-100 font-satoshi font-semibold text-base leading-tight">{project.shortName}</h3>
          <p className="text-neutral-500 text-[11px] font-satoshi mt-0.5">{project.description}</p>
        </div>
        <span
          className="text-[9px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
          style={{ background: project.accent + '15', color: project.accent }}
        >
          {project.type}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-neutral-400 text-[11px] font-satoshi leading-relaxed">{project.tagline}</p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1">
        {project.keyTech.map((t) => (
          <span
            key={t}
            className="text-[9px] font-satoshi font-medium px-2 py-0.5 rounded-sm border"
            style={{ borderColor: project.accent + '25', color: project.accent + 'cc', background: project.accent + '08' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-satoshi font-medium uppercase tracking-wider transition-colors duration-200"
          style={{ color: project.accent }}
        >
          <span>Live Preview</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-satoshi font-medium text-neutral-500 hover:text-neutral-300 uppercase tracking-wider transition-colors duration-200"
          >
            <Github className="w-3 h-3" />
            <span>Source</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View all button */}
      <div className="pt-1">
        <Link
          href="/projects"
          className="group flex items-center justify-between w-full px-4 py-3 rounded-lg border border-neutral-800/60 hover:border-neutral-700 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-200"
        >
          <span className="text-xs font-satoshi text-neutral-400 group-hover:text-neutral-300 transition-colors">
            View all projects
          </span>
          <div className="flex items-center gap-1 text-neutral-600 group-hover:text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5">
            <span className="text-xs font-satoshi">{projects.length} total</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
