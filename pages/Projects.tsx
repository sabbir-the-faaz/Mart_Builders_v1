
import React, { useState } from 'react';
import { SectionHeading, ProjectCard } from '../components/UI';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.status === activeTab);

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-slate-900 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Projects</h1>
          <p className="text-slate-400 max-w-2xl">A showcase of infrastructure excellence and architectural achievement for the Government of Bangladesh.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Filtering Tabs */}
        <div className="flex border-b border-slate-200 mb-12">
          {['All', 'Ongoing', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${
                activeTab === tab 
                ? 'border-emerald-600 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-500 italic">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Technical Capability Notice */}
        <div className="mt-24 p-12 bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 max-w-2xl">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 italic">Detailed Capability Statement</h3>
            <p className="text-slate-600 text-sm">Our full project archive includes classified government infrastructure. Contact our office for a comprehensive capability dossier and past performance reports.</p>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex-shrink-0">
            Request Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
