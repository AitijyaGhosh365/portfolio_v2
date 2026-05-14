"use client";

import FadeIn from "./FadeIn";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-16 pt-32 sm:px-10">
      <FadeIn>
        <div className="border-t hairline pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            / get in touch
          </p>
          <h2 className="mt-8 text-3xl tracking-tight sm:text-5xl">
            Building something{" "}
            <span className="serif text-accent">interesting</span>?
          </h2>
          <p className="mt-6 max-w-md text-muted">
            I&apos;m always up for a conversation about AI, mobile, ML, or the
            specific stack you can&apos;t get out of your head. Drop a note.
          </p>

          <div className="mt-10 grid gap-2 font-mono text-sm">
            <a
              href="mailto:aitijyaghosh365@gmail.com"
              className="link inline-block w-fit"
            >
              aitijyaghosh365@gmail.com
            </a>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t hairline pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Aitijya Ghosh · Kolkata, India
            </p>
            <p className="flex items-center gap-4">
              <a
                href="https://github.com/AitijyaGhosh365"
                target="_blank"
                rel="noreferrer"
                className="link inline-flex items-center gap-1.5"
              >
                <SiGithub className="h-3.5 w-3.5" aria-hidden />
                github
              </a>
              <a
                href="https://linkedin.com/in/aitijya-ghosh-98047a293"
                target="_blank"
                rel="noreferrer"
                className="link inline-flex items-center gap-1.5"
              >
                <FaLinkedin className="h-3.5 w-3.5" aria-hidden />
                linkedin
              </a>
              <a
                href="https://www.instagram.com/aitijya_ghosh/"
                target="_blank"
                rel="noreferrer"
                className="link inline-flex items-center gap-1.5"
              >
                <SiInstagram className="h-3.5 w-3.5" aria-hidden />
                instagram
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
