"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    no: "01",
    title: "Discovery call",
    body: "We listen to your vision, vibe and goals — then map the shoot around them.",
  },
  {
    no: "02",
    title: "Plan & pre-production",
    body: "Moodboards, shot lists, scripts and a clear timeline. Everyone aligned before day one.",
  },
  {
    no: "03",
    title: "The shoot",
    body: "A calm, professional crew that blends in and captures the magic as it unfolds.",
  },
  {
    no: "04",
    title: "Post & delivery",
    body: "Editing, color, sound design — delivered on schedule, ready to share with the world.",
  },
];

export default function Process({ light = false }: { light?: boolean }) {
  return (
    <section
      className={`py-24 ${light ? "bg-forest-900" : "bg-cream"}`}
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="How we work"
          title="A calm, proven process"
          subtitle="From first hello to final film — you always know what happens next."
          light={light}
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              <span
                className={`font-display text-5xl font-bold ${
                  light ? "text-forest-700" : "text-forest-100"
                }`}
              >
                {s.no}
              </span>
              <h3
                className={`mt-3 font-display text-xl font-bold ${
                  light ? "text-cream" : "text-forest-900"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  light ? "text-cream/60" : "text-forest-700/70"
                }`}
              >
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <span
                  className={`absolute -right-4 top-6 hidden h-px w-8 lg:block ${
                    light ? "bg-forest-700" : "bg-forest-200"
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
