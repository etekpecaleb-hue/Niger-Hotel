import React, { useState, useEffect } from 'react';
import { useHotel, PageId } from '../context/HotelContext';
import { 
  Compass, 
  BedDouble, 
  UtensilsCrossed, 
  CalendarCheck, 
  Sparkles, 
  Menu, 
  X,
  Sun,
  Moon
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, setCurrentPage, 
    currency, setCurrency, 
    theme, toggleTheme,
    openBookingModal 
  } = useHotel();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Discovery', icon: <Compass className="w-4 h-4" /> },
    { id: 'suites', label: 'Accommodations', icon: <BedDouble className="w-4 h-4" /> },
    { id: 'dining', label: 'Gastronomy', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: 'events', label: 'Meetings & Events', icon: <CalendarCheck className="w-4 h-4" /> },
    { id: 'wellness', label: 'Wellness & Culture', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-base/85 backdrop-blur-md py-3 border-b border-line shadow-sm' 
          : 'bg-gradient-to-b from-base/80 via-base/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center bg-accent text-white shadow-sm group-hover:shadow-md transition-all">
              <span className="font-serif font-bold text-lg">Z</span>
            </div>
            <div>
              <div className="font-serif text-lg md:text-xl font-bold tracking-wider text-primary group-hover:text-accent transition-colors">
                ZUMA ROYAL
              </div>
              <div className="text-[9px] uppercase tracking-widest text-accent -mt-1 font-sans font-semibold">
                Nigeria • Enterprise
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium tracking-wide transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-accent bg-accent-soft border-b-2 border-accent' 
                      : 'text-secondary hover:text-primary hover:bg-elevated'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Theme, Currency & Booking Action */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="relative w-9 h-9 rounded-full flex items-center justify-center bg-elevated border border-line hover:border-accent hover:text-accent text-secondary transition-all group"
              aria-label={`Switch to ${theme === 'ivory' ? 'midnight' : 'ivory'} theme`}
              title={`Switch to ${theme === 'ivory' ? 'Midnight' : 'Ivory'} Theme`}
            >
              {theme === 'ivory' ? (
                <Moon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              ) : (
                <Sun className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              )}
            </button>

            {/* Currency Switcher */}
            <div className="relative inline-flex items-center bg-elevated border border-line rounded-full p-0.5">
              <button
                onClick={() => setCurrency('NGN')}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-colors ${
                  currency === 'NGN' 
                    ? 'bg-accent text-white shadow-sm' 
                    : 'text-muted hover:text-primary'
                }`}
              >
                ₦ NGN
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-colors ${
                  currency === 'USD' 
                    ? 'bg-accent text-white shadow-sm' 
                    : 'text-muted hover:text-primary'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Premium CTA */}
            <button
              onClick={() => openBookingModal()}
              className="relative group overflow-hidden rounded-full accent-gradient-bg px-5 py-2.5 text-xs font-semibold tracking-wider text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex items-center gap-1">
                Reserve a Suite
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-elevated border border-line text-accent"
              aria-label="Toggle theme"
            >
              {theme === 'ivory' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Mobile Currency Fast Switcher */}
            <button
              onClick={() => setCurrency(currency === 'NGN' ? 'USD' : 'NGN')}
              className="w-9 h-9 rounded-full text-[11px] font-bold bg-elevated border border-line text-accent"
            >
              {currency === 'NGN' ? '₦' : '$'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary bg-elevated border border-line"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-base border-b border-line px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-3 ${
                    isActive 
                      ? 'text-accent bg-accent-soft font-bold border-l-4 border-accent' 
                      : 'text-secondary hover:text-primary hover:bg-elevated'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-line flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs text-muted uppercase tracking-wider">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-elevated border border-line text-accent"
                >
                  {theme === 'ivory' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                  <span className="text-xs font-bold uppercase">{theme === 'ivory' ? 'Ivory' : 'Midnight'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between px-2">
                <span className="text-xs text-muted uppercase tracking-wider">Currency</span>
                <div className="inline-flex bg-elevated p-1 rounded-full">
                  <button
                    onClick={() => setCurrency('NGN')}
                    className={`px-3 py-1 text-xs font-bold rounded-full ${currency === 'NGN' ? 'bg-accent text-white' : 'text-muted'}`}
                  >
                    ₦ NGN
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 text-xs font-bold rounded-full ${currency === 'USD' ? 'bg-accent text-white' : 'text-muted'}`}
                  >
                    $ USD
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full rounded-full accent-gradient-bg py-3 text-center text-sm font-bold text-white shadow hover:shadow-md"
              >
                Reserve a Suite
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
