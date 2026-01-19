"use client";

import { Hero, Skills, Experience, Projects, Contact } from "@/components";
import { portfolioData } from "@/data/portfolio";
import { Mail, ExternalLink, Github, Heart, ChevronUp, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LogoLotus } from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const { personal } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-navy-900/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <LogoLotus size={36} />
            <span className="font-serif text-2xl font-bold gold-shimmer tracking-tight">YiSuS</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="/cv"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all text-sm font-medium"
            >
              View CV
            </motion.a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-600 dark:text-navy-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-lg border-t border-gray-100 dark:border-navy-700"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/cv"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-center font-medium"
                >
                  View CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Sections */}
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-navy-900 dark:bg-navy-950 text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <LogoLotus size={48} />
                <span className="font-serif text-3xl font-bold gold-shimmer tracking-tight">YiSuS</span>
              </motion.a>
              <p className="text-navy-400 text-sm leading-relaxed">
                Backend Developer passionate about clean architecture, DDD, and building scalable systems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-navy-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/cv"
                  whileHover={{ x: 5 }}
                  className="text-navy-400 hover:text-primary-400 transition-colors text-sm"
                >
                  View CV
                </motion.a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-navy-400 hover:text-primary-400 hover:bg-navy-700 transition-all"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-navy-400 hover:text-primary-400 hover:bg-navy-700 transition-all"
                >
                  <Mail size={20} />
                </motion.a>
                <motion.a
                  href={personal.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-navy-400 hover:text-primary-400 hover:bg-navy-700 transition-all"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-400 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} {personal.name}. Made with
              <Heart size={14} className="text-red-500 fill-red-500" />
              in Vietnam
            </p>
            <p className="text-navy-500 text-xs">
              Built with Next.js, Tailwind CSS & Three.js
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center gold-glow"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
