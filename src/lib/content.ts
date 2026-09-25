export const androidApkUrl =
  "https://raw.githubusercontent.com/mattwesthead78-code/Caboguestsolutions/main/attachments/CaboGuestSolutions_v3.apk";

export const androidApkLocal = "/downloads/CaboGuestSolutions.apk";

export const company = {
  name: "CaboGuest Solutions",
  short: "CaboGuest",
  location: "Cabo San Lucas",
  region: "Los Cabos, Mexico",
  eyebrow: "Cabo San Lucas · Native Android & iOS",
  tagline: "Guest software, built like the property.",
  lede: "We design white-label guest apps for five-star hotels, private villas, restaurants, yachts, spas, and boutiques. Not a template. A suite with your name on it.",
  mission:
    "High-end businesses deserve software that reflects their brand's elegance. We don't ship generic templates — we design custom, zero-friction mobile ecosystems that streamline the guest experience, lift staff efficiency, and drive revenue.",
  engineering:
    "We engineer native Android and iOS applications for luxury hotels, fine dining, tour operators, retail boutiques, wellness spas, and bespoke VIP services. Every UI token, typeface, layout, and logo is matched to the property.",
  slogan: "Premium hospitality. Exceptional experiences.",
} as const;

export const contacts = [
  {
    id: "fabi",
    name: "Fabi",
    role: "Co-Founder · Technology",
    phone: "+591 64520607",
    wa: "https://wa.me/59164520607",
    bio: "Architect of native mobile software and custom integrations. Fabi guides technology strategy, backend engineering, and the multi-business platform.",
  },
  {
    id: "matt",
    name: "Matt",
    role: "Co-Founder · Partnerships",
    phone: "+591 62663652",
    wa: "https://wa.me/59162663652",
    bio: "Lead for strategic partnerships and luxury experience design. Matt connects CaboGuest with premier hotels, restaurants, activity providers, and luxury brands.",
  },
] as const;

export type IndustryId =
  | "hotel"
  | "dining"
  | "tours"
  | "retail"
  | "spa"
  | "transport";

export type Industry = {
  id: IndustryId;
  name: string;
  short: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  suite: string;
  sample: string;
};

export const industries: Industry[] = [
  {
    id: "hotel",
    name: "Hotels, resorts & private villas",
    short: "Hospitality",
    kicker: "Luxury accommodations",
    description:
      "Bespoke mobile suites for 5-star hotels, luxury resorts, and high-end private villas — room service, keyless BLE entry, cabana bookings, and 24/7 butler concierge.",
    image: "/images/hotel.jpg",
    imageAlt: "Cliffside corridor of a Los Cabos resort opening to the sea",
    suite: "Full suite with room keys, poolside dining, private cabana bookings, and 24/7 butler concierge.",
    sample: "Pedregal Luxury Resort & Villas",
  },
  {
    id: "dining",
    name: "Fine dining, restaurants & bars",
    short: "Gastronomy",
    kicker: "Table management",
    description:
      "Interactive visual menus, contactless table ordering, sommelier recommendations, dietary preferences, and instant waitstaff paging.",
    image: "/images/dining.jpg",
    imageAlt: "Cliffside table set for two at sunset over the Pacific",
    suite: "Digital visual menus, cliffside table reservations, sommelier pairing guide, and VIP waiter paging.",
    sample: "Sunset Monalisa Fine Dining",
  },
  {
    id: "tours",
    name: "Tours, charters & excursions",
    short: "Experiences",
    kicker: "Ocean & desert",
    description:
      "Private yacht charters, ocean adventures, ATV desert tours, interactive itineraries, live GPS departure guides, and digital boarding passes.",
    image: "/images/yacht.jpg",
    imageAlt: "Luxury catamaran on turquoise water near El Arco",
    suite: "Yacht charter booking, customized catering menus, live GPS pickup map, and digital boarding passes.",
    sample: "Cabo Blue Luxury Yacht Charters",
  },
  {
    id: "retail",
    name: "Luxury retail & boutiques",
    short: "Retail",
    kicker: "Marina shopping",
    description:
      "Curated product catalogs, VIP private fitting bookings, resort-wide item delivery, exclusive drop notifications, and digital receipts.",
    image: "/images/retail.jpg",
    imageAlt: "Quiet marina boutique with artisan jewelry and linen",
    suite: "In-app product catalog, private VIP fitting reservations, and hotel or villa delivery.",
    sample: "Marina Cabo San Lucas Fine Retail",
  },
  {
    id: "spa",
    name: "Spas, wellness & holistic clinics",
    short: "Wellness",
    kicker: "Oceanfront treatments",
    description:
      "Treatment booking calendars, therapist matching, hydrotherapy slot reservations, custom massage intake forms, and spa reminders.",
    image: "/images/spa.jpg",
    imageAlt: "Oceanfront spa treatment room with cream linen",
    suite: "Massage and facial appointments, hydrotherapy reservations, and intake preference forms.",
    sample: "Desert Sol Ocean Spa & Sanctuary",
  },
  {
    id: "transport",
    name: "VIP transport & concierge",
    short: "Services",
    kicker: "Bespoke logistics",
    description:
      "Private airport transfers, luxury vehicle rental, personal chef dispatch, private event planning, and dedicated 24/7 guest support.",
    image: "/images/transport.jpg",
    imageAlt: "Black luxury SUV at a Cabo resort porte-cochere at dusk",
    suite: "Flight tracking, luxury SUV dispatch, private chef scheduling, and 24/7 WhatsApp concierge.",
    sample: "Cabo Elite VIP Transports & Concierge",
  },
];

