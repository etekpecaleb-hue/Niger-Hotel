import React, { useState, useEffect, useRef } from 'react';
import { DINING_VENUES } from '../data/hotelData';
import gsap from 'gsap';
import { 
  UtensilsCrossed, 
  Clock, 
  MapPin, 
  Sparkles, 
  ChefHat, 
  CheckCircle2,
  Calendar,
  Users
} from 'lucide-react';

export const Gastronomy: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const [venueId, setVenueId] = useState(DINING_VENUES[0].id);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dietary, setDietary] = useState('');
  
  const [isReserved, setIsReserved] = useState(false);
  const [reserveCode, setReserveCode] = useState('');

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);

    const ctx = gsap.context(() => {
      gsap.from(".gastro-fade", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'TABLE-' + Math.floor(1000 + Math.random() * 9000);
    setReserveCode(code);
    setIsReserved(true);
  };

  const handleReset = () => setIsReserved(false);

  return (
    <div className="w-full pt-24 pb-20">
      
      <section ref={headerRef} className="py-12 bg-base border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="gastro-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Indigenous Culinary Art</span>
          </div>

          <h1 className="gastro-fade font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4">
            The Art of African & <br />
            <span className="gold-gradient-text">Intercontinental Plating</span>
          </h1>

          <p className="gastro-fade text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
            A masterful re-imagining of rich Nigerian heritage ingredients with elite international techniques. Discover hyper-local botanicals, fresh Gulf of Guinea catches, and exclusive high-altitude mixology.
          </p>

        </div>
      </section>

      <section className="py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {DINING_VENUES.map((venue, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={venue.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
              >
                
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-md border border-line group">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md border border-line">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                        Atmosphere
                      </span>
                      <span className="text-xs text-primary font-medium">
                        {venue.atmosphere}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur px-2.5 py-1 rounded-md">
                        <MapPin className="w-3 h-3 text-accent" /> {venue.location}
                      </span>
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur px-2.5 py-1 rounded-md">
                        <Clock className="w-3 h-3 text-accent" /> {venue.hours.split('–')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 flex flex-col gap-4 ${!isEven ? 'lg:order-1' : ''}`}>
                  
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                    <ChefHat className="w-4 h-4" />
                    <span>{venue.cuisine}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                    {venue.name}
                  </h2>

                  <p className="text-sm text-secondary leading-relaxed">
                    {venue.description}
                  </p>

                  <div className="bg-elevated border-l-2 border-accent p-4 rounded-r-lg mt-2">
                    <span className="text-[10px] uppercase font-bold text-accent block mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Signature Culinary Masterpiece
                    </span>
                    <p className="font-serif text-sm font-bold text-primary">
                      {venue.signatureDish}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-muted">
                    <div>
                      <span className="text-faint block uppercase text-[10px]">Attire Protocol</span>
                      <span className="text-primary font-medium">Smart Elegant / Sovereign Formal</span>
                    </div>
                    <div>
                      <span className="text-faint block uppercase text-[10px]">Access Policy</span>
                      <span className="text-primary font-medium">Priority for Hotel Delegates</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="#reservation-section"
                      onClick={() => setVenueId(venue.id)} 
                      className="bg-card hover:bg-elevated text-primary border border-line font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors inline-block"
                    >
                      Request Priority Table ↓
                    </a>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      <section id="reservation-section" className="py-20 bg-elevated border-t border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-card rounded-2xl overflow-hidden border border-line-accent shadow-md">
            
            <div className="bg-elevated px-8 py-5 border-b border-line flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                  Confidential Routing
                </span>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Priority Dining & Lounge Request
                </h3>
              </div>
              
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            <div className="p-8">
              
              {isReserved ? (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-1">
                    Reservation Secured
                  </span>

                  <div className="text-2xl font-mono font-bold text-primary mb-4 bg-elevated py-1.5 px-4 rounded-md border border-line inline-block">
                    {reserveCode}
                  </div>

                  <h4 className="font-serif text-xl font-bold text-primary mb-2">
                    Table Verified for {name || 'Esteemed Patron'}
                  </h4>

                  <p className="text-xs text-secondary max-w-md mx-auto mb-6 leading-relaxed">
                    Your request for <strong className="text-primary">{DINING_VENUES.find(v => v.id === venueId)?.name}</strong> on <strong className="text-primary">{date}</strong> at <strong className="text-primary">{time}</strong> has been assigned to our Maitre d'. 
                  </p>

                  <button
                    onClick={handleReset}
                    className="accent-gradient-bg text-white font-bold px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Book Another Venue
                  </button>
                </div>
              ) : (
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Select Culinary Venue
                      </label>
                      <select 
                        value={venueId}
                        onChange={(e) => setVenueId(e.target.value)}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2.5 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                      >
                        {DINING_VENUES.map((v) => (
                          <option key={v.id} value={v.id}>{v.name} — {v.cuisine}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-accent" /> Target Date
                      </label>
                      <input 
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accent" /> Desired Seating
                      </label>
                      <select 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                      >
                        <option value="12:30">12:30 PM — Premium Lunch</option>
                        <option value="14:00">02:00 PM — Late Lunch / High Tea</option>
                        <option value="18:30">06:30 PM — Early Diplomatic Dinner</option>
                        <option value="19:30">07:30 PM — Prime Sunset Seating</option>
                        <option value="21:00">09:00 PM — Late Executive Dining</option>
                        <option value="22:30">10:30 PM — Sky Lounge Mixology</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 flex items-center gap-1">
                        <Users className="w-3 h-3 text-accent" /> Delegation Count
                      </label>
                      <select 
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Persons'}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Principal Host Name
                      </label>
                      <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Otunba Adedayo"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Direct Secure Phone
                      </label>
                      <input 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 802 000 0000"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Dietary Discretion / Allergies
                      </label>
                      <input 
                        type="text"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        placeholder="e.g. Halal, Severe Peanut Allergy, Vegan"
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                  </div>

                  <div className="pt-4 border-t border-line flex items-center justify-between">
                    <span className="text-[10px] text-muted">
                      * Requests are prioritized by enterprise tier.
                    </span>

                    <button
                      type="submit"
                      className="accent-gradient-bg text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest shadow-md transition-all hover:shadow-lg"
                    >
                      Transmit Request
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
