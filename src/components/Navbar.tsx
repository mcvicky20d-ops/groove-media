"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled || open
            ? "bg-forest-900/95 py-3 shadow-lg backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-px flex items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-gold-300"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-300"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="hidden btn-primary lg:inline-flex">
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full p-2 text-cream lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] flex flex-col bg-forest-900 lg:hidden"
          >
            <div className="grain pointer-events-none absolute inset-0 opacity-50" />

            <div className="relative flex flex-1 flex-col overflow-y-auto px-6 pb-10 pt-24">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold transition-colors ${
                        isActive(link.href)
                          ? "text-gold-300"
                          : "text-cream hover:text-gold-300"
                      }`}
                    >
                      {link.label}
                      <span className="text-cream/30">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex flex-col gap-4 pt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Get a Free Quote
                </Link>
                <div className="flex flex-col gap-1 text-sm text-cream/60">
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="hover:text-gold-300"
                  >
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={whatsappLink(
                      "Hi The Groove Media! I'd like to enquire about your services."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300"
                  >
                    WhatsApp · {site.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
