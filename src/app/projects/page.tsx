import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 flex items-center justify-center p-4 sm:p-6 py-12">
      <div className="w-full max-w-4xl space-y-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-satoshi font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <div>
          <h1 className="text-3xl font-satoshi font-semibold text-neutral-100 mb-2">All Projects</h1>
          <p className="text-neutral-400 text-sm font-satoshi">A comprehensive list of everything I've built.</p>
        </div>

        <Projects showAll={true} />
      </div>
    </div>
  );
}
