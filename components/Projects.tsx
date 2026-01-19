"use client";

import { portfolioData } from "@/data/portfolio";
import { Code2, Rocket, Star, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { motion } from "framer-motion";

const projectColors = [
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-pink-500",
];

export function Projects() {
  const { experience } = portfolioData;

  // Flatten all projects from experience
  const allProjects = experience.flatMap((exp) =>
    exp.projects.map((project) => ({
      ...project,
      company: exp.company,
    }))
  );

  // Select featured projects (first 4)
  const featuredProjects = allProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

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
              <Rocket size={16} />
              What I&apos;ve Built
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 dark:from-primary-400 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-navy-500 dark:text-navy-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my experience in backend
            architecture, system design, and full-stack development.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full"
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${projectColors[index % projectColors.length]} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />

                <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${projectColors[index % projectColors.length]} opacity-5 rounded-bl-full`} />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${projectColors[index % projectColors.length]} flex items-center justify-center shadow-lg`}
                      >
                        <Code2 className="text-white" size={26} />
                      </motion.div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-navy-400 dark:text-navy-500 uppercase tracking-wider bg-gray-100 dark:bg-navy-800 px-2 py-1 rounded-md">
                          {project.company}
                        </span>
                        {index === 0 && (
                          <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-primary-500 to-primary-600 text-white px-2 py-1 rounded-md">
                            <Star size={10} fill="currentColor" />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.name}
                    </h3>

                    {/* Tech */}
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-4 flex items-center gap-2">
                      <Sparkles size={14} />
                      {project.tech}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: hIndex * 0.1 }}
                          className="text-sm text-navy-600 dark:text-navy-300 flex items-start gap-2"
                        >
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${projectColors[index % projectColors.length]} flex-shrink-0`} />
                          <span className="line-clamp-2">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-gray-200 dark:border-navy-700">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(", ").map((t, tIdx) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: tIdx * 0.05 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className="px-2.5 py-1 bg-white dark:bg-navy-700 text-navy-600 dark:text-navy-300 text-xs rounded-lg border border-gray-200 dark:border-navy-600 hover:border-primary-500/50 transition-all"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-600/20 text-primary-600 dark:text-primary-400 rounded-xl font-medium hover:from-primary-500/20 hover:to-primary-600/20 dark:hover:from-primary-500/30 dark:hover:to-primary-600/30 transition-all border border-primary-500/20"
            >
              View all experience
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
