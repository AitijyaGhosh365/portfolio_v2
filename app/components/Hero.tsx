"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center overflow-hidden px-6 pt-28 pb-20 sm:px-10">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* LEFT — writing */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] animate-pulse rounded-full bg-accent" />
            available for work · 2026
          </motion.p>

          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="serif text-accent">Aitijya</span>.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            A computer science undergrad at IEM Kolkata who builds{" "}
            <span className="text-foreground">AI tooling</span>, ships{" "}
            <span className="text-foreground">mobile apps</span>, and trains
            the <span className="text-foreground">occasional ML model</span>{" "}
            that places nationally. I care most about software that ends up in
            real hands — not in a slide deck.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-sm"
          >
            <a
              href="mailto:aitijyaghosh365@gmail.com"
              className="link inline-flex items-center gap-2 text-foreground"
            >
              <HiOutlineMail className="h-4 w-4" aria-hidden />
              say hello
            </a>
            <span className="text-subtle">/</span>
            <a
              href="https://github.com/AitijyaGhosh365"
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-2 text-foreground"
            >
              <SiGithub className="h-4 w-4" aria-hidden />
              github
            </a>
            <span className="text-subtle">/</span>
            <a
              href="https://linkedin.com/in/aitijya-ghosh-98047a293"
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-2 text-foreground"
            >
              <FaLinkedin className="h-4 w-4" aria-hidden />
              linkedin
            </a>
            <span className="text-subtle">/</span>
            <a
              href="https://www.instagram.com/aitijya_ghosh/"
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-2 text-foreground"
            >
              <SiInstagram className="h-4 w-4" aria-hidden />
              instagram
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo card + resume button */}
        <motion.div
          initial={{ x: 140, opacity: 0, rotate: 3 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{
            duration: 1.4,
            delay: 1.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 mx-auto flex w-full max-w-sm flex-col items-stretch gap-5 md:order-2 md:ml-auto md:mr-0"
        >
          <motion.div
            whileHover={{ y: -4, rotate: -1.2 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{
              borderRadius: "2.5rem",
              willChange: "transform",
              isolation: "isolate",
              WebkitMaskImage:
                "-webkit-radial-gradient(white, black)",
            }}
            className="group relative aspect-[4/5] w-full overflow-hidden border hairline bg-[color-mix(in_oklab,var(--accent-soft)_8%,var(--background))] shadow-[0_40px_90px_-50px_rgba(168,66,27,0.35),0_10px_30px_-20px_rgba(32,32,29,0.15)]"
          >
            <Image
              src="/images/hero-aj-ghibli.png"
              alt="Aitijya Ghosh"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover"
            />
            {/* subtle inner frame */}
            <div className="pointer-events-none absolute inset-2 rounded-[2.2rem] ring-1 ring-foreground/5" />

            {/* corner caption */}
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted backdrop-blur-md">
              <span>kolkata · in</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                online
              </span>
            </div>
          </motion.div>

          {/* dashed orbit accent behind card */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 1, delay: 2.4 },
              rotate: {
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="pointer-events-none absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full border border-dashed border-subtle/40 md:h-56 md:w-56"
          />

          {/* Resume button — opens Drive viewer in a new tab */}
          <motion.a
            href="https://drive.google.com/file/d/1HwAp7PKeBHGFI_YXrzkswIsrTJ7jHolj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center justify-between gap-3 rounded-full border hairline bg-background px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-300 ease-out hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5"
                aria-hidden
              >
                <path
                  d="M5 12h14m0 0l-5-5m5 5l-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              view resume
            </span>
            <span className="font-sans text-[10px] tracking-widest text-muted transition-colors duration-300 group-hover:text-background/70">
              .pdf
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll cue (desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span>scroll</span>
          <span className="block h-6 w-px bg-subtle" />
        </motion.div>
      </motion.div>
    </section>
  );
}
