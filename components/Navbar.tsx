"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userData } from "@/config/data";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-10`}>
      <div className={`mx-auto max-w-7xl flex items-center justify-between`}>
          <Link href="#home" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl group-hover:bg-secondary group-hover:rotate-12 transition-all">
              S
            </div>
            <span className="text-lg font-black font-heading text-primary tracking-[0.2em] hidden sm:block">
              {userData.site_title.replace("Portfolio of ", "").toUpperCase()}
            </span>
          </Link>

          {/* Desktop Nav Sleek */}
          <div className="hidden lg:flex items-center gap-12">
            {userData.navigation.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-xs font-black text-text-muted hover:text-primary transition-colors tracking-widest uppercase"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-8 py-3 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-secondary shadow-2xl active:scale-95"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Toggle Sleek */}
          <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <div className="flex flex-col gap-1.5"><div className="w-8 h-1 bg-primary"/><div className="w-5 h-1 bg-primary self-end"/></div>}
          </button>
      </div>

      {/* Mobile Menu Sleek */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl px-10 pt-32"
          >
            <div className="flex flex-col gap-10">
              {userData.navigation.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-5xl font-black text-primary hover:text-secondary transition-colors font-heading tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="h-px w-20 bg-primary/10 my-6" />
              <Link
                href="#contact"
                className="text-2xl font-black text-secondary uppercase tracking-widest font-heading"
                onClick={() => setIsOpen(false)}
              >
                Hire Me Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
