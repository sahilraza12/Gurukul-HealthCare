import { useState } from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function GsnPrincipalPage({ onBackToPortal }) {
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
            Principal's Desk
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
              Academic Head
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              From the Principal's<br />Desk
            </h1>
            <p className="text-teal-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Educational Guidelines & Bedside Care Vision from GSN Principal
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Principal Info Badge */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b border-slate-100">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shadow-inner flex-shrink-0 overflow-hidden">
              {!imgError ? (
                <img 
                  src="/principal.jpeg" 
                  alt="GSN Principal" 
                  className="w-full h-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-5xl">👩‍🏫</span>
              )}
            </div>
            <div className="text-center md:text-left space-y-2 mt-2">
              <h4 className="font-black text-slate-900 text-xl tracking-tight leading-none">Dr. Jasmail Kaur</h4>
              <p className="text-teal-700 font-bold font-mono text-xs uppercase tracking-wider">Principal</p>
              <p className="text-slate-400 text-xs font-semibold">Gurukul Institute of Nursing Sciences</p>
            </div>
          </div>

          {/* Letter / Quote Section */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold text-justify space-y-6">
            
            {/* Callout Quote Block */}
            <div className="relative p-6 sm:p-8 bg-teal-50/20 border-l-4 border-teal-600 rounded-r-3xl my-6">
              <span className="absolute top-2 left-2 text-6xl text-teal-200/50 font-serif leading-none select-none">“</span>
              <p className="relative z-10 text-teal-950 font-extrabold italic text-sm sm:text-base leading-relaxed pl-4 animate-pulse-subtle">
                “Medicine alone cannot bring about well being. It is the nursing and care by everyone concerned that will alleviate the suffering".
              </p>
            </div>

            <p>
              Nursing profession as it is the most truly considered, is a highly one of the honorable profession involving compassionate and dedicated care. Our college was established in 2023, which aims for quality education and to prove excellence in providing services to the emerging health care delivery system.
            </p>
            <p>
              We offer ANM, GNM, BSc. Nursing course. We have well-experienced, excellent, dedicated faculty for student success and achievement. We have an excellent infrastructure with a conducive learning environment like library facilities and Wi-Fi free internet with all the available amenities to support the student study and pleasant stay here.
            </p>
            <p>
              Our significantly well infrastructure institution imparts high quality professional education to young and aspiring candidates who have dedicated themselves to be efficient nurses and also meet the acute shortage of qualified and skilled nursing manpower, our country is currently facing. I welcome all the new students and wish them success through their academic journey out of our Institute as successful nursing professionals.
            </p>
            <p>
              It gives me great pleasure to reach out to you through this website on behalf of Gurukul Institute of Nursing Sciences, Badesh Kalan, Khamanon, Fatehgarh Sahib (Punjab). I wish to convey my heartfelt greetings to all the Nursing students.
            </p>

          </div>

          {/* Signature Block */}
          <div className="pt-8 border-t border-slate-100 flex flex-col items-end">
            <div className="text-right space-y-1">
              <p className="font-black text-slate-900 text-base font-sans">Dr. Jasmail Kaur</p>
              <p className="text-teal-700 font-bold font-mono text-xs uppercase tracking-wider">Principal</p>
              <p className="text-slate-400 text-[10px] font-bold font-mono">Gurukul Institute of Nursing Sciences (GINS)</p>
            </div>
          </div>

          {/* Campus Directory details */}
          <CampusDirectory theme="teal" />

        </div>

      </div>
    </div>
  );
}
