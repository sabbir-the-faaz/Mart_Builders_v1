
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Briefcase, Award, ArrowRight, HardHat, Construction, Microscope } from 'lucide-react';
import { PROJECTS, TENDERS } from '../constants';
import { SectionHeading, ProjectCard, TenderCard } from '../components/UI';

const Hero = () => (
  <section className="relative h-screen flex items-center pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover" 
        alt="Construction crane silhouette" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/60"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
          Established Government Contractor
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8">
          Building the Future <br />
          <span className="text-emerald-500 italic">Infrastructure</span> of Bangladesh
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
          MART BUILDERS specializes in high-integrity government project execution, consulting, and state-of-the-art construction services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/projects" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded shadow-lg flex items-center justify-center transition-all">
            View Our Projects <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link to="/tenders" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all">
            Browse Active Tenders
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Completed Projects', value: '150+' },
          { label: 'Active Tenders', value: '12' },
          { label: 'Cities Covered', value: '25' },
          { label: 'Years of Excellence', value: '15' },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />

      {/* Trust & Compliance Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                subtitle="Why Choose Us" 
                title="Reliable Partner for National Development" 
              />
              <p className="text-slate-600 mb-8 leading-relaxed">
                As a registered and compliant government contractor, MART BUILDERS brings over a decade of experience in navigating complex tender processes and delivering critical infrastructure on time and within budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: 'Fully Compliant', desc: 'Enlisted with PWD, RHD, LGED and major authorities.' },
                  { icon: Briefcase, title: 'Tender Expertise', desc: 'Robust track record of winning and executing high-value tenders.' },
                  { icon: Award, title: 'Quality Standards', desc: 'ISO certified processes for every construction phase.' },
                  { icon: Building2, title: 'Modern Equipment', desc: 'Owned heavy machinery and advanced logistical support.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="bg-white p-3 shadow-sm rounded-lg h-fit">
                      <item.icon className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-200 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-8 max-w-[240px] shadow-xl">
                <p className="text-3xl font-bold mb-1 italic">"Uncompromising quality in every square foot."</p>
                <div className="h-0.5 w-12 bg-white/40 my-4"></div>
                <p className="text-sm font-medium">Founder, MART BUILDERS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Core Expertise" 
            title="Comprehensive Solutions" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HardHat, title: 'Construction Services', desc: 'Large scale building projects for government institutions.' },
              { icon: Construction, title: 'Infrastructure', desc: 'Highways, bridges, and essential public utilities.' },
              { icon: Microscope, title: 'Project Consulting', desc: 'Feasibility studies and architectural management.' },
              { icon: ShieldCheck, title: 'Maintenance', desc: 'Long-term structural maintenance and repair.' },
            ].map((service, idx) => (
              <div key={idx} className="p-8 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all text-center group">
                <div className="mx-auto w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading 
              subtitle="Portfolio" 
              title="Significant Benchmarks" 
            />
            <Link to="/projects" className="text-emerald-600 font-bold mb-12 hover:underline">View All Projects</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* Tenders Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-12 lg:p-20 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1 text-white">
                  <SectionHeading 
                    subtitle="Public Procurement" 
                    title="Active Tender Participation" 
                    dark 
                  />
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    We actively monitor and participate in government e-GP tenders. Explore our currently bid projects and procurement notices.
                  </p>
                  <Link to="/tenders" className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300">
                    Access Portal <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {TENDERS.filter(t => t.status === 'Active').map(t => (
                    <TenderCard key={t.id} tender={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 italic">Ready to Discuss Your Next Major Initiative?</h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto">
            Our expert team of engineers and consultants is prepared to provide comprehensive analysis and execution strategy for government projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-white text-emerald-700 px-10 py-4 font-bold hover:bg-slate-100 transition-colors">
              Contact Us Today
            </Link>
            <Link to="/about" className="border-2 border-white/50 px-10 py-4 font-bold hover:bg-white/10 transition-colors">
              Our Capability Statement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
