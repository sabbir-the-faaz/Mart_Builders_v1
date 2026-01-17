
import React from 'react';
import { SectionHeading } from '../components/UI';
import { HardHat, Construction, Building2, ShieldCheck, Microscope, Briefcase, Ruler, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: 'Infrastructure Development',
      desc: 'Expert execution of major highways, bridges, and transport corridors. Our team handles complex geotechnical challenges and large-scale concrete works.',
      features: ['Bridge Engineering', 'Roadway Expansion', 'Drainage Systems', 'Earthmoving']
    },
    {
      icon: Building2,
      title: 'Construction Services',
      desc: 'Developing high-rise administrative buildings, hospitals, and educational institutions. We specialize in seismic-resistant structures and modern MEP integration.',
      features: ['Seismic Design', 'MEP Installation', 'Interior Finishing', 'Structural Retrofitting']
    },
    {
      icon: Microscope,
      title: 'Consulting & Planning',
      desc: 'Comprehensive feasibility studies and architectural design for public sector initiatives. We provide detailed BOQ and project management frameworks.',
      features: ['Feasibility Studies', 'Architectural Design', 'Cost Estimation', 'Permit Management']
    },
    {
      icon: Ruler,
      title: 'Project Management',
      desc: 'Turnkey project management ensuring strict adherence to timelines and budget constraints. We utilize advanced scheduling tools for real-time tracking.',
      features: ['Resource Planning', 'Quality Audits', 'Stakeholder Management', 'Risk Mitigation']
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-slate-400 max-w-2xl">Multidisciplinary engineering solutions tailored for government standards and national development goals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Main Service List */}
        <div className="space-y-24">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-slate-100 pl-6">{service.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center text-sm font-semibold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 aspect-video bg-slate-100 overflow-hidden shadow-2xl">
                <img 
                  src={`https://picsum.photos/seed/${idx + 50}/800/450`} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Government Support */}
        <div className="mt-32 p-12 lg:p-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <ShieldCheck size={300} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading subtitle="Specialization" title="Government Liaison & Tender Management" dark />
              <p className="text-slate-400 mb-8">
                We bridge the gap between technical requirements and regulatory compliance. Our team is expert in e-GP portal management, document preparation, and ensuring all bid bonds and performance guarantees are in perfect order.
              </p>
              <div className="flex space-x-4">
                <div className="bg-emerald-600/20 p-4 rounded-lg">
                  <Briefcase className="text-emerald-400 mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest">Tender Strategy</p>
                </div>
                <div className="bg-emerald-600/20 p-4 rounded-lg">
                  <Compass className="text-emerald-400 mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest">Site Survey</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-xl">
              <h4 className="text-xl font-bold mb-6">Execution Methodology</h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-500 font-bold mr-3">01.</span>
                  <span>Rigorous pre-bid feasibility and site inspection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 font-bold mr-3">02.</span>
                  <span>Transparent procurement of high-grade raw materials.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 font-bold mr-3">03.</span>
                  <span>Safety-first construction with real-time reporting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 font-bold mr-3">04.</span>
                  <span>Third-party quality audits and structural certification.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
