import React from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function GipsAboutPage({ onBackToPortal }) {
  const facilitiesList = [
    {
      name: "🧪 Pharmaceutical Chemistry",
      desc: "Advanced laboratories fitted for organic synthesis, analytical chromatography, physical analysis, and molecular docking studies."
    },
    {
      name: "💊 Formulation (Pharmaceutics)",
      desc: "Advanced equipment for dosage form development, tablet formulation, dissolution rate analysis, and compounding."
    },
    {
      name: "⚕️ Pharmacology & Physiology",
      desc: "Equipped with specialized physiological study models, charts, and simulation software to test drug actions."
    },
    {
      name: "🌿 Pharmacognosy",
      desc: "Equipped for herbal extraction, microscopical analysis of crude drugs, and standardization of herbal formulations."
    }
  ];

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
            Institutional Profile
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
              About GIPS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Gurukul Institute of<br />Pharmaceutical Sciences
            </h1>
            <p className="text-emerald-200 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              A Pioneering Institution of Pharmaceutical Education & Research in Punjab
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* History and Inception */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              About Gurukul Institute of Pharmaceutical Sciences
            </h3>
            <div className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold text-justify">
              <p className="indent-8">
                There was no Pharmacy College in this region Dr. Harmesh Kumar, Founder of Gurukul Institute of Pharmaceutical Sciences, realising the need for training the students in Pharmaceutical Sciences established Thus this college is the pioneering pharmacy institute in this region. With a person like Dr. Harmesh Kumar who is a very dynamic man with a great academic commitment and orientation at the helm of affairs, as its Director, this College has now come to be known as one of the best Pharmacy Colleges in the country for its academic excellence. It has committed itself to become a center for excellence in pharmaceutical education and research and be a leader in the field of pharmaceutical sciences including pharmacy practice with the objective of strengthening the health care of the country. Along with Academics, overall personality development of students has been our major concerns. College regularly conducts cultural and sport activities. Pharmacy Cup is one of the major activities . Our academic system has been framed taking into consideration the responsibility of students to meet the demands of hi-tech pharmaceutical industry, at the same time ensuring that they confidently serve the requirements of patient care and pharmacy practice
              </p>
            </div>
          </div>

          {/* Academic Labs (Grid Layout) */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              Academic Facilities
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold text-justify">
              High-tech well equipped labs in the departments of Pharmaceutical Chemistry, pharmaceutics, Pharmacology and Pharmacognosy serve as a strong framework for our graduates to help them develop capabilities to become world class pharmacists and scientists.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {facilitiesList.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all">
                  <h4 className="font-black text-emerald-800 text-sm uppercase mb-1">{f.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision, Mission, Objectives */}
          <div className="space-y-8 pt-8 border-t border-slate-100">
            
            {/* Vision */}
            <div className="bg-emerald-50/20 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-3">
              <h4 className="font-black text-emerald-800 uppercase text-xs tracking-tight flex items-center gap-2">
                <span>🎯</span> Vision
              </h4>
              <p className="text-slate-600 text-xs md:text-sm text-justify leading-relaxed font-semibold">
                To establish as a centre of excellence in education, research, innovation, training and entrepreneurship in pharmaceutical sciences
              </p>
            </div>

            {/* Mission */}
            <div className="bg-emerald-50/20 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-3">
              <h4 className="font-black text-emerald-800 uppercase text-xs tracking-tight flex items-center gap-2">
                <span>🚀</span> Mission
              </h4>
              <p className="text-slate-600 text-xs md:text-sm text-justify leading-relaxed font-semibold">
                To educate and train students in the knowledge and practice of pharmaceutical sciences by providing inspirational learning, research and professional attitude for serving the society globally without compromising on ethics and quality.
              </p>
            </div>

            {/* Quality Policy */}
            <div className="bg-emerald-50/20 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-3">
              <h4 className="font-black text-emerald-800 uppercase text-xs tracking-tight flex items-center gap-2">
                <span>⚖️</span> Quality Policy
              </h4>
              <ul className="space-y-3 text-xs md:text-sm pl-1 font-semibold text-slate-600">
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

          </div>

          {/* Campus Directory footer info */}
          <CampusDirectory theme="emerald" />

        </div>

      </div>
    </div>
  );
}
