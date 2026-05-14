"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const links = [
  { hash: "about", label: "about" },
  { hash: "stack", label: "stack" },
  { hash: "experience", label: "experience" },
  { hash: "work", label: "work" },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }
  }, [open]);

  function smoothTo(target: string | number) {
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -32, duration: 1.4 });
    } else if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  }

  function handleAnchor(
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) {
    e.preventDefault();
    setOpen(false);
    const target = `#${hash}`;

    if (pathname !== "/") {
      router.push(`/${target}`);
      setTimeout(() => smoothTo(target), 350);
      return;
    }

    smoothTo(target);
    window.history.replaceState(null, "", `/${target}`);
  }

  function handleLogo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setOpen(false);

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => smoothTo(0), 350);
      return;
    }

    smoothTo(0);
    window.history.replaceState(null, "", "/");
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 left-0 right-0 z-40 px-4 sm:top-4"
      >
        <nav className="mx-auto flex w-4xl max-w-full items-center justify-between gap-6 rounded-full border hairline bg-background/75 px-5 py-2.5 shadow-[0_10px_30px_-18px_rgba(32,32,29,0.25)] backdrop-blur-md sm:gap-10 sm:px-6 sm:py-3">
          <a
            href="/"
            onClick={handleLogo}
            className="font-mono text-sm tracking-tight text-foreground"
          >
            aitijya<span className="text-muted">.dev</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 font-mono text-sm text-muted md:flex">
            {links.map((l) => (
              <li key={l.hash}>
                <a
                  href={`/#${l.hash}`}
                  onClick={(e) => handleAnchor(e, l.hash)}
                  className="link"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — inline, no extra border */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-1 flex h-7 w-7 items-center justify-center text-foreground md:hidden"
          >
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-px w-full bg-foreground"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-full bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-px w-full bg-foreground"
              />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 flex flex-col bg-background md:hidden"
          >
            {/* faint background grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--color-rule)_1px,transparent_1px),linear-gradient(90deg,var(--color-rule)_1px,transparent_1px)] [background-size:48px_48px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
            />

            <div className="relative flex flex-1 flex-col justify-between px-6 pb-12 pt-28">
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.hash}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={`/#${l.hash}`}
                      onClick={(e) => handleAnchor(e, l.hash)}
                      className="group flex items-baseline gap-4 border-b hairline py-5"
                    >
                      <span className="font-mono text-xs text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-3xl tracking-tight transition-colors group-hover:text-accent">
                        {l.label}
                      </span>
                      <span className="ml-auto serif text-xl text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="space-y-3 font-mono text-xs text-muted"
              >
                <p className="uppercase tracking-[0.25em] text-subtle">
                  / get in touch
                </p>
                <a
                  href="mailto:aitijyaghosh365@gmail.com"
                  className="link inline-block w-fit text-foreground"
                  onClick={() => setOpen(false)}
                >
                  aitijyaghosh365@gmail.com
                </a>
                <div className="flex gap-4 pt-1">
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
