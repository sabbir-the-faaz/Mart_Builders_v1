
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, ShieldCheck, ChevronRight, Facebook, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>MART BUILDERS</span>
              <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-emerald-600' : 'text-emerald-500'}`}>{COMPANY_INFO.tagline}</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-emerald-600'
                    : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600 border-b border-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-6 italic">MART BUILDERS</h3>
            <p className="text-sm leading-relaxed mb-6">
              A premier government contractor in Bangladesh dedicated to delivering superior infrastructure and development solutions with integrity and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.slice(1, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-emerald-500 flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-emerald-500 transition-colors">Construction Services</li>
              <li className="hover:text-emerald-500 transition-colors">Infrastructure Development</li>
              <li className="hover:text-emerald-500 transition-colors">Consulting & Management</li>
              <li className="hover:text-emerald-500 transition-colors">Government Liaison</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="mr-3 mt-1 text-emerald-500" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-3 mt-1 text-emerald-500" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className="mr-3 mt-1 text-emerald-500" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-slate-400 py-2 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone size={12} className="mr-2" /> {COMPANY_INFO.phone}</span>
            <span className="flex items-center"><Mail size={12} className="mr-2" /> {COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><ShieldCheck size={12} className="mr-1 text-emerald-500" /> Govt. Approved Contractor</span>
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
