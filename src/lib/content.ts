export const company = {
  name: "CaboGuest Solutions",
  short: "CaboGuest",
  location: "Cabo San Lucas",
  region: "Los Cabos, Mexico",
  product: "HostalPro",
} as const;

export const contacts = [
  {
    id: "fabi",
    name: "Fabi",
    role: "Co-Founder · Technology",
    phone: "+591 64520607",
    wa: "https://wa.me/59164520607",
    bio: "Builds the software and the integrations. Fabi shapes HostalPro for each property — rooms, roles, payments, and whatever that building still does by notebook.",
  },
  {
    id: "matt",
    name: "Matt",
    role: "Co-Founder · Partnerships",
    phone: "+591 62663652",
    wa: "https://wa.me/59162663652",
    bio: "Sits with owners and GMs until the day-to-day is clear. Matt makes sure the build matches the desk, not a sales deck.",
  },
] as const;

export type IndustryId = "hostel" | "hotel" | "inn";

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
    id: "hostel",
    name: "Hostels",
    short: "Hostels",
    kicker: "Beds, dorms, mixed floors",
    description:
      "Shared rooms, private rooms, hallway bathrooms, towels that walk off. HostalPro was built for this shape of building.",
    image: "/images/hotel.jpg",
    imageAlt: "Hostel corridor opening toward the sea in Los Cabos",
    suite: "Bed-level booking, group check-in, housekeeping by room, towel counts.",
    sample: "A 48-bed hostel with three floors and a shared laundry.",
  },
  {
    id: "hotel",
    name: "Small hotels",
    short: "Hotels",
    kicker: "Private rooms, a real desk",
    description:
      "Not a 400-key PMS. A hotel that still knows its guests, needs a clean board, a night audit, and payments that don't fight the staff.",
    image: "/images/villa.jpg",
    imageAlt: "Small hotel terrace looking out to an infinity pool",
    suite: "Room status, late checkout, no-shows, cash and card, a close-of-day.",
    sample: "A 22-room hotel with a breakfast room and two housekeepers.",
  },
  {
    id: "inn",
    name: "Inns & guesthouses",
    short: "Inns",
    kicker: "Few keys, many hats",
    description:
      "The owner is also the night shift. We keep the software small: who's in, what's dirty, who got paid, what the next person needs to know.",
    image: "/images/hero.jpg",
    imageAlt: "Guesthouse pool at blue hour in Cabo San Lucas",
    suite: "Simple board, staff PIN, handover notes, shopping list.",
    sample: "A nine-room inn run by a couple and one cleaner.",
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
    name: "Front desk",
    summary: "Arrive, stay, leave",
    detail:
      "Book a bed or a room, take a group, check someone in, extend a night, mark a no-show. The board is the building — floors, bathrooms, what's free.",
  },
  {
    id: "rooms",
    number: "02",
    name: "Rooms & beds",
    summary: "As they really are",
    detail:
      "Dorms, private rooms, king or single, ensuite or down the hall. We lay the property out in a setup wizard, then you live on that map.",
  },
  {
    id: "cleaning",
    number: "03",
    name: "Housekeeping",
    summary: "Dirty, in progress, done",
    detail:
      "Rooms that need work, arrivals today, towels and soap and sheets on the list. Housekeepers mark a room clean or flag a problem without hunting for a manager.",
  },
  {
    id: "laundry",
    number: "04",
    name: "Laundry & towels",
    summary: "The things that walk",
    detail:
      "Towels matched to guests, wash-dry-iron stages, or a ticket to an outside laundry. Small, because this is where hostels lose money quietly.",
  },
  {
    id: "staff",
    number: "05",
    name: "Staff & time",
    summary: "Who is on, and for how long",
    detail:
      "A PIN to clock in, shifts, hourly rates, payroll summaries. Roles so a cleaner never sees the owner's numbers, and a night clerk can still check someone in.",
  },
  {
    id: "pay",
    number: "06",
    name: "Money at the desk",
    summary: "Cash, QR, card",
    detail:
      "PayPal, Stripe, a QR the guest scans, cash in the drawer. Prepaid stays, late checkout fees, payment plans. Whatever you actually take — not a catalog of maybe.",
  },
  {
    id: "channels",
    number: "07",
    name: "The other websites",
    summary: "Don't sell the same bed twice",
    detail:
      "Sync with Hostelworld, Booking.com, and Airbnb so the board and the OTAs agree. We wire the channel you already use; we don't make you live in five calendars.",
  },
  {
    id: "reports",
    number: "08",
    name: "Close of day",
    summary: "Night audit, reports, handover",
    detail:
      "Occupancy, ADR, who paid, what's still dirty, a note for the morning shift. The day can be closed when the drawer, the rooms, and the issues line up.",
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
    place: "HostalPro · Desk",
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
    place: "HostalPro · Rooms",
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
    place: "HostalPro · Towels",
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
    place: "HostalPro · Time",
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
    title: "We walk the building",
    body: "Floors, beds, who does laundry, how you take money, which OTA you actually use. If it's in a notebook, we want to see the notebook.",
  },
  {
    number: "02",
    title: "We cut HostalPro to fit",
    body: "Your name, your language, your roles, your payments. We hide what you don't run. We add the one awkward thing your property can't drop.",
  },
  {
    number: "03",
    title: "We stay for the first messy week",
    body: "Training on the desk, a WhatsApp line, a named person. The software is live when the night shift can close the day without us in the room.",
  },
] as const;

export const customizations = [
  "brand",
  "language",
  "roles",
  "payments",
  "channels",
  "layout",
] as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Software" },
  { to: "/work", label: "Walkthrough" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
