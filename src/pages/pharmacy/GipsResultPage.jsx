import React from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function GipsResultPage({ onBackToPortal }) {
  // Configurable external result URLs (can be updated later by the user)
  const resultLinks = {
    bPharmacy: "https://www.mrsstuexam.com/",
    dPharmacy: "http://www.punjabteched.net/index-r.htm"
  };

  const programs = [
    {
      code: "B.Pharm",
      name: "Bachelor of Pharmacy (B.Pharmacy)",
      duration: "4 Years",
      board: "Maharaja Ranjit Singh Punjab Technical University (MRSPTU), Bathinda",
      redirectUrl: resultLinks.bPharmacy,
      status: "Results Declared",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      code: "D.Pharm",
      name: "Diploma Pharmacy (D.Pharmacy)",
      duration: "2 Years",
      board: "Punjab State Board of Technical Education & Industrial Training (PSBTE), Chandigarh",
      redirectUrl: resultLinks.dPharmacy,
      status: "Results Declared",
      accentBg: "bg-blue-50 text-blue-700 border-blue-200"
    }
  ];

  const handleRedirect = (url, programName) => {
    // Alert feedback just to show user it's redirecting
    alert(`Redirecting to official result site for: ${programName}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBackToPortal} 
            className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer"
          >
            <span>← Back to GIPS Pharmacy Portal</span>
          </button>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase tracking-wider">
            Academics Desk
          </span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-slate-950 text-white py-16 px-8 sm:px-12 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 scale-100"
              src="/bannerimage/3468276583dfbea27-f2ed-4f5c-922a-7f247cc90a1e.jpeg"
              alt="GIPS Campus Background"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-transparent z-10" />
          
          <div className="relative z-20 max-w-3xl space-y-3">
            <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
              GIPS Results Portal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Semester & Annual Results
            </h1>
            <p className="text-emerald-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Access and view university results for Bachelor & Diploma Pharmacy programmes
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Programme Results Registry</h2>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Select your programme from the registry table below to be redirected to the official university or state board results portal.
            </p>
          </div>

          {/* Premium Desktop/Tablet Table Layout */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-mono text-[10px] uppercase border-b border-slate-200/80">
                  <th className="py-4 px-6 font-bold w-24">Code</th>
                  <th className="py-4 px-6 font-bold">Programme Name</th>
                  <th className="py-4 px-6 font-bold">Affiliated University / Board</th>
                  <th className="py-4 px-6 font-bold text-right w-44">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {programs.map((prog, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-mono text-slate-500 font-bold">{prog.code}</td>
                    <td className="py-5 px-6 font-black text-slate-900 text-sm">{prog.name}</td>
                    <td className="py-5 px-6 text-slate-500 font-semibold leading-relaxed">{prog.board}</td>
                    <td className="py-5 px-6 text-right">
                      <button 
                        onClick={() => handleRedirect(prog.redirectUrl, prog.name)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                      >
                        Check Results ↗
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Premium Mobile Stacked Card Layout */}
          <div className="block md:hidden space-y-4">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-mono text-xs font-bold text-slate-400">{prog.code}</span>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-black text-slate-900 text-sm leading-tight">{prog.name}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold">{prog.board}</p>
                </div>

                <button 
                  onClick={() => handleRedirect(prog.redirectUrl, prog.name)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-md transition-all cursor-pointer text-center block"
                >
                  Check Results ↗
                </button>
              </div>
            ))}
          </div>

          {/* Info Notice Cell */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500 font-medium leading-relaxed">
            💡 <strong>Examination Notice:</strong> Please keep your Roll Number and Examination Registration Card handy before checking the results. For any discrepancy in results, contact the college administrative office or registrar division.
          </div>

          {/* Global Campus Directory */}
          <CampusDirectory theme="emerald" />
        </div>

      </div>
    </div>
  );
}
