"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HarvardResumePage() {
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
              Harvard B&W Style
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
              NGUYEN HUY HUNG
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-zinc-800">
              Ho Chi Minh City, Vietnam &nbsp;|&nbsp; Phone: 0967 622 166 &nbsp;|&nbsp; Email: yisus.nhh.dev@gmail.com
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-800">
              LinkedIn: linkedin.com/in/yisus-nhh &nbsp;|&nbsp; GitHub: github.com/YiSuSNHH
            </p>
          </header>

          {/* Professional Summary */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Professional Summary
            </h2>
            <p className="mt-2.5 text-xs leading-relaxed text-zinc-900 text-justify">
              Technical Engineer with 4+ years of experience bridging business vision and engineering execution across educational technology and financial management platforms. Specialized in gathering and analyzing business/technical requirements from stakeholders, converting business needs into functional &amp; technical specifications, user stories, use cases, process flows, and data models while designing resilient backend architectures with PHP/Laravel and Java/Spring Boot.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Technical Skills
            </h2>
            <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-zinc-900">
              <li>
                <strong className="font-semibold text-black">Requirements &amp; Specifications:</strong> Requirement Analysis, Functional &amp; Technical Specifications, User Stories, Use Cases, Process Flows, Data Modeling
              </li>
              <li>
                <strong className="font-semibold text-black">Languages &amp; Frameworks:</strong> PHP (Laravel, Lumen), Java (Spring Boot), JavaScript/TypeScript (React, Next.js, Vue.js, Nuxt.js)
              </li>
              <li>
                <strong className="font-semibold text-black">Databases:</strong> PostgreSQL, MySQL, MongoDB
              </li>
              <li>
                <strong className="font-semibold text-black">Architecture &amp; Design:</strong> Domain-Driven Design (DDD), Hexagonal Architecture, Clean Architecture, Modular Monolith, Event-Driven Architecture, EAV Model
              </li>
              <li>
                <strong className="font-semibold text-black">Security &amp; Authorization:</strong> OAuth2, JWT, Spring Security, Method-level Authorization
              </li>
              <li>
                <strong className="font-semibold text-black">Tools &amp; Platforms:</strong> Git, GitHub, GitLab, Docker, Linux, Jira, Maven, PhpStorm, VS Code
              </li>
            </ul>
          </section>

          {/* Professional Experience */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Professional Experience
            </h2>

            <div className="mt-3.5 space-y-5">
              {/* Onschool Edtech Group */}
              <div>
                <div className="flex flex-col justify-between text-xs sm:flex-row">
                  <span className="font-bold text-black">Onschool Edtech Group</span>
                  <span className="italic text-zinc-800">Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="flex flex-col justify-between text-xs sm:flex-row">
                  <span className="italic text-zinc-900">Technical Engineer (Tech Lead for SLC; Tech Lead for SRMA in later phase)</span>
                  <span className="italic text-zinc-800">11/2022 – Present</span>
                </div>
                <p className="mt-1 text-[11px] italic text-zinc-700">
                  Core Systems: SLC (Student Life Cycle) | SRM System (Student Management) | Moodle Integration
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-zinc-900">
                  <li>
                    Gather, analyze, and document business and technical requirements from stakeholders across educational technology workflows.
                  </li>
                  <li>
                    Translate business needs into clear functional and technical specifications, user stories, use cases, process flows, and data models.
                  </li>
                  <li>
                    Ensure requirements are complete, feasible, and strictly aligned with business objectives.
                  </li>
                  <li>
                    Lead technical design and backend architecture for student lifecycle and management platforms using Domain-Driven Design (DDD), Hexagonal Architecture, and Clean Architecture.
                  </li>
                  <li>
                    Implement Backend-for-Frontend (BFF) authentication patterns with OAuth2 for third-party integrations and JWT for internal microservices.
                  </li>
                  <li>
                    Build fine-grained authorization using Spring Security and a custom <code className="font-mono text-[11px]">PermissionEvaluator</code> for method-level access control across APIs.
                  </li>
                  <li>
                    Design and operate blue-green deployment pipelines for production releases, enabling zero-downtime deployment and automated rollback.
                  </li>
                  <li>
                    Improve backend performance and observability by optimizing database access, eliminating N+1 query issues, and implementing structured logging and tracing.
                  </li>
                  <li>
                    Reverse-engineer Moodle&apos;s Frankenstyle autoloading mechanism and develop local plugins with external web service APIs.
                  </li>
                  <li>
                    Collaborate directly with stakeholders, conduct user training sessions, and support cross-functional team coordination throughout project lifecycles.
                  </li>
                </ul>
              </div>

              {/* Freelance */}
              <div>
                <div className="flex flex-col justify-between text-xs sm:flex-row">
                  <span className="font-bold text-black">Freelance</span>
                  <span className="italic text-zinc-800">Remote</span>
                </div>
                <div className="flex flex-col justify-between text-xs sm:flex-row">
                  <span className="italic text-zinc-900">Technical Engineer</span>
                  <span className="italic text-zinc-800">2022 – Present</span>
                </div>
                <p className="mt-1 text-[11px] italic text-zinc-700">
                  Financial Management Platform (Laravel, React, MongoDB)
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-zinc-900">
                  <li>
                    Analyze client business requirements and design flexible financial entities using an Entity-Attribute-Value (EAV) model to support dynamic business attributes.
                  </li>
                  <li>
                    Build a modular Laravel-based financial management platform with a PSR-compliant PHP core to keep business logic reusable across modules.
                  </li>
                  <li>
                    Implement event-driven workflows with NATS for asynchronous transaction processing and real-time operational notifications.
                  </li>
                  <li>
                    Improve frontend loading experience by implementing lazy loading and optimizing client-side rendering.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mt-6">
            <h2 className="border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
              Education
            </h2>
            <div className="mt-3">
              <div className="flex flex-col justify-between text-xs sm:flex-row">
                <span className="font-bold text-black">Hanoi Open University</span>
                <span className="italic text-zinc-800">Hanoi, Vietnam</span>
              </div>
              <div className="flex flex-col justify-between text-xs sm:flex-row">
                <span className="italic text-zinc-900">Bachelor of Engineering in Software Technology</span>
                <span className="italic text-zinc-800">2019 – 2024</span>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
