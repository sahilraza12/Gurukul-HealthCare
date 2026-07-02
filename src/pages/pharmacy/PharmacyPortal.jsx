import { useState, useEffect } from 'react';
import CampusDirectory from '../../components/shared/CampusDirectory';

export default function PharmacyPortal({ 
  onBack, 
  activeSection: propActiveSection, 
  setActiveSection: propSetActiveSection, 
  onNavigateToAbout, 
  onNavigateToChairman, 
  onNavigateToDirector, 
  onNavigateToVision,
  selectedCourse: propSelectedCourse,
  setSelectedCourse: propSetSelectedCourse
}) {
  const [localActiveSection, setLocalActiveSection] = useState('facilities');
  const activeSection = propActiveSection || localActiveSection;
  const setActiveSection = propSetActiveSection || setLocalActiveSection;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [localSelectedCourse, setLocalSelectedCourse] = useState(null);
  const selectedCourse = propSelectedCourse !== undefined ? propSelectedCourse : localSelectedCourse;
  const setSelectedCourse = propSetSelectedCourse || setLocalSelectedCourse;

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
    { 
      name: "M.Pharmacy", 
      displayName: "M.Pharmacy (Master of Pharmacy)",
      duration: "AS PER GOVT. NORMS", 
      fees: "AS PER GOVT. NORMS",
      icon: "🧪",
      programs: [
        {
          sno: 1,
          name: "M.Pharmacy",
          eligibility: "Candidates usually need a B Pharmacy degree from a recognized institution.",
          duration: "2 Year",
          approvedBy: "AICTE & PCI, New Delhi",
          affiliatedTo: "MRS PTU, Bathinda"
        }
      ]
    },
    { 
      name: "Bachelor of Pharmacy", 
      displayName: "Bachelor of Pharmacy (B.Pharmacy)",
      duration: "AS PER GOVT. NORMS", 
      fees: "AS PER GOVT. NORMS",
      icon: "💊",
      programs: [
        {
          sno: 1,
          name: "B.Pharmacy",
          eligibility: "10+2 Madical/ Non- Medical",
          duration: "4 Year",
          approvedBy: "AICTE & PCI, New Delhi",
          affiliatedTo: "MRS PTU, Bathinda"
        }
      ]
    },
    { 
      name: "Diploma Pharmacy", 
      displayName: "Diploma Pharmacy (D.Pharmacy)",
      duration: "AS PER GOVT NORMS", 
      fees: "AS PER GOVT NORMS",
      icon: "🏥",
      programs: [
        {
          sno: 1,
          name: "D.PHARMACY",
          eligibility: "10+2 MEDICAL/ NON-MEDICAL",
          duration: "2 YEAR",
          approvedBy: "AICTE & PCI, New Delhi",
          affiliatedTo: "PSBTE & IT (Chandigarh)"
        }
      ]
    },
    { 
      name: "Paramedical Courses", 
      displayName: "Paramedical Courses",
      duration: "as per Govt. Norms", 
      fees: "as per Govt. Norms",
      icon: "🔬",
      programs: [
        {
          sno: 1,
          name: "B.Sc. Medical Laboratory Science (MLS)",
          eligibility: "10+2 Medical / Non- Medical",
          duration: "3 Years",
          approvedBy: "PCI & AICTE (New Delhi)",
          affiliatedTo: "MRS PTU, Bathinda"
        },
        {
          sno: 2,
          name: "B.Sc. Operation Theatre (OT)",
          eligibility: "10+2 Medical / Non- Medical",
          duration: "3 Years",
          approvedBy: "PCI & AICTE (New Delhi)",
          affiliatedTo: "MRS PTU, Bathinda"
        },
        {
          sno: 3,
          name: "B.Sc. Radiology",
          eligibility: "10+2 Medical / Non- Medical",
          duration: "3 Years",
          approvedBy: "PCI & AICTE (New Delhi)",
          affiliatedTo: "MRS PTU, Bathinda"
        }
      ]
    }
  ];


  // Automatic Fading Slider Cycle Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Bar */}
        <div className="bg-slate-50 px-4 sm:px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button onClick={onBack} className="group inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer">
            <span>← Back to Campus Gateway</span>
          </button>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase">
            GIPS Academic Core
          </span>
        </div>

        {/* --- 🛑 FIXED: ULTRA-PREMIUM CINEMATIC AUTO-SLIDER ENGINE --- */}
        <div className="relative min-h-[260px] sm:min-h-[340px] md:min-h-[420px] flex items-center bg-slate-950 text-white p-6 sm:p-8 md:p-12 overflow-hidden">
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
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mt-4 tracking-tight leading-tight uppercase drop-shadow-md">
              Gurukul Institute of <br />Pharmaceutical Sciences
            </h1>
            <p className="text-emerald-200 text-[10px] sm:text-xs md:text-sm mt-3 font-bold uppercase tracking-wider">
              Approved by PCI • Affiliated with MRSPTU & PSBTE, Govt. of Punjab
            </p>
          </div>
        </div>

        {/* Affiliations Badges Strip */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12">
          <div className="flex items-center space-x-3 bg-white px-4 sm:px-5 py-3 rounded-xl border shadow-sm flex-1 min-w-[240px] sm:flex-initial">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center flex-shrink-0">
              <img src="/bannerimage/pci.jpg" alt="PCI Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h5 className="font-black text-slate-900 text-xs uppercase leading-none">PCI Approved</h5>
              <span className="text-[10px] text-slate-400 font-bold font-mono">Pharmacy Council of India</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white px-4 sm:px-5 py-3 rounded-xl border shadow-sm flex-1 min-w-[240px] sm:flex-initial">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center flex-shrink-0">
              <img src="/bannerimage/ptu.png" alt="PTU Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h5 className="font-black text-slate-900 text-xs uppercase leading-none">MRSPTU Affiliated</h5>
              <span className="text-[10px] text-slate-400 font-bold font-mono">Maharaja Ranjit Singh Tech University</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white px-4 sm:px-5 py-3 rounded-xl border shadow-sm flex-1 min-w-[240px] sm:flex-initial">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center flex-shrink-0">
              <img src="/bannerimage/psbte.jpg" alt="PSBTE Logo" className="w-full h-full object-contain" />
            </div>
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
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Institutional Profile & Overview</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-semibold text-justify">
                Established as the pioneering pharmaceutical sciences college in the region, GIPS stands as a center of academic excellence and dynamic scientific research.
              </p>
            </div>

            {/* Quick Navigation Cards to Dedicated Pages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={onNavigateToAbout}
                className="bg-gradient-to-br from-emerald-50 to-white hover:from-emerald-100/50 hover:to-emerald-50/10 p-5 rounded-2xl border border-emerald-100 hover:border-emerald-500 cursor-pointer transition-all shadow-sm group flex flex-col justify-between min-h-[160px] pb-4"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">Heritage & History</span>
                  <h4 className="font-black text-slate-900 text-sm mt-2 group-hover:text-emerald-700 transition-colors">About Gurukul Institute of Pharmaceutical Sciences</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold line-clamp-2">Explore the pioneering pharmacy college in Fatehgarh Sahib, established by Dr. Harmesh Kumar.</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Profile Page →
                </span>
              </div>
              <div 
                onClick={onNavigateToChairman}
                className="bg-gradient-to-br from-emerald-50 to-white hover:from-emerald-100/50 hover:to-emerald-50/10 p-5 rounded-2xl border border-emerald-100 hover:border-emerald-500 cursor-pointer transition-all shadow-sm group flex flex-col justify-between min-h-[160px] pb-4"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">Leadership desk</span>
                  <h4 className="font-black text-slate-900 text-sm mt-2 group-hover:text-emerald-700 transition-colors">Message from the Chairman</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold line-clamp-2">Dr. Harmesh Kumar's words of inspiration, scientific vision, and drug discovery milestones.</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Chairman Desk →
                </span>
              </div>
              <div 
                onClick={onNavigateToDirector}
                className="bg-gradient-to-br from-emerald-50 to-white hover:from-emerald-100/50 hover:to-emerald-50/10 p-5 rounded-2xl border border-emerald-100 hover:border-emerald-500 cursor-pointer transition-all shadow-sm group flex flex-col justify-between min-h-[160px] pb-4"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">Executive Desk</span>
                  <h4 className="font-black text-slate-900 text-sm mt-2 group-hover:text-emerald-700 transition-colors">Message from the Director</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold line-clamp-2">Dr. Rohini Dewedi's message on medical excellence, teaching innovation, and entrepreneurship.</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Director Desk →
                </span>
              </div>
              <div 
                onClick={onNavigateToVision}
                className="bg-gradient-to-br from-emerald-50 to-white hover:from-emerald-100/50 hover:to-emerald-50/10 p-5 rounded-2xl border border-emerald-100 hover:border-emerald-500 cursor-pointer transition-all shadow-sm group flex flex-col justify-between min-h-[160px] pb-4"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">Strategic Framework</span>
                  <h4 className="font-black text-slate-900 text-sm mt-2 group-hover:text-emerald-700 transition-colors">Vision, Mission & Quality Policy</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold line-clamp-2">GIPS guiding principles for education, research, innovation and entrepreneurship.</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Vision & Mission →
                </span>
              </div>
            </div>
          </div>

          {/* Right Enquiry Panel Container */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
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

        {/* Strategic Info Tabs - Now Full Width */}
        <div className="px-6 md:px-10 pb-10 space-y-6">
          <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-inner space-y-6">
            <div className="flex border-b border-slate-200 flex-wrap gap-1 font-mono text-[11px] sm:text-xs font-bold">
              <button onClick={() => setActiveSection('facilities')} className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'facilities' ? 'border-emerald-600 text-emerald-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>Academic Facilities</button>
              <button onClick={() => setActiveSection('vision')} className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'vision' ? 'border-emerald-600 text-emerald-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>Vision & Mission</button>
              <button onClick={() => setActiveSection('features')} className={`pb-3 px-3 transition-all border-b-2 cursor-pointer ${activeSection === 'features' ? 'border-emerald-600 text-emerald-700 font-black' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>Key Features</button>
            </div>

            {activeSection === 'facilities' && (
              <div className="space-y-4 animate-fade-in text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                <div className="bg-white p-5 sm:p-6 rounded-2xl border shadow-sm space-y-4">
                  <p className="text-slate-600 font-bold leading-relaxed text-justify">
                    High-tech well equipped labs in the departments of Pharmaceutical Chemistry, pharmaceutics, Pharmacology and Pharmacognosy serve as a strong framework for our graduates to help them develop capabilities to become world class pharmacists and scientists.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-emerald-50/20 border border-slate-200/80 rounded-xl">
                      <h4 className="font-black text-emerald-800 text-xs uppercase mb-1">🧪 Pharmaceutical Chemistry</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Equipped for organic synthesis, analytical chromatography, physical analysis, and molecular docking studies.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/20 border border-slate-200/80 rounded-xl">
                      <h4 className="font-black text-emerald-800 text-xs uppercase mb-1">Formulation (Pharmaceutics)</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Advanced equipment for dosage form development, tablet formulation, dissolution rate analysis, and compounding.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/20 border border-slate-200/80 rounded-xl">
                      <h4 className="font-black text-emerald-800 text-xs uppercase mb-1">⚕️ Pharmacology & Physiology</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Fitted with specialized study models, physiology charts, and simulation software to test drug actions.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/20 border border-slate-200/80 rounded-xl">
                      <h4 className="font-black text-emerald-800 text-xs uppercase mb-1">🌿 Pharmacognosy</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Equipped for herbal extraction, microscopical analysis of crude drugs, and standardization of herbal formulations.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className="space-y-4 animate-fade-in text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                <div className="bg-white p-5 sm:p-6 rounded-2xl border shadow-sm space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h4 className="font-black text-emerald-800 uppercase text-xs mb-2">🎯 Vision</h4>
                    <p className="text-slate-600 text-justify leading-relaxed">
                      To establish as a centre of excellence in education, research, innovation, training and entrepreneurship in pharmaceutical sciences
                    </p>
                  </div>
                  <div className="border-b border-slate-100 pb-4">
                    <h4 className="font-black text-emerald-800 uppercase text-xs mb-2">🚀 Mission</h4>
                    <p className="text-slate-600 text-justify leading-relaxed">
                      To educate and train students in the knowledge and practice of pharmaceutical sciences by providing inspirational learning, research and professional attitude for serving the society globally without compromising on ethics and quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-black text-emerald-800 uppercase text-xs mb-2">⚖️ Quality Policy</h4>
                    <ul className="space-y-3 pl-1 text-slate-600">
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To provide world class infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To provide knowledge through renowned academicians and an ideal environment for research, innovation, consultancy and entrepreneurship.</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To create a scientific, transparent and impartial examination/evaluation system to ensure an ideal certificatio</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To establish strategic relationship with universities, research institutes and leading national & international corporate.</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To develop manufacturing cell simulating cGMP industrial environment to acquaint students with corporate culture.</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To create centre of excellence in pharmaceutical education and research.</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To engage students in learning and grooming as professional leaders in an intellectually challenging and contemporarily diverse environment.</span>
                      </li>
                      <li className="flex items-start gap-2 text-justify leading-relaxed">
                        <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                        <span>To contribute for creation of healthy and sustainable society by involving the students in community service, health and hygiene awareness, sports, cultural activities and environmental protection.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in text-xs font-bold text-slate-700">
                <div className="p-4 bg-white rounded-xl border shadow-sm flex items-center">✨ Experienced management and dedicated research faculty panels</div>
                <div className="p-4 bg-white rounded-xl border shadow-sm flex items-center">🤝 Structural tie-ups with UGC recognized Universities and Industries</div>
                <div className="p-4 bg-white rounded-xl border shadow-sm flex items-center">⚖️ Courteous, sensitive, and lawful student handling policy</div>
                <div className="p-4 bg-white rounded-xl border shadow-sm flex items-center">🏆 Dynamic sports grounds & annual GIPS Pharmacy Cup activities</div>
              </div>
            )}

          </div>
        </div>

        {/* Lower Full-Width Sections */}
        <div className="p-6 md:p-10 border-t border-slate-100 space-y-10 bg-slate-50/30">
          
          {/* Courses Matrix Showcase */}
          <div id="courses-matrix" className="scroll-mt-24">
            <div className="mb-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Offered Courses Catalog Matrix
              </h3>
              <p className="text-[11px] text-slate-400 font-mono font-bold uppercase tracking-wider mt-1 ml-4.5">
                👉 Click any course card to expand details inline instantly
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {courses.map((course, idx) => {
                const isSelected = (selectedCourse?.name || selectedCourse) === course.name;
                
                return (
                  <div key={idx} className="space-y-2">
                    {/* Main Clickable Card Header */}
                    <div 
                      onClick={() => setSelectedCourse(isSelected ? null : course)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between shadow-sm relative ${
                        isSelected 
                          ? 'border-emerald-600 bg-emerald-50/40 ring-2 ring-emerald-600/20' 
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
                      
                      {/* Expand / Collapse Indicator arrow */}
                      <div className={`text-slate-400 font-mono text-xs transition-transform duration-300 ${isSelected ? 'rotate-180 text-emerald-600 font-black' : ''}`}>
                        ▼
                      </div>
                    </div>

                    {/* INLINE DETAILS DROPBOX - Opens right underneath the active card */}
                    {isSelected && (
                      <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-xl animate-fade-in space-y-5 mx-1">
                        {/* Summary Header */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
                          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                            <div>
                              <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">💰 Course Fees</span>
                              <p className="text-emerald-400 text-xs sm:text-sm font-black uppercase">{course.fees}</p>
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
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
                                    <td className="py-3.5 px-4 text-emerald-400 font-semibold leading-relaxed">{prog.eligibility}</td>
                                    <td className="py-3.5 px-4 font-mono text-slate-300">{prog.duration}</td>
                                    <td className="py-3.5 px-4 text-slate-300">{prog.approvedBy}</td>
                                    <td className="py-3.5 px-4 text-slate-300">{prog.affiliatedTo}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view: Stacked details cards */}
                          <div className="block md:hidden space-y-3">
                            {course.programs.map((prog, pIdx) => (
                              <div key={pIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
                                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                                  <span className="text-[9px] font-mono font-bold text-slate-500">PROGRAM #{prog.sno}</span>
                                  <span className="text-xs font-mono font-bold text-emerald-400">{prog.duration}</span>
                                </div>
                                <div>
                                  <h6 className="font-black text-slate-100 text-xs sm:text-sm">{prog.name}</h6>
                                </div>
                                <div className="grid grid-cols-1 gap-2 text-[11px] pt-1">
                                  <div>
                                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">🎓 Eligibility:</span>
                                    <p className="text-emerald-400 font-bold leading-relaxed">{prog.eligibility}</p>
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
          <CampusDirectory theme="emerald" />

        </div>

      </div>
    </div>
  );
}