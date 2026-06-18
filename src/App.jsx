import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBento from './components/HeroBento';
import GroupStats from './components/GroupStats';
import BentoFacilities from './components/BentoFacilities';
import ProgramGrid from './components/ProgramGrid';
import UnifiedNotices from './components/UnifiedNotices'; // Notice board
import PharmacyPortal from './pages/PharmacyPortal';
import NursingPortal from './pages/NursingPortal';

function App() {
  const [viewState, setViewState] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Dynamic Header */}
      <Navbar 
  currentView={viewState}
  onHomeClick={() => setViewState('home')} 
  onSelectPharmacy={() => setViewState('pharmacy')}
  onSelectNursing={() => setViewState('nursing')}
/>
      
      {/* Navigation Switch Matrix Core */}
      {viewState === 'home' && (
        <div className="animate-fade-in">
          <HeroBento 
            onSelectPharmacy={() => setViewState('pharmacy')} 
            onSelectNursing={() => setViewState('nursing')} 
          />
          <GroupStats />
          <BentoFacilities />
          <ProgramGrid />
          
          {/* Dynamic Interactive Tab Notice Board */}
          <UnifiedNotices />
          
          {/* --- ULTRA HIGH-END CLEAN TRUST FOOTER BLOCK --- */}
          <footer className="bg-slate-900 text-slate-400 text-xs font-medium py-12 px-4 border-t border-slate-800 font-sans relative z-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
              <div>
                <h4 className="text-white font-black text-sm tracking-wider uppercase mb-4">Gurukul Campus</h4>
                <p className="leading-relaxed">VPO Badesh Kalan, Khamano, Fatehgarh Sahib, Punjab - 141801</p>
                <p className="mt-3 text-emerald-400 font-bold font-mono">👥 PCI & INC Approved Frameworks</p>
              </div>
              <div>
                <h4 className="text-white font-black text-sm tracking-wider uppercase mb-4">Quick Link Cells</h4>
                <ul className="space-y-2 font-bold">
                  <li><a href="#" onClick={() => setViewState('home')} className="hover:text-white transition-colors">Home Gateway</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Grievance Cell Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Syllabus & Downloads</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black text-sm tracking-wider uppercase mb-4">Admission Helpdesk</h4>
                <p className="font-mono text-white font-bold">📞 +91 9675631111, 9501365511</p>
                <p className="mt-2 font-mono text-slate-400">✉️ chairmangips@gmail.com</p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-slate-500 font-bold">
              <span>© 2026 Gurukul Healthcare Group. All Rights Reserved.</span>
              <span>Designed with React & Tailwind CSS</span>
            </div>
          </footer>
        </div>
      )}

      {viewState === 'pharmacy' && (
        <PharmacyPortal onBack={() => setViewState('home')} />
      )}

      {viewState === 'nursing' && (
        <NursingPortal onBack={() => setViewState('home')} />
      )}
      
    </div>
  );
}

export default App;