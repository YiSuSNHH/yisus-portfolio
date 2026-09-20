"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./animations";
import { Separator } from "@/components/ui/separator";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="border-b bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-5xl">
            Experience.
          </h2>
        </FadeIn>

        <div className="mt-12 border-t">
          {experience.map((item, index) => (
            <FadeIn key={item.company} delay={index * 0.05}>
              <article className="grid gap-6 border-b py-8 md:grid-cols-[13rem_1fr] md:py-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.role}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="grid grid-cols-[0.75rem_1fr] gap-2">
                          <span className="font-mono text-primary">+</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        Stack
                      </p>
                      <Separator className="my-3" />
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.techStack.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
