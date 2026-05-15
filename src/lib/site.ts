/**
 * Single source of truth for business details.
 *
 * NOTE FOR THE OWNER: The phone / email / WhatsApp values below are
 * PLACEHOLDERS. Instagram and Google Business links were not machine-readable,
 * so swap the marked values for your real contact details and the whole site
 * (header, footer, contact page, WhatsApp button, schema.org) updates at once.
 */

export const site = {
  name: "The Groove Media",
  tagline: "Production House",
  legalName: "The Groove Media Production House",
  email: "mediathegroove@gmail.com",
  phoneDisplay: "+91 78128 91696",
  phoneE164: "+917812891696",
  // WhatsApp number — digits only, with country code
  whatsapp: "917812891696",
  city: "Chennai",
  region: "Tamil Nadu",
  country: "India",
  // TODO(owner): replace with your studio address
  address: "Chennai, Tamil Nadu, India",
  social: {
    instagram: "https://www.instagram.com/the.groove.media/",
    instagramHandle: "@the.groove.media",
    google: "https://share.google/UGDRmrKoFiXsfsqJZ",
  },
  rating: {
    value: "5.0",
    count: "120+",
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/weddings", label: "Weddings" },
  { href: "/corporate", label: "Corporate & Ads" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  accent: "forest" | "gold";
};

export const services: Service[] = [
  {
    slug: "weddings",
    title: "Wedding Films & Photography",
    short: "South Indian wedding stories",
    description:
      "From the muhurtham and kasi yatra to the kalyana mandapam and the last goodbye — we capture every ritual, every tear and every dhol-driven celebration, crafted into a film you will relive for a lifetime.",
    features: [
      "Tamil, Telugu, Malayalam & Kannada weddings",
      "Muhurtham, mandap & temple-wedding coverage",
      "Candid & traditional South Indian photography",
      "Nichayathartham & reception films",
      "Pre-wedding & save-the-date shoots",
      "Same-day edits, drone & multi-camera crew",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    accent: "gold",
  },
  {
    slug: "corporate",
    title: "Corporate & Ad Films",
    short: "Brand & ad video production",
    description:
      "High-impact brand films, product ads and corporate content engineered to convert. We handle concept, script, shoot and post — end to end.",
    features: [
      "Brand & corporate documentary films",
      "Product & performance ad creatives",
      "Founder / testimonial interviews",
      "Social-first vertical video",
      "Scripting, direction & post-production",
    ],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    accent: "forest",
  },
  {
    slug: "events",
    title: "Events & Programs",
    short: "Live event coverage",
    description:
      "Temple festivals, cultural programs, concerts, launches and conferences — covered with a multi-camera crew and delivered as crisp recap films and full-event archives.",
    features: [
      "Temple festivals & cultural programs",
      "Multi-camera live event coverage",
      "Concert & stage program films",
      "Conference & product-launch recaps",
      "Live streaming setup",
      "Fast turnaround event reels",
    ],
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    accent: "gold",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aarthi & Vignesh",
    role: "Wedding · Chennai",
    quote:
      "We cried watching our wedding film. They captured moments we didn't even know happened. Every frame felt like a movie — absolutely worth it.",
    rating: 5,
  },
  {
    name: "Priya Raghavan",
    role: "Marketing Head, FMCG Brand",
    quote:
      "Our product ad they produced outperformed every previous campaign. Professional crew, sharp direction and delivery right on schedule.",
    rating: 5,
  },
  {
    name: "Karthik S.",
    role: "Founder, Tech Startup",
    quote:
      "The brand film gave our pitch deck a whole new energy. Investors specifically mentioned it. Truly a production house, not just a camera team.",
    rating: 5,
  },
  {
    name: "Deepa & Surya",
    role: "Wedding · Coimbatore",
    quote:
      "Travelled out of Chennai for our wedding without a single complaint. The candid photos are framed all over our home now.",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "Event Director",
    quote:
      "They handled a 3-day conference with multiple stages flawlessly. The recap film had everyone sharing it across socials.",
    rating: 5,
  },
];

export const stats = [
  { value: "8+", label: "Years behind the lens" },
  { value: "450+", label: "Films delivered" },
  { value: "300+", label: "Weddings covered" },
  { value: "120+", label: "5-star reviews" },
];
