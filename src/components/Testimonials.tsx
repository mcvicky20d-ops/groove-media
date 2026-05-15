"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setIndex(
      (i) => (i + dir + testimonials.length) % testimonials.length
    );

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-forest-900 py-24">
      <div className="grain pointer-events-none absolute inset-0 opacity-50" />
      <Quote
        className="pointer-events-none absolute -left-6 top-10 text-forest-700/60"
        size={160}
        aria-hidden
      />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Client love"
          title="Trusted by couples & brands across Chennai"
          subtitle="Real words from people who let us tell their story."
          light
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="glass-card px-8 py-10 text-center sm:px-12"
            >
              <div className="mb-5 flex justify-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-gold-300 text-gold-300"
                  />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed text-cream sm:text-2xl">
                “{t.quote}”
              </p>
              <footer className="mt-7">
                <p className="font-semibold text-gold-300">{t.name}</p>
                <p className="text-sm text-cream/55">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="rounded-full border border-white/15 p-3 text-cream transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-gold-300"
                      : "w-2 bg-cream/25 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="rounded-full border border-white/15 p-3 text-cream transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
