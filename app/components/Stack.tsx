"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";
import StackTree from "./StackTree";

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden border-y hairline py-32"
    >
      {/* background grid + radial mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--color-rule)_1px,transparent_1px),linear-gradient(90deg,var(--color-rule)_1px,transparent_1px)] [background-size:64px_64px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      {/* floating decorations */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-[6%] top-[18%] h-32 w-32 rounded-full border border-dashed border-subtle/40 sm:h-48 sm:w-48"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-[5%] bottom-[15%] h-28 w-28 rounded-full border border-dashed border-accent/30 sm:h-40 sm:w-40"
      />

      {/* corner labels */}
      <div className="pointer-events-none absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle sm:left-10 sm:top-10">
        <span className="text-accent">+</span> fig. 02
      </div>
      <div className="pointer-events-none absolute right-6 top-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-subtle sm:right-10 sm:top-10 sm:block">
        toolkit · 2026
      </div>
      <div className="pointer-events-none absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle sm:bottom-10 sm:right-10">
        <span className="text-accent">▸</span> $ stack --tree
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            / stack
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
            The tools I <span className="serif text-accent">reach for</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Day-to-day kit, from the languages I think in to the runtimes I
            ship on. Not a complete list — just the ones I actually keep open.
          </p>
        </FadeIn>

        {/* annotated callouts on the sides */}
        <div className="relative mt-14">
          {/* left annotation */}
          <div className="pointer-events-none absolute -left-2 top-10 hidden -translate-x-full pr-6 text-right lg:block">
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              ↘ where I live
            </p>
            <p className="mt-1 max-w-[140px] font-mono text-[10px] uppercase tracking-wider text-muted">
              python &amp; typescript daily
            </p>
          </div>
          {/* right annotation */}
          <div className="pointer-events-none absolute -right-2 top-[55%] hidden translate-x-full pl-6 lg:block">
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              ↙ shipped to play store
            </p>
            <p className="mt-1 max-w-[150px] font-mono text-[10px] uppercase tracking-wider text-muted">
              react native + kotlin
            </p>
          </div>

          <FadeIn delay={0.2}>
            <StackTree />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
