import React, { useState, useRef } from 'react';
import { getNavigationConfigs } from '../../constants/navigation';

export default function Navbar({ currentView, onHomeClick, onSelectPharmacy, onSelectNursing, onSelectPharmacyTab, onSelectNursingTab, onSelectPharmacyCourse, onSelectPharmacyResult, onSelectPharmacyDownloads, onContactUs }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownIdx, setMobileDropdownIdx] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (idx) => {
    if (timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(idx);
  };

  const getMappedView = (view) => {
    if (view && view.startsWith('pharmacy')) return 'pharmacy';
    if (view && view.startsWith('nursing')) return 'nursing';
    if (view === 'home-contact') return 'home';
    return view;
  };

  const handleSubClick = (subName) => {
    const mapped = getMappedView(currentView);
    if (mapped === 'pharmacy') {
      if (['Bachelor of Pharmacy', 'Diploma Pharmacy', 'M.Pharmacy', 'Paramedical Courses'].includes(subName)) {
        onSelectPharmacyCourse && onSelectPharmacyCourse(subName);
      } else if (subName === 'Vision & Mission') {
        onSelectPharmacyTab && onSelectPharmacyTab('vision');
      } else if (subName === 'Key Features') {
        onSelectPharmacyTab && onSelectPharmacyTab('features');
      } else if (subName === 'Chairman Desk') {
        onSelectPharmacyTab && onSelectPharmacyTab('chairman');
      } else if (subName === 'Director Desk') {
        onSelectPharmacyTab && onSelectPharmacyTab('director');
      } else if (subName === 'About GIPS') {
        onSelectPharmacyTab && onSelectPharmacyTab('about-page');
      } else if (subName === 'Download Links') {
        onSelectPharmacyTab && onSelectPharmacyTab('downloads-page');
      } else {
        onSelectPharmacyTab && onSelectPharmacyTab('about');
      }
    } else if (mapped === 'nursing') {
      if (subName === 'NOC Punjab Govt') {
        onSelectNursingTab && onSelectNursingTab('noc');
      } else if (subName === 'Principal Desk') {
        onSelectNursingTab && onSelectNursingTab('desk');
      } else if (subName === 'Download Links') {
        onSelectNursingTab && onSelectNursingTab('downloads-page');
      } else {
        onSelectNursingTab && onSelectNursingTab('overview');
      }
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const configs = getNavigationConfigs({
    onHomeClick,
    onSelectPharmacy,
    onSelectNursing,
    onContactUs,
    onSelectPharmacyResult,
    onSelectPharmacyDownloads
  });

  const currentConfig = configs[getMappedView(currentView)] || configs.home;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">

      {/* Main Brand Action Navigation Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">

        {/* Dynamic Image Logo & Crest Mounting Component */}
        <div onClick={onHomeClick} className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group select-none">
          {currentConfig.useImageLogo ? (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 p-0.5 shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
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
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${currentConfig.iconBg} border border-slate-200 flex items-center justify-center text-xl shadow-inner font-black transform group-hover:scale-105 transition-transform duration-300`}>
              {currentConfig.icon}
            </div>
          )}

          {/* Typography Profile Block */}
          <div className="max-w-[170px] xs:max-w-[240px] sm:max-w-xs md:max-w-sm">
            <span className="block font-black text-slate-900 text-xs sm:text-sm md:text-base tracking-tight leading-none uppercase group-hover:text-emerald-700 transition-colors truncate">
              {currentConfig.title}
            </span>
            <span className="block text-[8px] sm:text-[9px] font-mono font-black text-slate-400 uppercase tracking-wider mt-1 truncate">
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
              onMouseEnter={() => item.type === 'dropdown' && handleMouseEnter(idx)}
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
                    <a 
                      key={sIdx} 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubClick(sub);
                      }}
                      className="block px-4 py-2.5 text-[11px] font-bold tracking-normal text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-xl transition-colors"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Global CTA Node and Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] sm:text-xs uppercase tracking-wider px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-lg shadow-emerald-600/10 transition-all hover:-translate-y-0.5">
            Admission 2026
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-slate-200/80 text-slate-600 hover:text-emerald-700 hover:bg-slate-50 transition-colors"
            aria-label="Open mobile menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-55 lg:hidden">
          {/* Backdrop blur overlay */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide-in Content Panel */}
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col z-55 animate-slide-in p-6 overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 p-0.5 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={currentConfig.logoSrc}
                    alt="Logo Badge"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23059669' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'/></svg>";
                    }}
                  />
                </div>
                <div>
                  <span className="block font-black text-slate-900 text-xs tracking-tight uppercase leading-none truncate max-w-[150px]">
                    {currentConfig.title}
                  </span>
                  <span className="block text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-1 truncate max-w-[150px]">
                    {currentConfig.subtitle}
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                aria-label="Close mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu List links */}
            <nav className="flex-1 py-6 space-y-4">
              {currentConfig.menu.map((item, idx) => (
                <div key={idx} className="border-b border-slate-50 pb-3 last:border-0">
                  {item.type === 'link' ? (
                    <button
                      onClick={() => {
                        item.action && item.action();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left font-sans text-xs font-black uppercase tracking-wider text-slate-800 hover:text-emerald-700 py-2 block transition-colors cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => setMobileDropdownIdx(mobileDropdownIdx === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left font-sans text-xs font-black uppercase tracking-wider text-slate-800 hover:text-emerald-700 py-2 transition-colors cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className={`text-[9px] text-slate-400 transform transition-transform duration-200 ${mobileDropdownIdx === idx ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      
                      {/* Sub Items (Accordion) */}
                      {mobileDropdownIdx === idx && (
                        <div className="mt-2 pl-4 border-l border-slate-200/80 space-y-2 py-1">
                          {item.subItems.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSubClick(sub);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block text-[11px] font-bold text-slate-500 hover:text-emerald-700 py-1.5 transition-colors"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer Footer Details */}
            <div className="pt-6 border-t border-slate-100 space-y-4 font-mono text-[10px] text-slate-500 font-bold">
              <div className="space-y-2">
                <p className="flex items-center gap-1.5">📞 {currentConfig.phone}</p>
                <p className="flex items-center gap-1.5">✉️ {currentConfig.email}</p>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md cursor-pointer"
              >
                Admission Desk 2026
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}