
import React from 'react';
import { SectionHeading } from '../components/UI';
import { CheckCircle2, ShieldCheck, FileCheck, Award, Lock, ExternalLink, GraduationCap, Truck, Zap, Hammer, Landmark } from 'lucide-react';
import { TENDER_LICENSES } from '../constants';

const Compliance = () => {
  const licenseIcons = [
    { name: 'Education', icon: GraduationCap },
    { name: 'Roads & Highways', icon: Truck },
    { name: 'Electrical', icon: Zap },
    { name: 'Civil', icon: Hammer },
    { name: 'Construction', icon: Landmark },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-4">Compliance & Certifications</h1>
          <p className="text-slate-400">Maintaining world-class standards and government prerequisites for elite contracting.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* New Tender License Categories Section */}
        <div className="mb-24">
          <SectionHeading subtitle="Official Authorization" title="Tender License Categories" centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {licenseIcons.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-8 text-center hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-600/10 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Authorized Domain</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Compliance Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <SectionHeading subtitle="Legal Framework" title="Regulatory Adherence" />
            <p className="text-slate-600 mb-8 leading-relaxed">
              MART BUILDERS operates under strict adherence to the Public Procurement Rules (PPR) of Bangladesh. We maintain up-to-date licenses with all relevant ministries and technical directorates, ensuring our eligibility for high-tier national infrastructure tenders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Enlisted Contractor (Class-A) - PWD',
                'Roads and Highways Department (RHD) Category-I',
                'LGED Strategic Partner Registration',
                'Ministry of Housing and Public Works License',
                'ISO 9001:2015 Quality Management Certified',
                'ISO 45001:2018 Occupational Health & Safety'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-slate-50 border-l-4 border-emerald-600">
                  <CheckCircle2 size={18} className="text-emerald-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 bg-emerald-600 p-8 text-white relative overflow-hidden shadow-xl">
             <div className="absolute -bottom-10 -right-10 opacity-20">
               <ShieldCheck size={200} />
             </div>
             <h3 className="text-xl font-bold mb-4">Integrity Verification</h3>
             <p className="text-emerald-100 text-sm mb-8">All certification documents are available for verification by ministry procurement boards via our secure document vault.</p>
             <button className="flex items-center text-sm font-bold bg-white text-emerald-700 px-6 py-3 hover:bg-emerald-50 transition-colors">
               Verify Credentials <ExternalLink size={16} className="ml-2" />
             </button>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              icon: Award, 
              title: 'Quality Control', 
              desc: 'Rigorous material testing and structural audits at every stage of construction to ensure 50+ year longevity.' 
            },
            { 
              icon: Lock, 
              title: 'Safety protocols', 
              desc: 'Zero-accident target with mandatory PPE and periodic safety training for all field engineering staff.' 
            },
            { 
              icon: FileCheck, 
              title: 'Ethical Bidding', 
              desc: 'Committed to anti-collusion and fair pricing in every public sector tender submission.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-slate-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <item.icon size={32} />
               </div>
               <h3 className="font-bold text-slate-900 mb-4">{item.title}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications Display (Visual Placeholders) */}
        <SectionHeading title="Official Endorsements" subtitle="Credentials" centered />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-[3/4] bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-4 text-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <Landmark size={40} className="text-slate-300 mb-3" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">License #{2024 + i}</p>
              <p className="text-[8px] text-slate-400 mt-2">Exp: 12/2026</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
