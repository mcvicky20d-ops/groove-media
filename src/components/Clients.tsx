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
        <div className="scene-3d mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              whileHover={{ rotateX: 6, rotateY: -6 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`flex items-center justify-center px-6 py-12 text-center font-display text-lg font-semibold tracking-wide sm:text-xl ${
                light ? "card-3d-dark text-cream" : "card-3d text-forest-800"
              }`}
            >
              {c}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className={`flex items-center justify-center rounded-2xl border border-dashed px-6 py-12 text-center text-sm font-semibold uppercase tracking-[0.2em] ${
              light
                ? "border-gold-300/40 text-gold-300"
                : "border-gold-500/50 text-gold-600"
            }`}
          >
            &amp; more
          </motion.div>
        </div>
      </div>
    </section>
  );
}
