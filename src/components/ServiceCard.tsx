"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-forest-900 shadow-[0_22px_44px_-20px_rgba(0,0,0,0.7),0_8px_18px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-[0_34px_60px_-22px_rgba(0,0,0,0.78),0_14px_26px_-12px_rgba(240,187,36,0.28)] hover:ring-gold-300/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
      </div>

      <div className="relative -mt-16 flex flex-col gap-4 p-7">
        <span className="eyebrow text-gold-300">{service.short}</span>
        <h3 className="font-display text-2xl font-bold text-cream">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-cream/65">
          {service.description}
        </p>
        <Link
          href={`/${service.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
        >
          Explore service
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
