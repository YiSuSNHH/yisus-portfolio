"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Send, CheckCircle, AlertCircle, MessageCircle, Sparkles, Heart, Mail, Phone, MapPin, Github } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { motion } from "framer-motion";

export function Contact() {
  const { personal, lookingFor } = portfolioData;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlggbblk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-navy-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles - using fixed positions to avoid hydration mismatch */}
      {[
        { left: 8, top: 20, duration: 4.5, delay: 0.3 },
        { left: 22, top: 70, duration: 5.2, delay: 1.2 },
        { left: 45, top: 35, duration: 4.8, delay: 0.6 },
        { left: 65, top: 80, duration: 5.5, delay: 1.6 },
        { left: 78, top: 25, duration: 4.2, delay: 0.9 },
        { left: 92, top: 60, duration: 5.0, delay: 1.4 },
        { left: 35, top: 90, duration: 4.6, delay: 0.4 },
        { left: 55, top: 15, duration: 5.3, delay: 1.8 },
        { left: 12, top: 55, duration: 4.4, delay: 0.7 },
        { left: 88, top: 45, duration: 5.1, delay: 1.1 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary-500/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

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
              <MessageCircle size={16} />
              Let&apos;s Connect
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 dark:from-primary-400 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-navy-500 dark:text-navy-400 text-center mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What I'm Looking For */}
          <FadeIn direction="left">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-primary-500" size={24} />
                What I&apos;m Looking For
              </h3>
              <StaggerContainer className="space-y-4">
                {lookingFor.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-primary-500/25 transition-shadow">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </span>
                      <span className="text-navy-600 dark:text-navy-300 pt-1 group-hover:text-navy-900 dark:group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Direct Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="mt-8 p-6 bg-white dark:bg-navy-900 rounded-2xl border border-gray-100 dark:border-navy-700 shadow-lg hover:shadow-xl transition-all overflow-hidden relative"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full" />

                <h4 className="font-medium text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="text-red-500" size={18} />
                  Prefer direct contact?
                </h4>
                <div className="space-y-3">
                  <motion.a
                    href={`mailto:${personal.email}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center">
                      <Mail size={18} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 group-hover:underline">
                      {personal.email}
                    </span>
                  </motion.a>
                  <motion.a
                    href={`tel:${personal.phone.replace(/\s/g, "")}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center">
                      <Phone size={18} className="text-emerald-600 dark:text-emerald-400" />
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 group-hover:underline">
                      {personal.phone}
                    </span>
                  </motion.a>
                  <motion.a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center">
                      <Github size={18} className="text-purple-600 dark:text-purple-400" />
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 group-hover:underline">
                      GitHub Profile
                    </span>
                  </motion.a>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                      <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="text-navy-600 dark:text-navy-300">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 hover:opacity-10 blur transition-all duration-500" />

              <div className="relative bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-navy-700 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full" />

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
                    >
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-navy-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      required
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-navy-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
                    >
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-navy-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {status === "loading" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm bg-green-500/10 p-3 rounded-lg"
                    >
                      <CheckCircle size={18} />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-500/10 p-3 rounded-lg"
                    >
                      <AlertCircle size={18} />
                      <span>
                        Something went wrong. Please try again or email me directly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
