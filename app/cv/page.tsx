"use client";

import { portfolioData } from "@/data/portfolio";
import { Printer, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function CVPage() {
  const { personal, about, skills, experience, education } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Controls - Hidden when printing */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-navy-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-navy-700 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.a
            href="/"
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </motion.a>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              onClick={handlePrint}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Printer size={18} />
              <span>Print / Save PDF</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <main className="min-h-screen bg-gray-50 dark:bg-navy-800 print:bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 mt-20 print:mt-0 print:px-0">
          {/* Header Card */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-white dark:bg-navy-900 rounded-2xl p-8 mb-8 shadow-lg border border-gray-100 dark:border-navy-700 overflow-hidden print:shadow-none print:border-0 print:rounded-none print:p-0 print:mb-6"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full print:hidden" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full print:hidden" />

            <div className="relative text-center">
              {/* Nickname badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-primary-500/10 dark:bg-primary-500/20 rounded-full print:hidden"
              >
                <Sparkles size={14} className="text-primary-500" />
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{personal.nickname}</span>
              </motion.div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 print:text-3xl">
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 dark:from-primary-400 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent print:text-navy-900">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl text-navy-600 dark:text-navy-300 mb-6 print:text-gray-600 print:mb-4">{personal.title}</p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-navy-800 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all print:bg-transparent print:p-0"
                >
                  <Mail size={14} />
                  <span>{personal.email}</span>
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-navy-800 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all print:bg-transparent print:p-0"
                >
                  <Phone size={14} />
                  <span>{personal.phone}</span>
                </a>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-navy-800 rounded-lg text-navy-600 dark:text-navy-300 print:bg-transparent print:p-0">
                  <MapPin size={14} />
                  <span>{personal.location}</span>
                </span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-navy-800 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all print:bg-transparent print:p-0"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-navy-800 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all print:bg-transparent print:p-0"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.header>

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 mb-6 shadow-lg border border-gray-100 dark:border-navy-700 print:shadow-none print:border-0 print:rounded-none print:p-0 print:mb-4"
          >
            <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full print:hidden" />
              <span className="text-navy-900 dark:text-white print:text-navy-900">About Me</span>
            </h2>
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed print:text-gray-700">{about.summary}</p>
          </motion.section>

          {/* Technical Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 mb-6 shadow-lg border border-gray-100 dark:border-navy-700 print:shadow-none print:border-0 print:rounded-none print:p-0 print:mb-4"
          >
            <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full print:hidden" />
              <span className="text-navy-900 dark:text-white print:text-navy-900">Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0">
                <h3 className="font-semibold text-navy-900 dark:text-white mb-2 text-sm uppercase tracking-wider print:text-navy-900">Languages</h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm print:text-gray-600">
                  {skills.languages
                    .map((l) => `${l.name} (${l.frameworks.join(", ")})`)
                    .join("; ")}
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0">
                <h3 className="font-semibold text-navy-900 dark:text-white mb-2 text-sm uppercase tracking-wider print:text-navy-900">Databases</h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm print:text-gray-600">{skills.databases.join(", ")}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0">
                <h3 className="font-semibold text-navy-900 dark:text-white mb-2 text-sm uppercase tracking-wider print:text-navy-900">Architecture</h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm print:text-gray-600">{skills.architecture.join(", ")}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0">
                <h3 className="font-semibold text-navy-900 dark:text-white mb-2 text-sm uppercase tracking-wider print:text-navy-900">Principles</h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm print:text-gray-600">{skills.principles.join(", ")}</p>
              </div>
              <div className="md:col-span-2 p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0">
                <h3 className="font-semibold text-navy-900 dark:text-white mb-2 text-sm uppercase tracking-wider print:text-navy-900">Tools & Environment</h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm print:text-gray-600">{skills.tools.join(", ")}</p>
              </div>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 mb-6 shadow-lg border border-gray-100 dark:border-navy-700 print:shadow-none print:border-0 print:rounded-none print:p-0 print:mb-4"
          >
            <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full print:hidden" />
              <span className="text-navy-900 dark:text-white print:text-navy-900">Professional Experience</span>
            </h2>
            <div className="space-y-8 print:space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary-500/30 dark:border-primary-500/50 print:border-gray-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg print:bg-gray-400 print:shadow-none" />

                  <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                    <div>
                      <h3 className="font-semibold text-navy-900 dark:text-white text-lg print:text-navy-900">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium print:text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-navy-500 dark:text-navy-400 print:text-gray-500">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4 print:space-y-3">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0 print:pl-4 print:border-l print:border-gray-200">
                        <p className="font-medium text-navy-900 dark:text-white mb-2 print:text-navy-900">
                          {project.name}{" "}
                          <span className="font-normal text-primary-600 dark:text-primary-400 print:text-gray-500">
                            — {project.tech}
                          </span>
                        </p>
                        <ul className="space-y-1">
                          {project.highlights.map((h, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-sm text-navy-600 dark:text-navy-300 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary-500 print:text-gray-600 print:before:text-gray-400"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-navy-700 print:shadow-none print:border-0 print:rounded-none print:p-0"
          >
            <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full print:hidden" />
              <span className="text-navy-900 dark:text-white print:text-navy-900">Education</span>
            </h2>
            <div className="flex flex-wrap justify-between items-start gap-4 p-4 bg-gray-50 dark:bg-navy-800 rounded-xl print:bg-transparent print:p-0">
              <div>
                <h3 className="font-semibold text-navy-900 dark:text-white print:text-navy-900">{education.school}</h3>
                <p className="text-navy-600 dark:text-navy-300 print:text-gray-600">
                  {education.degree} — {education.major}
                </p>
              </div>
              <p className="text-sm text-navy-500 dark:text-navy-400 font-medium print:text-gray-500">{education.period}</p>
            </div>
          </motion.section>

          {/* Footer - Only shows on screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8 text-sm text-navy-400 dark:text-navy-500 print:hidden"
          >
            <p>Generated from <span className="text-primary-500">yisus.dev</span></p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
