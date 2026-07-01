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
import GsnChairmanPage from './pages/nursing/GsnChairmanPage';
import GsnPrincipalPage from './pages/nursing/GsnPrincipalPage';
import GipsAboutPage from './pages/pharmacy/GipsAboutPage';
import GipsChairmanPage from './pages/pharmacy/GipsChairmanPage';
import GipsDirectorPage from './pages/pharmacy/GipsDirectorPage';
import GipsVisionMissionPage from './pages/pharmacy/GipsVisionMissionPage';
import GipsResultPage from './pages/pharmacy/GipsResultPage';
import ContactUsPage from './pages/ContactUsPage';
import DownloadsPage from './pages/DownloadsPage';
import GrievancePage from './pages/GrievancePage';
import Footer from './components/Footer'; // Premium Shared Global Footer

function App() {
  const [viewState, setViewState] = useState('home');
  const [pharmacyTab, setPharmacyTab] = useState('about');
  const [nursingTab, setNursingTab] = useState('overview');
  const [selectedPharmacyCourse, setSelectedPharmacyCourse] = useState(null);
  const [selectedNursingCourse, setSelectedNursingCourse] = useState(null);

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
          onSelectPharmacyCourse={(courseName) => {
            setViewState('pharmacy');
            setSelectedPharmacyCourse(courseName);
            setTimeout(() => {
              const el = document.getElementById('courses-matrix');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          onSelectNursingCourse={(courseName) => {
            setViewState('nursing');
            setSelectedNursingCourse(courseName);
            setTimeout(() => {
              const el = document.getElementById('courses-matrix');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          onSelectPharmacyResult={() => setViewState('pharmacy-result')}
          onSelectPharmacyDownloads={() => setViewState('pharmacy-downloads')}
          onSelectNursingDownloads={() => setViewState('nursing-downloads')}
          onSelectNursingTab={(tab) => {
            if (tab === 'downloads-page') {
              setViewState('nursing-downloads');
            } else if (tab === 'chairman') {
              setViewState('nursing-chairman');
            } else if (tab === 'principal') {
              setViewState('nursing-principal');
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
              <ProgramGrid
                onSelectPharmacyCourse={(courseName) => {
                  setViewState('pharmacy');
                  setSelectedPharmacyCourse(courseName);
                  setTimeout(() => {
                    const el = document.getElementById('courses-matrix');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                onSelectNursingCourse={(courseName) => {
                  setViewState('nursing');
                  setSelectedNursingCourse(courseName);
                  setTimeout(() => {
                    const el = document.getElementById('courses-matrix');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              />
              
              {/* Dynamic Interactive Tab Notice Board */}
              <UnifiedNotices />
              
              {/* Official Campus Directory Information */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 animate-fade-in relative z-20">
                <CampusDirectory theme="emerald" />
              </div>
              
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
              selectedCourse={selectedPharmacyCourse}
              setSelectedCourse={setSelectedPharmacyCourse}
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

          {viewState === 'pharmacy-result' && (
            <GipsResultPage 
              onBackToPortal={() => setViewState('pharmacy')} 
            />
          )}

          {viewState === 'nursing' && (
            <NursingPortal 
              onBack={() => setViewState('home')} 
              activeSection={nursingTab} 
              setActiveSection={setNursingTab} 
              onNavigateToChairman={() => setViewState('nursing-chairman')}
              onNavigateToPrincipal={() => setViewState('nursing-principal')}
              selectedCourse={selectedNursingCourse}
              setSelectedCourse={setSelectedNursingCourse}
            />
          )}

          {viewState === 'nursing-chairman' && (
            <GsnChairmanPage 
              onBackToPortal={() => setViewState('nursing')} 
            />
          )}

          {viewState === 'nursing-principal' && (
            <GsnPrincipalPage 
              onBackToPortal={() => setViewState('nursing')} 
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

      {/* Shared Global Footer */}
      <Footer 
        setViewState={setViewState} 
        setNursingTab={setNursingTab} 
        setPharmacyTab={setPharmacyTab} 
      />
      
    </div>
  );
}

export default App;