"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib/projects";

export default function Work() {
  const featured = projects.slice(0, 3);

  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-32 sm:px-10">
      <FadeIn>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              / selected work
            </p>
            <h2 className="mt-6 text-3xl tracking-tight sm:text-4xl">
              Things I&apos;ve <span className="serif text-accent">made</span>.
            </h2>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-widest text-subtle sm:block">
            03 / {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </FadeIn>

      <div className="mt-14">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
        <div className="border-t hairline" />
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border hairline bg-background px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 ease-out hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <span>explore more projects</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
