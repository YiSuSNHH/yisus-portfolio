"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const systemImage =
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=85";

export function Projects() {
  const [featured, ...projects] = portfolioData.featuredProjects;

  return (
    <section id="projects" className="border-b bg-card px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-5xl">
            Selected systems.
          </h2>
          <p className="mt-4 max-w-[62ch] leading-7 text-muted-foreground">
            Work shaped by business constraints, service boundaries, and the
            realities of running software in production.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <FadeIn className="overflow-hidden rounded-xl border bg-background">
            <Image
              src={systemImage}
              alt="Software engineering workspace with code on a monitor"
              width={1600}
              height={900}
              className="aspect-[16/8] w-full object-cover grayscale"
            />
            <div className="p-6 md:p-8">
              <Badge variant="outline" className="rounded-md font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                {featured.role}
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-foreground md:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-3 text-sm font-medium text-primary">
                {featured.tech}
              </p>
              <p className="mt-4 max-w-[62ch] text-sm leading-7 text-muted-foreground">
                {featured.summary}
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <FadeIn
                key={project.name}
                delay={index * 0.05}
                className="rounded-xl border bg-background p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                  {project.context}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-foreground">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm font-medium text-primary">
                  {project.tech}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {project.summary}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        <Button asChild variant="link" className="mt-6 h-auto px-0 text-primary">
          <Link href="/resume">
            Read the full resume
            <ArrowUpRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
