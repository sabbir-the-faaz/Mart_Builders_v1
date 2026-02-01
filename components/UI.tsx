
import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Project, Tender } from '../types';

export const SectionHeading: React.FC<{ 
  title: string; 
  subtitle?: string; 
  dark?: boolean; 
  centered?: boolean 
}> = ({ title, subtitle, centered }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <span className="font-mono text-[#2F6FA3] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-6xl font-black text-[#0B2A4A] tracking-tighter uppercase leading-[0.9]">
      {title}
    </h2>
    <div className={`h-1 w-24 bg-[#F2B705] mt-8 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white group overflow-hidden border border-[#0B2A4A]/5 hover:border-[#F2B705]/50 transition-all duration-500 shadow-sm hover:shadow-xl">
    <div className="relative h-80 overflow-hidden">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
      />
      <div className="absolute top-6 right-6 font-mono bg-[#F2B705] text-[#0B2A4A] text-[9px] font-black px-4 py-2 uppercase tracking-widest shadow-lg">
        {project.status}
      </div>
    </div>
    <div className="p-8">
      <span className="font-mono text-[10px] text-[#2F6FA3] uppercase tracking-widest font-bold">{project.category}</span>
      <h3 className="text-2xl font-black text-[#0B2A4A] mt-2 mb-4 tracking-tight group-hover:text-[#2F6FA3] transition-colors">{project.title}</h3>
      <div className="space-y-4 text-sm text-[#1F2933]/70 mb-8 border-l-2 border-[#F2B705]/30 pl-4">
        <p className="line-clamp-2 italic font-light">"{project.scope}"</p>
      </div>
      <div className="flex justify-between items-end border-t border-[#0B2A4A]/5 pt-6">
        <div className="font-mono text-[9px] text-[#0B2A4A]/40 uppercase tracking-tighter font-bold">
           LOC: {project.location}
        </div>
        <button className="text-[#0B2A4A] hover:text-[#F2B705] transition-colors">
          <ArrowUpRight size={24} />
        </button>
      </div>
    </div>
  </div>
);

export const TenderCard: React.FC<{ tender: Tender }> = ({ tender }) => (
  <div className="bg-white border border-[#0B2A4A]/10 p-8 hover:bg-[#F7F9FB] transition-all group relative overflow-hidden shadow-sm hover:shadow-lg">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2B705]/5 -mr-16 -mt-16 rounded-full group-hover:bg-[#F2B705]/10 transition-colors duration-700"></div>
    <div className="flex justify-between items-start mb-12">
      <div className="flex flex-col gap-2">
        <span className={`w-fit px-3 py-1 font-mono text-[9px] font-black uppercase tracking-widest shadow-sm ${
          tender.status === 'Active' ? 'bg-[#F2B705] text-[#0B2A4A]' : 'bg-[#1F2933]/10 text-[#1F2933]/50'
        }`}>
          {tender.status}
        </span>
        <span className="font-mono text-[10px] text-[#0B2A4A]/40 font-bold">{tender.referenceNo}</span>
      </div>
    </div>
    <h3 className="text-xl font-black text-[#0B2A4A] mb-8 tracking-tight group-hover:translate-x-2 transition-transform">{tender.title}</h3>
    <div className="grid grid-cols-1 gap-4 mb-10">
      <div className="flex justify-between items-center border-b border-[#0B2A4A]/5 pb-2">
        <p className="font-mono text-[9px] text-[#0B2A4A]/40 uppercase font-bold">Authority</p>
        <p className="text-xs text-[#1F2933] font-semibold">{tender.authority}</p>
      </div>
      <div className="flex justify-between items-center border-b border-[#0B2A4A]/5 pb-2">
        <p className="font-mono text-[9px] text-[#0B2A4A]/40 uppercase font-bold tracking-widest">Deadline</p>
        <p className="text-xs text-red-600 font-black font-mono">{tender.closingDate}</p>
      </div>
    </div>
    <button className="w-full py-4 bg-[#0B2A4A] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#F2B705] hover:text-[#0B2A4A] transition-all shadow-md">
      Review Documents
    </button>
  </div>
);