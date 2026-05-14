"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, 0.05, 1] },
          }}
          className="fixed left-0 right-0 top-0 z-[100] flex h-[100dvh] w-full items-center justify-center bg-background"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-baseline justify-center"
          >
            <span className="font-mono text-sm text-muted">aitijya</span>

            {/* connecting underscore — no gaps, sits at underscore height between the two words */}
            <span className="inline-block w-12 translate-y-[5px]">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left center" }}
                className="block h-px bg-foreground"
              />
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="serif ml-[3px] text-2xl leading-none"
            >
              ghosh
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.6, 0.05, 0.05, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px origin-left bg-accent/40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
