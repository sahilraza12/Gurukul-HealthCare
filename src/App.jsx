import React, { useState } from 'react';
import CampusDirectory from './components/shared/CampusDirectory';
import Navbar from './components/layout/Navbar';
import HeroBento from './components/home/HeroBento';
import GroupStats from './components/home/GroupStats';
import BentoFacilities from './components/home/BentoFacilities';
import ProgramGrid from './components/home/ProgramGrid';
import UnifiedNotices from './components/shared/UnifiedNotices'; // Notice board
import PharmacyPortal from './pages/pharmacy/PharmacyPortal';
import NursingPortal from './pages/nursing/NursingPortal';
import GipsAboutPage from './pages/pharmacy/GipsAboutPage';
import GipsChairmanPage from './pages/pharmacy/GipsChairmanPage';
import GipsDirectorPage from './pages/pharmacy/GipsDirectorPage';
import GipsVisionMissionPage from './pages/pharmacy/GipsVisionMissionPage';
import ContactUsPage from './pages/ContactUsPage';
import DownloadsPage from './pages/DownloadsPage';
import GrievancePage from './pages/GrievancePage';
import Footer from './components/Footer'; // Premium Shared Global Footer

function App() {
  const [viewState, setViewState] = useState('home');
  const [pharmacyTab, setPharmacyTab] = useState('about');
  const [nursingTab, setNursingTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
      
      <div>
        {/* Dynamic Header */}
        <Navbar 
          currentView={viewState}
          onHomeClick={() => setViewState('home')} 
          onSelectPharmacy={() => { setViewState('pharmacy'); setPharmacyTab('facilities'); }}
          onSelectNursing={() => { setViewState('nursing'); setNursingTab('overview'); }}
          onSelectPharmacyTab={(tab) => {
            if (tab === 'about-page') {
              setViewState('pharmacy-about');
            } else if (tab === 'chairman') {
              setViewState('pharmacy-chairman');
            } else if (tab === 'director') {
              setViewState('pharmacy-director');
            } else if (tab === 'vision') {
              setViewState('pharmacy-vision');
            } else if (tab === 'downloads-page') {
              setViewState('pharmacy-downloads');
            } else {
              setViewState('pharmacy');
              setPharmacyTab(tab);
            }
          }}
          onSelectNursingTab={(tab) => {
            if (tab === 'downloads-page') {
              setViewState('nursing-downloads');
            } else {
              setViewState('nursing');
              setNursingTab(tab);
            }
          }}
          onContactUs={() => {
            // Determine contact context based on current view
            const mapped = viewState.startsWith('pharmacy') ? 'pharmacy' : viewState.startsWith('nursing') ? 'nursing' : 'home';
            setViewState(`${mapped}-contact`);
          }}
        />
        
        {/* Navigation Switch Matrix Core */}
        <main>
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
              
              {/* Official Campus Directory Information */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 animate-fade-in relative z-20">
                <CampusDirectory theme="emerald" />
              </div>
              
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
                      <li><a href="#" onClick={(e) => { e.preventDefault(); setViewState('home-grievance'); }} className="hover:text-white transition-colors">Grievance Cell Portal</a></li>
                      <li><a href="#" onClick={(e) => { e.preventDefault(); setViewState('pharmacy-downloads'); }} className="hover:text-white transition-colors">Syllabus & Downloads</a></li>
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
            <PharmacyPortal 
              onBack={() => setViewState('home')} 
              activeSection={pharmacyTab} 
              setActiveSection={setPharmacyTab} 
              onNavigateToAbout={() => setViewState('pharmacy-about')}
              onNavigateToChairman={() => setViewState('pharmacy-chairman')}
              onNavigateToDirector={() => setViewState('pharmacy-director')}
              onNavigateToVision={() => setViewState('pharmacy-vision')}
            />
          )}

          {viewState === 'pharmacy-about' && (
            <GipsAboutPage 
              onBackToPortal={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'pharmacy-chairman' && (
            <GipsChairmanPage 
              onBackToPortal={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'pharmacy-director' && (
            <GipsDirectorPage 
              onBackToPortal={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'pharmacy-vision' && (
            <GipsVisionMissionPage 
              onBackToPortal={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'nursing' && (
            <NursingPortal 
              onBack={() => setViewState('home')} 
              activeSection={nursingTab} 
              setActiveSection={setNursingTab} 
            />
          )}

          {viewState === 'home-contact' && (
            <ContactUsPage 
              context="home"
              onBack={() => setViewState('home')} 
            />
          )}

          {viewState === 'pharmacy-contact' && (
            <ContactUsPage 
              context="pharmacy"
              onBack={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'nursing-contact' && (
            <ContactUsPage 
              context="nursing"
              onBack={() => setViewState('nursing')} 
            />
          )}

          {viewState === 'pharmacy-downloads' && (
            <DownloadsPage 
              context="pharmacy"
              onBack={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'nursing-downloads' && (
            <DownloadsPage 
              context="nursing"
              onBack={() => setViewState('nursing')} 
            />
          )}

          {viewState === 'home-grievance' && (
            <GrievancePage 
              context="home"
              onBack={() => setViewState('home')} 
            />
          )}

          {viewState === 'pharmacy-grievance' && (
            <GrievancePage 
              context="pharmacy"
              onBack={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'nursing-grievance' && (
            <GrievancePage 
              context="nursing"
              onBack={() => setViewState('nursing')} 
            />
          )}
        </main>
      </div>
      
    </div>
  );
}

export default App;