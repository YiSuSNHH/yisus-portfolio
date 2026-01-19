"use client";

import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Sparkles } from "lucide-react";
import { FadeIn } from "./animations";
import { motion } from "framer-motion";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-navy-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Vertical line decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 dark:bg-primary-500/20 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium">
              <Building2 size={16} />
              Career Journey
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 dark:from-primary-400 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-navy-500 dark:text-navy-400 text-center mb-12 max-w-2xl mx-auto">
            My journey through the tech industry, building scalable systems and leading development teams
          </p>
        </FadeIn>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experience.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute left-6 md:left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-500/20 origin-top hidden md:block"
                />
              )}

              <div className="flex gap-6">
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: "spring" }}
                  className="hidden md:flex items-start flex-shrink-0"
                >
                  <div className="relative">
                    {/* Pulsing ring */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-500/30"
                    />
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg gold-glow">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-1 group"
                >
                  <div className="relative bg-white dark:bg-navy-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full" />

                    {/* Header */}
                    <div className="relative flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mt-1 flex items-center gap-2">
                          <Sparkles size={16} />
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-400 bg-gray-100 dark:bg-navy-800 px-3 py-1.5 rounded-full">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-400 bg-gray-100 dark:bg-navy-800 px-3 py-1.5 rounded-full">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <motion.div
                          key={pIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                          className="relative pl-4 border-l-2 border-primary-500/30 hover:border-primary-500 transition-colors"
                        >
                          <h4 className="font-semibold text-navy-900 dark:text-white text-lg flex items-center gap-2">
                            <ChevronRight size={16} className="text-primary-500" />
                            {project.name}
                          </h4>
                          <span className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 mt-1 bg-primary-500/10 dark:bg-primary-500/20 px-2 py-0.5 rounded">
                            {project.tech}
                          </span>
                          <ul className="mt-3 space-y-2">
                            {project.highlights.map((highlight, hIndex) => (
                              <motion.li
                                key={hIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: hIndex * 0.05 }}
                                className="text-sm text-navy-600 dark:text-navy-300 flex items-start gap-2"
                              >
                                <span className="text-primary-500 mt-1.5 flex-shrink-0">•</span>
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-8 pt-6 border-t border-gray-100 dark:border-navy-700"
                    >
                      <p className="text-xs text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-3 font-medium">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, tIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: tIdx * 0.03 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 text-xs rounded-lg hover:bg-primary-500/10 dark:hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default border border-transparent hover:border-primary-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
