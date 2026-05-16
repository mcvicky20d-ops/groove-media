import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Star } from "lucide-react";
import Logo from "./Logo";
import { navLinks, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-px relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            A Chennai film &amp; visual production company — advertising,
            branded content and campaign films, plus a select wedding vertical.
          </p>
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm">
            <Star size={16} className="fill-gold-300 text-gold-300" />
            <span className="font-semibold text-gold-300">
              {site.rating.value}
            </span>
            <span className="text-cream/60">
              · {site.rating.count} happy clients
            </span>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Explore
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-cream/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Services
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-cream/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Get in touch
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-cream/70">
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <Phone size={16} className="text-gold-300" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <Mail size={16} className="text-gold-300" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-gold-300" />
              {site.city}, {site.region}
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <Instagram size={16} className="text-gold-300" />
                {site.social.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px relative flex flex-col items-center justify-between gap-3 border-t border-white/10 pb-28 pt-6 text-center text-xs text-cream/50 sm:flex-row sm:pb-24 sm:pt-8 sm:text-left">
        <p>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://r1digitalsolutions.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-300 underline-offset-4 transition-colors hover:text-gold-200 hover:underline"
          >
            r1digitalsolutions
          </a>
        </p>
      </div>
    </footer>
  );
}