export type Module = {
  id: string;
  number: string;
  name: string;
  summary: string;
  detail: string;
  industries: IndustryId[];
};

export const modules: Module[] = [
  {
    id: "keys",
    number: "01",
    name: "Touchless mobile keys & passes",
    summary: "Secure BLE, NFC & QR passes",
    detail:
      "Integrates with VingCard, Assa Abloy, Dormakaba, and digital entry systems so guests unlock hotel rooms, VIP lounges, or tour gates from their phone.",
    industries: ["hotel", "tours", "transport"],
  },
  {
    id: "dining",
    number: "02",
    name: "In-app dining, menus & ordering",
    summary: "Frictionless ordering & payment",
    detail:
      "High-definition visual menus for in-room dining, restaurant table ordering, poolside service, or beach delivery with instant settlement.",
    industries: ["hotel", "dining"],
  },
  {
    id: "concierge",
    number: "03",
    name: "Digital concierge & messaging",
    summary: "Instant multi-channel guest support",
    detail:
      "Guests message the front desk, concierge, host, or guide directly via in-app chat or automated WhatsApp. Staff see requests in real time.",
    industries: ["hotel", "dining", "tours", "retail", "spa", "transport"],
  },
  {
    id: "tours",
    number: "04",
    name: "Tour & activity reservations",
    summary: "Seamless experience scheduling",
    detail:
      "Interactive booking for yacht charters, desert tours, wine tastings, or local excursions with automated itinerary syncing and departure alerts.",
    industries: ["tours", "hotel", "transport"],
  },
  {
    id: "spa",
    number: "05",
    name: "Spa & wellness scheduling",
    summary: "Relaxation appointments, made simple",
    detail:
      "Interactive calendars for spa treatments, massage availability, yoga sessions, and fitness trainer bookings with smart reminders.",
    industries: ["spa", "hotel"],
  },
  {
    id: "retail",
    number: "06",
    name: "Boutique shopping & delivery",
    summary: "High-end retail showcase",
    detail:
      "Browse exclusive local luxury merchandise, order souvenir sets, or book private boutique fittings with direct delivery to villa, room, or yacht.",
    industries: ["retail", "hotel"],
  },
  {
    id: "dispatch",
    number: "07",
    name: "Service requests & staff dispatch",
    summary: "Automated workflow management",
    detail:
      "Generic request system for extra amenities, housekeeping, luggage valet, vehicle prep, or table service with real-time staff alerts.",
    industries: ["hotel", "dining", "transport"],
  },
  {
    id: "white",
    number: "08",
    name: "Fully custom whitelabeling",
    summary: "Brand-specific typography & themes",
    detail:
      "Every UI token, font, layout, color palette, and logo asset is customized to mirror the property's identity and physical elegance.",
    industries: ["hotel", "dining", "tours", "retail", "spa", "transport"],
  },
  {
    id: "i18n",
    number: "09",
    name: "Bilingual auto-localization",
    summary: "English, Spanish, and custom languages",
    detail:
      "Full native translation across every module so international guests never hunt for a language toggle buried in settings.",
    industries: ["hotel", "dining", "tours", "retail", "spa", "transport"],
  },
];

export type DemoAction = {
  id: string;
  title: string;
  body: string;
  button: string;
  success: string;
};

export type DemoPreset = {
  id: string;
  industryId: IndustryId;
  name: string;
  place: string;
  tagline: string;
  guest: string;
  actions: DemoAction[];
};

