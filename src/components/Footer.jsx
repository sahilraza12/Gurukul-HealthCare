import React from 'react';

export default function Footer({ setViewState, setNursingTab, setPharmacyTab }) {
  const handlePharmacyNavigate = (view, tab = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setViewState(view);
    if (tab && setPharmacyTab) {
      setPharmacyTab(tab);
    }
  };

  const handleNursingNavigate = (view, tab = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setViewState(view);
    if (tab && setNursingTab) {
      setNursingTab(tab);
    }
  };

  const handleCommonNavigate = (view) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setViewState(view);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs font-medium py-16 px-6 border-t-4 border-emerald-600 font-sans relative z-20 mt-16">

      {/* Main Footer Link Matrix Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">

        {/* Col 1: Brand Identity & Helpdesk Contacts */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-tight">
              Gurukul Healthcare <br />
              <span className="text-emerald-500">Group of Institutions</span>
            </h4>
            <p className="leading-relaxed text-slate-400 font-semibold text-justify">
              A premium educational cluster in Punjab offering standard parameters in pharmaceutical engineering, advanced clinical training frameworks, and allied paramedical sciences.
            </p>
          </div>
          <div className="space-y-3 pt-2 border-t border-slate-900">
            <h5 className="text-white font-bold uppercase text-[10px] tracking-wider text-slate-300">Admission Coordinates</h5>
            <div className="space-y-2">
              <div>
                <p className="text-slate-400 font-mono text-[9px] uppercase font-black text-slate-300">Pharmacy Campus</p>
                <p className="leading-relaxed text-slate-400 text-[11px]">
                  📍 VPO Badesh Kalan, Khamano, Punjab - 141801
                </p>
              </div>
              <div>
                <p className="text-slate-400 font-mono text-[9px] uppercase font-black text-teal-400">Nursing Campus</p>
                <p className="leading-relaxed text-slate-400 text-[11px]">
                  📍 Badesh Kalan, Khamanon, District-Fatehgarh Sahib, Punjab
                </p>
              </div>
            </div>
            <div className="font-mono space-y-1 pt-2 border-t border-slate-900/60">
              <p className="text-white font-bold">📞 +91 9675631111</p>
              <p className="text-white font-bold">📞 +91 9501365511</p>
              <p className="text-slate-400 text-[11px] lowercase">✉️ chairmangips@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Col 2: Common Links (Global navigation) */}
        <div className="space-y-4">
          <h4 className="text-white font-black text-sm uppercase tracking-wider pb-2 border-b border-slate-800 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            Common Gateway
          </h4>
          <ul className="space-y-3 font-bold">
            <li>
              <button
                onClick={() => handleCommonNavigate('home')}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-600 group-hover:text-emerald-500 transition-colors">➔</span>
                Home Gateway Portal
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCommonNavigate('home-grievance')}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-600 group-hover:text-emerald-500 transition-colors">➔</span>
                Student Grievance Cell
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCommonNavigate('home-contact')}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-600 group-hover:text-emerald-500 transition-colors">➔</span>
                Contact Campus Helpdesk
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  const el = document.getElementById('courses-matrix');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="hover:text-white transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-600 group-hover:text-emerald-500 transition-colors">➔</span>
                Academic Programs Matrix
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Pharmacy Division (GIPS Specific) */}
        <div className="space-y-4">
          <h4 className="text-emerald-400 font-black text-sm uppercase tracking-wider pb-2 border-b border-slate-800 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Pharmacy Division
          </h4>
          <ul className="space-y-3 font-bold">
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy', 'facilities')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                GIPS Pharmacy Portal
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy-about')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                About Pharmacy College
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy-chairman')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                Chairman Management Desk
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy-director')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                Message from Director GIPS
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy-vision')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                Vision, Mission & Quality Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy-result')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                Pharmacy Board Results
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePharmacyNavigate('pharmacy-downloads')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                Syllabus & Study Downloads
              </button>
            </li>
            <li>
              <button
                onClick={() => window.open('https://www.mrsptu.ac.in/', '_blank')}
                className="hover:text-emerald-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">➔</span>
                MRSPTU VC/Registrar
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Nursing Division (GSN Specific) */}
        <div className="space-y-4">
          <h4 className="text-teal-400 font-black text-sm uppercase tracking-wider pb-2 border-b border-slate-800 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Nursing Division
          </h4>
          <ul className="space-y-3 font-bold">
            <li>
              <button
                onClick={() => handleNursingNavigate('nursing', 'overview')}
                className="hover:text-teal-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-teal-400 transition-colors">➔</span>
                GSN Nursing Portal
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNursingNavigate('nursing', 'noc')}
                className="hover:text-teal-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-teal-400 transition-colors">➔</span>
                Punjab Govt NOC Details
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNursingNavigate('nursing', 'desk')}
                className="hover:text-teal-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-teal-400 transition-colors">➔</span>
                Principal Nursing Desk
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNursingNavigate('nursing', 'testimonials')}
                className="hover:text-teal-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-teal-400 transition-colors">➔</span>
                Student Reviews & Feedback
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNursingNavigate('nursing-downloads')}
                className="hover:text-teal-300 text-slate-400 transition-colors text-left flex items-center gap-1.5 group"
              >
                <span className="text-slate-700 group-hover:text-teal-400 transition-colors">➔</span>
                Nursing Download Links
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Deep Footer Rights Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-slate-600 font-bold uppercase tracking-wider">
        <span>© {new Date().getFullYear()} Gurukul Healthcare Group. All Rights Reserved.</span>
        <div className="flex gap-4">
          <span className="text-slate-700 hover:text-slate-500 transition-colors">PCI Approved</span>
          <span>•</span>
          <span className="text-slate-700 hover:text-slate-500 transition-colors">INC Approved</span>
          <span>•</span>
          <span className="text-slate-700 hover:text-slate-500 transition-colors">Punjab Govt Recognised</span>
        </div>
      </div>

    </footer>
  );
}