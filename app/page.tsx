"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { LogoLotus } from "@/components/Logo";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const { personal } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/92 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Nguyen Huy Hung home">
            <LogoLotus size={26} />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              Nguyen Huy Hung
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="rounded-md">
              <Link href="/resume">Resume</Link>
            </Button>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t bg-background px-4 py-4 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="mx-auto grid max-w-7xl gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="sm" className="mt-1 w-fit rounded-md">
                  <Link href="/resume">Resume</Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="bg-zinc-950 px-4 py-9 text-zinc-300 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm">
              Nguyen Huy Hung. Technical Engineer.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
              <a className="inline-flex items-center gap-2 transition hover:text-zinc-100" href={personal.github} target="_blank" rel="noopener noreferrer">
                <Github size={15} />
                GitHub
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-zinc-100" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-zinc-100" href={`mailto:${personal.email}`}>
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>
          <Separator className="my-6 bg-white/10" />
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500">
            Ho Chi Minh City, Vietnam
          </p>
        </div>
      </footer>
    </main>
  );
}
