import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Projects — Aitijya Ghosh",
  description: "A selection of projects by Aitijya Ghosh.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-36 sm:px-10">
        <FadeIn>
          <Link
            href="/"
            className="link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span>←</span> back
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            / archive
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="mt-6 text-5xl tracking-tight sm:text-6xl">
            All <span className="serif text-accent">projects</span>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            A running list of things I&apos;ve built — shipped, abandoned, or
            still in progress. Click any of them for the long version.
          </p>
        </FadeIn>

        <div className="mt-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
          <div className="border-t hairline" />
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-16 font-mono text-xs text-muted">
            more coming soon — I keep a few things in the oven at all times.
          </p>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
