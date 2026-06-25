import React, { useState } from 'react';
import CampusDirectory from '../components/shared/CampusDirectory';

export default function DownloadsPage({ context, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');

  const contextLabels = {
    home: 'Home',
    pharmacy: 'Pharmacy Portal',
    nursing: 'Nursing Portal'
  };

  const themes = {
    emerald: {
      backBtnHover: 'hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700',
      badge: 'text-emerald-700 bg-emerald-100/80',
      heroBanner: 'from-emerald-950 via-emerald-900/90 to-transparent',
      heroPill: 'bg-emerald-600',
      heroSub: 'text-emerald-200',
      sectionBg: 'bg-emerald-50/30 border-emerald-100',
      dot: 'bg-emerald-600',
      cardHover: 'hover:border-emerald-500 hover:shadow-emerald-50/50',
      btnDownload: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/10'
    },
    teal: {
      backBtnHover: 'hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700',
      badge: 'text-teal-700 bg-teal-100/80',
      heroBanner: 'from-teal-950 via-teal-900/90 to-transparent',
      heroPill: 'bg-teal-600',
      heroSub: 'text-teal-200',
      sectionBg: 'bg-teal-50/30 border-teal-100',
      dot: 'bg-teal-600',
      cardHover: 'hover:border-teal-500 hover:shadow-teal-50/50',
      btnDownload: 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/10'
    }
  };

  const themeKey = context === 'nursing' ? 'teal' : 'emerald';
  const t = themes[themeKey];

  // Document datasets corresponding to the department
  const documents = {
    pharmacy: [
      {
        category: 'Regulatory & Approvals',
        files: [
          { name: 'MRSPTU Affiliation Document', format: 'PDF', url: '/documents/regulatory/mrsptu-affiliation-document.pdf' },
          { name: 'PCI Extension of Approval Letter', format: 'PDF', url: '/documents/regulatory/pci-approval-letter.pdf' },
          { name: 'PCI SIF Report 2024-25', format: 'PDF', url: '/documents/regulatory/pci-sif-report-2024-25.pdf' }
        ]
      },
      {
        category: 'Mandatory Committees & Cells',
        files: [
          { name: 'Admission Cell', format: 'PDF', url: '/documents/committees/admission-cell.pdf' },
          { name: 'Committee for Prevention of Sexual Harassment', format: 'PDF', url: '/documents/committees/sexual-harassment-prevention-committee.pdf' },
          { name: 'Cultural Committee', format: 'PDF', url: '/documents/committees/cultural-committee.pdf' },
          { name: 'First Aid Committee', format: 'PDF', url: '/documents/committees/first-aid-committee.pdf' },
          { name: 'Grievance Redressal Committee', format: 'PDF', url: '/documents/committees/grievance-redressal-committee.pdf' },
          { name: 'Internal Complaints Committee', format: 'PDF', url: '/documents/committees/internal-complaints-committee.pdf' },
          { name: 'Placement & Career Guidance Cell', format: 'PDF', url: '/documents/committees/placement-career-guidance-cell.pdf' },
          { name: 'Prevention of Caste Discrimination Committee', format: 'PDF', url: '/documents/committees/caste-discrimination-prevention-committee.pdf' },
          { name: 'Sports Committee', format: 'PNG', url: '/documents/committees/sports-committee.png' }
        ]
      }
    ],
    nursing: []
  };

  const currentDocs = documents[context] || documents.pharmacy;

  const handleDownload = (file) => {
    if (file.url) {
      alert(`Opening document: ${file.name}`);
      window.open(file.url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Starting download for: ${file.name}`);
    }
  };

  const filteredDocs = currentDocs.map(cat => ({
    ...cat,
    files: cat.files.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(cat => cat.files.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBack} 
            className={`group inline-flex items-center space-x-2 bg-white border border-slate-300 ${t.backBtnHover} text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer`}
          >
            <span>← Back to {contextLabels[context] || 'Home'}</span>
          </button>
          <span className={`text-[10px] font-mono font-bold ${t.badge} px-3 py-1 rounded-full uppercase`}>
            Resource Center
          </span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-slate-950 text-white py-16 px-8 sm:px-12 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 scale-100"
              src="/bannerimage/3468276583dfbea27-f2ed-4f5c-922a-7f247cc90a1e.jpeg"
              alt="GIPS Campus"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-r ${t.heroBanner} z-10`} />
          
          <div className="relative z-20 max-w-3xl space-y-3">
            <span className={`${t.heroPill} text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider`}>
              Documents & Circulars
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Download Links
            </h1>
            <p className={`${t.heroSub} text-xs sm:text-sm font-semibold uppercase tracking-wider`}>
              Access Syllabi, Admission Packets, and Official Affiliation Papers
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Search bar */}
          <div className="max-w-md">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search documents by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white"
              />
              <span className="absolute left-3.5 top-3.5 text-slate-400">🔍</span>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="space-y-8">
            {filteredDocs.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                  {cat.category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.files.map((file, fIdx) => (
                    <div 
                      key={fIdx} 
                      className={`p-5 rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:shadow-lg flex items-center justify-between gap-4 ${t.cardHover}`}
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="font-black text-slate-800 text-sm truncate uppercase tracking-tight">
                          {file.name}
                        </h4>
                        <div className="flex gap-2 items-center text-[10px] font-mono font-bold text-slate-400 mt-2">
                          <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase">
                            {file.format}
                          </span>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleDownload(file)}
                        className={`flex-shrink-0 text-white font-black text-[10px] uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-md hover:-translate-y-0.5 cursor-pointer ${t.btnDownload}`}
                      >
                        ⬇ Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredDocs.length === 0 && (
              <div className="text-center py-12 text-slate-400 font-bold">
                No documents are currently available for this department.
              </div>
            )}
          </div>

          {/* Campus Directory footer info */}
          <CampusDirectory theme={themeKey} />

        </div>

      </div>
    </div>
  );
}
