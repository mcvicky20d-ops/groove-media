/**
 * Single source of truth for business details.
 * Edit values here and the whole site updates at once.
 */

export const site = {
  name: "The Groove Media",
  tagline: "Production House",
  legalName: "The Groove Media Production House",
  established: "2018",
  lead: {
    name: "Kodi",
    role: "Creative Director / Director of Photography",
  },
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
    count: "100+",
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
  { href: "/corporate", label: "Advertising" },
  { href: "/weddings", label: "Weddings" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Capability tags shown on Home / About ("What We Do"). */
export const capabilities = [
  "Advertising Films",
  "Brand Campaigns",
  "Commercial Photography",
  "Digital Content Production",
];

/** End-to-end production pipeline. */
export const production = [
  {
    title: "Creative Direction",
    body: "Idea, narrative and visual language defined before a single frame is shot.",
  },
  {
    title: "Production",
    body: "Planning, crew, locations and logistics — managed in-house, end to end.",
  },
  {
    title: "Cinematography",
    body: "Cinematic camera and lighting built for modern, premium audiences.",
  },
  {
    title: "Post Production",
    body: "Edit, colour, sound and finishing that elevate the final film.",
  },
  {
    title: "Campaign Content",
    body: "Cutdowns, social-first edits and assets ready for every platform.",
  },
];

/** Brands & groups Groove Media has produced work for. */
export const clients = [
  "ITC Hotels",
  "Hilton",
  "Phoenix Marketcity",
  "Wrangler India",
  "Myntra",
  "NAC Jewellers",
  "Crocs India",
];

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
    slug: "corporate",
    title: "Advertising & Brand Films",
    short: "Ads, campaigns & brand films",
    description:
      "Advertising films, branded content and campaign films — clear, cinematic and built for modern audiences. We work with brands, agencies and creative teams from concept to delivery.",
    features: [
      "Advertising & commercial films",
      "Brand campaigns & launch films",
      "Commercial & product photography",
      "Social-first & digital content",
      "Creative direction & scripting",
      "End-to-end production & post",
    ],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    accent: "gold",
  },
  {
    slug: "weddings",
    title: "Wedding Films",
    short: "Select wedding vertical",
    description:
      "Through our dedicated vertical, we take on select wedding stories — approached with the same filmmaking process: natural moments, cinematic visuals and storytelling that lasts.",
    features: [
      "Cinematic wedding films",
      "Candid & traditional photography",
      "Pre-wedding & save-the-date shoots",
      "South Indian & destination weddings",
      "Same-day edits & highlight reels",
      "Drone & multi-camera crew",
    ],
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80",
    accent: "forest",
  },
  {
    slug: "events",
    title: "Events & Live Coverage",
    short: "Launches & live shoots",
    description:
      "Launches, brand activations, conferences and cultural programs — covered with a multi-camera crew and delivered as sharp recap films and campaign-ready content.",
    features: [
      "Brand activations & launches",
      "Multi-camera live coverage",
      "Conference & program films",
      "Stage & concert shoots",
      "Live streaming setup",
      "Fast-turnaround recap reels",
    ],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
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
    name: "Brand Marketing Lead",
    role: "Retail & Fashion",
    quote:
      "The campaign film they produced raised the bar for us. Sharp creative direction, a calm crew and delivery exactly on schedule.",
    rating: 5,
  },
  {
    name: "Agency Producer",
    role: "Creative Agency, Chennai",
    quote:
      "Groove Media is our go-to production partner. They get the brief, bring strong visual ideas and execute end to end without hand-holding.",
    rating: 5,
  },
  {
    name: "Hospitality Brand",
    role: "Hotels & Lifestyle",
    quote:
      "Our brand film looked premium and felt true to us. The team handled concept to final cut with real clarity.",
    rating: 5,
  },
  {
    name: "Aarthi & Vignesh",
    role: "Wedding · Chennai",
    quote:
      "They filmed our wedding like a film. Every frame felt cinematic — moments we didn't even know happened, captured beautifully.",
    rating: 5,
  },
  {
    name: "Founder",
    role: "Growing D2C Brand",
    quote:
      "From idea to launch content, they made our brand look bigger than we are. Investors and customers both noticed.",
    rating: 5,
  },
];

export const stats = [
  { value: "2018", label: "Studio established" },
  { value: "100+", label: "Branded films delivered" },
  { value: "7+", label: "National brands" },
  { value: "Chennai", label: "Production base" },
];
