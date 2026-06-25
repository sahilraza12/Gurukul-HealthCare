import React, { useState } from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function GipsDirectorPage({ onBackToPortal }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBackToPortal} 
            className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer"
          >
            <span>← Back to Pharmacy Portal</span>
          </button>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase">
            Director's Desk
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
              GIPS Director
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Message from the<br />Director
            </h1>
            <p className="text-emerald-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Educational Standard and Multifaceted Grooming under Dr. Rohini Dewedi
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Director Info Badge */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b border-slate-100">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-inner flex-shrink-0 overflow-hidden">
              {!imgError ? (
                <img 
                  src="/director.jpg" 
                  alt="Dr. Rohini Dewedi" 
                  className="w-full h-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-5xl">👩‍🏫</span>
              )}
            </div>
            <div className="text-center md:text-left space-y-2 mt-2">
              <h4 className="font-black text-slate-900 text-xl tracking-tight leading-none">Dr. Rohini Dewedi</h4>
              <p className="text-emerald-700 font-bold font-mono text-xs uppercase tracking-wider">Director</p>
              <p className="text-slate-400 text-xs font-semibold">Gurukul Institute of Pharmaceutical Sciences</p>
            </div>
          </div>

          {/* Letter / Quote Section */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold text-justify space-y-6">
            
            {/* Callout Quote Block */}
            <div className="relative p-6 sm:p-8 bg-emerald-50/20 border-l-4 border-emerald-600 rounded-r-3xl my-6">
              <span className="absolute top-2 left-2 text-6xl text-emerald-200/50 font-serif leading-none select-none">“</span>
              <p className="relative z-10 text-emerald-950 font-extrabold italic text-sm sm:text-base leading-relaxed pl-4">
                The field of medicine has grown exponentially during the 21st century. The need for prolonging the lifespan of woman has urged scientists to make new developments and discoveries in health care, and pharmaceuticals every day. One research after the other has led to the expansion of the pharmaceutical industry worldwide.
              </p>
            </div>

            <p>
              Keeping inmind the advances in Pharmaceutical Industries, the need for a quality of education is required. GIPS College of Pharmacy is committed to produce inevitable budding professionals to meet this global challenge. We are working on technical field for multifaceted development of the students i.e. excellent teaching learning process, industrial linkage, innovations, intellectual, personality and entrepreneurship. I feel proud to be a part of GIPS, and keen to work with a dynamic team. I look forward for contributing to the Organization is success and support the leadership team in its future endeavors and I am hopeful that my association will add value to the Organization. I am committed to make GIPS a Centre for outstanding learning experience and fulfill the vision of the Institute through Research, Innovation, Entrepreneurship and disseminating knowledge by providing inspirational learning to produce professional leaders. I welcome all the students who chose to be a part of the Centre of excellence in Pharmaceutical sciences, I am sure that you will feel proud on being associated with Institute. Wish you all the best.
            </p>

          </div>

          {/* Signature Block */}
          <div className="pt-8 border-t border-slate-100 flex flex-col items-end">
            <div className="text-right space-y-1">
              <p className="font-black text-slate-900 text-base">Dr Rohini Dewedi</p>
              <p className="text-emerald-700 font-bold font-mono text-xs uppercase tracking-wider">Director</p>
              <p className="text-slate-400 text-[10px] font-bold font-mono">Gips College of Pharmacy</p>
            </div>
          </div>

          {/* Campus Directory details */}
          <CampusDirectory theme="emerald" />

        </div>

      </div>
    </div>
  );
}
