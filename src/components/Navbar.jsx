import React, { useState, useRef } from 'react';

export default function Navbar({ currentView, onHomeClick, onSelectPharmacy, onSelectNursing }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null)
  const handleMouseEnter = (idx) => {
    if (timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(idx);

  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    },300);
  } 

  // Consolidated global state configurations map matching your exact assets
  const configs = {
    home: {
      stripBg: "from-slate-900 to-slate-950",
      accentText: "text-emerald-400",
      phone: "+91 9675631111, 9501365511",
      email: "chairmangips@gmail.com",
      timing: "Mon - Sat: 09:00 AM - 05:30 PM",
      title: "GURUKUL GROUP OF INSTITUTES",
      subtitle: "Integrated Educational Campus",
      useImageLogo: true,
      logoSrc: "/bannerimage/logo.png",
      menu: [
        { name: "Home Gateway", type: "link", action: onHomeClick },
        { name: "Pharmacy Division", type: "link", action: onSelectPharmacy },
        { name: "Nursing Division", type: "link", action: onSelectNursing }
      ]
    },
    pharmacy: {
      stripBg: "from-emerald-900 to-emerald-950",
      accentText: "text-emerald-300",
      phone: "+91 01628-260511",
      email: "principalgips2017@gmail.com",
      timing: "Mon - Sat: 09:00 AM - 05:00 PM",
      title: "GIPS PHARMACY",
      subtitle: "Pioneering Pharmacy & Paramedical",
      useImageLogo: true,
      logoSrc: "/bannerimage/logo.png", // Mapped to public/bannerimage/logo.png
      menu: [
        { name: "Home Gateway", type: "link", action: onHomeClick },
        { name: "About GIPS", type: "dropdown", subItems: ["Chairman Desk", "Vision & Mission", "Key Features"] },
        { name: "Courses Matrix", type: "dropdown", subItems: ["B.Pharm", "D.Pharm", "B.Sc MLS", "B.Sc OTT", "B.Sc RIT"] },
        { name: "Downloads", type: "dropdown", subItems: ["Syllabus Sheets", "Admission Forms"] }
      ]
    },
    nursing: {
      stripBg: "from-teal-900 to-teal-950",
      accentText: "text-teal-300",
      phone: "+91 9675631111",
      email: "principalgsn2024@gmail.com",
      timing: "Mon - Sat: 09:00 AM - 05:30 PM",
      title: "GSN NURSING",
      subtitle: "Gurukul Institute of Nursing Sciences",
      useImageLogo: true,
      logoSrc: "/bannerimage/logo.png", // Mapped to public/bannerimage/logo (1).png
      menu: [
        { name: "Home Gateway", type: "link", action: onHomeClick },
        { name: "About GSN", type: "dropdown", subItems: ["NOC Punjab Govt", "Chairman Desk", "Principal Desk"] },
        { name: "Nursing Tracks", type: "dropdown", subItems: ["B.Sc Nursing", "GNM", "ANM"] },
        { name: "Downloads", type: "dropdown", subItems: ["Syllabus Links", "Certificates"] }
      ]
    }
  };

  const currentConfig = configs[currentView] || configs.home;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">

      {/* Dynamic Header Info Strip Panel */}
      <div className={`bg-gradient-to-r ${currentConfig.stripBg} text-white text-[11px] font-mono font-bold py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 transition-colors duration-500`}>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <span className={`flex items-center gap-1.5 ${currentConfig.accentText}`}>
            📞 <span className="text-white">{currentConfig.phone}</span>
          </span>
          <span className={`flex items-center gap-1.5 ${currentConfig.accentText}`}>
            ✉️ <span className="text-white">{currentConfig.email}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-80">🕒 {currentConfig.timing}</span>
        </div>
      </div>

      {/* Main Brand Action Navigation Area */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between relative">

        {/* Dynamic Image Logo & Crest Mounting Component */}
        <div onClick={onHomeClick} className="flex items-center space-x-3 cursor-pointer group select-none">
          {currentConfig.useImageLogo ? (
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 p-0.5 shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
              <img
                src={currentConfig.logoSrc}
                alt="Gurukul Institutional Logo Badge"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23059669' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'/></svg>";
                }}
              />
            </div>
          ) : (
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentConfig.iconBg} border border-slate-200 flex items-center justify-center text-xl shadow-inner font-black transform group-hover:scale-105 transition-transform duration-300`}>
              {currentConfig.icon}
            </div>
          )}

          {/* Typography Profile Block */}
          <div>
            <span className="block font-black text-slate-900 text-sm md:text-base tracking-tight leading-none uppercase group-hover:text-emerald-700 transition-colors">
              {currentConfig.title}
            </span>
            <span className="block text-[9px] font-mono font-black text-slate-400 uppercase tracking-wider mt-1">
              {currentConfig.subtitle}
            </span>
          </div>
        </div>

        {/* Mapped Dropdown Navigation Layer Row Links */}
        <nav className="hidden lg:flex items-center space-x-1 font-sans text-xs font-black uppercase tracking-wider text-slate-700">
          {currentConfig.menu.map((item, idx) => (
            <div
              key={idx}
              className="relative p-2"
              onMouseEnter={()=> item.type === 'dropdown' && handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={item.action ? item.action : undefined}
                className="px-3 py-2 rounded-xl transition-all hover:bg-slate-100 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
              >
                <span>{item.name}</span>
                {item.type === 'dropdown' && <span className="text-[9px] text-slate-400">▼</span>}
              </button>

              {item.type === 'dropdown' && activeDropdown === idx && (
                <div className="absolute top-full left-0 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 animate-fade-in divide-y divide-slate-50 mt-1">
                  {item.subItems.map((sub, sIdx) => (
                    <a key={sIdx} href="#" className="block px-4 py-2.5 text-[11px] font-bold tracking-normal text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-xl transition-colors">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Global CTA Node - 🟢 FIXED: EMERALD GREEN THEME */}
        <div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-emerald-600/10 transition-all hover:-translate-y-0.5">
            Admission 2026
          </button>
        </div>

      </div>
    </header>
  );
}