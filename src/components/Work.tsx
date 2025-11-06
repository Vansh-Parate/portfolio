import React from 'react'
import { experience } from '@/data/experience'
import { Calendar } from 'lucide-react'

const Work = () => {
  return (
    <div className="space-y-4">
      {experience.map((exp, index) => (
        <div key={index} className="group">
          <div className="flex items-start justify-between py-3 px-3 rounded-lg hover:bg-neutral-900/30 transition-colors">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 cursor-pointer" onClick={() => window.open(exp.social, )}>
                <h4 className="text-sm font-medium text-neutral-100" >{exp.company}</h4>
              </div>
              <p className="text-xs text-neutral-400 mb-2">{exp.role}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500">
              <Calendar className="w-3 h-3" />
              {exp.period}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work
