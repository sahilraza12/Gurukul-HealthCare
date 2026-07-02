import { useState } from 'react';
export default function UnifiedNotices() {
  const [activeTab, setActiveTab] = useState('all');

  const notices = [
    { id: 1, title: "Admission Open for Session 2026-27", category: "pharmacy", date: "15 June 2026", type: "General" },
    { id: 2, title: "INC Clinical Training Registration Form Available", category: "nursing", date: "12 June 2026", type: "Urgent" },
    { id: 3, title: "B.Sc MLS & OTT Semester Practical Exam Datesheet", category: "pharmacy", date: "10 June 2026", type: "Examination" },
    { id: 4, title: "Grievance Cell Operational Guidelines PDF", category: "all", date: "05 June 2026", type: "Circular" },
    { id: 5, title: "D.Pharmacy Scrutiny & Re-evaluation Forms", category: "pharmacy", date: "02 June 2026", type: "Syllabus/Forms" },
    { id: 6, title: "ANM / GNM Parental Hospital Allocation List", category: "nursing", date: "28 May 2026", type: "Placement" }
  ];

  const filteredNotices = activeTab === 'all' 
    ? notices 
    : notices.filter(n => n.category === activeTab || n.category === 'all');

  return (
    <div className="bg-white py-16 px-4 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="text-emerald-600 font-extrabold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md">
            GIPS & GSN Bulletin
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
            Centralized <span className="text-emerald-600">Notice Board</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2 font-medium">
            Stay updated with recent university announcements, circular sheets, datesheets, and dynamic download links.
          </p>
        </div>

        {/* Tab Switchers Buttons */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 bg-slate-100 p-1.5 rounded-2xl w-full sm:w-fit mx-auto font-mono text-[11px] sm:text-xs font-bold shadow-inner">
          <button onClick={() => setActiveTab('all')} className={`flex-1 sm:flex-initial text-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl transition-all cursor-pointer ${activeTab === 'all' ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>All Bulletin</button>
          <button onClick={() => setActiveTab('pharmacy')} className={`flex-1 sm:flex-initial text-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl transition-all cursor-pointer ${activeTab === 'pharmacy' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-emerald-600'}`}>Pharmacy / Para</button>
          <button onClick={() => setActiveTab('nursing')} className={`flex-1 sm:flex-initial text-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl transition-all cursor-pointer ${activeTab === 'nursing' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-emerald-600'}`}>Nursing (GSN)</button>
        </div>

        {/* Bulletins List mapping rendering */}
        <div className="space-y-3 bg-slate-50/50 p-4 border border-slate-200/60 rounded-3xl shadow-sm">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="p-4 bg-white border border-slate-200/80 hover:border-emerald-500 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors group cursor-pointer shadow-sm">
              <div className="flex items-start sm:items-center gap-3">
                <span className="text-[10px] font-mono font-black uppercase px-2 py-1 rounded bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 min-w-[90px] text-center">
                  {notice.type}
                </span>
                <p className="text-slate-800 text-xs md:text-sm font-semibold tracking-tight group-hover:text-emerald-600 transition-colors">
                  {notice.title}
                </p>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 font-mono text-[11px] text-slate-400 font-bold">
                <span>📅 {notice.date}</span>
                <span className="text-emerald-600 hover:underline">Download 📥</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}