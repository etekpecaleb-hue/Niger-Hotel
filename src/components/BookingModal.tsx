import React, { useState, useEffect } from 'react';
import { useHotel } from '../context/HotelContext';
import { SUITES } from '../data/hotelData';
import { 
  X, 
  Calendar, 
  Users, 
  ShieldAlert, 
  CheckCircle2,
  Sparkles,
  Plane
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, selectedSuite, formatPrice } = useHotel();
  
  const [suiteId, setSuiteId] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [corporateId, setCorporateId] = useState<string>('');
  
  const [addonArmored, setAddonArmored] = useState<boolean>(false);
  const [addonHelipad, setAddonHelipad] = useState<boolean>(false);
  const [addonChef, setAddonChef] = useState<boolean>(false);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkoutDate = new Date();
    checkoutDate.setDate(checkoutDate.getDate() + 4);

    setCheckIn(tomorrow.toISOString().split('T')[0]);
    setCheckOut(checkoutDate.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (selectedSuite) {
      setSuiteId(selectedSuite.id);
    } else if (SUITES.length > 0 && !suiteId) {
      setSuiteId(SUITES[0].id);
    }
  }, [selectedSuite, isBookingModalOpen]);

  if (!isBookingModalOpen) return null;

  const currentSuite = SUITES.find(s => s.id === suiteId) || SUITES[0];

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 3;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();

  const getAddonPrice = (type: 'armored' | 'helipad' | 'chef') => {
    if (type === 'armored') return { ngn: 350000, usd: 230 };
    if (type === 'helipad') return { ngn: 500000, usd: 330 };
    if (type === 'chef') return { ngn: 200000, usd: 130 };
    return { ngn: 0, usd: 0 };
  };

  let totalNGN = currentSuite.priceNGN * nights;
  let totalUSD = currentSuite.priceUSD * nights;

  if (addonArmored) { totalNGN += getAddonPrice('armored').ngn; totalUSD += getAddonPrice('armored').usd; }
  if (addonHelipad) { totalNGN += getAddonPrice('helipad').ngn; totalUSD += getAddonPrice('helipad').usd; }
  if (addonChef) { totalNGN += getAddonPrice('chef').ngn * nights; totalUSD += getAddonPrice('chef').usd * nights; }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'ZR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-4xl bg-card border border-line-accent rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-elevated border-b border-line">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <h3 className="font-serif text-lg font-bold text-primary">
              {isSubmitted ? 'Diplomatic Suite Secured' : 'Enterprise Suite Reservation'}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full text-muted hover:text-primary hover:bg-sunken transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {isSubmitted ? (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center mb-6 text-accent">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                Booking Reference Code
              </span>
              <div className="text-3xl font-mono font-bold text-primary mb-2 bg-elevated py-2 px-6 rounded-md border border-line inline-block">
                {bookingRef}
              </div>

              <h4 className="font-serif text-2xl font-bold text-primary mt-4 mb-2">
                Welcome to Zuma Royal, {name || 'Esteemed Guest'}
              </h4>
              
              <p className="text-sm text-secondary max-w-md mx-auto mb-8 leading-relaxed">
                Your configuration for the <strong className="text-primary">{currentSuite.name}</strong> has been transmitted to our central diplomatic concierge. A dedicated agent will contact you shortly to confirm diplomatic protocols and transfer logistics.
              </p>

              <div className="bg-elevated border border-line rounded-lg p-4 max-w-md w-full text-left mb-8">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted block">Check-In</span>
                    <span className="text-primary font-medium">{checkIn}</span>
                  </div>
                  <div>
                    <span className="text-muted block">Check-Out</span>
                    <span className="text-primary font-medium">{checkOut}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-muted block">Duration</span>
                    <span className="text-primary font-medium">{nights} Nights</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-muted block">Estimated Total</span>
                    <span className="text-accent font-bold">{formatPrice(totalNGN, totalUSD)}</span>
                  </div>
                </div>

                {(addonArmored || addonHelipad || addonChef) && (
                  <div className="mt-3 pt-3 border-t border-line text-[11px] text-secondary">
                    <span className="text-muted block mb-1">Enterprise Protocol Add-ons:</span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {addonArmored && <li>Armored S-Class Airport Escort</li>}
                      {addonHelipad && <li>Private Helipad Landing Access</li>}
                      {addonChef && <li>24-Hour Dedicated Personal Chef</li>}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={handleReset}
                className="accent-gradient-bg text-white font-bold px-8 py-3 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
              >
                Return to Site
              </button>
            </div>
          ) : (
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form inputs */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                    Select Residence / Suite
                  </label>
                  <select
                    value={suiteId}
                    onChange={(e) => setSuiteId(e.target.value)}
                    className="w-full bg-elevated border border-line rounded-md px-3 py-2.5 text-sm text-primary focus:outline-none focus:border-accent"
                  >
                    {SUITES.map((suite) => (
                      <option key={suite.id} value={suite.id}>
                        {suite.name} — {formatPrice(suite.priceNGN, suite.priceUSD)} / night
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-accent" /> Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full bg-elevated border border-line rounded-md px-2.5 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-accent" /> Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full bg-elevated border border-line rounded-md px-2.5 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 flex items-center gap-1">
                      <Users className="w-3 h-3 text-accent" /> Total Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-elevated border border-line rounded-md px-2.5 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="border-t border-line pt-4 mt-1">
                  <h5 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                    Principal Guest Credentials
                  </h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-muted mb-1">Full Legal Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Chief Jonathan O. Nwachukwu"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-muted mb-1">Secure Email</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="direct@enterprise-holdings.ng"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-muted mb-1">Direct Secure Line / Phone</label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 803 000 0000"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-muted mb-1">Corporate Verification ID / Embassy Voucher (Optional)</label>
                      <input 
                        type="text" 
                        value={corporateId}
                        onChange={(e) => setCorporateId(e.target.value)}
                        placeholder="e.g. ECOWAS-DIPLOMAT-2026 or NNPC-EXEC"
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-line pt-4 mt-1">
                  <h5 className="text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" /> High-Security Enterprise Protocol
                  </h5>
                  
                  <div className="space-y-2.5">
                    {[
                      { id: 'armored', state: addonArmored, setState: setAddonArmored, title: 'Armored Mercedes S-Class Airport Protocol', desc: 'Trained escort unit from Nnamdi Azikiwe or Murtala Muhammed International directly to the private VIP loading bay.', price: '+₦350,000 / +$230' },
                      { id: 'helipad', state: addonHelipad, setState: setAddonHelipad, title: 'Private Helipad Landing Access', desc: 'Direct clearance for rotary wing aircraft with immediate priority clearance and elevator reception.', price: '+₦500,000 / +$330' },
                      { id: 'chef', state: addonChef, setState: setAddonChef, title: 'Dedicated Master Chef (Per Day)', desc: 'Personal culinary specialist preparing bespoke dietary menus directly inside your suite\'s private kitchen.', price: '+₦200,000 / +$130 / day' }
                    ].map((addon) => (
                      <label key={addon.id} className="flex items-start gap-3 p-3 rounded-lg bg-elevated border border-line cursor-pointer hover:border-accent transition-colors">
                        <input 
                          type="checkbox" 
                          checked={addon.state} 
                          onChange={(e) => addon.setState(e.target.checked)}
                          className="mt-0.5 accent-[var(--accent)] rounded"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-xs font-semibold text-primary">{addon.title}</span>
                            <span className="text-xs font-bold text-accent">{addon.price}</span>
                          </div>
                          <p className="text-[10px] text-muted mt-0.5">{addon.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Pricing Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-elevated border border-line rounded-xl p-5">
                
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary mb-3 pb-2 border-b border-line">
                    Configuration Assessment
                  </h4>

                  <div className="relative rounded-lg overflow-hidden h-32 mb-3">
                    <img 
                      src={currentSuite.image} 
                      alt={currentSuite.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[10px] accent-gradient-bg text-white px-2 py-0.5 rounded-full font-bold uppercase">
                        {currentSuite.category}
                      </span>
                      <div className="text-xs font-serif font-bold text-white truncate mt-1">
                        {currentSuite.name}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-muted">
                      <span>Wing / Location</span>
                      <span className="text-primary font-medium">{currentSuite.location}</span>
                    </div>
                    <div className="flex justify-between text-muted">
                      <span>Suite Footprint</span>
                      <span className="text-primary">{currentSuite.size}</span>
                    </div>
                    <div className="flex justify-between text-muted">
                      <span>Base Rate</span>
                      <span className="text-primary">{formatPrice(currentSuite.priceNGN, currentSuite.priceUSD)} / night</span>
                    </div>
                    <div className="flex justify-between text-muted">
                      <span>Duration</span>
                      <span className="text-primary">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                    </div>

                    <div className="pt-2 mt-2 border-t border-line space-y-1">
                      <div className="flex justify-between text-muted">
                        <span>Base Total</span>
                        <span className="text-primary">
                          {formatPrice(currentSuite.priceNGN * nights, currentSuite.priceUSD * nights)}
                        </span>
                      </div>

                      {(addonArmored || addonHelipad || addonChef) && (
                        <div className="flex justify-between text-accent text-[11px] font-medium">
                          <span>Protocol Add-ons</span>
                          <span>
                            +{formatPrice(
                              totalNGN - (currentSuite.priceNGN * nights),
                              totalUSD - (currentSuite.priceUSD * nights)
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line">
                    <span className="text-[10px] uppercase font-bold text-muted block mb-1">
                      Included Premium Amenities:
                    </span>
                    <ul className="text-[10px] text-secondary space-y-1">
                      {currentSuite.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-accent flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-accent/30">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-muted font-bold">
                      Estimated Grand Total
                    </span>
                    <span className="text-xl font-serif font-bold text-accent">
                      {formatPrice(totalNGN, totalUSD)}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full accent-gradient-bg text-white font-bold py-3 px-4 rounded-full text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <Plane className="w-4 h-4" />
                    Secure Suite Configuration
                  </button>

                  <p className="text-[9px] text-center text-muted mt-2">
                    No immediate credit card hold required. Authorized direct enterprise invoice will follow via diplomatic courier.
                  </p>
                </div>

              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
