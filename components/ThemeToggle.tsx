"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-navy-800 rounded-lg">
        <div className="p-2"><Sun size={18} className="text-gray-400" /></div>
        <div className="p-2"><Moon size={18} className="text-gray-400" /></div>
        <div className="p-2"><Monitor size={18} className="text-gray-400" /></div>
      </div>
    );
  }

  return <ThemeToggleInner />;
}

function ThemeToggleInner() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
    { value: "system" as const, icon: Monitor, label: "System" },
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-navy-800 rounded-lg">
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={`relative p-2 rounded-md transition-colors ${
            theme === value
              ? "text-primary-600 dark:text-primary-400"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={label}
        >
          {theme === value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-white dark:bg-navy-700 rounded-md shadow-sm"
              transition={{ type: "spring", duration: 0.3 }}
            />
          )}
          <Icon size={18} className="relative z-10" />
        </motion.button>
      ))}
    </div>
  );
}
