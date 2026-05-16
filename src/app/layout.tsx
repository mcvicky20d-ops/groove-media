import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { organizationJsonLd, SITE_URL } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Wedding, Corporate & Ad Film Production in Chennai`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: SITE_URL }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Film & Video Production",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  keywords: [
    "production house Chennai",
    "video production company Chennai",
    "wedding videography Chennai",
    "wedding photography Chennai",
    "corporate video production Chennai",
    "ad film makers Chennai",
    "advertising film production Chennai",
    "event videography Chennai",
    "cinematic wedding films",
    "brand campaign films",
    "The Groove Media",
  ],
  openGraph: {
    title: `${site.name} — Cinematic Films & Photography in Chennai`,
    description,
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.legalName} — ${site.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Cinematic Films & Photography`,
    description,
    images: ["/opengraph-image"],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationJsonLd()} />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
