import React, { useState, useEffect } from 'react';

export default function PharmacyPortal({ onBack }) {
  const [activeSection, setActiveSection] = useState('vision');
  const [currentSlide, setCurrentSlide] = useState(0);

  const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", 
  "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

  // 📸 Mapped all the 6 premium pharmacy images you just saved locally
  const sliderImages = [
    "/bannerimage/3770268d63fabfe-d761-4dc0-94ed-57279af1b15f.jpeg",
    "/bannerimage/622362348f64c5739-f0c6-41a8-a8dd-78728691d307.jpeg",
    "/bannerimage/1417907879b72dcce7-1f3a-452d-b78c-bfd90a720f9b.jpeg",
    "/bannerimage/3468276583dfbea27-f2ed-4f5c-922a-7f247cc90a1e.jpeg",
    "/bannerimage/4426590152.jfif",
    "/bannerimage/4933599337.jfif"
  ];

  const courses = [
    { name: "B.Pharm (Bachelor of Pharmacy)", duration: "4 Years", eligibility: "10+2 (PCM/PCB)" },
    { name: "D.Pharmacy (Diploma in Pharmacy)", duration: "2 Years", eligibility: "10+2 (PCM/PCB)" },
    { name: "B.Pharmacy LEET (Lateral Entry)", duration: "3 Years", eligibility: "Diploma in Pharmacy" },
    { name: "B.Sc MLS (Medical Laboratory Sciences)", duration: "3 Years", eligibility: "10+2 (PCB/PCM)" },
    { name: "B.Sc MLS (LEET)", duration: "2 Years", eligibility: "Diploma in MLS" },
    { name: "B.Sc OTT (Operation Theatre Technology)", duration: "3 Years", eligibility: "10+2 (PCB/PCM)" },
    { name: "B.Sc OTT (LEET)", duration: "2 Years", eligibility: "Diploma in OTT" },
    { name: "B.Sc RIT (Radiography & Imaging Technology)", duration: "3 Years", eligibility: "10+2 (PCB/PCM)" },
    { name: "B.Sc RIT (LEET)", duration: "2 Years", eligibility: "Diploma in RIT" }
  ];

  const directory = [
    { role: "Pharmacy Principal", email: "principalgips2017@gmail.com", badge: "Academic Head" },
    { role: "Paramedical Sciences", email: "paramedicalinstiute@gmail.com", badge: "Allied Health" },
    { role: "Society Secretary", email: "s.h.educationalsociety@gmail.com", badge: "Management" },
    { role: "NSDC Skill Cell", email: "shes.skills@gmail.com", badge: "Skill Govt Training" }
  ];

  // Automatic Fading Slider Cycle Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button onClick={onBack} className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm">
            <span>← Back to Campus Gateway</span>
          </button>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase">
            GIPS Academic Core
          </span>
        </div>

        {/* --- 🛑 FIXED: ULTRA-PREMIUM CINEMATIC AUTO-SLIDER ENGINE --- */}
        <div className="relative min-h-[420px] flex items-center bg-slate-950 text-white p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {sliderImages.map((imgUrl, index) => (
              <img
                key={index}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-30 scale-100 z-10 visible' 
                    : 'opacity-0 scale-105 z-0 invisible'
                }`}
                src={imgUrl}
                alt={`GIPS Slide ${index}`}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-transparent z-10" />
          
          <div className="relative z-20 max-w-3xl">
            <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
              Where Passion Meets Pharmacy
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tight leading-tight uppercase drop-shadow-md">
              Gurukul Institute of <br />Pharmaceutical Sciences
            </h1>
            <p className="text-emerald-200 text-xs md:text-sm mt-3 font-bold uppercase tracking-wider">
              Approved by PCI • Affiliated with MRSPTU & PSBTE, Govt. of Punjab
            </p>
          </div>
        </div>

        {/* Affiliations Badges Strip */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-6 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl">⚕️</div>
            <div>
              <h5 className="font-black text-slate-900 text-xs uppercase leading-none">PCI Approved</h5>
              <span className="text-[10px] text-slate-400 font-bold font-mono">Pharmacy Council of India</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl"></div>
            <div>
              <h5 className="font-black text-slate-900 text-xs uppercase leading-none">MRSPTU Affiliated</h5>
              <span className="text-[10px] text-slate-400 font-bold font-mono">Maharaja Ranjit Singh Tech University</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">⚙️</div>
            <div>
              <h5 className="font-black text-slate-900 text-xs uppercase leading-none">PSBTE Recognised</h5>
              <span className="text-[10px] text-slate-400 font-bold font-mono">Punjab State Board Technical Ed.</span>
            </div>
          </div>
        </div>

        {/* Main Workspaces Column Splits */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Grid Content */}
          <div className="lg:col-span-2 space-y-10">
            
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Welcome to GIPS Campus Area</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-semibold">
                GIPS is a well known pharmaceutical institute. Pharmacy is an important arm of the health industry. 
                GIPS provides educational services to study the chemistry of drugs, their origin, procedures for development of drugs, 
                their preparation, dispensing, their effects and eventual use for the prevention and treatment.
              </p>
            </div>

            {/* Strategic Info Tabs */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner">
              <div className="flex border-b border-slate-200 gap-2 font-mono text-xs font-bold mb-6">
                <button onClick={() => setActiveSection('vision')} className={`pb-3 px-4 transition-all border-b-2 ${activeSection === 'vision' ? 'border-emerald-600 text-emerald-700 font-black' : 'border-transparent text-slate-500'}`}>Vision & Mission</button>
                <button onClick={() => setActiveSection('features')} className={`pb-3 px-4 transition-all border-b-2 ${activeSection === 'features' ? 'border-emerald-600 text-emerald-700 font-black' : 'border-transparent text-slate-500'}`}>Key Features</button>
              </div>

              {activeSection === 'vision' ? (
                <div className="space-y-6 animate-fade-in text-xs md:text-sm font-semibold text-slate-700">
                  <div className="bg-white p-4 rounded-xl border shadow-sm">
                    <h4 className="font-black text-emerald-800 uppercase text-xs mb-2">🎯 Our Vision</h4>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>To provide equal opportunities for education to all, ensuring students' willingness to learn.</li>
                      <li>Achievement is given priority over their incapacity or prior academic record.</li>
                      <li>To facilitate accessibility of education to the students to pursue their career goals.</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in text-xs font-bold text-slate-700">
                  <div className="p-4 bg-white rounded-xl border shadow-sm">✨ Experienced management core panels</div>
                  <div className="p-4 bg-white rounded-xl border shadow-sm">🤝 Structural tie-ups with UGC recognized Universities</div>
                  <div className="p-4 bg-white rounded-xl border shadow-sm">⚖️ Courteous, sensitive, and lawful student handling</div>
                </div>
              )}
            </div>

            {/* Courses Matrix Showcase */}
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Offered Courses Catalog Matrix
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 transition-colors shadow-sm">
                    <h4 className="font-black text-slate-900 text-sm mb-1">{course.name}</h4>
                    <div className="flex justify-between text-[11px] font-mono font-bold text-slate-500 mt-2 pt-2 border-t border-slate-100">
                      <span>⏱️ {course.duration}</span>
                      <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">📋 {course.eligibility}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Directory Card */}
            <div className="border border-slate-200/80 rounded-[24px] bg-white p-6 shadow-xl shadow-slate-100">
              <div className="mb-6">
                <h3 className="font-black text-slate-900 text-lg tracking-tight">Departmental Email Directory</h3>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200/60 rounded-xl overflow-hidden bg-slate-50/30">
                {directory.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white hover:bg-slate-50/60 transition-colors gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 hidden sm:block" />
                      <div>
                        <h4 className="font-black text-slate-900 text-sm leading-tight">{item.role}</h4>
                        <span className="inline-block mt-1 font-mono font-bold text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wide">{item.badge}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-2 sm:pt-0">
                      <a href={`mailto:${item.email}`} className="font-mono text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors break-all">{item.email}</a>
                      <span className="text-slate-300 text-xs hidden sm:inline">|</span>
                      <button onClick={() => navigator.clipboard.writeText(item.email)} className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 font-mono bg-emerald-50 px-2.5 py-1 rounded-md">Copy Link</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Enquiry Panel Container */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm sticky top-28">
              <div className="border-b pb-3 border-slate-200 mb-4">
                <h3 className="font-black text-slate-900 text-lg tracking-tight">Instant Admission Query</h3>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Candidate Name</label>
                  <input type="text" placeholder="Enter full name" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Mobile Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-500 font-mono text-xs font-bold">+91</span>
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-2.5 rounded-r-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Select Program</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-bold text-slate-700 bg-white">
                    {courses.map((c, i) => <option key={i}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Select State</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-bold text-slate-700 bg-white">
                    <option value="">Choose State</option>
                    {indianStates.map((st, idx) => <option key={idx} value={st}>{st}</option>)}
                  </select>
                </div>
                <button className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg">Submit Enquiry Sheet</button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}