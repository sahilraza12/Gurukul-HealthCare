import React, { useState, useEffect } from 'react';

export default function NursingPortal({ onBack }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic state list for dropdown input validation
  const indianStates = [
    "Punjab", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Delhi",
    "Bihar", "Jharkhand", "Uttar Pradesh", "Rajasthan", "Uttarakhand", "West Bengal"
  ];

  // 📸 Linked the local assets we just downloaded into a premium slider array
  const sliderImages = [
    "/bannerimage/image1.jpg",
    "/bannerimage/image2.jpg",
    "/bannerimage/image3.jpg",
    "/bannerimage/image4.jpg",
    "/bannerimage/image5.jpg",
    "/bannerimage/image6.jpg",
    "/bannerimage/image7.jpg",
    "/bannerimage/image8.jpg"
  ];

  // Course structure mapped from extracted data logs
  const nursingCourses = [
    { name: "B.Sc Nursing", duration: "4 Years", seats: "60 Seats", eligibility: "10+2 Medical with PCBE - Min 45%" },
    { name: "GNM (General Nursing & Midwifery)", duration: "3 Years", seats: "40 Seats", eligibility: "10+2 Any Stream (Science Preferred) - Min 40%" },
    { name: "ANM (Auxiliary Nursing Midwifery)", duration: "2 Years", seats: "30 Seats", eligibility: "10+2 Any Stream - Min 40%" }
  ];

  const directory = [
    { role: "Nursing Principal Desk", email: "principalgsn2024@gmail.com", badge: "Academic Head" },
    { role: "Chairman Management Cell", email: "chairmangips@gmail.com", badge: "Administration" }
  ];

  // Automatic Background Slide Animation Engine
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Control Bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button onClick={onBack} className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm">
            <span>← Back to Campus Gateway</span>
          </button>
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
            GSN Nursing Core
          </span>
        </div>

        {/* --- 🛑 ULTRA-PREMIUM DYNAMIC LIVE BANNER SLIDER --- */}
        <div className="relative min-h-[420px] flex items-center bg-slate-950 text-white p-8 md:p-12 overflow-hidden">
          {/* Slider Engine Layer */}
          <div className="absolute inset-0 z-0">
            {sliderImages.map((imgUrl, index) => (
              <img
                key={index}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
                }`}
                src={imgUrl}
                alt={`Nursing Slide ${index}`}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-900/80 to-transparent z-10" />
          
          {/* Hero Content Elements */}
          <div className="relative z-20 max-w-3xl">
            <span className="bg-teal-500 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
              INC Approved • Approved by Govt of Punjab
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tight leading-tight uppercase drop-shadow-md">
              Gurukul Institute of <br />Nursing Sciences
            </h1>
            <p className="text-teal-200 text-sm md:text-base mt-3 font-bold uppercase tracking-wider">
              ✨ We Nurture Students to Make Competent
            </p>
          </div>
        </div>

        {/* --- REAL REVOLVING COUNTER METRICS (NaN FIX) --- */}
        <div className="bg-teal-50/50 border-b border-slate-200 px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono shadow-inner">
          <div className="p-2 border-r border-slate-200/60 last:border-0">
            <h4 className="text-2xl md:text-3xl font-black text-teal-800">2023</h4>
            <p className="text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-wider">Establishment</p>
          </div>
          <div className="p-2 border-r border-slate-200/60 last:border-0">
            <h4 className="text-2xl md:text-3xl font-black text-teal-800">500+</h4>
            <p className="text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-wider">Enrolled Alumni</p>
          </div>
          <div className="p-2 border-r border-slate-200/60 last:border-0">
            <h4 className="text-2xl md:text-3xl font-black text-teal-800">45+</h4>
            <p className="text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-wider">Hospital Tie-ups</p>
          </div>
          <div className="p-2 last:border-0">
            <h4 className="text-2xl md:text-3xl font-black text-teal-800">15+</h4>
            <p className="text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-wider">Expert Mentors</p>
          </div>
        </div>

        {/* Main Workspace Layout Split Grid */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT CONTAINER VIEW CORE */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Core Overview text from tree dumps */}
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Clinical Care & Foundation Excellence</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-semibold">
                Located in Punjab and founded recently in the year 2023, Gurukul Institute of Nursing Sciences is approved from the "Department of Medical and Research", Govt. of Punjab. We strive to advance the science of health and healthcare through innovative clinical research, dedicated bedside training modules, and absolute practice equipped with modern tech frameworks.
              </p>
            </div>

            {/* INTERACTIVE TEXT BOX MATRIX TABS */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner">
              <div className="flex border-b border-slate-200 gap-2 font-mono text-xs font-bold mb-6">
                <button 
                  onClick={() => setActiveSection('overview')}
                  className={`pb-3 px-4 transition-all border-b-2 ${activeSection === 'overview' ? 'border-teal-600 text-teal-700 font-black' : 'border-transparent text-slate-500'}`}
                >
                  Training Spectrum
                </button>
                <button 
                  onClick={() => setActiveSection('testimonials')}
                  className={`pb-3 px-4 transition-all border-b-2 ${activeSection === 'testimonials' ? 'border-teal-600 text-teal-700 font-black' : 'border-transparent text-slate-500'}`}
                >
                  Verified Reviews
                </button>
              </div>

              {activeSection === 'overview' ? (
                <div className="space-y-4 animate-fade-in text-xs md:text-sm font-semibold text-slate-700">
                  <div className="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3">
                    <span className="text-xl">🩺</span>
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase mb-0.5">HAP Practical Laboratories</h4>
                      <p className="text-slate-500 text-xs">Equipped with modular advanced human anatomy tracking kits, simulation beds, and monitoring grids.</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3">
                    <span className="text-xl">👶</span>
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase mb-0.5">Maternal Child Healthcare Unit</h4>
                      <p className="text-slate-500 text-xs">High-fidelity pedagogical dummy systems to practice critical case operations safely.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <div className="p-4 bg-white rounded-xl border shadow-sm relative font-medium text-xs text-slate-600 leading-relaxed italic">
                    "As a student at Gurukul School of Nursing, I am experiencing a good ambience and the faculties have put in all the efforts to grooming us. It is a wonderful experience."
                    <span className="block font-black font-sans text-slate-900 mt-2 not-italic text-[11px] uppercase">— SUCHI GUPTA (Nursing Batch)</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border shadow-sm relative font-medium text-xs text-slate-600 leading-relaxed italic">
                    "Great experience with Gurukul School of Nursing. You get a lot of opportunities. Work hard to get it. Be prepared for everything."
                    <span className="block font-black font-sans text-slate-900 mt-2 not-italic text-[11px] uppercase">— KULWINDER KAUR (Nursing Batch)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Courses Allocation Layout matching Pharmacy file style */}
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                Offered Nursing Program Matrix
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nursingCourses.map((course, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-500 transition-colors shadow-sm">
                    <h4 className="font-black text-slate-900 text-sm mb-1">{course.name}</h4>
                    <div className="flex justify-between text-[11px] font-mono font-bold text-slate-500 mt-2 pt-2 border-t border-slate-100">
                      <span>⏱️ {course.duration}</span>
                      <span className="text-teal-700 bg-teal-50/70 px-1.5 py-0.5 rounded">👥 {course.seats}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold mt-2 font-sans">Criteria: {course.eligibility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sleek Row Clean Email Directory (Fixing ugly boxes) */}
            <div className="border border-slate-200/80 rounded-[24px] bg-white p-6 shadow-xl shadow-slate-100">
              <div className="mb-4">
                <h3 className="font-black text-slate-900 text-lg tracking-tight">Departmental Communication Channels</h3>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-0.5">Direct Academic Nodes</p>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200/60 rounded-xl overflow-hidden bg-slate-50/30">
                {directory.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white hover:bg-slate-50/60 transition-colors gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-teal-500 hidden sm:block" />
                      <div>
                        <h4 className="font-black text-slate-900 text-sm leading-tight">{item.role}</h4>
                        <span className="inline-block mt-1 font-mono font-bold text-[9px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wide">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-2 sm:pt-0">
                      <a href={`mailto:${item.email}`} className="font-mono text-xs font-bold text-slate-600 hover:text-teal-600 transition-colors break-all">{item.email}</a>
                      <span className="text-slate-300 text-xs hidden sm:inline">|</span>
                      <button onClick={() => navigator.clipboard.writeText(item.email)} className="text-[10px] font-bold text-teal-600 hover:text-teal-700 font-mono bg-teal-50 px-2.5 py-1 rounded-md transition-colors">Copy Link</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR PANEL: THE PREMIUM ADMISSION QUERY CELL */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm sticky top-28">
              <div className="border-b pb-3 border-slate-200 mb-4">
                <h3 className="font-black text-slate-900 text-lg tracking-tight">Instant Admission Query</h3>
                <p className="text-slate-400 text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5">Nursing Desk Live Line</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Candidate Name</label>
                  <input type="text" placeholder="Enter full name" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 font-medium bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Mobile Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-500 font-mono text-xs font-bold">+91</span>
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-2.5 rounded-r-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 font-medium bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Select Program</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 font-bold text-teal-900 bg-white">
                    {nursingCourses.map((c, i) => <option key={i}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Select State</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 font-bold text-teal-900 bg-white">
                    <option value="">Choose State</option>
                    {indianStates.map((st, idx) => <option key={idx} value={st}>{st}</option>)}
                  </select>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <input type="checkbox" id="agree" className="mt-0.5 accent-teal-600 rounded" defaultChecked />
                  <label htmlFor="agree" className="text-[11px] font-semibold text-slate-500 leading-tight">I authorize the medical cell to evaluate this entry sheet.</label>
                </div>
                <button className="w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white font-black py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-teal-600/20 transition-all">
                  Submit Enquiry Sheet
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}