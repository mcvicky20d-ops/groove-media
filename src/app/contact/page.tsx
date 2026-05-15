import type { Metadata } from "next";
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact & Free Quote",
  description:
    "Enquire about wedding, corporate, ad or event videography & photography in Chennai. Get a free quote from The Groove Media — we usually reply within hours.",
  path: "/contact",
  keywords: [
    "contact The Groove Media",
    "video production quote Chennai",
    "hire videographer Chennai",
  ],
});

export default function ContactPage() {
  const contacts = [
    {
      icon: Phone,
      label: "Call us",
      value: site.phoneDisplay,
      href: `tel:${site.phoneE164}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat instantly",
      href: whatsappLink(
        "Hi The Groove Media! I'd like a quote for your services."
      ),
    },
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: site.social.instagramHandle,
      href: site.social.instagram,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="relative overflow-hidden bg-forest-900 pb-16 pt-36">
        <div className="grain absolute inset-0 opacity-50" />
        <div className="container-px relative text-center">
          <Reveal>
            <span className="eyebrow justify-center text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Let&apos;s talk
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-cream sm:text-6xl">
              Get a free quote
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-cream/70">
              Tell us about your wedding, brand or event. Share a few details
              and we&apos;ll come back with ideas and pricing — usually within
              a few hours.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-cream/70">
              <Star size={16} className="fill-gold-300 text-gold-300" />
              <span className="font-semibold text-gold-300">
                {site.rating.value}
              </span>
              · loved by {site.rating.count} clients in {site.city}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-px grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-bold text-forest-900">
              Reach us directly
            </h2>
            <p className="text-sm text-forest-700/70">
              Prefer to talk first? Use whichever works for you.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lg"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-forest-900">
                    <c.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-forest-700/60">
                      {c.label}
                    </span>
                    <span className="block text-sm font-semibold text-forest-900">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-4 rounded-2xl border border-forest-100 bg-white p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                <MapPin size={20} />
              </span>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-forest-700/60">
                  Studio location
                </span>
                <span className="block text-sm font-semibold text-forest-900">
                  {site.address}
                </span>
                <a
                  href={site.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs font-semibold text-gold-600 hover:text-gold-500"
                >
                  View on Google →
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-4 rounded-2xl border border-forest-100 bg-white p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                <Clock size={20} />
              </span>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-forest-700/60">
                  Working hours
                </span>
                <span className="block text-sm font-semibold text-forest-900">
                  Mon – Sat · 10:00 AM – 8:00 PM
                </span>
                <span className="text-xs text-forest-700/60">
                  Shoots happen any day — just ask.
                </span>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-forest-100">
              <iframe
                title="The Groove Media location — Chennai"
                src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu,India&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
