export interface Suite {
  id: string;
  name: string;
  category: 'Presidential' | 'Penthouse' | 'Signature' | 'Classic';
  priceNGN: number;
  priceUSD: number;
  size: string;
  capacity: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  view: string;
  isAvailable: boolean;
}

export interface DiningVenue {
  id: string;
  name: string;
  cuisine: string;
  atmosphere: string;
  image: string;
  description: string;
  signatureDish: string;
  hours: string;
  location: string;
}

export interface EventSpace {
  id: string;
  name: string;
  type: 'Conference' | 'Ballroom' | 'Boardroom' | 'Outdoor';
  capacity: number;
  sizeSqM: number;
  image: string;
  description: string;
  features: string[];
}

export interface WellnessOffering {
  id: string;
  name: string;
  title: string;
  category: 'Spa' | 'Fitness' | 'Culture' | 'Excursion';
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

export const SUITES: Suite[] = [
  {
    id: 'aso-villa-presidential',
    name: 'The Aso Villa Presidential Suite',
    category: 'Presidential',
    priceNGN: 2500000,
    priceUSD: 1650,
    size: '320 m²',
    capacity: '4 Adults',
    location: 'Abuja Capital Tower',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    description: 'Designed for heads of state and global enterprise leaders, this sprawling masterpiece offers breathtaking views of Zuma Rock and the high-rise Abuja skyline. Features a bullet-proof glass private terrace, grand piano, and a 24-hour dedicated butler.',
    features: ['Private Helipad Access', 'Dedicated Diplomatic Security Entry', '12-Seater Mahogany Dining Room', 'Private Hammam & Infinity Plunge Pool', 'Bang & Olufsen State Surround Sound'],
    view: 'Panoramic Abuja Skyline & Zuma Rock',
    isAvailable: true
  },
  {
    id: 'eko-atlantic-penthouse',
    name: 'Eko Atlantic Sky Penthouse',
    category: 'Penthouse',
    priceNGN: 1850000,
    priceUSD: 1200,
    size: '240 m²',
    capacity: '3 Adults',
    location: 'Lagos Victoria Island Wing',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    description: 'Perched on the apex of our Victoria Island tower, this hyper-modern penthouse frames the endless turquoise waters of the Atlantic Ocean. Adorned with curated contemporary Nigerian art and customized automated ambient lighting.',
    features: ['Wraparound Oceanfront Balcony', 'Customized Smart Bar with Premium Spirits', 'Deep Soak Marble Bathtub with Ocean Views', 'Private Elevator Access', 'Curated Art by Master Nigerian Painters'],
    view: 'Direct Atlantic Ocean & Eko Boulevard',
    isAvailable: true
  },
  {
    id: 'olumo-signature-loft',
    name: 'Olumo Rock Signature Loft',
    category: 'Signature',
    priceNGN: 950000,
    priceUSD: 620,
    size: '130 m²',
    capacity: '2 Adults',
    location: 'Abuja Capital Tower',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    description: 'An architectural tribute to Nigeria’s rugged heritage fused with classic European comfort. Features bespoke hand-carved walnut furniture, high ceilings, and rich Adire-inspired velvet tapestries.',
    features: ['Duplex Living Space', 'Walk-in Poliform Dressing Room', 'Nespresso Atelier Station', 'Complimentary Chauffeured S-Class Transfers', 'Premium Access to Executive Club Lounge'],
    view: 'Lush High-brow Maitama District',
    isAvailable: true
  },
  {
    id: 'calabar-creek-suite',
    name: 'Calabar Mangrove Creek Suite',
    category: 'Signature',
    priceNGN: 800000,
    priceUSD: 520,
    size: '110 m²',
    capacity: '2 Adults',
    location: 'Calabar Heritage Wing',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
    description: 'Reflecting the serenity of the old Calabar botanical sanctuaries, this tranquil suite offers natural hardwood flooring, private botanical garden vistas, and world-class organic bath amenities.',
    features: ['Private Botanical Garden Terrace', 'Rainforest Open-Air Shower', 'Hand-loomed Organic Cotton Linens', 'Evening Fresh Tropical Fruit Selection', 'Exclusive Access to the Marina Spa'],
    view: 'Private Botanical Sanctuary & Creek Vistas',
    isAvailable: true
  },
  {
    id: 'ikogosi-serenity-suite',
    name: 'Ikogosi Warm Springs Serenity Suite',
    category: 'Classic',
    priceNGN: 550000,
    priceUSD: 360,
    size: '85 m²',
    capacity: '2 Adults',
    location: 'Lagos Victoria Island Wing',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200',
    description: 'A harmonious blend of minimalist luxury and local warmth. Perfect for executive travelers looking for supreme relaxation after demanding corporate negotiations in Nigeria’s commercial hub.',
    features: ['Ergonomic Executive Workstation', 'High-Speed Fiber Enterprise Wi-Fi', 'King-size Hypoallergenic Mattress', 'Italian Marble Dual Vanities', '24-hour In-room Fine Gastronomy'],
    view: 'Lagos Lagoon & Falomo Bridge View',
    isAvailable: true
  },
  {
    id: 'zuma-prestige-room',
    name: 'Zuma Royal Prestige Room',
    category: 'Classic',
    priceNGN: 400000,
    priceUSD: 260,
    size: '65 m²',
    capacity: '2 Adults',
    location: 'Abuja & Lagos Wings',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200',
    description: 'Setting a new benchmark for entry-level enterprise hospitality, offering extraordinary spatial comfort, sophisticated light timber palettes, and integrated environmental smart controls.',
    features: ['Automated Privacy Curtains', 'Interactive 55" 4K Information Display', 'Premium Minibar with Local Crafted Snacks', 'In-room Safety Deposit with Laptop Charge', 'Turn-down Service with Nigerian Chocolates'],
    view: 'Urban Panorama',
    isAvailable: true
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'zuma-sky-lounge',
    name: 'Zuma Sky Lounge & Fusion Bar',
    cuisine: 'Modern Intercontinental & Craft Mixology',
    atmosphere: 'Ultra-chick, High-altitude Sophistication',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
    description: 'Suspended high above the vibrant energy of Lagos, our flagship lounge commands sweeping sunset views. Enjoy experimental mixology infused with Zobo and local botanicals alongside premium Wagyu sliders.',
    signatureDish: 'Smoked Suya-spiced Lobster Tail with Sweet Potato Mousseline',
    hours: '5:00 PM – 2:00 AM Daily',
    location: '24th Floor, Victoria Island Tower'
  },
  {
    id: 'nok-heritage-grill',
    name: 'The Nok Heritage Grill',
    cuisine: 'Elevated Pan-African Gastronomy',
    atmosphere: 'Opulent Earthy Traditional Glamour',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A culinary homage to the ancient Nok civilization. We transform classic indigenous Nigerian ingredients into avant-garde fine dining presentations served on handcrafted stoneware.',
    signatureDish: '24-Hour Slow Braised Ofada Rice Risotto & Wild Guinea Fowl',
    hours: '12:00 PM – 11:00 PM Daily',
    location: 'Ground Floor, Heritage Wing'
  },
  {
    id: 'calabar-seafood-pavilion',
    name: 'Calabar Seafood Pavilion',
    cuisine: 'Fresh Atlantic & Delta Coastal Fare',
    atmosphere: 'Breezy, Refined Waterfront Dining',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1200',
    description: 'Savor daily catches from the Gulf of Guinea and pristine Niger Delta waters. Featuring interactive live cooking stations, flame-grilled tiger prawns, and rich local aromatics.',
    signatureDish: 'Fisherman’s Pepper Soup Infused with Native Scent Leaves',
    hours: '6:30 AM – 10:30 PM Daily',
    location: 'Lagos Waterfront Promenade'
  },
  {
    id: 'lagosian-tea-room',
    name: 'The Lagosian Imperial Tea Room',
    cuisine: 'Artisanal Pastries, High Tea & Coffee Rarities',
    atmosphere: 'Classic English Heritage meets Royal Afro-Chic',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
    description: 'The premier location for high-level brief meetings and leisurely afternoons. Featuring single-origin coffees from the Mambilla Plateau and masterfully crafted French patisserie.',
    signatureDish: 'Saffron & Honeycomb Infused Mille-Feuille',
    hours: '8:00 AM – 8:00 PM Daily',
    location: 'Main Grand Lobby Foyer'
  }
];

export const EVENT_SPACES: EventSpace[] = [
  {
    id: 'oduduwa-grand-hall',
    name: 'The Oduduwa Grand Imperial Hall',
    type: 'Ballroom',
    capacity: 1200,
    sizeSqM: 1500,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    description: 'The ultimate backdrop for Nigeria’s most prestigious state dinners, lavish high-society Owambe celebrations, and top-tier multinational corporate conventions. Equipped with custom multi-tier gold chandeliers.',
    features: ['Private VVIP Green Rooms', 'Automated Retractable LED Video Walls', 'Translation Booths for 6 Languages', 'Heavy Vehicle Direct Ramp Access', 'Bespoke Custom Banquet Menus']
  },
  {
    id: 'niger-benue-amphitheatre',
    name: 'The Niger-Benue Enterprise Pavilion',
    type: 'Conference',
    capacity: 450,
    sizeSqM: 600,
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=1200',
    description: 'Engineered specifically for high-impact executive seminars, annual general meetings, and global streaming keynotes. Offers flawless acoustic design and premium ergonomic seating.',
    features: ['High-Fidelity Dynamic Sound Reinforcement', 'Integrated 4K Laser Projection Systems', 'Secure Encrypted Global Webcasting', 'Adjoining Executive Breakout Suites', 'Dedicated Dedicated Concierge Team']
  },
  {
    id: 'zuma-boardroom',
    name: 'The Zuma Summit Boardroom',
    type: 'Boardroom',
    capacity: 24,
    sizeSqM: 110,
    image: 'https://images.unsplash.com/photo-1517502884422-41ea6066785e?auto=format&fit=crop&q=80&w=1200',
    description: 'Designed for strict closed-door board of directors meetings and highly sensitive enterprise contract agreements. Outfitted with imported Italian leather seating and an interactive smart table.',
    features: ['Biometric Restricted Entry Access', 'Military-Grade Audio Jamming Capability', 'Built-in Document Digitization Hub', 'Private Butler Pantry', 'Panoramic View of the Capital']
  },
  {
    id: 'eko-lagoon-terrace',
    name: 'Eko Lagoon Sky Terrace',
    type: 'Outdoor',
    capacity: 350,
    sizeSqM: 500,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    description: 'A breathtaking open-air space overlooking the shimmering waters of the Lagos lagoon. Perfect for sunset cocktail receptions, exclusive gala launches, and ultra-luxurious intimate ceremonies.',
    features: ['Integrated Sub-floor Ambient Uplighting', 'Retractable Architectonic Weather Sail', 'Direct Access to Cocktail Mixology Kiosks', 'High-speed Outdoor Wireless Access', 'Valet VIP Drop-off Path']
  }
];

export const WELLNESS_OFFERINGS: WellnessOffering[] = [
  {
    id: 'shea-butter-ritual',
    name: 'The Ancient Ori Shea Butter Renewal',
    title: 'The Ancient Ori Shea Butter Renewal',
    category: 'Spa',
    duration: '120 Minutes',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    description: 'A deeply restorative journey using unrefined, warm traditional Ori (Shea Butter) sourced from master women’s collectives in Niger State, combined with therapeutic hot basalt stones.',
    highlights: ['Traditional Nigerian Botanical Foot Soak', 'Full Body Hot Stone Compression', 'Deep Tissue Shea Infusion Massage', 'Scalp Tension Release Ritual']
  },
  {
    id: 'lekki-lagoon-yacht',
    name: 'Private Enterprise Cruiser to Tarkwa Bay',
    title: 'Private Enterprise Cruiser to Tarkwa Bay',
    category: 'Excursion',
    duration: 'Half Day (4 Hours)',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab9cd8d13?auto=format&fit=crop&q=80&w=1200',
    description: 'Embark on our custom 60-foot luxury motor yacht from our private hotel jetty. Experience the coastal beauty of Lagos with onboard premium catering, dedicated hostess, and private watercrafts.',
    highlights: ['Premium Champagne & Suya Canapé Service', 'Private Mooring at High-End Beach Club', 'High-Speed Jet Ski Attachments', 'Personalized Marine Safety Escorts']
  },
  {
    id: 'art-curation-tour',
    name: 'Masters of Contemporary Nigerian Art',
    title: 'Masters of Contemporary Nigerian Art',
    category: 'Culture',
    duration: '3 Hours',
    image: 'https://images.unsplash.com/photo-1561214115-f2f119cd5e80?auto=format&fit=crop&q=80&w=1200',
    description: 'An exclusive guided exploration led by our resident art historian through the hotel’s private collection of over 400 original works by legendary Nigerian artists like Ben Enwonwu, Bruce Onobrakpeya, and rising contemporary stars.',
    highlights: ['Private After-hours Access to Partner Galleries', 'Curator-led Explanations of Regional Symbolism', 'Exclusive Commemorative Monograph', 'High Tea Service at Conclusion']
  },
  {
    id: 'enterprise-wellness-hub',
    name: 'The Zuma High-Performance Fitness Hub',
    title: 'The Zuma High-Performance Fitness Hub',
    category: 'Fitness',
    duration: 'Accessible 24/7',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    description: 'Equipped with Technogym’s latest Artis line, dedicated Pilates reformer suites, and a fully functional hypoxic room for high-altitude endurance conditioning suited for busy global executives.',
    highlights: ['Personalized Cryotherapy Recovery Sessions', 'Olympic standard Private Training Instructors', 'Customized Macro-nutrient Recovery Shakes', 'Stretching and Zen Meditation Zone']
  }
];

export const TESTIMONIALS = [
  {
    quote: "Hosting our annual Pan-African Telecommunications summit at Zuma Royal was the best enterprise decision we made. The state-of-the-art security, fiber connectivity, and premium Nigerian warmth were beyond world-class.",
    author: "Alhaji Femi O. Adeleke",
    role: "Chairman & CEO, Trans-Sahara Data Corp",
    location: "Lagos, Nigeria"
  },
  {
    quote: "From the awe-inspiring Aso Villa Presidential Suite to the phenomenal smoked Suya lobster at the Sky Lounge, Zuma Royal sets an unrivaled luxury benchmark across sub-Saharan Africa.",
    author: "Lady Victoria Mensah",
    role: "Global Wealth Investment Director",
    location: "London, UK"
  },
  {
    quote: "The exquisite blend of ancient Nigerian art motifs with ultra-modern architectural design makes every corner of this hotel a testament to pure excellence. Truly an oasis for high-level diplomatic retreats.",
    author: "Ambassador Jean-Marc Laurent",
    role: "Special Envoy to ECOWAS",
    location: "Abuja, Nigeria"
  }
];

export const HOTEL_LOCATIONS = [
  {
    city: 'Abuja',
    name: 'Zuma Royal Capital Tower',
    address: '1 Constitution Avenue, Central Business District, Abuja',
    phone: '+234 (0) 9 461 0000',
    image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&q=80&w=600'
  },
  {
    city: 'Lagos',
    name: 'Zuma Royal Ocean Wing',
    address: 'Plot 1042, Eko Atlantic Boulevard, Victoria Island, Lagos',
    phone: '+234 (0) 1 270 8000',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600'
  },
  {
    city: 'Calabar',
    name: 'Zuma Royal Heritage Sanctuary',
    address: 'Marina Road, Botanical Creekside, Calabar, Cross River',
    phone: '+234 (0) 87 220 100',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=600'
  },
  {
    city: 'Port Harcourt',
    name: 'Zuma Royal Delta Suites',
    address: '45 Presidential Boulevard, GRA Phase 3, Port Harcourt',
    phone: '+234 (0) 84 460 500',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600'
  }
];
