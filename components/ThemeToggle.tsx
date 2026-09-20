"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-[5.9rem] rounded-md border bg-muted" />;
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
    <div className="flex items-center rounded-md border bg-muted p-0.5">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          className={`relative flex h-7 w-7 items-center justify-center rounded-[0.3rem] transition ${
            theme === value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          title={label}
          aria-label={`Use ${label.toLowerCase()} theme`}
        >
          {theme === value && (
            <motion.span
              layoutId="theme-indicator"
              className="absolute inset-0 rounded-[0.3rem] border bg-background shadow-sm"
              transition={{ type: "spring", duration: 0.25 }}
            />
          )}
          <Icon size={14} className="relative" />
        </button>
      ))}
    </div>
  );
}
