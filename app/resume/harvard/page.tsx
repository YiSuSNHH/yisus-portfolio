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
        <article className="mx-auto max-w-[800px] border border-zinc-200 bg-white p-8 shadow-sm print:max-w-none print:border-0 print:p-0 print:shadow-none print:space-y-3">
          
          {/* Header */}
          <header className="text-center">
            <h1 className="text-xl font-bold uppercase tracking-widest text-black print:text-lg">
              {personal.name.toUpperCase()}
            </h1>
            <p className="mt-1.5 text-xs leading-tight text-zinc-800 print:text-[10.5px]">
              {personal.location} &nbsp;|&nbsp; Phone: {personal.phone} &nbsp;|&nbsp; Email: {personal.email}
            </p>
            <p className="mt-0.5 text-xs leading-tight text-zinc-800 print:text-[10.5px]">
              LinkedIn: linkedin.com/in/yisus-nhh &nbsp;|&nbsp; GitHub: github.com/YiSuSNHH
            </p>
          </header>

          {/* Professional Summary */}
          <section className="mt-4 print:mt-2">
            <h2 className="border-b border-black pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Professional Summary
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-900 text-justify print:text-[11px] print:leading-snug">
              {about.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mt-4 print:mt-2">
            <h2 className="border-b border-black pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Technical Skills
            </h2>
            <ul className="mt-1.5 space-y-1.5 text-xs leading-normal text-zinc-900 print:text-[10.5px] print:space-y-1">
              <li>
                <strong className="font-semibold text-black">Languages &amp; Frameworks:</strong>{" "}
                {skills.languages.map((item, idx) => (
                  <span key={item.name}>
                    {idx > 0 && <span className="mx-1 text-zinc-400">•</span>}
                    <span className="font-semibold text-black">{item.name}</span>{" "}
                    <span className="text-zinc-700">({item.frameworks.join(", ")})</span>{" "}
                    <span className="font-mono text-[9.5px] font-bold text-zinc-800">[{item.level === "Working Knowledge" ? "Working" : item.level}]</span>
                  </span>
                ))}
              </li>
              <li>
                <strong className="font-semibold text-black">Databases &amp; Infrastructure:</strong>{" "}
                {skills.databases.map((item, idx) => (
                  <span key={item.name}>
                    {idx > 0 && <span className="mx-1 text-zinc-400">•</span>}
                    <span className="font-semibold text-black">{item.name}</span>{" "}
                    <span className="font-mono text-[9.5px] font-bold text-zinc-800">[{item.level === "Working Knowledge" ? "Working" : item.level}]</span>
                  </span>
                ))}
              </li>
              <li>
                <strong className="font-semibold text-black">Architecture &amp; System Design:</strong>{" "}
                {skills.architecture.map((item, idx) => (
                  <span key={item.name}>
                    {idx > 0 && <span className="mx-1 text-zinc-400">•</span>}
                    <span>{item.name}</span>{" "}
                    <span className="font-mono text-[9.5px] font-bold text-zinc-800">[{item.level === "Working Knowledge" ? "Working" : item.level}]</span>
                  </span>
                ))}
              </li>
              <li>
                <strong className="font-semibold text-black">Security &amp; DevOps:</strong>{" "}
                {skills.security.concat(skills.tools.slice(0, 3)).map((item, idx) => (
                  <span key={item.name}>
                    {idx > 0 && <span className="mx-1 text-zinc-400">•</span>}
                    <span>{item.name}</span>{" "}
                    <span className="font-mono text-[9.5px] font-bold text-zinc-800">[{item.level === "Working Knowledge" ? "Working" : item.level}]</span>
                  </span>
                ))}
              </li>
            </ul>
          </section>

          {/* Professional Experience */}
          <section className="mt-4 print:mt-2">
            <h2 className="border-b border-black pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Professional Experience
            </h2>

            <div className="mt-2.5 space-y-3.5 print:space-y-2">
              {experience.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="print:break-inside-avoid">
                  <div className="flex flex-col justify-between text-xs sm:flex-row font-bold text-black print:text-[11px]">
                    <span>{exp.company} — <span className="font-normal italic">{exp.role}</span></span>
                    <span className="font-normal italic text-zinc-800">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-xs leading-normal text-zinc-900 print:text-[10.5px] print:space-y-0.5">
                    {exp.projects.map((proj) => (
                      <li key={proj.name}>
                        <strong className="font-semibold text-black">{proj.name}:</strong> {proj.description} <span className="italic text-zinc-700">({proj.tech})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          {references && references.length > 0 && (
            <section className="mt-4 print:mt-2 print:break-inside-avoid">
              <h2 className="border-b border-black pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
                References
              </h2>
              <div className="mt-1.5 space-y-1 text-xs text-zinc-900 print:text-[10.5px]">
                {references.map((ref) => (
                  <div key={ref.name}>
                    <span className="font-bold text-black">{ref.name}</span> &nbsp;—&nbsp; <span className="italic text-zinc-800">{ref.title} ({ref.company})</span> &nbsp;|&nbsp; <span className="font-mono text-[10.5px]">Phone: {ref.phone}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          <section className="mt-4 print:mt-2 print:break-inside-avoid">
            <h2 className="border-b border-black pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Education
            </h2>
            <div className="mt-1.5 flex flex-col justify-between text-xs sm:flex-row print:text-[10.5px]">
              <div>
                <span className="font-bold text-black">{education.school}</span>
                <span className="mx-1.5">—</span>
                <span className="italic text-zinc-900">{education.degree} in {education.major}</span>
              </div>
              <span className="italic text-zinc-800">{education.period}</span>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
