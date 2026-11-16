"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  duration?: number;
};

const variants = {
  up: { y: 36, x: 0, scale: 1 },
  left: { y: 0, x: -48, scale: 1 },
  right: { y: 0, x: 48, scale: 1 },
  scale: { y: 0, x: 0, scale: 0.85 },
};

/**
 * Wraps content so it animates into place the first time it scrolls into
 * view. Keeps every section of the one-pager from feeling like a static
 * document — content drifts and fades in as the visitor scrolls.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: RevealProps) {
  const offset = variants[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
