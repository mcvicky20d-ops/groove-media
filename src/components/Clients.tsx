"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Clients({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "bg-forest-900 py-24" : "bg-cream py-24"}>
      <div className="container-px">
        <SectionHeading
          eyebrow="Selected work"
          title="Trusted by brands across retail, hospitality & culture"
          subtitle="Over the years we've produced films and campaigns for brands moving across fashion, retail, hospitality and culture-driven work."
          light={light}
        />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-forest-100/40 bg-forest-100/30 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className={`flex items-center justify-center px-6 py-10 text-center font-display text-lg font-semibold tracking-wide sm:text-xl ${
                light
                  ? "bg-forest-900 text-cream/70"
                  : "bg-cream text-forest-800/80"
              }`}
            >
              {c}
            </motion.div>
          ))}
          <div
            className={`flex items-center justify-center px-6 py-10 text-center text-sm font-medium ${
              light ? "bg-forest-900 text-gold-300" : "bg-cream text-gold-600"
            }`}
          >
            & more
          </div>
        </div>
      </div>
    </section>
  );
}
