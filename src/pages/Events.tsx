import React, { useState } from 'react';
import { EVENT_SPACES } from '../data/hotelData';
import { 
  CalendarCheck, 
  Users, 
  Maximize2, 
  Sparkles, 
  CheckCircle,
  FileSpreadsheet,
  Send
} from 'lucide-react';

export const Events: React.FC = () => {
  const [eventType, setEventType] = useState('Corporate Convention');
  const [spaceId, setSpaceId] = useState(EVENT_SPACES[0].id);
  const [attendees, setAttendees] = useState(250);
  const [targetDate, setTargetDate] = useState('2026-06-15');
  const [duration, setDuration] = useState('Full Day');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');

  const [isRfpSubmitted, setIsRfpSubmitted] = useState(false);
  const [rfpRef, setRfpRef] = useState('');

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'RFP-NG-' + Math.floor(10000 + Math.random() * 90000);
    setRfpRef(code);
    setIsRfpSubmitted(true);
  };

  const handleReset = () => setIsRfpSubmitted(false);

  return (
    <div className="w-full pt-24 pb-20">
      
      <section className="py-12 bg-base border-b border-line text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Diplomatic Conclaves & Conventions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4">
            State Banquets & <br />
            <span className="gold-gradient-text">Enterprise Venues</span>
          </h1>

          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
            The undisputed benchmark for high-level governance briefings, corporate shareholder conventions, and prestigious high-society Owambe celebrations across sub-Saharan Africa.
          </p>

        </div>
      </section>

      <section className="py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {EVENT_SPACES.map((space) => (
              <div 
                key={space.id}
                className="bg-card border border-line rounded-xl overflow-hidden flex flex-col justify-between group hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={space.image} 
                      alt={space.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md bg-white/95 text-[10px] font-bold text-accent uppercase tracking-widest">
                        {space.type} Venue
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {space.name}
                      </h3>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 bg-elevated border-y border-line text-center py-3.5">
                    <div className="border-r border-line">
                      <span className="text-[9px] text-muted uppercase block">Maximum Scale</span>
                      <span className="text-xs font-bold text-primary flex items-center justify-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-accent" /> {space.capacity} Delegates
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] text-muted uppercase block">Spatial Footprint</span>
                      <span className="text-xs font-bold text-primary flex items-center justify-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-accent" /> {space.sizeSqM} Square Meters
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-secondary leading-relaxed mb-6">
                      {space.description}
                    </p>

                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Technical & Protocol Infrastructure
                    </span>

                    <ul className="space-y-2">
                      {space.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-secondary">
                          <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="p-6 pt-0 border-t border-line mt-4">
                  <a
                    href="#rfp-portal"
                    onClick={() => setSpaceId(space.id)}
                    className="w-full bg-elevated hover:bg-accent text-primary hover:text-white border border-line hover:border-accent font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    Select Venue for RFP Configuration
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="rfp-portal" className="py-20 bg-elevated border-t border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-card rounded-2xl overflow-hidden border border-line-accent shadow-md">
            
            <div className="bg-elevated px-8 py-5 border-b border-line">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                Direct Enterprise Liaison
              </span>
              <h3 className="font-serif text-xl font-bold text-primary">
                Request for Proposal (RFP) Transmission Portal
              </h3>
            </div>

            <div className="p-8">
              
              {isRfpSubmitted ? (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-1">
                    Enterprise Docket Active
                  </span>

                  <div className="text-2xl font-mono font-bold text-primary mb-4 bg-elevated py-2 px-6 rounded-md border border-line inline-block">
                    {rfpRef}
                  </div>

                  <h4 className="font-serif text-xl font-bold text-primary mb-2">
                    RFP Transmitted Successfully
                  </h4>

                  <p className="text-xs text-secondary max-w-lg mx-auto mb-6 leading-relaxed">
                    Your request for the <strong className="text-primary">{eventType}</strong> hosting <strong className="text-primary">{attendees} delegates</strong> at the <strong className="text-primary">{EVENT_SPACES.find(s => s.id === spaceId)?.name}</strong> has been logged. Our specialized Nigerian Event Coordination Unit will respond with an official diplomatic quote within 3 hours.
                  </p>

                  <button
                    onClick={handleReset}
                    className="accent-gradient-bg text-white font-bold px-8 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Submit Additional Specifications
                  </button>
                </div>
              ) : (
                
                <form onSubmit={handleRfpSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Classification of Gathering
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                      >
                        <option value="Corporate Convention">Corporate Convention / AGM</option>
                        <option value="State Diplomatic Banquet">State Diplomatic Banquet</option>
                        <option value="High-Society Owambe Wedding">High-Society Owambe Wedding</option>
                        <option value="Executive Boardroom Briefing">Executive Boardroom Briefing</option>
                        <option value="Product Launch / Gala">Product Launch / Gala</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Target Imperial Space
                      </label>
                      <select
                        value={spaceId}
                        onChange={(e) => setSpaceId(e.target.value)}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                      >
                        {EVENT_SPACES.map((s) => (
                          <option key={s.id} value={s.id}>{s.name} (Max: {s.capacity})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Estimated Delegation Scale
                      </label>
                      <input
                        type="number"
                        value={attendees}
                        onChange={(e) => setAttendees(Number(e.target.value))}
                        min="5"
                        max="1500"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Proposed Schedule
                      </label>
                      <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Required Access Duration
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent font-medium"
                      >
                        <option value="Half Day (4 Hours)">Half Day (4 Hours)</option>
                        <option value="Full Day">Full Day (8-12 Hours)</option>
                        <option value="Multi-Day Convention">Multi-Day Sovereign Buy-Out</option>
                        <option value="Evening Gala">Evening Gala Protocol</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Sponsoring Entity / Corporation
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Dangote Group / ECOWAS / MTN"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Authorized Principal Liaison
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Dr. Amina Bello"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Secure Email Routing
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="liaison@enterprise.com"
                        required
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Direct Secure Phone Line
                      </label>
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
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Specialized Technical & Diplomatic Protocols
                      </label>
                      <textarea
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        rows={3}
                        placeholder="Specify requirements such as: 6-language translation booths, high-speed encrypted satellite uplinks, VIP green rooms, military parking clearance, custom traditional Owambe banquets..."
                        className="w-full bg-elevated border border-line rounded-md px-3 py-2 text-xs text-primary focus:outline-none focus:border-accent"
                      ></textarea>
                    </div>

                  </div>

                  <div className="pt-4 border-t border-line flex items-center justify-between">
                    <span className="text-[10px] text-muted">
                      🔒 All transmissions protected by end-to-end enterprise encryption.
                    </span>

                    <button
                      type="submit"
                      className="accent-gradient-bg text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest shadow-md transition-all flex items-center gap-2 hover:shadow-lg"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Transmit Formal Docket
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
