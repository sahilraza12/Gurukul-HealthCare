import React from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function GipsVisionMissionPage({ onBackToPortal }) {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBackToPortal} 
            className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer"
          >
            <span>← Back to Pharmacy Portal</span>
          </button>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase">
            Vision & Mission
          </span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-slate-950 text-white py-16 px-8 sm:px-12 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 scale-100"
              src="/bannerimage/3770268d63fabfe-d761-4dc0-94ed-57279af1b15f.jpeg"
              alt="GIPS Campus"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-transparent z-10" />
          
          <div className="relative z-20 max-w-3xl space-y-3">
            <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
              GIPS Strategic Framework
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Vision, Mission &<br />Quality Policy
            </h1>
            <p className="text-emerald-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Guiding Principles of Gurukul Institute of Pharmaceutical Sciences
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Vision */}
          <div className="bg-emerald-50/20 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-3">
            <h4 className="font-black text-emerald-800 uppercase text-xs tracking-tight flex items-center gap-2">
              <span>🎯</span> Vision
            </h4>
            <p className="text-slate-600 text-sm md:text-base text-justify leading-relaxed font-semibold">
              To establish as a centre of excellence in education, research, innovation, training and entrepreneurship in pharmaceutical sciences
            </p>
          </div>

          {/* Mission */}
          <div className="bg-emerald-50/20 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-3">
            <h4 className="font-black text-emerald-800 uppercase text-xs tracking-tight flex items-center gap-2">
              <span>🚀</span> Mission
            </h4>
            <p className="text-slate-600 text-sm md:text-base text-justify leading-relaxed font-semibold">
              To educate and train students in the knowledge and practice of pharmaceutical sciences by providing inspirational learning, research and professional attitude for serving the society globally without compromising on ethics and quality.
            </p>
          </div>

          {/* Quality Policy */}
          <div className="bg-emerald-50/20 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-3">
            <h4 className="font-black text-emerald-800 uppercase text-xs tracking-tight flex items-center gap-2">
              <span>⚖️</span> Quality Policy
            </h4>
            <ul className="space-y-3 text-sm md:text-base pl-1 font-semibold text-slate-600">
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To provide world class infrastructure</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To provide knowledge through renowned academicians and an ideal environment for research, innovation, consultancy and entrepreneurship.</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To create a scientific, transparent and impartial examination/evaluation system to ensure an ideal certificatio</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To establish strategic relationship with universities, research institutes and leading national & international corporate.</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To develop manufacturing cell simulating cGMP industrial environment to acquaint students with corporate culture.</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To create centre of excellence in pharmaceutical education and research.</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To engage students in learning and grooming as professional leaders in an intellectually challenging and contemporarily diverse environment.</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>To contribute for creation of healthy and sustainable society by involving the students in community service, health and hygiene awareness, sports, cultural activities and environmental protection.</span>
              </li>
            </ul>
          </div>

          {/* Campus Directory footer info */}
          <CampusDirectory theme="emerald" />

        </div>

      </div>
    </div>
  );
}
