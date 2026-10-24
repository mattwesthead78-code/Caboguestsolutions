export const company = {
  name: "CaboGuest Solutions",
  short: "CaboGuest",
  location: "Cabo San Lucas",
  region: "Los Cabos, Mexico",
  product: "RackFolio",
  guestApp: "CaboGuest",
} as const;

export const androidApk = {
  href: "/downloads/RackFolio.apk",
  fileName: "RackFolio.apk",
  version: "1.5",
} as const;

export const contacts = [
  {
    id: "fabi",
    name: "Fabi",
    role: "Co-Founder · Technology",
    phone: "+591 64520607",
    wa: "https://wa.me/59164520607",
    bio: "Builds RackFolio and the guest apps. Fabi shapes the software for each house — rooms, tables, roles, payments, and the awkward thing you still do on paper.",
  },
  {
    id: "matt",
    name: "Matt",
    role: "Co-Founder · Partnerships",
    phone: "+591 62663652",
    wa: "https://wa.me/59162663652",
    bio: "Sits with owners and GMs until the day-to-day is honest. Matt makes sure the build matches the desk, not a sales deck.",
  },
] as const;

export type IndustryId = "hotel" | "restaurant" | "villa" | "yacht";

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
    name: "Hotels & stays",
    short: "Hotels",
    kicker: "Rooms, beds, a real desk",
    description:
      "Hostels, inns, boutique hotels. RackFolio is the board: who's in, what's dirty, who got paid. Not a 400-key palace system.",
    image: "/images/hotel.jpg",
    imageAlt: "Hotel corridor opening toward the sea in Los Cabos",
    suite: "Room status, check-in, housekeeping, night audit.",
    sample: "A 22-room hotel with breakfast and two housekeepers.",
  },
  {
    id: "restaurant",
    name: "Restaurants",
    short: "Dining",
    kicker: "Tables, tickets, the pass",
    description:
      "Reservations, the floor, who is on, how you take money. Same engine as the hotel desk — cut for a dining room.",
    image: "/images/dining.jpg",
    imageAlt: "A set dining table at dusk in Los Cabos",
    suite: "Covers, staff time, payments, a close of service.",
    sample: "A 40-cover room with a terrace and two evening shifts.",
  },
  {
    id: "villa",
    name: "Villas & homes",
    short: "Villas",
    kicker: "Few keys, many hats",
    description:
      "The owner is often the night shift. We keep it small: who's in, what's due, what the next person needs to know — plus a guest app for the house.",
    image: "/images/villa.jpg",
    imageAlt: "Villa terrace looking out to an infinity pool",
    suite: "Simple board, guest app, staff PIN, handover notes.",
    sample: "A four-villa compound with a shared pool and a cook.",
  },
  {
    id: "yacht",
    name: "Yachts & days",
    short: "Yachts",
    kicker: "A boat, a clock, a crew",
    description:
      "Charters, transfers, a crew that turns around fast. RackFolio holds the day; the guest app holds the briefing, the weather, the next stop.",
    image: "/images/yacht.jpg",
    imageAlt: "A day yacht off the Cabo coast",
    suite: "Bookings, crew time, guest briefing on their phone.",
    sample: "A six-hour sunset run with a captain and a deckhand.",
  },
];

export type Module = {
  id: string;
  number: string;
  name: string;
  summary: string;
  detail: string;
};

