import React, { useState, useEffect } from 'react';
import { HotelProvider, useHotel } from './context/HotelContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

import { Home } from './pages/Home';
import { Suites } from './pages/Suites';
import { Gastronomy } from './pages/Gastronomy';
import { Events } from './pages/Events';
import { Wellness } from './pages/Wellness';

import { MessageSquare, X, PhoneCall, ShieldAlert } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentPage, theme } = useHotel();
  const [conciergeOpen, setConciergeOpen] = useState(false);

  // Ensure theme is applied on first mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'suites': return <Suites />;
      case 'dining': return <Gastronomy />;
      case 'events': return <Events />;
      case 'wellness': return <Wellness />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-base text-primary flex flex-col relative">
      
      <Navbar />

      <main className="flex-1 flex flex-col">
        {renderPage()}
      </main>

      <BookingModal />

      <Footer />

      {/* Floating Diplomatic Concierge Live Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        
        {conciergeOpen ? (
          <div className="bg-card border border-line-accent rounded-xl p-4 w-72 shadow-xl animate-scaleUp">
            
            <div className="flex items-center justify-between border-b border-line pb-2 mb-3">
              <div className="flex items-center gap-1.5 text-accent">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-serif text-xs font-bold uppercase tracking-wider">Diplomatic Core</span>
              </div>
              <button 
                onClick={() => setConciergeOpen(false)}
                className="text-muted hover:text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-secondary mb-3 leading-relaxed">
              Direct access to our Nigerian Enterprise Liaisons for real-time state protocol, Helipad clearance, and armored VIP escorts.
            </p>

            <div className="space-y-2">
              <a 
                href="tel:+23494610000" 
                className="w-full bg-elevated hover:bg-sunken text-primary border border-line p-2 rounded-md text-[11px] font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-accent" />
                <span>+234 (0) 9 461 0000</span>
              </a>

              <a 
                href="mailto:protocol@zumaroyal.ng" 
                className="w-full accent-gradient-bg text-white p-2 rounded-md text-[11px] font-bold flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow-md"
              >
                <ShieldAlert className="w-3 h-3" />
                <span>Transmit Secure Dossier</span>
              </a>
            </div>

            <div className="mt-3 text-[9px] text-muted text-center">
              Active Coverage: Abuja • Lagos • Calabar • Port Harcourt
            </div>

          </div>
        ) : (
          <button
            onClick={() => setConciergeOpen(true)}
            className="group flex items-center gap-2 bg-card hover:bg-accent border border-line hover:border-accent text-primary hover:text-white px-3.5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            title="Open Direct Diplomatic Concierge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <MessageSquare className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
            <span className="text-xs font-bold tracking-wide">Diplomatic Concierge</span>
          </button>
        )}

      </div>

    </div>
  );
};

export default function App() {
  return (
    <HotelProvider>
      <MainLayout />
    </HotelProvider>
  );
}
