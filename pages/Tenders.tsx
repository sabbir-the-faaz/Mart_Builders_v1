
import React, { useState } from 'react';
import { SectionHeading, TenderCard } from '../components/UI';
import { TENDERS } from '../constants';
import { FileText, Download, Filter, Search } from 'lucide-react';

const Tenders = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Past' | 'Upcoming'>('All');

  const filteredTenders = filter === 'All' 
    ? TENDERS 
    : TENDERS.filter(t => t.status === filter);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-4">Tenders & Procurement Portal</h1>
          <p className="text-slate-400">View current opportunities, bid statuses, and official procurement notices.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 flex items-center mb-6">
                <Filter size={18} className="mr-2 text-emerald-600" /> Filter Tenders
              </h3>
              <div className="space-y-2">
                {['All', 'Active', 'Upcoming', 'Past'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status as any)}
                    className={`w-full text-left px-4 py-2 text-sm rounded transition-colors ${
                      filter === status 
                      ? 'bg-emerald-600 text-white font-bold' 
                      : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {status} Tenders
                  </button>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Search Reference</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ref. No..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Tender List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-slate-900">{filter} Tenders ({filteredTenders.length})</h2>
              <div className="flex space-x-2">
                <button className="p-2 bg-white border border-slate-200 text-slate-600 hover:text-emerald-600"><FileText size={18} /></button>
                <button className="p-2 bg-white border border-slate-200 text-slate-600 hover:text-emerald-600"><Download size={18} /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTenders.map(tender => (
                <TenderCard key={tender.id} tender={tender} />
              ))}
              {filteredTenders.length === 0 && (
                <div className="col-span-2 py-20 text-center bg-white border border-dashed border-slate-300">
                  <FileText size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500">No tenders found for the selected category.</p>
                </div>
              )}
            </div>

            {/* Procurement Notices Section */}
            <div className="mt-16 bg-white p-10 shadow-sm border border-slate-100">
              <SectionHeading title="General Procurement Notices" subtitle="Announcements" />
              <div className="space-y-6">
                {[
                  { date: 'May 15, 2024', title: 'Revision of Tender Submission Guidelines for Project ID: 8821', type: 'Amendment' },
                  { date: 'May 10, 2024', title: 'Pre-bid Meeting Invitation: Model Mosque Construction Phase II', type: 'Invitation' },
                  { date: 'May 05, 2024', title: 'MART BUILDERS qualifies as Level-1 Contractor for Bridge Maintenance', type: 'Announcement' },
                ].map((notice, i) => (
                  <div key={i} className="flex items-start justify-between py-4 border-b border-slate-50 last:border-0">
                    <div className="flex space-x-6 items-center">
                      <div className="text-center w-20">
                        <p className="text-xs font-bold text-emerald-600 uppercase">{notice.date.split(' ')[0]}</p>
                        <p className="text-lg font-bold text-slate-900">{notice.date.split(' ')[1].replace(',', '')}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{notice.type}</span>
                        <h4 className="font-bold text-slate-800 hover:text-emerald-600 cursor-pointer">{notice.title}</h4>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-emerald-600"><Download size={20} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenders;
