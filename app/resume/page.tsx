"use client";

import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/portfolio";

export default function ResumePage() {
  const { personal, about, skills, experience, education } = portfolioData;

  return (
    <>
      <header className="no-print fixed inset-x-0 top-0 z-50 border-b bg-background/92 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
          <Button asChild variant="ghost" className="px-2">
            <Link href="/">
              <ArrowLeft data-icon="inline-start" />
              Portfolio
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href="/resume/harvard">
                Harvard B&W Style
              </Link>
            </Button>
            <ThemeToggle />
            <Button type="button" onClick={() => window.print()} className="rounded-md">
              <Printer data-icon="inline-start" />
              Print PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="min-h-[100dvh] bg-muted px-4 pb-10 pt-24 md:px-6 print:bg-white print:px-0 print:pt-0">
        <article className="mx-auto max-w-5xl space-y-4 rounded-xl border bg-background p-6 shadow-sm md:p-9 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <section>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
              Technical Engineer
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <h1 className="text-4xl font-semibold tracking-[-0.06em] text-foreground">
                  {personal.name}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {about.summary}
                </p>
              </div>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <a className="flex items-center gap-2 transition hover:text-foreground" href={`mailto:${personal.email}`}>
                  <Mail size={14} />
                  {personal.email}
                </a>
                <a className="flex items-center gap-2 transition hover:text-foreground" href={`tel:${personal.phone.replace(/\s/g, "")}`}>
                  <Phone size={14} />
                  {personal.phone}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  {personal.location}
                </span>
                <a className="flex items-center gap-2 transition hover:text-foreground" href={personal.github}>
                  <Github size={14} />
                  GitHub
                </a>
                <a className="flex items-center gap-2 transition hover:text-foreground" href={personal.linkedin}>
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Technical skills
            </h2>
            <div className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
              <SkillGroup title="Languages & frameworks" value={skills.languages.map((item) => `${item.name}: ${item.frameworks.join(", ")}`).join("; ")} />
              <SkillGroup title="Databases" value={skills.databases.join(", ")} />
              <SkillGroup title="Architecture & design" value={skills.architecture.join(", ")} />
              <SkillGroup title="Security & auth" value={skills.security.join(", ")} />
              <SkillGroup title="Engineering principles" value={skills.engineering.join(", ")} />
              <SkillGroup title="Tools & platforms" value={skills.tools.join(", ")} />
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Professional experience
            </h2>
            <div className="mt-5 space-y-8">
              {experience.map((item) => (
                <div key={item.company}>
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm leading-6 text-muted-foreground">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="grid grid-cols-[0.7rem_1fr] gap-2">
                        <span className="font-mono text-primary">+</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-4">
                    {item.projects.map((project) => (
                      <div key={project.name} className="border-l-2 border-primary/30 pl-4">
                        <p className="text-sm font-medium text-foreground">
                          {project.name} <span className="font-normal text-primary">- {project.tech}</span>
                        </p>
                        <ul className="mt-2 space-y-1 text-sm leading-6 text-muted-foreground">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>- {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Education
            </h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:justify-between">
              <p>
                <span className="font-medium text-foreground">{education.school}</span>
                <br />
                {education.degree} - {education.major}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em]">
                {education.period}
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

function SkillGroup({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-primary">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{value}</p>
    </div>
  );
}
