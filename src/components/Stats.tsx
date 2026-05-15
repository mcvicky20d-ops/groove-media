"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="bg-forest-800">
      <div className="container-px grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-bold leading-tight text-gold-300 sm:text-4xl lg:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-cream/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
