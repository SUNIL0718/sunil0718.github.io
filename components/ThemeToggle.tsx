"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors group overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-secondary"
            >
              <Moon size={20} fill="currentColor" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-yellow-500"
            >
              <Sun size={20} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full" />
    </button>
  );
}
