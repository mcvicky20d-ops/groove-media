"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="container-px py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-forest-800 px-7 py-16 text-center sm:px-16"
      >
        <div className="grain pointer-events-none absolute inset-0 opacity-50" />
        <motion.div
          aria-hidden
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow justify-center text-gold-300">
            Let&apos;s create together
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-cream sm:text-5xl">
            Got a story worth filming?
          </h2>
          <p className="mt-5 text-cream/70">
            Tell us about your wedding, brand or event. We&apos;ll get back
            with a tailored plan and a free quote — usually within a few hours.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a free quote <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${site.phoneE164}`}
              className="btn-ghost"
            >
              <Phone size={16} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
