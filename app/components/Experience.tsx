"use client";

import FadeIn from "./FadeIn";
import { motion } from "motion/react";

function CompanyBadge({
  letter,
  logo,
  alt,
}: {
  letter?: string;
  logo?: string;
  alt?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -30 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center"
      aria-hidden
    >
      {/* core circle */}
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-background shadow-[0_6px_18px_-6px_rgba(168,66,27,0.45)] ring-1 ring-rule">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={alt ?? ""}
            width={36}
            height={36}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <span className="serif text-base leading-none text-foreground">
            {letter}
          </span>
        )}
      </div>

      {/* dashed rotating orbit + traveling dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-accent/40"
      >
        <span className="absolute -top-[3px] left-1/2 block h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(168,66,27,0.35)]" />
      </motion.div>

      {/* second slower outer ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1.5 rounded-full border border-subtle/60"
      >
        <span className="absolute top-1/2 -right-[3px] block h-1 w-1 -translate-y-1/2 rounded-full bg-accent/70" />
      </motion.div>
    </motion.div>
  );
}

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  href?: string;
  badge?: string;
  logo?: string;
};

const roles: Role[] = [
  {
    company: "Silvo Labs",
    role: "React Native Developer",
    period: "Dec 2024 — Feb 2026",
    location: "Remote",
    href: "#",
    badge: "S",
    logo: "/images/silvo.webp",
    bullets: [
      "Designed and shipped Silvo, a gamified productivity app, to the Google Play Store — owned the React Native build end-to-end.",
      "Architected an offline-first storage layer so every feature works without a network connection; sync is icing, not the cake.",
      "Wired up RevenueCat subscriptions and Google AdMob, including the edge cases that only show up once real users start refunding and restoring purchases.",
      "Built analytics and engagement tracking that surface habit patterns and the signals that actually move retention.",
      "Profiled and tuned the React Native render pipeline so the app stays smooth on low-end Android hardware.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-6 py-32 sm:px-10"
    >
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          / experience
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="mt-8 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl">
          Where I&apos;ve <span className="serif text-accent">worked</span>.
        </h2>
      </FadeIn>

      <div className="mt-14 space-y-16">
        {roles.map((r, i) => (
          <FadeIn key={r.company} delay={0.05 * i}>
            <article className="group relative grid grid-cols-1 gap-6 border-t hairline pt-10 sm:grid-cols-[180px_1fr]">
              {/* timeline pill */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {r.period}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  {r.location}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  {(r.badge || r.logo) && (
                    <CompanyBadge
                      letter={r.badge}
                      logo={r.logo}
                      alt={`${r.company} logo`}
                    />
                  )}
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl tracking-tight transition-colors hover:text-accent sm:text-3xl"
                    >
                      {r.company}{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <h3 className="text-2xl tracking-tight sm:text-3xl">
                      {r.company}
                    </h3>
                  )}
                  <span className="serif text-xl text-muted">— {r.role}</span>
                </div>

                <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted sm:text-lg">
                  {r.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.08 * j,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative pl-6"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.75em] block h-px w-3 bg-subtle"
                      />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
