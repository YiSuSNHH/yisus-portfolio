"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  BookOpen,
  Wrench,
  Sparkles,
  Zap,
  Star
} from "lucide-react";

const skillGradients: Record<string, string> = {
  languages: "from-amber-500 to-orange-500",
  databases: "from-emerald-500 to-teal-500",
  architecture: "from-blue-500 to-indigo-500",
  principles: "from-purple-500 to-pink-500",
  tools: "from-rose-500 to-red-500",
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-metal-silver/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles - using fixed positions to avoid hydration mismatch */}
      {[
        { left: 10, top: 15, duration: 3.5, delay: 0.2 },
        { left: 25, top: 80, duration: 4.2, delay: 1.1 },
        { left: 40, top: 30, duration: 3.8, delay: 0.5 },
        { left: 55, top: 65, duration: 4.5, delay: 1.5 },
        { left: 70, top: 20, duration: 3.2, delay: 0.8 },
        { left: 85, top: 75, duration: 4.0, delay: 1.3 },
        { left: 15, top: 50, duration: 3.6, delay: 0.3 },
        { left: 60, top: 85, duration: 4.3, delay: 1.7 },
        { left: 90, top: 40, duration: 3.4, delay: 0.6 },
        { left: 35, top: 10, duration: 4.1, delay: 1.0 },
        { left: 75, top: 55, duration: 3.9, delay: 0.9 },
        { left: 5, top: 70, duration: 4.4, delay: 1.4 },
        { left: 50, top: 25, duration: 3.3, delay: 0.4 },
        { left: 80, top: 90, duration: 4.6, delay: 1.8 },
        { left: 20, top: 45, duration: 3.7, delay: 0.7 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 dark:bg-primary-500/20 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium">
              <Sparkles size={16} />
              What I Work With
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 dark:from-primary-400 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-navy-500 dark:text-navy-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit built over 3+ years of professional development
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-300" />

              {/* Icon */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGradients.languages} flex items-center justify-center shadow-lg`}>
                  <Code2 className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  Languages
                </h3>
              </div>

              <ul className="relative space-y-4">
                {skills.languages.map((lang, idx) => (
                  <motion.li
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group/item"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-navy-900 dark:text-white">{lang.name}</span>
                      {lang.level === "Primary" && (
                        <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-primary-500 to-primary-600 text-white px-2 py-0.5 rounded-full">
                          <Star size={10} fill="currentColor" />
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-navy-500 dark:text-navy-400 pl-0">
                      {lang.frameworks.join(", ")}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>

          {/* Databases */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300" />

              <div className="relative flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGradients.databases} flex items-center justify-center shadow-lg`}>
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  Databases
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {skills.databases.map((db, idx) => (
                  <motion.span
                    key={db}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-white dark:bg-navy-700 border border-emerald-500/20 dark:border-emerald-500/30 text-navy-700 dark:text-navy-200 text-sm rounded-lg hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all cursor-default"
                  >
                    {db}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>

          {/* Architecture */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300" />

              <div className="relative flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGradients.architecture} flex items-center justify-center shadow-lg`}>
                  <Layers className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  Architecture
                </h3>
              </div>

              <div className="relative space-y-2">
                {skills.architecture.map((arch, idx) => (
                  <motion.div
                    key={arch}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-navy-700 dark:text-navy-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {arch}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>

          {/* Principles */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />

              <div className="relative flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGradients.principles} flex items-center justify-center shadow-lg`}>
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  Principles
                </h3>
              </div>

              <div className="relative space-y-2">
                {skills.principles.map((p, idx) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-navy-700 dark:text-navy-300 text-sm"
                  >
                    <Zap size={12} className="text-purple-500" />
                    {p}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>

          {/* Tools - spans 2 columns */}
          <StaggerItem className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-red-500/0 group-hover:from-rose-500/5 group-hover:to-red-500/5 transition-all duration-300" />

              <div className="relative flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGradients.tools} flex items-center justify-center shadow-lg`}>
                  <Wrench className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                    Tools & Environment
                  </h3>
                  <p className="text-sm text-navy-500 dark:text-navy-400">Development ecosystem I use daily</p>
                </div>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {skills.tools.map((tool, idx) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-white dark:bg-navy-700 border border-gray-200 dark:border-navy-600 text-navy-700 dark:text-navy-300 text-sm rounded-lg hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-md transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
