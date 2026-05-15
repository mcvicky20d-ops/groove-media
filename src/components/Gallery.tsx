"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  images: { src: string; alt: string }[];
};

export default function Gallery({ images }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
          className={`group relative overflow-hidden rounded-2xl ${
            i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-forest-900/0 transition-colors duration-500 group-hover:bg-forest-900/30" />
        </motion.div>
      ))}
    </div>
  );
}
