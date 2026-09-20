"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const offset = {
    up: { x: 0, y: 18 },
    left: { x: 18, y: 0 },
    right: { x: -18, y: 0 },
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
