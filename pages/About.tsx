
import React from 'react';
import { SectionHeading } from '../components/UI';
// Fix: Added missing Award and Building2 icons to the import
import { Target, Eye, ShieldAlert, Heart, Award, Building2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About MART BUILDERS</h1>
          <p className="text-slate-400 max-w-2xl">Pioneering sustainable infrastructure solutions across Bangladesh through engineering excellence and government collaboration.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Company Background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <SectionHeading subtitle="Who We Are" title="Decades of Engineering Mastery" />
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Founded on the principles of integrity and technical precision, MART BUILDERS has emerged as a cornerstone of the construction industry in Bangladesh. We are specifically structured to handle the rigorous demands of government contracting, ensuring every project meets the highest standards of the People's Republic of Bangladesh.
              </p>
              <p>
                Our expertise spans from urban architectural developments to rural infrastructure connectivity. We don't just build structures; we create the backbone of economic progress. With a dedicated team of 200+ engineers, technicians, and project managers, we deliver turnkey solutions from feasibility to commissioning.
              </p>
            </div>
          </div>
          <div className="bg-slate-100 p-8 border-l-8 border-emerald-600">
            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Our Core Commitment</h3>
            <ul className="space-y-4">
              {[
                'Unwavering compliance with PWD/RHD/LGED regulations.',
                'Prioritizing domestic labor and materials for national growth.',
                'Transparent procurement and ethical business practices.',
                'Long-term sustainability in structural design.',
                'Safety-first culture across all project sites.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-white p-12 shadow-sm border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
            <Target className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h2 className="text-2xl font-bold mb-4 group-hover:text-white">Our Mission</h2>
            <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed">
              To drive national progress by executing high-quality infrastructure projects through innovative engineering, ethical practices, and unwavering commitment to public sector standards.
            </p>
          </div>
          <div className="bg-white p-12 shadow-sm border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
            <Eye className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h2 className="text-2xl font-bold mb-4 group-hover:text-white">Our Vision</h2>
            <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed">
              To be the most trusted and preferred government contractor in Bangladesh, recognized for setting benchmarks in infrastructure resilience and professional integrity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <SectionHeading subtitle="Principles" title="Our Core Values" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldAlert, title: 'Compliance', desc: 'Strict adherence to all government laws and industry norms.' },
            { icon: Heart, title: 'Integrity', desc: 'Honest and transparent communication in every contract.' },
            { icon: Award, title: 'Excellence', desc: 'Superior craftsmanship that stands the test of time.' },
            { icon: Building2, title: 'Safety', desc: 'Protecting our workforce and the public in every project.' }
          ].map((v, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mb-6 text-emerald-600 shadow-inner">
                <v.icon size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
              <p className="text-xs text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
