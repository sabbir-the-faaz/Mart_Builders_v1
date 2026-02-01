
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, ShieldCheck, Briefcase, Award, ArrowRight, HardHat } from 'lucide-react';
import { PROJECTS, TENDERS } from '../constants';
import { SectionHeading, ProjectCard, TenderCard } from '../components/UI';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#0B2A4A]">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: yImage }} className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover opacity-80 saturate-[1.2] brightness-75" 
            alt="Construction backdrop" 
          />
        </motion.div>
        {/* Navy-tinted overlay for clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/20 to-[#0B2A4A]/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-[#F2B705]"></div>
            <span className="font-mono text-[#F2B705] text-[10px] font-black uppercase tracking-[0.5em]">
              Licensed Grade-A Contractor
            </span>
          </div>
          <h1 className="text-6xl md:text-[8vw] font-black text-white leading-[0.8] mb-12 tracking-tighter uppercase">
            National <br />
            <span className="outline-text">Stability.</span> <br />
            <span className="text-[#F2B705] italic">Mastered.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-16 leading-relaxed max-w-2xl font-light">
            MART BUILDERS engineered for high-integrity infrastructure and complex government mandates in Bangladesh since 2009.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <Link to="/projects" className="px-12 py-6 bg-[#F2B705] hover:bg-white text-[#0B2A4A] font-black text-[11px] uppercase tracking-[0.4em] transition-all shadow-2xl">
              Project Archive <ArrowRight className="inline ml-3" size={16} />
            </Link>
            <Link to="/tenders" className="px-12 py-6 bg-white/5 hover:bg-white/10 text-white font-black text-[11px] uppercase tracking-[0.4em] border border-white/30 transition-all backdrop-blur-md">
              Tender Portal
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
        <div className="font-mono text-[9px] text-[#F2B705]/40 tracking-[1em] uppercase vertical-text font-bold">
           TRUSTED INFRASTRUCTURE SINCE 2009
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-24 bg-white border-y border-[#0B2A4A]/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { label: 'Completed Units', value: '150+' },
          { label: 'Active Procurements', value: '12' },
          { label: 'Served Districts', value: '25' },
          { label: 'Corporate Tenure', value: '15 Yrs' },
        ].map((stat, idx) => (
          <div key={idx} className="border-l-4 border-[#F2B705] pl-8">
            <p className="text-4xl font-black text-[#0B2A4A] mb-2 tracking-tighter">{stat.value}</p>
            <p className="font-mono text-[10px] uppercase font-bold text-[#2F6FA3] tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="bg-[#F7F9FB]">
      <Hero />
      <Stats />

      {/* Authority Section */}
      <section className="py-40 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="The Institution" 
                title="Strategic Engineering & Resilience" 
              />
              <p className="text-[#1F2933]/70 text-lg mb-12 leading-relaxed font-light">
                MART BUILDERS operates as a specialized vehicle for national development. We align international structural standards with local geographical challenges to deliver permanent structural assets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: 'Compliant', desc: 'PWD / RHD / LGED certified.' },
                  { icon: Briefcase, title: 'Procurement', desc: 'e-GP Portal Expertise.' },
                  { icon: Award, title: 'Quality', desc: 'ISO certified execution.' },
                  { icon: Building2, title: 'Logistics', desc: 'Dedicated machinery fleet.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 group hover:bg-[#0B2A4A] transition-all duration-500 shadow-sm border border-[#0B2A4A]/5">
                    <item.icon className="text-[#F2B705] group-hover:text-white mb-4" size={24} />
                    <h4 className="font-black text-[#0B2A4A] group-hover:text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-[11px] text-[#2F6FA3] group-hover:text-white/80 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[#0B2A4A] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-16 -left-16 bg-[#0B2A4A] p-12 max-w-sm shadow-2xl">
                <p className="text-white text-3xl font-black mb-6 italic tracking-tighter leading-none">"Upholding standard protocol."</p>
                <div className="h-[2px] w-16 bg-[#F2B705] mb-4"></div>
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.3em] text-[#F2B705]">Engr. M. A. Rashid — Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-40 bg-white border-y border-[#0B2A4A]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <SectionHeading 
              subtitle="The Archive" 
              title="Significant Benchmarks" 
            />
            <Link to="/projects" className="text-[#0B2A4A] font-mono text-[10px] font-black uppercase tracking-widest mb-12 hover:text-[#F2B705] flex items-center gap-4 transition-colors">
               Access Full Portfolio <ArrowRight size={14} className="text-[#F2B705]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* Tenders Section */}
      <section className="py-40 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0B2A4A] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F2B705]/5 -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
                <div className="lg:col-span-1">
                  <div className="mb-12">
                    <span className="font-mono text-[#F2B705] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
                      Procurement
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                      Active <br /> Tenders
                    </h2>
                    <div className="h-1 w-24 bg-[#F2B705] mt-8"></div>
                  </div>
                  <p className="text-white/60 text-sm mb-12 leading-relaxed max-w-xs">
                    Real-time monitoring of e-GP tenders. Submit your credentials for multi-sector consortium opportunities.
                  </p>
                  <Link to="/tenders" className="inline-flex items-center text-[#F2B705] font-mono text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors font-black">
                    Official Portal <ArrowRight className="ml-4" size={16} />
                  </Link>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-[#0B2A4A] mb-16 uppercase tracking-tighter leading-none">
            Build with <br /> <span className="italic text-[#F2B705]">integrity.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <Link to="/contact" className="bg-[#0B2A4A] text-white px-16 py-8 font-black text-[12px] uppercase tracking-[0.5em] hover:bg-[#F2B705] hover:text-[#0B2A4A] transition-all shadow-xl">
              Initiate Inquiry
            </Link>
            <Link to="/about" className="border-2 border-[#0B2A4A] text-[#0B2A4A] px-16 py-8 font-black text-[12px] uppercase tracking-[0.5em] hover:bg-[#0B2A4A] hover:text-white transition-all">
              Corporate History
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;