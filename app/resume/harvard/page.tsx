"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export default function HarvardResumePage() {
  const { personal, about, skills, experience, education, references } = portfolioData;

  return (
    <>
      {/* Top action bar - hidden when printing */}
      <header className="no-print fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="px-2">
              <Link href="/">
                <ArrowLeft data-icon="inline-start" />
                Portfolio
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href="/resume">
                <FileText data-icon="inline-start" className="size-4" />
                Modern View
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-xs text-muted-foreground md:inline-block">
              Harvard B&amp;W Style
            </span>
            <Button
              type="button"
              onClick={() => window.print()}
              className="rounded-md bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <Printer data-icon="inline-start" />
              Print PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Resume Content - Classic Harvard Monochromatic Serif Layout */}
      <main className="min-h-[100dvh] bg-zinc-100 px-4 pb-12 pt-24 font-serif text-black md:px-6 print:bg-white print:p-0 print:pt-0">
        <article className="mx-auto max-w-[800px] border border-zinc-200 bg-white p-10 shadow-sm print:max-w-none print:border-0 print:p-0 print:shadow-none">
          
          {/* Header */}
          <header className="text-center">
            <h1 className="text-2xl font-bold uppercase tracking-widest text-black">
              {personal.name.toUpperCase()}
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-zinc-800">
              {personal.location} &nbsp;|&nbsp; Phone: {personal.phone} &nbsp;|&nbsp; Email: {personal.email}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-800">
              LinkedIn: linkedin.com/in/yisus-nhh &nbsp;|&nbsp; GitHub: github.com/YiSuSNHH
            </p>
          </header>

          {/* Professional Summary */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Executive Summary
            </h2>
            <p className="mt-2.5 text-xs leading-relaxed text-zinc-900 text-justify">
              {about.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Technical Skills
            </h2>
            <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-zinc-900">
              <li>
                <strong className="font-semibold text-black">Core Languages &amp; Frameworks:</strong> {skills.languages.map((item) => `${item.name} (${item.frameworks.join(", ")})`).join("; ")}
              </li>
              <li>
                <strong className="font-semibold text-black">Databases &amp; Performance:</strong> {skills.databases.join(", ")}; SQL tuning, high-performance pagination, N+1 query elimination, DB migration strategies
              </li>
              <li>
                <strong className="font-semibold text-black">Architecture &amp; System Design:</strong> {skills.architecture.join(", ")}
              </li>
              <li>
                <strong className="font-semibold text-black">Security &amp; Authorization:</strong> {skills.security.join(", ")}
              </li>
              <li>
                <strong className="font-semibold text-black">DevOps &amp; Tools:</strong> {skills.tools.join(", ")}
              </li>
            </ul>
          </section>

          {/* Professional Experience */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Professional Experience
            </h2>

            <div className="mt-3.5 space-y-5">
              {experience.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-col justify-between text-xs sm:flex-row">
                    <span className="font-bold text-black">{exp.company}</span>
                    <span className="italic text-zinc-800">{exp.location}</span>
                  </div>
                  <div className="flex flex-col justify-between text-xs sm:flex-row">
                    <span className="italic text-zinc-900">{exp.role}</span>
                    <span className="italic text-zinc-800">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-[11px] italic text-zinc-700">
                    {exp.summary}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-zinc-900">
                    {exp.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          {references && references.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
                References
              </h2>
              <div className="mt-3 space-y-2">
                {references.map((ref) => (
                  <div key={ref.name} className="text-xs leading-relaxed text-zinc-900">
                    <span className="font-bold text-black">{ref.name}</span> &nbsp;—&nbsp; <span className="italic text-zinc-800">{ref.title} ({ref.company})</span>
                    <p className="text-zinc-800 font-mono text-[11px]">Phone: {ref.phone}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Education
            </h2>
            <div className="mt-3">
              <div className="flex flex-col justify-between text-xs sm:flex-row">
                <span className="font-bold text-black">{education.school}</span>
                <span className="italic text-zinc-800">Hanoi, Vietnam</span>
              </div>
              <div className="flex flex-col justify-between text-xs sm:flex-row">
                <span className="italic text-zinc-900">{education.degree} in {education.major}</span>
                <span className="italic text-zinc-800">{education.period}</span>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
