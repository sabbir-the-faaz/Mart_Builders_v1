
import React from 'react';
import { SectionHeading } from '../components/UI';
import { CAREERS } from '../constants';
import { MapPin, Clock, ArrowRight, HardHat, Briefcase } from 'lucide-react';

const Careers = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-4">Build Your Career With Us</h1>
          <p className="text-slate-400">Join a team of visionaries shaping the national infrastructure of Bangladesh.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <SectionHeading subtitle="Open Positions" title="Current Opportunities" />
            <div className="space-y-6">
              {CAREERS.map(job => (
                <div key={job.id} className="bg-white p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-emerald-200 transition-colors">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{job.department}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{job.title}</h3>
                    <div className="flex space-x-6 mt-3 text-xs text-slate-500">
                      <span className="flex items-center"><MapPin size={14} className="mr-1" /> {job.location}</span>
                      <span className="flex items-center"><Clock size={14} className="mr-1" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto text-right">
                    <p className="text-[10px] text-slate-400 mb-2 font-medium">Apply by: {job.deadline}</p>
                    <button className="bg-slate-900 text-white px-6 py-2 text-sm font-bold hover:bg-slate-800 transition-colors flex items-center">
                      Apply Now <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
              {CAREERS.length === 0 && (
                <div className="p-12 text-center bg-white border border-slate-100">
                  <p className="text-slate-500 italic">No vacancies at the moment. Please check back later.</p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-1">
             <div className="bg-white p-8 border border-slate-100 shadow-sm sticky top-28">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Why MART BUILDERS?</h3>
               <ul className="space-y-6">
                 {[
                   { icon: HardHat, title: 'Impactful Projects', desc: 'Work on nation-building infrastructure that improves millions of lives.' },
                   { icon: Briefcase, title: 'Growth Mindset', desc: 'Continuous training and mentorship from senior engineers.' },
                   { icon: Clock, title: 'Stability', desc: 'Long-term career security with a reputable government contractor.' }
                 ].map((benefit, i) => (
                   <li key={i} className="flex items-start">
                     <div className="bg-emerald-50 text-emerald-600 p-2 mr-4 rounded flex-shrink-0">
                       <benefit.icon size={20} />
                     </div>
                     <div>
                       <h4 className="font-bold text-sm text-slate-900 mb-1">{benefit.title}</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
               <div className="mt-10 p-6 bg-slate-50 text-center">
                 <p className="text-xs text-slate-500 mb-4">Don't see a matching role? Send your CV for future consideration.</p>
                 <a href="mailto:careers@martbuilders.com.bd" className="text-emerald-600 font-bold text-sm hover:underline">talent@martbuilders.com.bd</a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
