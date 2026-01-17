
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Project, Tender } from '../types';

export const SectionHeading: React.FC<{ 
  title: string; 
  subtitle?: string; 
  dark?: boolean; 
  centered?: boolean 
}> = ({ title, subtitle, dark, centered }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <span className="text-emerald-600 font-semibold tracking-widest text-xs uppercase mb-2 block">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-display font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    <div className={`h-1 w-20 bg-emerald-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 uppercase">
        {project.status}
      </div>
    </div>
    <div className="p-6">
      <span className="text-xs text-slate-500 uppercase font-medium">{project.category}</span>
      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">{project.title}</h3>
      <div className="space-y-2 text-sm text-slate-600 mb-6">
        <p><strong>Client:</strong> {project.client}</p>
        <p><strong>Location:</strong> {project.location}</p>
      </div>
      <button className="text-emerald-600 font-semibold text-sm flex items-center hover:translate-x-1 transition-transform">
        View Project Details <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  </div>
);

export const TenderCard: React.FC<{ tender: Tender }> = ({ tender }) => (
  <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
          tender.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
        }`}>
          {tender.status}
        </span>
        <h3 className="text-lg font-bold text-slate-900 mt-2">{tender.title}</h3>
      </div>
      <span className="text-xs text-slate-400 font-mono">{tender.referenceNo}</span>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div>
        <p className="text-[10px] text-slate-400 uppercase font-bold">Authority</p>
        <p className="text-sm text-slate-700">{tender.authority}</p>
      </div>
      <div>
        <p className="text-[10px] text-slate-400 uppercase font-bold">Closing Date</p>
        <p className="text-sm text-red-600 font-medium">{tender.closingDate}</p>
      </div>
    </div>
    <button className="w-full py-2 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
      View Tender Documents
    </button>
  </div>
);
