"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-forest-900">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/85 via-forest-900/75 to-forest-900" />
      <div className="grain absolute inset-0 opacity-50" />

      <div className="container-px relative pt-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <span className="h-px w-8 bg-gold-400" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-cream sm:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9"
        >
          <Link href="/contact" className="btn-primary">
            Enquire now <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
