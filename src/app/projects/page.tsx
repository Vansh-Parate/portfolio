"use client";

import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowUpRight, ArrowLeft, Github } from 'lucide-react';

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Frontend': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'Backend': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'Fullstack': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    default: return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 px-4 py-12 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 text-xs font-satoshi mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
          <h1 className="text-2xl font-satoshi font-semibold text-neutral-100">All Projects</h1>
          <p className="text-neutral-500 text-sm font-satoshi mt-1">{projects.length} projects built across web, mobile, and AI domains.</p>
        </div>

        {/* Projects list */}
        <div className="space-y-px">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group flex items-start justify-between gap-4 py-5 border-b border-neutral-900 hover:border-neutral-800 transition-colors"
            >
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {/* Number */}
                <span className="text-[11px] font-satoshi text-neutral-700 tabular-nums mt-0.5 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Accent dot */}
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: project.accent }}
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-satoshi font-medium text-neutral-100">{project.name}</span>
                    <span className={`text-[9px] font-satoshi font-medium px-1.5 py-0.5 rounded border ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                    {project.featured && (
                      <span className="text-[9px] font-satoshi font-medium px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-[11px] font-satoshi leading-relaxed">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.keyTech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-satoshi px-1.5 py-0.5 rounded-sm border"
                        style={{ borderColor: project.accent + '20', color: project.accent + 'aa' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-neutral-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-300 transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-900">
          <p className="text-xs text-neutral-600 font-satoshi">© 2025 Vansh Parate</p>
        </div>
      </div>
    </div>
  );
}
