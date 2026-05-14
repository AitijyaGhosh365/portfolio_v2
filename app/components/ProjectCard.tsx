"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "../lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block border-t hairline py-8 transition-colors hover:border-foreground/30"
      >
        <div className="flex items-baseline justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl tracking-tight sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <p className="mt-3 max-w-xl pl-12 text-sm text-muted sm:text-base">
              {project.tagline}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 pl-12 font-mono text-[11px] uppercase tracking-wider text-subtle">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-baseline gap-4">
            <span className="font-mono text-xs text-muted">{project.year}</span>
            <motion.span
              className="inline-block font-serif text-2xl text-muted transition-colors group-hover:text-accent"
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
            >
              →
            </motion.span>
          </div>
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        />
      </Link>
    </motion.div>
  );
}
