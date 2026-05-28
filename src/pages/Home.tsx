import React, { useEffect, useRef } from 'react';
import { useHotel } from '../context/HotelContext';
import { ThreeHeroSculpture } from '../components/ThreeHeroSculpture';
import { ThreeKeycardInteractive } from '../components/ThreeKeycardInteractive';
import { SUITES, HOTEL_LOCATIONS, TESTIMONIALS } from '../data/hotelData';
import gsap from 'gsap';
import { 
  Shield, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle,
  Award,
  Globe
} from 'lucide-react';

export const Home: React.FC = () => {
  const { setCurrentPage, openBookingModal, formatPrice } = useHotel();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      });

      gsap.from(".hero-stats", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const featuredSuites = SUITES.slice(0, 3);

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        
        <div className="absolute inset-0 adire-pattern pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hero-glow rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div className="hero-title inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
                <Shield className="w-3.5 h-3.5" />
                <span>Nigeria's Premier Enterprise Hospitality</span>
              </div>

              <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight mb-6">
                Fresh Nigerian <br />
                <span className="gold-gradient-text">Hospitality Refined</span>
              </h1>

              <p className="hero-title text-base sm:text-lg text-secondary max-w-xl mb-8 leading-relaxed">
                Where global diplomacy meets unrivaled enterprise integration. Spanning iconic towers in <strong className="text-primary">Abuja</strong>, <strong className="text-primary">Lagos</strong>, <strong className="text-primary">Calabar</strong>, and <strong className="text-primary">Port Harcourt</strong>.
              </p>

              <div className="hero-title flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full sm:w-auto accent-gradient-bg text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Configure Suite Reservation
                </button>
                
                <button
                  onClick={() => setCurrentPage('suites')}
                  className="w-full sm:w-auto bg-card hover:bg-elevated text-primary border border-line font-semibold px-6 py-4 rounded-full text-xs uppercase tracking-widest transition-all"
                >
                  Explore Residences
                </button>
              </div>

              <div className="hero-stats mt-12 pt-8 border-t border-line grid grid-cols-3 gap-6 w-full max-w-lg">
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-accent">Tier-1</span>
                  <span className="text-[10px] text-muted uppercase tracking-wider block">Diplomatic Security</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-accent">4</span>
                  <span className="text-[10px] text-muted uppercase tracking-wider block">Strategic Domains</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-accent">10Gbps</span>
                  <span className="text-[10px] text-muted uppercase tracking-wider block">Enterprise Fiber</span>
                </div>
              </div>

            </div>

            {/* Right Column: Three.js Sculpture */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-accent/20 animate-spin-slow"></div>
                <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full border border-line"></div>
              </div>

              <ThreeHeroSculpture />

              <div className="mt-2 text-center relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-muted bg-card/80 backdrop-blur px-3 py-1 rounded-full border border-line">
                  Interactive Zuma Crystal Foyer Obelisk
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Scroll Anchor */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-widest text-accent">Scroll to Discover</span>
          <div className="w-4 h-7 rounded-full border-2 border-line flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-accent rounded-full animate-bounce"></div>
          </div>
        </div>

      </section>

      {/* 2. FAST CHECK BAR */}
      <section className="bg-card border-y border-line py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-primary">Instant Protocol Availability</h4>
                <p className="text-xs text-muted">Direct booking integration with real-time clearance.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto flex-1 max-w-3xl">
              <div className="bg-elevated p-2.5 rounded-lg border border-line">
                <span className="text-[9px] text-muted block uppercase">Destination</span>
                <select className="w-full bg-transparent text-xs text-primary font-medium focus:outline-none">
                  <option value="abuja">Abuja Capital Tower</option>
                  <option value="lagos">Lagos Ocean Wing</option>
                  <option value="calabar">Calabar Heritage Sanctuary</option>
                  <option value="ph">Port Harcourt Delta Suites</option>
                </select>
              </div>

              <div className="bg-elevated p-2.5 rounded-lg border border-line">
                <span className="text-[9px] text-muted block uppercase">Check-In</span>
                <input type="date" defaultValue="2026-04-10" className="w-full bg-transparent text-xs text-primary font-medium focus:outline-none" />
              </div>

              <div className="bg-elevated p-2.5 rounded-lg border border-line">
                <span className="text-[9px] text-muted block uppercase">Guests</span>
                <select className="w-full bg-transparent text-xs text-primary font-medium focus:outline-none">
                  <option>2 Guests • 1 Suite</option>
                  <option>4 Guests • 2 Suites</option>
                  <option>Diplomatic Delegation</option>
                </select>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="accent-gradient-bg text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center h-full py-2.5 shadow-sm"
              >
                Verify Status
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NIGERIAN DOMAINS */}
      <section className="py-24 bg-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              Strategic Sovereignty
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
              Four Iconic Locations Across Nigeria
            </h2>
            <p className="text-sm text-secondary">
              Each domain is strategically situated in the nation's most vital political and commercial epicenters, offering bespoke architectures that honor regional heritage while providing state-of-the-art enterprise connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_LOCATIONS.map((loc, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-card border border-line hover:border-accent/40 transition-all duration-300 flex flex-col justify-between h-[380px] shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0">
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 p-5 flex justify-between items-start">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-[10px] font-bold text-accent uppercase tracking-wider">
                    {loc.city}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-accent">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative z-10 p-5 flex flex-col gap-2">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {loc.address}
                  </p>
                  
                  <div className="pt-3 mt-1 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/90">
                      <Phone className="w-3 h-3 text-accent" />
                      <span>{loc.phone.split(' ')[0]}...</span>
                    </div>

                    <button
                      onClick={() => openBookingModal()}
                      className="text-[10px] font-bold uppercase tracking-wider text-accent hover:text-accent-hover inline-flex items-center gap-1 bg-white/90 px-2 py-0.5 rounded-md"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SIGNATURE SUITES PREVIEW */}
      <section className="py-24 bg-elevated border-t border-line relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                The Diplomatic Core
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                Signature Suites & Villas
              </h2>
            </div>
            
            <button
              onClick={() => setCurrentPage('suites')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
            >
              <span>View All Accommodations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSuites.map((suite) => (
              <div 
                key={suite.id}
                className="bg-card rounded-xl overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300 border border-line hover:border-accent/40"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={suite.image} 
                      alt={suite.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 text-[10px] font-bold text-accent uppercase tracking-widest">
                        {suite.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 text-xs font-bold text-primary">
                        {formatPrice(suite.priceNGN, suite.priceUSD)} <span className="text-[9px] text-muted font-normal">/ night</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-muted mb-2">
                      <span>{suite.location}</span>
                      <span>•</span>
                      <span>{suite.size}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {suite.name}
                    </h3>

                    <p className="text-xs text-secondary line-clamp-3 mb-4 leading-relaxed">
                      {suite.description}
                    </p>

                    <ul className="space-y-1 border-t border-line pt-3">
                      {suite.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="text-[11px] text-secondary flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openBookingModal(suite)}
                    className="w-full bg-elevated hover:bg-accent text-primary hover:text-white border border-line hover:border-accent font-bold py-2.5 rounded-full text-xs uppercase tracking-wider transition-all"
                  >
                    Reserve Suite
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE KEYCARD TOKEN */}
      <section className="py-20 bg-base border-t border-line overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-premium rounded-2xl p-8 sm:p-12 relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5">
                <ThreeKeycardInteractive 
                  suiteName="Aso Villa Presidential" 
                  tier="DIPLOMATIC VIP PROTOCOL" 
                />
              </div>

              <div className="lg:col-span-7 flex flex-col gap-4">
                
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Digital Token Access</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                  Your Virtual Key to High Hospitality
                </h2>

                <p className="text-sm text-secondary leading-relaxed">
                  Experience the prestige of our physical credentials. Every guest reserved in our <strong className="text-primary">Presidential</strong> or <strong className="text-primary">Penthouse</strong> tiers receives an encoded RFID Golden Token upon arrival. This grants unhindered automated passage through private dedicated elevators, high-altitude rooftop lounges, and helipad terminals.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { title: 'Biometric Synchronized', desc: 'Pre-authorized security clearance across all Nigerian wings.' },
                    { title: '24/7 Priority Tab', desc: 'Instant direct debit routing to secure enterprise corporate accounts.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center text-accent mt-0.5 text-[10px] font-bold">
                        ✓
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-primary">{item.title}</h5>
                        <p className="text-[10px] text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => openBookingModal()}
                    className="accent-gradient-bg text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md hover:shadow-lg"
                  >
                    Claim Your VIP Access Pass
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. GASTRONOMY & CULTURE */}
      <section className="py-24 bg-card border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                Epicurean Prestige
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                Elevated Pan-African & Intercontinental Gastronomy
              </h2>
              <p className="text-sm text-secondary mb-6 leading-relaxed">
                Our culinary direction is a masterclass in global integration. We elevate ancient Nigerian spices—from native scent leaves to wild Mambilla honey—into state-of-the-art avant-garde plating. 
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Zuma Sky Lounge', desc: 'Suspended on the 24th floor in Lagos, framing the Atlantic with smoked Wagyu and craft Zobo infusions.' },
                  { title: 'The Nok Heritage Grill', desc: 'Featuring 24-hour slow braised wild Guinea Fowl and artisanal stone-baked presentations.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-elevated border border-line">
                    <div className="p-2 rounded-lg bg-accent-soft text-accent mt-0.5 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage('dining')}
                className="bg-elevated hover:bg-accent text-primary hover:text-white border border-line hover:border-accent font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Peruse All Menus & Venues</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600', label: 'Sky Lounge', height: 'h-48 sm:h-64' },
                { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=600', label: 'Nok Heritage', height: 'h-32 sm:h-48' },
                { src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600', label: 'Coastal Fare', height: 'h-32 sm:h-48' },
                { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600', label: 'Imperial Tea', height: 'h-48 sm:h-64' }
              ].map((img, idx) => (
                <div key={idx} className={`rounded-xl overflow-hidden ${img.height} relative group ${idx === 1 || idx === 2 ? 'mt-0' : ''} ${idx % 2 === 1 ? 'mt-8' : ''}`}>
                  <img 
                    src={img.src} 
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-xs font-serif font-bold text-white">{img.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-base border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              Global Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Trusted by Heads of State & Enterprise Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-card border border-line rounded-xl p-8 flex flex-col justify-between relative hover:shadow-md transition-all"
              >
                <span className="absolute top-4 left-4 font-serif text-6xl text-faint pointer-events-none select-none">
                  "
                </span>

                <div className="relative z-10">
                  <p className="text-xs sm:text-sm text-secondary italic leading-relaxed mb-6">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-line">
                  <h4 className="font-serif text-sm font-bold text-primary">{t.author}</h4>
                  <p className="text-[10px] text-accent font-semibold">{t.role}</p>
                  <p className="text-[9px] text-muted uppercase tracking-wider mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card p-2 pr-6 rounded-full border border-line shadow-sm">
              <span className="accent-gradient-bg text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full">
                Secure Priority
              </span>
              <span className="text-xs text-secondary">
                Experience the gold standard firsthand. Book direct for full VIP integration.
              </span>
              <button
                onClick={() => openBookingModal()}
                className="text-xs text-accent hover:text-accent-hover font-bold underline"
              >
                Reserve Now →
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
