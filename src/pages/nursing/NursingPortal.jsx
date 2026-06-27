import React, { useState, useEffect } from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function NursingPortal({ onBack, activeSection: propActiveSection, setActiveSection: propSetActiveSection, onNavigateToChairman, onNavigateToPrincipal, selectedCourse: propSelectedCourse, setSelectedCourse: propSetSelectedCourse }) {
  const [localActiveSection, setLocalActiveSection] = useState('overview');
  const activeSection = propActiveSection || localActiveSection;
  const setActiveSection = propSetActiveSection || setLocalActiveSection;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [localSelectedCourse, setLocalSelectedCourse] = useState(null);
  const selectedCourse = propSelectedCourse !== undefined ? propSelectedCourse : localSelectedCourse;
  const setSelectedCourse = propSetSelectedCourse || setLocalSelectedCourse;

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
    {
      name: "B.Sc Nursing",
      displayName: "B.Sc. Nursing — 4 Years Undergraduate Program",
      duration: "4 Years",
      type: "Undergraduate Program",
      fees: "AS PER GOVT. NORMS",
      icon: "🩺",
      about: "B.Sc. Nursing is a 4-year undergraduate degree program that provides comprehensive theoretical knowledge and practical clinical training in nursing sciences.",
      programs: [
        {
          sno: 1,
          name: "B.Sc. Nursing",
          eligibility: "10+2 Medical with PCBE - Min 45%",
          duration: "4 Years",
          approvedBy: "INC & Govt. of Punjab",
          affiliatedTo: "PNRC, Punjab"
        }
      ]
    },
    {
      name: "GNM",
      displayName: "GNM — General Nursing and Midwifery",
      duration: "3.5 Years",
      type: "Diploma Program",
      fees: "AS PER GOVT. NORMS",
      icon: "💉",
      about: "GNM is a 3.5-year Diploma Program consisting of 3 years of academic study followed by 6 months of mandatory internship.",
      programs: [
        {
          sno: 1,
          name: "GNM (General Nursing and Midwifery)",
          eligibility: "10+2 Any Stream (Science Preferred) - Min 40%",
          duration: "3 Yrs Study + 6 Months Internship",
          approvedBy: "INC & Govt. of Punjab",
          affiliatedTo: "PNRC, Punjab"
        }
      ]
    },
    {
      name: "ANM",
      displayName: "ANM — Auxiliary Nurse Midwife",
      duration: "2 Years",
      type: "Diploma Program",
      fees: "AS PER GOVT. NORMS",
      icon: "🏥",
      about: "ANM (Auxiliary Nurse Midwife) is a 2-year Diploma Program focused on community health nursing, maternal care, and primary healthcare services.",
      programs: [
        {
          sno: 1,
          name: "ANM (Auxiliary Nurse Midwife)",
          eligibility: "10+2 Any Stream - Min 40%",
          duration: "2 Years",
          approvedBy: "INC & Govt. of Punjab",
          affiliatedTo: "PNRC, Punjab"
        }
      ]
    }
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
        <div className="bg-slate-50 px-4 sm:px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button onClick={onBack} className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer">
            <span>← Back to Campus Gateway</span>
          </button>
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
            GSN Nursing Core
          </span>
        </div>

        {/* --- 🛑 ULTRA-PREMIUM DYNAMIC LIVE BANNER SLIDER --- */}
        <div className="relative min-h-[260px] sm:min-h-[340px] md:min-h-[420px] flex items-center bg-slate-950 text-white p-6 sm:p-8 md:p-12 overflow-hidden">
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
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mt-4 tracking-tight leading-tight uppercase drop-shadow-md">
              Gurukul Institute of <br />Nursing Sciences
            </h1>
            <p className="text-teal-200 text-[10px] sm:text-xs md:text-sm mt-3 font-bold uppercase tracking-wider">
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

            {/* Quick Navigation Cards to Dedicated Pages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={onNavigateToChairman}
                className="bg-gradient-to-br from-teal-50 to-white hover:from-teal-100/50 hover:to-teal-50/10 p-5 rounded-2xl border border-teal-100 hover:border-teal-500 cursor-pointer transition-all shadow-sm group flex flex-col justify-between min-h-[160px] pb-4 animate-fade-in"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full uppercase">Leadership Desk</span>
                  <h4 className="font-black text-slate-900 text-sm mt-2 group-hover:text-teal-700 transition-colors">Message from the Chairman</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold line-clamp-2">Dr. Harmesh Kumar's words of inspiration, educational vision, and GSN development.</p>
                </div>
                <span className="text-[11px] font-bold text-teal-700 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Chairman Desk →
                </span>
              </div>
              <div 
                onClick={onNavigateToPrincipal}
                className="bg-gradient-to-br from-teal-50 to-white hover:from-teal-100/50 hover:to-teal-50/10 p-5 rounded-2xl border border-teal-100 hover:border-teal-500 cursor-pointer transition-all shadow-sm group flex flex-col justify-between min-h-[160px] pb-4 animate-fade-in"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full uppercase">Academic Desk</span>
                  <h4 className="font-black text-slate-900 text-sm mt-2 group-hover:text-teal-700 transition-colors">From the Principal's Desk</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold line-clamp-2">Dr. Jasmail Kaur's welcome greetings and guidance on nursing as an honorable, compassionate career.</p>
                </div>
                <span className="text-[11px] font-bold text-teal-700 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Principal Desk →
                </span>
              </div>
            </div>

            {/* INTERACTIVE TEXT BOX MATRIX TABS */}
            <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-inner space-y-6">
              <div className="flex border-b border-slate-200 flex-wrap gap-1 font-mono text-[11px] sm:text-xs font-bold mb-4">
                <button 
                  onClick={() => setActiveSection('overview')}
                  className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'overview' ? 'border-teal-600 text-teal-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                >
                  About GSN
                </button>
                <button 
                  onClick={() => setActiveSection('noc')}
                  className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'noc' ? 'border-teal-600 text-teal-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                >
                  NOC Punjab Govt
                </button>
                <button 
                  onClick={() => setActiveSection('desk')}
                  className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'desk' ? 'border-teal-600 text-teal-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                >
                  Principal Desk
                </button>
                <button 
                  onClick={() => setActiveSection('testimonials')}
                  className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'testimonials' ? 'border-teal-600 text-teal-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                >
                  Verified Reviews
                </button>
              </div>

              {activeSection === 'overview' && (
                <div className="space-y-4 animate-fade-in text-xs md:text-sm font-semibold text-slate-700">
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border shadow-sm space-y-4">
                    <p className="text-justify leading-relaxed">
                      Established in the year 2023, the <strong>Gurukul Institute of Nursing Sciences (GSN)</strong> is approved by the Department of Medical Education & Research, Government of Punjab. We strive to advance the science of health and healthcare through innovative clinical research, dedicated bedside training, and complete laboratory practice equipped with modern healthcare frameworks.
                    </p>
                    <p className="text-justify leading-relaxed">
                      Our vision is to empower young minds with high-quality healthcare education and practical clinical skills, preparing them to meet the challenges of modern medical ecosystems. We are committed to establishing a center of academic excellence that nurtures compassion, professional integrity, and global healthcare standards.
                    </p>
                    
                    <div className="border-t border-slate-100 pt-4">
                      <h5 className="font-black text-slate-900 text-xs uppercase mb-2">🩺 Training Spectrum & Labs</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-3 bg-teal-50/20 border border-slate-200/80 rounded-xl">
                          <h6 className="font-black text-teal-800 text-xs uppercase mb-0.5">HAP Practical Laboratories</h6>
                          <p className="text-[11px] text-slate-500 font-medium">Equipped with modular advanced human anatomy tracking kits, simulation beds, and monitoring grids.</p>
                        </div>
                        <div className="p-3 bg-teal-50/20 border border-slate-200/80 rounded-xl">
                          <h6 className="font-black text-teal-800 text-xs uppercase mb-0.5">Maternal Child Healthcare Unit</h6>
                          <p className="text-[11px] text-slate-500 font-medium">High-fidelity pedagogical dummy systems to practice critical case operations safely.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'noc' && (
                <div className="space-y-4 animate-fade-in text-xs md:text-sm font-semibold text-slate-700">
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border shadow-sm space-y-4">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="text-2xl">📜</span>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm">Official Approvals & NOC Details</h4>
                        <p className="text-[10px] text-slate-400 font-mono font-bold">DEPARTMENT OF MEDICAL EDUCATION & RESEARCH</p>
                      </div>
                    </div>
                    <p className="text-justify leading-relaxed">
                      Gurukul Institute of Nursing Sciences holds the official <strong>No Objection Certificate (NOC)</strong> issued by the Department of Medical Education & Research, Government of Punjab.
                    </p>
                    <p className="text-justify leading-relaxed">
                      All nursing courses (B.Sc Nursing, GNM, and ANM) are conducted under strict adherence to the regulations of:
                    </p>
                    <ul className="space-y-2 pl-1 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">✔</span>
                        <span><strong>Indian Nursing Council (INC)</strong> — The national regulatory body governing nursing education.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">✔</span>
                        <span><strong>Punjab Nurses Registration Council (PNRC)</strong> — The state council ensuring quality and compliance in training.</span>
                      </li>
                    </ul>
                    <div className="p-4 bg-amber-50/50 border border-amber-200/50 rounded-xl text-amber-950 text-xs font-bold">
                      💡 Accredited Training: Our state-approved credentials assure that our graduates are eligible for registration and clinical placement in government and private healthcare services nationwide and overseas.
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'desk' && (
                <div className="space-y-4 animate-fade-in text-xs md:text-sm font-semibold text-slate-700">
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border shadow-sm space-y-4">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="text-2xl">👩‍🏫</span>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm">From the Principal's Desk</h4>
                        <p className="text-[10px] text-slate-400 font-mono font-bold">GURUKUL INSTITUTE OF NURSING SCIENCES</p>
                      </div>
                    </div>
                    <p className="text-justify leading-relaxed italic text-slate-600 font-medium">
                      "Nursing is not just a career; it is a calling of dedicated service, clinical precision, and deep compassion. At Gurukul, we nurture our students to become clinically competent and ethically strong nurses who can lead patient care teams confidently."
                    </p>
                    <p className="text-justify leading-relaxed">
                      Our comprehensive training curriculum is designed to balance theoretical classroom instruction with intensive bedside practical experience. We maintain structural tie-ups with leading multi-specialty hospitals in the region, ensuring our students receive first-hand clinical exposure across diverse medical departments.
                    </p>
                    <div className="pt-2 border-t border-slate-100">
                      <h5 className="font-black text-slate-900 text-xs uppercase leading-none">Prof. (Dr.) Principal</h5>
                      <span className="text-[10px] text-slate-400 font-bold font-mono">Academic Head, GSN Nursing Portal</span>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'testimonials' && (
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

          </div>

          {/* RIGHT SIDEBAR PANEL: THE PREMIUM ADMISSION QUERY CELL */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="border-b pb-3 border-slate-200 mb-4">
                <h3 className="font-black text-slate-900 text-lg tracking-tight">Instant Admission Query</h3>
                <p className="text-slate-400 text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5">Nursing Desk Live Line</p>
                <div className="mt-2.5 font-mono text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200/50 p-3 rounded-2xl space-y-1 shadow-inner">
                  <p className="flex items-center gap-1.5">📞 <span>+91-9675631111</span></p>
                  <p className="flex items-center gap-1.5">📞 <span>+91-9501365511</span></p>
                  <p className="flex items-center gap-1.5 lowercase text-slate-500 hover:text-slate-700 transition-colors mt-1 pt-1 border-t border-slate-200/50">
                    ✉️ <a href="mailto:principalgsn2024@gmail.com">principalgsn2024@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-1.5 lowercase text-slate-500 hover:text-slate-700 transition-colors">
                    ✉️ <a href="mailto:chairmangips@gmail.com">chairmangips@gmail.com</a>
                  </p>
                </div>
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

        {/* Lower Full-Width Sections */}
        <div className="p-6 md:p-10 border-t border-slate-100 space-y-10 bg-slate-50/30">

          {/* Courses Matrix Showcase - Pharmacy-style Interactive Expand/Collapse */}
          <div id="courses-matrix" className="scroll-mt-24">
            <div className="mb-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                Offered Courses Catalog Matrix
              </h3>
              <p className="text-[11px] text-slate-400 font-mono font-bold uppercase tracking-wider mt-1 ml-4.5">
                👉 Click any course card to expand details inline instantly
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {nursingCourses.map((course, idx) => {
                const isSelected = (selectedCourse?.name || selectedCourse) === course.name;
                return (
                  <div key={idx} className="space-y-2">
                    {/* Main Clickable Card Header */}
                    <div
                      onClick={() => setSelectedCourse(isSelected ? null : course)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between shadow-sm relative ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/40 ring-2 ring-teal-600/20'
                          : 'border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-xl bg-slate-50 p-2 rounded-xl border flex-shrink-0 shadow-sm">{course.icon}</span>
                        <div>
                          <h4 className="font-black text-slate-900 text-sm md:text-base leading-snug tracking-tight">
                            {course.displayName || course.name}
                          </h4>
                          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                            ⏱️ Duration: {course.duration}
                          </p>
                        </div>
                      </div>
                      {/* Expand / Collapse arrow */}
                      <div className={`text-slate-400 font-mono text-xs transition-transform duration-300 ${isSelected ? 'rotate-180 text-teal-600 font-black' : ''}`}>
                        ▼
                      </div>
                    </div>

                    {/* INLINE DETAILS PANEL */}
                    {isSelected && (
                      <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-xl animate-fade-in space-y-5 mx-1">
                        {/* Summary Header */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
                          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                            <div>
                              <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">💰 Course Fees</span>
                              <p className="text-teal-400 text-xs sm:text-sm font-black uppercase">{course.fees}</p>
                            </div>
                            <span className="text-xl">💳</span>
                          </div>
                          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                            <div>
                              <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">⏱️ General Duration</span>
                              <p className="text-slate-200 text-xs sm:text-sm font-black uppercase">{course.duration}</p>
                            </div>
                            <span className="text-xl">📅</span>
                          </div>
                        </div>

                        {/* Program specifications */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <h5 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Detailed Program Specifications</h5>
                          </div>

                          {/* Desktop/Tablet view: Premium structured table */}
                          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-950/80 text-slate-400 font-mono text-[9px] uppercase border-b border-slate-800">
                                  <th className="py-3 px-4 text-center font-bold w-12">S.No.</th>
                                  <th className="py-3 px-4 font-bold">Program Name</th>
                                  <th className="py-3 px-4 font-bold">Eligibility Criteria</th>
                                  <th className="py-3 px-4 font-bold w-28">Duration</th>
                                  <th className="py-3 px-4 font-bold">Approved By</th>
                                  <th className="py-3 px-4 font-bold">Affiliated To</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800/60 font-medium">
                                {course.programs.map((prog, pIdx) => (
                                  <tr key={pIdx} className="hover:bg-slate-900/30 transition-colors">
                                    <td className="py-3.5 px-4 text-center font-mono text-slate-500 font-bold">{prog.sno}</td>
                                    <td className="py-3.5 px-4 font-black text-slate-100">{prog.name}</td>
                                    <td className="py-3.5 px-4 text-teal-400 font-semibold leading-relaxed">{prog.eligibility}</td>
                                    <td className="py-3.5 px-4 font-mono text-slate-300">{prog.duration}</td>
                                    <td className="py-3.5 px-4 text-slate-300">{prog.approvedBy}</td>
                                    <td className="py-3.5 px-4 text-slate-300">{prog.affiliatedTo}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view: Stacked detail cards */}
                          <div className="block md:hidden space-y-3">
                            {course.programs.map((prog, pIdx) => (
                              <div key={pIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                                  <span className="text-[9px] font-mono font-bold text-slate-500">PROGRAM #{prog.sno}</span>
                                  <span className="text-xs font-mono font-bold text-teal-400">{prog.duration}</span>
                                </div>
                                <div>
                                  <h6 className="font-black text-slate-100 text-xs sm:text-sm">{prog.name}</h6>
                                </div>
                                <div className="grid grid-cols-1 gap-2 text-[11px] pt-1">
                                  <div>
                                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">🎓 Eligibility:</span>
                                    <p className="text-teal-400 font-bold leading-relaxed">{prog.eligibility}</p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2 border-t border-slate-900/60 pt-2">
                                    <div>
                                      <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">📜 Approved By:</span>
                                      <p className="text-slate-300 font-medium leading-tight">{prog.approvedBy}</p>
                                    </div>
                                    <div>
                                      <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">🏛️ Affiliated To:</span>
                                      <p className="text-slate-300 font-medium leading-tight">{prog.affiliatedTo}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Campus Directory */}
          <CampusDirectory theme="teal" />

        </div>

      </div>
    </div>
  );
}