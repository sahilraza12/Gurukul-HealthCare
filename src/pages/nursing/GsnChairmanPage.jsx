import { useState } from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function GsnChairmanPage({ onBackToPortal }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBackToPortal} 
            className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-teal-600 hover:bg-teal-50 text-slate-800 hover:text-teal-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer"
          >
            <span>← Back to Nursing Portal</span>
          </button>
          <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full uppercase">
            Chairman's Desk
          </span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-slate-950 text-white py-16 px-8 sm:px-12 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 scale-100"
              src="/bannerimage/image1.jpg"
              alt="GSN Campus"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-900/90 to-transparent z-10" />
          
          <div className="relative z-20 max-w-3xl space-y-3">
            <span className="bg-teal-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
              GSN Chairman
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Message from the<br />Chairman
            </h1>
            <p className="text-teal-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Words of Inspiration & Academic Vision from Dr. Harmesh Kumar
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Chairman Info Badge */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b border-slate-100">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shadow-inner flex-shrink-0 overflow-hidden">
              {!imgError ? (
                <img 
                  src="/chairman.jpg" 
                  alt="Dr. Harmesh Kumar" 
                  className="w-full h-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-5xl">👨‍💼</span>
              )}
            </div>
            <div className="text-center md:text-left space-y-2 mt-2">
              <h4 className="font-black text-slate-900 text-xl tracking-tight leading-none">Dr. Harmesh Kumar</h4>
              <p className="text-teal-700 font-bold font-mono text-xs uppercase tracking-wider">Founder & Chairman</p>
              <p className="text-slate-400 text-xs font-semibold">Gurukul Institute of Nursing Sciences</p>
            </div>
          </div>

          {/* Letter / Quote Section */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold text-justify space-y-6">
            
            {/* Callout Quote Block */}
            <div className="relative p-6 sm:p-8 bg-teal-50/20 border-l-4 border-teal-600 rounded-r-3xl my-6">
              <span className="absolute top-2 left-2 text-6xl text-teal-200/50 font-serif leading-none select-none">“</span>
              <p className="relative z-10 text-teal-950 font-extrabold italic text-sm sm:text-base leading-relaxed pl-4">
                Nursing is a noble profession that serves as the backbone of the global healthcare ecosystem. Our mission at Gurukul School of Nursing is to groom skilled, compassionate, and clinically competent nursing leaders of tomorrow.
              </p>
            </div>

            <p>
              My vision has always been to provide affordable, high-quality professional healthcare education that generates high employment potential for underprivileged youth in the region, while maintaining global standards of academic training and clinical bedside experience. Our nursing institute is equipped with state-of-the-art anatomy tracking labs, maternal-child health simulators, and tied up with leading multi-speciality medical centers.
            </p>
            <p>
              We aim to develop a versatile personality in our nursing students with a strong base of ethical responsibility, clinical precision, and absolute dedication to serving humanity. I seek the blessings of the Almighty and full co-operation from teachers, parents, and students in this journey.
            </p>

          </div>

          {/* Signature Block */}
          <div className="pt-8 border-t border-slate-100 flex flex-col items-end">
            <div className="text-right space-y-1">
              <p className="font-black text-slate-900 text-base">Dr. Harmesh Kumar</p>
              <p className="text-teal-700 font-bold font-mono text-xs uppercase tracking-wider">Chairman</p>
              <p className="text-slate-400 text-[10px] font-bold font-mono">Gurukul School of Nursing</p>
            </div>
          </div>

          {/* Campus Directory details */}
          <CampusDirectory theme="teal" />

        </div>

      </div>
    </div>
  );
}
