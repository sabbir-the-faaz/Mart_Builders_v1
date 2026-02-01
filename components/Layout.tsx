
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock, ShieldCheck, Facebook, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-nav py-4 border-b border-[#0B2A4A]/10 shadow-lg' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex flex-col group">
            <span className={`text-2xl font-black tracking-tighter transition-colors ${
              isScrolled || !isHome ? 'text-[#0B2A4A]' : 'text-white'
            }`}>MART BUILDERS</span>
            <span className={`font-mono text-[8px] uppercase tracking-[0.6em] transition-colors ${
              isScrolled || !isHome ? 'text-[#F2B705]' : 'text-[#F2B705]'
            } group-hover:text-[#2F6FA3]`}>{COMPANY_INFO.tagline}</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all relative group ${
                  location.pathname === link.path
                    ? (isScrolled || !isHome ? 'text-[#0B2A4A]' : 'text-white')
                    : (isScrolled || !isHome ? 'text-[#0B2A4A]/60 hover:text-[#0B2A4A]' : 'text-white/60 hover:text-white')
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#F2B705] transition-all ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled || !isHome ? 'text-[#0B2A4A]' : 'text-white'}>
              {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-[#0B2A4A] md:hidden flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
               <span className="text-2xl font-black text-white">MART BUILDERS</span>
               <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} strokeWidth={1} /></button>
            </div>
            <div className="space-y-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-black uppercase tracking-tighter text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B2A4A] text-white/60 pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-1">
            <h3 className="text-white text-3xl font-black mb-8 italic uppercase tracking-tighter leading-none">MART <br /> BUILDERS</h3>
            <p className="text-sm leading-relaxed mb-12 font-light max-w-xs text-white/80">
              Registered Grade-A government contractor defining structural resilience across Bangladesh since 2009.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#F2B705] hover:text-[#0B2A4A] transition-all text-white/40 rounded-full">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#F2B705] mb-10 font-bold">Quick Navigation</h4>
            <ul className="space-y-6 text-xs uppercase tracking-widest font-bold">
              {NAV_LINKS.slice(1, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors text-white/70">
                     {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#F2B705] mb-10 font-bold">Expertise Domains</h4>
            <ul className="space-y-6 text-xs uppercase tracking-widest font-bold">
              <li className="hover:text-white transition-colors text-white/70">Infrastructure</li>
              <li className="hover:text-white transition-colors text-white/70">High-Rise Civil</li>
              <li className="hover:text-white transition-colors text-white/70">Technical Consulting</li>
              <li className="hover:text-white transition-colors text-white/70">Procurement Mgmt</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#F2B705] mb-10 font-bold">Official Inquiries</h4>
            <ul className="space-y-8 text-xs font-bold">
              <li className="flex items-start">
                <Mail size={16} className="mr-4 text-[#F2B705]" />
                <span className="text-white/80">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-4 text-[#F2B705]" />
                <span className="text-white/80">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className="mr-4 text-[#F2B705]" />
                <span className="uppercase tracking-tighter text-white/80">{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center font-mono text-[9px] uppercase tracking-widest text-white/20">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="mt-8 md:mt-0 flex space-x-12">
            <a href="#" className="hover:text-white">Compliance</a>
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FB]">
      <header className="bg-[#0B2A4A] text-white/60 py-3 text-[9px] font-bold uppercase tracking-[0.4em] hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-12">
            <span className="flex items-center"><Phone size={11} className="mr-3 text-[#F2B705]" /> {COMPANY_INFO.phone}</span>
            <span className="flex items-center"><Mail size={11} className="mr-3 text-[#F2B705]" /> {COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center text-white/90"><ShieldCheck size={11} className="mr-2 text-[#F2B705]" /> Grade-A Registered Contractor</span>
          </div>
        </div>
      </header>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;