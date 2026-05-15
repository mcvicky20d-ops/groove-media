import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "The Groove Media is a Chennai-based production house crafting cinematic wedding films, corporate & ad videos, event coverage and photography. Get a free quote today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thegroovemedia.vercel.app"),
  title: {
    default: `${site.name} — Wedding, Corporate & Ad Film Production in Chennai`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "wedding videography Chennai",
    "wedding photography Chennai",
    "corporate video production Chennai",
    "ad film makers Chennai",
    "event videography Chennai",
    "cinematic wedding films",
    "The Groove Media",
  ],
  openGraph: {
    title: `${site.name} — Cinematic Films & Photography in Chennai`,
    description,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Cinematic Films & Photography`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f4530",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    description,
    image: "/og.svg",
    "@id": "https://thegroovemedia.vercel.app",
    url: "https://thegroovemedia.vercel.app",
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "IN",
    },
    sameAs: [site.social.instagram, site.social.google],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: 120,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
