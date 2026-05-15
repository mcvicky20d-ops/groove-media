"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Film,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Film,
    title: "True production house",
    body: "Concept, script, shoot, edit and delivery — one accountable team, no hand-offs.",
  },
  {
    icon: Award,
    title: "8+ years, 450+ films",
    body: "A proven track record across weddings, national brands and large events.",
  },
  {
    icon: Clock,
    title: "On-time, every time",
    body: "Clear timelines and same-day teaser options. We deliver when we promise.",
  },
  {
    icon: ShieldCheck,
    title: "Backed-up & insured gear",
    body: "Dual-recording and redundant backups. Your memories are never at risk.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent pricing",
    body: "Tailored packages with no hidden costs. You always know what you pay for.",
  },
  {
    icon: Sparkles,
    title: "Cinematic by default",
    body: "Color-graded, sound-designed films built to feel like the movies.",
  },
];

export default function WhyUs() {
  return (
    <section className="container-px py-24">
      <SectionHeading
        eyebrow="Why The Groove Media"
        title="The reasons clients keep coming back"
        subtitle="We obsess over the craft so you can relive the feeling — not just review the footage."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            className="group rounded-2xl border border-forest-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors group-hover:bg-gold-400 group-hover:text-forest-900">
              <r.icon size={22} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
              {r.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
              {r.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
