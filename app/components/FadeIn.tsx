"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof motion;
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      custom={{ delay, y }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
