"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userData } from "@/config/data";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className={`mx-auto max-w-7xl px-10 flex items-center justify-between`}>
          <Link href="#home" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-primary dark:bg-secondary flex items-center justify-center text-white dark:text-primary-foreground font-black text-xl group-hover:rotate-12 transition-all">
              S
            </div>
            <span className="text-lg font-black font-heading text-primary dark:text-white tracking-[0.2em] hidden sm:block">
              SUNIL
            </span>
          </Link>

          {/* Desktop Nav Sleek */}
          <div className="hidden lg:flex items-center gap-12">
            {userData.navigation.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-xs font-black text-text-muted dark:text-white/40 hover:text-primary dark:hover:text-secondary transition-colors tracking-widest uppercase"
              >
                {item.title}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-black/10 dark:bg-white/10 mx-2" />
            
            <ThemeToggle />

            <Link
              href="#contact"
              className="px-8 py-3 rounded-xl bg-primary dark:bg-secondary text-white dark:text-primary-foreground font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-2xl active:scale-95"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-6">
            <ThemeToggle />
            <button className="text-primary dark:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
      </div>

      {/* Mobile Menu Sleek */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-white dark:bg-background backdrop-blur-xl px-10 pt-32 overflow-hidden"
          >
            <div className="flex flex-col gap-8">
              {userData.navigation.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-4xl font-black text-primary dark:text-white hover:text-secondary transition-colors font-heading tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="h-px w-20 bg-primary/10 dark:bg-white/10 my-4" />
              <Link
                href="#contact"
                className="text-2xl font-black text-secondary uppercase tracking-widest font-heading"
                onClick={() => setIsOpen(false)}
              >
                Let's Collaborate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