export const demos: DemoPreset[] = [
  {
    id: "villa",
    industryId: "hotel",
    name: "Pedregal Luxury Resort",
    place: "Pedregal · Cabo San Lucas",
    tagline: "5-star oceanfront villa sanctuary",
    guest: "Villa Room 402",
    actions: [
      {
        id: "key",
        title: "Digital guest arrival & key",
        body: "Simulate contactless mobile check-in and unlock room 402 via BLE / NFC.",
        button: "Unlock Villa Room 402",
        success: "Room 402 BLE key unlocked. Guest checked in.",
      },
      {
        id: "meal",
        title: "Poolside / in-room dining",
        body: "Browse the visual menu and place an order for Wagyu tacos and sparkling water.",
        button: "Order poolside meal · $45",
        success: "Order #892 dispatched to the kitchen.",
      },
    ],
  },
  {
    id: "monalisa",
    industryId: "dining",
    name: "Sunset Monalisa",
    place: "The Corridor · Los Cabos",
    tagline: "Cliffside fine dining & lounge",
    guest: "Table 14",
    actions: [
      {
        id: "table",
        title: "Table reservation & sommelier",
        body: "Select a cliffside table for sunset dinner and view wine pairings.",
        button: "Reserve cliffside table for 2",
        success: "Sunset table reserved for 7:30 PM.",
      },
      {
        id: "page",
        title: "Instant waitstaff page",
        body: "Page your assigned server for drinks, the check, or a dietary question.",
        button: "Call waitstaff to Table 14",
        success: "Server notified. Arriving in about a minute.",
      },
    ],
  },
  {
    id: "yacht",
    industryId: "tours",
    name: "Cabo Blue Charters",
    place: "Marina · Cabo San Lucas",
    tagline: "Private catamaran & ocean expeditions",
    guest: "Sunset Arch run",
    actions: [
      {
        id: "book",
        title: "Yacht charter & boarding pass",
        body: "Book a sunset catamaran excursion to the Cabo Arch with a digital boarding pass.",
        button: "Book catamaran charter",
        success: "Boarding pass generated. Departure at 5:00 PM.",
      },
      {
        id: "gps",
        title: "Live GPS excursion guide",
        body: "Track boat pickup dock location and the weather forecast.",
        button: "View Marina Dock 3 directions",
        success: "GPS route synced to Marina Dock 3.",
      },
    ],
  },
  {
    id: "marina",
    industryId: "retail",
    name: "Marina Fine Retail",
    place: "Marina Cabo San Lucas",
    tagline: "Exclusive artisan jewelry & beachwear",
    guest: "VIP stylist",
    actions: [
      {
        id: "shop",
        title: "In-app luxury shopping",
        body: "Browse exclusive Cabo artisan jewelry and designer beachwear.",
        button: "Order artisan silver bracelet · $280",
        success: "Item ordered. Express villa delivery scheduled.",
      },
      {
        id: "fit",
        title: "Private fitting appointment",
        body: "Book a private fitting session with a boutique stylist.",
        button: "Book VIP stylist fitting",
        success: "VIP fitting confirmed for tomorrow at 11 AM.",
      },
    ],
  },
  {
    id: "spa",
    industryId: "spa",
    name: "Desert Sol Sanctuary",
    place: "Corridor · Los Cabos",
    tagline: "Holistic oceanfront treatments",
    guest: "Ocean suite",
    actions: [
      {
        id: "massage",
        title: "Oceanfront massage booking",
        body: "Schedule an 80-minute deep tissue massage and hydrotherapy access.",
        button: "Reserve 80-min ocean spa massage",
        success: "Spa appointment confirmed for 3:00 PM.",
      },
    ],
  },
  {
    id: "suv",
    industryId: "transport",
    name: "Cabo Elite VIP",
    place: "SJD · Los Cabos",
    tagline: "Private Suburbans, airport & security",
    guest: "Arrival · SJD",
    actions: [
      {
        id: "suv",
        title: "VIP Suburban airport transfer",
        body: "Dispatch a luxury Suburban with a bilingual driver and ice drinks.",
        button: "Dispatch luxury airport SUV",
        success: "SUV dispatched. Flight tracking active.",
      },
    ],
  },
];

export const process = [
  {
    number: "01",
    title: "Listen to the property",
    body: "We walk the rooms, the marina, the kitchen pass. Brand, staff workflows, and the guest journey come before any screen.",
  },
  {
    number: "02",
    title: "Design a native suite",
    body: "Android and iOS, fully whitelabeled. Keys, dining, concierge, retail, spa, and dispatch — only the modules the operation needs.",
  },
  {
    number: "03",
    title: "Launch, then stay close",
    body: "Staff training, WhatsApp fallback, bilingual copy, and a named partner. The app goes live with the same care as a villa turnover.",
  },
] as const;

export const integrations = [
  "VingCard",
  "Assa Abloy",
  "Dormakaba",
  "WhatsApp",
  "Apple Pay",
  "BLE / NFC",
  "QR passes",
] as const;

export const inquiryChips = [
  "Inquire about a whitelabel app",
  "Request a custom proposal",
  "Schedule a technical consultation",
  "Explore the multi-business demo",
] as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Platform" },
  { to: "/work", label: "Work" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
