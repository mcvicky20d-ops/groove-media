"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

/**
 * Counts a numeric value up when scrolled into view. If `value` has no
 * leading number (e.g. "Chennai") it's rendered as-is. A trailing
 * non-digit suffix (e.g. the "+" in "100+") is preserved.
 */
export default function Counter({ value }: { value: string }) {
  const match = value.match(/^(\d[\d,]*)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!match) {
    return <span>{value}</span>;
  }

  const target = parseInt(match[1].replace(/,/g, ""), 10);
  const suffix = match[2];

  return (
    <span ref={ref}>
      <AnimatedNumber target={target} run={inView} />
      {suffix}
    </span>
  );
}

function AnimatedNumber({
  target,
  run,
}: {
  target: number;
  run: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!run) return;
    const controls = animate(count, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [run, target, count]);

  return <motion.span>{display}</motion.span>;
}
