"use client";

import { Database, KeyRound, Layers3, TerminalSquare, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./animations";
import { Separator } from "@/components/ui/separator";

const groups = [
  { key: "architecture", title: "Architecture", icon: Layers3 },
  { key: "databases", title: "Data", icon: Database },
  { key: "security", title: "Security", icon: KeyRound },
  { key: "engineering", title: "Engineering", icon: Wrench },
  { key: "tools", title: "Delivery", icon: TerminalSquare },
] as const;

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="border-b bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-5xl">
              Requirements to specs, domain depth to delivery.
            </h2>
            <p className="mt-4 max-w-[62ch] leading-7 text-muted-foreground">
              I focus on bridging business vision with engineering execution through clear specifications, domain modeling, data integrity, access control, and operational reliability.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <FadeIn direction="left">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
              Primary stack
            </p>
            <div className="mt-5 space-y-5">
              {skills.languages.map((language, index) => (
                <div key={language.name}>
                  {index > 0 && <Separator className="mb-5" />}
                  <div className="grid gap-2 sm:grid-cols-[11rem_1fr]">
                    <p className="font-medium text-foreground">{language.name}</p>
                    <div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {language.frameworks.join(", ")}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                        {language.level}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2">
            {groups.map(({ key, title, icon: Icon }, index) => (
              <FadeIn
                key={title}
                delay={index * 0.04}
                className="bg-card p-5 md:p-6"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-primary" />
                  <h3 className="font-medium text-foreground">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {skills[key].join(", ")}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
