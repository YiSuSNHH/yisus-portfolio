"use client";

import { motion } from "framer-motion";

export function FigmaFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-gradient-to-br from-primary-50 to-white dark:from-navy-900 dark:to-navy-800 rounded-2xl border border-primary-500/20 shadow-xl backdrop-blur-sm"
      data-node-id="1:2"
    >
      {/* Content area with glassmorphism effect */}
      <div className="p-6 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-serif font-bold mb-2">
            <span className="bg-gradient-to-r from-navy-900 via-primary-600 to-navy-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent">
              Figma Component
            </span>
          </h3>
          <p className="text-navy-600 dark:text-navy-300">
            Converted from Figma design
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}