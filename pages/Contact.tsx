
import React from 'react';
import { SectionHeading } from '../components/UI';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="pt-24">
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Connect with MART BUILDERS</h1>
          <p className="text-slate-400">Professional assistance for government inquiries, tenders, and consultancy.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <SectionHeading subtitle="Contact Details" title="Reach Our Office" />
            <div className="space-y-10 mt-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tighter text-sm">Headquarters</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tighter text-sm">Call Us</h4>
                  <p className="text-sm text-slate-500">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-slate-500">Available: Sun-Thu (9AM-5PM)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tighter text-sm">Email Inquiries</h4>
                  <p className="text-sm text-slate-500">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-900 text-white">
              <MessageSquare className="text-emerald-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Support Hotline</h4>
              <p className="text-xs text-slate-400 mb-4">For immediate tender or project site queries, our dedicated mobile lines are active during business hours.</p>
              <p className="text-emerald-400 font-bold">{COMPANY_INFO.phone}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Secure Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm" placeholder="e.g. Engr. Rahim" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Organization/Department</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm" placeholder="e.g. PWD" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm" placeholder="rahim@department.gov.bd" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm" placeholder="+880" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Subject of Inquiry</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm">
                    <option>General Tender Query</option>
                    <option>Project Collaboration</option>
                    <option>Pre-qualification Documents</option>
                    <option>Employment Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Your Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm" placeholder="Detailed description..."></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 hover:bg-emerald-700 transition-colors flex items-center justify-center">
                  Submit Official Inquiry <Send className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder - Updated to Sylhet Shamimabad Area */}
        <div className="mt-24 h-[450px] bg-slate-200 relative grayscale hover:grayscale-0 transition-all">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-4 shadow-lg text-center z-10">
               <MapPin className="text-emerald-600 mx-auto mb-2" />
               <p className="font-bold text-xs uppercase tracking-widest">MART BUILDERS CORPORATE OFFICE</p>
               <p className="text-[10px] text-slate-500 mt-1 uppercase">Shamimabad, Sylhet</p>
             </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14470.97017772661!2d91.84333908855523!3d24.891461947232235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552b7538f5f1%3A0x6e8a4a58b884968!2sShamimabad%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1715785000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
