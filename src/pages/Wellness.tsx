import React, { useState } from 'react';
import { WELLNESS_OFFERINGS } from '../data/hotelData';
import { 
  Sparkles, 
  Clock, 
  Check, 
  HeartHandshake, 
  CheckCircle2,
  Calendar,
  Compass
} from 'lucide-react';

export const Wellness: React.FC = () => {
  const [offeringId, setOfferingId] = useState(WELLNESS_OFFERINGS[0].id);
  const [date, setDate] = useState('2026-05-01');
  const [timeSlot, setTimeSlot] = useState('Morning Rejuvenation (09:00 AM)');
  const [guestName, setGuestName] = useState('');
  const [suiteNumber, setSuiteNumber] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  const [isBooked, setIsBooked] = useState(false);
  const [wellnessRef, setWellnessRef] = useState('');

  const handleWellnessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'WELL-' + Math.floor(1000 + Math.random() * 9000);
    setWellnessRef(code);
    setIsBooked(true);
  };

  const handleReset = () => setIsBooked(false);

  return (
    <div className="w-full pt-24 pb-20">
      
      <section className="py-12 bg-base border-b border-line text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Holistic Sanctuary & Heritage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4">
            Rejuvenation Rooted in <br />
            <span className="gold-gradient-text">Nigerian Soil</span>
          </h1>

          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
            A transcendent synthesis of indigenous healing philosophies and elite wellness science. Featuring warm unrefined Ori infusions, private marine expeditions, and museum-grade contemporary art collections.
          </p>

        </div>
      </section>

      <section className="py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {WELLNESS_OFFERINGS.map((item) => (
              <div 
                key={item.id}
                className="bg-card border border-line rounded-xl overflow-hidden flex flex-col justify-between group hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-md bg-white/95 text-[10px] font-bold text-accent uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-white bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/10">
                        <Clock className="w-3 h-3 text-accent" /> {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                      Curated Program Components
                    </span>

                    <ul className="space-y-1">
                      {item.highlights.map((high, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-secondary">
                          <div className="w-4 h-4 rounded-full bg-accent-soft flex items-center justify-center text-accent shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-[11px]">{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="p-6 pt-0 border-t border-line mt-2">
                  <a
                    href="#wellness-concierge"
                    onClick={() => setOfferingId(item.id)}
                    className="w-full bg-elevated hover:bg-accent text-primary hover:text-white border border-line hover:border-accent font-bold py-2.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    Reserve This Sanctuary Offering
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="wellness-concierge" className="py-20 bg-elevated border-t border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-card rounded-2xl overflow-hidden border border-line-accent shadow-md">
            
            <div className="bg-elevated px-8 py-5 border-b border-line">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                Personalized Restoration
              </span>
              <h3 className="font-serif text-lg font-bold text-primary">
                Wellness & Excursion Concierge Scheduling
              </h3>
            </div>

            <div className="p-8">
              
              {isBooked ? (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-1">
                    Sanctuary Reference
                  </span>

                  <div className="text-xl font-mono font-bold text-primary mb-4 bg-elevated py-1.5 px-4 rounded-md border border-line inline-block">
                    {wellnessRef}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-primary mb-2">
                    Session Configured for {guestName || 'Esteemed Guest'}
                  </h4>

                  <p className="text-xs text-secondary max-w-md mx-auto mb-6 leading-relaxed">
                    Your appointment for <strong className="text-primary">{WELLNESS_OFFERINGS.find(w => w.id === offeringId)?.title}</strong> on <strong className="text-primary">{date}</strong> during the <strong className="text-primary">{timeSlot}</strong> slot has been locked. Our therapists or captains will prepare the custom elements in advance.
                  </p>

                  <button
                    onClick={handleReset}
                    className="accent-gradient-bg text-white font-bold px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Schedule Another Treatment
                  </button>
                </div>
              ) : (
                
                <form onSubmit={handleWellnessSubmit} className="space-y-5">
                  
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                      Select Sanctuary or Excursion Core
                    </label>
                    <select
                      value={offeringId}
                      onChange={(e) => setOfferingId(e.target.value)}
                      className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                    >
                      {WELLNESS_OFFERINGS.map((w) => (
                        <option key={w.id} value={w.id}>{w.title} — {w.duration}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
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
                        <Compass className="w-3 h-3 text-accent" /> Preferred Slot
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                      >
                        <option value="Morning Rejuvenation (09:00 AM)">Morning Rejuvenation (09:00 AM)</option>
                        <option value="Midday Zen (12:00 PM)">Midday Zen (12:00 PM)</option>
                        <option value="Afternoon Bliss (03:00 PM)">Afternoon Bliss (03:00 PM)</option>
                        <option value="Sunset Unwind (06:00 PM)">Sunset Unwind (06:00 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Guest Full Name
                      </label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Honorable Mrs. Ezenwa"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Suite / Residence Number (If Checked-in)
                      </label>
                      <input
                        type="text"
                        value={suiteNumber}
                        onChange={(e) => setSuiteNumber(e.target.value)}
                        placeholder="e.g. Penthouse 2401"
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                      Tailored Medical Discretion or Protocol Directives
                    </label>
                    <textarea
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      rows={2}
                      placeholder="Specify preferences: specific therapist gender, severe tension areas, absolute silence policy, custom catering for yacht..."
                      className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                    ></textarea>
                  </div>

                  <div className="pt-3 border-t border-line flex items-center justify-between">
                    <span className="text-[10px] text-muted">
                      * Exclusive private transfer to marina jetty is provided complimentary.
                    </span>

                    <button
                      type="submit"
                      className="accent-gradient-bg text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-md transition-all hover:shadow-lg"
                    >
                      Confirm Scheduling
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
