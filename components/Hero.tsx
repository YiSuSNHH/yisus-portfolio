"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const infrastructureImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85";

export function Hero() {
  const { personal, about } = portfolioData;
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="border-b bg-background px-4 pb-14 pt-24 md:px-6 md:pb-20">
        <div className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-7xl items-center gap-10 py-8 md:grid-cols-[1.08fr_0.92fr] md:py-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="rounded-md border-primary/35 bg-accent/60 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-foreground">
              {personal.title}
            </Badge>
            <h1 className="mt-6 max-w-[14ch] text-5xl font-semibold tracking-[-0.07em] text-foreground sm:text-6xl lg:text-7xl">
              Engineering resilient backends &amp; high-performance data systems.
            </h1>
            <p className="mt-6 max-w-[58ch] text-base leading-7 text-muted-foreground md:text-lg">
              {about.focus} Specialized in <strong className="font-semibold text-foreground">Java 21 / Spring Boot</strong> and <strong className="font-semibold text-foreground">PHP / Laravel</strong>, Domain-Driven Design (DDD), N+1 query elimination, and high-scale architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 rounded-md px-5">
                <Link href="/resume">
                  View resume
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 rounded-md px-5">
                <a href="#contact">Contact me</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-xl border bg-card"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-zinc-950/55 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-300 backdrop-blur-sm">
              <span>Backend Infrastructure</span>
              <span>Production Systems</span>
            </div>
            <Image
              src={infrastructureImage}
              alt="Server infrastructure in a modern data center"
              width={1600}
              height={1200}
              priority
              className="aspect-[4/3] w-full object-cover grayscale"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-b bg-card px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 py-6 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {personal.name}
            </p>
            <p className="mt-1 text-sm text-foreground">
              {personal.location}
            </p>
          </div>
          <Separator orientation="vertical" className="hidden h-9 md:block" />
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 transition hover:text-foreground" href={`mailto:${personal.email}`}>
              <Mail size={15} />
              Email
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-foreground" href={personal.github} target="_blank" rel="noopener noreferrer">
              <Github size={15} />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-foreground" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
