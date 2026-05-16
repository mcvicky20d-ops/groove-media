"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Vertical travel in px across the scroll range. Higher = stronger. */
  amount?: number;
  className?: string;
};

/**
 * Wraps content and shifts it on the Y axis as it scrolls through the
 * viewport, creating a subtle depth / parallax effect.
 */
export default function Parallax({
  children,
  amount = 60,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
