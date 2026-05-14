import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import { projects, getProject } from "../../lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project — Aitijya Ghosh" };
  return {
    title: `${project.title} — Aitijya Ghosh`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Nav />
      <article className="mx-auto max-w-2xl px-6 pt-36 pb-10 sm:px-10">
        <FadeIn>
          <Link
            href="/projects"
            className="link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span>←</span> all projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-muted">
            <span>{project.year}</span>
            <span className="flex flex-wrap gap-x-3">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="mt-6 text-5xl tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-xl leading-snug text-muted sm:text-2xl">
            <span className="serif text-accent">{project.tagline}</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-10 border-l-2 border-accent/40 pl-6 text-base leading-relaxed text-foreground sm:text-lg">
            {project.summary}
          </p>
        </FadeIn>

        {project.links && project.links.length > 0 && (
          <FadeIn delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </FadeIn>
        )}

        <div className="mt-20 space-y-16">
          {project.body.map((section, i) => (
            <FadeIn key={section.heading} delay={0.05 * i}>
              <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  / {section.heading}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-foreground sm:text-lg">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-24 border-t hairline pt-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              / next up
            </p>
            <Link
              href={`/projects/${next.slug}`}
              className="group mt-4 flex items-baseline justify-between gap-6"
            >
              <span className="text-3xl tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
                {next.title}
              </span>
              <span className="serif text-2xl text-muted transition-transform duration-500 group-hover:translate-x-2 group-hover:text-accent">
                →
              </span>
            </Link>
            <p className="mt-3 max-w-md text-sm text-muted">{next.tagline}</p>
          </div>
        </FadeIn>
      </article>
      <Footer />
    </>
  );
}
