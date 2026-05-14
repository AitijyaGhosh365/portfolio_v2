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
            I&apos;m <span className="serif text-accent">Aitijya Ghosh</span>{" "}
            — a 20-year-old CS undergraduate at the{" "}
            <span className="text-foreground">
              Institute of Engineering and Management, Kolkata
            </span>
            . I work the{" "}
            <span className="text-foreground">full stack</span> and lean hard
            into <span className="text-foreground">AI / ML</span>, but what
            really pulls me in is the space where code meets{" "}
            <span className="text-foreground">creativity</span> — problems
            where the obvious answer isn&apos;t quite right and you have to
            feel your way to something better.
          </p>
          <p>
            Under the surface, I&apos;ve put in the reps —{" "}
            <span className="text-foreground">300+ LeetCode problems</span>,
            well over{" "}
            <span className="text-foreground">1,000 coding challenges</span>,
            and a foundation in{" "}
            <span className="text-foreground">
              data structures and algorithms
            </span>{" "}
            I keep sharpening. I like puzzles that need more than a memorised
            pattern — the ones where you sit with the problem for a while and
            earn a cleaner solution.
          </p>
          <p>
            That instinct has carried me through an{" "}
            <span className="text-foreground">
              LLM-driven candidate evaluation platform
            </span>
            , a <span className="text-foreground">React Native app</span> that
            lives on the Play Store, and a machine-learning model that placed
            fourth nationally for IPL fantasy. Different stacks, same itch:
            build something that didn&apos;t exist yesterday and keep poking
            at it until it feels right.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
