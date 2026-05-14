"use client";

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-32 sm:px-10">
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          / about
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="mt-8 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl">
          I like building things that{" "}
          <span className="serif text-accent">ship</span> — and the
          unglamorous work that gets them there.
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-10 grid gap-6 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m an undergraduate at the{" "}
            <span className="text-foreground">
              Institute of Engineering and Management, Kolkata
            </span>
            , finishing a CSE degree in 2027 with a 9.24 CGPA. My time splits
            between coursework, side projects, and a remote engineering role —
            and honestly, the role is where most of the real learning happens.
          </p>
          <p>
            Outside of work, I lean into{" "}
            <span className="text-foreground">AI tooling</span> and{" "}
            <span className="text-foreground">applied ML</span>. Recent
            obsessions: an LLM-driven candidate evaluation platform, and a
            fantasy cricket predictor that placed fourth nationally. If a
            project lets me argue with a model or chase a stubborn bug,
            I&apos;m probably in.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
