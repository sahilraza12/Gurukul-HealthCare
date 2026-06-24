import React from 'react';

export default function Footer({ setViewState }) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs font-medium py-12 px-4 border-t-4 border-emerald-600 font-sans relative z-20 mt-12">
      
      {/* Upper Footer Grid Links Node */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
        
        {/* Col 1: Brand & Affiliation text */}
        <div className="space-y-4">
          <h4 className="text-white font-black text-sm uppercase tracking-tight">
            Gurukul Healthcare <br />
            <span className="text-emerald-500">Group of Institutions</span>
          </h4>
          <p className="leading-relaxed text-slate-400 font-semibold text-justify">
            A premium educational cluster in Punjab offering standard parameters in pharmaceutical engineering, advanced clinical training frameworks, and allied paramedical sciences setup under state regulatory technical board directives.
          </p>
          <p className="mt-3 text-emerald-400 font-bold font-mono">👥 PCI & INC Approved Frameworks</p>
        </div>

        {/* Col 2: Quick Links Directory maps */}
        <div className="space-y-3">
          <h4 className="text-white font-black text-sm uppercase tracking-wider pb-2 border-b border-slate-800">
            Quick Link Cells
          </h4>
          <ul className="space-y-2 font-bold">
            <li>
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setViewState('home'); }} className="hover:text-white transition-colors text-left">
                • Home Gateway Portal
              </button>
            </li>
            <li>
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setViewState('pharmacy'); }} className="hover:text-white transition-colors text-left">
                • Pharmacy Division (GIPS)
              </button>
            </li>
            <li>
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setViewState('nursing'); }} className="hover:text-white transition-colors text-left">
                • Nursing Division (GSN)
              </button>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">• Student Grievance Cell</li>
            <li className="hover:text-white transition-colors cursor-pointer">• Syllabus & Downloads</li>
          </ul>
        </div>

        {/* Col 3: Admission Helpdesk Coordinates */}
        <div className="space-y-3">
          <h4 className="text-white font-black text-sm uppercase tracking-wider pb-2 border-b border-slate-800">
            Admission Helpdesk
          </h4>
          <p className="leading-relaxed">📍 VPO Badesh Kalan, Khamano, Fatehgarh Sahib, Punjab - 141801</p>
          <div className="pt-2">
            <p className="font-mono text-white font-bold">📞 +91 9675631111, 9501365511</p>
            <p className="mt-1 font-mono text-slate-400">✉️ chairmangips@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Deep Footer Rights Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-slate-500 font-bold uppercase tracking-wider">
        <span>© {new Date().getFullYear()} Gurukul Healthcare Group. All Rights Reserved.</span>
        <span>Designed with React & Tailwind CSS</span>
      </div>

    </footer>
  );
}