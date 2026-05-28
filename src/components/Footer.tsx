import React, { useState } from 'react';
import { useHotel, PageId } from '../context/HotelContext';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Send,
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, openBookingModal } = useHotel();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navLinks: { label: string; id: PageId }[] = [
    { label: 'Discovery & Overview', id: 'home' },
    { label: 'Signature Suites & Villas', id: 'suites' },
    { label: 'Fine Dining & Lounges', id: 'dining' },
    { label: 'State Banquets & Venues', id: 'events' },
    { label: 'Holistic Spa & Excursions', id: 'wellness' }
  ];

  const locations = [
    { city: 'Abuja', tag: 'Capital Tower', address: '1 Constitution Ave, Central Business District' },
    { city: 'Lagos', tag: 'Ocean Wing', address: 'Plot 1042, Eko Atlantic Blvd, Victoria Island' },
    { city: 'Calabar', tag: 'Heritage Sanctuary', address: 'Marina Road, Botanical Creekside' },
    { city: 'Port Harcourt', tag: 'Delta Suites', address: '45 Presidential Blvd, GRA Phase 3' }
  ];

  return (
    <footer className="bg-card border-t border-line text-secondary pt-16 pb-8 relative z-10">
      {/* Accent top decorative bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-line">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-md flex items-center justify-center bg-accent text-white">
                <span className="font-serif font-bold text-lg">Z</span>
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-primary">
                ZUMA ROYAL
              </span>
            </div>
            <p className="text-sm leading-relaxed text-secondary pr-4">
              Setting the uncompromising gold standard for ultra-luxury enterprise hospitality across Nigeria. Delivering private diplomatic suites, integrated corporate fiber backbones, and unparalleled indigenous culinary art.
            </p>
            
            {/* Awards section */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-xs bg-elevated px-2.5 py-1.5 rounded-md border border-line">
                <Award className="w-3.5 h-3.5 text-accent" />
                <span>Best Luxury Hotel West Africa</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs bg-elevated px-2.5 py-1.5 rounded-md border border-line">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>Global Security Tier-1 Approved</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-primary text-sm font-semibold tracking-wider uppercase mb-4 border-l-2 border-accent pl-2">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm hover:text-accent transition-colors inline-flex items-center gap-1 group text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => openBookingModal()}
                  className="text-xs sm:text-sm text-accent hover:text-accent-hover transition-colors font-semibold mt-1 inline-block"
                >
                  Direct Suite Reservation →
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-primary text-sm font-semibold tracking-wider uppercase mb-4 border-l-2 border-accent pl-2">
              Our Domains
            </h4>
            <ul className="flex flex-col gap-3">
              {locations.map((loc, idx) => (
                <li key={idx} className="text-xs">
                  <span className="text-primary font-medium block">{loc.city}</span>
                  <span className="text-muted text-[11px] block">{loc.tag}</span>
                  <span className="text-secondary text-[10px] block truncate">{loc.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Concierge */}
          <div>
            <h4 className="font-serif text-primary text-sm font-semibold tracking-wider uppercase mb-4 border-l-2 border-accent pl-2">
              Executive Club
            </h4>
            <p className="text-xs text-secondary mb-3">
              Subscribe to receive confidential private availability alerts and exclusive epicurean priority access.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="diplomat@enterprise.com"
                  required
                  className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary placeholder-muted focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 accent-gradient-bg text-white px-2.5 rounded-md text-xs transition-colors flex items-center justify-center"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] text-accent animate-fadeIn">
                  ✓ Welcome to the Executive Core.
                </span>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-line flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs text-secondary">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+234 (0) 9 461 0000</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-secondary">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>concierge@zumaroyal.ng</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} Zuma Royal Hotels & Enterprise Residences. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-accent">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-accent">Enterprise Terms</a>
            <span>•</span>
            <a href="#security" className="hover:text-accent">Diplomatic Protocol</a>
          </div>
          <div className="text-[10px] text-faint">
            Proudly reflecting the dynamic strength of Nigeria.
          </div>
        </div>

      </div>
    </footer>
  );
};
