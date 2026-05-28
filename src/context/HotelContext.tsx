import React, { createContext, useContext, useState, useEffect } from 'react';
import { Suite } from '../data/hotelData';

export type PageId = 'home' | 'suites' | 'dining' | 'events' | 'wellness';
export type Currency = 'NGN' | 'USD';
export type Theme = 'ivory' | 'midnight';

interface HotelContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  theme: Theme;
  toggleTheme: () => void;
  isBookingModalOpen: boolean;
  openBookingModal: (suite?: Suite) => void;
  closeBookingModal: () => void;
  selectedSuite: Suite | null;
  formatPrice: (priceNGN: number, priceUSD: number) => string;
}

const HotelContext = createContext<HotelContextType | undefined>(undefined);

export const HotelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState<Suite | null>(null);

  // Initialize theme from localStorage, default to ivory (bright)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('zuma-theme') as Theme | null;
      if (saved === 'ivory' || saved === 'midnight') return saved;
    }
    return 'ivory';
  });

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme === 'midnight' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('zuma-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'ivory' ? 'midnight' : 'ivory');
  };

  const openBookingModal = (suite?: Suite) => {
    if (suite) {
      setSelectedSuite(suite);
    } else {
      setSelectedSuite(null);
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedSuite(null);
  };

  const formatPrice = (priceNGN: number, priceUSD: number) => {
    if (currency === 'NGN') {
      return `₦${priceNGN.toLocaleString('en-NG')}`;
    } else {
      return `$${priceUSD.toLocaleString('en-US')}`;
    }
  };

  return (
    <HotelContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        currency,
        setCurrency,
        theme,
        toggleTheme,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        selectedSuite,
        formatPrice
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotel must be used within a HotelProvider');
  }
  return context;
};
