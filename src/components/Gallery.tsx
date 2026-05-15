"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  images: { src: string; alt: string }[];
};

export default function Gallery({ images }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
      {images.map((img, i) => (
        <motion.figure
          key={img.src + i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-100"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-sm font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {img.alt}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
