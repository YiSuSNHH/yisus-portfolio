"use client";

import Link from "next/link";
import { ArrowLeft, Briefcase, ChevronRight, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Printer, Shield, Sparkles, UserCheck } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/portfolio";

export default function ResumePage() {
  const { personal, about, skills, experience, education, references } = portfolioData;

  return (
    <>
      <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-background/95 backdrop-blur-md dark:border-zinc-800/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
          <Button asChild variant="ghost" className="gap-2 px-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Portfolio
            </Link>
          </Button>
          <div className="flex items-center gap-2.5">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex rounded-lg border-zinc-300 dark:border-zinc-700">
              <Link href="/resume/harvard">
                <FileText className="size-3.5 mr-1.5 text-muted-foreground" />
                Harvard B&amp;W Style
              </Link>
            </Button>
            <ThemeToggle />
            <Button type="button" onClick={() => window.print()} className="rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
              <Printer className="size-4 mr-1.5" />
              Print PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="min-h-[100dvh] bg-zinc-100/70 dark:bg-zinc-950 px-4 pb-20 pt-24 md:px-6 print:bg-white print:px-0 print:py-0">
        <article className="mx-auto max-w-5xl space-y-10 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/90 p-8 shadow-sm md:p-12 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none print:space-y-6 print:text-black">
          
          {/* Header Profile Section */}
          <section className="space-y-5 print:space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 print:border-0 print:bg-transparent print:p-0 print:text-black print:font-bold">
                <span className="relative flex size-2 print:hidden">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                </span>
                {personal.title}
              </div>
              <span className="font-mono text-xs text-muted-foreground print:text-zinc-700 print:text-[11px]">Ho Chi Minh City, Vietnam</span>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_auto] print:grid-cols-1 print:gap-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl print:text-2xl print:font-bold">
                  {personal.name}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base print:text-xs print:leading-relaxed text-justify">
                  {about.summary}
                </p>
              </div>

              {/* Contact Chips */}
              <div className="flex flex-col gap-2.5 font-mono text-xs text-muted-foreground md:items-end print:flex-row print:flex-wrap print:gap-4 print:text-[11px] print:text-black">
                <a className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 transition hover:border-zinc-300 hover:text-foreground dark:hover:border-zinc-700 print:border-0 print:p-0 print:bg-transparent" href={`mailto:${personal.email}`}>
                  <Mail size={13} className="text-primary print:hidden" />
                  {personal.email}
                </a>
                <a className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 transition hover:border-zinc-300 hover:text-foreground dark:hover:border-zinc-700 print:border-0 print:p-0 print:bg-transparent" href={`tel:${personal.phone.replace(/\s/g, "")}`}>
                  <Phone size={13} className="text-primary print:hidden" />
                  {personal.phone}
                </a>
                <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 print:border-0 print:p-0 print:bg-transparent">
                  <MapPin size={13} className="text-primary print:hidden" />
                  {personal.location}
                </span>
                <div className="flex items-center gap-2 print:gap-4">
                  <a className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 transition hover:text-foreground hover:border-zinc-300 dark:hover:border-zinc-700 print:border-0 print:p-0 print:bg-transparent" href={personal.github} target="_blank" rel="noopener noreferrer">
                    <Github size={13} className="print:hidden" />
                    GitHub
                  </a>
                  <a className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 transition hover:text-foreground hover:border-zinc-300 dark:hover:border-zinc-700 print:border-0 print:p-0 print:bg-transparent" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={13} className="print:hidden" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 print:my-4" />

          {/* Technical Skills Section */}
          <section className="space-y-6 print:space-y-3">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-100 dark:border-zinc-800/60 print:border-b print:border-black print:pb-1">
              <Sparkles className="size-4 text-emerald-600 dark:text-emerald-400 print:hidden" />
              <h2 className="text-lg font-bold tracking-tight text-foreground uppercase text-xs font-mono tracking-wider print:text-xs print:font-bold">
                Technical Skills &amp; Proficiency
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 print:grid-cols-2 print:gap-3">
              
              {/* Core Languages */}
              <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-900/50 p-4 space-y-2.5 print:border print:border-zinc-300 print:p-2.5 print:bg-transparent print:space-y-1.5 print:rounded-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold print:text-[10.5px] print:text-black print:font-bold print:border-b print:border-zinc-200 print:pb-1">
                  Core Languages &amp; Frameworks
                </h3>
                <div className="flex flex-wrap gap-2 pt-0.5 print:gap-1.5">
                  {skills.languages.map((item) => (
                    <div key={item.name} className="flex flex-wrap items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 px-2.5 py-1.5 text-xs print:border print:border-zinc-300 print:bg-white print:px-2 print:py-1 print:rounded-md print:text-[10.5px] print:shadow-none">
                      <span className="font-semibold text-foreground print:text-black">{item.name}</span>
                      <span className="text-muted-foreground print:text-zinc-700">({item.frameworks.join(", ")})</span>
                      <LevelBadge level={item.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-900/50 p-4 space-y-2.5 print:border print:border-zinc-300 print:p-2.5 print:bg-transparent print:space-y-1.5 print:rounded-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold print:text-[10.5px] print:text-black print:font-bold print:border-b print:border-zinc-200 print:pb-1">
                  Databases &amp; Data Engineering
                </h3>
                <div className="flex flex-wrap gap-2 pt-0.5 print:gap-1.5">
                  {skills.databases.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 px-2.5 py-1.5 text-xs print:border print:border-zinc-300 print:bg-white print:px-2 print:py-1 print:rounded-md print:text-[10.5px] print:shadow-none">
                      <span className="font-semibold text-foreground print:text-black">{item.name}</span>
                      <LevelBadge level={item.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-900/50 p-4 space-y-2.5 print:border print:border-zinc-300 print:p-2.5 print:bg-transparent print:space-y-1.5 print:rounded-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold print:text-[10.5px] print:text-black print:font-bold print:border-b print:border-zinc-200 print:pb-1">
                  Architecture &amp; System Design
                </h3>
                <div className="flex flex-wrap gap-2 pt-0.5 print:gap-1.5">
                  {skills.architecture.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 px-2.5 py-1.5 text-xs print:border print:border-zinc-300 print:bg-white print:px-2 print:py-1 print:rounded-md print:text-[10.5px] print:shadow-none">
                      <span className="text-foreground print:text-black print:font-medium">{item.name}</span>
                      <LevelBadge level={item.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Security & DevOps */}
              <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-900/50 p-4 space-y-2.5 print:border print:border-zinc-300 print:p-2.5 print:bg-transparent print:space-y-1.5 print:rounded-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold print:text-[10.5px] print:text-black print:font-bold print:border-b print:border-zinc-200 print:pb-1">
                  Security &amp; DevOps Engineering
                </h3>
                <div className="flex flex-wrap gap-2 pt-0.5 print:gap-1.5">
                  {skills.security.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 px-2.5 py-1.5 text-xs print:border print:border-zinc-300 print:bg-white print:px-2 print:py-1 print:rounded-md print:text-[10.5px] print:shadow-none">
                      <span className="text-foreground print:text-black print:font-medium">{item.name}</span>
                      <LevelBadge level={item.level} />
                    </div>
                  ))}
                  {skills.tools.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 px-2.5 py-1.5 text-xs print:border print:border-zinc-300 print:bg-white print:px-2 print:py-1 print:rounded-md print:text-[10.5px] print:shadow-none">
                      <span className="text-foreground print:text-black print:font-medium">{item.name}</span>
                      <LevelBadge level={item.level} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 print:my-4" />

          {/* Professional Experience Section */}
          <section className="space-y-6 print:space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-100 dark:border-zinc-800/60 print:border-b print:border-black print:pb-1">
              <Briefcase className="size-4 text-emerald-600 dark:text-emerald-400 print:hidden" />
              <h2 className="text-lg font-bold tracking-tight text-foreground uppercase text-xs font-mono tracking-wider print:text-xs print:font-bold">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-8 print:space-y-5">
              {experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="space-y-4 print:space-y-2.5 print:break-inside-avoid">
                  
                  {/* Company Header */}
                  <div className="flex flex-col gap-1.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/40 p-4 sm:flex-row sm:items-center sm:justify-between print:bg-transparent print:p-0">
                    <div>
                      <h3 className="text-base font-bold text-foreground print:text-xs print:font-bold print:inline">{item.company}</h3>
                      <span className="hidden print:inline font-bold"> — </span>
                      <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 print:text-xs print:text-zinc-800 print:inline print:font-normal">
                        {item.role}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground sm:text-right print:text-[11px] print:text-zinc-700">
                      <span>{item.period}</span>
                      <span className="mx-2">|</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-1.5 text-xs leading-relaxed text-muted-foreground px-2 print:px-0 print:space-y-1">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 print:gap-1.5 print:text-[11px]">
                        <ChevronRight size={14} className="mt-0.5 text-emerald-500 shrink-0 print:hidden" />
                        <span className="hidden print:inline text-black font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Projects Grid */}
                  <div className="grid gap-4 pt-1 print:gap-2.5">
                    {item.projects.map((project) => (
                      <div key={project.name} className="rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-4 space-y-2.5 print:border-0 print:p-0 print:bg-transparent print:space-y-1 print:break-inside-avoid">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="text-sm font-bold text-foreground print:text-[11.5px] print:font-bold">
                            {project.name}
                          </h4>
                          {project.role && (
                            <span className="inline-flex w-fit rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 print:border-0 print:bg-transparent print:p-0 print:text-[10px] print:text-zinc-700">
                              {project.role}
                            </span>
                          )}
                        </div>

                        {/* Tech Stack Chip */}
                        <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50 dark:bg-zinc-800/30 px-3 py-1.5 text-xs font-mono text-muted-foreground print:border-0 print:bg-transparent print:p-0 print:text-[10.5px]">
                          <span className="font-semibold text-foreground mr-1.5 print:text-black">Tech Stack:</span>
                          {project.tech}
                        </div>

                        {/* Bullet Highlights */}
                        <ul className="space-y-1.5 text-xs leading-relaxed text-muted-foreground print:space-y-1 print:text-[10.5px]">
                          {project.highlights.map((highlight) => {
                            const [label, ...rest] = highlight.split(":");
                            const hasLabel = rest.length > 0;
                            return (
                              <li key={highlight} className="flex items-start gap-2 print:gap-1.5">
                                <span className="mt-1.5 size-1.5 rounded-full bg-emerald-500 shrink-0 print:hidden"></span>
                                <span className="hidden print:inline text-black font-bold">-</span>
                                <div>
                                  {hasLabel ? (
                                    <>
                                      <strong className="font-semibold text-foreground mr-1 print:text-black">{label}:</strong>
                                      <span>{rest.join(":")}</span>
                                    </>
                                  ) : (
                                    <span>{highlight}</span>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </section>

          <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 print:my-4" />

          {/* References Section */}
          {references && references.length > 0 && (
            <>
              <section className="space-y-4 print:space-y-2 print:break-inside-avoid">
                <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-100 dark:border-zinc-800/60 print:border-b print:border-black print:pb-1">
                  <UserCheck className="size-4 text-emerald-600 dark:text-emerald-400 print:hidden" />
                  <h2 className="text-lg font-bold tracking-tight text-foreground uppercase text-xs font-mono tracking-wider print:text-xs print:font-bold">
                    References
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-1 print:gap-1.5">
                  {references.map((ref) => (
                    <div key={ref.name} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-800/30 p-4 space-y-1.5 print:border-0 print:p-0 print:bg-transparent">
                      <div className="flex items-center gap-2 print:gap-1.5 text-xs">
                        <Shield size={16} className="text-emerald-500 print:hidden" />
                        <span className="font-bold text-foreground print:text-black">{ref.name}</span>
                        <span className="text-muted-foreground print:text-zinc-700"> — {ref.title} ({ref.company})</span>
                        <span className="font-mono text-muted-foreground ml-auto print:text-black">Phone: {ref.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 print:my-4" />
            </>
          )}

          {/* Education Section */}
          <section className="space-y-4 print:space-y-2 print:break-inside-avoid">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-100 dark:border-zinc-800/60 print:border-b print:border-black print:pb-1">
              <GraduationCap className="size-4 text-emerald-600 dark:text-emerald-400 print:hidden" />
              <h2 className="text-lg font-bold tracking-tight text-foreground uppercase text-xs font-mono tracking-wider print:text-xs print:font-bold">
                Education
              </h2>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-800/30 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs print:border-0 print:p-0 print:bg-transparent print:text-[11px]">
              <div>
                <span className="font-bold text-foreground print:text-black">{education.school}</span>
                <span className="mx-2 text-muted-foreground">|</span>
                <span className="text-muted-foreground print:text-zinc-800">{education.degree} in {education.major}</span>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-md w-fit print:border-0 print:bg-transparent print:p-0 print:text-zinc-700">
                {education.period}
              </span>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}

function LevelBadge({ level }: { level: string }) {
  if (level === "Proficient" || level === "Advanced") {
    return (
      <span className="rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-medium text-sky-700 dark:text-sky-400 border border-sky-500/20 print:border print:border-zinc-400 print:bg-zinc-100 print:px-1 print:py-0 print:text-[9.5px] print:font-bold print:text-black">
        Advanced
      </span>
    );
  }
  return (
    <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-mono font-medium text-amber-700 dark:text-amber-400 border border-amber-500/20 print:border print:border-zinc-300 print:bg-white print:px-1 print:py-0 print:text-[9.5px] print:font-medium print:text-zinc-700">
      Working
    </span>
  );
}