export const modules: Module[] = [
  {
    id: "desk",
    number: "01",
    name: "The desk",
    summary: "Arrive, stay, leave",
    detail:
      "Book a room, a table, a cabin. Take a group, check someone in, extend a night, mark a no-show. The board is the house — what's free, what's live.",
  },
  {
    id: "rooms",
    number: "02",
    name: "Spaces as they are",
    summary: "Rooms, tables, cabins",
    detail:
      "Dorms, kings, a terrace, a six-top, a bow cabin. We lay the operation out in a setup, then you live on that map — not a generic grid.",
  },
  {
    id: "cleaning",
    number: "03",
    name: "Housekeeping & floor",
    summary: "Dirty, in progress, done",
    detail:
      "Rooms that need work, tables to reset, arrivals today. Staff mark a space ready or flag a problem without hunting for a manager.",
  },
  {
    id: "laundry",
    number: "04",
    name: "Laundry & linen",
    summary: "The things that walk",
    detail:
      "Towels, sheets, uniforms. Matched to rooms or a service, wash-dry-iron, or a ticket to an outside laundry. Small, because this is where money leaks.",
  },
  {
    id: "staff",
    number: "05",
    name: "Staff & time",
    summary: "Who is on, and for how long",
    detail:
      "A PIN to clock in, shifts, hourly rates, payroll summaries. Roles so a cleaner never sees the owner's numbers, and a night clerk can still take a booking.",
  },
  {
    id: "pay",
    number: "06",
    name: "Money at the desk",
    summary: "Cash, QR, card",
    detail:
      "PayPal, Stripe, a QR the guest scans, cash in the drawer. Deposits, late fees, a split cheque. Whatever you actually take — not a catalog of maybe.",
  },
  {
    id: "channels",
    number: "07",
    name: "The other websites",
    summary: "Don't sell the same thing twice",
    detail:
      "Booking.com, Airbnb, OpenTable, the channel you already live on. We wire it so the board and the internet agree.",
  },
  {
    id: "reports",
    number: "08",
    name: "Close of day",
    summary: "Audit, reports, handover",
    detail:
      "What moved, who paid, what's still dirty, a note for the next shift. The day closes when the drawer, the floor, and the issues line up.",
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
  name: string;
  place: string;
  tagline: string;
  guest: string;
  actions: DemoAction[];
};

export const demos: DemoPreset[] = [
  {
    id: "desk",
    name: "Front desk",
    place: "RackFolio · Desk",
    tagline: "A Tuesday morning arrival",
    guest: "Bed 12 · Floor 2",
    actions: [
      {
        id: "checkin",
        title: "Check in",
        body: "Walk a guest from Booking.com onto bed 12 and mark them in-house.",
        button: "Check in Ana · Bed 12",
        success: "Ana is in-house. Bed 12 occupied. Housekeeping sees an occupied clean.",
      },
      {
        id: "pay",
        title: "Take payment",
        body: "Collect the balance on QR, or note cash in the drawer.",
        button: "Take QR payment · $42",
        success: "Payment recorded. Balance clear. Receipt on the booking.",
      },
    ],
  },
  {
    id: "cleaning",
    name: "Housekeeping",
    place: "RackFolio · Rooms",
    tagline: "Three departures, one arrival at 2",
    guest: "Room 8 · Dirty",
    actions: [
      {
        id: "mark",
        title: "Mark clean",
        body: "Sheets, towels, bathroom. Then the room is free for the next name.",
        button: "Mark Room 8 clean",
        success: "Room 8 available. Front desk can put the 2pm arrival in.",
      },
      {
        id: "issue",
        title: "Report an issue",
        body: "Leaky tap — don't hide it in a WhatsApp thread.",
        button: "Flag leak in Room 8",
        success: "Issue logged for maintenance. Room stays blocked until it's fixed.",
      },
    ],
  },
  {
    id: "laundry",
    name: "Laundry",
    place: "RackFolio · Linen",
    tagline: "Count what left the floor",
    guest: "Floor 2 · 18 out",
    actions: [
      {
        id: "count",
        title: "Towel count",
        body: "Eighteen towels out with guests. Twelve are back in the wash.",
        button: "Log 12 towels in wash",
        success: "Wash started. Six still with guests. Ironing is next.",
      },
    ],
  },
  {
    id: "staff",
    name: "Staff",
    place: "RackFolio · Time",
    tagline: "Handover at 7",
    guest: "Maria · Night",
    actions: [
      {
        id: "clock",
        title: "Clock in",
        body: "Maria opens the shift with her PIN. Hours go to payroll, not a notebook.",
        button: "Clock in Maria",
        success: "Maria on duty. Night shift started 7:00.",
      },
      {
        id: "handover",
        title: "Leave a note",
        body: "Room 4 wants a late checkout. The morning person shouldn't have to guess.",
        button: "Save handover note",
        success: "Handover waiting. Morning shift has to acknowledge it.",
      },
    ],
  },
];

export const process = [
  {
    number: "01",
    title: "We sit with how you work",
    body: "Rooms or tables, who does laundry, how you take money, which site you actually live on. If it's in a notebook, we want the notebook.",
  },
  {
    number: "02",
    title: "We cut RackFolio to that house",
    body: "Your name, your language, your roles, your payments. We hide what you don't run. We add the awkward piece you can't drop — and a guest app, if you want one.",
  },
  {
    number: "03",
    title: "You subscribe. We host. We stay.",
    body: "No tens of thousands for a frozen install. A subscription, servers we rent so it stays fast, and updates as RackFolio improves — included.",
  },
] as const;

export const customizations = [
  "brand",
  "language",
  "roles",
  "payments",
  "channels",
  "layout",
  "hosting",
] as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Software" },
  { to: "/pricing", label: "Prices" },
  { to: "/app", label: "App" },
  { to: "/work", label: "Walkthrough" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
