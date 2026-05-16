"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Parallax from "./Parallax";
import Counter from "./Counter";

type Project = {
  title: string;
  category: string;
  meta: string;
  image: string;
  span?: boolean;
};

const projects: Project[] = [
  {
    title: "Brand Launch Film",
    category: "Advertising",
    meta: "Retail · Campaign",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    span: true,
  },
  {
    title: "Cinematic Wedding",
    category: "Wedding",
    meta: "Chennai · Film + Photo",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Product Campaign",
    category: "Commercial",
    meta: "D2C · Social-first",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Live Event Coverage",
    category: "Events",
    meta: "Launch · Multi-cam",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Founder Story",
    category: "Brand Film",
    meta: "Documentary style",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    span: true,
  },
];

const results = [
  { value: "100+", label: "Films delivered" },
  { value: "7+", label: "National brands" },
  { value: "50+", label: "Weddings filmed" },
  { value: "12", label: "Cities covered" },
];

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-24">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Portfolio & results"
          title="Work that performs, not just looks good"
          subtitle="A glimpse of the films and campaigns we've delivered across brands, weddings and live events — built to move people and move numbers."
          light
        />

        {/* Results / impact strip */}
        <div className="scene-3d mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="card-3d-dark px-5 py-7 text-center"
            >
              <p className="font-display text-3xl font-bold text-gold-300 sm:text-4xl">
                <Counter value={r.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cream/55">
                {r.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Project grid with parallax imagery */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ring-1 ring-white/10 ${
                p.span ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  p.span ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Parallax amount={36} className="absolute inset-0">
                  <div className="relative h-[125%] w-full -translate-y-[10%]">
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                  </div>
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <span className="inline-block rounded-full bg-gold-400/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-forest-900">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-cream sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-sm text-cream/60">{p.meta}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-cream transition-all duration-300 group-hover:border-gold-300 group-hover:bg-gold-400 group-hover:text-forest-900">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="btn-primary">
            Start your project <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
