"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, ExternalLink, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(
  () => import("./HeroBackground").then((mod) => mod.HeroBackground),
  { ssr: false }
);

export function Hero() {
  const { personal, about } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-navy-900 dark:to-navy-800 px-6 py-20 relative overflow-hidden">
      <HeroBackground />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-metal-silver/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm rounded-full border border-primary-500/20 shadow-lg"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-navy-600 dark:text-navy-300">Available for opportunities</span>
        </motion.div>

        {/* Nickname */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gold-shimmer animate-shimmer font-medium mb-2 tracking-widest uppercase text-lg"
        >
          {personal.nickname}
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-navy-900 via-primary-600 to-navy-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl text-navy-600 dark:text-navy-200 font-light mb-8"
        >
          {personal.title}
        </motion.p>

        {/* Stats/highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "DDD", label: "Architecture Expert" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-navy-500 dark:text-navy-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-navy-600 dark:text-navy-300 mb-10"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-lg hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:shadow-lg"
          >
            <Mail size={18} />
            <span className="text-sm md:text-base">{personal.email}</span>
          </motion.a>
          <motion.a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-lg hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:shadow-lg"
          >
            <Phone size={18} />
            <span className="text-sm md:text-base">{personal.phone}</span>
          </motion.a>
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-lg hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:shadow-lg"
          >
            <ExternalLink size={18} />
            <span className="text-sm md:text-base">GitHub</span>
          </motion.a>
          <motion.span
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-lg"
          >
            <MapPin size={18} />
            <span className="text-sm md:text-base">{personal.location}</span>
          </motion.span>
        </motion.div>

        {/* About - glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto p-6 bg-white/60 dark:bg-navy-800/60 backdrop-blur-md rounded-2xl border border-white/20 dark:border-navy-700/50 shadow-xl mb-10"
        >
          <p className="text-lg md:text-xl text-navy-700 dark:text-navy-200 leading-relaxed mb-3">
            {about.summary}
          </p>
          <p className="text-base text-navy-500 dark:text-navy-400 italic">
            {about.passion}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-xl hover:bg-primary-500 hover:text-white transition-all font-medium backdrop-blur-sm bg-white/30 dark:bg-navy-800/30"
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned relative to section, not the inner div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-navy-400 dark:text-navy-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
