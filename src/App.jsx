import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBento from './components/HeroBento';
import GroupStats from './components/GroupStats';
import BentoFacilities from './components/BentoFacilities';
import ProgramGrid from './components/ProgramGrid';
import PharmacyPortal from './pages/PharmacyPortal';
import NursingPortal from './pages/NursingPortal';
import Footer from './components/Footer'; // Premium Shared Global Footer

function App() {
  const [viewState, setViewState] = useState('home');

  return (
    // Flex direction column aur justify-between lagane se footer hamesha screen ke bottom par stick rahega
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
      
      <div>
        {/* --- 🟢 DYNAMIC HEADER NAVBAR --- */}
        <Navbar 
          currentView={viewState}
          onHomeClick={() => setViewState('home')} 
          onSelectPharmacy={() => setViewState('pharmacy')}
          onSelectNursing={() => setViewState('nursing')}
        />
        
        {/* --- 🗺️ NAVIGATION SWITCH MATRIX CORE --- */}
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
            </div>
          )}

          {viewState === 'pharmacy' && (
            <PharmacyPortal onBack={() => setViewState('home')} />
          )}

          {viewState === 'nursing' && (
            <NursingPortal onBack={() => setViewState('home')} />
          )}
        </main>
      </div>

      {/* --- 🛑 GLOBAL PREMIUM TRUST FOOTER BLOCK --- */}
      {/* Ab ye footer teeno jagah (Home, Pharmacy, Nursing) automatic sabse niche render hoga */}
      <Footer setViewState={setViewState} />
      
    </div>
  );
}

export default App;