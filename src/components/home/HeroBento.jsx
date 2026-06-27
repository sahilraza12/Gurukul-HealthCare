import React from 'react';

export default function HeroBento({ onSelectPharmacy, onSelectNursing }) {
  // Configured to use high-quality local campus banner image
  const bgImage = "/bannerimage/image1.jpg";

  return (
    <div className="relative min-h-screen pt-24 pb-16 bg-slate-950 flex items-center justify-center overflow-hidden">
      
      {/* --- SINGLE STATIC BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55 brightness-[0.75]"
          src={bgImage}
          alt="Medical Campus Background"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1586773860418-d3b719d30036?auto=format&fit=crop&w=1600&q=80";
          }}
        />
      </div>

      {/* Dark overlay to make text pop */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Main Interface Structure */}
      <div className="max-w-7xl mx-auto px-4 w-full relative z-20 mt-6">
        
        {/* --- CENTRAL HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-14 drop-shadow-md">
          <span className="bg-emerald-600 text-white font-extrabold px-5 py-2 rounded-full text-xs tracking-wider uppercase shadow-lg">
            Welcome to GIPS & G.S.N Campus
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-5 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] uppercase leading-tight">
            Gurukul Healthcare Group of Institutions
          </h1>
          <div className="text-white mt-4 text-xs md:text-sm font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/40 inline-flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 py-3 rounded-xl backdrop-blur-sm tracking-wide">
            <span>📍 Pharmacy Campus: Khamano, Punjab</span>
            <span className="hidden sm:inline text-emerald-500">|</span>
            <span>📍 Nursing Campus: Khamanon, Fatehgarh Sahib, Punjab</span>
          </div>
        </div>

        {/* --- DUAL GROUP PORTAL BLOCK CORES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Pharmacy Block */}
          <div className="bg-white/95 backdrop-blur-md border-2 border-slate-200/60 hover:border-emerald-600 rounded-3xl p-6 md:p-10 transition-all duration-300 shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 font-black text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-md">
                Rx
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                Gurukul Institute of Pharmaceutical Sciences
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 font-semibold">
                PCI Approved premier core setups targeting advanced formulation, digital analytical chemistry labs, and comprehensive **LAB 1** research infrastructures.
              </p>
              <p className="text-slate-555 text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                📍 VPO Badesh Kalan, Khamano, Punjab - 141801
              </p>
            </div>
            <button 
              onClick={onSelectPharmacy}
              className="w-full bg-emerald-600 text-white font-extrabold py-4 rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/30 cursor-pointer"
            >
              Explore Pharmacy Portal →
            </button>
          </div>

          {/* Nursing Block */}
          <div className="bg-white/95 backdrop-blur-md border-2 border-slate-200/60 hover:border-emerald-600 rounded-3xl p-6 md:p-10 transition-all duration-300 shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                Gurukul Institute of Nursing Sciences
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 font-semibold">
                INC Approved specialized professional tracking focusing heavily on live **HAP PRACTICAL PERFORMING** wards, medical simulation, and direct clinical tie-ups.
              </p>
              <p className="text-slate-555 text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                📍 Badesh Kalan, Khamanon, District-Fatehgarh Sahib, Punjab, India
              </p>
            </div>
            <button 
              onClick={onSelectNursing}
              className="w-full bg-emerald-600 text-white font-extrabold py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Explore Nursing Portal →
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}