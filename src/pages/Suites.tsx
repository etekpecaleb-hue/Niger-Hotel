import React, { useState } from 'react';
import { useHotel } from '../context/HotelContext';
import { SUITES } from '../data/hotelData';
import { 
  BedDouble, 
  Sparkles, 
  Check, 
  MapPin, 
  Users, 
  Maximize2,
  Eye
} from 'lucide-react';

export const Suites: React.FC = () => {
  const { openBookingModal, formatPrice } = useHotel();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Presidential', 'Penthouse', 'Signature', 'Classic'];
  const filteredSuites = activeCategory === 'All' ? SUITES : SUITES.filter(s => s.category === activeCategory);

  return (
    <div className="w-full pt-24 pb-20">
      
      <section className="py-12 bg-base border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <BedDouble className="w-3.5 h-3.5" />
            <span>Residences & Signature Suites</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4">
            Accommodations of <br />
            <span className="gold-gradient-text">Unrivaled Scale</span>
          </h1>

          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Engineered for global heads of state, corporate titans, and discerning private travelers. Featuring smart environmental controls, bullet-resistant private terraces, and round-the-clock dedicated butler teams.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'accent-gradient-bg text-white shadow-md'
                    : 'bg-card text-muted hover:text-primary hover:bg-elevated border border-line'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredSuites.map((suite) => (
              <div 
                key={suite.id}
                className="bg-card border border-line rounded-xl overflow-hidden flex flex-col justify-between group hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img 
                      src={suite.image} 
                      alt={suite.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur text-[10px] font-bold text-accent uppercase tracking-widest">
                        {suite.category}
                      </span>
                      {suite.category === 'Presidential' && (
                        <span className="px-3 py-1 rounded-md accent-gradient-bg text-white text-[10px] font-bold uppercase tracking-widest">
                          Tier-1 Security
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 text-xs text-white/90">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-accent" /> {suite.location}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white group-hover:text-accent transition-colors">
                          {suite.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-white/70 block uppercase">Direct Tariff</span>
                        <span className="font-serif text-xl font-bold text-accent">
                          {formatPrice(suite.priceNGN, suite.priceUSD)}
                        </span>
                        <span className="text-[9px] text-white/70 block">per night</span>
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-3 bg-elevated border-y border-line text-center py-3">
                    <div className="border-r border-line">
                      <span className="text-[9px] text-muted uppercase block">Footprint</span>
                      <span className="text-xs font-bold text-primary flex items-center justify-center gap-1">
                        <Maximize2 className="w-3 h-3 text-accent" /> {suite.size}
                      </span>
                    </div>

                    <div className="border-r border-line">
                      <span className="text-[9px] text-muted uppercase block">Capacity</span>
                      <span className="text-xs font-bold text-primary flex items-center justify-center gap-1">
                        <Users className="w-3 h-3 text-accent" /> {suite.capacity}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] text-muted uppercase block">Primary View</span>
                      <span className="text-xs font-bold text-primary flex items-center justify-center gap-1 truncate px-1">
                        <Eye className="w-3 h-3 text-accent shrink-0" /> {suite.view.split('&')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-secondary leading-relaxed mb-6">
                      {suite.description}
                    </p>

                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                      Exclusive Suite Privileges
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {suite.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-secondary">
                          <div className="w-4 h-4 rounded-full bg-accent-soft flex items-center justify-center text-accent mt-0.5 shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-tight text-[11px]">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="p-6 pt-0 border-t border-line mt-4 flex items-center justify-between gap-4">
                  <div className="text-[10px] text-muted">
                    ✓ Immediate Diplomatic Concierge Route
                  </div>

                  <button
                    onClick={() => openBookingModal(suite)}
                    className="accent-gradient-bg text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
                  >
                    <Sparkles className="w-3 h-3" />
                    Reserve Configuration
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 bg-elevated border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
              Require a Custom Delegation Configuration?
            </h3>
            <p className="text-xs sm:text-sm text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              For complete sovereign buy-outs, dedicated diplomatic floors, or sensitive security cordons, please consult our specialized Nigerian Enterprise Liaison office. We provide multi-suite interconnectivity with military-grade communication isolation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
              <a 
                href="tel:+23494610000" 
                className="bg-card hover:bg-elevated text-primary border border-line px-6 py-3 rounded-full uppercase tracking-wider"
              >
                Direct Delegation Voice Line
              </a>
              
              <button
                onClick={() => openBookingModal()}
                className="accent-gradient-bg text-white px-6 py-3 rounded-full uppercase tracking-wider shadow-md hover:shadow-lg"
              >
                Initiate Sovereign Request
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
