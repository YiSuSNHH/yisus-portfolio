"use client";

import { portfolioData } from "@/data/portfolio";
import { Printer, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";

export default function HarvardResumePage() {
  const { personal, about, skills, experience, education } = portfolioData;
  const tResume = useTranslations("resume");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const localePrefix = `/${locale}`;

  const conciseSummary = tResume("harvard.conciseSummary");

  const selectedExperience = [
    {
      ...experience[0],
      projects: experience[0]?.projects
        ?.filter((_, projectIndex) => projectIndex < 2)
        .map((project) => ({
          ...project,
          highlights: project.highlights.slice(0, 2),
        })),
    },
    {
      ...experience[1],
      projects: experience[1]?.projects?.map((project) => ({
        ...project,
        highlights: project.highlights.slice(0, 2),
      })),
    },
  ].filter((item) => item.projects && item.projects.length > 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href={`${localePrefix}/resume`}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm sm:text-base">{tResume("actions.backToStyledResume")}</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={`${localePrefix}/resume/harvard`}
              className="hidden sm:flex items-center gap-2 px-3 py-2 border border-gray-400 rounded text-gray-700"
            >
              <FileText size={16} />
              <span className="text-sm">{tResume("actions.harvardStyle")}</span>
            </Link>
            <LanguageSwitcher />
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors rounded text-sm sm:text-base"
            >
              <Printer size={16} />
              <span>{tCommon("actions.printSavePdf")}</span>
            </button>
          </div>
        </div>
      </div>

      <main lang={locale} className="min-h-screen bg-white text-black print:bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 mt-16 sm:mt-20 print:mt-0 print:px-0 print:py-0">
          <section className="border border-black p-5 sm:p-7 print:border-0 print:p-0 print:text-[10.5pt] print:leading-[1.25]">
            <header className="border-b border-black pb-3 mb-4 print:pb-2 print:mb-3">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide uppercase">{personal.name}</h1>
              <p className="text-sm sm:text-base mt-1.5 uppercase tracking-[0.1em]">{personal.title}</p>
              <p className="text-sm mt-2 leading-relaxed">
                {personal.email} | {personal.phone} | {personal.location}
              </p>
              <p className="text-sm leading-relaxed break-all print:leading-tight">
                {personal.github} | {personal.linkedin}
              </p>
            </header>

            <section className="mb-4 print:mb-3 print:break-inside-avoid">
              <h2 className="font-semibold uppercase tracking-[0.12em] border-b border-black pb-1 mb-1.5 text-sm">{tResume("sections.summary")}</h2>
              <p className="text-sm leading-relaxed">{conciseSummary || about.summary}</p>
            </section>

            <section className="mb-4 print:mb-3 print:break-inside-avoid">
              <h2 className="font-semibold uppercase tracking-[0.12em] border-b border-black pb-1 mb-1.5 text-sm">{tResume("sections.skills")}</h2>
              <div className="space-y-0.5 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">{tResume("labels.languages")}:</span>{" "}
                  {skills.languages.map((l) => `${l.name} (${l.frameworks.join(", ")})`).join("; ")}
                </p>
                <p>
                  <span className="font-semibold">{tResume("labels.databases")}:</span> {skills.databases.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">{tResume("labels.architecture")}:</span> {skills.architecture.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">{tResume("labels.coreTools")}:</span> Docker, Git, PostgreSQL, MySQL, MongoDB
                </p>
              </div>
            </section>

            <section className="mb-4 print:mb-3">
              <h2 className="font-semibold uppercase tracking-[0.12em] border-b border-black pb-1 mb-2 text-sm">{tResume("sections.experience")}</h2>
              <div className="space-y-3 print:space-y-2">
                {selectedExperience.map((exp, index) => (
                  <article key={index} className="print:break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <h3 className="font-semibold text-sm sm:text-base">{exp.role} | {exp.company}</h3>
                      <p className="text-xs sm:text-sm">{exp.period} | {exp.location}</p>
                    </div>

                    <div className="mt-1.5 space-y-2">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex}>
                          <p className="text-sm font-medium">{project.name} | {project.tech}</p>
                          <ul className="list-disc pl-5 mt-0.5 space-y-0.5 text-sm">
                            {project.highlights.map((highlight, hIndex) => (
                              <li key={hIndex}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="print:break-inside-avoid">
              <h2 className="font-semibold uppercase tracking-[0.12em] border-b border-black pb-1 mb-1.5 text-sm">{tResume("sections.education")}</h2>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 text-sm">
                <p>
                  <span className="font-semibold">{education.school}</span> | {education.degree} - {education.major}
                </p>
                <p>{education.period}</p>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
