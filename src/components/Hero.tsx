"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { site } from "@/lib/site";

const words = ["brands.", "people.", "ideas.", "campaigns."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-900"
    >
      {/* Animated cinematic backdrop */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-x-0 -top-[12%] h-[124%] bg-cover bg-center will-change-transform"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1920&q=80)",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/85 to-forest-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/40 to-transparent" />
        <div className="grain absolute inset-0 opacity-50" />
      </div>

      {/* Floating glow accents */}
      <motion.div
        aria-hidden
        className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-forest-400/20 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px relative grid w-full items-center gap-12 pt-28 will-change-transform lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-gold-400" />
            Film &amp; Visual Production · {site.city}
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              We produce{" "}
              <span className="relative inline-block text-gold-300">
                films
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gold-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9, delay: 0.9 }}
                />
              </span>
              .
            </motion.span>
            <span className="mt-4 flex h-[1.5em] items-center overflow-hidden pb-[0.12em] font-display text-3xl leading-none text-cream/80 sm:text-4xl">
              <span className="mr-3 text-cream/50">For</span>
              <span className="relative inline-grid">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    className="col-start-1 row-start-1 whitespace-nowrap text-gold-300"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: ["100%", "0%", "0%", "-100%"],
                    }}
                    transition={{
                      duration: 2.4,
                      times: [0, 0.15, 0.85, 1],
                      repeat: Infinity,
                      delay: i * 2.4,
                      repeatDelay: (words.length - 1) * 2.4,
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            The Groove Media is a film and visual production company based in
            Chennai. We work across advertising, branded content and campaign
            films — creating visuals that are clear, cinematic and built for
            modern audiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Start your project <ArrowRight size={18} />
            </Link>
            <Link href="/weddings" className="btn-ghost">
              <Play size={16} /> See our work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex items-center gap-4 text-sm text-cream/60"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-gold-300 text-gold-300"
                />
              ))}
            </div>
            <span>
              <strong className="text-cream">{site.rating.value}</strong> rated
              · trusted by {site.rating.count} brands &amp; clients
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass-card absolute -left-8 bottom-12 flex items-center gap-3 px-5 py-4 text-cream"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-forest-900">
              <Play size={18} className="fill-forest-900" />
            </span>
            <div>
              <p className="text-xl font-bold">100+</p>
              <p className="text-xs text-cream/60">Films &amp; campaigns</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/40 sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
